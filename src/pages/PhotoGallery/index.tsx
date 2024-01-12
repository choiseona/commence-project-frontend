import { PhotoItem } from "@/componenet/PhotoGallery/PhotoItem";
import PhotoLine from "@/componenet/PhotoGallery/PhotoLine";
import ThisYear from "@/componenet/PhotoGallery/ThisYear";
import testImage from "@/assets/images/photo-gallery-test1.jpg";

function PhotoGallery() {
  return (
    <>
      <ThisYear />
      <PhotoLine />
      <PhotoItem>
        <PhotoItem.Image rotate="-5.737deg" src={testImage} alt="gg" />
        <PhotoItem.Comment bottom="-30px" right="-18px" content="겨울MT" />
      </PhotoItem>
    </>
  );
}

export default PhotoGallery;
