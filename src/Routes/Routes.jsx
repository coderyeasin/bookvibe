import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadLists from "../pages/ReadList/ReadLists";
import WishList from "../pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/readList",
        loader: () => fetch("booksData.json"),
        Component: ReadLists,
      },
      {
        path: "/wishList",
        loader: () => fetch("booksData.json"),
        Component: WishList,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
