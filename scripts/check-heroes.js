// check-heroes.js
// Compares MLBB_HEROES (from mlbbTierData) vs META_BUILDS keys
const fs = require("fs");
const path = require("path");

const TIER_FILE = path.join(__dirname, "..", "src", "lib", "mlbbTierData.ts");
const META_FILE = path.join(__dirname, "..", "src", "lib", "metaBuilds.ts");

const tierSrc = fs.readFileSync(TIER_FILE, "utf-8");
const metaSrc = fs.readFileSync(META_FILE, "utf-8");

// Extract id: "..." from the MLBB_HEROES array only
const mlbbBlock = tierSrc.match(/MLBB_HEROES[\s\S]*?=\s*\[([\s\S]*?)\];/);
const allIds = new Set();
if (mlbbBlock) {
  const matches = mlbbBlock[1].matchAll(/id:\s*"([^"]+)"/g);
  for (const m of matches) allIds.add(m[1]);
}

// Extract ids from META_BUILDS keys
const metaIds = new Set();
const metaMatches = metaSrc.matchAll(/^\s{2}"([a-z0-9_]+)":\s*\{/gm);
for (const m of metaMatches) metaIds.add(m[1]);

const missing = [...allIds].filter((id) => !metaIds.has(id));

console.log("\n📊 Hero Report\n");
console.log(`MLBB_HEROES (unique): ${allIds.size}`);
console.log(`META_BUILDS:          ${metaIds.size}`);
console.log(`\n❌ Missing in META_BUILDS (${missing.length}):`);
missing.forEach((id) => console.log(`   - ${id}`));
console.log("");