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
  April: {
    items: [
      {
        src: testImage,
        alt: "IndkyxAssessxCOMMENCE\n연합공연 사진",
        content: "IndkyxAssessxCOMMENCE\n연합공연",
      },
    ],
  },
  May: {
    items: [
      {
        src: testImage,
        alt: "2023 비룡제 사진",
        content: "2023 비룡제",
      },
      {
        src: testImage,
        alt: "통일광장 야외공연 사진",
        content: "통일광장 야외공연",
      },
    ],
  },
  July: {
    items: [
      {
        src: testImage,
        alt: "클럽공연 사진",
        content: "클럽공연",
      },
    ],
  },
  August: {
    items: [
      {
        src: testImage,
        alt: "인하대 4대 밴드 연합공연 in 롤링홀 사진",
        content: "인하대 4대 밴드\n연합공연 in 롤링홀",
      },
    ],
  },
  September: {
    items: [
      {
        src: testImage,
        alt: "연합 단과대 소축제 공연 사진",
        content: "연합 단과대\n소축제 공연",
      },
    ],
  },
  October: {
    items: [
      {
        src: testImage,
        alt: "YB 순수창작가요 발매 사진",
        content: "YB 순수창작가요 발매",
      },
    ],
  },
  November: {
    items: [
      {
        src: testImage,
        alt: "꼬망스 정기공연 사진",
        content: "꼬망스 정기공연",
      },
    ],
  },
  December: {
    items: [
      {
        src: testImage,
        alt: "2023 종강총회 사진",
        content: "2023 종강총회",
      },
    ],
  },
};

function PhotoItems() {
  const marginBottomVariants: { [key: string]: string } = {
    January: "top-[-32.5px] left-[-8px]",
    February: "top-[-37px] left-[-8px]",
    March: "top-[-37.39px] left-[-87.13px]",
    April: "top-[-56.47px] left-[-8px]",
    May: "top-[-60.64px] left-[-80px]",
    July: "top-[-32px] left-[-8px]",
    August: "top-[-49.64px] left-[-91px]",
    September: "top-[-49px] left-[-8px]",
    October: "top-[-44px] left-[-44px]",
    November: "top-[-43.77px] left-[-65.39px]",
    December: "top-[-46px] left-[-90px]",
  };

  return (
    <>
      {Object.entries(datas).map(([month, { items }]) => (
        <Fragment key={month}>
          {items.map(({ src, alt, content }, index) => (
            <PhotoItem key={index} imageKey={`${month}_${index + 1}`}>
              {index == 0 && (
                <p
                  className={`${marginBottomVariants[month]} absolute font-tvNEnjoystoriesM text-[30px] leading-[100%] tracking-[-0.3px]`}
                >
                  {month}
                </p>
              )}
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
    </>
  );
}

export default PhotoItems;
