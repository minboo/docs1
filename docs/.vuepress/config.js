const moment = require('moment');
module.exports = {
  title: "在路上",
  description: "description描述",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/hero.png' }],
    ['mata', { name: 'author', content: '在路上' }],
    ['mata', { name: 'Keyword', content: '我的博客' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated', {
        transformer: (timestamp) => {
          moment.locale("zh-cn")
          return moment(timestamp).format("LLLL")
        }
      }
    ],
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
  ],
  themeConfig: {
    // navbar: false, // 禁用导航
    lastUpdated: '更新时间', // 最后更新时间
    sidebar: 'auto', // 自动生成侧边栏
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1', items: [
              { text: 'Home', link: '/' },
              { text: 'About', link: '/about/' },
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'About', link: '/about/' },
            ]
          }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true
  }
}
