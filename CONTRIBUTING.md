# Contributing to AI Image Generation Helper

Thank you for your interest in contributing! 🎉

## Ways to Contribute

### 1. Knowledge Base Contributions

**Most Valuable!** Share your expertise:

- **Add new guides** (FLUX, SDXL, other models)
- **Improve existing documentation** (clarify, add examples)
- **Share best practices** from your experience
- **Add troubleshooting tips** for common issues

**Process:**
1. Create new `.md` file in `knowledge/` directory
2. Follow existing formatting conventions
3. Submit PR with description of what you're adding
4. We'll review and merge!

### 2. Code Contributions

**Areas:**
- Improve RAG search accuracy
- Add new operational modes
- Optimize performance
- Fix bugs

**Process:**
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear message
6. Push and create Pull Request

### 3. Bug Reports

Found a bug? Please report it!

**Good bug report includes:**
- Clear description of issue
- Steps to reproduce
- Expected vs actual behavior
- System info (OS, Node version, etc.)
- Error messages/logs if applicable

### 4. Feature Requests

Have an idea? We'd love to hear it!

**Good feature request includes:**
- Clear use case
- Why it would be valuable
- Suggested implementation (if you have ideas)

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/claude-ai-image-helper.git
cd claude-ai-image-helper

# Install dependencies
cd rag && npm install

# Build index
node simple-rag.js build-index

# Test RAG search
node rag_retriever.js "test query"
```

## Code Style

- **Markdown:** Follow existing formatting
- **JavaScript:** Use clear, readable code with comments
- **Consistency:** Match existing patterns

## Commit Messages

- Use clear, descriptive messages
- Start with verb (Add, Fix, Update, Improve)
- Examples:
  - `Add FLUX training guide`
  - `Fix RAG retrieval accuracy issue`
  - `Update troubleshooting checklist`

## Pull Request Process

1. Update documentation if needed
2. Test your changes
3. Describe what your PR does
4. Link related issues
5. Be responsive to feedback

## Knowledge Base Guidelines

When adding knowledge:

### Structure
```markdown
# Title

## Section 1
Content...

## Section 2
Content...
```

### Style
- Clear, actionable language
- Include examples
- Use tables for comparisons
- Add code blocks for configs/commands

### Quality
- Accurate information (cite sources if needed)
- Practical, tested advice
- Beginner-friendly when possible
- Technical precision when needed

## Testing

Before submitting:

```bash
# Test RAG search works
cd rag
node rag_retriever.js "query related to your changes"

# Verify knowledge base builds
node simple-rag.js build-index
# Should complete without errors

# Test in actual Claude Code project
bash install.sh
# Try the commands
```

## Community Guidelines

- Be respectful and constructive
- Help others learn
- Share your successes and failures
- Credit sources and contributors

## Questions?

- Open an issue with "Question:" prefix
- Start a discussion in GitHub Discussions
- Check existing issues/discussions first

## Recognition

Contributors will be:
- Added to README acknowledgments
- Credited in release notes
- Mentioned in documentation where relevant

---

**Thank you for helping make AI image generation more accessible!** 🙏

Every contribution, no matter how small, makes a difference.
