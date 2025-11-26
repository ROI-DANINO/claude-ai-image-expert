# Installation Guide - AI Image Generation Helper Agent

## Quick Install (Any Project)

From any project directory, run:

```bash
bash ~/work_station/claude/install.sh
```

This will:
- Create `.claude/commands/` if needed
- Symlink all 4 agent commands
- Make them available in Claude Code interface

## Manual Installation

If you prefer manual setup:

1. **Navigate to your project:**
   ```bash
   cd /path/to/your/project
   ```

2. **Create commands directory:**
   ```bash
   mkdir -p .claude/commands
   ```

3. **Link commands:**
   ```bash
   cd .claude/commands
   ln -s ~/work_station/claude/commands/ai-expert.md ./
   ln -s ~/work_station/claude/commands/prompt-expert.md ./
   ln -s ~/work_station/claude/commands/training-guide.md ./
   ln -s ~/work_station/claude/commands/troubleshoot.md ./
   ```

4. **Restart Claude Code** (if already open)

## Windows Alternative

If symlinks don't work on Windows:

```bash
# Copy commands instead of linking
cd .claude/commands
cp ~/work_station/claude/commands/*.md ./
```

**Note:** With copy method, you'll need to re-copy if commands are updated.

## Verify Installation

1. **Open Claude Code in your project**
2. **Type `/` to see slash commands**
3. **You should see:**
   - `/ai-expert`
   - `/prompt-expert`
   - `/training-guide`
   - `/troubleshoot`
   - Plus your existing commands

## Global Setup (One-Time)

The agent system is already installed globally at:
```
~/work_station/claude/
├── agent.md           # Main agent
├── knowledge/         # Knowledge base
├── rag/               # Search system
├── commands/          # Command wrappers
└── README.md          # Documentation
```

You only need to run the installation script **per project** to link the commands.

## Updating

If commands are updated:

**With symlinks (recommended):**
- Updates automatically propagate to all projects

**With copies:**
- Re-run copy command in each project

## Troubleshooting

### Commands not showing in Claude Code

1. **Check symlinks exist:**
   ```bash
   ls -la .claude/commands/
   ```

2. **Verify paths:**
   ```bash
   ls -la ~/work_station/claude/commands/
   ```

3. **Restart Claude Code**

### "Permission denied" errors

```bash
chmod +x ~/work_station/claude/install.sh
```

### Symlinks not supported

Use copy method instead (see Windows Alternative above)

## Uninstall (Per Project)

```bash
cd .claude/commands
rm ai-expert.md prompt-expert.md training-guide.md troubleshoot.md
```

This removes commands from that project only. Global system remains intact.

## Complete Uninstall

To remove the entire system:

```bash
rm -rf ~/work_station/claude
```

Then remove links from each project where installed.

---

**Next:** See `README.md` for usage instructions
