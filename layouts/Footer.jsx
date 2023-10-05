import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import { navLinksFooter } from "@/constants";
import { Button, TitleSection } from "@/components";

import { useStateContext } from "@/contexts/ContextProviders";

const Footer = () => {
  const { year } = useStateContext();
  return (
    <footer className="pt-40 pb-10 bg-secondary" id="conatct">
      <div className="container">
        <TitleSection
          title="Let's Stay In Touch."
          subTitle="  Subscribe for updates, special offers, and other amazing stuff."
        />

        <div className="flex-center bg-[#1b1c23] my-10">
          <span className="text-gray-50 px-5 py-5 text-2xl">
            <BsFillEnvelopeFill />
          </span>
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-[#1b1c23] w-full py-5 pl-2 outline-none border-none text-gray-50 placeholder:text-gray-50"
          />
          <Button label="Sign up" styles="bg-priamry py-5 text-gray-50" />
        </div>

        <div className="mt-20 flex-start gap-10 md:flex-row">
          <div>
            <h3 className="text-gray-50 font-semibold mb-3 text-3xl">
              About Kairos.
            </h3>
            <p className="pargraph text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex consectetur adipisicing elit do eiusmod tempor.
            </p>
          </div>

          <div className="min-w-max">
            <h3 className="text-gray-50 font-semibold mb-3 text-3xl">
              Site links.
            </h3>
            <ul className="flex-start gap-2">
              {navLinksFooter.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="pargraph text-gray-300 transit hover:text-gray-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-50 font-semibold mb-3 text-3xl">
              Contact Us.
            </h3>
            <ul className="flex-start gap-2">
              <li>
                <p className="pargraph text-gray-300">Phone: (+63) 555 1212</p>
              </li>
              <li>
                <p className="pargraph text-gray-300">Fax: (+63) 555 0100</p>
              </li>
              <li>
                <p className="pargraph text-gray-300 mt-5">
                  Need help or have a question? Contact us at:{" "}
                  <a href="/" className="text-gray-50 pargraph font-semibold">
                    support@kairos.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-50 flex-center md:flex-start !flex-row text-2xl gap-5  my-10">
          <a href="/">
            <BsFacebook />
          </a>
          <a href="/">
            <BsTwitter />
          </a>
          <a href="/">
            <BsInstagram />
          </a>
        </div>

        <p className="pargraph text-gray-300 text-center w-fit mx-auto block">
          © Copyright Kairos {year} Design by{" "}
          <span className="text-gray-50 font-semibold">Saeed Altout</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
