import commenceSmallMarkPNG from "@/assets/images/commence-smallmarkPNG.png";

function FooterTitle() {
  return (
    <div className="flex items-center pl-[21px]">
      <img src={commenceSmallMarkPNG} alt="commence-smallmark" width={"17%"} />
      <div className="flex flex-col ml-[2px]">
        <span className="font-tvNEnjoystoriesM text-[1.26em]">COMMENCE</span>
        <span className="font-AppleSDGothicNeoL00 text-[0.6em] text-[#6E6E6E] -mt-[10px]">
          est.1984
        </span>
      </div>
    </div>
  );
}
export default FooterTitle;
