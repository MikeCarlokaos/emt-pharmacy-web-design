import React from "react";
import newsImg from "../../../assets/images/news-img.jpg";

const News = () => {
  return (
    <section className="w-screen">
      <div className="py-5 text-center font-semibold text-2xl capitalize">
        <h2>Get up to date with our latest news</h2>
      </div>
      <div className="w-screen">
        <img src={newsImg} alt="news poster" className="w-full h-full" />
      </div>
    </section>
  );
};

export default News;
