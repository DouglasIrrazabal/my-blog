import Link from "next/link";
import { PostMetadata } from "@/models/PostMetadata";
import getPostsMetadata from "@/services/getPostsMetadata";

const ListBlogPosts = () => {
  const postMetadata = getPostsMetadata();

  return postMetadata.map(
    ({ title, subtitle, publishedAt, slug }: PostMetadata) => (
      <div className="pb-2">
        <Link href={`blog/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <p>{subtitle}</p>
        <p className="text-sm text-neutral-400">{publishedAt}</p>
      </div>
    )
  );
};

export default ListBlogPosts;
