import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "@/libs/ScrollToTop";

function Layout() {
  
  return (
    <div className="mt-[6rem]">
      <Header/>
      <ScrollToTop/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
