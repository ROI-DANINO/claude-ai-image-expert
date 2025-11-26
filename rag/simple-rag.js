#!/usr/bin/env node

/**
 * Simple RAG System for AI Image Generation Knowledge Base
 * Uses @xenova/transformers for local embedding generation
 * Implements semantic search with cosine similarity
 */

const fs = require('fs');
const path = require('path');
const { pipeline } = require('@xenova/transformers');

const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');
const CACHE_FILE = path.join(__dirname, 'embeddings-cache.json');
const CONFIG_FILE = path.join(__dirname, 'config.json');

// Default configuration
const DEFAULT_CONFIG = {
  model: 'Xenova/all-MiniLM-L6-v2',
  chunkSize: 500,  // characters
  chunkOverlap: 50,
  topK: 3
};

class SimpleRAG {
  constructor(config = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.embedder = null;
    this.index = { chunks: [], embeddings: [] };
  }

  async initialize() {
    console.log('Initializing embedding model...');
    this.embedder = await pipeline('feature-extraction', this.config.model);
    console.log('✅ Model loaded');
  }

  /**
   * Chunk a document into smaller pieces with section awareness
   */
  chunkDocument(content, sourceFile) {
    const chunks = [];
    const lines = content.split('\n');
    
    let currentChunk = '';
    let currentSection = '';
    let lineStart = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Detect section headers (markdown headers)
      if (line.match(/^#{1,6}\s/)) {
        // Save previous chunk if it exists
        if (currentChunk.trim()) {
          chunks.push({
            content: currentChunk.trim(),
            source: sourceFile,
            section: currentSection,
            line_start: lineStart,
            line_end: i
          });
        }
        currentSection = line.replace(/^#{1,6}\s/, '').trim();
        currentChunk = '';
        lineStart = i + 1;
      }
      
      currentChunk += line + '\n';
      
      // Check if chunk size exceeded
      if (currentChunk.length > this.config.chunkSize) {
        chunks.push({
          content: currentChunk.trim(),
          source: sourceFile,
          section: currentSection,
          line_start: lineStart,
          line_end: i + 1
        });
        
        // Create overlap for next chunk
        const overlap = currentChunk.slice(-this.config.chunkOverlap);
        currentChunk = overlap;
        lineStart = i + 1 - Math.ceil(overlap.split('\n').length);
      }
    }
    
    // Add final chunk
    if (currentChunk.trim()) {
      chunks.push({
        content: currentChunk.trim(),
        source: sourceFile,
        section: currentSection,
        line_start: lineStart,
        line_end: lines.length
      });
    }
    
    return chunks;
  }

  /**
   * Generate embedding for text
   */
  async generateEmbedding(text) {
    const output = await this.embedder(text, {
      pooling: 'mean',
      normalize: true
    });
    return Array.from(output.data);
  }

  /**
   * Build index from knowledge base
   */
  async buildIndex() {
    console.log('Building knowledge base index...');
    
    const files = fs.readdirSync(KNOWLEDGE_DIR)
      .filter(f => f.endsWith('.md'))
      .sort();
    
    let totalChunks = 0;
    
    for (const file of files) {
      console.log(`Processing: ${file}`);
      const content = fs.readFileSync(path.join(KNOWLEDGE_DIR, file), 'utf-8');
      const chunks = this.chunkDocument(content, file);
      
      console.log(`  - ${chunks.length} chunks`);
      
      for (const chunk of chunks) {
        const embedding = await this.generateEmbedding(chunk.content);
        this.index.chunks.push(chunk);
        this.index.embeddings.push(embedding);
        totalChunks++;
      }
    }
    
    console.log(`\n✅ Index built: ${totalChunks} total chunks from ${files.length} files`);
  }

  /**
   * Calculate cosine similarity
   */
  cosineSimilarity(a, b) {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magA * magB);
  }

  /**
   * Search for relevant chunks
   */
  async search(query, topK = null) {
    topK = topK || this.config.topK;
    
    console.log(`Searching for: "${query}"`);
    const queryEmbedding = await this.generateEmbedding(query);
    
    // Calculate similarities
    const results = this.index.chunks.map((chunk, i) => ({
      ...chunk,
      score: this.cosineSimilarity(queryEmbedding, this.index.embeddings[i])
    }));
    
    // Sort by score and return top K
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, topK);
  }

  /**
   * Save index to cache
   */
  saveCache() {
    console.log('Saving index to cache...');
    fs.writeFileSync(CACHE_FILE, JSON.stringify(this.index, null, 2));
    console.log(`✅ Cache saved: ${CACHE_FILE}`);
  }

  /**
   * Load index from cache
   */
  loadCache() {
    if (!fs.existsSync(CACHE_FILE)) {
      throw new Error('Cache file not found. Run build-index first.');
    }
    console.log('Loading index from cache...');
    this.index = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
    console.log(`✅ Loaded ${this.index.chunks.length} chunks from cache`);
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  const rag = new SimpleRAG();
  
  if (command === 'build-index') {
    console.log('=== Building Knowledge Base Index ===\n');
    await rag.initialize();
    await rag.buildIndex();
    rag.saveCache();
    console.log('\n✅ Index built and cached successfully!');
    
  } else if (command === 'search') {
    const query = args.slice(1).join(' ');
    if (!query) {
      console.error('Error: Please provide a search query');
      console.log('Usage: node simple-rag.js search "your query here"');
      process.exit(1);
    }
    
    await rag.initialize();
    rag.loadCache();
    const results = await rag.search(query);
    
    console.log(`\n📚 Top ${results.length} Results:\n`);
    results.forEach((result, i) => {
      console.log(`[${i + 1}] Source: ${result.source} | Score: ${result.score.toFixed(3)}`);
      console.log(`    Section: ${result.section}`);
      console.log(`    Lines: ${result.line_start}-${result.line_end}`);
      console.log(`    Preview: ${result.content.substring(0, 150)}...`);
      console.log('');
    });
    
  } else {
    console.log('Simple RAG System for AI Image Generation Knowledge Base');
    console.log('');
    console.log('Commands:');
    console.log('  build-index     Build and cache embeddings for all knowledge files');
    console.log('  search "query"  Search the knowledge base');
    console.log('');
    console.log('Examples:');
    console.log('  node simple-rag.js build-index');
    console.log('  node simple-rag.js search "realistic skin texture"');
    console.log('  node simple-rag.js search "LoRA training parameters"');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { SimpleRAG };
