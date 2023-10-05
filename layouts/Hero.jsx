import Image from "next/image";

import phone from "@/public/images/hero-app-screens-1600.png";

import { Button } from "@/components";

const Hero = () => {
  return (
    <div className="hero" id="intro">
      <div className="overlay">
        <div className="container flex-center flex-col md:flex-row">
          <div className="flex-start">
            <span className="bg-priamry h-[2px] w-80  md:block hidden" />
            <h1 className="headHero">An Amazing App That Does It All.</h1>
            <p className="subHero">
              Voluptatem ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explica. Nemo enim ipsam
              voluptatem quia. Ut quis enim.
            </p>
            <Button
              label="Get The App"
              styles="bg-priamry text-white mt-5 py-3 mx-auto md:mx-0"
            />
          </div>

          <Image
            src={phone}
            alt="Phone"
            className="hidden lg:block lg:max-w-sm 2xl:max-w-md w-full ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
