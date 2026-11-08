import { type NavItemProps } from "./types/configDataTypes";

/**
 * 机场cloud 全局导航菜单配置
 */
export const navItems = [
  { label: "首页", href: "/" },
  { label: "机场评测", href: "/airports/" },
  { label: "测速榜", href: "/speedtest/" },
  { label: "工具手册", href: "/tools/" },
  { label: "免费资源", href: "/free/" },
  { label: "常见答疑", href: "/faq/" },
  { label: "跑路预警", href: "/alerts/" },
  { label: "专栏博客", href: "/blog/" },
] as const satisfies readonly NavItemProps[];
