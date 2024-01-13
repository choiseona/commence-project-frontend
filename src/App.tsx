import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Layout from "./componenet/Common/Layout";
import "./App.css";
import PhotoGallery from "./pages/PhotoGallery";

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
        path: "photo",
        element: <PhotoGallery />,
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
