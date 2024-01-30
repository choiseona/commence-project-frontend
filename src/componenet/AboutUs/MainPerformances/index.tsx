import { MainPerformacesData } from "@/data/MainPerformancesData";
import AboutUsSubTitle from "../AboutUsSubTitle";
import PerformanceBox from "../PerformanceBox";

function MainPerformances() {
  return (
    <div className="mt-[3.165rem] flex flex-col">
      <AboutUsSubTitle main="Main performances" sub="throughout the year"/>
      <div className="mt-[0.788rem] mx-[9.65%] grid grid-rows-4 space-y-[1rem] self-stretch items-center">
        {MainPerformacesData.map((data,index) => <PerformanceBox key={index} month={data.month} show={data.show} contents={data.contents}/>)}
      </div>
    </div>
  );
}

export default MainPerformances;
