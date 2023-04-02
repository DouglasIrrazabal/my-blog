import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/models/PostMetadata";

const getPostsMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");
    const {
      data: { title, subtitle, publishedAt },
    } = matter(fileContent);
    return {
      title,
      subtitle,
      publishedAt,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostsMetadata;
