import PhotoLine from "@/componenet/PhotoGallery/PhotoLine";
import ThisYear from "@/componenet/PhotoGallery/ThisYear";
import PhotoItems from "@/componenet/PhotoGallery/PhotoItems";

function PhotoGallery() {
  return (
    <div className="pt-[43px]">
      <ThisYear />
      <div className="mt-[166px]">
        <PhotoLine>
          <PhotoItems />
        </PhotoLine>
      </div>
    </div>
  );
}

export default PhotoGallery;
