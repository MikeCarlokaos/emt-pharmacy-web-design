import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

const ItemCarousel = ({ items }) => {
  return (
    <div className="w-screen px-16">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        navigation={true}
        lazyPreloadPrevNext={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group flex flex-col justify-center items-center">
              <div className=" border rounded-t-3xl bg-primary/50">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-48 h-48 rounded-t-3xl ease-in-out duration-300 group-hover:shadow group-hover:scale-105 group-hover:rounded-3xl"
                />
              </div>
              <div className="flex flex-col items-center py-5 gap-px bg-primary/10 border border-primary/10 rounded-b-3xl  ease-in-out duration-300 group-hover:bg-primary/40">
                <h3 className="text-center w-48">{item.product}</h3>
                <p>
                  <span>Pack: </span>
                  {item.pack}
                </p>
                <p className="font-semibold">
                  <span>£</span>
                  {item.price}
                </p>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary py-1.5 px-3 rounded-3xl text-white font-semibold ease-in-out hover:bg-primary-700"
                >
                  Add to Basket
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemCarousel;
