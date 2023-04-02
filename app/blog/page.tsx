import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <>{postPreviews}</>;
};

export default BlogPage;
