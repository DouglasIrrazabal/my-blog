import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/models/PostMetadata";

const getPostsMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file: string) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName: string) => {
    const folder = path.join(process.cwd(), "posts");
    const fileContent = fs.readFileSync(`${folder}/${fileName}`, "utf8");
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
