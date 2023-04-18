import Link from "next/link";
import { PostMetadata } from "@/models/PostMetadata";
import getPostsMetadata from "@/services/getPostsMetadata";

const ListBlogPosts = () => {
  const postMetadata = getPostsMetadata();
  const sortedPosts = [...postMetadata].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  return sortedPosts.map(
    ({ title, subtitle, publishedAt, slug }: PostMetadata) => (
      <div className="pb-2">
        <Link href={`blog/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <p>{subtitle}</p>
        <p className="text-sm text-neutral-400">
          {publishedAt.toLocaleDateString("es-CL")}
        </p>
      </div>
    )
  );
};

export default ListBlogPosts;
