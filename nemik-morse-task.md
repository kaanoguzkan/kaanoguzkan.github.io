# Task: Add Nemik's Manifesto Morse Code Ticker Component

## Context
My portfolio site is at kaanoguzkan.github.io. Look at the existing codebase — check the component structure, styling approach (Tailwind / CSS variables / styled-components), fonts, and color palette in use.

## What to build
A React component `NemikMorse.tsx` that displays a continuously sliding Morse code ticker containing Nemik's Manifesto from Andor (2022).

### The full manifesto text to encode:
> There will be times when the struggle seems impossible. I know this already. Alone, unsure, dwarfed by the scale of the enemy. Remember this. Freedom is a pure idea. It occurs spontaneously and without instruction. Random acts of insurrection are occurring constantly throughout the galaxy. There are whole armies, battalions that have no idea that they've already enlisted in the cause. Remember that the frontier of the Rebellion is everywhere. And even the smallest act of insurrection pushes our lines forward. And then remember this. The Imperial need for control is so desperate because it is so unnatural. Tyranny requires constant effort. It breaks, it leaks. Authority is brittle. Oppression is the mask of fear. Remember that. And know this, the day will come when all these skirmishes and battles, these moments of defiance will have flooded the banks of the Empire's authority and then there will be one too many. One single thing will break the siege. Remember this. Try.

## Requirements
- Encode the full text to Morse code at render time (dots, dashes, word separators)
- Ticker scrolls infinitely from right to left using CSS animation
- Seamless loop (duplicate the string so there's no gap/jump)
- Fade out on left and right edges
- Match the site's existing color scheme, font, and spacing conventions
- No external dependencies beyond what's already in the project
- Export as default

## Integration
After creating the component, place it wherever it fits best in the existing layout (footer, bottom of hero, or a dedicated section) — use your judgment based on the existing page structure.
