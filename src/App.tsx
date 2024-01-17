import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Layout from "./componenet/Common/Layout";
import "./App.css";
import PhotoGallery from "./pages/PhotoGallery";
import About_us from "./pages/About-us";
import Performance_Video from "./pages/Performance-Video";
import How_to_join from "./pages/How-to-join";
import FAQ from "./pages/FAQ";



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
        element: <About_us/>
      },
      {
        path: "photo",
        element: <PhotoGallery />,
      },
      {
        path: "performance-video",
        element: <Performance_Video/>
      },
      {
        path:"how-to-join",
        element: <How_to_join/>
      },
      {
        path: "faq",
        element: <FAQ/>
      }
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
