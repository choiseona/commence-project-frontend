import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Layout from "./componenet/Common/Layout";
import "./App.css";
import PhotoGallery from "./pages/PhotoGallery";
import FAQ from "./pages/FAQ";
import HowToJoin from "./pages/HowToJoin";
import AboutUs from "./pages/AboutUs";
import PerformanceVideo from "./pages/PerformanceVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainHome />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "photo",
        element: <PhotoGallery />,
      },
      {
        path: "performance-video",
        element: <PerformanceVideo />,
      },
      {
        path: "how-to-join",
        element: <HowToJoin />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
