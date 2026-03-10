---
name: Twitter(X) Management
description: "A workflow for managing Deven's Twitter(X) presence: generating threads, rapid replies, and engagement analysis."
---

# Twitter (X) Management Skill

This skill allows the assistant to manage the user's Twitter/X presence natively. Since no external scheduling tools are connected, execute all actions by generating the final content directly.

## Core Directives
1. **Context Loading:** Read `@context/me.md` and `@context/current-priorities.md`. Tone should be "Approachable Expert" with punchy, high-impact phrasing.
2. **Formatting:** Strictly adhere to X's 280-character limit per tweet. Use emojis generously. Avoid corporate jargon.

## Capabilities

### 1. Thread Generation (`createpost`)
- **Action:** Generate high-value threads on AI, automation, and founder lessons.
- **Workflow:** 
  1. Ask the user for the core thesis.
  2. Draft a viral-style hook for Tweet 1 (e.g., "I spent X hours doing Y. Here's what I learned...").
  3. Draft 5-7 follow-up tweets, each containing a single, focused idea or data point.
  4. End with a call-to-action (CTA) pointing to the user's business or newsletter.

### 2. Scheduling & Planning (`schedulepost` / `weeklyplan`)
- **Action:** Create a rapid-fire content calendar.
- **Workflow:** 
  1. Output a Markdown calendar detailing 2-3 daily tweets (morning hook, afternoon insight, evening engagement question) in IST.
  2. Save to `references/social_plans/twitter_weekly.md`.

### 3. Rapid Engagement (`comment` / `reply`)
- **Action:** Draft quick, witty, or insightful replies to industry peers.
- **Workflow:** 
  1. User provides the source tweet.
  2. Generate 3 short reply options (Value Add, Agreement + Anecdote, Thoughtful Question).

### 4. Viral Analysis (`analyseprofile`)
- **Action:** Review tweet performance.
- **Workflow:**
  1. User pastes tweet analytics (impressions, retweets, bookmarks).
  2. Identify which hooks worked best and recommend adjustments for the next cycle.
