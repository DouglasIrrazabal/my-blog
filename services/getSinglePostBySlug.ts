import { PostMetadata } from "@/models/PostMetadata";
import { Client } from "@notionhq/client";
import getPostMetadata from "./getPostMetadata";
import { NotionToMarkdown } from "notion-to-md";

const connectNotionDB = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2md = new NotionToMarkdown({ notionClient: connectNotionDB });

const getSinglePost = async (slug: string) =>
  connectNotionDB.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

export const getSinglePostBySlug = async (slug: string) => {
  const response = await connectNotionDB.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPostMetadata(page);
  const mdblocks = await n2md.pageToMarkdown(page.id);
  const mdString = n2md.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString,
  };
};
