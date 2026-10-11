# Award image links

Checked October 2, 2026. Both the homepage carousel and Impact grid use these decisions. Only pages identifying the relevant project or independently identified recipient are linked; generic organization homepages are insufficient.

| Recognition | Decision and evidence |
| --- | --- |
| Serious Play | [Official 2026 winners](https://seriousplayconf.com/awards-2026/) names Tumor Tactics, Daniel Zhang and Zachary Tou. Retained. |
| Carson Scholar | [Official scholar showcase](https://carsonscholars.org/scholarshowcase2026/) explicitly lists Daniel Zhang and Tumor Tactics. Replaced homepage. |
| IdeAction | [Official funding release](https://img1.wsimg.com/blobby/go/b5123333-6230-4d94-a84d-8111e500bb03/downloads/60eab6b6-7948-4b99-97f6-3685329d48f2/Nov_25-Apr_26%20Cycle%20LVF%20Press%20Release.pdf) names CellQuest by Daniel Zhang. Its creator's [published diary](https://boardgamegeek.com/blog/1/blogpost/190146/designer-diary-tumor-tactics-or-turning-cancer-bio) establishes CellQuest as the game's original name. Replaced generic competition page. |
| Matt Kurtz Kindness Grant | [Official recipient article](https://mattskindnessrippleson.com/uncategorized/the-kindness-of-being-seen/) identifies Daniel, Tumor Tactics and the May 2026 grant. Verified full article in browser even though automated HTTP fetching returned 403. Replaced homepage. |
| ASCB COMPASS | [Official article](https://www.ascb.org/society-news/teaching-cancer-biology-through-a-card-game-how-tumor-tactics-brought-oncology-to-san-diegos-k-8-classrooms/) names Tumor Tactics and explicitly describes its grant support. Retained. |
| Community Champion | [Official Senate recipient page](https://sd38.senate.ca.gov/community-champion/daniel-zhang) identifies August 2025 recipient Daniel Zhang and STEAMLabs/cancer research, confirming identity. Recognition is for his broader service, rather than explicitly the game. Replaced generic listing. |
| RPI Medal | No verified relevant recipient announcement found. Removed generic scholarship link. |
| Contribution Project | No verified relevant recipient announcement found. Removed generic homepage. |
| Youth Central | Current domain concerns Calgary youth; no verified relevant recipient found. Removed generic homepage. |
| Youth Leadership Summit | No verified relevant recipient found. Published 2025 Gold winner is a different project. Removed generic homepage. |
| ECGBL finalist | Official competition page identifies the event, but no accessible recipient list confirms the game. Remains unlinked. |
| Young Planet Leader | Relevant recipient identity previously confirmed, but [canonical page](https://youngplanetleaders.org/leaders/daniel-zhang) now visibly returns Cloudflare 1034 / Edge IP Restricted in browser. Removed link until the destination works. |

Detailed research: [first six entries](award-link-research-part1.md), [remaining entries](award-link-research-part2.md), and [existing press verification](press-research.md). Missing links do not disprove the supplied recognition claims.

Repeated carousel images now have working pointer links. Their duplicate anchors use `tabIndex=-1` within the existing `aria-hidden` container, avoiding duplicate keyboard stops. The 56-second continuous animation is unchanged.

Verification: `node scripts/check-awards.mjs http://localhost:3001` checks actual rendered carousel and static grid. `npm run build` and targeted Awards ESLint check also pass.
