import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const contentDir = path.join(projectRoot, "src", "content", "blog");
const outputFile = path.join(projectRoot, "public", "sitemap.xml");
const siteUrl = (process.env.SITE_URL || "https://ellin72.github.io").replace(
  /\/$/,
  "",
);

const parseFrontmatterDate = (rawMarkdown) => {
  if (!rawMarkdown.startsWith("---")) {
    return null;
  }

  const lines = rawMarkdown.split("\n");
  const endMarkerIndex = lines.findIndex(
    (line, index) => index > 0 && line.trim() === "---",
  );

  if (endMarkerIndex === -1) {
    return null;
  }

  for (const line of lines.slice(1, endMarkerIndex)) {
    if (!line.startsWith("date:")) {
      continue;
    }

    return line.slice("date:".length).trim().replace(/^"|"$/g, "");
  }

  return null;
};

const toIsoDate = (value) => {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString();
};

const getBlogUrls = async () => {
  const filenames = (await readdir(contentDir)).filter((filename) =>
    filename.endsWith(".md"),
  );

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const rawMarkdown = await readFile(
        path.join(contentDir, filename),
        "utf8",
      );
      const slug = filename.replace(/\.md$/, "");
      const frontmatterDate = parseFrontmatterDate(rawMarkdown);

      return {
        loc: `${siteUrl}/blog/${slug}`,
        lastmod: toIsoDate(frontmatterDate),
      };
    }),
  );

  return posts;
};

const buildUrlNode = ({ loc, lastmod, changefreq, priority }) => {
  const lastmodXml = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  const changefreqXml = changefreq
    ? `\n    <changefreq>${changefreq}</changefreq>`
    : "";
  const priorityXml =
    typeof priority === "number"
      ? `\n    <priority>${priority.toFixed(1)}</priority>`
      : "";

  return `  <url>\n    <loc>${loc}</loc>${lastmodXml}${changefreqXml}${priorityXml}\n  </url>`;
};

const generate = async () => {
  const now = new Date().toISOString();
  const blogUrls = await getBlogUrls();

  const staticUrls = [
    {
      loc: `${siteUrl}/`,
      lastmod: now,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: `${siteUrl}/blog`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.9,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticUrls, ...blogUrls].map(buildUrlNode).join("\n")}\n</urlset>\n`;

  await writeFile(outputFile, xml, "utf8");
  console.log(`Sitemap generated at ${outputFile}`);
};

generate().catch((error) => {
  console.error("Failed to generate sitemap:", error);
  process.exitCode = 1;
});
