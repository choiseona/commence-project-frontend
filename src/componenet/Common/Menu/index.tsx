import DownArrow from "@/assets/icons/category-DownArrow.svg";
import UpArrow from "@/assets/icons/category-UpArrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onMenu } from "../onMenu";


function Menu() {
  const [onAboutus, setAboutus] = useState(false);
  const navigate = useNavigate();
  const onClick = () => {
    setAboutus((prev) => !prev);
    document.getElementById('about_us-container')?.classList.toggle('hidden');
    document.getElementById('about_us-container')?.classList.toggle('opacity-0');
    document.getElementById('about_us-container')?.classList.toggle('opacity-100');
    document.getElementById('about_us-container')?.classList.toggle('translate-y-full');
  };
  const onNavigate = (url:string) => {
    navigate(url);
    onMenu();
  }
  return (
    <div
      id="menu-container"
      className="fixed top-2 max-w-lg w-full h-full invisible z-[5]"
    >
      <div
        id="overlay"
        className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-black/25 opacity-0"
      ></div>
      <div
        id="menu"
        className="absolute top-[48px] right-0 w-[80%] h-fit rounded-bl-[30px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pb-[30%] bg-white z-[5] opacity-0 duration-300 ease-out transition-all translate-x-full"
      >
        <div className="flex justify-center align-middle py-[45px]">
          <span className="font-AppleSDGothicNeoL00 text-[1.225em]">
            Welcome to{" "}
            <span className="font-AppleSDGothicNeoH00">COMMANCE</span>
          </span>
        </div>
        <div className="pl-[10.1%]">
          <div className="font-AppleSDGothicNeoH00 text-[30px] mb-[45px]">
            Menu
          </div>
          <ul className="space-y-[30px]">
            <li>
              <div
                onClick={onClick}
                className="flex justify-between cursor-pointer"
              >
                <span className="font-AppleSDGothicNeoL00 text-[23px] ">
                  About us
                </span>
                <img
                  src={onAboutus ? UpArrow : DownArrow}
                  className="mr-[5%]"
                />
              </div>

              <ul id="about_us-container" className="mt-[15px] hidden opacity-0 duration-500 ease-out transition-all translate-y-full">
                <li className="font-AppleSDGothicNeoM00 text-[14px] text-[#6E6E6E] cursor-pointer">
                  -꼬망스의 40년
                </li>
                <li
                  className="font-AppleSDGothicNeoM00 text-[14px] text-[#6E6E6E] cursor-pointer"
                  onClick={() => onNavigate("/photo")}
                >
                  -꼬망스의 1년
                </li>
              </ul>
            </li>
            <li className="font-AppleSDGothicNeoL00 text-[23px] cursor-pointer">
              Performance
            </li>
            <li className="font-AppleSDGothicNeoL00 text-[23px] cursor-pointer">
              How to join
            </li>
            <li className="font-AppleSDGothicNeoL00 text-[23px] cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
