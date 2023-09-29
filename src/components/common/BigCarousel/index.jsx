import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

const BigCarousel = ({ banners }) => {
  return (
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
      className="w-screen"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img src={banner.image} alt={banner.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BigCarousel;
