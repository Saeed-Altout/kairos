import Image from "next/image";

import google from "@/public/images/google-play.png";
import appstore from "@/public/images/appstore.png";
import app from "@/public/images/app-screen-2800.png";

import { TitleSection } from "@/components";

const Community = () => {
  return (
    <section className="bg-priamry" id="download">
      <div className="container">
        <TitleSection
          title=" Join Our Community of 3,000,000+ Users."
          subTitle="Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae
            nemo est. Ut quis enim rerum quia assumenda repudiandae non cumque
            qui. Amet repellat omnis ea."
        />

        <div className="flex-center gap-5 mt-20">
          <a href="/">
            <Image src={appstore} alt="App Store" width={150} />
          </a>
          <a href="/">
            <Image src={google} alt="Google Play" width={150} />
          </a>
        </div>

        <Image
          src={app}
          alt="App"
          className="mb-[-200px] md:mb-[-250px] mt-20 max-w-7xl mx-auto w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Community;
