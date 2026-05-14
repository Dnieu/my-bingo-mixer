# Bingo Mixer AI Agent Guide

## What this repo is
- A React + TypeScript front-end for a social bingo game.
- Built with Vite and Tailwind CSS v4.
- Uses localStorage to persist current board state.
- Includes a workshop guide in `workshop/` for design and development context.

## Key commands
- `npm install` — install dependencies
- `npm run dev` — start local dev server
- `npm run build` — compile TypeScript and build production assets
- `npm test` — run Vitest suite
- `npm run lint` — run ESLint across the repo

## Where to make changes
- `src/App.tsx` — top-level app routing between start screen and game screen
- `src/hooks/useBingoGame.ts` — game state, localStorage, reset/start flow, bingo detection triggers
- `src/utils/bingoLogic.ts` — board generation, square toggling, bingo detection, winning line calculation
- `src/components/` — UI components for the start view, game board, squares, and bingo modal
- `src/data/questions.ts` — bingo question pool used to populate boards
- `src/test/setup.ts` and `vite.config.ts` — test environment config for Vitest

## Important details
- `useBingoGame` persists state with `localStorage` using a versioned schema.
- The board is a fixed 5x5 grid with center free space at index `12`.
- `vite.config.ts` adjusts `base` for GitHub Pages when `VITE_REPO_NAME` is set.
- The repo supports a devcontainer in `.devcontainer/devcontainer.json`.

## Helpful docs
- `README.md` — repo overview and run/build instructions
- `workshop/GUIDE.md` — lab-style guidance for building and extending the app
