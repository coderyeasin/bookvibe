import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItem } from "../../utils/addToDB";
import SingleBook from "../SingleBook/SingleBook";

const ReadLists = () => {
  const [readBooks, setReadBooks] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const getReadListFromDB = getItem();
    const convertedReadList = getReadListFromDB.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedReadList.includes(book.bookId)
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReadBooks(myReadList);
  }, []);
  return (
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
        <h2>My wish list</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ReadLists;
