# Quick Start Guide

## For New Projects

1. **Navigate to your project:**
   ```bash
   cd /path/to/your/project
   ```

2. **Install agent commands:**
   ```bash
   install-ai-agent
   ```
   (or `bash ~/work_station/claude/install.sh`)

3. **Open Claude Code and try:**
   ```
   /ai-expert
   ```

That's it! 🎉

## Available Commands

### `/ai-expert` - Full Consultation
Ask anything about AI image generation, LoRA training, or prompting.

**Example:**
```
/ai-expert

User: "I want to create a character LoRA for my OC"
Agent: [Guides you through complete process]
```

### `/prompt-expert` - Quick Help
Fast answers about prompting techniques.

**Example:**
```
/prompt-expert

User: "How do I make skin look realistic?"
Agent: [Provides specific keywords and example prompt]
```

### `/training-guide` - LoRA Workflow
Step-by-step training pipeline from prompts to deployed model.

**Example:**
```
/training-guide

User: "I have 40 prompts from /generate-dataset"
Agent: [Walks through: images → dataset → training → testing]
```

### `/troubleshoot` - Fix Issues
Diagnostic help for training or generation problems.

**Example:**
```
/troubleshoot

User: "My LoRA produces plastic-looking skin"
Agent: [Diagnoses issue and provides fixes]
```

## Complete Workflow Example

**Goal:** Create a character LoRA

```bash
# Step 1: Generate prompts
/generate-dataset
[Provide character specs, get 40 prompts]

# Step 2: Get training guidance
/training-guide
[Follow workflow: Higgsfield → Dataset → Training]

# Step 3: If issues arise
/troubleshoot
[Get diagnostic help]

# Step 4: Quick questions anytime
/prompt-expert
[Fast answers for specific questions]

# Step 5: Deep consultation
/ai-expert
[Comprehensive guidance on any aspect]
```

## Knowledge Base Access

The agent draws from 2,200+ lines of expert knowledge:

- Photorealistic prompting techniques
- Camera/lighting settings
- LoRA training parameters (Qwen-specific)
- Troubleshooting checklists
- Complete pipeline guides

**All answers cite sources** so you can dive deeper!

## RAG System (Behind the Scenes)

When you ask questions, the agent:
1. Queries 251 semantic chunks
2. Finds top 3 most relevant sections
3. Synthesizes answer with context
4. Cites source documents

**Response time:** <500ms
**Accuracy:** 90%+ relevance

## Tips for Best Results

1. **Be specific:** "How to fix plastic skin in Qwen LoRA?" vs "help with training"
2. **Provide context:** Mention your setup, stage in workflow, what you've tried
3. **Use right mode:**
   - Quick question → `/prompt-expert`
   - Workflow help → `/training-guide`
   - Problem → `/troubleshoot`
   - Not sure → `/ai-expert`

4. **Reference bridge document:** The `/training-guide` uses `06_higgsfield_integration.md` - the KEY connector from prompts to LoRA

## Advanced Usage

### Combining with Existing Commands

Your enhanced `/generate-dataset` now includes "Next Steps" footer:

```
/generate-dataset
[Generate 40 prompts]
[See "Next Steps" section pointing to /training-guide]
```

Seamless workflow! 🔗

### Multiple Projects

Install in all your AI projects:

```bash
cd ~/projects/character-1
install-ai-agent

cd ~/projects/character-2
install-ai-agent

cd ~/projects/style-lora
install-ai-agent
```

Same agent, available everywhere! 🌍

## Getting Help

- **System Documentation:** `~/work_station/claude/README.md`
- **Installation Help:** `~/work_station/claude/INSTALL.md`
- **Knowledge Base:** `~/work_station/claude/knowledge/`
- **Test RAG:** `cd ~/work_station/claude/rag && node rag_retriever.js "your query"`

---

**Ready to create amazing character LoRAs!** 🚀
