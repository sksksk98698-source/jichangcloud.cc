import type { APIRoute } from "astro";

/**
 * 生产级 robots.txt 规范端点
 * 遵循权威 SEO 标准：显式友好支持 Google、Bing、神马(yisouspider)、百度爬虫
 * 严格放行全站栏目与文章目录，并声明标准规范 Sitemap
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site ? new URL(site).origin : "https://jichangcloud.cc";

  const lines = [
    "# 机场cloud (jichangcloud.cc) 全站爬虫抓取规则",
    "User-agent: *",
    "Allow: /",
    "Disallow: /examples/",
    "",
    "# 国际与国内主要搜索引擎独立规则确认",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: bingbot",
    "Allow: /",
    "",
    "User-agent: Baiduspider",
    "Allow: /",
    "",
    "User-agent: yisouspider",
    "Allow: /",
    "",
    "# XML Sitemap 网站地图声明",
    `Sitemap: ${origin}/sitemap.xml`,
    `Sitemap: ${origin}/sitemap-index.xml`,
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
