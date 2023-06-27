import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/NavBar/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);