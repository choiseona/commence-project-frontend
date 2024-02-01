import AwardsItemDot from "../AwardsItemDot";

interface AwardItemProps {
  color: number;
  year: string;
  awards: string[];
}



function AwardsItem({ color, year, awards }: AwardItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <AwardsItemDot color={color}/>
        <span className="ml-[3.6rem] font-AppleSDGothicNeoT00 text-[2.8rem] text-black [text-shadow:_0_0.4rem_0.4rem_rgb(0_0_0_/_25%)]">
          {year}
        </span>
      </div>
      <div className="ml-[5.5rem] mt-[0.5rem] flex flex-col space-y-[0.7rem] font-AppleSDGothicNeoL00 text-[1.2rem] text-[#6E6E6E]">
        {awards.map((award, index) => (
          <span key={index}>{award}</span>
        ))}
      </div>
    </div>
  );
}

export default AwardsItem;
