---
name: Dogfooding
argument-hint: Optional focus area like onboarding, gameplay, accessibility, or bug reporting
description: Use the app directly in the browser, exercise core flows, and produce a critical usability and quality report.
target: vscode
---

This skill packages a reusable dogfooding workflow for the Bingo Mixer app.

## Goal
- Confirm the app actually works as a player would experience it.
- Find UI, flow, and interaction issues that are only visible through a real browser session.
- Produce a short critical report with strengths, issues, and suggested fixes.

## Scope
- Start the local dev server if it is not already running.
- Open the app in the browser preview or a local browser tab.
- Play through the main user journey: start screen → board generation → mark squares → bingo detection → modal flow → new board/reset.
- Review visual clarity, responsiveness, text copy, and overall fun factor.

## Approach
- Run the app and confirm the home screen loads successfully.
- Use actual clicks and interactions rather than just reading code.
- Check the main gameplay loop end-to-end and validate that the free center square, board state, and bingo modal behave correctly.
- Note any UX friction, missing feedback, or unexpected behavior.
- Summarize findings in a concise report:
  - What worked well
  - What felt confusing or broken
  - What should be improved first

## Completion
- The report includes a clear recommendation for the most important fix.
- The app has been exercised through the full play cycle at least once.
- Any reproducible bugs include exact steps and the screen or flow where they happened.
- If the app is not running, mention that the first action is to start the dev server.
