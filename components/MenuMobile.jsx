import { motion } from "framer-motion";

import { navLinks } from "@/constants";
import { navVariants } from "@/utils/motion";
import { useStateContext } from "@/contexts/ContextProviders";
import Link from "next/link";

const MenuMobile = () => {
  const { activeMenu, activeLink, setActiveLink } = useStateContext();
  return (
    <motion.ul
      variants={navVariants}
      initial="hidden"
      animate={activeMenu ? "show" : "hidden"}
      className={`${
        !activeMenu && "!hidden"
      } absolute -z-50 left-0 right-0 flex-center flex-col top-[80px] p-10 w-full gap-10 bg-secondary md:hidden`}
    >
      {navLinks.map((link, index) => (
        <li
          key={index}
          onClick={() => {
            setActiveLink(link.label);
          }}
        >
          <Link
            href={link.href}
            className={`${activeLink === link.label && "text-gray-50"} aLink`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default MenuMobile;
