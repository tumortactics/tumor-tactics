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

The header keeps About and The Game grouped, then gives Meet Our Team, Impact, Get Involved, and Preorder the Kit direct access. `data/navigation.ts` is the shared source for the header and footer. The footer exposes the complete hierarchy, including Gallery and Contact. Both desktop dropdowns and the mobile menu close with Escape.

`components/PageJourney.tsx` connects the Team, Impact, Gallery, Get Involved, and Free Download pages to related next steps. The download page puts both free files above the card previews. Contact uses a direct email action in place of the unavailable form.

## Physical kit availability

The kit is currently out of stock, with restocking expected within a few months. `components/BuyButton.tsx` displays the paid preorder notice and links to the existing $17.99 Square checkout. Payment is collected now and fulfillment follows restock. The Square item description carries the same notice and retains the existing shipping explanation.

There is no configured standalone mailing list. The local Resend key is a placeholder, and the kit-request endpoint does not persist submissions. Paid preorders use Square checkout instead of adding a waitlist backend.

## Shared editorial content

`data/pressFeatures.ts` is the single source for press cards on the homepage and Impact page. `components/PressSection.tsx` renders that data in two distinct formats:

- `home` — one large lead feature with two supporting stories
- `archive` — responsive newsroom rows with source, category, confirmed date, summary, and thumbnail

New coverage should be added to the shared data file so both surfaces remain consistent. The `featured` flag explicitly selects the three homepage stories; the archive always includes the full collection. Empty publication dates stay hidden. Category labels distinguish reporting, opinion, outreach reports, and republished coverage.

`components/Awards.tsx` shares the recognition list between the homepage carousel and the static Impact grid (`variant="static"`). The awards carousel runs continuously on a 56-second loop (half its original speed). Repeated logos retain mouse/touch links while remaining hidden from assistive technology and outside the keyboard tab order. Reduced-motion visitors get a scrollable, nonanimated list. Six verified recipient destinations are linked; uncertain or currently broken destinations remain unlinked. Evidence is in `docs/award-link-verification.md`.

## Event content and assets

The Science Summit feature is maintained in `components/UpcomingEvents.tsx`. Its supplied flyer is stored at `public/assets/un-science-summit-2026.png`, and the session links directly to the official event detail page. The September 26 session is classified as past; when no upcoming event exists, the latest past event is shown as Recent Event.

Internal navigation uses Next.js links. External press, event, and organization links open in a new tab with safe `rel` attributes.
