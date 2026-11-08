#!/usr/bin/env node
/**
 * 生产构建后处理脚本
 * 确保无论 Cloudflare Pages 配置的输出目录是 dist 还是 dist/client，
 * 根目录都具备完整的静态 index.html 与静态资源，彻底避免部署后 404
 */
import { cpSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const distDir = path.join(root, "dist");
const clientDir = path.join(distDir, "client");

if (existsSync(clientDir)) {
  try {
    cpSync(clientDir, distDir, { recursive: true });
    console.log("[post-build] Successfully synchronized dist/client static assets to dist root for Cloudflare Pages compatibility.");
  } catch (err) {
    console.warn("[post-build] Warning: Could not copy client assets to dist root:", err.message);
  }
}
