//import commenceSmallMarkPNG from "@/assets/images/commence-smallmarkPNG.png";
import commenceSmallMark from "@/assets/icons/commence-smallmark.svg";

function FooterTitle() {
  return (
    <div className="flex items-center pl-[2.1rem]">
      <img src={commenceSmallMark} alt="commence-smallmark" width={"17%"} />
      <div className="flex flex-col ml-[0.2rem]">
        <span className="font-tvNEnjoystoriesM text-black text-[204%]">COMMENCE</span>
        <span className="font-AppleSDGothicNeoL00 text-[117%] text-black -mt-[1rem]">
          est.1984
        </span>
      </div>
    </div>
  );
}
export default FooterTitle;
