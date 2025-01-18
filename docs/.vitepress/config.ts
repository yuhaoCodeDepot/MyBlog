/*
 * @Author: yuhao 1334890761@qq.com
 * @Date: 2025-01-02 12:04:05
 * @LastEditors: yuhao 1334890761@qq.com
 * @LastEditTime: 2025-01-02 12:28:59
 * @FilePath: /newblog/docs/.vitepress/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "一塘余水",
  description: "一塘余水的个人博客",
  base: '/MyBlog/',
  
  // 主题配置
  themeConfig: {
    // Logo 配置
    logo: '../images/logo.png',
    siteTitle: '一塘余水',


    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '前端开发', 
        items: [
          { text: 'HTML/CSS', link: '/frontend/html-css/html-basics' },
          { text: 'JavaScript', link: '/frontend/javascript/basics' },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' }
        ]
      },
      {
        text: '后端开发',
        items: [
          { text: 'Node.js', link: '/backend/nodejs/' },
          { text: 'Python', link: '/backend/python/' },
          { text: 'Java', link: '/backend/java/' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'MySQL', link: '/database/mysql/' },
          { text: 'MongoDB', link: '/database/mongodb/' },
          { text: 'Redis', link: '/database/redis/' }
        ]
      },
      { text: '摄影作品', link: '/photography/' },
      { text: '关于我', link: '/about' }
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuhaoCodeDepot/MyBlog' }
    ],
    
    // 侧边栏
    sidebar: {
      '/frontend/': [
        {
          text: 'HTML/CSS',
          collapsed: false,
          items: [
            { text: 'HTML基础', link: '/frontend/html-css/html-basics' },
            { text: 'CSS布局', link: '/frontend/html-css/css-layout' }
          ]
        },
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'JS基础', link: '/frontend/javascript/basics' },
            { text: '异步编程', link: '/frontend/javascript/async' }
          ]
        }
      ],
      '/backend/': [
        {
          text: 'Node.js',
          collapsed: false,
          items: [
            { text: '基础概念', link: '/backend/nodejs/basics' },
            { text: 'Express框架', link: '/backend/nodejs/express' }
          ]
        }
      ],
      '/database/': [
        {
          text: '数据库基础',
          collapsed: false,
          items: [
            { text: 'MySQL基础', link: '/database/mysql/basics' },
            { text: 'MongoDB入门', link: '/database/mongodb/basics' }
          ]
        }
      ],
      '/photography/': [
        {
          text: '摄影作品',
          collapsed: false,
          items: [
            { text: '风景摄影', link: '/photography/landscape' },
            { text: '人像摄影', link: '/photography/portrait' }
          ]
        }
      ]
    },
    
    // 页脚
    footer: {
      message: '用 ❤️ 搭建 | 一塘余水的个人空间',
      copyright: 'Copyright © 2024-present 一塘余水'
    },

    // 文章相关配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },
  
  // 外观配置
  appearance: true,
  
  // 其他配置
  lastUpdated: true,
  cleanUrls: true,

  // markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // head 配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
}) 