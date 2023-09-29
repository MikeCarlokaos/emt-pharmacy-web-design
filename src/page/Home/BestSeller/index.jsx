import React from "react";
import ItemCarousel from "../../../components/common/ItemCarousel";
import items from "../../../data/items";

const BestSeller = () => {
  return (
    <section className="py-10">
      <div className="py-5 text-center font-semibold text-2xl capitalize">
        <h2>best sellers</h2>
      </div>
      <div>
        <ItemCarousel items={items} />
      </div>
    </section>
  );
};

export default BestSeller;
