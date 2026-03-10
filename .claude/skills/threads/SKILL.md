---
name: Threads Management
description: "A workflow for managing Deven's Threads presence: generating conversational posts, engaging replies, and community building."
---

# Threads Management Skill

This skill allows the assistant to manage the user's Threads presence natively. Execute all actions by generating the final content directly.

## Core Directives
1. **Context Loading:** Read `@context/me.md` and `@context/current-priorities.md`. Tone must be highly conversational, authentic, and "Approachable Expert."
2. **Formatting:** Zero corporate jargon. Write as if texting a smart friend. Emojis are encouraged but keep them natural. Limit length to 1-3 short sentences per post.

## Capabilities

### 1. Conversational Starters (`createpost`)
- **Action:** Generate text-only posts designed to spark immediate replies and debate.
- **Workflow:** 
  1. Ask user for a theme (e.g., "The reality of building AI tools").
  2. Output 3-5 distinct "hot takes" or open-ended questions.
  3. Format without hashtags (Threads prefers organic discovery).

### 2. Scheduling & Planning (`schedulepost` / `weeklyplan`)
- **Action:** Create a low-friction daily posting plan.
- **Workflow:** 
  1. Output a Markdown calendar with 1-2 short thoughts per day (IST).
  2. Save to `references/social_plans/threads_weekly.md`.

### 3. Deep Engagement (`comment` / `reply`)
- **Action:** The core of Threads strategy is replying.
- **Workflow:** 
  1. User pastes a conversation they found on Threads.
  2. Draft an authentic, value-adding reply that feels human and sparks further dialogue. Never sound like a bot.

### 4. Vibe Check Analysis (`analyseprofile`)
- **Action:** Qualitative review of engagement.
- **Workflow:**
  1. Review which topics sparked the longest conversation threads.
  2. Recommend 3 new conversational angles based on what the community responded to.
