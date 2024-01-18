import menuIcon from "@/assets/icons/menu-icon.svg";
import Menu from "../Menu";
import { useState } from "react";


function Header() {
  const [onMenuToggle, setOnMenuToggle] = useState(false);
  const onClick = () => {
    setOnMenuToggle(prev => !prev)
  }
  return (
    <>
      <nav className="fixed top-0 max-w-[51.2rem] w-full bg-white h-[6rem] z-10">
        <div className="h-full w-full flex justify-center items-center relative">
          <span className="text-[3.1em] font-Pretendard">COMMENCE</span>
          <span className="absolute right-[3rem]">
            <img src={menuIcon} alt="menu-icon" onClick={onClick}  />
          </span>
        </div>
      </nav>
      <Menu onMenuToggle={onMenuToggle} setOnMenuToggle={setOnMenuToggle}/>
    </>
  );
};

export default Header;