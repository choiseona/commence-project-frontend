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
      <nav className="fixed top-0 max-w-lg w-full bg-white h-[60px] z-10">
        <div className="h-full w-full flex justify-center items-center relative">
          <span className="text-[1.94em] font-Pretendard">COMMENCE</span>
          <span className="absolute right-[30px]">
            <img src={menuIcon} alt="menu-icon" onClick={onClick}  />
          </span>
        </div>
      </nav>
      <Menu onMenuToggle={onMenuToggle} setOnMenuToggle={setOnMenuToggle}/>
    </>
  );
};

export default Header;