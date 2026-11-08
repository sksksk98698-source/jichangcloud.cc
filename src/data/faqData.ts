// 机场cloud 机场 FAQ 专题矩阵核心数据
export interface FaqArticle {
  slug: string;
  title: string;
  category: "connection" | "ai-streaming" | "dns-leak" | "billing-rules";
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

export const faqCategories = [
  { id: "all", name: "全部答疑" },
  { id: "connection", name: "网络连接与节点超时", count: 4 },
  { id: "ai-streaming", name: "AI 与流媒体受阻", count: 4 },
  { id: "dns-leak", name: "DNS 污染与隐私泄漏", count: 3 },
  { id: "billing-rules", name: "计费与分流规则", count: 4 },
];

export const faqArticles: FaqArticle[] = [
  {
    slug: "node-timeout-negative-one-ms-fix",
    title: "为什么所有节点测试都是超时 (Timeout) 或 -1ms？秒级修复全自检流程",
    category: "connection",
    categoryName: "网络连接与节点超时",
    date: "2026-11-06",
    readTime: "7 分钟",
    excerpt: "排查翻墙工具最常见灾难现象：明明网络正常，Clash / 小火箭却显示所有节点全部超时或延迟为 -1。系统时间、订阅过期、防火墙拦截与杀毒软件冲突全解。",
    badge: "[CONNECTION]",
    targetKeyword: "节点全部超时Timeout怎么办",
    answerBlock: "所有节点瞬间全红超时的头号元凶是【本地系统时间误差超过 60 秒】！现代 TLS 加密协议（如 VLESS/Trojan）拥有极其严格的动态时间戳防重放机制，时钟不同步会导致所有加密握手被服务端直接拒绝。解决方案：进入系统设置，关闭并重新打开‘自动设置时间’强制同步授时，90% 的超时可瞬间复原。",
    content: [
      "一、原因 1：系统时间误差超过 60 秒（占比 80%）：在 Windows 或 macOS 中打开日期与时间设置，点击‘立即同步’。很多用户在双系统切换（Windows 与 Ubuntu/Mac）后主板时钟会被偏移 8 小时，直接导致节点全部不可用。",
      "二、原因 2：套餐已过期或流量已耗尽（占比 15%）：登录机场后台（如光速云控制台），确认当前订阅周期是否到期，或高速流量是否已被用尽。",
      "三、原因 3：安全软件或本地防火墙拦截（占比 5%）：某些国产杀毒软件会拦截 Clash/Mihomo 内核的本地回环通信端口（7890/9090），在杀毒软件中将客户端加入信任白名单即可解决。"
    ],
    faqs: [
      { q: "手机端小火箭所有节点超时怎么解决？", a: "前往 iPhone 设置 -> 通用 -> 日期与时间，确保‘自动设置’开启，并切换一下飞行模式重新拉取网络基站授时即可。" }
    ]
  },
  {
    slug: "chatgpt-access-denied-error-1020-solution",
    title: "ChatGPT 提示 Access Denied 或 Error 1020 怎么解决？住宅原生 IP 分流全解",
    category: "ai-streaming",
    categoryName: "AI 与流媒体受阻",
    date: "2026-11-05",
    readTime: "9 分钟",
    excerpt: "全面突破 OpenAI 针对代理节点的严苛风控：1020 报错根源、Cloudflare 验证死循环、原生住宅 IP 节点筛选以及客户端自动规则分流补丁。",
    badge: "[AI ERROR]",
    targetKeyword: "ChatGPT Access Denied 解决方法",
    answerBlock: "ChatGPT 提示 Access Denied 或 1020 报错，是因为当前节点出口 IP 被 Cloudflare 安全防护系统识别为机房 IDC IP 或存在短时间内的高频并发滥用记录。解决方法：1. 在客户端切换至标注‘AI 专属’或具备原生住宅 IP 的节点；2. 避开中国香港节点（OpenAI 官方未开放港区支持）；3. 开启浏览器无痕模式避免历史 Cookie 污染。",
    content: [
      "一、OpenAI 封锁逻辑硬核拆解：OpenAI 并不使用单一黑名单，而是综合评估 IP 的 ASN 类型（Hosting vs Residential）、IPQS 欺诈分（Fraud Score）以及 WebRTC 真实泄露。机房广播 IP 会直接遭遇 1020 拒绝访问。",
      "二、地区支持红线：截至 2026 年，OpenAI 官方服务开放地区包括日本、新加坡、美国、台湾、英国等，坚决不向中国大陆及中国香港开放服务。如果选择香港节点访问 ChatGPT，100% 无法使用。",
      "三、配置自动化分流策略组：在 Clash Verge Rev 中为 `DOMAIN-SUFFIX,openai.com` 与 `DOMAIN-SUFFIX,chatgpt.com` 建立专有分流策略组，强制绑定日本或美国的原生专线节点（如光速云 AI 优化节点），享受全天候无感秒开。"
    ],
    faqs: [
      { q: "使用 ChatGPT App 提示地区不支持怎么办？", a: "手机端需要额外检查：1. 手机系统语言切勿仅设为中文；2. 关闭手机定位权限；3. 开启 TUN 虚拟网卡模式以防 UDP 流量泄露真实归属地。" }
    ]
  },
  {
    slug: "domestic-websites-slow-or-unreachable-fix",
    title: "挂了梯子后国内微信、网银或淘宝变慢甚至打不开？分流规则错配排查指南",
    category: "billing-rules",
    categoryName: "计费与分流规则",
    date: "2026-11-02",
    readTime: "8 分钟",
    excerpt: "告别翻墙导致的‘杀敌一千自损八百’：为什么国内 App 突然提示‘网络连接失败’或打不开？规则模式（Rule）与全局模式（Global）的正确设置姿势。",
    badge: "[RULES]",
    targetKeyword: "挂梯子国内网站打不开",
    answerBlock: "国内网站变慢或打不开的根本原因，是客户端误选了【全局模式 (Global)】！全局模式会将连微信、网银、百度在内的所有国内流量绕大半个地球送到海外节点再折返回来，不仅延迟暴增至数百毫秒，还会白白消耗昂贵的海外专线流量。解决方案：将客户端代理模式立即切换为【规则模式 (Rule)】并更新最新 GEOIP 规则集。",
    content: [
      "一、全局模式 (Global) vs 规则模式 (Rule) 的分水岭：规则模式通过预置的大陆域名列表（Direct List）与中国大陆 IP 段（GEOIP, CN），自动将国内流量分流至本地直连，只有外网流量才走代理专线。",
      "二、杀毒软件或公司内网证书冲突：某些银行 App 或企业微信具有强证书校验机制，如果开启了 HTTPS 解密或系统代理端口未正确放行，应用会判定存在中间人劫持风险而主动中断连接。",
      "三、自建直连白名单代码范例：如果有个别冷门国内校园网或政企内网被误代理，可在自定义规则中补充 `- DOMAIN-SUFFIX,yourdomain.cn,DIRECT` 强制直连。"
    ],
    faqs: [
      { q: "为什么在规则模式下偶尔国内网站还是走代理了？", a: "通常是该国内网站使用了国外 CDN 域名（如 Akamai 或 Cloudflare），或者使用了小众顶级域名（如 .cc / .io）未被默认规则收录，手动追加一条 DOMAIN-SUFFIX 直连规则即可解决。" }
    ]
  },
  {
    slug: "dns-leak-prevention-fake-ip-setup",
    title: "什么是 DNS 泄漏？为什么开了代理依然会被运营商检测到访问记录？",
    category: "dns-leak",
    categoryName: "DNS 污染与隐私泄漏",
    date: "2026-10-29",
    readTime: "10 分钟",
    excerpt: "全面掌握网络隐私的隐形漏洞：DNS 泄漏原理、国内运营商 53 端口投毒机制、fake-ip 虚拟 IP 映射与 DoH 加密 DNS 终极防范配置。",
    badge: "[PRIVACY]",
    targetKeyword: "DNS泄漏原理与防范",
    answerBlock: "即便你开启了代理软件，如果你电脑的 DNS 查询依然通过明文 UDP 53 端口发送给本地宽带运营商（如电信 114.114.114.114），运营商即可完整记录你所查询的所有海外敏感网站域名，甚至进行 DNS 抢答投毒。解决方案是启用 Clash 的 `fake-ip` 虚拟 IP 增强模式，将真实 DNS 解析交给远端专线代理服务器执行，实现 0 本地 DNS 泄漏。",
    content: [
      "一、DNS 泄漏在线检测方法：访问权威检测网站（如 dnsleaktest.com），点击 Extended Test。如果你在结果中看到了中国电信、中国联通或本地广电的 DNS 服务器 IP，说明你正处于严重的 DNS 泄漏暴露风险中。",
      "二、fake-ip 模式如何彻底根除泄漏：fake-ip 在本地立即向浏览器返回一个虚拟私有 IP（如 198.18.0.x），浏览器带着这个虚拟 IP 发起 TCP 请求，客户端内核在远端专线出口再执行真实 DNS 查询，从而完全杜绝了本地运营商截获域名的可能。",
      "三、加密 DNS (DoH / DoT) 进阶配置：建议将 nameserver 配置为腾讯 DNSPod (https://doh.pub/dns-query) 或阿里公共 DNS (https://dns.alidns.com/dns-query)，保证国内域名的解析同样具备端到端加密。"
    ],
    faqs: [
      { q: "开启 fake-ip 模式会影响本地局域网打印机或 NAS 访问吗？", a: "不会。标准配置中会将局域网私有网段（192.168.x.x, 10.x.x.x, 127.0.0.1）配置为直连绕过规则，完全不影响家庭或公司内网互访。" }
    ]
  }
];
