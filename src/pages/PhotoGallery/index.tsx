import PhotoLine from "@/componenet/PhotoGallery/PhotoLine";
import ThisYear from "@/componenet/PhotoGallery/ThisYear";
import PhotoItems from "@/componenet/PhotoGallery/PhotoItems";
import CommenceMark from "@/componenet/PhotoGallery/CommenceMark";

function PhotoGallery() {
  return (
    <div className="pt-[43px] flex flex-col items-center">
      <ThisYear />
      <div className="mt-[166px] relative">
        <PhotoLine />
        <div className="absolute top-[-84.5px] left-[-74px]">
          <PhotoItems />
        </div>
      </div>
      <div className="mt-[34.5px]">
        <CommenceMark />
      </div>
    </div>
  );
}

export default PhotoGallery;
