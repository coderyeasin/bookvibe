import React from "react";
import bannerImg from "../../assets/images/banner-image.png";

const Banner = () => {
  return (
    <div className="bg-[#1313130D] h-[554px] rounded-[24px] flex justify-evenly items-center">
      <div className="space-y-10">
        <h1 className="text-[3.5rem] font-bold">
          Books to freshen up <br /> your bookshelf
        </h1>
        <a className="bg-[#23BE0A] rounded-md px-10 py-5 font-bold text-white cursor-pointer no-underline">
          View the List
        </a>
      </div>
      <div className="p-6">
        <img src={bannerImg} alt="Books Banner" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Banner;
