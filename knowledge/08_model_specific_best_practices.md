# Model-Specific Prompting Best Practices

> Optimized prompting strategies for different image generation models
>
> **Last updated:** November 2025
> **Models:** Nano Banana Pro (Gemini 3 Pro Image), Higgsfield Soul ID, Flux.2, Qwen Image Edit 2509
> **Purpose:** Tailor prompts to each model's strengths and optimal input format

---

## Table of Contents

1. [Nano Banana Pro (Gemini 3 Pro Image)](#1-nano-banana-pro-gemini-3-pro-image)
2. [Higgsfield Soul ID](#2-higgsfield-soul-id)
3. [Flux.2](#3-flux2)
4. [Qwen Image Edit 2509](#4-qwen-image-edit-2509)
5. [General Best Practices (Model Unspecified)](#5-general-best-practices-model-unspecified)
6. [Reference Image Workflows](#6-reference-image-workflows)

---

## 1. Nano Banana Pro (Gemini 3 Pro Image)

### Overview

**Full Name:** Google Gemini 3 Pro Image (codename: Nano Banana Pro)
**Release:** November 2025
**Key Strength:** Text rendering, concise prompt processing, search grounding

### Core Capabilities

- ✅ **Best-in-class text rendering:** Correctly renders legible text in images (short taglines or long paragraphs)
- ✅ **Multilingual support:** 95%+ accuracy for text rendering in Latin and Asian scripts
- ✅ **Search grounding:** Uses Google Search to verify facts and generate imagery based on real-time data
- ✅ **Multi-image composition:** Input up to 14 images into a composition

### Optimal Prompt Length

**Google DeepMind internal study (2025):**
> Prompts **under 25 words** achieve **30% higher accuracy** for composition than long, ambiguous paragraphs.

**Recommendation:** Keep prompts **concise and specific**.

---

### Prompt Structure

**Formula:**
```
[Subject + Adjectives] doing [Action] in [Location/Context]. [Composition/Camera Angle]. [Lighting/Atmosphere]. [Style/Media].
```

**Example:**
```
Young woman in red dress standing on city street. Medium shot, eye-level angle. Golden hour lighting. Cinematic photography.
```

**Breaking it down:**
- **Subject + Adjectives:** "Young woman in red dress"
- **Action:** "standing"
- **Location:** "on city street"
- **Composition:** "Medium shot, eye-level angle"
- **Lighting:** "Golden hour lighting"
- **Style:** "Cinematic photography"

---

### Best Practices

#### 1. Be Specific with Details

Include: subject, composition, action, location, and style.

**Good:**
```
Portrait of bearded man in leather jacket. Close-up shot. Dramatic side lighting. Film noir style.
```

**Bad:**
```
A nice portrait of a man looking cool.
```

#### 2. Refine with Camera Angles

Add camera angles, lighting, and factual constraints for diagrams.

**Example:**
```
Aerial view of modern city skyline at sunset. Wide angle. Warm orange light. Architectural photography.
```

#### 3. Leverage Text Rendering

Nano Banana Pro excels at text. Specify text content directly:

**Example:**
```
Coffee shop sign with text "BREW HOUSE" in vintage typography. Wooden background. Warm lighting. Rustic aesthetic.
```

**Text in scenes:**
```
Woman holding sign with text "HELLO WORLD". Studio portrait. Clean background. Professional lighting.
```

#### 4. Use Multilingual Text

Works excellently with non-English text:

**Example:**
```
Japanese storefront with neon sign "ラーメン" (ramen). Night scene. Neon glow. Cyberpunk aesthetic.
```

---

### What to Avoid

- ❌ **Long, rambling prompts** (over 30 words)
- ❌ **Vague descriptions** ("nice," "cool," "interesting")
- ❌ **Overly complex multi-clause sentences**
- ❌ **Negative prompts** (Gemini doesn't use traditional negative prompts)

---

### Example Prompts

**Portrait:**
```
Professional headshot of businesswoman. Navy blue suit. Neutral background. Soft studio lighting. Corporate photography.
```

**Landscape:**
```
Mountain lake at dawn. Misty atmosphere. Reflection on water. Wide panoramic shot. Nature photography.
```

**Product:**
```
Luxury watch on marble surface. Close-up macro. Dramatic lighting. High-end product photography.
```

**Text-Heavy:**
```
Book cover with title "The Future of AI". Modern minimalist design. Blue and white color scheme. Professional graphic design.
```

---

### Pro Tips

- **Search grounding:** For current events or factual content, Nano Banana Pro can verify via Google Search
- **Iteration:** Change one variable per generation to learn what impacts quality
- **Batch similar prompts:** Compare results to optimize your style
- **Text precision:** Specify exact text in quotes: `with text "COFFEE SHOP"`

---

## 2. Higgsfield Soul ID

### Overview

**Purpose:** Character consistency across multiple generations
**Training Time:** ~5 minutes with 10-20 images
**Cost:** ~$3 per training session
**Key Strength:** Maintaining visual identity while varying everything else

### What is Soul ID?

A personalization tool that trains a digital avatar based on your photos. It captures appearance, vibe, and styling preferences, then reuses this "soul" across scenes for visual continuity.

**The Promise:** Avoid "face drift" - get the same character every time.

---

### Training Your Soul ID

#### Dataset Requirements

**Optimal:** 10-20 well-lit images showing face from different angles

**Quality Checklist:**
- ✅ Clear, well-lit faces
- ✅ Different angles (front, 3/4, side)
- ✅ Variety of expressions
- ✅ High resolution (1024×1024 minimum)
- ✅ Consistent person across all images

**What to avoid:**
- ❌ Blurry or low-resolution images
- ❌ Heavy filters or editing
- ❌ Extreme lighting that obscures features
- ❌ Accessories that hide face (sunglasses, masks)

#### Training Process

1. Upload 10-20 photos
2. Wait ~5 minutes for training
3. Test with sample prompts
4. Iterate if needed (regenerate with better images)

---

### Prompting with Soul ID

#### Core Principle

**The Soul ID handles character identity. Your prompt handles everything else.**

**Prompt Structure:**
```
[trigger_word], [outfit/clothing], [pose/action], [setting/background], [lighting], [mood/expression], [camera angle]
```

**Example:**
```
grace_char wearing red evening dress, standing confidently, urban rooftop at sunset, golden hour lighting, serene expression, medium shot
```

#### What to Include

Focus on **variables** (things that should change):
- ✅ Outfits and clothing details
- ✅ Poses and actions
- ✅ Settings and backgrounds
- ✅ Lighting conditions
- ✅ Mood and expressions
- ✅ Camera angles and framing

#### What NOT to Include

Avoid describing **constants** (things Soul ID handles):
- ❌ Hair color, length, or style (unless changing)
- ❌ Eye color
- ❌ Skin tone
- ❌ Facial structure or features
- ❌ "A woman with long brown hair and blue eyes..."

---

### Best Practices

#### 1. Use Negative Prompts Sparingly

Target only common failure modes:
- `asymmetry`
- `extra fingers`
- `waxy skin`
- `distorted face`

**Why:** Higgsfield's character consistency is strong. Over-constraining with negatives can hurt results.

#### 2. Iterate in Small Steps

Change **one variable per generation** to learn what affects quality:
- First gen: Test outfit
- Second gen: Change lighting
- Third gen: Modify background
- Fourth gen: Adjust pose

#### 3. Save Reliable Combos as Presets

When you find a combo that works (trigger + lighting + framing), save it:

**Example preset:**
```
grace_char, soft window lighting, medium close-up, looking at camera, peaceful expression
```

Use as base, then modify for variety.

#### 4. Track Quality Metrics

Monitor:
- **Perceived quality** (does it look good?)
- **Time-to-image** (generation speed)
- **Effective cost per usable output** (how many gens until you get a keeper?)

**Batch similar prompts** to compare apples-to-apples.

---

### Use Cases

**Content studios:** Consistent hero character across thumbnails, shorts, community posts

**E-commerce:** Generate on-brand outfits on same persona for seasonal drops

**Game/VTuber personas:** Maintain identity across scenes while exploring new settings

**LoRA training dataset:** Use Soul ID to generate your 40 training images (see `06_higgsfield_integration.md`)

---

### Example Prompts

**Basic Portrait:**
```
grace_char wearing casual white t-shirt, relaxed pose, coffee shop background, natural window light, gentle smile, waist-up shot
```

**Dynamic Action:**
```
grace_char in athletic wear, running through park, morning sunlight, energetic expression, motion blur, side angle
```

**Multiple Outfits:**
```
grace_char in business suit, standing confidently, modern office, professional lighting, determined expression, full body shot
```

**Artistic Style:**
```
grace_char wearing flowing dress, dancing pose, dramatic studio lighting, joyful expression, artistic photography
```

---

### Pro Tips

- **Character consistency** is 90%+ with good training data
- **Regenerate 5-10%** of outputs is normal and expected
- **Test your trigger word** with simple prompts first before complex scenarios
- **Combine with style LoRAs** for unique artistic effects (test compatibility first)

---

## 3. Flux.2

### Overview

**Full Name:** FLUX.1 (Black Forest Labs)
**Architecture:** Dual text encoders (T5 language encoder + CLIP encoder)
**Key Strength:** Natural language understanding, technical precision, hierarchical composition

### Core Capabilities

- ✅ **Natural language prompts:** Write as if communicating with a human
- ✅ **Technical accuracy:** Respects specific camera settings and specifications
- ✅ **Complex compositions:** Define placement of every object and person
- ✅ **Positive phrasing:** No need for negative prompts

### Understanding Dual Encoders

**CLIP encoder:** Provides broad guidance (overall vibe, style)
**T5 encoder:** Adds detailed context (specific attributes, relationships)

**Result:** Flux understands nuanced, detailed prompts better than single-encoder models.

---

### Optimal Prompt Length

**No strict limit**, but best results with **detailed, specific prompts** (30-100 words).

**Principle:** More specific details = better results.

---

### Prompt Structure

**Framework:**
```
[Technical framework]: [Main subject and action], [environmental effects], [special elements], [technical specifications], [conditions]
```

**Example:**
```
Shot on Canon EOS R5 with 85mm f/1.4 lens: Portrait of young woman in red dress, golden hour sunlight creating rim light, soft bokeh background with city lights, shallow depth of field, professional color grading, cinematic mood
```

---

### Best Practices

#### 1. Be Specific and Detailed

Include:
- Subject description
- Style and composition
- Lighting details
- Color palette
- Technical specs (camera, lens, settings)
- Atmospheric conditions

**Good:**
```
A professional portrait of a bearded man in his 30s wearing a leather jacket. Shot on Sony A7IV with 50mm f/1.8 lens. Dramatic side lighting creating strong shadows. Urban brick wall background with graffiti. Shallow depth of field. Moody, cinematic color grade. Film noir aesthetic.
```

**Bad:**
```
A cool portrait of a man.
```

#### 2. Use Technical Specifications for Photorealism

For photorealistic images, include:
- **Camera model:** "shot on iPhone 16," "Canon EOS R5," "Nikon D850"
- **Lens:** "85mm f/1.4," "24-70mm f/2.8," "50mm f/1.8"
- **Shot type:** "close-up," "medium shot," "wide angle," "aerial view"
- **Aperture:** "f/1.4" (shallow DOF), "f/8" (deep DOF)

**Example:**
```
Shot on iPhone 15 Pro: Casual selfie of woman at beach, natural sunlight, slight lens flare, handheld composition, authentic smartphone quality
```

#### 3. Use Positive Phrasing (Not Negations)

Tell Flux **what to include**, not what to avoid.

**Good:**
```
Clean, minimalist background with solid neutral color
```

**Bad:**
```
No clutter, no mess, avoid busy backgrounds
```

**Why:** Flux's architecture works better with affirmative descriptions.

#### 4. Organize Hierarchically

Flux excels at complex scenes. Be clear about layers:

**Example (Layered Scene):**
```
Foreground: Woman in red dress standing on beach.
Middle ground: Gentle waves washing onto shore.
Background: Sunset with orange and pink clouds.
Lighting: Warm golden hour light from behind creating silhouette effect.
Shot on Nikon D850, 35mm lens, f/2.8.
```

#### 5. Avoid Background Blur (Unless Specified)

To avoid unintended blur, include **detailed background attributes**:

**Good:**
```
Background: Brick wall with ivy, weathered texture, visible mortar lines, sharp focus throughout
```

**Bad:**
```
Background: Wall (results in blurred wall)
```

---

### What to Avoid

- ❌ **Prompt weights** (not supported in most Flux implementations)
  - Don't use: `(red dress:1.5)` or `[blue:0.8]`
  - Instead use: "with emphasis on red dress" or "with strong focus on..."

- ❌ **Vague adjectives** without context ("beautiful," "nice," "good")

- ❌ **Negative prompts** (use positive phrasing instead)

---

### Example Prompts

**Portrait (Natural Language):**
```
A confident businesswoman in her 40s wearing a navy blue suit. She's sitting at a modern office desk with large windows behind showing a city skyline. Natural daylight coming from the left creates soft shadows on her face. She's looking directly at camera with a slight professional smile. Shot on Canon EOS R5 with 50mm f/1.8 lens. Clean, professional corporate photography style.
```

**Landscape (Technical Detail):**
```
Mountain landscape at sunrise. Foreground: Alpine meadow with wildflowers in sharp focus. Middle ground: Pine forest with morning mist rolling through trees. Background: Snow-capped mountain peaks catching first light with pink and orange glow. Crystal clear sky transitioning from deep blue to warm orange. Shot on Nikon D850 with 24mm wide-angle lens, f/11 for deep depth of field. Long exposure for smooth water in creek. Professional landscape photography.
```

**Product (Hierarchical):**
```
Luxury watch product photography. Main subject: Stainless steel watch with blue face positioned at 10:10, lying on black marble surface with white veining. Lighting: Key light from upper left creating dramatic highlights on case, fill light from right softening shadows. Background: Completely black, fading to pure darkness. Reflections visible in marble surface. Shot with 100mm macro lens, f/5.6. High-end commercial photography style with professional color grading.
```

**Casual (Smartphone Style):**
```
Casual mirror selfie in gym changing room. Young woman in athletic wear holding phone at chest height. Harsh overhead fluorescent lighting creating flat illumination. Tiled wall background with lockers visible. Slightly awkward framing with head partially cut off. Shot on iPhone 15, authentic smartphone quality with subtle noise.
```

---

### Pro Tips

- **Natural language is your friend:** Flux understands conversational prompts
- **Layer your scene:** Describe foreground, middle, background separately
- **Technical specs boost realism:** Camera model + lens = photorealistic look
- **Iterate systematically:** Change one element at a time to learn what works
- **Emphasis phrases:** Use "with strong emphasis on," "with focus on," "prominently featuring" instead of weights

---

## 4. Qwen Image Edit 2509

### Overview

**Full Name:** Qwen-Image-Edit-2509 (Alibaba/Qwen)
**Release:** September 2025
**Key Strength:** Multi-image editing, precise control, structural guides support
**License:** Apache 2.0 (open and flexible usage)

### Core Capabilities

- ✅ **Multi-image editing:** Optimal with 1-3 input images
- ✅ **Combination types:** Person + person, person + product, person + scene
- ✅ **Text replacement:** Change fonts, colors, materials
- ✅ **Structural guides:** Depth maps, edge maps, keypoint poses, sketches
- ✅ **Precise control:** Clearly specify what to keep vs. change

---

### Optimal Prompt Length

**Recommended:** 50-200 characters

- **Too short (<50):** May lack necessary information
- **Too long (>200):** Can cause confusion
- **Sweet spot:** 80-150 characters with clear core requirements

---

### Prompt Structure

**Formula:**
```
[What to keep/transfer] from [source], [what to change/add], [context/setting], [quality/style]
```

**Example:**
```
Transfer the red dress from image 1 to the woman in image 2. Modern office setting. Professional lighting. High quality photorealistic rendering.
```

---

### Best Practices

#### 1. Be Expressive and Specific

Qwen needs to understand **exactly** what you want.

**Good (Clothing Transfer):**
```
Change and transfer the girl's top in image 2 from image 1. Keep face and background from image 2. Match lighting and perspective.
```

**Good (Pose Replication):**
```
Let the woman in image 1 replicate the pose from image 2. Keep original clothing and background from image 1. Natural body proportions.
```

**Bad (Vague):**
```
Make them similar.
```

#### 2. Clearly Specify What to Keep vs. Change

**Structure your instructions:**
- **KEEP:** Face, hair, original background
- **CHANGE:** Outfit to red dress
- **MAINTAIN:** Lighting consistency, natural integration

**Example:**
```
Keep the woman's face and hairstyle from image 1. Change her outfit to the blue jacket from image 2. Maintain consistent lighting and natural perspective. Urban street background.
```

#### 3. Use Industry-Standard Terminology

Qwen responds well to professional terms:
- "Seamless integration"
- "Consistent lighting"
- "Natural perspective"
- "Photorealistic rendering"
- "Studio quality"

**Example:**
```
Merge person from image 1 with beach scene from image 2. Seamless integration with matching golden hour lighting. Natural shadows and reflections. Photorealistic quality.
```

#### 4. Reference Well-Known Styles

**Example:**
```
Combine subjects in film noir style. High contrast black and white. Dramatic shadows. Vintage 1940s aesthetic.
```

---

### Multi-Image Editing Workflow

#### Scenario 1: Character Consistency Across Scenes

**Input:**
- Image 1: Your character (grace_char)
- Image 2: Desired background/scene

**Prompt:**
```
Place grace_char from image 1 into the beach scene from image 2. Match lighting and atmosphere from scene. Natural integration with realistic shadows and reflections. Maintain character's appearance exactly.
```

#### Scenario 2: Outfit Transfer

**Input:**
- Image 1: Character in outfit A
- Image 2: Reference outfit B

**Prompt:**
```
Transfer outfit from image 2 onto character from image 1. Keep character's face, pose, and background from image 1. Ensure outfit fits naturally with proper draping and shadows. Photorealistic quality.
```

#### Scenario 3: Pose Matching

**Input:**
- Image 1: Character A
- Image 2: Desired pose reference

**Prompt:**
```
Make character from image 1 replicate the pose from image 2. Maintain character's appearance, outfit, and setting from image 1. Natural body proportions and realistic joint positions.
```

---

### Task Breakdown for Complex Edits

**For complex edits, break into steps:**

**Step 1: Major structural changes**
```
Merge two people from images 1 and 2 standing together. Natural spacing. Eye contact. Similar lighting.
```

**Step 2: Detail optimization**
```
Refine the merged scene. Adjust shadows for consistency. Match skin tones in lighting. Smooth transitions between subjects.
```

**Step 3: Background integration**
```
Place merged subjects into beach scene from image 3. Golden hour lighting. Natural shadows on sand. Realistic integration.
```

**Why:** Better control over results and individual adjustments.

---

### Example Prompts

**Simple Merge:**
```
They are standing close together, holding each other, looking directly at the camera, smiling naturally. Studio lighting with soft, natural shadows.
```

**Complex Scene Integration:**
```
Merge seamlessly with a beach at sunset, golden sunlight reflecting on the sand and water, maintaining consistent lighting, perspective, and natural integration.
```

**Clothing Edit:**
```
Change the character's jacket to leather from image 2. Keep everything else identical. Match texture and lighting. Photorealistic draping.
```

**Background Replacement:**
```
Replace background with modern city skyline from image 2. Keep subject exactly the same. Match lighting direction and color temperature. Realistic depth of field.
```

---

### What to Avoid

- ❌ **Ambiguous instructions** ("make it better," "improve this")
- ❌ **Too many changes at once** (break into steps)
- ❌ **Conflicting constraints** ("keep everything + change everything")
- ❌ **Vague terms** without specifics ("nice," "good," "better")

---

### Pro Tips

- **Start with official online version** before local deployment
- **Test with simple 2-image merges** first
- **Use 50-200 character range** for optimal results
- **Specify "what to keep" explicitly** (Qwen won't assume)
- **Leverage structural guides** (depth maps, poses) for precision
- **Iterate in small steps** for complex compositions

---

## 5. General Best Practices (Model Unspecified)

When the user hasn't specified a model, use these **universal best practices** that work across all platforms:

### Universal Prompt Structure

```
[Subject description], [action/pose], [clothing/appearance], [setting/background], [lighting], [mood/atmosphere], [camera angle], [style/quality]
```

**Example:**
```
Young woman in red dress, standing confidently, urban rooftop at sunset, warm golden hour lighting, serene and peaceful mood, medium shot from eye level, cinematic photography style, high quality
```

---

### Core Principles (Work Everywhere)

#### 1. Be Specific

**Good:** "Woman in her 30s with curly brown hair wearing blue jeans and white t-shirt"
**Bad:** "A woman in clothes"

#### 2. Describe Lighting

**Always include:**
- Light source: "window light," "sunset," "studio lighting," "harsh flash"
- Quality: "soft," "dramatic," "natural," "harsh"
- Direction: "from left," "backlighting," "overhead"

**Example:** "Soft window light from the left creating gentle shadows"

#### 3. Specify Camera Angle

**Options:**
- Close-up / portrait
- Medium shot / waist-up
- Full body
- Wide angle
- Aerial view / bird's eye
- Low angle / worm's eye
- Eye level

**Example:** "Medium shot from eye level"

#### 4. Include Style/Quality Keywords

**Generic quality terms:**
- "high quality"
- "professional photography"
- "detailed"
- "sharp focus"
- "photorealistic"

**Style terms:**
- "cinematic"
- "documentary style"
- "editorial photography"
- "lifestyle photography"
- "artistic portrait"

---

### Length Guidelines

**When unsure of model:**
- **Minimum:** 20-30 words (include essentials)
- **Optimal:** 40-60 words (detailed but not overwhelming)
- **Maximum:** 100 words (very detailed, complex scenes)

**Start with optimal range**, then adjust based on results.

---

### Example General Prompts

**Portrait:**
```
Professional portrait of confident businesswoman in navy suit. Modern office setting with large windows. Natural daylight creating soft shadows. She's looking at camera with slight smile. Medium close-up shot. High quality professional photography.
```

**Landscape:**
```
Mountain landscape at golden hour. Snow-capped peaks in background, alpine meadow with wildflowers in foreground. Warm sunset light casting long shadows. Wide angle view. Professional nature photography, highly detailed.
```

**Action:**
```
Athlete running through forest trail. Morning sunlight filtering through trees. Dynamic motion, focused expression. Side angle capturing movement. Outdoor sports photography, sharp focus on subject.
```

**Lifestyle:**
```
Young woman sitting in cozy coffee shop, reading book by window. Warm afternoon light, relaxed atmosphere. Casual clothing, peaceful expression. Waist-up shot from slight angle. Lifestyle photography, natural and candid feel.
```

---

### Recommendation

**Always suggest specifying the model for optimal results:**

> "For the best results, let me know which model you're using (Nano Banana Pro, Higgsfield, Flux, or Qwen), and I can optimize the prompt specifically for that platform."

---

## 6. Reference Image Workflows

### The Core Rule

**When user provides reference images for character consistency:**

**DO NOT describe character appearance.**

The reference image handles identity. Your prompt handles everything else.

---

### What to Include vs. Exclude

#### ❌ NEVER Include (Reference Handles This):

- Hair color, length, style
- Eye color
- Skin tone or ethnicity
- Facial features (nose, lips, face shape)
- Age or physical appearance details
- "A woman with long brown hair and blue eyes..."

#### ✅ ALWAYS Include (Prompt Handles This):

- **Trigger word** (if using LoRA/Soul ID): `grace_char`, `ohwx_woman`
- **Pose/action:** "standing," "sitting," "looking at camera"
- **Outfit/clothing:** "wearing red dress," "in business suit"
- **Background/setting:** "urban street," "coffee shop interior"
- **Lighting:** "golden hour," "studio lighting," "natural window light"
- **Mood/expression:** "smiling," "serious," "peaceful"
- **Camera angle:** "medium shot," "close-up," "full body"
- **Style:** "photorealistic," "cinematic," "editorial"

---

### Prompt Structure with References

**Formula:**
```
[trigger_word], [pose/action], [outfit], [background], [lighting], [mood/expression], [camera angle], [style]
```

**Example (LoRA/Soul ID):**
```
grace_char standing confidently, wearing red evening dress, urban rooftop at sunset, warm golden hour lighting, serene expression, medium shot, cinematic photography
```

**Example (Without Trigger):**
```
Standing confidently, wearing red evening dress, urban rooftop at sunset, warm golden hour lighting, serene expression, medium shot, cinematic photography
```

---

### Model-Specific Reference Workflows

#### Nano Banana Pro (with Reference)

Keep it **concise** (under 25 words):

```
Business attire, confident pose, office setting, natural lighting, professional headshot.
```

**What Nano Banana infers:** Character identity from reference, fills in photorealistic details.

---

#### Higgsfield Soul ID (with Reference)

**This is the primary use case.** Higgsfield is designed for character consistency.

**Optimal prompt:**
```
grace_char wearing casual white t-shirt and jeans, sitting in coffee shop, natural window light, relaxed smile, waist-up shot, lifestyle photography
```

**Focus on variety:**
- Multiple outfits
- Different backgrounds
- Various lighting conditions
- Range of expressions
- Diverse camera angles

**Why:** Higgsfield maintains face consistency, so you create diversity everywhere else.

---

#### Flux.2 (with Reference)

Flux handles **detailed, natural language** well even with references:

```
Wearing an elegant black evening gown, standing in art gallery with paintings on walls, soft gallery lighting from ceiling, looking over shoulder at camera with mysterious expression, medium shot from slight angle, professional fashion photography style
```

**Note:** Still avoid describing character features. Focus on context.

---

#### Qwen Image Edit 2509 (with Reference)

**Perfect for multi-image character work:**

**Input:**
- Reference image (character face)
- Scene/background image

**Prompt (50-200 chars):**
```
Place character from image 1 into beach scene from image 2. Match lighting and atmosphere. Natural integration with realistic shadows. Photorealistic quality.
```

**Or for outfit transfer:**
```
Character from image 1 wearing outfit from image 2. Keep face and setting from image 1. Natural fit and draping. Professional quality.
```

---

### Common Scenarios

#### Scenario 1: Training Dataset Generation

**Goal:** Generate 40 images of same character in different scenarios

**Use:** Higgsfield Soul ID

**Prompt pattern:**
```
grace_char [outfit variation], [pose variation], [background variation], [lighting variation], [expression variation], [angle variation]
```

**Examples:**
```
1. grace_char wearing red dress, standing, urban rooftop, sunset, smiling, medium shot
2. grace_char in casual jeans and t-shirt, sitting, coffee shop, window light, peaceful, close-up
3. grace_char wearing athletic wear, running, park trail, morning sun, focused, side angle
... (repeat with variations)
```

**See:** `06_higgsfield_integration.md` for complete workflow.

---

#### Scenario 2: Character in Specific Style

**Goal:** Render character in artistic style (film noir, anime, watercolor)

**Use:** Flux.2 or Higgsfield

**Prompt:**
```
grace_char in film noir style. Wearing 1940s suit and fedora. Dramatic side lighting creating strong shadows. Foggy city street at night. Black and white high contrast. Classic detective movie aesthetic.
```

**Key:** Reference provides face, prompt provides style transformation.

---

#### Scenario 3: Product Placement

**Goal:** Character interacting with product

**Use:** Qwen (multi-image) or Higgsfield

**Prompt (Higgsfield):**
```
grace_char holding smartphone, examining screen with interested expression, modern tech store background, bright even lighting, medium shot, product photography style
```

**Prompt (Qwen with product image):**
```
Character from image 1 holding product from image 2. Natural hand position and interaction. Studio lighting. Clean background. Professional product photography.
```

---

### Captioning for Training Data (with References)

When creating captions for LoRA training with reference images:

**WRONG:**
```
A woman with long brown hair, blue eyes, fair skin wearing a red dress in a park
```
(Describes character features - unnecessary and can confuse training)

**RIGHT:**
```
grace_char wearing red dress, standing in park, afternoon sunlight, smiling, full body shot
```
(Trigger word + variables only)

**Why:**
- Training data teaches "grace_char" = the face from images
- Don't need to describe the face in text
- Only describe what varies (outfit, pose, setting)

**See:** `02_qwen_training_guide.md` Section 7.3 for detailed captioning rules.

---

### Quick Reference: Reference Image Checklist

When user mentions reference images:

- [ ] Ask: "Are you using a LoRA/Soul ID, or just a reference for style?"
- [ ] Confirm trigger word (if LoRA): "What's your trigger word?"
- [ ] **DO NOT** describe character appearance in prompt
- [ ] **DO** describe: outfit, pose, setting, lighting, mood, angle, style
- [ ] Adapt prompt length to target model
- [ ] If training dataset: follow captioning guidelines from `02_qwen_training_guide.md`

---

## Summary Table: Model Comparison

| Feature | Nano Banana Pro | Higgsfield Soul ID | Flux.2 | Qwen Image Edit 2509 |
|---------|----------------|-------------------|--------|---------------------|
| **Optimal Length** | <25 words | 40-60 words | 30-100 words | 50-200 characters |
| **Best For** | Text rendering, concise queries | Character consistency | Complex scenes, photorealism | Multi-image editing |
| **Prompt Style** | Structured, concise | Natural with trigger word | Detailed natural language | Expressive, specific |
| **Special Feature** | Search grounding | Face consistency | Dual encoders | Structural guides |
| **Reference Images** | Supports, infers details | Primary use case | Handles well | Multi-image native |
| **Negative Prompts** | Not used | Sparingly | Use positive phrasing | Not emphasized |

---

**Version:** 1.0
**Last Updated:** November 2025
**Part of:** AI Image Generation Helper Agent System
**Sources:** Google DeepMind 2025, Higgsfield docs, Black Forest Labs, Alibaba/Qwen
