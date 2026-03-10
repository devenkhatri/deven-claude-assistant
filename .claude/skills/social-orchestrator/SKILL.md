---
name: Social Media Orchestrator Agent
description: "A meta-workflow agent that uses the Research skill to gather data, then sequentially writes posts and image prompts for LinkedIn, Twitter, Instagram, Threads, and YouTube."
---

# Social Media Orchestrator Agent Skill

This skill acts as a supervisor, invoking other skills to generate a comprehensive cross-platform content strategy from a single topic. 

## Trigger
Use this skill when the user asks you to act as their "Social Media Agent," or asks you to "research [topic] and create posts for all platforms."

## Workflow

### 1. Research Phase
1. Execute the **Research Skill** on the user's provided topic. 
   - Load contexts (`@context/me.md`, `@context/current-priorities.md`, etc.).
   - Perform Web Search and Web Fetch.
   - Run the OpenRouter synthesis script.
2. Read the resulting synthesized Markdown report from `references/research/`.

### 2. Drafting Phase (Cross-Platform Repurposing)
Read the core directives for the 5 individual social media skills, but **do not physically publish**. Instead, draft the content specifically tailored to each platform based on the research:
- **LinkedIn:** Generate a long-form text post or carousel outline with professional formatting and targeted hashtags.
- **Twitter(X):** Generate a 5-7 tweet thread starting with a viral hook.
- **Instagram:** Generate a Reel script (Hook, Value, CTA) or Carousel slide text, plus caption.
- **Threads:** Generate 1-5 conversational, text-only "hot takes".
- **YouTube:** Generate highly clickable Titles, SEO-rich Descriptions, and Tags (acting as if you are outlining a future podcast on this topic).

### 3. Image Prompt Generation
For each of the platform drafts above, generate a highly detailed prompt that the user can use in Midjourney, DALL-E, or stable diffusion. 
- Format the prompt based on the platform's visual culture (e.g., *16:9 cinematic* for YouTube, *4:5 professional infographic styling* for LinkedIn, *square aesthetic photograph* for Instagram).

### 4. Output & Review
Format all generated content (Drafted text + Image Prompt) into a single, structured Markdown file. 
Save it to the designated drafts folder: `projects/social-content-drafts/YYYY-MM-DD_topic-name.md`

### 5. Publish Phase
1. After generating the file, ask the user to review the drafts in `projects/social-content-drafts/`.
2. Wait for manual approval.
3. Once approved, the actual publishing mechanism is currently **manual** (or TBD). Inform the user that the drafts are ready to be copy/pasted into Buffer, native apps, or a future orchestration script.
