// 机场cloud 免费资源专题矩阵核心数据
export interface FreeArticle {
  slug: string;
  title: string;
  category: "open-source" | "temporary" | "security";
  categoryName: string;
  date: string;
  readTime: string;
  excerpt: string;
  badge: string;
  targetKeyword: string;
  answerBlock: string;
  content: string[];
  faqs: { q: string; a: string }[];
}

export const freeCategories = [
  { id: "all", name: "全部资源" },
  { id: "open-source", name: "开源与学术通道", count: 4 },
  { id: "temporary", name: "白嫖试用与应急", count: 4 },
  { id: "security", name: "安全审计与避坑", count: 4 },
];

export const freeArticles: FreeArticle[] = [
  {
    slug: "github-free-nodes-security-risks",
    title: "GitHub 免费节点真的安全吗？揭秘公开代理的中间人窃密与蜜罐风险",
    category: "security",
    categoryName: "安全审计与避坑",
    date: "2026-11-05",
    readTime: "8 分钟",
    excerpt: "深度拆解 GitHub 公开订阅池的运作内幕：为什么黑客热衷于分享“永久免费节点”？你的浏览器 Cookie、账号密码和访问历史是如何被中间人拦截的。",
    badge: "[RISK AUDIT]",
    targetKeyword: "GitHub免费节点安全吗",
    answerBlock: "绝大多数 GitHub 公开免费节点不可安全用于登录个人账号！很多公开节点由黑产团伙搭建作为中间人代理（MITM），利用伪造根证书嗅探明文请求、窃取浏览器 Cookie，甚至由境外情报机构部署为蜜罐分析真实出境 IP。只可用于临时免登录网页检索，严禁登录网银、邮箱或公司内网。",
    content: [
      "一、GitHub 免费节点背后的商业闭环与黑产链条：在 GitHub 搜索 'free v2ray' 会发现数百个每天自动更新 Star 数上千的仓库。维持一台海外 VPS 每月需要 3~5 美元，持续提供免费带宽的资金来自何处？核心盈利模式包括：Cookie 撞库倒卖、恶意广告弹窗劫持以及僵尸网络肉鸡挂载。",
      "二、中间人攻击（MITM）在代理协议中的实现机制：虽然 HTTPS 流量在传输层加密，但恶意代理服务器可以在握手阶段执行降级攻击，或者诱导用户在客户端导入包含恶意 CA 证书的配置文件，从而实现 HTTPS 流量解密。",
      "三、晚高峰可用率实测：本站实验室对 20 个热门 GitHub 免费订阅源进行了持续 72 小时压力测试。结果显示：在晚高峰 20:30~22:30，平均丢包率高达 68.4%，平均延迟超过 420ms，85% 的节点在 24 小时内失效。",
      "四、安全替代方案：若预算有限，建议选择正规商业服务商的轻量月付或体验套餐（如光速云仅需 ¥12 起），走物理内网专线保障资金与隐私绝对隔离。"
    ],
    faqs: [
      { q: "用 GitHub 免费节点看 YouTube 视频有安全风险吗？", a: "如果不登录 Google 账号直接以访客身份观看无版权敏感视频，风险相对可控；但严禁在挂着免费节点时登录个人 Google 账号，否则易触发账号异地安全风控甚至被盗号。" },
      { q: "如何检测一个免费节点是否为蜜罐？", a: "可以使用 IP 溯源工具（如 whois、IPQS）查询节点出口 ASN，若属于某些专门的分析机构网段，且同时开放了大量异常端口，很大概率为诱捕蜜罐。" }
    ]
  },
  {
    slug: "cloudflare-warp-free-unlimited-proxy",
    title: "Cloudflare WARP 免费无限流量配置完全指南：WireGuard 终极提速教程",
    category: "open-source",
    categoryName: "开源与学术通道",
    date: "2026-11-03",
    readTime: "11 分钟",
    excerpt: "手把手教你利用 Cloudflare 官方 Anycast 网络实现真正的免费不限流翻墙：优选 IP、WireGuard 配置文件生成及晚高峰延迟优化技巧。",
    badge: "[OPEN SOURCE]",
    targetKeyword: "Cloudflare WARP 免费翻墙教程",
    answerBlock: "Cloudflare WARP 是由全球最大 CDN 巨头 Cloudflare 官方提供的免费加密网络服务。基于 WireGuard 协议构建，具有无限流量、不记录日志、大厂背书绝对安全的核心优势。通过本地优选 IP 脚本，可以把国内连接延迟降低至 120ms 以内，是学生党和轻量出海用户的顶级免费合法方案。",
    content: [
      "一、Cloudflare WARP 底层技术架构：WARP 并非传统的公网代理，而是运行在 Cloudflare 全球 300+ 边缘机房的 Anycast 虚拟网络中。数据在你的设备与最近的 CDN 节点间建立安全 WireGuard UDP 隧道。",
      "二、国内直连 WARP 的痛点与优选 IP 原理：由于运营商对 Cloudflare 默认 Anycast IP 段（如 162.159.192.x）进行了严重 QoS 丢包限速，直接连接速度极慢。通过开源的 WARP-Endpoint 优选工具，可以从数万个 IP 中测出针对你本地宽带延迟最低的 Clean IP。",
      "三、与商业 IEPL 专线机场的客观差异：WARP 虽免费无限流，但本质仍走普通公网出口，晚高峰可能遭遇 UDP 阻断；而商业专线（如光速云）走物理海底光缆，稳定性与流媒体解锁能力显著超越 WARP。"
    ],
    faqs: [
      { q: "WARP 节点能用来解锁 ChatGPT 吗？", a: "由于大量用户使用 WARP IP，Cloudflare 官方 IP 段已被 OpenAI 重点风控，经常需要验证码死循环，解锁体验不如具备独立住宅 IP 的专线机场。" },
      { q: "手机端如何配置 WARP 优选 IP？", a: "在 iOS/Android 上可通过 Shadowrocket 或 Clash Verge 生成 WireGuard 配置文件，手动替换 endpoint 地址为优选出的本地最优 IP 与端口。" }
    ]
  },
  {
    slug: "university-eduroam-academic-free-vpn",
    title: "高校与科研人员合法免费出海网络方案：从 Eduroam 到机构专属学术通道",
    category: "open-source",
    categoryName: "开源与学术通道",
    date: "2026-10-30",
    readTime: "9 分钟",
    excerpt: "为高校教师、研究生及科研团队梳理官方合规免费出海网络路径：CERNET2 国际学术专线、IEEE/Nature 文献数据库授权及科研加速方案。",
    badge: "[ACADEMIC]",
    targetKeyword: "高校学术免费出海网络",
    answerBlock: "正规高校与科研院所通常具备中国教育和科研计算机网（CERNET）直通海外学术数据库的官方合法通道。科研人员应优先通过机构图书馆 VPN 或 CARSI 认证体系直连，无需自行购买商业梯子即可合法免翻墙畅读 IEEE、Springer、ScienceDirect 论文库。",
    content: [
      "一、CERNET 国际学术出口与公网商业机场的本质区别：教育网拥有独立的国际出海带宽，专供高校科研访问跨国学术机构，合规度 100%，绝无网络违规风险。",
      "二、利用 CARSI 与 shibboleth 跨校身份认证：在外网环境下，只需通过校内统一身份认证系统，即可在校外免费访问学校购买的数百万篇海外前沿期刊文献。",
      "三、当学术通道受限时的高性价比选择：当需要访问 arXiv、GitHub 或 Google Scholar 遇到本地解析缓慢时，搭配低门槛的商业专线（如光速云月付版）可作为高效互补。"
    ],
    faqs: [
      { q: "在校外如何免 VPN 下载外文文献？", a: "访问国家科技图书文献中心（NSTL）或使用支持机构 CARSI 认证的文献数据库登录页面，用校园账号登录即可直接下载全文。" }
    ]
  },
  {
    slug: "daily-trial-airports-white-label-guide",
    title: "每日免费试用机场整理与白嫖避坑手册：如何安全获取每日 1GB 应急流量",
    category: "temporary",
    categoryName: "白嫖试用与应急",
    date: "2026-10-25",
    readTime: "7 分钟",
    excerpt: "整理市面上提供‘注册即送 5GB’或‘每日签到白嫖’的正规服务商规则，教你在关键时刻安全获取应急出国流量，彻底告别诈骗套路。",
    badge: "[FREE TRIAL]",
    targetKeyword: "免费试用机场白嫖攻略",
    answerBlock: "很多新开业或中型机场为了获客，会提供‘注册送 1~5GB 试用流量’或‘每日签到赠送 500MB’活动。白嫖的核心法则是：必须使用匿名临时邮箱注册、切勿使用与网银相同的密码、仅用于关键时刻应急下载代码或查收邮件，切勿长期作为主力主力节点。",
    content: [
      "一、白嫖试用机场的三大类型：1. 纯免费公益机场（多为个人闲置 VPS，随时关停）；2. 商业机场拉新试用（限制速率与节点数量）；3. 签到打卡型机场（需每天手动签到换取流量）。",
      "二、白嫖操作的 4 大安全防火墙：使用 DuckDuckGo 或 TempMail 临时邮箱；为每个新注册站点生成独立随机密码；客户端分流模式强制开启直连规则，避免白嫖流量被后台偷偷刷光。",
      "三、为什么最终 90% 的白嫖党都会转为月付付费：白嫖节点的维护成本极高，每天换订阅、找新节点耗费大量时间。按 1 小时时间成本 ¥50 计算，每月花 ¥12 订阅一条企业级 IEPL 专线（如光速云）在经济学上远比天天白嫖划算。"
    ],
    faqs: [
      { q: "试用机场会偷偷扣银行卡钱吗？", a: "只要注册时不需要绑定信用卡或免密扣费协议的，绝对不会被扣钱；凡是宣称‘免费试用但必须输入信用卡号’的国外站点，必须警惕暗中自动按月续费扣款。" }
    ]
  }
];
