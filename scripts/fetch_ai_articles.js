import axios from "axios";
import fs from "fs";
import path from "path";

async function fetchArticle() {
  const apiUrl = process.env.NODE_ENV === 'production' 
    ? "https://www.feishudocs.com/api/articles/daily?from=github"
    : "http://localhost:3003/api/articles/daily?from=github";
  const response = await axios.get(apiUrl);
  return response.data || "";
}

function generateMarkdownFile(markdownContent, title, today) {
  const filename = `${today}.md`;
  const postsDir = path.join(path.dirname(path.dirname(import.meta.url.replace("file://", ""))), "docs", "posts");
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }
  const filePath = path.join(postsDir, filename);
  const frontMatter = `---\ndate: ${today}\ntitle: ${title}\n---\n\n`;
  fs.writeFileSync(filePath, frontMatter + markdownContent, "utf-8");
  console.log(`已生成: ${filePath}`);
}

async function publishToJuejin(title, markdownContent,brief_content) {
  try {
    const publishUrl = process.env.NODE_ENV === 'production' 
      ? "https://www.feishudocs.com/api/publishjuejin"
      : "http://localhost:3003/api/publishjuejin";
    // const brief_content = markdownContent.slice(0, 200).replace(/[#>*\-\[\]!`]/g, "").replace(/\n/g, " ");
    const image = "https://picsum.photos/1200/630?random=" + Math.floor(Math.random() * 10000); // 随机风景图作为封面
    const publishRes = await axios.post(publishUrl, {
      title,
      content: markdownContent,
      brief_content,
      image
    });
    if (publishRes.data && publishRes.data.success) {
      console.log("掘金发布成功",publishRes.data);
    } else {
      console.error("掘金发布失败:", publishRes.data && publishRes.data.message ? publishRes.data.message : "未知错误");
    }
  } catch (e) {
    console.error("掘金发布异常:", e.message);
  }
}

async function fetchAiArticle() {
  try {
    const markdownContent = await fetchArticle();
    // 提取前四个以###开头的标题
    const matches = Array.from(markdownContent.matchAll(/^###\s*(.+)$/gm)).map(m => m[1]);
    let brief_content = matches.join("; ");
    while (brief_content.length < 50 && matches.length > 0) {
      brief_content += "; " + matches.join("; ");
    }
    if (brief_content.length < 50) {
      brief_content = brief_content.padEnd(50, "。");
    }
    brief_content = brief_content.slice(0, 90);
    const image = "https://picsum.photos/1200/630?random=" + Math.floor(Math.random() * 10000); // 随机风景图作为封面
    const today = new Date().toISOString().slice(0, 10);
    const titleSegments = brief_content.split("; ").slice(0, 3).join("; ");
    const title = `AI日报：${titleSegments}`;
    generateMarkdownFile(markdownContent, title, today);
    await publishToJuejin(title, markdownContent,brief_content);
  } catch (error) {
    console.error("获取文章失败:", error.message);
    process.exit(1);
  }
}

fetchAiArticle();