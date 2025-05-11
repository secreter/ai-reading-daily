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
  ["/posts/2025-05-11.html", { loader: () => import(/* webpackChunkName: "posts_2025-05-11.html" */"/Users/chaoyang/study/projcet/ai-daily/docs/.vuepress/.temp/pages/posts/2025-05-11.html.js"), meta: {"_blog":{"title":"2025-05-11AI日报：JetBrains AI助手差评风波; 两CEO谈AI Agent发展前景; 奥特曼：美AI监管勿太严","author":"","date":"2025-05-11T00:00:00.000Z","category":[],"tag":[],"excerpt":"<blockquote>\n<p>All in AI，看见未来。 每天精选最值得读的AI文章，帮你筛掉时代的噪音。 以简讯见广度，以深读见洞察。 技术、趋势、思考，一站式掌握AI世界。</p>\n</blockquote>\n<h1>2025-05-11 资讯日报</h1>\n<h2>新闻资讯</h2>\n<h3>JetBrains AI助手差评风波</h3>\n<p>JetBrains的AI助手插件口碑崩塌，下载多但评分低，用户不满自动安装、体验差等问题，负面评论被删引抗议。虽推出免费套餐和Junie，仍面临成本高、竞争大难题。<a href=\"https://mp.weixin.qq.com/s?__biz=MzU1NDA4NjU2MA==&amp;chksm=fa77cee83d8f6c048ab93c14cb892694976c8356dbc2832bd32491f30f7890a678f36c207213&amp;idx=1&amp;mid=2247638761&amp;sn=4fe25ceb85f7448ac09d3a893100d0e2#rd\" target=\"_blank\" rel=\"noopener noreferrer\">&gt;阅读原文</a></p>"},"title":"2025-05-11AI日报：JetBrains AI助手差评风波; 两CEO谈AI Agent发展前景; 奥特曼：美AI监管勿太严"} }],
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
