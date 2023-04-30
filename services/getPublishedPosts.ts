import { Client } from "@notionhq/client";
import getPostMetadata from "./getPostMetadata";
import { PostMetadata } from "@/models/PostMetadata";

const connectNotionDB = new Client({
  auth: process.env.NOTION_API_KEY,
});

const publishedPosts = await connectNotionDB.databases.query({
  database_id: process.env.NOTION_DATABASE_ID || "",
  filter: {
    property: "Status",
    status: {
      equals: "Published",
    },
  },
  sorts: [
    {
      property: "Date",
      direction: "descending",
    },
  ],
});

const getPublishedPosts = async (): Promise<PostMetadata[]> =>
  publishedPosts.results.map((post) => getPostMetadata(post));

export default getPublishedPosts;
