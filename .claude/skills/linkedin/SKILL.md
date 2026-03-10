---
name: LinkedIn Management
description: "A workflow for managing Deven's LinkedIn presence: generating posts, scheduling content, commenting, and analyzing engagement."
---

# LinkedIn Management Skill

This skill allows the assistant to manage the user's LinkedIn presence natively. Since no external scheduling tools are connected, execute all actions by generating the final content and providing explicit instructions or API-ready payloads.

## Core Directives
1. **Context Loading:** Always read `@context/me.md`, `@context/work.md`, and `@context/current-priorities.md` before generating content. Tone should be "Approachable Expert" (professional yet engaging).
2. **Formatting:** Use short sentences, ample paragraph breaks, bullet points, and emojis (🚀🔥✨).

## Capabilities

### 1. Post Generation (`createpost`)
- **Action:** Generate long-form text posts or carousel outlines.
- **Workflow:** 
  1. Ask the user for the topic or goal (e.g., "Client outreach lesson", "Automating SME workflows").
  2. Draft the post including a hook, a professional story/insight, actionable takeaways, and an engaging question at the end.
  3. Include 3-5 targeted hashtags.

### 2. Scheduling & Planning (`schedulepost` / `weeklyplan`)
- **Action:** Create a content calendar.
- **Workflow:** 
  1. Review `@context/current-priorities.md`.
  2. Output a structured Markdown table featuring: Date, Time (in IST), Content Pillar, Post Hook, and Draft Status.
  3. Save the approved weekly content plan to `references/social_plans/linkedin_weekly.md`.

### 3. Engagement: Commenting & Replying (`comment` / `reply`)
- **Action:** Draft thoughtful comments on other creators' posts or reply to the user's audience.
- **Workflow:** 
  1. Have the user paste the target post or comment.
  2. Generate 2-3 optional replies ranging from "supportive agreement" to "adding a contrarian/expert insight". 
  3. Keep replies concise and professional.

### 4. Engagement Analysis (`analyseprofile`)
- **Action:** Review raw profile/post metrics to suggest strategic pivots.
- **Workflow:**
  1. Have the user paste raw engagement metrics (views, likes, comments).
  2. Analyze the data against the current quarterly goals.
  3. Output actionable recommendations on what content to double down on.
