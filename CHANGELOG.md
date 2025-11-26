# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-25

### Added

- 🎉 **Initial Release**
- Expert AI agent for photorealistic image generation and LoRA training
- RAG-powered semantic search with @xenova/transformers
- 6 comprehensive knowledge documents (2,205+ lines)
- 4 operational modes:
  - `/ai-expert` - Full consultation
  - `/prompt-expert` - Quick prompting help
  - `/training-guide` - LoRA workflow
  - `/troubleshoot` - Diagnostic assistance
- Knowledge base covering:
  - Photorealistic prompting techniques
  - Qwen-Image-Edit-2509 LoRA training
  - Quick reference guide
  - Troubleshooting checklist
  - Workflow diagrams
  - **Higgsfield integration bridge document** (critical innovation)
- RAG system features:
  - 251 searchable chunks
  - Sub-500ms query time
  - Hierarchical chunking
  - Offline operation
- Easy installation script (`install.sh`)
- Comprehensive documentation:
  - README.md
  - USER_GUIDE.md
  - QUICK_START.md
  - CONTRIBUTING.md
- CLI tools:
  - `rag_retriever.js` - Direct knowledge search
  - `simple-rag.js` - Index building

### Technical Details

- **RAG Model:** Xenova/all-MiniLM-L6-v2 (384-dim)
- **Chunk Size:** 500 characters with 50 char overlap
- **Search Method:** Cosine similarity
- **Node.js:** 16+ required
- **Dependencies:** @xenova/transformers, commander, chalk

### Known Limitations

- Photorealistic guide partially translated (Hebrew → English, needs completion)
- Currently supports Qwen-Image-Edit-2509 primarily (FLUX, SDXL guides coming)
- Commands require Claude Code (not standalone)

## [Unreleased]

### Planned Features

- Complete photorealistic guide translation
- FLUX-specific training guide
- SDXL advanced techniques documentation
- Web UI for RAG search
- Multi-language support
- Video tutorial series
- Community knowledge contribution system

---

## Version History

- **v1.0.0** - Initial public release with core functionality

[1.0.0]: https://github.com/YOUR_USERNAME/claude-ai-image-helper/releases/tag/v1.0.0
[Unreleased]: https://github.com/YOUR_USERNAME/claude-ai-image-helper/compare/v1.0.0...HEAD
