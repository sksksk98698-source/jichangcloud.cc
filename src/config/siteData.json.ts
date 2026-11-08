import { type SiteDataProps } from "./types/configDataTypes";

// 机场cloud 核心元数据配置 (SEO & GEO 深度优化)
const siteData = {
  name: "机场cloud",
  title: "机场cloud — 2026 梯子机场推荐 · 晚高峰测速实验室 · 42家机场品牌测评",
  description:
    "机场cloud (jichangcloud.cc) 是专业的翻墙梯子与网络可观测性评测中心。实测收录 42 家主流机场，首推光速云等 IEPL/IPLC 专线，提供晚高峰节点测速、ChatGPT与流媒体解锁报告及全平台客户端下载教程。",

  author: {
    name: "机场cloud 实验室团队",
    email: "contact@jichangcloud.cc",
    twitter: "JiChangCloud",
  },

  defaultImage: {
    src: "/og.jpg",
    alt: "机场cloud — 2026 梯子机场推荐与晚高峰测速实验室",
  },

  // 官方链接
  sameAs: ["https://github.com/jichangcloud"],

  // 搜索引擎站长平台验证预留（无值时不输出空标签；填入即自动生效并直接渲染在最终 HTML 源码中）
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.BING_SITE_VERIFICATION || "",
    shenma: process.env.SHENMA_SITE_VERIFICATION || "",
    baidu: process.env.BAIDU_SITE_VERIFICATION || "",
  },
} satisfies SiteDataProps;

export default siteData;
