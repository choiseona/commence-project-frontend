import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainHome from "./pages/MainHome";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainHome />
  }
])

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
