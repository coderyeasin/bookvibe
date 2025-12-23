import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadLists from "../pages/ReadList/ReadLists";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/listedBooks",
        loader: () => fetch("/booksData.json"),
        Component: ReadLists,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
