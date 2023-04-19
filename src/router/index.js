import { useRoutes } from "react-router-dom";
// ------ PAGES -------

import Home from "../Home";
import Book from "../Book";
import Events from "../Events";
import Landingpage from "../Digiposter"
import App from "../App2";
import HomeLayout from "../layout/HomeLayout";
// -------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { element: <App />, index: true },
        { path: "events", element: <Events /> },
        { path: "book", element: <Book /> },
        { path: "digiposter", element: <Landingpage /> },
        { path: "home", element: <Landingpage /> },
      ],
    },
  ]);
}

