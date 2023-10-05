import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";

import { services, users } from "@/constants";
import { ServiceCard, TitleSection, UserCard } from "@/components";

import { useStateContext } from "@/contexts/ContextProviders";

const Features = () => {
  const { carosel, width } = useStateContext();
  return (
    <section className="bg-gray-200" id="features">
      <div className="container">
        <TitleSection
          title="Loaded With Features You Would Absolutely Love."
          subTitle="Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae
            nemo est. Ut quis enim rerum quia assumenda repudiandae molestiae
            cumque qui. Amet repellat omnis ea."
          TitleStyle="!text-secondary"
          subTitleStyle="!text-gray-800"
        />

        <div className="my-20 grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((serv, index) => (
            <ServiceCard key={index} data={serv} />
          ))}
        </div>

        <TitleSection
          title="Our Users Love Our App!"
          subTitle=""
          TitleStyle="!text-secondary"
        />
        <Swiper
          ref={carosel}
          modules={[A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={width > 868 ? 2 : 1}
          autoplay
          className="mt-20"
        >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <UserCard data={user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
