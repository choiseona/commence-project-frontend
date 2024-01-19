import commenceSmallMarkPNG from "@/assets/images/commence-smallmarkPNG.png";

function FooterTitle() {
  return (
    <div className="flex items-center pl-[2.1rem]">
      <img src={commenceSmallMarkPNG} alt="commence-smallmark" width={"17%"} />
      <div className="flex flex-col ml-[0.2rem]">
        <span className="font-tvNEnjoystoriesM text-[204%]">COMMENCE</span>
        <span className="font-AppleSDGothicNeoL00 text-[60%] text-[#6E6E6E] -mt-[1rem]">
          est.1984
        </span>
      </div>
    </div>
  );
}
export default FooterTitle;
