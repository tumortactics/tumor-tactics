// Run with Node 22+: node --experimental-strip-types scripts/check-content.mjs
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { homepageFeatures, pressFeatures } from "../data/pressFeatures.ts";

assert.equal(pressFeatures.length, 20, "All supplied destinations must remain in the archive");
assert.equal(new Set(pressFeatures.map(({ href }) => href)).size, 20, "Each feature needs a unique destination");
assert.deepEqual(homepageFeatures.map(({ source }) => source), [
  "San Diego Union-Tribune", "Nice News", "American Society for Cell Biology",
]);
for (const story of pressFeatures) {
  const url = new URL(story.href);
  assert.equal(url.protocol, "https:");
  assert.equal(url.search, "", "Press destinations should not carry tracking parameters");
  assert.ok(story.title && story.source && story.description && story.imageAlt);
  assert.ok(existsSync(new URL(`../public${story.image}`, import.meta.url)), `Missing image: ${story.image}`);
}
console.log("Content check passed: 20 unique links, 3 requested homepage features, all images present.");
