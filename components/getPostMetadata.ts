import fs from "fs";
import { PostMetadata } from "./PostMetadata";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8");
    const {
      data: { title, subtitle, date },
    } = matter(fileContent);
    return {
      title,
      subtitle,
      date,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
