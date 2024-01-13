import PhotoLine from "@/componenet/PhotoGallery/PhotoLine";
import ThisYear from "@/componenet/PhotoGallery/ThisYear";
import PhotoItems from "@/componenet/PhotoGallery/PhotoItems";

function PhotoGallery() {
  return (
    <div className="pt-[43px]">
      <ThisYear />
      <div className="mt-[166px] flex justify-center">
        <div className="relative">
          <PhotoLine />
          <div className="absolute top-[-84.5px] left-[-74px]">
            <PhotoItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
