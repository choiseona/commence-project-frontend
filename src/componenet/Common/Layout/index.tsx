import { Outlet } from "react-router-dom";
import Header from "../Header";

function Layout() {
  
  return (
    <div className="mt-[60px]">
      <Header/>
      <Outlet />
    </div>
  );
};

export default Layout;
