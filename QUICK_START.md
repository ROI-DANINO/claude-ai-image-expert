# Quick Start - AI Image Generation Helper

## What You Have

Your AI expert system lives in `~/work_station/claude/` and can be used in two ways:

### 1. RAG Search (Works Anywhere)

Query the knowledge base from **any directory**:

```bash
cd ~/work_station/claude/rag
node rag_retriever.js "your question"

# Examples:
node rag_retriever.js "realistic skin texture"
node rag_retriever.js "LoRA training parameters"
node rag_retriever.js "troubleshoot plastic skin"
```

**No Claude Code needed!** This works from terminal anywhere.

### 2. Claude Code Commands (Requires Setup Per Project)

The `/ai-expert`, `/prompt-expert` commands work **inside Claude Code** but need to be installed in each project.

## Installing Commands in a New Project

### Method 1: Use the Installer (Recommended)

```bash
# Navigate to your project
cd /path/to/your/project

# Run the installer
bash ~/work_station/claude/install.sh
```

Done! Commands are now available in that project.

### Method 2: Manual Symlinks

```bash
cd /path/to/your/project/.claude/commands

ln -s ~/work_station/claude/commands/ai-expert.md ./
ln -s ~/work_station/claude/commands/prompt-expert.md ./
ln -s ~/work_station/claude/commands/training-guide.md ./
ln -s ~/work_station/claude/commands/troubleshoot.md ./
```

## Already Installed In

✅ **gracelora project** - Commands ready to use

## How It Works

```
~/work_station/claude/           ← System lives here (global)
    ↓
Your Project/.claude/commands/   ← Symlinks point here
    ↓
Claude Code reads commands       ← You use them here
```

The files stay in one place (`~/work_station/claude/`), but each project gets symlinks to access them.

## Why This Design?

✅ **One source of truth** - Update once, all projects get the update  
✅ **Per-project control** - Choose which projects have the commands  
✅ **Easy updates** - Edit `~/work_station/claude/`, all projects benefit  
✅ **No duplication** - Commands aren't copied, just linked

## Making Updates

When you edit the system:

```bash
nano ~/work_station/claude/agent.md              # Edit agent behavior
nano ~/work_station/claude/knowledge/02_*.md     # Edit knowledge
cd ~/work_station/claude/rag && node simple-rag.js build-index  # Rebuild search
```

**All projects automatically get the updates** (because they symlink to the same files).

## Quick Reference

| Action | Command |
|--------|---------|
| Install in new project | `bash ~/work_station/claude/install.sh` |
| Test RAG search | `node ~/work_station/claude/rag/rag_retriever.js "query"` |
| Read knowledge | `cat ~/work_station/claude/knowledge/*.md` |
| Edit agent | `nano ~/work_station/claude/agent.md` |
| Add knowledge | `nano ~/work_station/claude/knowledge/07_new.md` |
| Rebuild index | `cd ~/work_station/claude/rag && node simple-rag.js build-index` |

## Files at ~/work_station/claude/

```
~/work_station/claude/
├── install.sh              ← Run this from projects to add commands
├── QUICK_START.md         ← This file
├── USER_GUIDE.md          ← Complete usage guide
├── README.md              ← Full documentation
├── agent.md               ← The expert agent
├── knowledge/             ← 6 knowledge documents
├── rag/                   ← Semantic search system
└── commands/              ← 4 command files (symlink these)
```

## Next Steps

1. **Test RAG search:** `node ~/work_station/claude/rag/rag_retriever.js "test"`
2. **Install in a project:** `cd your-project && bash ~/work_station/claude/install.sh`
3. **Use commands:** `/ai-expert`, `/prompt-expert` in Claude Code
4. **Read full guide:** `cat ~/work_station/claude/USER_GUIDE.md`

---

**Your AI expert is ready to deploy to any project! 🚀**
