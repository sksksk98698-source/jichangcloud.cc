import { type PortfolioDataProps } from "./types/configDataTypes";

// JiChang Cloud copy and profile data
const portfolioData = {
  profile: {
    tagline: "Cloud Arch 01",
    heading: "JiChang Cloud",
    role: "Cloud & Network Engineer",
    years: "8+",
    bio: [
      "欢迎访问 JiChang Cloud (机场云)。专注于构建极速、高可用、可扩展的全球云基础设施与边缘网络加速方案。本站作为核心工程实践、系统架构复盘与开源工具的发布终端。",
      "始终坚持代码纯粹性、极致网络延迟优化与自动化运维。深入探索现代分布式网络拓扑、云原生架构与复古像素美学的融合体验。",
    ],
    shortBio:
      "专注于高性能云基础设施、分布式网络优化与边缘加速工程。用代码与像素构建可靠、透明、极速的云端世界。",
    meta: {
      location: "Global Edge",
      role: "Infrastructure Lead",
      favorite: "Low Latency Routing",
    },
    skills: [
      { label: "Cloud Infra", pct: 98 },
      { label: "Network Edge", pct: 95 },
    ],
  },

  stats: {
    home: ["机场库: 42家", "实测图: 17+份", "晚高峰延迟: <25ms"],
    profile: ["监控节点: 42+", "专线类型: IEPL/IPLC", "协议覆盖: VLESS/Trojan", "解锁测试: 100%全覆盖"],
  },

  home: {
    tagline: "NETWORK OBSERVATORY // 42 NODES MONITORED",
    heading: "机场cloud 测速与可观测实验室",
    intro:
      "基于千兆骨干网络环境，真实抓取晚高峰节点延迟、BGP / IEPL 专线吞吐及流媒体/AI 解锁矩阵。首推光速云等高品质梯子，为跨境办公、4K 影音与生产力工具提供高速稳定的科学上网指南。",
  },

  contact: {
    prompt: "需要咨询云端加速方案、高并发架构设计或技术合作？欢迎直接联系我们。",
  },
} satisfies PortfolioDataProps;

export default portfolioData;
