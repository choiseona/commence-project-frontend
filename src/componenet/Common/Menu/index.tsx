import DownArrow from "@/assets/icons/category-DownArrow.svg";
import UpArrow from "@/assets/icons/category-UpArrow.svg";
import { cls } from "@/libs/util";
import { useNavigate } from "react-router-dom";

interface IParam {
  onMenuToggle: boolean;
  setOnMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
  onAboutus: boolean;
  setOnAboutus: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({
  onMenuToggle,
  setOnMenuToggle,
  onAboutus,
  setOnAboutus,
}: IParam) {
  const navigate = useNavigate();

  const onClickOverlay = () => {
    setOnMenuToggle(false);
    setOnAboutus(false);
  }
  const onClickAboutus = () => {
    setOnAboutus((prev) => !prev);
  };
  const onNavigate = (url: string) => {
    navigate(url);
    setOnMenuToggle(false);
    setOnAboutus(false);
  };
  return (
    <div
      className={cls(
        "fixed top-2 max-w-[51.2rem] w-full h-full z-[5]",
        onMenuToggle ? "" : "invisible"
      )}
    >
      <div
        className={cls(
          "w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-black/25",
          onMenuToggle ? "opacity-100" : "opacity-0"
        )}
        onClick={onClickOverlay}
      ></div>
      <div
        className={cls(
          "absolute top-[4.8rem] right-0 w-[80%] h-fit rounded-bl-[30px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pb-[30%] bg-white z-[5] duration-300 ease-out transition-all",
          onMenuToggle ? "opacity-100" : "opacity-0 translate-x-full"
        )}
      >
        <div className="flex justify-center align-middle py-[45px]">
          <span className="font-AppleSDGothicNeoL00 text-[247.5%]">
            Welcome to{" "}
            <span className="font-AppleSDGothicNeoH00">COMMENCE</span>
          </span>
        </div>
        <div className="pl-[10.1%]">
          <div className="font-AppleSDGothicNeoH00 text-[3rem] mb-[4.5rem]">
            Menu
          </div>
          <ul className="space-y-[3rem]">
            <li>
              <div
                onClick={onClickAboutus}
                className="flex justify-between cursor-pointer"
              >
                <span className="font-AppleSDGothicNeoL00 text-[2.3rem] ">
                  About us
                </span>
                <img
                  src={onAboutus ? UpArrow : DownArrow}
                  className="mr-[5%]"
                />
              </div>
              {onAboutus && (
                <ul id="about_us-container" className="mt-[1.5rem]">
                  <li
                    className="font-AppleSDGothicNeoM00 text-[1.4rem] text-[#6E6E6E] cursor-pointer"
                    onClick={() => onNavigate("/about-us")}
                  >
                    -꼬망스의 40년
                  </li>
                  <li
                    className="font-AppleSDGothicNeoM00 text-[1.4rem] text-[#6E6E6E] cursor-pointer"
                    onClick={() => onNavigate("/photo")}
                  >
                    -꼬망스의 1년
                  </li>
                </ul>
              )}
            </li>
            <li
              className="font-AppleSDGothicNeoL00 text-[2.3rem] cursor-pointer"
              onClick={() => onNavigate("/performance-video")}
            >
              Performance
            </li>
            <li
              className="font-AppleSDGothicNeoL00 text-[2.3rem] cursor-pointer"
              onClick={() => onNavigate("/how-to-join")}
            >
              How to join
            </li>
            <li
              className="font-AppleSDGothicNeoL00 text-[2.3rem] cursor-pointer"
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
