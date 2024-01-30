import { AwardsData } from "@/data/AwardsData";
import AboutUsSubTitle from "../AboutUsSubTitle";
import AwardsItem from "../AwardsItem";
import AwardsLine from "../AwardsLine";

function Awards() {
  return (
    <div className="mt-[2.57rem]">
      <AboutUsSubTitle main="꼬망스 수상 내역" sub="est.1984" />
      <div className="ml-[4.31rem] mt-[2.5rem] relative space-y-[0.3rem] pb-[7rem]">
      <AwardsLine />
        {AwardsData.map((data, index) => (
          <AwardsItem
            key={index}
            color={data.color}
            year={data.year}
            awards={data.awards}
          />
        ))}
      </div>
    </div>
  );
}

export default Awards;
