// /app/sitemap.ts
export default function sitemap() {
  const baseUrl = "https://aliyyulworks.vercel.app";

  const staticPages = ["", "/projects", "/about", "/contact"].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages];
}
