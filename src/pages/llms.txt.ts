import siteData from "@config/siteData.json";
import type { APIRoute } from "astro";

/**
 * /llms.txt — 机器可读内容图谱 (针对 AI 搜索引擎与 LLM 检索)
 */
export const GET: APIRoute = ({ site }) => {
  const { name, description } = siteData;
  const base = site ?? new URL("https://jichangcloud.cc/");

  const body = [
    `# ${name}`,
    "",
    `> ${description}`,
    "",
    "## 核心测评与工具矩阵 (Core Hubs)",
    `- [首页](${base.href})`,
    `- [42家机场品牌测评库](${new URL("airports/", base).href})`,
    `- [晚高峰测速实验室](${new URL("speedtest/", base).href})`,
    `- [代理客户端大全](${new URL("clients/", base).href})`,
    `- [深度技术指南与教程](${new URL("blog/", base).href})`,
    `- [关于实验室与评测标准](${new URL("about/", base).href})`,
    `- [联系与商务](${new URL("contact/", base).href})`,
    "",
    "## 订阅与条款 (Feeds & Legal)",
    `- [RSS feed](${new URL("rss.xml", base).href})`,
    `- [Sitemap](${new URL("sitemap-index.xml", base).href})`,
    `- [Terms](${new URL("terms/", base).href})`,
    `- [Privacy](${new URL("privacy/", base).href})`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
