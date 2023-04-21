import Markdown from "markdown-to-jsx";
import getPostsMetadata from "@/services/getPostsMetadata";
import getPostContent from "@/services/getPostContent";
import { PostMetadata } from "@/models/PostMetadata";
import { Metadata } from "next";

export const generateStaticParams = () => {
  const posts = getPostsMetadata();

  return posts.map(({ slug }: PostMetadata) => slug);
};

export const generateMetadata = (title: string, subtitle: string): Metadata => {
  return { title: title, description: subtitle };
};

const PostPage = (props: any) => {
  const { slug } = props.params;
  const {
    data: { title, subtitle },
    content,
  } = getPostContent(slug);

  generateMetadata(title, subtitle);

  return (
    <article>
      <h1 className="pb-2">{title}</h1>
      <Markdown className="blog-content">{content}</Markdown>
    </article>
  );
};

export default PostPage;
