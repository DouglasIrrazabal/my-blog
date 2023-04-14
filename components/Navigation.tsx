"use client";

import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/memoji-dev.png";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Douglas Irrazabal", name: "Home", path: "/" },
  { title: "About", name: "About", path: "/about" },
  { title: "Blog", name: "Blog", path: "/blog" },
];

const Navigation = () => {
  const isActive = (path: string) => usePathname() === path;

  return (
    <header className="flex flex-col space-y-4 content-between">
      <Image
        src={avatar}
        alt="Memoji de Doug"
        priority={true}
        width={0}
        height={0}
        className="w-12 h-auto rounded-full"
      />
      <h1 className="text-3xl font-bold">Douglas Irrazabal</h1>
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
    </header>
  );
};

export default Navigation;
