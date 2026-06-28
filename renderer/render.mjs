// velacode social renderer — HTML/CSS -> PNG at 2x.
// Usage: node render.mjs --slug=<run-slug> [--out=<dir>] [--port=4322]
// Reads slides.json, serves the renderer over http (so fetch() works), and
// screenshots each #slide-N element at deviceScaleFactor:2 (1080x1350 -> 2160x2700).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const arg = (k, def) => {
  const hit = process.argv.find((a) => a.startsWith(`--${k}=`));
  return hit ? hit.slice(k.length + 3) : def;
};

const slides = JSON.parse(fs.readFileSync(path.join(HERE, "slides.json"), "utf8"));
const slug = arg("slug", slides.slug || "run");
const port = Number(arg("port", "4322"));
const outDir = path.resolve(arg("out", path.join(HERE, "..", "out", slug)));
fs.mkdirSync(outDir, { recursive: true });

const MIME = { ".html": "text/html", ".css": "text/css", ".json": "application/json", ".js": "text/javascript" };
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent((req.url || "/").split("?")[0]);
  const file = path.join(HERE, rel === "/" ? "index.html" : rel);
  if (!file.startsWith(HERE) || !fs.existsSync(file)) { res.writeHead(404); return res.end("nope"); }
  res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

await new Promise((r) => server.listen(port, r));

const browser = await chromium.launch(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {});
const ctx = await browser.newContext({ deviceScaleFactor: 2, viewport: { width: 1200, height: 1500 } });
const page = await ctx.newPage();

const made = [];
for (const s of slides.slides) {
  await page.goto(`http://localhost:${port}/index.html?slug=${encodeURIComponent(slug)}&only=${s.n}`, { waitUntil: "networkidle" });
  await page.waitForSelector('html[data-ready="1"]', { timeout: 15000 });
  await page.waitForTimeout(250); // let webfonts paint
  const el = await page.waitForSelector(`#slide-${s.n}`);
  const name = `slide-${String(s.n).padStart(2, "0")}.png`;
  await el.screenshot({ path: path.join(outDir, name) });
  made.push(name);
  process.stdout.write(`  rendered ${name} (${s.template})\n`);
}

await browser.close();
server.close();
console.log(`\n✓ ${made.length} slides -> ${outDir}`);
