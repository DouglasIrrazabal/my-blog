import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
};

const Navigation = () => {
  return (
    <nav>
      <div>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link key={path} href={path}>
              <span>{name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
