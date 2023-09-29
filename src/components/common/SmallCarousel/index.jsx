import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

const SmallCarousel = ({ sales }) => {
  return (
    <div className="w-screen px-16">
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        navigation={true}
        lazyPreloadPrevNext={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="w-full h-60"
      >
        {sales.map((sale) => (
          <SwiperSlide key={sale.id}>
            <div className="group h-48 flex justify-center items-center border-2 rounded-3xl overflow-hidden">
              <div className="h-full flex flex-col gap-5 justify-center items-center font-bold capitalize">
                <p className="text-red-500 text-xl">{sale.off}</p>
                <h3 className="w-30 text-center text-2xl">{sale.heading}</h3>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center hover:underline"
                >
                  shop now
                </a>
              </div>
              <img
                src={sale.image}
                alt={sale.alt}
                className="w-48 h-48 ease-in-out duration-500 group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmallCarousel;
