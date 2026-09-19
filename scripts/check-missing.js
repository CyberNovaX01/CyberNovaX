// check-missing.js
const fs = require("fs");
const path = require("path");

const json = require("./mlbb-data/build-item.json");
const metaSrc = fs.readFileSync(path.join(__dirname, "..", "src", "lib", "metaBuilds.ts"), "utf-8");

const missingNames = ["Lolita", "Yu Zhong", "X.Borg", "Luo Yi", "Chang'e", "Eudora", "Yi Sun-shin", "Popol and Kupa", "Chip"];

console.log("\n📊 Check Missing Heroes\n");

for (const name of missingNames) {
  const h = json.find((x) => x.hero_name === name);
  if (!h) {
    console.log(`❌ ${name}: NOT in JSON`);
    continue;
  }
  const builds = Array.isArray(h.top_builds) ? h.top_builds.length : 0;
  const firstBuild = builds > 0 ? JSON.stringify(h.top_builds[0]).substring(0, 120) : "(empty)";
  console.log(`\n✅ ${name} — ${builds} builds`);
  console.log(`   Sample: ${firstBuild}...`);
}
console.log("");