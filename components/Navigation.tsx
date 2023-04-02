import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
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
