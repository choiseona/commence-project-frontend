import whiteArrow from "@/assets/icons/white-arrow.svg";
import { useState } from "react";
import test from "@/assets/images/test.png";
import { cls } from "@/libs/util";

interface PerformanceBoxProps {
  month: string;
  show: string;
  contents: string;
  color: number;
}

const BgConfig = [
  "bg-[#9B9B9B]",
  "bg-[#696969]",
  "bg-[#323232]",
  "bg-[#262626]",
];
function PerformanceBox({ month, show, contents, color }: PerformanceBoxProps) {
  const [toggle, setToggle] = useState(false);
  const onMouseEnter = () => {
    setToggle(true);
  };
  const onMouseLeave = () => {
    setToggle(false);
  };

  return (
    <div
      className={`w-full relative h-[12rem] rounded-[1rem] shadow-[0_0.4rem_0.4rem_0_rgba(0,0,0,0.25)] ${BgConfig[color]}`}
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-between text-white pl-[1.4rem] ">
        <div className="flex flex-col w-[8.6rem] h-[7rem] pt-[1.14rem]">
          <span className="w-full font-AppleSDGothicNeoB00 text-[2rem] font-extrabold">
            {month}
          </span>
          <span className="w-full -mt-[0.9rem] font-tvNEnjoystoriesL text-[2rem]">
            {show}
          </span>
        </div>
        {toggle ? (
          <div className=" ml-[2rem] mr-[1rem] w-[60%] h-[12rem] font-AppleSDGothicNeoM00 text-[1.2rem] flex justify-center items-center">
            {contents}
          </div>
        ) : (
          <div className="mt-[1.5rem] ml-[2rem] mr-[1rem] w-[60%] h-[9.2rem] flex flex-col justify-center items-center">
            <img
              className="rounded-[1.2rem] w-full h-full overflow-hidden text-center bg-center bg-cover"
              src={test}
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
