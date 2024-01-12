import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Layout from "./componenet/Layout";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <MainHome/>
      }
    ]
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
