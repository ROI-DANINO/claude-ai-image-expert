# Qwen Character LoRA - Complete Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                      PHASE 1: DATASET CREATION                      │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────┐         ┌──────────────────────┐
│   Nano Banana Pro    │         │   Real Body Photos   │
│    (70 images)       │         │    (30 images)       │
└──────────┬───────────┘         └──────────┬───────────┘
           │                                 │
           ├─ 20 Face closeups              ├─ 10 Legs
           ├─ 30 Full body                  ├─ 10 Torso  
           └─ 20 Body variety               └─ 10 Full detail
           │                                 │
           │                                 │
           ▼                                 ▼
┌──────────────────────┐         ┌──────────────────────┐
│    Caption Files     │         │    Caption Files     │
│   (.txt per image)   │         │   (.txt per image)   │
└──────────┬───────────┘         └──────────┬───────────┘
           │                                 │
           │ maya_char, portrait...          │ maya_char, realistic_body...
           │                                 │
           ▼                                 ▼
┌────────────────────────────────────────────────────────────┐
│              FOLDER STRUCTURE                              │
│                                                            │
│  dataset/                                                  │
│  ├── 40_maya_char/           (70 imgs × 40 repeats)       │
│  │   ├── img001.jpg                                       │
│  │   ├── img001.txt                                       │
│  │   └── ...                                              │
│  └── 20_maya_char_realbody/  (30 imgs × 20 repeats)       │
│      ├── body001.jpg                                      │
│      ├── body001.txt                                      │
│      └── ...                                              │
└────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                    PHASE 2: CONFIGURATION                           │
└─────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│             train_qwen_character.yaml                      │
│                                                            │
│  • Network: LoRA rank 16, alpha 16                        │
│  • Learning Rate: 0.0002                                  │
│  • Optimizer: adamw8bit                                   │
│  • Epochs: 10                                             │
│  • Total Steps: 3,400                                     │
│  • Quantization: int8                                     │
│  • EMA: enabled (0.999 decay)                            │
└────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                      PHASE 3: TRAINING                              │
└─────────────────────────────────────────────────────────────────────┘

           ┌─────────────────────────────┐
           │   Ostris AI Toolkit         │
           │   Training Engine           │
           └──────────┬──────────────────┘
                      │
                      │ Processes:
                      │ • Loads Qwen-Image-Edit-2509
                      │ • Quantizes to int8
                      │ • Caches latents to disk
                      │ • Applies LoRA training
                      ▼
           ┌──────────────────────────────┐
           │  Training Progress           │
           │                              │
           │  Epoch 1 → Save checkpoint   │
           │  Epoch 2 → Save checkpoint   │
           │  Epoch 3 → Save checkpoint   │
           │  ...                         │
           │  Epoch 10 → Final model      │
           └──────────┬───────────────────┘
                      │
                      ▼
           ┌──────────────────────────────┐
           │  10 Checkpoint Files         │
           │  (.safetensors)              │
           │                              │
           │  Best usually: Epoch 5-7     │
           └──────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                   PHASE 4: TESTING & SELECTION                      │
└─────────────────────────────────────────────────────────────────────┘

           ┌──────────────────────────────┐
           │  Test Each Checkpoint        │
           │                              │
           │  Load in ComfyUI             │
           │  Generate 10+ test images    │
           │  Check consistency           │
           └──────────┬───────────────────┘
                      │
                      ▼
           ┌──────────────────────────────┐
           │  Quality Metrics             │
           │                              │
           │  ✓ Face consistency          │
           │  ✓ Body realism              │
           │  ✓ No plastic skin           │
           │  ✓ Follows new prompts       │
           │  ✓ Works at 0.6-1.0 strength │
           └──────────┬───────────────────┘
                      │
                      ▼
           ┌──────────────────────────────┐
           │  Select Best Checkpoint      │
           │  (usually epoch 5-7)         │
           └──────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                    PHASE 5: PRODUCTION USE                          │
└─────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│                      ComfyUI Workflow                      │
│                                                            │
│  1. Load Checkpoint: Qwen-Image-Edit-2509                 │
│  2. Load LoRA: maya_char_lora_epoch7.safetensors          │
│  3. Set LoRA Strength: 0.8-0.9                            │
│                                                            │
│  Prompts:                                                  │
│  • Character: maya_char, portrait, high quality           │
│  • Body realism: maya_char, realistic_body, photorealistic│
│                                                            │
│  Optional: Combine with style LoRA (Boreal, etc)          │
│  Load order: Style (0.6-0.8) → Character (0.8-1.0)        │
└────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│                       KEY SUCCESS FACTORS                           │
└─────────────────────────────────────────────────────────────────────┘

1. Dataset Quality
   ├─ Nano banana: No artifacts, consistent face
   ├─ Real body: Matches character body type
   └─ Total: 100 high-quality images minimum

2. Proper Ratio
   ├─ 70:30 (character:body)
   └─ 4:1 repeats (2800:600 steps)

3. Correct Parameters
   ├─ Rank 16 (not too high)
   ├─ LR 0.0002 (not too fast)
   └─ 10 epochs (not too many)

4. Testing Strategy
   ├─ Test checkpoints 5-10
   ├─ Try strengths 0.6-1.0
   └─ Generate 10+ per test

5. NO Regularization
   └─ Two-folder strategy is sufficient


┌─────────────────────────────────────────────────────────────────────┐
│                     TROUBLESHOOTING FLOW                            │
└─────────────────────────────────────────────────────────────────────┘

Problem: Plastic Skin
    └─> Solution: ↑ Real body images (40-50)
                  Lower LoRA strength (0.7)

Problem: Face Inconsistency  
    └─> Solution: ↑ Nano portraits (30+)
                  Regenerate nano images

Problem: Overfit
    └─> Solution: Use earlier checkpoint (5-7)
                  Lower LR next training

Problem: Underfit
    └─> Solution: ↑ LR to 0.0003
                  Train +2 epochs

Problem: Background Bleed
    └─> Solution: Lower rank (8-12)
                  Vary backgrounds more


┌─────────────────────────────────────────────────────────────────────┐
│                         TIME ESTIMATES                              │
└─────────────────────────────────────────────────────────────────────┘

Dataset Creation:      2-4 hours
  ├─ Nano generation:  1-2 hours (70 images)
  ├─ Body collection:  30-60 min
  └─ Captioning:       1-2 hours

Training (L40S 48GB): 4-6 hours
  └─ 3,400 steps × 10 epochs = 34,000 steps total

Testing & Selection:   1-2 hours
  └─ 10 checkpoints × 10 test images each

Total Project Time:    7-12 hours (first time)
                      4-6 hours (experienced)


┌─────────────────────────────────────────────────────────────────────┐
│                    EXPECTED RESULTS                                 │
└─────────────────────────────────────────────────────────────────────┘

✓ 95%+ face consistency across generations
✓ Natural, realistic skin texture (no plastic)
✓ Works with multiple poses not in training
✓ Adapts to different lighting/backgrounds
✓ Compatible with style LoRAs (Boreal, etc)
✓ Stable at LoRA strengths 0.6-1.0
✓ Follows new prompts effectively
✓ Body proportions anatomically correct

Target: Production-ready character LoRA for professional use
```

**Notes:**
- This is a complete end-to-end workflow
- Each phase builds on the previous
- Quality control at every step is critical
- Community-tested parameters ensure success

**Version:** 1.0 | **Author:** Training guide for Roi's project