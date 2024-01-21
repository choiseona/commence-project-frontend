import { Fragment } from "react";

interface ContentCommentProps {
  imageKey: string;
  content: string;
}

interface ContentImageProps {
  imageKey: string;
  src: string;
  alt: string;
}

interface ContentMainProps {
  children: React.ReactNode;
  imageKey: string;
}

function ContentComment({ imageKey, content }: ContentCommentProps) {
  const positionVariants: { [key: string]: string } = {
    January_1: "bottom-[-30px] right-[-18px]",
    January_2: "bottom-[-30px] left-0    ",
    February_1: "bottom-[-34px] right-[-39px]",
    March_1: "bottom-[-28.61px] left-[1.83px] ",
    March_2: "bottom-[-31px] right-[-84.26px]",
    March_3: "bottom-[-38px] left-[-55px]",
    April_1: "bottom-[-52px] right-[-89px] ",
    May_1: "bottom-[-23.38px] left-[-20px]",
    May_2: "bottom-[-33.53px] right-[-55px]",
    July_1: "bottom-[-36px] left-[10.57px]",
    August_1: "bottom-[-59.36px] right-[-12px]",
    September_1: "bottom-[-55px] left-[13px]",
    October_1: "bottom-[-35px] right-[-66px]",
    November_1: "bottom-[-37.23px] left-[8.61px]",
    December_1: "bottom-[-41px] right-[23px]",
  };

  const formattedContent = content.split("\n").map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));

  return (
    <p
      className={`${positionVariants[imageKey]} font-tvNEnjoystoriesL text-[25px] leading-[100%] tracking-[-0.25px] text-center absolute`}
    >
      {formattedContent}
    </p>
  );
}

function ContentMain({ children, imageKey }: ContentMainProps) {
  const marginVariants: { [key: string]: string } = {
    January_1: "mb-[36.5px]",
    January_2: "mb-[75px] ml-[88px]",
    February_1: "mb-[81.39px]",
    March_1: "mb-[59.61px] ml-[83.13px]",
    March_2: "mb-[43px]",
    March_3: "mb-[114.47px] ml-[92px]",
    April_1: "mb-[144.17px]",
    May_1: "mb-[52.83px] ml-[87px]",
    May_2: "mb-[99.53px]",
    July_1: "mb-[105.64px]",
    August_1: "mb-[121.36px] ml-[87px]",
    September_1: "mb-[116px]",
    October_1: "mb-[92.77px] ml-[40px]",
    November_1: "mb-[112.23px] ml-[61.39px]",
    December_1: "ml-[82px]",
  };
  return (
    <div
      className={` ${marginVariants[imageKey]} relative w-[238px] h-[169px]`}
    >
      {children}
    </div>
  );
}

function ContentImage({ imageKey, src, alt }: ContentImageProps) {
  const rotateVariants: { [key: string]: string } = {
    January_1: "rotate-[-5.737deg]",
    January_2: "rotate-0",
    February_1: "rotate-0",
    March_1: "rotate-[3.644deg]",
    March_2: "rotate-0",
    March_3: "rotate-[-2.314deg]",
    April_1: "rotate-[-5.737deg]",
    May_1: "rotate-[5.825deg]",
    May_2: "rotate-[-5.737deg]",
    July_1: "rotate-[1.138deg]",
    August_1: "rotate-0",
    September_1: "rotate-[4.645deg]",
    October_1: "rotate-0",
    November_1: "rotate-[-3.835deg]",
    December_1: "rotate-[3.032deg]",
  };
  return (
    <img
      src={src}
      alt={alt}
      className={`${rotateVariants[imageKey]} w-full h-full bg-[#D9D9D9] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] `}
    />
  );
}

export const PhotoItem = Object.assign(ContentMain, {
  Image: ContentImage,
  Comment: ContentComment,
});
