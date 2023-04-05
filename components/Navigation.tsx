"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", name: "home" },
  { path: "/blog", name: "blog" },
];

const Navigation = () => {
  const isActiveLink = (path: string) => {
    let pathName = usePathname() || "/";
    if (pathName.includes("/blog/")) pathName = "/blog";

    return pathName === path;
  };

  return (
    <nav className="flex flex-row place-content-start md:flex-col md:pr-20 md:mt-4">
      {navItems.map(({ path, name }) => (
        <Link
          key={name}
          href={path}
          className={
            isActiveLink(path) ? "bg-neutral-900 rounded" : "text-neutral-400"
          }
        >
          <span className="py-[5px] px-[10px]">{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
