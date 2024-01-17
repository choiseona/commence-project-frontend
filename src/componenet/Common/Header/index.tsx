import menuIcon from "@/assets/icons/menu-icon.svg";
import Menu, { onMenu } from "../Menu";


function Header() {
  return (
    <>
      <nav className="fixed top-0 max-w-lg w-full bg-white h-[60px] z-10">
        <div className="h-full w-full flex justify-center items-center relative">
          <span className="text-[1.94em] font-Pretendard">COMMENCE</span>
          <span onClick={onMenu} className="absolute right-[30px]">
            <img src={menuIcon} alt="menu-icon"  />
          </span>
        </div>
      </nav>
      <Menu />
    </>
  );
};

export default Header;