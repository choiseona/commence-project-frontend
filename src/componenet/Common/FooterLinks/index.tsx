import youtubeSmallMarkPNG from "@/assets/images/youtue-smallmarkPNG.png";
import instagramSmallMarkPNG from "@/assets/images/instagram-smallmarkPNG.png";

function FooterLinks() {
  const youtubeURL = "https://www.youtube.com/@commence-sw6xo";
  const instaURL = "https://www.instagram.com/commence_official/";
  const GotoOuterLink = (url: string) => {
    window.open(url);
  };
  return (
    <div className="flex flex-col space-y-[0.2rem] pl-[3.7rem] mt-[2rem]">
      <span className="font-AppleSDGothicNeoL00 text-[130%] text-[#6E6E6E]">
        COMMENCE SNS
      </span>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => GotoOuterLink(youtubeURL)}
      >
        <img
          src={youtubeSmallMarkPNG}
          alt="youtube-smallmark"
          className="-ml-[0.3rem]"
          width={"5%"}
        />
        <span className="font-AppleSDGothicNeoM00 text-[0.7rem] -ml-[0.2rem]">
          YOUTUBE
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => GotoOuterLink(instaURL)}
      >
        <img
          src={instagramSmallMarkPNG}
          alt="instagram-smallmark"
          width={"3.5%"}
          height={"4%"}
        />
        <span className="font-AppleSDGothicNeoM00 text-[0.7rem] ml-[0.2rem]">
          Instagram
        </span>
      </div>
    </div>
  );
}
export default FooterLinks;
