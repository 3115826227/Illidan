import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Illidan 技术文档中心', description: '开发指南与 API 文档', lang: 'zh-CN', base: '/Illidan/', cleanUrls: true, lastUpdated: true,
  themeConfig: {
    nav: [{text:'首页',link:'/'},{text:'使用指南',link:'/guide/'},{text:'API 文档',link:'/api/'},{text:'系统架构',link:'/development/architecture'}],
    sidebar: {'/guide/':[{text:'使用指南',items:[{text:'快速开始',link:'/guide/'}]}],'/api/':[{text:'API 文档',items:[{text:'接口概览',link:'/api/'}]}],'/development/':[{text:'开发文档',items:[{text:'系统架构',link:'/development/architecture'}]}]},
    search: {provider:'local'}, socialLinks:[{icon:'github',link:'https://github.com/3115826227/Illidan'}]
  }
})
