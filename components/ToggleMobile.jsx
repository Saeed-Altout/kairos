import { FiX, FiMenu } from "react-icons/fi";

import { useStateContext } from "@/contexts/ContextProviders";

const ToggleMobile = () => {
  const { activeMenu, handleActiveMenu } = useStateContext();
  return (
    <button
      onClick={handleActiveMenu}
      type="button"
      className="block text-3xl text-white md:hidden w-fit"
    >
      {activeMenu ? <FiX /> : <FiMenu />}
    </button>
  );
};

export default ToggleMobile;
