# Portfolio handoff

Prepared: 2026-10-14. Windows session handing off to the learner's MacBook.

## Resume here

This is a personal portfolio for a second-year Computer Science student. The learner is a self-reported beginner and wants to understand the website rather than have it generated all at once. VibeWise learning mode is active. Today's approved implementation step is complete; no new feature is authorized by this handoff.

Read AGENTS.md and .vibe-wise/profile.md, progress.md, and project-map.md before continuing. Invoke/resume the installed VibeWise Learn skill in the new Codex session. Follow its learner-led reasoning, design, and implementation checkpoints. Do not require the learner to create files manually. Ask for their approach before supplying consequential designs, explain unfamiliar concepts concisely, and implement only the agreed slice.

Proposed next step: inspect the current card preview in a browser with the learner, discuss any adjustments, then plan the introduction and shared SocialLinks. This sequence is a proposal, not a confirmed feature order or implementation approval. Obtain the next implementation checkpoint approval before changing code. Do not repeat completed project-card approval.

Onboarding is incomplete: stack familiarity and explicit defaults/customization preference are unanswered. Preserve current defaults: Normal checkpoints, open-ended reasoning, AI writes agreed code. Overall experience is Beginner; understanding the project end to end is the beginner default and aligns with the learner's stated goal. Stopping for the day does not disable learning mode.

## Reference and visual direction

Main reference: https://vinitpatil.me/.

All four local screenshots were examined:

| File under public/images/references/ | Observations |
| --- | --- |
| homepage.png | Centered narrow desktop column; oversized bold sans-serif greeting with inline rounded portrait; gray body copy and darker emphasis; small social icon row; monospace section/activity labels; generous section spacing; GitHub heatmap. |
| homepage nightmode_leetcode.png | Same hierarchy and layout in near-black dark mode with light text; muted secondary text; LeetCode selector active; green activity cells; small theme icon at upper right. |
| projects.png | Two desktop columns; rounded thin-border cards; large top preview images; title and external-link row; concise gray descriptions; technology icons at bottom. |
| skills.png | Wrapping compact badges with icons/text, thin borders and rounded corners; contact form beside social shortcuts; spacious lower section; pixel characters above footer divider; social links and small footer metadata. |

The learner wants to closely follow the minimalist aesthetic: typography, whitespace, alignment, cards, activity, and light/dark modes. These are confirmed visual goals. Exact font, measurements, mobile layouts, hover states, animation, and data retrieval are not established by screenshots. Reference features such as a portrait, decorative arrow, contact form, clock, and visitor count have not automatically been adopted.

## Confirmed page structure and interactions

One scrolling homepage, in this order:

1. Introduction and social links.
2. GitHub/LeetCode activity.
3. Featured projects.
4. Technical skills as badges.
5. Contact.
6. Footer.

Navigation links scroll to homepage section anchors. In particular, Projects navigation scrolls to the projects section, not a new page.

Project cards eventually open dedicated project pages in new browser tabs. During initial homepage development they are non-clickable previews. Do not create temporary project pages or enable destinations early. The current data omits href, so no project link renders.

No blog or achievements section for now. Small animated pixel-art characters near the footer are wanted, but must be implemented last.

Complete the homepage, navigation, activity, skills, contact, responsive layout, and light/dark mode before returning to detailed project pages. The order within that homepage work has not otherwise been finalized.

## Confirmed architecture

The learner proposed major page section components, with smaller reusable components only where responsibilities are clear. One-off sections can still be components. Avoid extra generic component layers without a practical need.

### SocialLinks: confirmed, not implemented

- One shared SocialLinks component rather than a separate component for each social icon.
- Social information lives in a separate data file.
- Each section chooses which items to pass through props; SocialLinks owns consistent styling, spacing, and interactions.
- Introduction: full social set.
- Footer: same full social set.
- Contact: LinkedIn and copy email only.
- Ordinary destinations render as links. Copy email renders as a button. The learner explicitly confirmed this distinction.
- Exact data schema, prop names, file location, icon source, social list, destination URLs, and email have not been selected.
- Visible copy confirmation was suggested by the assistant, but its detailed behavior is not finalized.

### ProjectCard: implemented

- Receives one Project object as a prop.
- Content stays in src/data/projects.ts, not inside the presentation component.
- Shows a large image area or labeled placeholder, name, concise description, technology/method badges, and optional verified outcome.
- Optional href supports later linked cards without changing the component structure.
- No href: plain preview, no anchor, tab stop, or link hover styling.
- With href: entire card content becomes an anchor using target="_blank", rel="noopener noreferrer", focus styling, and a screen-reader new-tab notice. Do not place nested controls inside that anchor later.
- Uses next/image for supplied images; current draft has no image.
- Optional image/outcome/href fields were assistant-proposed details authorized in the implementation checkpoint.

### TechBadge: implemented

- Reusable text badge receiving a label prop.
- Used by ProjectCard; intended for future skills section reuse.
- Current badges have borders, rounded corners, and light/dark styles. Icons are not implemented. Reference badge icons are inspiration, not a chosen icon dependency.

## StormStage

Featured project: a weather-aware emergency fleet optimization application involving Python, data processing, statistical forecasting, optimization, and simulation.

Current draft card copy:

> Uses weather and traffic incident data to forecast emergency demand and inform fleet deployment. Combines forecasting, optimization, and simulation to explore deployment decisions.

Current badge labels: Python, Forecasting, Optimization, Simulation. Forecasting, Optimization, and Simulation describe methods, not verified software packages.

Current project record uses id="stormstage" and name="StormStage". Its image, outcome, and href fields are omitted. The card displays "Project preview coming soon". Do not fabricate screenshots, metrics, libraries, evaluation claims, or a repository URL. The description is draft content based on the learner's account and should be revisited with the actual project.

Dedicated project page is deliberately deferred because the learner has not revisited StormStage recently. Later it should contain the full problem statement, architecture, learner's technical contributions, verified stack, challenges, evaluation results, screenshots, and GitHub repository. Its route convention is still undecided. No dedicated page exists.

## Current file inventory

| File | Status and responsibility |
| --- | --- |
| src/data/projects.ts | Created in approved step. Exports Project type and readonly projects array with one StormStage draft. Required fields: id, name, description, technologies. Optional: image { src, alt }, outcome, href. |
| src/components/ProjectCard.tsx | Created. Server component; 8:5 image/placeholder area, heading, description, optional outcome, badges, conditional link wrapper. No browser state or use-client directive required. |
| src/components/TechBadge.tsx | Created. Server component; label prop and shared badge styles. |
| src/app/page.tsx | Starter content replaced by minimal projects-only preview. Maps data to cards, has id="projects" and accessible section heading; centered max-w-5xl container, one column below sm and two at sm and up. This is not the finished homepage. |
| src/app/layout.tsx | Existing starter layout, unchanged. Loads Geist/Geist Mono; starter metadata remains. |
| src/app/globals.css | Existing starter Tailwind/theme styles, unchanged. Uses OS color preference for background/foreground; manual theme toggle absent. Body font remains Arial/Helvetica; preview explicitly uses font-sans. |
| public/images/references/ | Four supplied screenshots for design reference. They are not StormStage images. |
| .vibe-wise/profile.md | Updated preferences/current learner snapshot without inventing stack experience. |
| .vibe-wise/progress.md | Updated reasoning evidence, completed checkpoint, validation, and pending questions. |
| .vibe-wise/project-map.md | Updated confirmed requirements, actual architecture, implementation inventory, and unknowns. |
| PORTFOLIO_HANDOFF.md | This cross-session handoff. |

No dependencies were added for the card. No backend, database, external activity fetch, contact delivery, authentication, or analytics was introduced.

## Stack and repository rules

Verified package versions at implementation: Next.js 16.4.0, React/React DOM 19.3.0, TypeScript 5, Tailwind CSS 4, ESLint 9. Uses App Router and TypeScript. Prettier is named in project guidance but is absent from the inspected package.json. Vercel is the deployment target; deployment has not been verified.

Read relevant installed guides under node_modules/next/dist/docs/ before writing Next.js code. The prior implementation read layouts/pages, server/client components, and image guidance. Keep src/app for routes, src/components for reusable components, src/data for structured content, src/lib for shared utilities, public/images for assets, and public/animations for future decoration.

After meaningful code changes, run lint, TypeScript, and build. Never commit secrets, .vibe-wise/, node_modules/, or .next/. Do not modify learning notes without user approval; this session explicitly authorized the handoff updates. Do not push without explicit approval. No commit or push was performed by the assistant during this session.

## Validation already completed

- npm.cmd run lint: passed.
- npx.cmd tsc --noEmit: passed.
- npm.cmd run build: passed; homepage statically generated.
- git diff --check: passed, with a Windows line-ending conversion notice.
- Generated .next/server/app/index.html contained StormStage, the placeholder text, and id="projects"; it contained no anchor elements.
- No browser visual review was performed. Linked-card, real-image, and outcome branches have not received runtime testing.
- No automated test files were added for this small presentation step.

Windows PowerShell blocked npm.ps1/npx.ps1 under its execution policy. npm.cmd/npx.cmd succeeded without changing system settings. On MacBook use npm run lint, npx tsc --noEmit, npm run build, and npm run dev as usual after installing dependencies if needed.

## Remaining work and unresolved questions

- Review the card in-browser on desktop/mobile; exact spacing and typography remain adjustable.
- Introduction copy, optional portrait, social destinations and email, shared social data schema and copy-feedback behavior.
- Navigation labels and additional behavior such as active-section indication or sticky positioning.
- GitHub/LeetCode usernames, source/access method, update cadence, loading/error/empty handling, and narrow-screen graph behavior.
- Skill badge list and any grouping or icon treatment.
- Contact as direct links vs a working form. The screenshot form is not an approved backend requirement.
- Footer content; clock and visitor counter are not approved features.
- Manual theme switching, default preference, persistence, initial rendering behavior, and full accessibility review.
- Final site metadata, responsive homepage, and actual Vercel deployment.
- Verified StormStage image/stack/results/repository and dedicated route design.
- Pixel-art assets, animation behavior, and reduced-motion treatment, implemented last.

## Cross-machine transfer

Application changes were not committed or pushed by the assistant; inspect current git status because the learner may have changed Git state independently. .vibe-wise/ is local learning state and must not be committed under AGENTS.md. Transfer these notes separately to the MacBook; a Git-only transfer may omit them. Also ensure all four reference screenshots and PORTFOLIO_HANDOFF.md reach the MacBook.

This handoff-writing step changes documentation only. Application code and learning preferences are preserved. Documentation-only updates do not require re-running the application checks; the results above refer to the completed implementation step.
