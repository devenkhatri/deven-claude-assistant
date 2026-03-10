# Deven's Second Brain 🧠🤖

Welcome to my personal Claude Code Assistant and Second Brain repository. This project serves as an intelligent, automated executive assistant designed to eliminate operational friction and accelerate my focus on high-leverage work for Dhimahi Technolabs (Builder, Simplifier & AI Consulting).

## Purpose

This repository houses the configuration, context, and custom skills for the Claude Code CLI. By combining a structured local file system with powerful generative AI models and custom orchestration scripts, this "Second Brain" helps me:
- Manage customer acquisition and outreach.
- Scale my brand presence across social media channels (LinkedIn, Twitter, Instagram, Threads, YouTube).
- Automate technical and operational repetitive tasks.
- Synthesize deep web research.

## Directory Structure 📂

The project is structured to give the AI maximum context with minimum clutter:

- `CLAUDE.md` - The master intelligence file. It defines the assistant's persona, top priorities, and instructions on how to access the context vectors.
- `context/` - Markdown files containing personal details, company info, team structure, current priorities, and goals. The AI reads these before executing complex tasks.
- `.claude/skills/` - The core engine of the assistant. Contains isolated, single-purpose skills (workflows) such as:
  - **Research (`research/`):** A custom Node.js script hooked to the OpenRouter API that performs deep web research and synthesis.
  - **Social Media Management:** Platform-specific guidelines for generating native content:
    - `linkedin/`
    - `twitter/`
    - `instagram/`
    - `threads/`
    - `youtube/`
  - **Social Orchestrator (`social-orchestrator/`):** A meta-skill that runs research and drafts content + image prompts for all five platforms simultaneously.
- `projects/` - Active workspaces for ongoing initiatives (e.g., Skool Community Launch, YouTube Podcast Series, Social Content Drafts).
- `decisions/` - An append-only log (`log.md`) of major strategic decisions made during collaborative sessions.
- `references/` & `templates/` - Reusable SOPs, examples, and formatting templates.

## How It Works 🛠️

1. **Context Loading:** Claude Code automatically reads `CLAUDE.md` upon initialization, absorbing the rules of engagement and pointers to the `context/` directory.
2. **Skill Execution:** When I prompt the assistant to perform a task (e.g., "Run the Social Media Orchestrator on [Topic]"), the assistant navigates to `.claude/skills/`, reads the specific `SKILL.md` instructions, and executes the defined workflow.
3. **External APIs:** Certain skills utilize custom scripts (like `openrouter_research.js`) to reach out to external APIs for specialized tasks like model-agnostic LLM synthesis.
4. **Output:** The assistant drafts content, logs decisions, and updates project files directly within this repository.

## Getting Started

*(Note: This repository is highly personalized for Deven Goratela, but the architecture can be cloned and adapted).*

1. Ensure the [Claude Code CLI](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) is installed.
2. Navigate to this repository in your terminal.
3. Provide the necessary `.env` variables if using the Research or Social skills:
   ```env
   OPENROUTER_API_KEY=your_key_here
   LINKEDIN_CLIENT_ID=your_linkedin_client_id
   LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
   LINKEDIN_ACCESS_TOKEN=your_2_month_access_token
   ```
   > **Note on LinkedIn Access Token:** The LinkedIn access token expires every 2 months. To regenerate it:
   > 1. Ensure `LINKEDIN_CLIENT_ID` and `LINKEDIN_CLIENT_SECRET` are set in `.env`.
   > 2. Open terminal and run: `node .claude/skills/linkedin/generate_token.js`
   > 3. Click the `http://localhost:3000` link to log in via your browser.
   > 4. Copy the new access token printed in your terminal and update `.env`.
4. Run `claude` to start the interactive session.
5. Example Prompts:
   - *"Based on my current priorities, what should I focus on today?"*
   - *"Run the Social Media Orchestrator on the topic of AI Agents replacing SaaS."*
   - *"Review this PR and run a `/loop` to fix any build issues."*

---
*Built with [Claude](https://anthropic.com/claude) by Deven Goratela.*
