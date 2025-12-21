import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
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
        Component: ReadLists,
      },
      {
        loader: () => fetch("booksData.json"),
        path: "/bookDetails/:id",
        Component: BookDetails,
      },
    ],
  },
]);
