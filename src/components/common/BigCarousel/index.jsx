import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

const BigCarousel = ({ banners }) => {
  return (
    <div className="w-[98vw]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        lazyPreloadPrevNext={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="w-[98vw]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.image} alt={banner.title} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BigCarousel;
