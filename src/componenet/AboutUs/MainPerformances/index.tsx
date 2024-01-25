import { MainPerformacesData } from "@/data/MainPerformancesData";
import AboutUsSubTitle from "../AboutUsSubTitle";
import PerformanceBox from "../PerformanceBox";

function MainPerformances() {
  return (
    <div className="mt-[6.57rem] flex flex-col">
      <AboutUsSubTitle main="Main performances" sub="throughout the year"/>
      <div className="mt-[2.5rem] mx-[9.65%] grid grid-rows-4 space-y-[1rem] self-stretch items-center">
        {MainPerformacesData.map((data,index) => <PerformanceBox key={index} month={data.month} show={data.show} contents={data.contents} color={data.color}/>)}
      </div>
    </div>
  );
}

export default MainPerformances;
