import { useNavigate } from "react-router-dom";
import mainhomeArrowIcon from "@/assets/icons/mainhome-arrow-icon.svg";


interface MainProps {
  children: React.ReactNode;
  link: string;
}

interface TitleProps {
  title: string;
}

interface BottomTextProps {
  bottomText: string;
}

function BoxMain({ children, link }: MainProps) {
  const navigete = useNavigate();
  const onClick = () => {
    navigete(link);
  };
  return (
    <div
      className="w-full h-[9.2rem] bg-white rounded-[0.5rem] shadow-[0.2rem_0.4rem_0.6rem_0_rgba(0,0,0,0.25)] pl-[4.5%] pt-[0.7rem] flex flex-col justify-between cursor-pointer transition-all hover:-translate-y-[0.2rem] hover:shadow-[0.4rem_0.6rem_0.6rem_0_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-col space-y-[-0.7rem]">
      <span className="font-AppleSDGothicNeoH00 text-[1.5rem]">{title}</span>
    </div>
  );
}

function BottomText({ bottomText }: BottomTextProps) {
  return (
    <div className="mb-[0.2rem] flex justify-between">
      <span className="font-AppleSDGothicNeoL00 text-[1rem] text-[#6E6E6E]">
        {bottomText}
      </span>
      <span className="flex justify-center items-center mr-[0.7rem]">
        <div className="w-[1rem] h-[1rem] rounded-full bg-black flex justify-center items-center">
          <img src={mainhomeArrowIcon} alt="mainhome-arrow-icon" />
        </div>
      </span>
    </div>
  );
}

export const CategoryBox = Object.assign(BoxMain, {
    Title: Title,
    BottomText: BottomText
})
