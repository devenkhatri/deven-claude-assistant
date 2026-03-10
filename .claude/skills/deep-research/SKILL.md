---
name: Deep Research
description: "A workflow for performing synthesized, multi-step web research tailored to personal context utilizing OpenRouter for final synthesis."
---

# Deep Research Skill

This skill guides the assistant on how to perform extensive, context-aware research.

## Trigger
Use this skill when the user asks for "deep research" on a topic, or needs comprehensive analysis combined with personal business context.

## Workflow

### 1. Load Context
Before starting any research, automatically read and assimilate the information from:
- `@context/me.md`
- `@context/current-priorities.md`
- `@context/goals.md`
*(Note any current projects or priorities that may influence the angle of the research).*

### 2. Multi-Step Data Gathering
Formulate a research plan. You may need to perform multiple passes:
- Use web search tools to find relevant articles, reports, and documentation.
- Fetch the contents of the most promising URLs.
- *Reasoning step:* Analyze if the gathered data answers the prompt fully given the user's priorities. If not, refine the search query and fetch more.

### 3. Synthesis via OpenRouter
Once sufficient raw data has been gathered, you must compile it and run it through the OpenRouter synthesis script.

**Command to run:**
```bash
node /Users/devengoratela/Work/deven-claude-assistant/.claude/skills/deep-research/openrouter_research.js "<user_prompt>" "<compiled_raw_data_and_context>"
```
*(You may pass the data as a JSON string argument or write it to a temporary file in `/tmp/` and pass the filepath if it's too large).*

### 4. Structured Output
The script will output markdown structured into:
- **Summary**: Key highlights aligned to goals
- **Findings**: Analysis with subsections
- **Recommendations**: Actionable steps
- **Sources**: URLs with descriptions

### 5. Save Output
Save the OpenRouter markdown output to the `references/research/` directory.
- **Filename mapping:** `YYYY-MM-DD_short-topic-description.md` (e.g., `2026-03-10_ai-agents-for-smes.md`).

### 6. Decision Logging (Conditional)
Review the synthesized output. If the research and recommendations lead to a strategic decision that aligns with the user's priorities, append an entry to `decisions/log.md` detailing the choice made based on the research.
