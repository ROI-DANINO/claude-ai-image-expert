# Higgsfield to LoRA Training: The Complete Integration Guide

## Overview

You've generated 40 detailed prompts using `/generate-dataset`. Now what? This guide bridges the gap between prompt generation and a production-ready character LoRA for Qwen-Image-Edit-2509.

**Complete Pipeline:**
```
Character Design → /generate-dataset → Higgsfield Generation → Dataset Prep → Qwen LoRA Training → Testing → Deployment
```

**Timeline:** 2-4 days from prompts to trained LoRA  
**Requirements:** Higgsfield Soul ID access, RunPod or local GPU (48GB+ VRAM)  
**Output:** Production-ready character LoRA with photorealistic results

---

## Part 1: Understanding Your Dataset Output

### What You Have

After running `/generate-dataset`, you have:
- **40 detailed prompts** organized by angle/framing
- **Distribution:** Front (30%), 3/4 (30%), Side (20%), Back/Over-shoulder (20%)
- **Diversity:** Multiple lighting conditions, outfits, backgrounds, expressions
- **Quality metrics:** All prompts verified for completeness and variety

### Dataset Structure Example

```
GRACE_40_PROMPT_DATASET/
├── DOMAIN 1: FRONT ANGLES (12 prompts)
│   ├── Prompt 1: Soft morning light, casual outfit, café
│   ├── Prompt 2: Golden hour, athletic wear, park
│   └── ...
├── DOMAIN 2: 3/4 ANGLES (12 prompts)
├── DOMAIN 3: SIDE PROFILES (8 prompts)
└── DOMAIN 4: BACK & OVER-SHOULDER (8 prompts)
```

###Key Characteristics

✅ **Expression diversity:** Happy (30%), Peaceful (25%), Confident (20%), Contemplative (15%), Playful (10%)  
✅ **Background variety:** 15+ unique settings (indoor/outdoor/neutral mix)  
✅ **Outfit changes:** 15+ different clothing combinations  
✅ **Lighting variety:** 8-10 different lighting conditions

---

## Part 2: Higgsfield Soul ID Generation

### Setup

1. **Access Higgsfield Soul ID:**
   - Platform: https://higgsfield.ai/soul-id (or your deployment)
   - Required: Account with generation credits
   - Model: Soul ID character generation engine

2. **Preparation:**
   - Have all 40 prompts ready (copy to clipboard-friendly format)
   - Decide on character trigger word (e.g., `grace_char`, `ohwx_woman`)
   - Prepare output folder structure

### Generation Strategy

**Recommended Approach:** Batch generation with quality control

```
Workflow:
1. Generate Domain 1 (12 front angles) → Review quality
2. If quality good → Continue with Domain 2
3. Generate Domains 2-4 (28 remaining)
4. Quality check: 10% manual review
5. Regenerate any low-quality images
```

### Generation Settings

**Higgsfield Soul ID Recommended:**
- **Resolution:** 1024×1024 (minimum for Qwen training)
- **Quality:** High/Maximum
- **Seed:** Varied (don't fix seed - want diversity)
- **Batch size:** 1-4 images at a time
- **Iterations:** 1 per prompt (regenerate if needed)

### Quality Checklist

For each generated image, verify:
- ✅ Face is consistent across all images
- ✅ No AI artifacts (extra fingers, deformed features)
- ✅ Good lighting (matches prompt)
- ✅ Sharp, in-focus
- ✅ No plastic/smooth skin (should look natural)
- ✅ Background matches prompt description
- ✅ Outfit/pose matches prompt

**Acceptable Regeneration Rate:** 5-10% (4-8 images need regeneration is normal)

---

## Part 3: Dataset Organization for LoRA Training

### Folder Structure

Based on Qwen training guide (see `02_qwen_training_guide.md`), organize as:

```
grace_lora_project/
├── dataset/
│   ├── 40_grace_char/              # Main character folder
│   │   ├── img_001.jpg             # Front angle, casual café
│   │   ├── img_001.txt             # Caption file
│   │   ├── img_002.jpg             # Front angle, athletic park
│   │   ├── img_002.txt
│   │   └── ... (70 nano banana images)
│   │
│   └── 20_grace_char_realbody/     # Body realism folder (optional enhancement)
│       ├── body_001.jpg            # Real body reference
│       ├── body_001.txt
│       └── ... (30 real body images)
│
├── models/                          # Output LoRAs
└── logs/                            # Training logs
```

**Folder Naming Convention:**
- `40_grace_char/` → 40 repeats per epoch
- `20_grace_char_realbody/` → 20 repeats per epoch

### File Naming

**Systematic naming:**
```
img_001.jpg → Front angle, prompt #1
img_002.jpg → Front angle, prompt #2
...
img_012.jpg → Front angle, prompt #12
img_013.jpg → 3/4 angle, prompt #1
...
img_040.jpg → Back/over-shoulder, prompt #8
```

**Keep a mapping file:** `prompt_mapping.txt`
```
img_001.jpg = DOMAIN 1, Prompt 1: Golden hour sunlight, grace_char wearing...
img_002.jpg = DOMAIN 1, Prompt 2: Natural window light, grace_char in...
...
```

---

## Part 4: Captioning Strategy

### Why Captioning Matters

Captions teach the LoRA:
- **What to learn:** Character identity (trigger word)
- **What to ignore:** Backgrounds, lighting, outfits (these should vary)
- **What to control:** Body type, posture, framing

### Captioning Approach: Edited from Prompts

**Start with your generation prompt, then edit:**

**Original Prompt (from /generate-dataset):**
```
Golden hour sunlight creating warm backlight, grace_char wearing soft beige cashmere sweater and high-waisted jeans, waist-up shot in modern minimalist café, warm wooden furniture and plants softly blurred in background, looking at camera with genuine warm smile, eyes bright and engaged, joyful content mood, shot on Canon EOS R5, 85mm f/1.8, natural bokeh, professional lifestyle photography
```

**Edited Caption (for .txt file):**
```
grace_char, waist-up shot, wearing beige sweater and jeans, modern café background, looking at camera with genuine smile, joyful mood, natural lighting
```

**What was removed:**
- ❌ Specific lighting details (golden hour, backlight) - too specific
- ❌ Technical camera details - not needed for training
- ❌ Detailed background description - LoRA shouldn't memorize backgrounds

**What was kept:**
- ✅ Trigger word (`grace_char`) - critical!
- ✅ Framing (`waist-up shot`)
- ✅ Outfit description - helps with variety
- ✅ General background type
- ✅ Expression and mood
- ✅ Pose description

### Automated Captioning Tool: Joy Caption

**Using Joy Caption Alpha Two:**

1. **Install & Run:**
   ```bash
   # Follow Joy Caption documentation
   python joy_caption.py --input_dir dataset/40_grace_char/ --output_format txt
   ```

2. **Manual Editing (Required!):**
   - Add trigger word to start of every caption
   - Remove character-specific features (hair color, eye color - these are fixed)
   - Keep clothing, background, pose descriptions
   - Simplify overly detailed descriptions

3. **Example Edit:**
   ```
   Joy Caption output:
   "A woman with long brown hair and blue eyes wearing a red dress..."
   
   Your edit:
   "grace_char wearing red dress, full body shot, urban street, confident pose, looking at camera"
   ```

### Caption Template

**Standard format:**
```
[trigger_word], [framing], [clothing], [background type], [expression], [pose/action]
```

**Examples by angle:**
```
Front: grace_char, close-up portrait, black turtleneck, indoor setting, serene expression, looking at camera

3/4: grace_char, half-body shot, wearing casual jeans and white shirt, outdoor park, playful smile, glancing over shoulder

Side: grace_char, profile view, athletic wear, gym environment, focused expression, side lighting

Back: grace_char, over-shoulder shot, flowing dress, beach background, looking back at camera, windswept hair
```

---

## Part 5: Qwen LoRA Training Configuration

### Training Parameters

Based on `02_qwen_training_guide.md`, use these community-tested parameters:

```yaml
# Ostris AI Toolkit configuration
network:
  type: "lora"
  linear: 16                    # Rank (sweet spot for Qwen character LoRA)
  linear_alpha: 16              # Match linear for stable training

optimizer:
  name: "adamw8bit"
  lr: 0.0002                    # 2e-4 - optimal for Qwen

training:
  steps: 2800                   # 70 images × 40 repeats
  epochs: 10                    # Standard for character
  batch_size: 1
  gradient_accumulation: 4      # Simulates batch_size 4

model:
  name_or_path: "Qwen/Qwen-Image-Edit-2509"
  quantize: true
  quantize_dtype: "int8"        # For 48GB VRAM
```

### Why These Numbers?

**Rank 16:**
- Qwen is 20B parameters - needs less complexity
- Lower rank = less risk of overfitting backgrounds
- Community consensus for character LoRAs

**Learning Rate 0.0002:**
- Qwen is more sensitive than FLUX/SDXL
- Lower LR prevents "frying" details
- Tested across 300+ community trainings

**10 Epochs:**
- Standard for character consistency
- Test checkpoints at epochs 5, 7, 9, 10
- Best result usually epoch 5-7

### Training Timeline

**On RunPod L40S (48GB VRAM):**
- Setup: 30 minutes (install dependencies, download model)
- Training: 4-6 hours (34,000 steps total)
- Testing: 1-2 hours (generate samples from each checkpoint)
- **Total:** 6-9 hours hands-on time

---

## Part 6: Training Execution

### Step-by-Step

**1. Setup RunPod Instance:**
```bash
# Choose: L40S (48GB) or A100 (80GB)
# Template: PyTorch 2.0+
# Storage: 100GB minimum
```

**2. Install Ostris AI Toolkit:**
```bash
git clone https://github.com/ostris/ai-toolkit.git
cd ai-toolkit
git submodule update --init --recursive

python -m venv venv
source venv/bin/activate

pip install torch==2.7.0 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
pip install -r requirements.txt
```

**3. Upload Dataset:**
```bash
# Use RunPod file manager or rsync
rsync -avz --progress dataset/ runpod:/workspace/ai-toolkit/dataset/
```

**4. Create Config File:**
```bash
# Copy template from 02_qwen_training_guide.md
# Modify paths and trigger word
nano config/train_grace_lora.yaml
```

**5. Start Training:**
```bash
python run.py config/train_grace_lora.yaml
```

**6. Monitor Progress:**
- Check loss curve (should decrease steadily)
- Review sample images (generated every epoch)
- Watch for red flags (see troubleshooting section)

### Monitoring Checklist

Every epoch, check:
- ✅ Loss is decreasing (not plateauing or spiking)
- ✅ Sample images show character consistency
- ✅ No extreme color saturation
- ✅ No identical repetitive outputs (sign of overfitting)
- ✅ VRAM usage stable (~40GB for 48GB GPU)

---

## Part 7: Testing & Validation

### Testing Strategy

**Test each saved checkpoint** (epochs 5, 6, 7, 8, 9, 10):

1. **Load in ComfyUI:**
   - Base model: Qwen-Image-Edit-2509
   - LoRA: grace_char_lora_epoch5.safetensors
   - LoRA strength: Start with 0.8

2. **Test Prompts (5 per checkpoint):**
   ```
   # Test 1: Basic consistency
   grace_char, portrait, smiling, soft lighting, high quality
   
   # Test 2: New outfit
   grace_char, full body, wearing red cocktail dress, elegant pose
   
   # Test 3: Different setting
   grace_char, outdoor, forest background, natural daylight, contemplative
   
   # Test 4: Action
   grace_char, dancing, dynamic movement, joyful expression
   
   # Test 5: Style variation
   grace_char, artistic portrait, dramatic lighting, cinematic mood
   ```

3. **Evaluate Each Result:**
   - Face consistency (90%+ match across generations)
   - Natural skin texture (no plastic look)
   - Follows prompt (new outfits/backgrounds work)
   - No artifacts at strength 0.7-1.0

### Quality Benchmarks

**Good LoRA should:**
- ✅ Consistent face across 10+ generations
- ✅ Works at LoRA strengths 0.6-1.0
- ✅ Adapts to new prompts (not just training poses)
- ✅ Natural skin texture (no plastic)
- ✅ Body proportions realistic
- ✅ Compatible with style LoRAs

**Common Issues & Fixes:**

| Issue | Cause | Solution |
|-------|-------|----------|
| Plastic skin | Insufficient variety | Use epoch 5-6 instead of 10 |
| Face drift | Inconsistent training images | Regenerate dataset with tighter consistency |
| Overfit | Too many epochs | Use epoch 5-7, lower LR next time |
| Underfit | Not enough training | Use epoch 10, or increase LR to 0.0003 |

---

## Part 8: Production Deployment

### Selecting Best Checkpoint

**Decision Matrix:**

```
Epoch 5: Usually good balance, slightly underfit
Epoch 6-7: Sweet spot for most characters
Epoch 8-9: High fidelity, risk of slight overfit
Epoch 10: Maximum training, check for overfit
```

**Test each with 20+ generations** across varied prompts.

### Documentation

Create a usage guide for your LoRA:

```markdown
# Grace Character LoRA v1.0

## Trigger Word
grace_char

## Recommended Settings
- LoRA Strength: 0.8-0.9
- Sampler: flowmatch
- Steps: 28
- Guidance: 3.5

## Example Prompts
[Include 5-10 tested prompts with images]

## Compatible Style LoRAs
- Boreal (strength 0.6-0.7)
- [Others you've tested]

## Known Limitations
- Works best for [use case]
- May need adjustment for [edge case]
```

### Sharing (Optional)

**Civitai Upload:**
- Model file: `grace_char_lora_epoch7.safetensors`
- Preview images: 10-15 varied examples
- Trigger word: Clearly documented
- Training info: Dataset size, parameters used

---

## Part 9: Iteration & Improvement

### When to Retrain

Consider retraining if:
- Face consistency <85%
- Plastic skin appearance
- Can't follow new prompts
- Artifacts at normal strengths

### Improvement Strategies

**For next version:**

1. **Dataset Quality:**
   - Increase to 100 images (70 nano + 30 body)
   - Add more diverse expressions
   - Include edge cases (profile, back views)

2. **Training Adjustments:**
   - Lower LR to 0.0001 (if overfit)
   - Reduce epochs to 8 (if overfit)
   - Increase rank to 32 (if underfit)

3. **Caption Refinement:**
   - More specific outfit descriptions
   - Better background tagging
   - Expression variety keywords

### Advanced: Multi-Outfit Training

To support multiple signature outfits:

```
# Add outfit tags to captions
grace_char, red_dress, evening wear, elegant
grace_char, casual_jeans, everyday look, relaxed
grace_char, business_suit, professional attire, confident
```

Train with 20-30 images per outfit.

---

## Part 10: Troubleshooting Reference

### Quick Diagnostics

**Problem: Plastic/AI-looking skin**
→ See `04_qwen_troubleshooting.md` Section: "Issue: Plastic/Artificial Skin"
→ Quick fix: Use earlier checkpoint (epoch 5-6), add more body realism images

**Problem: Face inconsistency**
→ See `04_qwen_troubleshooting.md` Section: "Issue: Face Inconsistency"
→ Quick fix: Regenerate Higgsfield images with tighter prompts, increase face closeups

**Problem: Background bleed**
→ See `04_qwen_troubleshooting.md` Section: "Issue: Background/Lighting Bleed"
→ Quick fix: Lower rank to 12, ensure diverse backgrounds in dataset

**Problem: Training crashes**
→ See `04_qwen_troubleshooting.md` Section: "Issue: Training Crashes/Errors"
→ Quick fix: Enable quantization int8, reduce batch size to 1

### Full Troubleshooting

Refer to `04_qwen_troubleshooting.md` for:
- Complete diagnostic checklists
- Step-by-step solutions
- Prevention strategies
- Community-tested fixes

---

## Part 11: Complete Workflow Checklist

### Phase 1: Generation (Day 1)
- [ ] Run `/generate-dataset` command
- [ ] Review 40 prompts for quality
- [ ] Generate images via Higgsfield Soul ID
- [ ] Quality check: Regenerate 5-10% if needed
- [ ] Organize into folder structure

### Phase 2: Preparation (Day 1-2)
- [ ] Create caption files (.txt)
- [ ] Edit captions (add trigger word, remove specifics)
- [ ] Verify all 40 pairs (image + caption)
- [ ] Optional: Add 30 real body images
- [ ] Upload to RunPod

### Phase 3: Training (Day 2)
- [ ] Setup Ostris AI Toolkit
- [ ] Create config file
- [ ] Start training (4-6 hours)
- [ ] Monitor progress (loss curve, samples)
- [ ] Save all checkpoints

### Phase 4: Testing (Day 3)
- [ ] Load each checkpoint in ComfyUI
- [ ] Generate 5 test images per checkpoint
- [ ] Evaluate quality metrics
- [ ] Select best checkpoint
- [ ] Generate 20+ varied examples

### Phase 5: Production (Day 4)
- [ ] Document usage (trigger, settings, examples)
- [ ] Test with style LoRAs
- [ ] Create preview images
- [ ] Optional: Upload to Civitai
- [ ] Archive training data

---

## Conclusion

This bridge connects the excellent `/generate-dataset` command to a complete, production-ready character LoRA training pipeline. By following this guide, you transform 40 prompts into a versatile, high-quality character LoRA in 2-4 days.

**Key Success Factors:**
1. Quality over quantity (40 excellent prompts >> 100 mediocre)
2. Diverse dataset (expressions, backgrounds, lighting)
3. Proper captioning (trigger word + variety)
4. Community-tested parameters (rank 16, LR 0.0002)
5. Checkpoint testing (epoch 5-7 usually best)

**Next Steps:**
- Use `/ai-expert` for detailed consultation
- Reference `02_qwen_training_guide.md` for training details
- Check `04_qwen_troubleshooting.md` when issues arise
- Iterate and improve based on results

**Estimated Value:** This workflow saves 10-20 hours per character LoRA by providing a tested, end-to-end pipeline.

---

**Version:** 1.0  
**Last Updated:** November 2025  
**Part of:** AI Image Generation Helper Agent System
