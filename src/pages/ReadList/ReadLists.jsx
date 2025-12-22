import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItem } from "../../utils/addReadListToDB";
import SingleBook from "../SingleBook/SingleBook";
import WishList from "../WishList/WishList";
import { getWishList } from "../../utils/addWishListToDB";

const ReadLists = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const getReadListFromDB = getItem();
    const convertedReadList = getReadListFromDB.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedReadList.includes(book.bookId)
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReadBooks(myReadList);

    //wishList
    const getWishListFromDB = getWishList();
    const convertedWishList = getWishListFromDB.map((id) => parseInt(id));
    const myWishList = data.filter((book) =>
      convertedWishList.includes(book.bookId)
    );
    setWishList(myWishList);
  }, []);

  const handleBySort = (type) => {
    setSort(type);
    if (type === "Pages") {
      const sortedByPages = [...readBooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadBooks(sortedByPages);
    }
    if (type === "Rating") {
      const sortedByRatings = [...readBooks].sort(
        (a, b) => b.rating - a.rating
      );
      setReadBooks(sortedByRatings);
    }
  };

  return (
    <div>
      <details className="dropdown grid place-items-center my-4">
        <summary className="btn m-1 bg-[#23BE0A] border-none">
          Sort by : {sort ? sort : ""}
        </summary>
        <ul className="menu dropdown-content bg-gray-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleBySort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleBySort("Rating")}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl font-bold text-center">
            Finished Book : {readBooks.length}
          </h2>
          {readBooks.map((book) => (
            <SingleBook key={book.bookId} allBooksData={book}></SingleBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl font-bold text-center">
            Finished Book : {wishList.length}
          </h2>
          <WishList wishList={wishList} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadLists;
