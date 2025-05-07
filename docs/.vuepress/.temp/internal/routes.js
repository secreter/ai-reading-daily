export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"All in AI，看见未来"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/posts/2025-05-07.html", { loader: () => import(/* webpackChunkName: "posts_2025-05-07.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/posts/2025-05-07.html.js"), meta: {"_blog":{"title":"2025-05-07AI日报：AI开发工具：VSCode之争打响; AI玩具创业热潮遇冷; Gemini 2.5 Pro编程屠榜","author":"","date":"2025-05-07T00:00:00.000Z","category":[],"tag":[],"excerpt":"<blockquote>\n<p>All in AI，看见未来。 每天精选最值得读的AI文章，帮你筛掉时代的噪音。 以简讯见广度，以深读见洞察。 技术、趋势、思考，一站式掌握AI世界。</p>\n</blockquote>\n<h1>2025-05-08 资讯日报</h1>\n<h2>新闻资讯</h2>\n<h3>AI开发工具：VSCode之争打响</h3>\n<p>AI开发工具领域，VSCode限制多，开发者面临战略抉择。OpenVSX是替代方案但有缺陷，Cursor崛起，微软出手让部分插件在其IDE失效，大家盼良性竞争、开放规则。<a href=\"https://mp.weixin.qq.com/s?__biz=Mzg4NDQwNTI0OQ==&amp;chksm=ce44c719678dea2f549b2fd523981398ee9bd5c59d85bef9a5815d5c9de23d3ba7497c2f3c38&amp;idx=1&amp;mid=2247586727&amp;sn=0820e4c6cd97dabc7b8e3e57c7baa115#rd\" target=\"_blank\" rel=\"noopener noreferrer\">&gt;阅读原文</a></p>"},"title":"2025-05-07AI日报：AI开发工具：VSCode之争打响; AI玩具创业热潮遇冷; Gemini 2.5 Pro编程屠榜"} }],
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
