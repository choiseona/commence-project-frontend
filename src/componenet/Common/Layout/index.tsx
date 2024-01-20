import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <div className="mt-[6rem]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
