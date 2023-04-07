import Link from "next/link";
import { PostMetadata } from "@/models/PostMetadata";
import getPostsMetadata from "@/services/getPostsMetadata";

const BlogPage = () => {
  const postMetadata = getPostsMetadata();

  return postMetadata.map(
    ({ title, subtitle, publishedAt, slug }: PostMetadata) => (
      <div className="pb-2">
        <Link href={`blog/${slug}`}>
          <h1 className="text-xl font-semibold">{title}</h1>
        </Link>
        <h2 className="text-lg">{subtitle}</h2>
        <p className="text-base text-neutral-400">{publishedAt}</p>
      </div>
    )
  );
};

export default BlogPage;
