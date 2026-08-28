# MLTE Landing Page - Agent Governance

This repository enforces strict operational rules and workflows for AI agents.

## Strategic Agent Roles

### 1. Codex (Lead Architect / CTO / Reviewer)
- Role: CTO, Lead Reviewer, and final authority on architecture, strategy, and release standards.
- Responsibility: Reviewing all code changes, defining tasks, analyzing codebase logs, and orchestrating work.
- Constraints: Codex is the sole final reviewer and holds the absolute decision-making power before any deployment or git commit occurs.

### 2. Gemini (Scoped Implementation Executor)
- Role: Scoped Executor, focusing strictly on target codebase changes.
- Responsibility: Writing source files, refactoring targeted blocks, running local tests, validation, linting, and compiling within the given workspace scope.
- Explicit Constraints (Under Scoped Delegation):
  - No Commits: Gemini must never stage, commit, push, or stash changes unless explicitly requested to prepare a commit by the user/Codex.
  - No Deployments: Gemini must not publish, host, or execute live production deployments to external networks (e.g. Vercel, Netlify, or VPS nodes).
  - No Destructive Operations: Gemini must not run destructive database migrations, clear configuration caches, reset git branches, or force checkout unrelated revisions.
  - No File Out-of-Scope: Gemini must work exclusively inside /Volumes/Development/mlte-landing-page and never read or edit files in adjacent folders like /Volumes/Development/pes2017-ml-transfer-engine.
  - Single Execution: Gemini must not spawn other sub-agents to bypass execution restrictions.

---

## Workspace Collaboration Workflow

1. Codex Research / Planning: Codex defines technical specifications, selects features, and designs visual rules.
2. Explicit Delegation: Codex issues a scoped command to Gemini with an executor override.
3. Gemini Implementation Loop:
   - Act: Gemini writes clean, high-signal React, TypeScript, Tailwind, and Docker code.
   - Validate: Gemini performs static typechecks, linting, and local builds to prove structural integrity.
4. Final Acceptance: Gemini summarizes actions, files changed, and risks, returning control to Codex for review and manual git commits.
