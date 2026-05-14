# Copilot Instructions for Bingo Mixer

## Purpose
This repository is a small React + TypeScript + Vite + Tailwind CSS v4 frontend game. The main focus is on clean component structure, simple state management, and a polished interactive design.

## What to do first
- Read `AGENTS.md` and `README.md` for repo context.
- Inspect `src/hooks/useBingoGame.ts` for game state and localStorage persistence.
- Inspect `src/utils/bingoLogic.ts` for board generation, toggle rules, and bingo detection.
- Inspect `src/components/` for UI patterns and design structure.

## Editing and design guidance
- Keep UI changes small and readable: use Tailwind CSS v4 utility classes first.
- Prefer adding style in `src/index.css` and component class names rather than creating new CSS files.
- Preserve the 5x5 board and center free space behavior.
- Keep interactive state in hooks and avoid overloading components with logic.
- For new UI or design work, follow a restrained, accessible style that supports the game’s social mixer tone.

## Tests and validation
- Use `npm test` to run the Vitest suite.
- Use `npm run lint` to check code style.
- Use `npm run build` to verify production build output.

## Important notes
- `vite.config.ts` sets `base` for GitHub Pages when `VITE_REPO_NAME` is present.
- `src/test/setup.ts` configures the Vitest jsdom environment.
- The workshop content in `workshop/` contains lab-style guidance; link there if the change is broadly educational.

## Do not do
- Don’t add large frameworks or unrelated dependencies for a UI polish task.
- Don’t rewrite game logic unless the change requires it.
- Don’t duplicate the repo docs; link to `AGENTS.md` and `README.md` instead.
