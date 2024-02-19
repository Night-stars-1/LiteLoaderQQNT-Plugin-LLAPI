/*
 * @Date: 2024-01-20 16:53:41
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-02-19 17:49:49
 */
import { defineConfig } from "vitepress";


// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",
    lang: "zh-Hans",
    title: "LLAPI",
    description: "封装部分API，简化开发",
    ignoreDeadLinks: true,
    sitemap: {
        hostname: "https://llapi.srap.link"
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "首页", link: "/" },
            { text: "开始使用", link: "/docs/LLAPI", activeMatch: "/docs" },
        ],
        sidebar: [
            {
                text: "教程",
                items: [
                    {
                        text: "开始使用",
                        collapsed: false,
                        items: [
                            { text: "Modules", link: "/docs/modules" },
                            { text: "LLAPI", link: "/docs/modules/llapi.LLAPI" }
                        ]
                    },
                ]
            }
        ],
        editLink: {
            pattern: "https://github.com/Night-stars-1/LiteLoaderQQNT-Plugin-LLAPI/edit/DOCS/src/:path",
            text: "在GitHub上编辑此页面"
        },
        lastUpdated: {
            text: "最后更新",
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "short"
            }
        },
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        search: {
            provider: "local",
        },
        footer: {
            message: "基于 MIT 许可发布",
            copyright: "版权所有 © 2024 Night-stars-1"
        },
        externalLinkIcon: true
    }
});
