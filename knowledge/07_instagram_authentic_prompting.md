# The Art of "Anti-Aesthetic": Generating Authentic Instagram Content

> Guide to creating realistic, casual social media imagery by embracing imperfection
>
> **Last updated:** November 2025
> **Related to:** 01_photorealistic_prompting.md (complementary approach)
> **Purpose:** Transform AI-generated images from "too perfect" to "authentically casual"

---

## Table of Contents

0. [The POV Decision Framework](#0-the-pov-decision-framework) ⭐ NEW
1. [The Core Philosophy](#1-the-core-philosophy)
2. [The "Imperfection Layer" System](#2-the-imperfection-layer-system)
3. ["Casual" Keyword Bank](#3-casual-keyword-bank)
4. [Prompt Formulas](#4-prompt-formulas)
5. [Directing Notes](#5-directing-notes)
6. [Model-Specific Adaptations](#6-model-specific-adaptations)
7. [Scenario-Specific Prompt Templates](#7-scenario-specific-prompt-templates) ⭐ NEW
8. [Instagram Story vs. Feed](#8-instagram-story-vs-feed) ⭐ NEW
9. [When to Use This Guide](#9-when-to-use-this-guide) ⭐ NEW

---

## 0. The POV Decision Framework

### The Golden Rule of Authenticity

> **The camera perspective MUST match the scenario's social context.**

If there's no reason for a second person to be present, **don't imply one exists** through third-person framing.

### Three Camera Perspectives

#### **Perspective 1: Selfie POV**

**When to use:**
- Intimate/private moments (bedroom, bathroom, getting ready)
- Solo at home
- Gym changing room / store fitting room
- Quick "fit check" or "mirror pic"
- Any scenario where having a photographer present would be weird/intrusive

**Visual markers to include in prompt:**
- `holding iPhone [model]`
- `mirror selfie`
- `arm visible at edge of frame`
- `phone case visible`
- `flash reflection obscuring phone`
- `front-facing camera quality`

**Example scenarios:**
- Morning in bed (just woke up)
- Post-shower bathroom mirror
- Bedroom lingerie/intimate apparel
- Getting ready at vanity
- Gym locker room check
- Store fitting room try-on

---

#### **Perspective 2: Third-Person (Photographer/Friend)**

**When to use:**
- Public locations (parks, streets, cafes)
- Social situations (with friends, at events)
- Professional/editorial content
- Action shots (running, jumping, dancing)
- When full-body framing + complex background required

**Visual markers to include in prompt:**
- `NO phone visible in shot`
- `shot by friend` or `photographer taking photo`
- `natural hand placement` (not holding phone)
- Can specify camera if professional: `shot on Canon EOS R5`
- Or keep authentic: `shot on friend's iPhone`

**For AUTHENTIC third-person, add "staged candid" elements:**
- `laughing while walking`
- `looking away from camera`
- `adjusting hair`
- `mid-conversation`
- `slight motion blur`

**Example scenarios:**
- Outdoor OOTD (street, park, beach)
- Coffee shop with friend
- Running in park
- Professional fashion editorial
- Group photo at event

---

#### **Perspective 3: Tripod/Timer**

**When to use:**
- Solo content creator needing full-body shot
- Home outfit check (bedroom, living room)
- "Talking to camera" vlog style
- When you want full-body but no photographer available

**Visual markers to include in prompt:**
- `tripod setup` or `propped phone`
- `centered framing` (camera is stationary)
- `eye-level or slightly lower angle`
- `slight awkwardness` (don't know exact moment of capture)
- `timer shot aesthetic`

**Example scenarios:**
- Full-body OOTD at home
- Bedroom outfit check (not mirror)
- Vlog-style "get ready with me"

---

### Quick Reference: Scenario → POV Mapping

| Scenario | Correct POV | Why |
|----------|-------------|-----|
| Morning in bed, waking up | **Selfie** | Intimate, solo moment |
| Post-shower, bathroom | **Selfie** (mirror) | Private, no photographer present |
| Bedroom lingerie check | **Selfie** (mirror) | Intimate apparel = selfie only |
| Getting ready, makeup | **Selfie** (vanity mirror) or **Tripod** | Solo grooming activity |
| Gym changing room | **Selfie** (mirror) | Private locker room space |
| Store fitting room | **Selfie** (mirror) | Solo try-on moment |
| Home outfit check | **Selfie** (mirror) or **Tripod** | Solo at home |
| Outdoor OOTD (street, park) | **Third-person** or **Tripod** | Public space, friend can help |
| Coffee shop casual | **Third-person** | Social setting, friend present |
| Action shot (running, jumping) | **Third-person** | Requires photographer |
| Professional editorial | **Third-person** | Intentional photoshoot |

---

### How to Use This Framework

**Step 1:** Identify the scenario
**Step 2:** Check the table above for correct POV
**Step 3:** Apply imperfection layers (A-E) appropriate to that POV:
- **Selfie:** Layers A (flash), B (dirty mirror), E (phone prop)
- **Third-person:** Layers C (messy background), D (motion blur for "candid")
- **Tripod:** Layer C (background), slight Layer D (awkward timing)

**Step 4:** Add 2-3 imperfections (don't overload with all layers)

---

## 1. The Core Philosophy

### Modern Social Media Has Moved Away From Perfection

**Gen Z / Influencer culture** embraces "Curated Imperfection" over polished, studio-perfect imagery.

**The Golden Rule:**
> **If it looks too clean, it looks fake.**
> Add noise, dirt, blur, and bad lighting to create realism.

### The New Standard

To make AI images look like real Instagram posts, you must **actively destroy perfection**.

**What defines authentic content:**
- ✅ Harsh, unflattering lighting
- ✅ Dirty lenses and mirrors
- ✅ Messy, lived-in backgrounds
- ✅ Motion blur and focus failures
- ✅ Visible phone/camera props
- ❌ Studio lighting
- ❌ Perfect bokeh
- ❌ Clean backgrounds
- ❌ Professional framing

---

## 2. The "Imperfection Layer" System

Apply these **5 layers** to any prompt to convert it from "AI Art" to "Instagram Content".

### Layer A: Aggressive Flash (The "Hard" Light)

Replaces soft, flattering light with harsh, reality-exposing light.

**Keywords:**
- `direct on-camera flash`
- `harsh flash`
- `hard shadows`
- `starburst flash reflection`
- `red-eye effect`
- `flattened depth`
- `nightlife photography`

**Why it works:**
Mimics the small, powerful flash of a smartphone, creating a "caught in the moment" vibe.

**Example:**
```
direct on-camera flash illuminating face, harsh starburst reflection on mirror, hard shadow on wall behind
```

---

### Layer B: Dirty Optics (The Texture)

Real cameras (and mirrors) are rarely clean.

**Keywords:**
- `dirty mirror`
- `fingerprints on glass`
- `dust particles on lens`
- `smudged lens`
- `greasy lens flare`
- `water spots`
- `hair on clothes`

**Specific for Mirrors:**
- `flash reflection obscuring face`
- `wiped circle in steam`

**Example:**
```
mirror selfie, fingerprints visible on glass, smudged lens creating soft blur, dust particles catching light
```

---

### Layer C: The "Trashy" Background (The Context)

Studio backgrounds are dead. We want **"lived-in" spaces**.

**Keywords:**
- `cluttered bedroom`
- `pile of clothes on chair`
- `unmade bed`
- `messy vanity`
- `random cables`
- `cardboard boxes`
- `laundry drying`
- `everyday objects`

**The "Vibe":**
"I just woke up and didn't clean my room."

**Example:**
```
bedroom background, unmade bed with rumpled sheets, pile of clothes on chair, random cables on nightstand, everyday clutter
```

---

### Layer D: Motion & Focus Failures (The Glitch)

Professional cameras focus perfectly. Phones don't.

**Keywords:**
- `motion blur`
- `shutter drag`
- `out of focus hand`
- `blurry face`
- `camera shake`
- `low shutter speed`
- `slight noise`
- `grainy ISO`

**The "Plandid" (Planned Candid):**
- `laughing while moving`
- `walking past the camera`
- `covering face`

**Example:**
```
slight motion blur from moving hand, camera shake creating soft blur, grainy ISO noise, candid moment captured mid-laugh
```

---

### Layer E: The Phone Prop (The Fourth Wall)

The phone itself is part of the story.

**Keywords:**
- `mirror selfie`
- `holding iPhone 15 Pro`
- `phone case visible`
- `fingers covering lens`
- `flash flare masking phone`

**Example:**
```
holding iPhone in front of face, phone case visible, flash flare partially obscuring phone, fingers at edge of frame
```

---

## 3. "Casual" Keyword Bank

### Lighting & Atmosphere

| Vibe | Keywords |
|------|----------|
| **Party / Night** | direct flash, hard shadow, dark vignette, grainy film, disposable camera aesthetic |
| **Morning / Raw** | overexposed window, hazy lens, low contrast, soft blur, morning breath vibe |
| **Sun / Street** | harsh sunlight, deep shadows, lens flare, washed out colors, overexposed highlights |

### Digital Artifacts (For Realism)

Use **carefully** to add digital authenticity:
- `JPEG artifacts` (subtle)
- `smartphone sensor noise`
- `digital zoom quality`
- `chromatic aberration` (subtle)
- `Instagram filter aesthetic`

---

## 4. Prompt Formulas

### Formula 1: The "Fit Check" Mirror Selfie

**POV:** Selfie (mirror)
**Camera:** iPhone
**Scenario type:** Bedroom, bathroom, gym changing room, store fitting room

**Structure:**
`[Subject in Outfit]` + `[Mirror Type]` + `[The Dirt]` + `[The Flash]` + `[Messy Background]`

**Example:**
```
A mirror selfie of a woman wearing a bikini. She is holding an iPhone in front of her face. The mirror is slightly dirty with fingerprints. A harsh starburst flash reflects off the glass, obscuring part of the phone. The background is a mundane hallway with a pile of laundry. The pose is casual, hip popped. Shot on iPhone, unedited.
```

**Key Elements:**
- iPhone visible in hand
- Dirty mirror with fingerprints
- Flash reflection obscuring details
- Messy, mundane background
- Casual pose (hip pop, relaxed stance)
- Specify "unedited" or "iPhone quality"

---

### Formula 2: The "Blurry Night Out"

**POV:** Third-person (friend taking photo)
**Camera:** iPhone or point-and-shoot
**Scenario type:** Social event, dinner, party, night out

**Structure:**
`[Subject Action]` + `[Night Setting]` + `[Direct Flash]` + `[Motion Blur]`

**Example:**
```
A candid shot of a woman laughing at a dinner table. Direct on-camera flash illuminates her face, creating a hard shadow on the wall behind. Her hand is moving, creating motion blur. The table is cluttered with empty glasses and napkins. Red-eye reduction vibe. 1990s disposable camera style.
```

**Key Elements:**
- Candid action (laughing, talking, moving)
- Direct flash with hard shadows
- Motion blur from movement
- Cluttered setting (glasses, plates, mess)
- Reference to disposable camera or early digital

---

### Formula 3: The "Lazy POV"

**POV:** First-person down (looking down at self)
**Camera:** iPhone
**Scenario type:** Casual outdoor, street, everyday moments

**Structure:**
`[First Person View]` + `[Body Part/Object]` + `[Mundane Setting]` + `[Natural Lighting]`

**Example:**
```
POV looking down at own legs wearing grey sweatpants and sneakers. Standing on a cracked concrete sidewalk. A hand holding an iced coffee enters the frame. Sunlight is harsh and direct, creating high contrast. Grainy phone camera quality.
```

**Key Elements:**
- POV/first-person perspective
- Everyday clothing (sweatpants, sneakers)
- Mundane location (sidewalk, parking lot)
- Hand/object entering frame
- Harsh natural light
- Grainy quality

---

## 5. Directing Notes

### "Stop Trying So Hard"

If the AI generates a perfect smile, add:
- `bored expression`
- `deadpan`
- `mouth slightly open`

**Why:** Perfect smiles look staged. Casual expressions look authentic.

---

### "Kill the Bokeh"

Phone cameras have **deep depth of field**. Avoid creamy bokeh for these shots.

Use instead:
- `flat focus`
- `everything in focus`
- `deep depth of field`

**Why:** Professional bokeh screams "DSLR" not "iPhone."

---

### "Bad Framing is Good"

Use awkward cropping to simulate an amateur photographer:
- `awkward cropping`
- `head cut off`
- `too much headroom`
- `off-center composition`
- `Dutch angle` (slight tilt)

**Example:**
```
awkward framing with head partially cut off, too much empty space above, slightly tilted angle
```

---

## 6. Model-Specific Adaptations

### For Flux.2

Flux handles **natural language** well. Use conversational tone:

```
A casual mirror selfie. Woman in a bikini holding her iPhone. The mirror has fingerprints and the flash creates a bright starburst. Her bedroom is messy with clothes on the floor. Very casual pose, not trying too hard. Looks like a real Instagram post.
```

---

### For Nano Banana Pro (Gemini 3 Pro Image)

Keep it **concise** (under 25 words for best results):

```
Mirror selfie, bikini, iPhone visible, dirty mirror, flash reflection, messy bedroom, casual pose, unedited.
```

**Focus on essentials.** Nano Banana Pro infers context well.

---

### For Higgsfield Soul ID

**Character consistency** is key. Use your trigger word:

```
grace_char mirror selfie wearing bikini, holding iPhone, fingerprints on mirror, harsh flash, cluttered bedroom background, casual hip-pop pose, authentic Instagram vibe
```

**Note:** Higgsfield maintains face consistency, so focus on:
- Outfit descriptions
- Background mess
- Lighting imperfections
- Pose casualness

---

### For Qwen Image Edit 2509

Qwen prefers **50-200 character prompts**. Be expressive:

```
grace_char taking mirror selfie in bikini, holding iPhone with flash creating starburst on dirty mirror, messy bedroom with clothes pile, casual relaxed pose, unedited phone quality
```

**Qwen tip:** Clearly state "what to keep" (character) and "what to vary" (imperfections, background).

---

## 7. Scenario-Specific Prompt Templates

Use these ready-to-use templates for common Instagram scenarios. Just replace `[character]` with your subject or trigger word.

### Morning in Bed (Waking Up)

**POV:** Selfie (holding phone) or partner photo
**Camera:** iPhone front-facing camera
**Essential elements:**
- Messy hair ("bed hair")
- Rumpled sheets, unmade bed
- Natural window light or dim bedroom light
- No makeup, natural face
- Casual expression (sleepy, relaxed)

**Prompt template:**
```
[character] taking selfie in bed, just woke up, messy bed hair, holding iPhone at arm's length above face, rumpled white sheets, natural morning window light from right creating soft glow, no makeup, sleepy peaceful expression, close-up shot, slight soft focus from morning grogginess, authentic iPhone front camera quality
```

**Imperfections to include:**
- Soft focus (morning grogginess)
- Natural skin texture
- Overexposed window background
- Casual cropping

---

### Post-Shower Bathroom Mirror

**POV:** Mirror selfie (ALWAYS)
**Camera:** iPhone
**Essential elements:**
- Steamy mirror OR wiped circle in steam
- Wrapped in towel (hair towel, body towel)
- Water droplets on mirror
- Harsh bathroom lighting or natural window
- Flash reflection

**Prompt template:**
```
[character] bathroom mirror selfie, post-shower, wrapped in white towel, hair in towel wrap, steamy mirror with wiped circle in center, water droplets on glass, harsh on-camera flash creating bright starburst, fresh clean skin with natural texture, no makeup, relaxed expression, authentic bathroom lighting, fingerprints visible on mirror
```

**Imperfections to include:**
- Steamy mirror blur
- Flash glare
- Harsh overhead bathroom light
- Water spots on mirror

---

### Bedroom Lingerie/Intimate Check

**POV:** Mirror selfie (NEVER third-person photographer)
**Camera:** iPhone
**Essential elements:**
- Bedroom mirror (full-length or vanity)
- Casual pose (hip pop, relaxed stance)
- Messy bedroom background (unmade bed, clothes)
- Soft bedroom lighting or natural window
- Flash reflection on mirror

**Prompt template:**
```
[character] bedroom mirror selfie wearing [lingerie/intimate apparel], holding iPhone, full-length mirror, fingerprints on mirror, harsh flash creating bright starburst obscuring phone, unmade bed in background with pile of clothes on chair, casual hip-pop pose, natural confident expression, messy bedroom setting with everyday clutter, authentic iPhone quality, unedited
```

**Imperfections to include:**
- Dirty mirror (fingerprints)
- Flash starburst
- Messy bedroom background
- Casual framing

---

### Gym Changing Room

**POV:** Mirror selfie
**Camera:** iPhone
**Essential elements:**
- Locker room mirror (often dirty)
- Harsh fluorescent lighting
- Athletic wear or post-workout outfit
- Sweaty skin, flushed face (if post-workout)
- Gym equipment or lockers in background

**Prompt template:**
```
[character] gym locker room mirror selfie, wearing [athletic wear], holding iPhone, dirty smudged mirror, harsh fluorescent overhead lighting creating flat illumination, slightly sweaty skin, flushed face from workout, gym lockers visible in background, fitness check pose, authentic changing room vibe, unfiltered
```

**Imperfections to include:**
- Harsh fluorescent light (unflattering)
- Dirty/smudged mirror
- Sweaty skin texture
- Locker room clutter

---

### Outdoor OOTD (Street/Park)

**POV:** Third-person (photographer/friend) OR Tripod/timer
**Camera:** Friend's iPhone or tripod setup
**Essential elements:**
- Full-body shot
- Urban street or park background
- Natural daylight (golden hour ideal)
- Confident pose or "staged candid" action
- Environmental context visible

**Prompt template (Third-person candid):**
```
[character] walking down urban street wearing [outfit], shot by friend on iPhone, looking away from camera while adjusting sunglasses, natural afternoon daylight, city buildings and storefronts in background, slight motion blur from walking, candid street style photography, authentic smartphone quality
```

**Prompt template (Tripod):**
```
[character] standing on sidewalk wearing [outfit], tripod setup with phone timer, centered framing, eye-level angle, looking at camera, slight awkwardness of timer shot timing, urban street background with parked cars, natural daylight, full-body shot, authentic iPhone quality
```

**Imperfections to include:**
- Slight motion blur (if candid)
- Natural daylight (can be harsh or soft)
- Busy background (not studio clean)
- Awkward timing (if tripod)

---

### Coffee Shop Casual

**POV:** Third-person (friend across table) OR Tripod (propped phone)
**Camera:** iPhone
**Essential elements:**
- Sitting at cafe table
- Coffee cup, pastry, or book as props
- Window light or cafe interior lighting
- Relaxed, natural expression
- Cafe background (other tables, people, decor)

**Prompt template (Third-person candid):**
```
[character] sitting at cafe table, holding coffee cup with both hands, looking down at latte art with gentle smile, friend taking photo from across table on iPhone, warm window light from left side, cafe background with blurred patrons and exposed brick wall, cozy atmosphere, candid lifestyle photography, authentic smartphone quality
```

**Prompt template (Tripod):**
```
[character] sitting at cafe table, propped iPhone on table, looking at camera while sipping coffee, centered framing, natural window light, cafe interior background with vintage decor, relaxed casual vibe, timer shot aesthetic
```

**Imperfections to include:**
- Warm, slightly yellow cafe lighting
- Blurred background (cafe activity)
- Natural expressions (not "posing")
- Casual hand placement with props

---

### Template Selection Guide

**How to use these templates:**

1. **Identify scenario** from list above
2. **Select correct POV** (selfie, third-person, or tripod)
3. **Copy template** and customize:
   - Replace `[character]` with your subject or trigger word
   - Replace `[outfit]` with specific clothing
   - Adjust time of day / lighting if needed
4. **Add 2-3 imperfections** from the suggestions (don't use all)
5. **Adapt to target model** (see Section 6 for model-specific tips)

**Pro tip:** These templates follow the POV Decision Framework (Section 0). Each template uses the appropriate camera perspective for maximum authenticity.

---

## Complete Example: Professional → Casual Transformation

### ❌ Professional AI Art Prompt:
```
Portrait of a woman in a bikini, professional studio lighting, soft bokeh background, perfectly focused, shot on Canon EOS R5 with 85mm f/1.4 lens, 8K resolution, flawless skin
```

**Result:** Obviously AI-generated, too perfect.

---

### ✅ Instagram-Authentic Prompt:
```
Mirror selfie of a woman in a bikini holding an iPhone 15 Pro. The mirror is slightly dirty with fingerprints and water spots. Harsh on-camera flash creates a bright starburst reflection obscuring part of her phone. The background is her messy bedroom with an unmade bed and clothes piled on a chair. She's standing with one hip popped, casual pose, looking at the camera through the phone. The image has slight motion blur from camera shake and grainy ISO noise. Shot on iPhone, unedited, authentic Instagram aesthetic.
```

**Result:** Looks like a real person's casual Instagram post.

---

## Quick Reference: Layer Application Checklist

When converting any prompt to "anti-aesthetic" style:

- [ ] **Layer A:** Add harsh flash keywords (`direct flash`, `hard shadows`)
- [ ] **Layer B:** Add dirty optics (`fingerprints`, `smudged lens`)
- [ ] **Layer C:** Add messy background (`cluttered`, `unmade bed`, `pile of clothes`)
- [ ] **Layer D:** Add imperfect focus (`motion blur`, `camera shake`, `grainy`)
- [ ] **Layer E:** Add phone prop (`holding iPhone`, `phone case visible`)
- [ ] **Directing:** Use casual expressions, kill bokeh, embrace bad framing
- [ ] **Model:** Adapt length and style for target model

---

## 8. Instagram Story vs. Feed

### The Fundamental Difference

Instagram content exists in two distinct contexts with different authenticity expectations:

**Instagram Feed:**
- **Lifespan:** Permanent (or until deleted)
- **Purpose:** Curated, intentional content
- **Style:** Polished BUT increasingly authentic (2025 trend)
- **Composition:** Follows grid aesthetic
- **Quality expectation:** Higher, more intentional

**Instagram Stories:**
- **Lifespan:** Ephemeral (24 hours)
- **Purpose:** Raw, spontaneous moments
- **Style:** Fully embrace imperfections
- **Composition:** Casual, "in the moment"
- **Quality expectation:** Lower quality is MORE authentic

---

### How to Prompt for Each

#### **For Feed Posts:**

Use **selective imperfections** (2-3 elements, not all 7):

**Prompt approach:**
- Choose 2-3 imperfection layers maximum
- Maintain compositional quality
- Balance authenticity with intentionality
- Specify: `authentic Instagram aesthetic` or `polished but natural`

**Example (Feed-appropriate):**
```
[character] mirror selfie wearing casual white t-shirt and jeans, bedroom setting, holding iPhone, flash creating soft starburst on mirror, unmade bed visible in background, natural relaxed hip-pop pose, authentic Instagram aesthetic, polished but casual
```

**What's included:**
- ✅ Flash starburst (Layer A)
- ✅ Unmade bed background (Layer C)
- ✅ Casual pose
- ❌ NOT: dirty mirror, motion blur, awkward crop, grain

**Result:** Looks authentic but intentional—suitable for permanent Feed content.

---

#### **For Story Posts:**

Use **ALL imperfections** freely—the messier, the better:

**Prompt approach:**
- Use 4-7 imperfection layers
- Embrace awkward framing
- Don't worry about perfect composition
- Specify: `Instagram Story style, raw and unfiltered`

**Example (Story-appropriate):**
```
[character] quick bathroom mirror selfie, just woke up, messy bed hair sticking up, holding iPhone, harsh overhead bathroom light, steamy mirror with water spots, awkward close-up crop with head partially cut off, slight motion blur from shaky hand, no makeup, authentic Instagram Story style, raw and unfiltered, spontaneous moment
```

**What's included:**
- ✅ Harsh light (Layer A)
- ✅ Steamy mirror + water spots (Layer B)
- ✅ Motion blur (Layer D)
- ✅ Awkward crop (Directing Note)
- ✅ "Just woke up" context
- ✅ Multiple imperfections stacked

**Result:** Looks spontaneous, ephemeral—perfect for 24-hour Story content.

---

### Quick Decision Guide

| Aspect | Feed Post | Story Post |
|--------|-----------|------------|
| **Imperfections** | 2-3 selective | 4-7 layers freely |
| **Composition** | Intentional framing | Casual, quick snap |
| **Lighting** | Natural or flattering | Whatever's available |
| **Editing** | Slight color grade okay | Minimal/none, raw |
| **Mood** | "I planned this casually" | "I grabbed my phone real quick" |
| **Prompt keyword** | `authentic Instagram aesthetic` | `Instagram Story style, raw` |
| **Examples** | OOTD, coffee moment, posed selfie | Just woke up, quick update, BTS |

---

### Example Comparison: Same Scenario, Different Format

**Scenario:** Morning coffee at home

**Feed Post Version:**
```
[character] sitting by window holding coffee mug with both hands, morning sunlight streaming through, cozy home setting wearing casual grey loungewear, peaceful relaxed expression, natural window light creating soft glow, lifestyle photography, authentic but polished Instagram aesthetic
```

**Story Post Version:**
```
[character] quick selfie holding coffee mug, messy morning hair, harsh kitchen overhead light, still in wrinkled pajamas, tired but smiling expression, awkward close-up angle with too much headroom, authentic Instagram Story, raw morning chaos, unfiltered
```

**The difference:**
- **Feed:** Curated "morning moment" that looks effortlessly beautiful (but was planned)
- **Story:** Actual morning chaos captured in 2 seconds before first sip

---

### When to Use Which

**Use Feed-level authenticity when:**
- Content is meant to stay on profile permanently
- You want to maintain grid aesthetic
- Scenario is "worth posting" (outfit, location, event)
- Balance between authentic and aspirational

**Use Story-level authenticity when:**
- Content is temporary/ephemeral
- You want "behind the scenes" vibe
- Scenario is mundane everyday moment
- Raw documentation over curation

**Pro tip:** You can use Story-style prompts for Feed posts if you want ultra-authentic "anti-aesthetic" content. But you generally shouldn't use Feed-style prompts for Story posts—they'll look too polished and staged.

---

## Philosophy Summary

Traditional photorealistic prompting (see `01_photorealistic_prompting.md`) aims for:
- Professional camera settings
- Perfect lighting
- Studio quality
- Flawless execution

**Anti-aesthetic prompting** aims for:
- Smartphone limitations
- Harsh, unflattering lighting
- Everyday chaos
- Authentic imperfection

**Both are valid.** Use the right tool for your goal:
- Product photography, professional content → Traditional photorealistic
- Social media, casual content, "real person" vibes → Anti-aesthetic

---

## 9. When to Use This Guide

### Clear Decision Tree

Use **THIS guide** (`07_instagram_authentic_prompting.md`) when you want:

✅ **Social media content** (Instagram, TikTok, Facebook)
✅ **Casual influencer posts** (lifestyle, fashion, fitness, beauty)
✅ **Selfies and mirror pics** (bedroom, bathroom, gym)
✅ **"Real person" vibe** needed (authentic, relatable)
✅ **iPhone/smartphone photography look** (not professional camera)
✅ **Everyday moments** (morning routines, coffee, OOTD)
✅ **Stories and casual Feed posts**

---

Use **01_photorealistic_prompting.md** when you want:

✅ **Professional product photography**
✅ **Studio portraits** (headshots, professional branding)
✅ **Commercial/advertising content**
✅ **Editorial fashion shoots** (magazine-quality)
✅ **High-end DSLR/mirrorless camera look**
✅ **Perfect lighting and composition**

---

### HYBRID Approach (Use Both)

Some scenarios benefit from **combining** both guides:

**Fashion influencer professional shoot:**
- Use `01_photorealistic_prompting.md` for camera/lighting specs (Canon EOS R5, 85mm f/1.4, golden hour)
- Add selective imperfections from THIS guide (2-3 elements like slight grain, natural expression)
- Result: High-quality but not overly perfect

**Lifestyle influencer "polished casual":**
- Use THIS guide's POV framework (Section 0) and scenario templates (Section 7)
- Reduce imperfections to 2-3 elements (not all 7 layers)
- Use "authentic but polished Instagram aesthetic" keyword
- Result: Curated but still natural-looking

---

### Quick Reference

| Your Goal | Which Guide | Key Approach |
|-----------|-------------|--------------|
| Instagram Story (raw moment) | **THIS guide** (07) | Use ALL imperfections, Story-level authenticity |
| Instagram Feed (polished casual) | **THIS guide** (07) | Use 2-3 imperfections, Feed-level authenticity |
| Professional influencer shoot | **Hybrid** (01 + 07) | Pro camera specs + selective imperfections |
| Product photography | **01 only** | Perfect lighting, studio quality |
| Selfie (bedroom, bathroom, gym) | **THIS guide** (07) | Follow POV framework, use imperfection layers |
| Editorial fashion | **01 only** | Professional setup, no imperfections |
| Casual OOTD | **THIS guide** (07) | Use POV framework, authentic smartphone look |

---

### Pro Tips for Combining Guides

**If you're unsure which to use:**
1. Ask: "Would this photo have a photographer present?"
   - **YES** → Consider using 01 (or hybrid)
   - **NO** (selfie/mirror) → Use THIS guide (07)

2. Ask: "What camera would be used?"
   - **iPhone/smartphone** → Use THIS guide (07)
   - **Professional DSLR** → Use 01

3. Ask: "How polished should it look?"
   - **Raw, casual, authentic** → Use THIS guide (07)
   - **Studio-perfect, flawless** → Use 01
   - **Polished but natural** → Use hybrid approach

**Remember:** In 2025, even professional influencers are embracing authenticity. When in doubt, lean toward THIS guide for any social media content.

---

**Version:** 2.0
**Last Updated:** November 2025 (Major update: Added POV framework, scenario templates, Story vs. Feed specifications)
**Part of:** AI Image Generation Helper Agent System
