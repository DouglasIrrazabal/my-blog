import Markdown from "markdown-to-jsx";
import { getSinglePostBySlug } from "@/services/getSinglePostBySlug";

export const dynamicParams = true;

const PostPage = async (props: any) => {
  const { slug } = props.params;

  const {
    metadata: { title },
    markdown,
  } = await getSinglePostBySlug(slug);

  return (
    <article>
      <h1 className="pb-2">{title}</h1>
      <Markdown className="blog-content">{markdown}</Markdown>
    </article>
  );
};

export default PostPage;
