export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"All in AI，看见未来"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/posts/2025-05-07.html", { loader: () => import(/* webpackChunkName: "posts_2025-05-07.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/posts/2025-05-07.html.js"), meta: {"_blog":{"title":"2025-05-07AI日报：Netlify谈Next.js部署挑战; 大咖共探多模态模型应用; 数据中心投资现状分化","author":"","date":"2025-05-07T00:00:00.000Z","category":[],"tag":[],"excerpt":"<blockquote>\n<p>All in AI，看见未来。 每天精选最值得读的AI文章，帮你筛掉时代的噪音。 以简讯见广度，以深读见洞察。 技术、趋势、思考，一站式掌握AI世界。</p>\n</blockquote>\n<h1>2025-05-07 资讯日报</h1>\n<h2>新闻资讯</h2>\n<h3>Netlify谈Next.js部署挑战</h3>\n<p>我是 Netlify，部署 Next.js 网站遇到不少问题，像没适配器、无生产级文档、行为未文档化等。不过我已和 Next.js 团队沟通，还会和其他方合作起草 RFC，一起为开发者打造好体验。<a href=\"https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&amp;chksm=bc974a5a22be1ed2c2926eef945e7335922653d785b698f9d84e34a0f6242c22aeea8f2f45bc&amp;idx=3&amp;mid=2651244100&amp;sn=b5445e05bbea805c3ad1f0492f871746#rd\" target=\"_blank\" rel=\"noopener noreferrer\">&gt;阅读原文</a></p>"},"title":"2025-05-07AI日报：Netlify谈Next.js部署挑战; 大咖共探多模态模型应用; 数据中心投资现状分化"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
