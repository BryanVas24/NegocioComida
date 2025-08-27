import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import ClientLayout from "@/layouts/ClientLayout";
import ErrorPage from "@/pages/ErrorPage";

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
    ],
  },
]);
