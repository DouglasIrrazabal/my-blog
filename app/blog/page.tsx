import { use } from "react";
import Link from "next/link";
import getPublishedPosts from "@/services/getPublishedPosts";

const ListBlogPosts = () => {
  const allPosts = use(getPublishedPosts());

  return allPosts.map(({ title, subtitle, slug, date }) => (
    <div className="pb-2">
      <Link href={`blog/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{subtitle}</p>
      <p className="text-sm text-neutral-400">
        {date.toLocaleDateString("es-CL")}
      </p>
    </div>
  ));
};

export default ListBlogPosts;
