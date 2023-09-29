import React from "react";
import BigCarousel from "../../../components/common/BigCarousel";
import SmallCarousel from "../../../components/common/SmallCarousel";
import banners from "../../../data/banners";
import sales from "../../../data/sales";

const Hero = () => {
  return (
    <section className="w-screen">
      <div className="w-[100vw] border-4">
        <BigCarousel banners={banners} />
      </div>
      <div>
        <div className="py-5 text-center font-semibold text-2xl capitalize">
          <h2>enjoy our awesome sales</h2>
        </div>
        <SmallCarousel sales={sales} />
      </div>
    </section>
  );
};

export default Hero;
