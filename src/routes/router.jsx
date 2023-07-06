import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import { ToolType } from '../constants/constant';
import Tool from "../pages/Tool";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/text-to-image",
        element: <Tool toolName={ToolType.IMAGE}/>
      },
      {
        path: "/text-to-speech",
        element: <Tool toolName={ToolType.SPEECH}/>
      }
    ]
  },
  
]);