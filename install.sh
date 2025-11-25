#!/bin/bash
# AI Image Generation Helper - Project Installer
# Run this from any Claude Code project to add the commands

set -e

SCRIPT_DIR="$HOME/work_station/claude"

echo "═══════════════════════════════════════════════════════════"
echo "  AI Image Generation Helper - Command Installer"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Check if we're in a project with .claude/commands
if [ ! -d ".claude" ]; then
    echo "❌ Error: No .claude directory found"
    echo ""
    echo "You need to run this from a Claude Code project directory."
    echo "Current directory: $(pwd)"
    echo ""
    echo "Usage:"
    echo "  cd /path/to/your/project"
    echo "  bash ~/work_station/claude/install.sh"
    exit 1
fi

# Create commands directory if it doesn't exist
if [ ! -d ".claude/commands" ]; then
    echo "📁 Creating .claude/commands directory..."
    mkdir -p .claude/commands
fi

cd .claude/commands

echo "📦 Installing commands..."
echo ""

# Create symlinks
ln -sf "$SCRIPT_DIR/commands/ai-expert.md" ./ai-expert.md
echo "  ✅ /ai-expert        - Full expert consultation"

ln -sf "$SCRIPT_DIR/commands/prompt-expert.md" ./prompt-expert.md
echo "  ✅ /prompt-expert    - Quick prompting help"

ln -sf "$SCRIPT_DIR/commands/training-guide.md" ./training-guide.md
echo "  ✅ /training-guide   - LoRA workflow guide"

ln -sf "$SCRIPT_DIR/commands/troubleshoot.md" ./troubleshoot.md
echo "  ✅ /troubleshoot     - Diagnostic assistance"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  ✨ Installation Complete!"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "Test the commands in Claude Code:"
echo "  /ai-expert"
echo "  /prompt-expert"
echo ""
echo "View available commands:"
echo "  ls -la .claude/commands/"
echo ""
