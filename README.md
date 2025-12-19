# 中国历史朝代地图

一个以时间轴为主线的互动地图，展示中国历代朝代、重要都城与历史地点。点击地图标记或左侧信息卡片可查看详情。

## 功能

- 时间轴切换朝代视角与地图缩放
- 朝代概览、政权/都城/战役/名胜信息
- 点击标记或列表跳转并查看详情

## 技术栈

- React + TypeScript + Vite
- Leaflet / React Leaflet
- Tailwind CSS（CDN）

## 本地运行

**前置条件：** Node.js 18+（LTS 推荐）

1. 安装依赖：`npm install`
2. 启动开发：`npm run dev`

## 构建与预览

- 构建：`npm run build`
- 预览：`npm run preview`

## 部署说明

构建后生成 `dist/`，部署时将该目录作为静态站点目录即可。

## 目录结构

- `components/`：UI 与交互组件
- `dynasties/`：各朝代地图与地点数据
- `data.ts`：朝代数据映射入口
