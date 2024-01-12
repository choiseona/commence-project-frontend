import { Fragment } from "react";
import testImage from "@/assets/images/photo-gallery-test1.jpg";
import { PhotoItem } from "../PhotoItem";

const datas = {
  January: {
    items: [
      {
        src: testImage,
        alt: "겨울MT 사진",
        content: "겨울MT",
      },
      {
        src: testImage,
        alt: "신년회 사진",
        content: "신년회",
      },
    ],
  },

  February: {
    items: [
      {
        src: testImage,
        alt: "꼬망서 졸업식 사진",
        content: "꼬망서 졸업식",
      },
    ],
  },
  March: {
    items: [
      {
        src: testImage,
        alt: "OB x YB 꼬망서 순수창작가요 발매 사진",
        content: "OBxYB 꼬망서\n순수창작가요 발매",
      },
      {
        src: testImage,
        alt: "동아리 박람회 사진",
        content: "동아리 박람회",
      },
      {
        src: testImage,
        alt: "2023 꼬망스 소음악회 사진",
        content: "2023 꼬망스 소음악회",
      },
    ],
  },
};

function PhotoItems() {
  const marginBottomVariants: { [key: string]: string } = {
    January: "mb-[2.5px]",
    February: "mb-[7px]",
    March: "mb-[7.39px]",
  };

  return (
    <div className="absolute top-[-87px] left-[-74px]">
      {Object.entries(datas).map(([month, { items }]) => (
        <Fragment key={month}>
          <p
            className={`${marginBottomVariants[month]} font-tvNEnjoystoriesM text-[30px] leading-[100%] tracking-[-0.3px]`}
          >
            {month}
          </p>
          {items.map(({ src, alt, content }, index) => (
            <PhotoItem key={index} imageKey={`${month}_${index + 1}`}>
              <PhotoItem.Image
                imageKey={`${month}_${index + 1}`}
                src={src}
                alt={alt}
              />
              <PhotoItem.Comment
                imageKey={`${month}_${index + 1}`}
                content={content}
              />
            </PhotoItem>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default PhotoItems;
