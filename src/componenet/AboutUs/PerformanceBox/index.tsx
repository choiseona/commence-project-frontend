import whiteArrow from "@/assets/icons/white-arrow.svg";
import { useState } from "react";
import { cls } from "@/libs/util";

interface PerformanceBoxProps {
  month: string;
  show: string;
  contents: string;
  photo:string;
}


function PerformanceBox({ month, show, contents,photo}: PerformanceBoxProps) {
  const [toggle, setToggle] = useState(false);
  const onMouseEnter = () => {
    setToggle(true);
  };
  const onMouseLeave = () => {
    setToggle(false);
  };

  return (
    <div
      className="w-full relative h-[12rem] rounded-[1.4rem] shadow-[0_0.4rem_0.4rem_0_rgba(0,0,0,0.25)] bg-white"
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-between text-black pl-[1.4rem] h-full">
        <div className="flex flex-col h-full pt-[1.14rem]">
          <span className="w-full font-AppleSDGothicNeoB00 text-[2rem] font-extrabold">
            {month}
          </span>
          <span className="w-full -mt-[0.6rem] font-AppleSDGothicNeoL00 text-[1.2rem] text-black/70">
            {show}
          </span>
        </div>
        {toggle ? (
          <div className=" w-[60.7%] h-full font-AppleSDGothicNeoM00 text-[1.15rem] mr-[1.327rem] tracking-tighter flex justify-center items-center">
            {contents}
          </div>
        ) : (
          <div className="w-[52.72%] h-full flex flex-col justify-center items-center">
            <img
              className="rounded-[1.2rem] w-full h-[10rem] overflow-hidden text-center bg-center bg-cover mr-[1.327rem]"
              src={photo}
            />
          </div>
        )}
      </div>
      <img
        className={cls(
          "absolute bottom-[1rem] left-[1rem] w-[1.7rem] h-[1.7rem]",
          toggle ? "-scale-x-100" : ""
        )}
        src={whiteArrow}
      />
    </div>
  );
}

export default PerformanceBox;
