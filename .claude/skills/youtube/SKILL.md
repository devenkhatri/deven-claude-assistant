---
name: YouTube Management
description: "A workflow for managing Deven's YouTube presence: generating video descriptions, optimizing titles, planning content, and engagement."
---

# YouTube Management Skill

This skill allows the assistant to manage the user's YouTube presence natively. Execute all actions by generating the final content directly.

## Core Directives
1. **Context Loading:** Read `@context/me.md` and `@context/current-priorities.md`. Note the priority around "Podcasts on AI impact and usage discussions." Tone: Approachable Expert.
2. **Formatting:** Use SEO-friendly phrasing for titles/descriptions. Keep things clearly structured with timestamps where applicable.

## Capabilities

### 1. Video Optimization (`createpost`)
- **Action:** Generate titles, descriptions, and tags for long-form podcasts or shorts.
- **Workflow:** 
  1. User provides the raw topic or transcript summary.
  2. Generate 3 highly clickable (but not clickbait) Title options.
  3. Generate an SEO-rich description containing: a 2-sentence hook, a detailed summary, links to other platforms/business, and timestamps.
  4. Generate 15-20 relevant tags.

### 2. Shorts Conversion Strategy (`planning`)
- **Action:** Identify key moments for Short-form clipping.
- **Workflow:** 
  1. User pastes a podcast transcript.
  2. Identify 3-5 distinct "golden nuggets" (15-60 second duration) that can stand alone.
  3. Output the timestamp range, a proposed hook, and why it will perform well as a Short.

### 3. Comment Moderation & Engagement (`comment` / `reply`)
- **Action:** Manage the YouTube comment section.
- **Workflow:** 
  1. Draft replies thanking users, answering technical AI questions, or pinning a high-value question to the top of the comment section to encourage debate.

### 4. Content Analytics (`analyseprofile`)
- **Action:** Review long-tail performance metrics.
- **Workflow:**
  1. Review provided CTR (Click-Through Rate) and AVD (Average View Duration) metrics.
  2. Suggest changes to thumbnail strategy or video hook pacing if AVD drops in the first 30 seconds.
