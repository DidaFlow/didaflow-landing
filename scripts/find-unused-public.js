// Simple, dependency-free check for unreferenced files in /public
// Scans filenames and reports those not mentioned anywhere in /src
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIR = path.join(ROOT, "src");

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(p));
    else out.push(p);
  }
  return out;
}

function readAllText(dir) {
  const files = listFiles(dir).filter(f =>
    /\.(ts|tsx|js|jsx|css|md|json)$/i.test(f)
  );
  return files.map(f => fs.readFileSync(f, "utf8")).join("\n");
}

if (!fs.existsSync(PUBLIC_DIR) || !fs.existsSync(SRC_DIR)) {
  console.error("Expected /public and /src to exist.");
  process.exit(1);
}

const code = readAllText(SRC_DIR);
const publicFiles = listFiles(PUBLIC_DIR);
const unused = publicFiles.filter(f => {
  const name = path.basename(f);
  return !code.includes(name);
});

if (unused.length === 0) {
  console.log("No unused /public assets found ✅");
} else {
  console.log("Unused /public assets:");
  unused.forEach(f => console.log(" -", path.relative(ROOT, f)));
  console.log("\nTip: delete them if you confirm they are truly unused.");
}