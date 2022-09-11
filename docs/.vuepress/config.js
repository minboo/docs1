const moment = require('moment');
module.exports = {
    base: "/docs/",
    title: "在路上",
    description: "description描述",
    head: [
        ['mata', { name: 'author', content: '在路上' }],
        ['mata', { name: 'Keyword', content: '我的博客' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    moment.locale("zh-cn")
                    return moment(timestamp).format("LLLL")
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
