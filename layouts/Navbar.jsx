import {
  Logo,
  MenuDesktop,
  MenuMobile,
  Button,
  ToggleMobile,
} from "@/components";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container relative w-full flex-between py-6">
        <div className="flex-between w-full">
          <Logo />
          <MenuDesktop />
          <Button
            label="Get The App"
            styles="bg-priamry text-white ml-auto hidden lg:block"
          />
        </div>
        <MenuMobile />
        <ToggleMobile />
      </div>
    </nav>
  );
};

export default Navbar;
