"use client";

import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/circle-avatar.svg";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Douglas Irrazabal", name: "Home", path: "/" },
  { title: "Blog", name: "Blog", path: "/blog" },
];

const Navigation = () => {
  const getPath = () => {
    let pathName = usePathname() || "/";
    if (pathName.includes("/blog/")) {
      pathName = "/blog";
    }

    return pathName;
  };

  const isActive = (path: string) => getPath() === path;

  const getTitle = () => {
    const pathName = getPath();
    const navObject = navItems.find(({ path }) => path === pathName);

    return navObject?.title;
  };

  return (
    <div className="flex flex-col space-y-4 content-between">
      <Image
        src={avatar}
        alt="Memoji de Doug"
        width={0}
        height={0}
        sizes="100vw"
        className="w-12 h-auto"
      />
      <h1 className="text-3xl font-bold">{getTitle()}</h1>
      <nav className="flex flex-row">
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className={`mr-4 text-lg md:hover:underline ${
              isActive(path) ? "text-neutral-50" : "text-neutral-400"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
