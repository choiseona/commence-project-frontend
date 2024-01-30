import awardsLine from "@/assets/icons/awards-line.svg";
import smallDat from "@/assets/icons/small-dat.svg";

function AwardsLine() {
  return (
    <div className="absolute left-[0.7rem] top-[0] ">
      <img src={awardsLine} />
      <img className="-ml-[0.255rem] mt-[1rem]" src={smallDat} />
      <img className="-ml-[0.255rem] -mt-[0.3rem]" src={smallDat} />
      <img className="-ml-[0.255rem] -mt-[0.3rem]" src={smallDat} />
    </div>
  );
}

export default AwardsLine;
