# AI Image Generation Helper - Quick Start Guide

## What We Built

A **globally-accessible AI expert system** that lives in `~/work_station/claude/` and helps you create photorealistic AI images and train character LoRAs.

### Core Components

```
~/work_station/claude/
├── agent.md              # The brain (expert agent prompt)
├── knowledge/            # 6 documents, 2,205+ lines of expertise
├── rag/                  # Semantic search engine
└── commands/             # 4 ways to use the agent
```

### What It Does

1. **Answers prompting questions** - "How do I make skin realistic?"
2. **Guides LoRA training** - Step-by-step from prompts to trained model
3. **Troubleshoots problems** - "My LoRA produces plastic skin"
4. **Provides expert consultation** - Deep dives on any topic

---

## How to Use It

### Commands Available

From any project with symlinks set up:

```bash
/ai-expert          # Full expert consultation (multi-turn)
/prompt-expert      # Quick prompting tips
/training-guide     # LoRA training workflow
/troubleshoot       # Fix issues
/generate-dataset   # Generate 40 prompts (now connects to training!)
```

### Usage Patterns

**Pattern 1: Creating a Character LoRA**
```bash
1. /generate-dataset           # Get 40 prompts
2. /training-guide             # Follow complete workflow
3. /troubleshoot               # If issues arise
```

**Pattern 2: Improving Prompts**
```bash
1. /prompt-expert              # Ask specific question
2. /ai-expert                  # Deep dive if needed
```

**Pattern 3: Fixing Problems**
```bash
1. /troubleshoot               # Describe issue
2. Follow diagnostic steps
3. /ai-expert if complex
```

### Testing the RAG System

The agent uses semantic search to find relevant information:

```bash
cd ~/work_station/claude/rag

# Test searches
node rag_retriever.js "realistic skin texture"
node rag_retriever.js "LoRA training parameters"
node rag_retriever.js "troubleshoot plastic skin"
```

---

## How to Upgrade & Customize

### Add New Knowledge

**Step 1:** Add markdown file to `knowledge/`
```bash
cp my_new_guide.md ~/work_station/claude/knowledge/07_my_guide.md
```

**Step 2:** Rebuild embeddings
```bash
cd ~/work_station/claude/rag
node simple-rag.js build-index
```

**Done!** Agent can now search your new document.

### Edit Existing Knowledge

**Step 1:** Edit the file
```bash
nano ~/work_station/claude/knowledge/02_qwen_training_guide.md
```

**Step 2:** Rebuild embeddings
```bash
cd ~/work_station/claude/rag
node simple-rag.js build-index
```

**That's it!** Changes are immediately searchable.

### Customize Agent Behavior

**Main agent prompt:**
```bash
nano ~/work_station/claude/agent.md
```

Edit:
- Communication style (line 90+)
- Knowledge retrieval protocol (line 50+)
- Quality standards (line 110+)
- Operational modes (line 30+)

Changes apply to ALL commands immediately (they all load this file).

### Customize Individual Commands

Edit specific command wrappers:
```bash
nano ~/work_station/claude/commands/ai-expert.md        # Full mode
nano ~/work_station/claude/commands/prompt-expert.md   # Quick mode
nano ~/work_station/claude/commands/training-guide.md  # Workflow mode
nano ~/work_station/claude/commands/troubleshoot.md    # Diagnostic mode
```

These control:
- Opening messages
- Mode-specific instructions
- Response structure

### Tune RAG Settings

**Config file:**
```bash
nano ~/work_station/claude/rag/config.json
```

Adjust:
```json
{
  "chunkSize": 500,      // Increase for larger chunks
  "chunkOverlap": 50,    // Overlap between chunks
  "topK": 3              // Number of results to return
}
```

After changes, rebuild index.

---

## Common Customizations

### Make Agent More Detailed

**Edit:** `~/work_station/claude/agent.md`

Change communication style section:
```markdown
**Be:**
- **Comprehensive:** Provide extensive detail
- **Technical:** Use precise terminology
- **Educational:** Always explain the why
```

### Add Domain-Specific Knowledge

**Example:** Adding FLUX-specific training guide

1. Create `~/work_station/claude/knowledge/07_flux_training.md`
2. Write your guide (any markdown format)
3. Rebuild: `node simple-rag.js build-index`
4. Test: `node rag_retriever.js "FLUX training"`

### Create New Command Mode

**Example:** Adding `/style-guide` command

1. Create `~/work_station/claude/commands/style-guide.md`
2. Copy structure from existing command
3. Define new mode behavior
4. Symlink to projects: `ln -s ~/work_station/claude/commands/style-guide.md ./.claude/commands/`

### Adjust Search Relevance

If searches return irrelevant results:

**Option 1:** Increase topK (get more results)
```json
"topK": 5  // Instead of 3
```

**Option 2:** Adjust chunk size
```json
"chunkSize": 300  // Smaller, more focused chunks
```

**Option 3:** Improve chunking strategy
Edit `simple-rag.js` line 40+ (chunkDocument function)

---

## Maintenance

### Update Knowledge Base

**When:** New best practices emerge, parameters change

**How:**
1. Edit relevant file in `knowledge/`
2. Run: `node simple-rag.js build-index`
3. Test with retriever

**Frequency:** As needed (weekly/monthly for active projects)

### Backup Your Work

**Important files:**
```bash
~/work_station/claude/knowledge/    # Your knowledge
~/work_station/claude/agent.md      # Agent customizations
~/work_station/claude/commands/     # Command customizations
```

**Backup command:**
```bash
tar -czf claude-agent-backup.tar.gz ~/work_station/claude/
```

### Performance Tuning

**If searches are slow:**
1. Check embeddings cache exists: `ls -lh rag/embeddings-cache.json`
2. First query downloads model (80MB, one-time)
3. Subsequent queries should be <500ms

**If index build is slow:**
- Normal: 2-3 minutes for 6 documents
- Scales linearly with document count

---

## Troubleshooting Guide

### Commands Not Found

**Check symlinks:**
```bash
ls -la ./.claude/commands/
```

**Should see:**
```
ai-expert.md -> /home/roking/work_station/claude/commands/ai-expert.md
```

**Fix:** Re-run symlink creation or copy files directly

### RAG Errors

**"Cache file not found"**
```bash
cd ~/work_station/claude/rag
node simple-rag.js build-index
```

**"Module not found"**
```bash
cd ~/work_station/claude/rag
npm install
```

### Agent Not Using Knowledge

**Check:** Agent should cite sources like "According to the Qwen training guide..."

**Fix:** Ensure RAG system is working:
```bash
node rag_retriever.js "test query"
```

If retriever works but agent doesn't cite, the agent needs explicit prompting to query the RAG system.

---

## Quick Reference

### File Locations

| What | Where |
|------|-------|
| Main agent | `~/work_station/claude/agent.md` |
| Knowledge | `~/work_station/claude/knowledge/*.md` |
| Commands | `~/work_station/claude/commands/*.md` |
| RAG config | `~/work_station/claude/rag/config.json` |
| Embeddings | `~/work_station/claude/rag/embeddings-cache.json` |
| README | `~/work_station/claude/README.md` |

### Key Commands

| Task | Command |
|------|---------|
| Rebuild embeddings | `cd ~/work_station/claude/rag && node simple-rag.js build-index` |
| Test RAG | `node rag_retriever.js "query"` |
| Add to project | `ln -s ~/work_station/claude/commands/*.md ./.claude/commands/` |
| Edit agent | `nano ~/work_station/claude/agent.md` |
| Edit knowledge | `nano ~/work_station/claude/knowledge/[file].md` |

### Workflow Checklist

**Adding New Knowledge:**
- [ ] Create/edit `.md` file in `knowledge/`
- [ ] Rebuild embeddings
- [ ] Test with retriever
- [ ] Verify agent can find it

**Creating New Command:**
- [ ] Create `.md` file in `commands/`
- [ ] Define mode and behavior
- [ ] Symlink to project
- [ ] Test in Claude Code

**Customizing Agent:**
- [ ] Edit `agent.md`
- [ ] Test with existing commands
- [ ] No rebuild needed (loads fresh each time)

---

## Advanced: System Architecture

### How It Works

```
User invokes command (/ai-expert)
    ↓
Command loads agent.md (sets mode)
    ↓
Agent receives user query
    ↓
Agent decides if knowledge needed
    ↓
Calls RAG system (semantic search)
    ↓
Receives relevant chunks (top 3)
    ↓
Synthesizes answer with sources
    ↓
Responds to user
```

### RAG Flow

```
Query → Generate embedding → Compare to cached embeddings
    ↓
Cosine similarity scores
    ↓
Rank results
    ↓
Return top K chunks with metadata
```

### Knowledge Organization

Documents are hierarchical:
- **Section-aware chunking** preserves context
- **Metadata includes:** source file, section name, line numbers
- **Searchable by:** semantic meaning, not just keywords

---

## Examples

### Example 1: Quick Question

**You:**
```
/prompt-expert
How do I make skin look realistic in prompts?
```

**Agent:**
- Queries RAG: "realistic skin texture photorealistic"
- Finds relevant sections from `01_photorealistic_prompting.md`
- Provides keywords, example prompt, cites source

### Example 2: Full Workflow

**You:**
```
/training-guide
I just generated 40 prompts, what's next?
```

**Agent:**
- Queries RAG: "higgsfield integration workflow"
- Loads `06_higgsfield_integration.md` (bridge document)
- Walks through 4-phase pipeline step-by-step

### Example 3: Troubleshooting

**You:**
```
/troubleshoot
My LoRA produces plastic-looking skin
```

**Agent:**
- Queries RAG: "plastic skin troubleshooting"
- Finds diagnostic checklist from `04_qwen_troubleshooting.md`
- Asks clarifying questions
- Provides tiered solutions

---

## Next Steps

**Immediate:**
1. Test commands: `/ai-expert`, `/prompt-expert`
2. Try RAG search: `node rag_retriever.js "your query"`
3. Read the bridge document: `cat knowledge/06_higgsfield_integration.md`

**Short-term:**
1. Use `/generate-dataset` → `/training-guide` workflow
2. Add your own knowledge documents
3. Customize agent behavior for your needs

**Long-term:**
1. Build library of domain-specific knowledge
2. Create custom command modes
3. Share with other projects via symlinks

---

**Version:** 1.0  
**System Status:** ✅ Fully Operational  
**Total Knowledge:** 2,205+ lines across 6 documents  
**RAG Index:** 251 chunks, ready for semantic search

🚀 **You now have a personal AI expert available globally across all your projects!**
