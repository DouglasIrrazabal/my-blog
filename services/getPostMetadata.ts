import { PostMetadata } from "@/models/PostMetadata";

const getPostMetadata = (post: any): PostMetadata => {
  const getTags = (tags: Array<Array<Object>>) =>
    tags.map(({ name }: any) => name);

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    subtitle: post.properties.Subtitle.rich_text[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    date: new Date(post.properties.Date.date.start),
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
};

export default getPostMetadata;
