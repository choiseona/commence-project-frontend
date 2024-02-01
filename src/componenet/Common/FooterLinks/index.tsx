//import youtubeSmallMarkPNG from "@/assets/images/youtue-smallmarkPNG.png";
//import instagramSmallMarkPNG from "@/assets/images/instagram-smallmarkPNG.png";
import youtubeSmallMark from "@/assets/icons/youtube-smallmark.svg";
import instagramSmallMark from "@/assets/icons/instagram-smallmark.svg";

function FooterLinks() {
  const youtubeURL = "https://www.youtube.com/@commence-sw6xo";
  const instaURL = "https://www.instagram.com/commence_official/";
  const GotoOuterLink = (url: string) => {
    window.open(url);
  };
  return (
    <div className="flex flex-col space-y-[0.2rem] pl-[3.7rem] mt-[2rem]">
      <span className="font-AppleSDGothicNeoM00 text-black text-[130%] ">
        COMMENCE SNS
      </span>
      <div className="flex items-center cursor-pointer">
        <img
          src={youtubeSmallMark}
          alt="youtube-smallmark"
          className="-ml-[0.3rem]"
          width={"5.1%"}
        />
        <span
          className="font-AppleSDGothicNeoM00 text-[0.7rem] text-black -ml-[0.4%]"
          onClick={() => GotoOuterLink(youtubeURL)}
        >
          YOUTUBE
        </span>
      </div>
      <div className="flex items-center cursor-pointer">
        <img
          src={instagramSmallMark}
          alt="instagram-smallmark"
          width={"3.5%"}
          height={"4%"}
        />
        <span
          className="font-AppleSDGothicNeoM00 text-[0.7rem] text-black ml-[0.5%]"
          onClick={() => GotoOuterLink(instaURL)}
        >
          Instagram
        </span>
      </div>
    </div>
  );
}
export default FooterLinks;
