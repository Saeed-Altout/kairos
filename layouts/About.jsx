import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";

import { features } from "@/constants";
import { FeatureCard, TitleSection } from "@/components";
import { useStateContext } from "@/contexts/ContextProviders";

import video from "@/public/images/video-bg-2400.jpg";

const About = () => {
  const { carosel, width } = useStateContext();
  return (
    <section className="overflow-visible bg-priamry" id="about">
      <div className="container">
        <TitleSection
          title="Simply The Best Messaging App Out There."
          subTitle="Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae
            nemo est. Ut quis enim rerum quia assumenda repudiandae non cumque
            qui. Amet repellat omnis ea."
        />

        <Swiper
          ref={carosel}
          modules={[A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={
            width > 1536 ? 4 : width > 1024 ? 3 : width > 868 ? 2 : 1
          }
          autoplay
          className="mt-20"
        >
          {features.map((feat, index) => (
            <SwiperSlide key={index}>
              <FeatureCard title={feat.title} description={feat.description} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-6xl mx-auto mt-20 mb-[-200px] md:mb-[-400px] bg-black group w-[90%] relative">
          <Image
            src={video}
            alt="Video"
            className="object-contain w-full h-full opacity-30"
          />

          <span className="absolute w-10 h-10 bg-white rounded-full cursor-pointer flex-center md:w-16 md:h-16 left-10 top-10">
            <BsPlayFill className="text-xl text-black md:text-4xl" />
          </span>

          <div className="absolute gap-5 bottom-5 left-10 flex-between md:flex-start md:flex-col">
            <div>
              <h5 className="text-3xl font-bold tracking-widest text-white md:text-4xl lg:text-5xl">
                3.1M
              </h5>
              <p className="text-gray-200 pargraph">Downloads</p>
            </div>

            <div>
              <h5 className="text-3xl font-bold tracking-widest text-white md:text-4xl lg:text-5xl">
                24K
              </h5>
              <p className="text-gray-200 pargraph">Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
