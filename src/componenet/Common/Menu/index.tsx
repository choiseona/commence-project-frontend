import DownArrow from "@/assets/icons/category-DownArrow.svg";
import UpArrow from "@/assets/icons/category-UpArrow.svg";
import { cls } from "@/libs/util";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface IParam {
  onMenuToggle: boolean;
  setOnMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ onMenuToggle, setOnMenuToggle }: IParam) {
  const [onAboutus, setAboutus] = useState(false);
  const navigate = useNavigate();

  const onClickAboutus = () => {
    setAboutus((prev) => !prev);
  };
  const onNavigate = (url: string) => {
    navigate(url);
    setOnMenuToggle((prev) => !prev);
    onClickAboutus();
  };
  return (
    <div
      id="menu-container"
      className={cls(
        "fixed top-2 max-w-lg w-full h-full z-[5]",
        onMenuToggle ? "" : "invisible"
      )}
    >
      <div
        id="overlay"
        className={cls("w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-black/25",
        onMenuToggle ? "opacity-100" : "opacity-0")}
      ></div>
      <div
        id="menu"
        className={cls("absolute top-[48px] right-0 w-[80%] h-fit rounded-bl-[30px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pb-[30%] bg-white z-[5] duration-300 ease-out transition-all",
        onMenuToggle ? "opacity-100" : "opacity-0 translate-x-full"
        )}
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
                onClick={onClickAboutus}
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
              {onAboutus && (
                <ul id="about_us-container" className="mt-[15px]">
                  <li
                    className="font-AppleSDGothicNeoM00 text-[14px] text-[#6E6E6E] cursor-pointer"
                    onClick={() => onNavigate("/about-us")}
                  >
                    -꼬망스의 40년
                  </li>
                  <li
                    className="font-AppleSDGothicNeoM00 text-[14px] text-[#6E6E6E] cursor-pointer"
                    onClick={() => onNavigate("/photo")}
                  >
                    -꼬망스의 1년
                  </li>
                </ul>
              )}
            </li>
            <li
              className="font-AppleSDGothicNeoL00 text-[23px] cursor-pointer"
              onClick={() => onNavigate("/performance-video")}
            >
              Performance
            </li>
            <li
              className="font-AppleSDGothicNeoL00 text-[23px] cursor-pointer"
              onClick={() => onNavigate("/how-to-join")}
            >
              How to join
            </li>
            <li
              className="font-AppleSDGothicNeoL00 text-[23px] cursor-pointer"
              onClick={() => onNavigate("/faq")}
            >
              FAQ
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
