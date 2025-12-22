import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaRegStar } from "react-icons/fa";
import { AddToLocalStorage } from "../../utils/addReadListToDB";
import { AddWishListToLocalStorage } from "../../utils/addWishListToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    image,
    tags,
    review,
    publisher,
    totalPages,
    yearOfPublishing,
    category,
    author,
    rating,
    bookName,
  } = singleBook;
  const commonCls =
    "text-md rounded-[30px] px-3 py-1 font-semibold bg-[#1313130D] text-[#23BE0A]";
  const handleMarkAsRead = (id) => {
    // Functionality to mark the book as read
    AddToLocalStorage(id);
  };

  const handleAddToWishList = () => {
    // Functionality to add the book to the wishlist
    AddWishListToLocalStorage(id);
  };
  return (
    <div className="my-7">
      <h3 className="text-[2.5rem] font-bold text-center">BookDetails</h3>
      <div className="flex justify-around items-start rounded-[1rem] border-2 border-gray-100 px-6 py-6">
        <div className="w-94 rounded-[1rem]">
          <div className="bg-[#1313130D] rounded-[1rem] ">
            <img
              src={image}
              alt="Books Banner"
              className="w-full h-auto mx-auto px-6 py-6"
            />
          </div>
        </div>
        <div className="space-y-3 flex-1 mx-10">
          <div className="border-b border-dashed border-gray-300 mb-4">
            <h3 className="text-4xl font-bold">{bookName}</h3>
            <p className="text-[1rem] text-black-300 pb-3">By: {author}</p>
            <p className="text-sm text-black-400 pb-3">
              <strong>Review :</strong> {review}
            </p>
            <p className="text-sm text-slate-700 pb-3">
              <strong>Publisher Name :</strong> {publisher}
            </p>
            <p className="text-sm text-slate-700 pb-3">
              <strong>Total Pages :</strong> {totalPages}
            </p>
            <p className="text-sm text-slate-700 pb-3">
              <strong>Published Year :</strong> {yearOfPublishing}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <strong>Tags :</strong>
            {tags?.map((tag) => (
              <p className={commonCls}>{tag}</p>
            ))}
          </div>

          <div className="flex justify-between">
            <p className="text-lg">{category}</p>
            <div className="flex items-center gap-2 text-lg">
              {rating} <FaRegStar />
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center gap-4 min-w-0">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="bg-[#23BE0A] text-white rounded-md px-5 py-2 font-medium cursor-pointer no-underline"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleAddToWishList(id)}
              className="bg-[#59C6D2] text-white rounded-md px-5 py-2 font-medium cursor-pointer no-underline"
            >
              Add To WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
