import Link from "next/link";
import { PostMetadata } from "@/models/PostMetadata";
import getPostsMetadata from "@/services/getPostsMetadata";

const BlogPage = () => {
  const postMetadata = getPostsMetadata();

  return postMetadata.map(
    ({ title, subtitle, publishedAt, slug }: PostMetadata) => (
      <>
        <Link href={`blog/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <p>{subtitle}</p>
        <p>{publishedAt}</p>
      </>
    )
  );
};

export default BlogPage;
