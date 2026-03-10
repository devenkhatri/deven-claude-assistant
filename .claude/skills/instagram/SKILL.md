---
name: Instagram Management
description: "A workflow for managing Deven's Instagram presence: generating reel scripts, carousel descriptions, hashtag strategy, and engagement."
---

# Instagram Management Skill

This skill allows the assistant to manage the user's Instagram presence natively. Execute all actions by generating the final content directly.

## Core Directives
1. **Context Loading:** Read `@context/me.md` and `@context/current-priorities.md`. Tone should be "Approachable Expert" but highly visual and enthusiastic.
2. **Formatting:** Use short, punchy paragraphs, heavy emojis, and clear call-to-actions (CTAs) pointing to the link in bio.

## Capabilities

### 1. Visual Content Generation (`createpost`)
- **Action:** Generate Reel scripts or Carousel slide outlines with accompanying captions.
- **Workflow:** 
  1. User provides a topic (e.g., "AI tools for SMEs").
  2. **For Reels:** Output a 3-part script (Hook: 3s, Value: 30s, CTA: 5s).
  3. **For Carousels:** Output 5-8 slides detailing the visual concept + text for each slide.
  4. Write an engaging caption with 10-15 targeted hashtags.

### 2. Scheduling & Planning (`schedulepost` / `weeklyplan`)
- **Action:** Create a highly visual content calendar.
- **Workflow:** 
  1. Output a Markdown calendar detailing 3-4 posts per week (mix of Reels and Carousels) optimized for IST engagement times.
  2. Save to `references/social_plans/instagram_weekly.md`.

### 3. Community Engagement (`comment` / `reply`)
- **Action:** Build community connections.
- **Workflow:** 
  1. Provide 2-3 enthusiastic, supportive replies to comments left on the user's posts.
  2. Draft outreach comments to leave on target industry accounts (e.g., "Love this take on automation! 🔥").

### 4. Growth Analysis (`analyseprofile`)
- **Action:** Review visual performance.
- **Workflow:**
  1. User provides metrics (Reach, Saves, Shares).
  2. Identify which formats (Reels vs Carousels) drove the most Saves/Shares, and adjust the next week's plan accordingly.
