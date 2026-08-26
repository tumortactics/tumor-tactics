# Tumor Tactics Site Architecture

## Visitor journey

The site now follows a consistent sequence: understand the mission, see how the game works, review evidence and recognition, then choose how to participate.

The homepage expresses that journey as:

1. Hero and mission statement
2. Game overview
3. Featured press
4. Founding story
5. Workshop gallery
6. Upcoming and past events
7. Awards and recognition
8. Nonprofit model

## Primary route groups

### About

- `/the-problem` — the cancer-education gap
- `/our-story` — the founding story only
- `/team` — the standalone leadership page

### The Game

- `/how-to-play` — objective, setup, and card types
- `/shop` — classroom-ready kit
- `/game` — free print-and-play download

### Direct destinations

- `/impact-and-recognition` — impact metrics, press archive, awards, and conferences
- `/get-involved` — school, partnership, and volunteer paths
- `/gallery` — workshop photography
- `/contact` — direct contact route

The header keeps the two related route families grouped and gives Impact, Get Involved, and Get the Game direct access. The footer exposes the complete hierarchy, including Team, Gallery, and Contact.

## Shared editorial content

`data/pressFeatures.ts` is the single source for press cards on the homepage and Impact page. `components/PressSection.tsx` renders that data in two distinct formats:

- `home` — one large lead feature with two supporting stories
- `archive` — numbered newsroom-style rows

New coverage should be added to the shared data file so both surfaces remain consistent.

## Event content and assets

The Science Summit feature is maintained in `components/UpcomingEvents.tsx`. Its supplied flyer is stored at `public/assets/un-science-summit-2026.png`, and the session links directly to the official event detail page.

Internal navigation uses Next.js links. External press, event, and organization links open in a new tab with safe `rel` attributes.
