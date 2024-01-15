import youtubeSmallMarkPNG from "@/assets/images/youtue-smallmarkPNG.png";
import instagramSmallMarkPNG from "@/assets/images/instagram-smallmarkPNG.png";

function FooterLinks() {
  const youtubeURL = "https://www.youtube.com/@commence-sw6xo"
  const instaURL = "https://www.instagram.com/commence_official/"
  return (
    <div className="flex flex-col space-y-[2px] pl-[37px] mt-[20px]">
      <span className="font-AppleSDGothicNeoL00 text-[0.72em] text-[#6E6E6E]">
        COMMENCE SNS
      </span>
      <div className="flex items-center cursor-pointer" onClick={()=>{window.open(youtubeURL)}}>
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
      <div className="flex items-center cursor-pointer" onClick={()=>{window.open(instaURL)}}>
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
