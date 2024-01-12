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
    March_1: "bottom-[-51.61px] left-[-28.13px] ",
    March_2: "bottom-[-31px] right-[-40px]",
    March_3: "bottom-[-38px] left-[-55px]",
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
    January_2: "mb-[38px] ml-[84px]",
    February_1: "mb-[44px]",
    March_1: "mb-[59.61px] ml-[79.13px]",
    March_2: "mb-[43px]",
    March_3: "mb-[59px] ml-[84px]",
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
    March_3: "rotate-[-2.314deg] ",
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
