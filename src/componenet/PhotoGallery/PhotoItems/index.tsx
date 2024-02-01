import { Fragment } from "react";
import { PhotoItem } from "../PhotoItem";
import { photoGalleryData } from "@/data/PhotoGalleryData";

function PhotoItems() {
  const marginBottomVariants: { [key: string]: string } = {
    January: "top-[-32.5px] left-[-8px]",
    February: "top-[-37px] left-[-8px]",
    March: "top-[-37.39px] left-[-87.13px]",
    April: "top-[-56.47px] left-[-8px]",
    May: "top-[-60.64px] left-[-91px]",
    July: "top-[-32px] left-[-8px]",
    August: "top-[-49.64px] left-[-91px]",
    September: "top-[-49px] left-[-8px]",
    October: "top-[-44px] left-[-44px]",
    November: "top-[-43.77px] left-[-65.39px]",
    December: "top-[-46px] left-[-90px]",
  };

  return (
    <>
      {Object.entries(photoGalleryData).map(([month, { items }]) => (
        <Fragment key={month}>
          {items.map(({ src, alt, content }, index) => (
            <PhotoItem key={index} imageKey={`${month}_${index + 1}`}>
              {index == 0 && (
                <p
                  className={`${marginBottomVariants[month]} absolute font-AppleSDGothicNeoB00 text-[25px] leading-_normal tracking-[-1%]`}
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
