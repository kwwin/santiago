import { useRoutes } from "react-router-dom";
// ------ PAGES -------

import Home from "../Home";
import Book from "../Book";
import Events from "../Events";
import Landingpage from "../Digiposter"
import App from "../App";
// -------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        { element: <App />, index: true },
        { path: "events", element: <Events /> },
        { path: "book", element: <Book /> },
        { path: "digiposter", element: <Digiposter /> },
        { path: "home", element: <Landingpage /> },

      ],
    },
  ]);
}

