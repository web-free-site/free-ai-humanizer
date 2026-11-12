import fs from "fs";
import path from "path";

const SITE = "https://free-ai-humanizer.web-free.site";

const tools = [
  "humanize-chatgpt-text",
  "how-to-humanize-ai-writing",
  "paraphrase-ai-text",
  "make-ai-text-sound-human",
];

const legal = ["privacy", "terms", "about", "contact"];

function url(loc) {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
}

const urls = [
  url(`${SITE}/`),
  url(`${SITE}/fr/`),
  ...tools.flatMap((t) => [url(`${SITE}/${t}/`), url(`${SITE}/fr/${t}/`)]),
  ...legal.flatMap((p) => [url(`${SITE}/${p}/`), url(`${SITE}/fr/${p}/`)]),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const outDir = path.join(process.cwd(), "out");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
fs.copyFileSync(
  path.join(process.cwd(), "public", "robots.txt"),
  path.join(outDir, "robots.txt")
);
console.log("Sitemap written to out/sitemap.xml");
