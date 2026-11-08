// 机场cloud 梯子工具专题矩阵核心数据
export interface ToolArticle {
  slug: string;
  title: string;
  category: "desktop" | "mobile" | "router" | "diagnostics";
  categoryName: string;
  date: string;
  readTime: string;
  excerpt: string;
  badge: string;
  targetKeyword: string;
  platform: string;
  answerBlock: string;
  content: string[];
  faqs: { q: string; a: string }[];
}

export const toolsCategories = [
  { id: "all", name: "全部工具" },
  { id: "desktop", name: "桌面端系统 (Win/Mac)", count: 4 },
  { id: "mobile", name: "移动端系统 (iOS/Android)", count: 4 },
  { id: "router", name: "软路由与网关", count: 3 },
  { id: "diagnostics", name: "网络诊断与抓包", count: 4 },
];

export const toolsArticles: ToolArticle[] = [
  {
    slug: "clash-verge-rev-tun-mode-deep-dive",
    title: "Clash Verge Rev TUN 模式完全实战指南：虚拟网卡与系统代理底层差异",
    category: "desktop",
    categoryName: "桌面端系统 (Win/Mac)",
    date: "2026-11-06",
    readTime: "10 分钟",
    excerpt: "全面掌握 Clash Verge Rev 的终极接管功能：TUN 模式运作原理、服务模式安装、命令行终端走代理以及网卡冲突排查手册。",
    badge: "[DESKTOP]",
    targetKeyword: "Clash Verge Rev TUN模式教程",
    platform: "Windows / macOS",
    answerBlock: "系统代理（System Proxy）仅能接管遵循操作环境代理环境变量的浏览器应用，对于游戏、Git 终端、Docker 及 Telegram 无能为力。TUN 模式通过在操作系统内核创建一块虚拟网络适配器（TUN Device），在网络第 3 层捕获所有出站 IP 数据包并直接路由至代理内核，实现 100% 全流量透明分流。",
    content: [
      "一、System Proxy vs TUN 模式本质区别：普通系统代理通过向 Windows 注册表写入 127.0.0.1:7890 端口生效，非 HTTP 协议应用（如 UDP 游戏数据包）会直接绕过代理导致掉线；TUN 模式在网卡驱动层实现报文重定向，真正做到全系统透明代理。",
      "二、服务模式（Service Mode）的必要性：Clash Verge Rev 默认运行于普通用户权限，无法随意向操作系统注册虚拟网络驱动。安装 Service Mode 可以使后台守护进程以 LocalSystem 高特权常驻，彻底告别每次开机弹窗请求管理员权限的烦恼。",
      "三、核心排查：开启 TUN 模式后出现全盘断网的根源分析：90% 是由于本地防火墙拦截了 Mihomo 核心通信，或者 DNS 发生死循环（fake-ip 模式未正常配置 nameserver）。只需将 DNS 恢复为 223.5.5.5 与 119.29.29.29 即可秒级复原。"
    ],
    faqs: [
      { q: "开启 TUN 模式玩外服游戏会有延迟增加吗？", a: "TUN 虚拟网卡在本地仅增加不到 0.5ms 的数据包转发开销，延迟几乎完全取决于你所连接的专线节点物理质量（如选择光速云的 22ms 香港专线）。" },
      { q: "Mac 系统开启 TUN 模式为什么提示需要授权系统扩展？", a: "macOS 拥有严格的沙盒安全机制，首次创建虚拟网络适配器必须在‘系统设置 -> 隐私与安全性’中手动点击‘允许’系统扩展载入。" }
    ]
  },
  {
    slug: "shadowrocket-ios-installation-config-guide",
    title: "Shadowrocket（小火箭）iOS 最强上手手册：从美区账号购买到规则重写",
    category: "mobile",
    categoryName: "移动端系统 (iOS/Android)",
    date: "2026-11-04",
    readTime: "12 分钟",
    excerpt: "针对 iPhone / iPad 用户的全流程实战：外区 Apple ID 注册与礼品卡充值、小火箭下载安装、机场订阅导入、HTTPS 解密与流媒体分流全流程。",
    badge: "[IOS]",
    targetKeyword: "Shadowrocket小火箭全教程",
    platform: "iOS / iPadOS",
    answerBlock: "Shadowrocket（俗称小火箭）是 iOS 平台上性价比最高（仅需 $2.99 一次性买断）且支持协议最广泛的代理工具。支持 Shadowsocks、Trojan、VLESS、Hysteria 2 等全套协议。只需在美区 App Store 购买后，通过‘一键导入订阅’并开启‘配置’模式，即可在 iPhone 上实现国内直连、海外专线加速的无感冲浪。",
    content: [
      "一、外区 Apple ID 准备与安全防坑：严禁在手机设置中直接登录陌生外区 iCloud！务必仅在 App Store 商店内切换登录外区账号，并在完成小火箭下载后立即换回国区个人账号。",
      "二、分流策略组的正确配置：小火箭全局路由千万不要选‘代理’或‘直接’，务必选择‘配置 (Config)’。这会激活默认的 ACL/GEOIP 规则，保证访问微信、淘宝等国内 App 绝对直连，不消耗机场订阅流量。",
      "三、HTTPS 解密与证书信任：在小火箭‘配置 -> 模块’中可配置去广告与解锁模块，这需要安装根证书并在 iOS 系统‘设置 -> 通用 -> 关于本机 -> 证书信任设置’中手动勾选完全信任。"
    ],
    faqs: [
      { q: "在淘宝买现成的小火箭兑换码安全吗？", a: "存在一定风险。部分不良商家使用黑卡（盗刷信用卡）兑换礼品卡，可能导致你的外区 Apple ID 被苹果封禁。推荐自行注册美区账号并在官网购买官方正规礼品卡充值。" },
      { q: "小火箭在后台运行会严重耗电吗？", a: "Shadowrocket 作为基于 iOS Network Extension 框架开发的轻量级网络扩展，待机功耗极低。如果遇到发热耗电，通常是节点持续发生断流重试所致，建议切换为稳定性更高的 IEPL 专线服务商。" }
    ]
  },
  {
    slug: "nexttrace-routing-diagnosis-qos-test",
    title: "NextTrace 命令行路由跟踪实战：一秒查清节点是否被运营商公网 QoS 限速",
    category: "diagnostics",
    categoryName: "网络诊断与抓包",
    date: "2026-11-01",
    readTime: "8 分钟",
    excerpt: "手把手教你使用开源高颜值路由可视化工具 NextTrace：精准识别骨干网 AS4134/AS4809/AS9929/CMNET、跨境跳数、海缆登陆站与晚高峰丢包节点。",
    badge: "[DIAGNOSTICS]",
    targetKeyword: "NextTrace路由跟踪教程",
    platform: "跨平台 (Win/Mac/Linux)",
    answerBlock: "传统 tracert 工具速度慢且无法展示 IP 归属运营商与海缆跳数。NextTrace 是基于 Go 语言开发的现代化可视化路由跟踪利器。运行命令只需一行即可绘制出数据包经过的每一跳省份、城市、ASN 以及是否经过了 GFW 国际出口，是判断节点是否遭遇晚高峰 QoS 尾部丢包的终极排查利器。",
    content: [
      "一、NextTrace 安装与极速运行：Windows 用户通过 PowerShell 运行 `winget install NextTrace` 或下载免安装 exe；macOS 用户通过 `brew install nexttrace` 即可完成部署。",
      "二、核心排查命令范例：`nexttrace 1.1.1.1` 或针对你的机场入口 IP 运行 `nexttrace -M [入口IP]`。在输出报告中重点关注：骨干网是否为 163 (AS4134)？在北上广国际局处的丢包率是否陡增至 20% 以上？",
      "三、专线节点在 NextTrace 中的典型表现：对于光速云等具备 IEPL 专线的服务商，NextTrace 显示国内直接进入深圳/广州内网机房，紧接着直接在香港落地，中间无任何公网跨洋路由跳数，且丢包率持续为 0.00%。"
    ],
    faqs: [
      { q: "NextTrace 显示很多跳数出现 * 号超时是线路坏了吗？", a: "不一定。许多骨干网运营商的核心路由设备默认关闭了对 ICMP 报文的回应以防范 DDoS 泛洪攻击，只要最后一跳能正常抵达且整体延迟平稳，中间的 * 号属于正常现象。" }
    ]
  },
  {
    slug: "openwrt-passwall-home-gateway-setup",
    title: "OpenWrt 软路由 PassWall 科学上网全屋覆盖配置：实现电视与主机全家桶翻墙",
    category: "router",
    categoryName: "软路由与网关",
    date: "2026-10-28",
    readTime: "14 分钟",
    excerpt: "家庭多设备出海终极方案：在 x86 软路由或轻量嵌入式盒子中配置 PassWall / OpenClash，实现全屋 Apple TV、PS5、Switch 与智能家居全自动透明代理。",
    badge: "[ROUTER]",
    targetKeyword: "OpenWrt软路由PassWall配置教程",
    platform: "OpenWrt / Linux",
    answerBlock: "通过在家庭主路由或旁路由上运行 OpenWrt PassWall / OpenClash，局域网内的所有手机、电脑、智能电视（Apple TV/索尼）、游戏主机（PS5/Xbox/Switch）无需安装任何客户端软件，连上家庭 Wi-Fi 即可全自动享受科学上网与国内流量分流。",
    content: [
      "一、主路由模式 vs 旁路由模式选型建议：主路由模式网络拓扑最简洁，承担全家拨号与 DHCP 分发；旁路由模式适合已有稳定主路由的家庭，将网关指向旁路由即可享受无感代理，发生故障时不影响家庭基础断网。",
      "二、PassWall 节点订阅与分流策略：配置 ChinaDNS-NG 进行防污染解析，将国内域名分配给 223.5.5.5 解析，海外域名走专线代理解析，从源头杜绝 DNS 污染。",
      "三、游戏主机的 NAT 类型优化：开启 PassWall 的 UDP 转发与 Fullcone NAT 支持，让 Switch/PS5 联机游戏达到 NAT Type A/B，彻底告别外服联机失败与掉线卡顿。"
    ],
    faqs: [
      { q: "软路由科学上网对 CPU 性能要求高吗？", a: "普通的双核 J1900 或 N4100 处理器足以轻松跑满 300Mbps~500Mbps 代理流量；若需要跑满千兆科学上网，推荐使用 N5105 或 N100 以上处理器。" }
    ]
  }
];
