import menuIcon from "@/assets/icons/menu-icon.svg";
import Menu from "../Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Header() {
  const [onMenuToggle, setOnMenuToggle] = useState(false);
  const [onAboutus, setOnAboutus] = useState(false);
  const navigate = useNavigate();

  const onClickMenu = () => {
    setOnMenuToggle(prev => !prev)
  }
  const onClickHeader = () => {
    navigate("/");
    setOnMenuToggle(false);
    setOnAboutus(false);
  }
  return (
    <>
      <nav className="fixed top-0 max-w-[51.2rem] w-full bg-white h-[6rem] z-10">
        <div className="h-full w-full flex justify-center items-center">
          <span className="text-[310%] font-Pretendard cursor-pointer" onClick={onClickHeader}>COMMENCE</span>
          <span className="absolute right-[3rem] cursor-pointer">
            <img src={menuIcon} alt="menu-icon" width={30} height={30} onClick={onClickMenu}  />
          </span>
        </div>
      </nav>
      <Menu onMenuToggle={onMenuToggle} setOnMenuToggle={setOnMenuToggle} onAboutus={onAboutus} setOnAboutus={setOnAboutus}/>
    </>
  );
};

export default Header;