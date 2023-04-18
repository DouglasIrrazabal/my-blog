import Markdown from "markdown-to-jsx";
import getPostsMetadata from "@/services/getPostsMetadata";
import getPostContent from "@/services/getPostContent";
import { PostMetadata } from "@/models/PostMetadata";

export const generateStaticParams = () => {
  const posts = getPostsMetadata();

  return posts.map(({ slug }: PostMetadata) => slug);
};

const PostPage = (props: any) => {
  const { slug } = props.params;
  const {
    data: { title },
    content,
  } = getPostContent(slug);

  return (
    <article>
      <h1 className="pb-2">{title}</h1>
      <Markdown className="blog-content">{content}</Markdown>
    </article>
  );
};

export default PostPage;
