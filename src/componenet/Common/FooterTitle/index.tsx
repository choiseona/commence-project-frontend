//import commenceSmallMarkPNG from "@/assets/images/commence-smallmarkPNG.png";
import commenceSmallMark from "@/assets/icons/commence-smallmark.svg";

function FooterTitle() {
  return (
    <div className="flex items-center pl-[2.1rem]">
      <img src={commenceSmallMark} alt="commence-smallmark" width={"17%"} />
      <div className="flex flex-col ml-[0.2rem]">
        <span className="font-AppleSDGothicNeoEB00 text-[1.7rem]">COMMENCE</span>
        <span className="font-AppleSDGothicNeoL00 text-[120%] -mt-[0.7rem]">
          est.1984
        </span>
      </div>
    </div>
  );
}
export default FooterTitle;
