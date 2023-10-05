import { navLinks } from "@/constants";

import { useStateContext } from "@/contexts/ContextProviders";
import Link from "next/link";

const MenuDesktop = () => {
  const { activeLink, setActiveLink } = useStateContext();
  return (
    <ul className="md-flex-center hidden gap-6 ml-10">
      {navLinks.map((link, index) => (
        <li
          key={index}
          onClick={() => {
            setActiveLink(link.label);
          }}
        >
          <Link
            href={link.href}
            className={`${activeLink === link.label && "!text-gray-50"} aLink`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuDesktop;
