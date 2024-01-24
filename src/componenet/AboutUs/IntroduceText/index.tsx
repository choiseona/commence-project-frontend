import { AboutUsTextData } from "@/data/AboutUsTextData";
import TextItem from "../TextItem";

function IntroduceText() {
  return (
    <div className="flex flex-col items-center">
      <span className="font-tvNEnjoystoriesB text-[4rem]" >About us</span>
      {AboutUsTextData.map((data,index) => <TextItem key={index} bold={data.bold} contents={data.contents}/>)}
    </div>
  );
}

export default IntroduceText;
