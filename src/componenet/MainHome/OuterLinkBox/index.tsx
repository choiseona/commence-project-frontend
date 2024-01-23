import whiteYoutubeMark from "@/assets/icons/white-youtube-mark.svg";
import whiteInstagramMark from "@/assets/icons/white-instagram-mark.svg";
import whiteCommenceMark from "@/assets/icons/white-commence-mark.svg";
import whiteArrow from "@/assets/icons/white-arrow.svg";
import { SvgName } from "@/data/OuterLinkBoxData";

interface MainProps {
  children: React.ReactNode;
  link: string;
}

interface ContentProps {
  children: React.ReactNode;
}

interface TitleProps {
  title: string;
}

interface SvgProps {
  svg: string;
}

function BoxMain({ children, link }: MainProps) {
  const onClick = () => {
    window.open(link);
  };
  return (
    <div
      className="relative w-full h-[6.1rem] bg-[#8D8D8D] rounded-[0.5rem] shadow-[0.2rem_0.4rem_0.6rem_0_rgba(0,0,0,0.25)] flex justify-center items-center cursor-pointer transition-all hover:-translate-y-[0.2rem] hover:shadow-[0.4rem_0.6rem_0.6rem_0_rgba(0,0,0,0.25)]"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Content({ children }: ContentProps) {
  return (
    <div className="flex justify-center items-center space-x-[1.06rem]">
      {children}
    </div>
  );
}

function Svg({ svg }: SvgProps) {
  return (
    <>
      {svg === SvgName.YOUTUBE && (
        <div>
          <img src={whiteYoutubeMark} alt="whiteYoutubeMark" />
        </div>
      )}
      {svg === SvgName.INSTAGRAM && (
        <div>
          <img src={whiteInstagramMark} alt="whiteInstagramMark" />
        </div>
      )}
      {svg === SvgName.COMMENCE && (
        <div className="-mr-[0.9rem] -ml-[1rem]">
          <img src={whiteCommenceMark} alt="whiteCommenceMark" />
        </div>
      )}
    </>
  );
}

function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-col space-y-[-0.3rem] mt-[0.2rem]">
      <span className="font-AppleSDGothicNeoH00 text-[1.1rem] text-white">
        {title}
      </span>
      <span className="font-AppleSDGothicNeoL00 text-[0.8rem] text-white">
        바로가기
      </span>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-[0.5rem] right-[0.5rem] flex justify-center items-center">
      <img src={whiteArrow} alt="whiteArrow" />
    </div>
  );
}

export const OuterLinkBox = Object.assign(BoxMain, {
  Content: Content,
  Title: Title,
  Svg: Svg,
  Button: Button,
});
