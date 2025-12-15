import React from "react";
import bannerImg from "../../assets/images/banner-image.png";
import { FaRegStar } from "react-icons/fa";

const Books = () => {
  return (
    <div className="my-16">
      <h3 className="text-[2.5rem] font-bold text-center">Books</h3>
      <div className="w-[374px] rounded-[1rem] border-2 border-gray-100 px-6 py-6">
        <div className="w-[326px] rounded-[1rem]">
          <div className="bg-[#1313130D] rounded-[1rem] mb-5">
            <img
              src={bannerImg}
              alt="Books Banner"
              className="w-[134px] h-[166px] mx-auto px-4 py-4"
            />
          </div>
          <div className="space-y-3">
            <div className="flex gap-5">
              <p className="text-md rounded-[30px] px-3 py-1 font-semibold bg-[#1313130D] text-[#23BE0A]">
                Young Adult
              </p>
              <p className="text-md rounded-[30px] px-3 py-1 font-semibold bg-[#1313130D] text-[#23BE0A]">
                Identity
              </p>
            </div>
            <div className="border-b border-dashed border-gray-300 mb-4">
              <h3 className="text-[24px] font-bold">title</h3>
              <p className="text-[1rem] text-[#131313] font-semibold">author</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg">genre</p>
              <div className="flex items-center gap-2 text-lg">
                5.00 <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
