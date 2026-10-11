// With the preview running: node scripts/check-awards.mjs http://localhost:3001
import assert from "node:assert/strict";

const base = process.argv[2] || "http://localhost:3001";
const expected = [
  "https://seriousplayconf.com/awards-2026/",
  "https://carsonscholars.org/scholarshowcase2026/",
  "https://img1.wsimg.com/blobby/go/b5123333-6230-4d94-a84d-8111e500bb03/downloads/60eab6b6-7948-4b99-97f6-3685329d48f2/Nov_25-Apr_26%20Cycle%20LVF%20Press%20Release.pdf",
  "https://mattskindnessrippleson.com/uncategorized/the-kindness-of-being-seen/",
  "https://www.ascb.org/society-news/teaching-cancer-biology-through-a-card-game-how-tumor-tactics-brought-oncology-to-san-diegos-k-8-classrooms/",
  "https://sd38.senate.ca.gov/community-champion/daniel-zhang",
];
for (const [path, copies] of [["/", 2], ["/impact-and-recognition", 1]]) {
  const response = await fetch(new URL(path, base));
  assert.ok(response.ok, `Preview failed: ${path}`);
  const html = await response.text();
  const section = html.match(/<section\b[^>]*aria-labelledby="awards-heading"[\s\S]*?<\/section>/)?.[0];
  assert.ok(section, `Missing awards: ${path}`);
  assert.equal([...section.matchAll(/<img\b/g)].length, 12 * copies);
  const links = [...section.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].filter(([, , body]) => /<img\b/.test(body));
  assert.deepEqual(links.map(([, attributes]) => attributes.match(/href="([^"]+)"/)[1]), Array.from({ length: copies }, () => expected).flat());
  assert.ok(!/\binert(?:=|\s|>)/.test(section), "Repeated image links must remain clickable");
  links.forEach(([, attributes], index) => {
    assert.match(attributes, /target="_blank"/);
    assert.match(attributes, /rel="noopener noreferrer"/);
    assert.equal(/tabindex="-1"/i.test(attributes), index >= expected.length);
  });
}
console.log("Awards check passed: 6 verified destinations, 6 unlinked logos, clickable repeated links, matching static grid.");
