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
import Swal from "sweetalert2";

const ReadLists = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  const getFilteredBooks = (storedIds) => {
    const ids = storedIds.map((id) => parseInt(id));
    return data.filter((book) => ids.includes(book.bookId));
  };

  // Sort logic
  const sortBooks = (books, sortType) => {
    if (sortType === "Pages") {
      return [...books].sort((a, b) => b.totalPages - a.totalPages);
    }
    if (sortType === "Rating") {
      return [...books].sort((a, b) => b.rating - a.rating);
    }
    return books;
  };

  useEffect(() => {
    setReadBooks(getFilteredBooks(getItem()));
    setWishList(getFilteredBooks(getWishList()));
  }, [data]);

  // Handle Sort for BOTH lists
  const handleBySort = (type) => {
    setSort(type);
    setReadBooks((prev) => sortBooks(prev, type));
    setWishList((prev) => sortBooks(prev, type));
  };

  // Delete Handlers
  const handleDeleteRead = (id) => {
    Swal.fire({
      title: "Removed Read Book!",
      icon: "success",
      draggable: true,
    });
    removeFromLocalStorage(id);
    setReadBooks((prev) => prev.filter((b) => b.bookId !== id));
  };

  const handleDeleteWish = (id) => {
    Swal.fire({
      title: "Removed WishList Book!",
      icon: "success",
      draggable: true,
    });
    removeWishListFromLocalStorage(id);
    setWishList((prev) => prev.filter((b) => b.bookId !== id));
  };

  return (
    <div>
      <details className="dropdown grid place-items-center my-4">
        <summary className="btn m-1 bg-[#23BE0A] border-none">
          Sort by : {sort || "Default"}
        </summary>
        <ul className="menu dropdown-content bg-gray-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {["Pages", "Rating"].map((type) => (
            <li key={type}>
              <a onClick={() => handleBySort(type)}>{type}</a>
            </li>
          ))}
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <BookListPanel
            books={readBooks}
            CardComponent={ReadBooks}
            onDelete={handleDeleteRead}
          />
        </TabPanel>

        <TabPanel>
          <BookListPanel
            books={wishList}
            CardComponent={WishList}
            onDelete={handleDeleteWish}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

const BookListPanel = ({ books, CardComponent, onDelete }) => {
  return (
    <>
      <h2 className="text-xl font-bold text-center my-4">
        Books : {books.length}
      </h2>
      <div className="flex flex-wrap gap-2 justify-start">
        {books.map((book) => (
          <CardComponent
            key={book.bookId}
            allBooksData={book}
            handleDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ReadLists;
