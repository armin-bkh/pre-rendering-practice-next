import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon } from "@heroicons/react/outline";
import { BookOpenIcon } from "@heroicons/react/solid";

const links = [
  { id: 1, title: "home", icon: HomeIcon, href: "/" },
  { id: 2, title: "blogs", icon: BookOpenIcon, href: "/blogs" },
];

const Navbar = () => {
  return (
    <header className="p-4 shadow-md shadow-black/20">
      <nav>
        <ul className="flex">
          {links.map((link) => (
            <NavItem key={link.id} link={link} Icon={link.icon} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

const NavItem = ({ Icon, link }) => {
  const router = useRouter();

  return (
    <li
      className={`hover:scale-125 transition transform active:text-blue-400 font-bold ${
        router.pathname === link.href && "text-blue-400"
      } `}
    >
      <Link href={link.href}>
        <a className="px-4 py-1 capitalize flex items-center">
          <Icon className="h-5 mr-2" /> {link.title}
        </a>
      </Link>
    </li>
  );
};
