import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = ({ title, subtitle, date, slug }: PostMetadata) => {
  return (
    <>
      <Link href={`/posts/${slug}/`}>
        <h2>{title}</h2>
      </Link>
      <p>{subtitle}</p>
      <p>{date}</p>
    </>
  );
};

export default PostPreview;
