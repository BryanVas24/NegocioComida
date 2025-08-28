import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import ClientLayout from "@/layouts/ClientLayout";
import ErrorPage from "@/pages/ErrorPage";
import Products from "@/pages/Products";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "productos",
        element: <Products />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registro",
        element: <Register />,
      },
    ],
  },
]);
