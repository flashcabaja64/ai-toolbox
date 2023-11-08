import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import { ToolType } from '../constants/constant';
import Tool from "../pages/Tool";
import ErrorPage from "../pages/ErrorPage";
import Summarization from "../pages/Summarization";
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
        element: <Summarization />
      },
      // {
      //   path: "/text-to-speech",
      //   element: <Tool toolName={ToolType.TEXT_TO_SPEECH}/>
      // }
      // ,
      // {
      //   path: "/image-to-text",
      //   element: <Tool toolName={ToolType.IMAGE_TO_TEXT}/>
      // },
      {
        path: '/summarization',
        element: <Summarization />
      }
    ]
  },
  
]);