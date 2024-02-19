import awardsLine from "@/assets/icons/awards-line.svg";
import smallDat from "@/assets/icons/small-dat.svg";

function AwardsLine() {
  return (
    <div className="absolute left-[0.7rem] top-[0] ">
      <img src={awardsLine} alt="awardsLine" />
      <img className="-ml-[0.255rem] mt-[1rem]" src={smallDat} alt="smallDat" />
      <img
        className="-ml-[0.255rem] -mt-[0.3rem]"
        src={smallDat}
        alt="smallDat"
      />
      <img
        className="-ml-[0.255rem] -mt-[0.3rem]"
        src={smallDat}
        alt="smallDat"
      />
    </div>
  );
}

export default AwardsLine;
