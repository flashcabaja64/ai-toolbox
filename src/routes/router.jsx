import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import { ToolType } from '../constants/constant';
import Tool from "../pages/Tool";
import ErrorPage from "../pages/ErrorPage";
import MainChat from "../pages/MainChat";
import Contact from "../components/Contact";

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
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/text-to-image",
        element: <MainChat />
      },
      {
        path: "/text-to-speech",
        element: <MainChat />
      }
      ,
      // {
      //   path: "/image-to-text",
      //   element: <Tool toolName={ToolType.IMAGE_TO_TEXT}/>
      // },
      {
        path: '/summarization',
        element: <MainChat />
      }
    ]
  },
  
]);