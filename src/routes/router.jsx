import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import TextToImage from "../pages/TextToImage";
import TextToSpeech from "../pages/TextToSpeech";
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
        element: <TextToImage />
      },
      {
        path: "/text-to-speech",
        element: <TextToSpeech />
      }
    ]
  },
  
]);