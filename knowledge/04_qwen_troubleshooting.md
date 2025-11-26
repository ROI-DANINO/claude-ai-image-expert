# Qwen LoRA Training - Troubleshooting Checklist

## Pre-Training Validation

### Dataset Verification
```
□ All 100 images present (70 nano + 30 body)
□ All images have matching .txt caption files
□ Nano banana images have NO artifacts/plastic skin
□ Real body images match character body type
□ No duplicate images
□ No low-resolution images (<1024px)
□ All files named correctly (no spaces/special chars)
```

### Caption Validation
```
□ Every caption starts with trigger word (maya_char)
□ Body images include "realistic_body" tag
□ No over-detailed captions (keep concise)
□ Captions describe what's IN the image
□ No contradictory descriptions
□ Trigger word is unique (not in base model vocab)
```

### Folder Structure
```
□ Correct folder names (40_maya_char / 20_maya_char_realbody)
□ Repeats numbers correct in folder names
□ All images inside correct folders
□ No extra files (backup images, etc)
□ Folder permissions correct (readable by training script)
```

### Configuration File
```
□ Correct model path (Qwen-Image-Edit-2509)
□ Dataset paths point to correct folders
□ Network rank = 16
□ Learning rate = 0.0002
□ Epochs = 10
□ Quantize = true, int8
□ Trigger word matches captions
□ Save path exists and is writable
```

---

## During Training Diagnostics

### First 100 Steps
```
□ Training starts without errors
□ Loss begins decreasing
□ VRAM usage stable (~40GB for 48GB GPU)
□ GPU utilization >90%
□ No CUDA out of memory errors
□ Checkpoint saving works
```

### After Epoch 1 (340 steps)
```
□ Loss decreased from starting point
□ Sample images show some character features
□ No extreme artifacts in samples
□ Checkpoint saved successfully
□ Training time ~25-35 min per epoch
```

### Mid-Training (Epoch 5)
```
□ Loss continues decreasing (not plateaued)
□ Sample images clearly show character
□ Face consistency visible
□ No color saturation issues
□ No identical repetitive outputs
```

### Loss Curve Analysis

**Good Training:**
```
Steps 0-500:    Loss 0.15 → 0.08  (rapid decrease)
Steps 500-1500: Loss 0.08 → 0.05  (steady decrease)
Steps 1500+:    Loss 0.05 → 0.03  (slow convergence)
```

**Problem Patterns:**
```
❌ Plateau early:     Loss stuck at 0.10 after 500 steps
   → Underfit: Increase LR or epochs

❌ Spike patterns:    Loss jumps up/down erratically
   → LR too high: Reduce to 0.0001

❌ No decrease:       Loss stays at 0.15+ throughout
   → Check dataset/captions/config

❌ Too fast:          Loss 0.15 → 0.01 in 200 steps
   → Overfit risk: Lower LR, reduce epochs
```

---

## Issue: Plastic/Artificial Skin

### Symptoms
- Skin looks smooth, unrealistic, CG-like
- No visible pores or texture
- Overly perfect complexion
- "Instagram filter" appearance

### Diagnosis Checklist
```
□ Check nano banana training images for artifacts
□ Count real body images (should be 30+)
□ Verify body images have visible skin texture
□ Check LoRA strength (might be too high)
□ Review which checkpoint being used
```

### Solutions (in order)
1. **Increase real body images:** 40-50 instead of 30
2. **Replace bad nano banana images:** Regenerate without artifacts
3. **Lower LoRA strength:** Try 0.7 instead of 0.9
4. **Test earlier checkpoint:** Epoch 5 instead of 10
5. **Retrain with adjusted ratio:** 60 nano / 40 body

### Prevention
- Generate nano banana at highest quality
- Use professional real body photos only
- Inspect every image before training
- Test samples throughout training

---

## Issue: Face Inconsistency

### Symptoms
- Face changes between generations
- Different eye colors/shapes
- Hair style varies unexpectedly
- Character not recognizable

### Diagnosis Checklist
```
□ Review nano banana face images (all same person?)
□ Count face closeups (should be 20+)
□ Check if nano used multiple face styles
□ Verify trigger word in prompts
□ Check LoRA strength (might be too low)
```

### Solutions
1. **Regenerate nano banana:** Ensure ALL images same face
2. **Increase face closeups:** 30+ portraits minimum
3. **Retrain with lower LR:** 0.0001 (more careful learning)
4. **Use later checkpoint:** Epoch 8-10 (more training)
5. **Check caption consistency:** Face features described same way

### Prevention
- Use same prompt structure for nano generation
- Keep nano banana settings consistent
- Generate all images in one batch if possible
- Manual review every face image

---

## Issue: Background/Lighting Bleed

### Symptoms
- Specific backgrounds appear in all generations
- Lighting style from training images persist
- Can't change scene/environment easily
- "Studio look" always present

### Diagnosis Checklist
```
□ Count unique backgrounds in dataset
□ Check network rank (should be 16, not 64+)
□ Review captions - backgrounds explicitly mentioned?
□ Check if most training images same setting
```

### Solutions
1. **Lower network rank:** 8-12 instead of 16
2. **Add background variety:** More diverse training images
3. **Explicit caption backgrounds:** "urban background", "indoor setting"
4. **Use negative prompts:** Specify unwanted backgrounds
5. **Retrain with varied dataset:** 50+ different backgrounds

### Prevention
- Vary backgrounds in nano generation
- Caption backgrounds explicitly
- Use appropriate network rank for complexity
- Test with different background prompts

---

## Issue: Overfit (Memorizing Training)

### Symptoms
- Generated images identical to training
- No variation in outputs
- Same poses/angles always
- Can't follow new prompts
- Same outfits/backgrounds always appear

### Diagnosis Checklist
```
□ Check which epoch checkpoint being used
□ Review loss curve - did it drop too fast?
□ Count unique poses in dataset
□ Check if epochs too high (>15)
□ Verify learning rate not too high
```

### Solutions
1. **Use earlier checkpoint:** Epoch 5-7 instead of 10
2. **Retrain with lower LR:** 0.0001 instead of 0.0002
3. **Reduce epochs:** 8 instead of 10
4. **Increase dataset variety:** More diverse images
5. **Enable caption dropout:** 0.1 rate in config

### Test for Overfit
Generate 10 images with prompts NOT in training:
```
✓ Pass: New poses/outfits/backgrounds work
✗ Fail: Always returns training-like images
```

### Prevention
- Don't train too many epochs
- Keep dataset varied
- Monitor samples throughout training
- Stop when loss plateaus

---

## Issue: Underfit (Not Learning Character)

### Symptoms
- Face doesn't look like character
- Generic/random outputs
- Trigger word has weak effect
- Looks like base model with slight variation

### Diagnosis Checklist
```
□ Verify trigger word in captions (every file?)
□ Check trigger word unique (not common word)
□ Count training images (100 minimum?)
□ Review learning rate (might be too low)
□ Check if trained enough epochs
□ Verify images high quality
```

### Solutions
1. **Increase learning rate:** 0.0003 instead of 0.0002
2. **Train more epochs:** 12-15 instead of 10
3. **Increase image quality:** Replace low-res images
4. **Add more training images:** 120-150 total
5. **Use later checkpoint:** Epoch 10 instead of 5

### Test for Underfit
Generate 5 images at LoRA strength 1.0:
```
✓ Pass: Clear character features visible
✗ Fail: Looks generic, could be anyone
```

### Prevention
- Start with 100+ high-quality images
- Verify trigger word consistency
- Use appropriate learning rate
- Train sufficient epochs

---

## Issue: Body Proportions Incorrect

### Symptoms
- Body too thin/thick compared to training
- Height incorrect
- Proportions don't match character
- Body and face seem from different people

### Diagnosis Checklist
```
□ Compare nano body images to real body images
□ Check if body types consistent
□ Count full-body nano images (should be 30+)
□ Review repeats ratio (should be 4:1 nano:body)
□ Check if conflicting body shapes in dataset
```

### Solutions
1. **Match body types:** Replace mismatched real body images
2. **Increase nano full-body:** 40+ full-body shots
3. **Adjust repeats ratio:** Try 5:1 or 6:1 (nano:body)
4. **Retrain with consistent dataset:** All same body type
5. **Use earlier checkpoint:** Less body influence

### Prevention
- Curate body images carefully (match type)
- More nano full-body than body parts
- Maintain consistent proportions across dataset
- Review all images before training

---

## Issue: Training Crashes/Errors

### CUDA Out of Memory
```
Symptoms: Training stops, CUDA error message
Solutions:
□ Enable quantization (int8)
□ Reduce batch size to 1
□ Enable gradient checkpointing
□ Lower cache_latents resolution
□ Reduce gradient accumulation
□ Close other GPU applications
```

### Invalid Configuration
```
Symptoms: Training won't start, config error
Check:
□ YAML syntax correct (no tabs, proper indents)
□ File paths exist and accessible
□ Model name correct (Qwen/Qwen-Image-Edit-2509)
□ Trigger word is string (in quotes)
□ Numbers are numbers (not strings)
```

### Missing Dependencies
```
Symptoms: Import errors, module not found
Solutions:
□ Activate venv: source venv/bin/activate
□ Reinstall: pip install -r requirements.txt
□ Update torch: pip install --upgrade torch
□ Check CUDA version matches torch
```

### Checkpoint Not Saving
```
Symptoms: No .safetensors files created
Check:
□ Output folder exists and writable
□ Sufficient disk space (50GB+ free)
□ save_every set correctly (340 for epoch 1)
□ No filesystem errors in logs
```

---

## Quality Assurance Tests

### Pre-Release Checklist
```
□ Test 5 checkpoints (epochs 5-10)
□ Generate 50+ test images total
□ Try 5 different LoRA strengths (0.6-1.0)
□ Test with 10 varied prompts
□ Verify face consistency (90%+ match)
□ Check body realism (no plastic)
□ Test pose variety (10+ different)
□ Try different styles/backgrounds
□ Combine with style LoRA successfully
□ No artifacts at normal strengths
```

### Performance Benchmarks
```
Target Metrics:
• Face Consistency: 95%+ across generations
• Body Realism: Natural skin texture visible
• Pose Flexibility: Works with 20+ different poses
• Style Compatibility: Works with 3+ style LoRAs
• Prompt Adherence: Follows 90%+ of instructions
• Strength Range: Usable from 0.6 to 1.0
• Generation Speed: <30sec per image
```

---

## Emergency Fixes

### Training Completely Failed
```
1. Verify dataset integrity:
   - All 100 images present
   - All captions present
   - No corrupted files

2. Test with minimal config:
   - 10 images only
   - 2 epochs
   - Default parameters
   - Verify training works

3. Build back up:
   - Gradually add images
   - Increase epochs
   - Adjust parameters
```

### Results Completely Unusable
```
1. Go back to basics:
   - Regenerate entire nano banana dataset
   - Verify face consistency manually
   - Recollect body images (exact match)
   - Recaption everything

2. Start fresh training:
   - Lower learning rate (0.0001)
   - Fewer epochs (5-8)
   - Monitor closely
   - Test each checkpoint
```

---

## Support Resources

### Log Analysis
Check training logs for:
- Loss values (should decrease)
- VRAM usage (should be stable)
- Step timing (should be consistent)
- Error messages (should be none)

### Community Help
When asking for help, provide:
- Full training config (yaml)
- Loss curve screenshot
- Sample generations (good and bad)
- System specs (GPU, VRAM)
- Dataset size and composition

### Self-Debugging
Before asking:
1. Read error message carefully
2. Check configuration against this guide
3. Verify dataset quality manually
4. Test with default parameters
5. Review community examples

---

**Remember:** Most issues are dataset quality problems. Fix the dataset, not the parameters.