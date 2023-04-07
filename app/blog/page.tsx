import Link from "next/link";
import { PostMetadata } from "@/models/PostMetadata";
import getPostsMetadata from "@/services/getPostsMetadata";

const BlogPage = () => {
  const postMetadata = getPostsMetadata();

  return postMetadata.map(
    ({ title, subtitle, publishedAt, slug }: PostMetadata) => (
      <>
        <hr className="my-7 h-px bg-neutral-600 border-0" />
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
