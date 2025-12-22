import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItem, removeFromLocalStorage } from "../../utils/addReadListToDB";
import {
  getWishList,
  removeWishListFromLocalStorage,
} from "../../utils/addWishListToDB";
import WishList from "../WishList/WishList";
import ReadBooks from "../ReadBooks/ReadBooks";

const ReadLists = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    // Helper function to filter data based on IDs from a storage getter
    const getBooksFromDB = (getIdsFunc) => {
      const storedIds = getIdsFunc().map((id) => parseInt(id));
      return data.filter((book) => storedIds.includes(book.bookId));
    };

    setReadBooks(getBooksFromDB(getItem));
    setWishList(getBooksFromDB(getWishList));
  }, [data]); // data as dependency ensures it runs when loader completes

  const handleBySort = (type) => {
    setSort(type);
    const sortLogic = (list) => {
      return [...list].sort((a, b) =>
        type === "Pages" ? b.totalPages - a.totalPages : b.rating - a.rating
      );
    };

    setReadBooks(sortLogic(readBooks));
    setWishList(sortLogic(wishList));
  };

  const handleDelete = (bookId) => {
    // 1. Database removal
    removeFromLocalStorage(bookId);
    removeWishListFromLocalStorage(bookId);

    // 2. UI State removal
    setReadBooks((prev) => prev.filter((book) => book.bookId !== bookId));
    setWishList((prev) => prev.filter((book) => book.bookId !== bookId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Sort Dropdown */}
      <div className="grid place-items-center my-4">
        <details className="dropdown">
          <summary className="btn bg-[#23BE0A] text-white border-none hover:bg-[#1e9d08]">
            Sort by : {sort || "Select"}
          </summary>
          <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a onClick={() => handleBySort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleBySort("Rating")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        {/* Reusable Tab Section */}
        {[
          { label: "Read List", data: readBooks, Component: ReadBooks },
          { label: "Wish List", data: wishList, Component: WishList },
        ].map(({ label, data, Component }, idx) => (
          <TabPanel key={idx}>
            <h2 className="text-xl font-bold text-center my-4">
              {label} : {data.length}
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {data.map((book) => (
                <Component
                  key={book.bookId}
                  allBooksData={book}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ReadLists;
