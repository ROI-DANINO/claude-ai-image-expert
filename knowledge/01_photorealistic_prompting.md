# The Comprehensive Guide to Writing Photorealistic Prompts and LoRA Training

> Central document for collecting information about creating AI photorealistic images, prompt writing, dataset preparation, and character LoRA training
>
> **Last updated:** November 2025
> **Supported models:** Stable Diffusion, SDXL, Flux, Qwen-Image

---

## Table of Contents

### [1. Basic Principles for Photorealism](#1-basic-principles-for-photorealism)
- [1.1 Essential Keywords](#11-essential-keywords)
- [1.2 Camera and Technical Settings](#12-camera-and-technical-settings)
- [1.3 Resolution and Quality](#13-resolution-and-quality)

### [2. Skin Imperfections and Natural Texture](#2-skin-imperfections-and-natural-texture)
- [2.1 The Problem: Plastic Skin](#21-the-problem-plastic-skin)
- [2.2 Recommended Solutions](#22-recommended-solutions)
- [2.3 Detail Levels](#23-detail-levels)

### [3. Lighting - Foundations of Realism](#3-lighting-foundations-of-realism)
- [3.1 Basic Lighting Types](#31-basic-lighting-types)
- [3.2 Advanced Concepts](#32-advanced-concepts)
- [3.3 Lighting Examples](#33-lighting-examples)

### [4. Optimal Prompt Structure](#4-optimal-prompt-structure)
- [4.1 The Basic Formula](#41-the-basic-formula)
- [4.2 Complete Examples](#42-complete-examples)
- [4.3 Negative Prompts](#43-negative-prompts)

### [5. Advanced Techniques](#5-advanced-techniques)
- [5.1 Subsurface Scattering](#51-subsurface-scattering)
- [5.2 Materials and Textures](#52-materials-and-textures)
- [5.3 Environment and Atmosphere](#53-environment-and-atmosphere)

### [6. Preparing Dataset for LoRA Training](#6-preparing-dataset-for-lora-training)
- [6.1 Image Quantity and Quality](#61-image-quantity-and-quality)
- [6.2 Variation Diversity](#62-variation-diversity)
- [6.3 Resolution and Technical Preparation](#63-resolution-and-technical-preparation)

### [7. Captioning - Image Tagging](#7-captioning-image-tagging)
- [7.1 Natural Language vs Booru Tags](#71-natural-language-vs-booru-tags)
- [7.2 Joy Caption](#72-joy-caption)
- [7.3 Recommended Tagging Rules](#73-recommended-tagging-rules)

### [8. LoRA Training Parameters](#8-lora-training-parameters)
- [8.1 Basic Parameters](#81-basic-parameters)
- [8.2 Optimizer and Settings](#82-optimizer-and-settings)
- [8.3 Epochs and Repeats](#83-epochs-and-repeats)

### [9. Qwen-Image Specific](#9-qwen-image-specific)
- [9.1 Prompt Structure](#91-prompt-structure)
- [9.2 Strengths and Limitations](#92-strengths-and-limitations)
- [9.3 Magic Suffixes](#93-magic-suffixes)

### [10. Community Lessons](#10-community-lessons)
- [10.1 What Works](#101-what-works)
- [10.2 What Doesn't Work](#102-what-doesnt-work)
- [10.3 Advanced Tips](#103-advanced-tips)

###[11. Practical Examples](#11-practical-examples)

### [12. Resources and References](#12-resources-and-references)

---

## 1. Basic Principles for Photorealism

### 1.1 Essential Keywords

**Core keywords for every photorealistic prompt:**

photorealistic
hyper-realistic
ultra-realistic
8K UHD
ultra HD
4K resolution
high resolution
professional photography
cinematic composition

**Important principle:** These keywords signal to the model that you want a **photographic image**, not art or illustration.

### 1.2 Camera and Technical Settings

Recommended camera table for prompts:

| Camera Body | Recommended Use | Character |
|------------|----------------|----------|
| Canon EOS R5 | Professional portraits | Luxury, sharp |
| Sony A7IV | General, video | Balanced, colorful |
| Canon 5D Mark IV | Events, portraits | Warm, classic |
| Arri Alexa | Cinematic | Dramatic, soft |
| DSLR (general) | General | Neutral |
| Nikon D850 | Nature, macro | Sharp, detailed |

**Lenses and their effects:**

| Lens | Effect | Use |
|------|--------|-----|
| 50mm f/1.8 | Natural, soft | General portrait |
| 85mm f/1.4 | Strong bokeh | Professional portrait |
| 35mm f/2.0 | Wide, natural | Scenes, street |
| 100mm macro | Extreme detail | Close-ups |
| 24mm wide-angle | Wide, dramatic | Landscape, architecture |

**Aperture:**
- f/1.4 - f/2.0 = Very shallow depth of field, strong bokeh
- f/2.8 = Shallow depth of field, balanced
- f/5.6 - f/8 = Balanced, good sharpness
- f/11+ = Large depth of field, everything in focus

**Example:**
shot on Canon EOS R5, 85mm lens, f/1.8 aperture, ISO 100, shallow depth of field, bokeh background

### 1.3 Resolution and Quality

**Keywords:**
- 8K resolution
- ultra-sharp focus
- high detail
- crisp details
- ultra-detailed
- HD quality
- RAW photo

**Important:** Using high resolution **in the model itself** is more important than writing resolution in the prompt.

---

This document continues with all sections translated from Hebrew...

