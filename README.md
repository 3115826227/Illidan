# 伊利丹（Illidan）— 企业综合管理平台文档中心

伊利丹（Illidan）是企业综合管理平台的统一文档仓库，用于维护产品需求、技术架构、前后端开发规范、接口说明与部署指南。

## 关联项目

| 仓库 | 职责 | 技术栈 |
| --- | --- | --- |
| [安度因（Anduin）](https://github.com/3115826227/Anduin) | 后端服务 | Go、Gin、GORM、Viper、Zap |
| [迦罗娜（Garona）](https://github.com/3115826227/Garona) | Web 前端 | Vue 3、TypeScript、Vite、Element Plus |
| [伊利丹（Illidan）](https://github.com/3115826227/Illidan) | 文档中心 | Markdown、VitePress、GitHub Pages |

## 本地运行

```bash
git clone https://github.com/3115826227/Illidan.git
cd Illidan
npm install
npm run docs:dev
```

## 文档结构

- `docs/guide/` — 使用与入门指南
- `docs/development/` — 开发与架构文档
- `docs/api/` — API 文档
- `docs/.vitepress/` — VitePress 配置

后续可按需求逐步补充需求文档、前后端设计和部署说明；不预先创建空目录。

## 在线文档与部署

文档站点：https://3115826227.github.io/Illidan/

当前 GitHub Pages 工作流仍由 `main` 分支触发，确保既有站点发布不受本次初始化影响。正式切换发布分支前，需要同步修改 `.github/workflows/deploy.yml` 及仓库 Pages 配置。

## Git 分支与提交规范

- `master`：生产稳定分支
- `develop`：开发主线
- `feature_<description>_<YYYYMMDD>`：需求开发
- `hotfix_<description>_<YYYYMMDD>`：紧急修复
- 新需求从 `develop` 创建分支，合并前提交 Pull Request。
- Commit 和 PR 标题必须包含中英文，例如：`docs(readme): add documentation overview | 补充文档中心介绍`。

## 当前状态

文档站点基础结构已建立，内容将随 Anduin 和 Garona 的开发逐步完善。
