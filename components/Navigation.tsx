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
    <nav className="flex flex-row place-content-start md:flex-col md:pr-20 md:mt-4">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link key={path} href={path}>
            <span className="py-[5px] px-[10px] bg-neutral-900 rounded">
              {name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
