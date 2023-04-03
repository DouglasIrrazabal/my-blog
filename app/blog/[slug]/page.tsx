import Markdown from "markdown-to-jsx";
import getPostsMetadata from "@/services/getPostsMetadata";
import getPostContent from "@/services/getPostContent";

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();

  return posts.map((post) => {
    slug: post.slug;
  });
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <h1>{post.data.title}</h1>
      <article className="">
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
};

export default PostPage;
