import React from "react";
import { FaRegStar } from "react-icons/fa";
const SingleBook = ({ allBooksData }) => {
  // const data = use(allBooksData);
  console.log(allBooksData);
  const { image, tags, category, author, rating, bookName } = allBooksData;
  const commonCls =
    "text-md rounded-[30px] px-3 py-1 font-semibold bg-[#1313130D] text-[#23BE0A]";

  return (
    <div className="w-[374px] rounded-[1rem] border-2 border-gray-100 px-6 py-6">
      <div className="w-[326px] rounded-[1rem]">
        <div className="bg-[#1313130D] rounded-[1rem] mb-5">
          <img
            src={image}
            alt="Books Banner"
            className="w-[134px] h-[166px] mx-auto px-4 py-4"
          />
        </div>
        <div className="space-y-3">
          <div className="flex gap-5">
            <p className={commonCls}>{tags[0]}</p>
            <p className={commonCls}>{tags[1]}</p>
          </div>
          <div className="border-b border-dashed border-gray-300 mb-4">
            <h3 className="text-[24px] font-bold truncate">{bookName}</h3>
            <p className="text-[1rem] text-gray-700 pb-3">By: {author}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">{category}</p>
            <div className="flex items-center gap-2 text-lg">
              {rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
