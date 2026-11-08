export interface ProxyClient {
  name: string;
  os: "windows" | "android" | "ios" | "macos" | "linux" | "openwrt";
  osLabel: string;
  kernel: string;
  features: string;
  downloadUrl: string;
  isPopular?: boolean;
}

export const proxyClients: ProxyClient[] = [
  // Windows
  {
    name: "Clash Verge Rev",
    os: "windows",
    osLabel: "Windows 电脑",
    kernel: "Mihomo (Meta) 内核",
    features:
      "全功能订阅管理、智能规则分流、TUN 虚拟网卡模式、现代化 Fluent UI 界面，新手及进阶首选",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
    isPopular: true,
  },
  {
    name: "v2rayN",
    os: "windows",
    osLabel: "Windows 电脑",
    kernel: "Xray / sing-box 双核心",
    features:
      "经典 Windows 客户端，支持 VLESS、Trojan、Shadowsocks 等全协议，节点批量测速与自定路由",
    downloadUrl: "https://github.com/2dust/v2rayN",
    isPopular: true,
  },
  {
    name: "FlClash",
    os: "windows",
    osLabel: "Windows 电脑",
    kernel: "Mihomo 内核",
    features: "基于 Flutter 构建的轻量高颜值客户端，多端一致体验，规则分流清晰直观",
    downloadUrl: "https://github.com/chen08209/FlClash",
  },
  {
    name: "Hiddify",
    os: "windows",
    osLabel: "Windows 电脑",
    kernel: "sing-box 核心",
    features: "全协议自动节点优选，支持一键远程订阅与防探测保护，适合小白上手",
    downloadUrl: "https://github.com/hiddify/hiddify-next",
  },
  {
    name: "Karing",
    os: "windows",
    osLabel: "Windows 电脑",
    kernel: "sing-box 内核",
    features: "面向跨设备新手的极简代理客户端，全自动化规则分流与开箱即用体验",
    downloadUrl: "https://github.com/KaringX/karing",
  },

  // Android
  {
    name: "v2rayNG",
    os: "android",
    osLabel: "Android 安卓",
    kernel: "Xray 核心",
    features: "安卓端最具影响力的全能代理，支持订阅一键更新、分应用代理、分流规则配置",
    downloadUrl: "https://github.com/2dust/v2rayNG",
    isPopular: true,
  },
  {
    name: "FlClash for Android",
    os: "android",
    osLabel: "Android 安卓",
    kernel: "Mihomo 内核",
    features: "极简清爽的 Material You 界面，支持 Clash YAML 订阅无缝导入与节点测速",
    downloadUrl: "https://github.com/chen08209/FlClash",
    isPopular: true,
  },
  {
    name: "Clash Meta for Android",
    os: "android",
    osLabel: "Android 安卓",
    kernel: "Mihomo 核心",
    features: "支持完整的 Clash 规则集与扩展协议，底层稳定性高，资源占用适中",
    downloadUrl: "https://github.com/MetaCubeX/ClashMetaForAndroid",
  },
  {
    name: "Hiddify Android",
    os: "android",
    osLabel: "Android 安卓",
    kernel: "sing-box 核心",
    features: "多协议聚合，支持扫码导入与深度分流，界面现代化直观",
    downloadUrl: "https://github.com/hiddify/hiddify-next",
  },

  // iOS
  {
    name: "Shadowrocket (小火箭)",
    os: "ios",
    osLabel: "iPhone / iPad",
    kernel: "自研高性能核心",
    features:
      "iOS 平台最经典的规则代理神器。支持节点扫码、HTTPS 解密、抓包与自动化脚本（需美区 App Store）",
    downloadUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
    isPopular: true,
  },
  {
    name: "Stash",
    os: "ios",
    osLabel: "iPhone / iPad",
    kernel: "Clash 核心兼容",
    features: "iOS 版 Clash 首选，支持覆写配置、策略组管理与按应用/域名分流规则",
    downloadUrl: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349",
    isPopular: true,
  },
  {
    name: "Quantumult X (圈X)",
    os: "ios",
    osLabel: "iPhone / iPad",
    kernel: "自研规则引擎",
    features: "高级网络调试、重写规则与精细化流量控制，适合极客用户",
    downloadUrl: "https://apps.apple.com/us/app/quantumult-x/id1453926514",
  },
  {
    name: "Surge 5",
    os: "ios",
    osLabel: "iPhone / iPad",
    kernel: "高端网络调试架构",
    features: "企业级网络调试工具，极致性能与极低延迟，支持完整的网络分析与策略编排",
    downloadUrl: "https://nssurge.com/",
  },

  // macOS
  {
    name: "Clash Verge Rev for Mac",
    os: "macos",
    osLabel: "macOS 苹果电脑",
    kernel: "Mihomo (Apple Silicon 原生适配)",
    features: "支持 M 系列芯片与 Intel 架构，原生深色模式，菜单栏常驻控制与 TUN 模式",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
    isPopular: true,
  },
  {
    name: "FlClash for macOS",
    os: "macos",
    osLabel: "macOS 苹果电脑",
    kernel: "Mihomo 核心",
    features: "跨平台一致的操作逻辑，轻量低内存占用，支持系统级代理一键切换",
    downloadUrl: "https://github.com/chen08209/FlClash",
  },
  {
    name: "Surge for Mac",
    os: "macos",
    osLabel: "macOS 苹果电脑",
    kernel: "旗舰级网络引擎",
    features: "Mac 平台网络调试与代理天花板，支持网关接管模式与完整的仪表盘观测",
    downloadUrl: "https://nssurge.com/",
  },

  // Linux & OpenWrt
  {
    name: "v2rayA",
    os: "linux",
    osLabel: "Linux 服务器/桌面",
    kernel: "Xray / v2ray 核心",
    features: "Web 界面图形化管理，透明代理支持，适合软路由、NAS、Docker 与 Linux 开发者主机",
    downloadUrl: "https://github.com/v2rayA/v2rayA",
    isPopular: true,
  },
  {
    name: "OpenClash",
    os: "openwrt",
    osLabel: "OpenWrt / 软路由",
    kernel: "Mihomo / Clash 内核",
    features: "软路由全屋翻墙第一选择。全屋设备无感透明加速、分流策略自定、DNS 防污染劫持拦截",
    downloadUrl: "https://github.com/vernesong/OpenClash",
    isPopular: true,
  },
];
