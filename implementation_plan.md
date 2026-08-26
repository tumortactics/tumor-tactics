# Tumor Tactics Site Reorganization Plan

## Goal

Make the site easier to follow from mission to game to proof to participation, give the media features editorial weight, update the UN Science Summit session accurately, and move the team onto its own page.

## Proposed information architecture

The primary navigation will become:

1. **About**
   - Why It Matters (`/the-problem`)
   - Our Story (`/our-story`)
   - Meet Our Team (`/team`)
2. **The Game**
   - How to Play (`/how-to-play`)
   - Shop the Kit (`/shop`)
   - Free Download (`/game`)
3. **Impact** (`/impact-and-recognition`)
4. **Get Involved** (`/get-involved`)
5. **Get the Game** CTA (`/shop`)

Desktop will use two compact, keyboard-accessible grouped menus. Mobile will show the same hierarchy as clearly labeled sections, so important destinations are visible without a maze of nested interactions. The footer will expose the secondary Gallery and Contact routes as well.

The homepage will read in this order:

1. Mission and educator-focused call to action
2. Quick game facts
3. A concise, visual game overview
4. Prominent media features, led by the new BoardGameGeek designer diary
5. Founding story
6. Real workshop photography
7. Upcoming and past events
8. Awards and recognition
9. Nonprofit funding model

## File changes

### Content and media

- `[NEW] public/assets/un-science-summit-2026.png`
  - Copy the supplied flyer into the permanent site assets.
- `[NEW] data/pressFeatures.ts`
  - Define the BoardGameGeek, The Smile Project, and Kind Over Matter features once, including source, date, two-sentence introduction, local authentic thumbnail, and external URL.
- `[MODIFY] components/UpcomingEvents.tsx`
  - Replace the Science Summit URL with `https://event.sciencesummitnyc.org/list-of-sessions/detail/396`.
  - Replace the generated summit artwork with the supplied portrait flyer using a contained, responsive image treatment.
  - Align the event details with the flyer: September 26, 2026; 10–12 PM PDT; virtual; “Youth Can Do It: Closing Gaps in Health, STEM, and Safety.”
- `[MODIFY] components/PressSection.tsx`
  - Replace the small “As Seen In” text row with an editorial layout: one lead BoardGameGeek story and two supporting stories, all with thumbnails and two-sentence introductions.
  - Support a second presentation for the complete Impact page so it does not repeat the Past Events card grid.
- `[MODIFY] app/impact-and-recognition/page.tsx`
  - Use the shared press data and richer media presentation.
  - Add BoardGameGeek and keep the existing two features.
  - Keep conferences, awards, and media in a clearer proof-oriented sequence.

### Navigation and page relationships

- `[MODIFY] components/Navbar.tsx`
  - Replace the flat tab row with the grouped architecture above.
  - Make active states work for route families such as `/shop`, `/game`, and `/how-to-play`.
  - Preserve accessible focus, keyboard, and mobile behavior.
- `[MODIFY] components/Footer.tsx`
  - Mirror the new hierarchy and expose Team, Gallery, and Contact.
- `[MODIFY] app/team/page.tsx`
  - Replace the redirect with a standalone Meet Our Team page and route metadata.
- `[MODIFY] components/TeamSection.tsx`
  - Adapt the section for standalone page semantics and retain its leadership cards and team inquiry CTA.
- `[MODIFY] app/our-story/page.tsx`
  - Remove the embedded team section.
  - Point “Meet the Team” to `/team` and update metadata/copy so the page stays focused on the founding story.

### Homepage flow

- `[MODIFY] components/GameSnapshot.tsx`
  - Turn the unused generic feature cards into a photography/card-led overview that explains the game quickly and links to How to Play, Shop, and Free Download.
- `[MODIFY] app/page.tsx`
  - Add the redesigned game overview and reorder homepage sections according to the sequence above.
- `[MODIFY] components/Hero.tsx`
  - Clarify the primary journey toward understanding the game and the secondary educator journey toward bringing it to a school.

### Execution records

- `[NEW] task.md`
  - Track implementation and verification during the approved execution pass.
- `[NEW] system_architecture.md`
  - Record the route families, shared press data, and navigation conventions for future site work.

## Verification

- Run `npm run lint` and `npm run build`.
- Check every public route and redirect for a successful render.
- Verify header and footer navigation at desktop and mobile widths.
- Verify keyboard focus and menu behavior.
- Confirm all three article links and the updated Summit link open safely in a new tab.
- Visually inspect the homepage, Impact page, Our Story page, Team page, and Summit flyer treatment at desktop and mobile sizes.
- Confirm the supplied flyer is legible, uncropped, and has accurate alternative text.

## Deliberate non-changes

- Existing product pricing, donation claims, event history, award claims, and team roster will not be rewritten unless required for the requested layout.
- Legacy redirects (`/about`, `/founding-story`, `/awards-and-recognition`) will remain intact.
