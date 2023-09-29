import React from "react";
import heroGif from "../../../assets/images/christmas_collection.gif";

const SubHero = () => {
  return (
    <section>
      <div className="py-5 text-center font-semibold text-2xl capitalize">
        <h2>enjoy our chrismas collection</h2>
      </div>

      <div>
        <img
          src={heroGif}
          alt="christmas collection"
          className="w-full h-screen"
        />
      </div>
    </section>
  );
};

export default SubHero;
