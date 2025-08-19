import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
