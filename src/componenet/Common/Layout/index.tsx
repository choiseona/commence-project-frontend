import { useState } from "react";
import Menu from "../Menu";
import { Outlet } from "react-router-dom";
import Overlay from "../Overlay";
import menuIcon from "@/assets/icons/menu-icon.svg";

const Layout = () => {
  const [onMenu, setOnMenu] = useState(false);
  const onClick = () => {
    setOnMenu((prev) => !prev);
    console.log(onMenu);
  };
  return (
    <div className="mt-[60px]">
      <nav className="fixed top-0 max-w-lg w-full bg-white h-[60px] z-10">
        <div className="h-full w-full flex justify-center items-center relative">
          <span className="text-[2em]">COMMENCE</span>
          <span onClick={onClick} className="absolute right-[30px]">
            <img src={menuIcon} alt="menu-icon" />
          </span>
          {onMenu ? <Menu /> : null}
        </div>
      </nav>
      {onMenu ? <Overlay /> : null}
      <Outlet />
    </div>
  );
};

export default Layout;
