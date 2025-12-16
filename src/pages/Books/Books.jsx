import React, { Suspense } from "react";
// import bannerImg from "../../assets/images/banner-image.png";

import SingleBook from "../SingleBook/SingleBook";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllBooks(data));
  // }, []);
  // console.log(allBooks);

  // const allBooksData = fetch("./booksData.json").then((res) => res.json());

  return (
    <div className="my-16">
      <h3 className="text-[2.5rem] font-bold text-center">Books</h3>

      <Suspense fallback={<span>loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data?.map((book) => (
            <SingleBook key={book.bookId} allBooksData={book}></SingleBook>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
