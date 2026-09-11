const fs = require("fs");
const path = require("path");

const artDir = "C:\\Users\\sobti_ewvfrji\\.gemini\\antigravity\\brain\\ac8e5042-9fef-497a-9837-0212308640f0";
const targetDir = path.join(__dirname, "..", "public");

const files = fs.readdirSync(artDir);

const mapping = [
  { prefix: "supreme_court_india_", target: "supreme-court-india.jpg" },
  { prefix: "commercial_court_", target: "commercial-arbitration-court.jpg" },
  { prefix: "delhi_district_court_", target: "delhi-district-court.jpg" },
  { prefix: "delhi_law_library_", target: "delhi-law-library.jpg" },
  { prefix: "delhi_court_bench_", target: "delhi-court-bench.jpg" },
];

for (const m of mapping) {
  const match = files.find((f) => f.startsWith(m.prefix) && f.endsWith(".jpg"));
  if (match) {
    const src = path.join(artDir, match);
    const dest = path.join(targetDir, m.target);
    fs.copyFileSync(src, dest);
    const size = fs.statSync(dest).size;
    console.log(`Copied ${match} -> ${m.target} (${(size / 1024).toFixed(1)} KB)`);
  } else {
    console.log(`Not found: ${m.prefix}`);
  }
}
