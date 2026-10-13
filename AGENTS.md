<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project: Personal Portfolio

This repository is a personal portfolio website for a
second-year Computer Science student.

### Technology Stack
- Next.js 16 with App Router
- React and TypeScript
- Tailwind CSS
- ESLint and Prettier
- Deployment target: Vercel

### Development Workflow
- Follow VibeWise learning mode when it is active.
- The student makes architecture and design decisions.
- Ask questions when significant decisions are unclear.
- Do not implement major features without approval.
- Build incrementally, one component or feature at a time.
- Explain unfamiliar React, TypeScript, and Next.js concepts.
- Explain important code changes and their purpose.
- Prefer simple solutions over unnecessary complexity.

### Code Organization
- src/app/: routes, layouts, and global styles
- src/components/: reusable React components
- src/data/: structured portfolio content
- src/lib/: shared utility functions
- public/images/: images and project screenshots
- public/animations/: decorative animations

### Coding Standards
- Use TypeScript for application code.
- Prefer reusable components with clear responsibilities.
- Use Tailwind CSS for styling.
- Follow responsive and accessible design practices.
- Avoid unnecessary dependencies.
- Never introduce a database or backend without a
  clear functional requirement.

### Quality Checks
After meaningful code changes, run:
- npm run lint
- npx tsc --noEmit
- npm run build

Fix relevant errors before considering work complete.

### Git and Security
- Never commit secrets or environment credentials.
- Never commit .vibe-wise/, node_modules/, or .next/.
- Do not modify learning notes without user approval.
- Do not push to GitHub without explicit approval.
- Keep commits focused and descriptively named.
