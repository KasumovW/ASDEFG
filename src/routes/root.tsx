import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <h1>Error 404</h1>,
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Error 404</h1>,
  },
]);
