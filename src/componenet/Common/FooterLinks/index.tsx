import youtubeSmallMarkPNG from "@/assets/images/youtue-smallmarkPNG.png";
import instagramSmallMarkPNG from "@/assets/images/instagram-smallmarkPNG.png";

function FooterLinks() {
  return (
    <div className="flex flex-col space-y-[2px] pl-[37px] mt-[20px]">
      <span className="font-AppleSDGothicNeoL00 text-[0.72em] text-[#6E6E6E]">
        COMMENCE SNS
      </span>
      <div className="flex items-center">
        <img
          src={youtubeSmallMarkPNG}
          alt="youtube-smallmark"
          className="-ml-[3px]"
          width={"5%"}
        />
        <span className="font-AppleSDGothicNeoM00 text-[7px] -ml-[2px]">
          YOUTUBE
        </span>
      </div>
      <div className="flex items-center">
        <img
          src={instagramSmallMarkPNG}
          alt="instagram-smallmark"
          width={"3.5%"}
          height={"4%"}
        />
        <span className="font-AppleSDGothicNeoM00 text-[7px] ml-[2px]">
          Instagram
        </span>
      </div>
    </div>
  );
}
export default FooterLinks;
