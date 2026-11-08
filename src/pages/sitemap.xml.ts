import type { APIRoute } from "astro";

/**
 * 根目录 sitemap.xml 兼容端点
 * 自动适配国内百度、神马 (yisouspider) 以及 Bing 等传统爬虫对 /sitemap.xml 的默认抓取行为
 * 返回标准 XML sitemapindex，指向实时的 /sitemap-0.xml
 */
export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ? new URL(site).origin : "https://jichangcloud.cc";
  const subSitemapUrl = `${baseUrl}/sitemap-0.xml`;
  const lastmod = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${subSitemapUrl}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Robots-Tag": "noindex", // 防止 sitemap 自身被当成网页索引
    },
  });
};
