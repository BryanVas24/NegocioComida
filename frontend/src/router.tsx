import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hola mundo</h1>,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
