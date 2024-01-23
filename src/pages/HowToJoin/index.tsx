import Title from "@/componenet/Common/Title";
import ApplyButton from "@/componenet/HowToJoin/ApplyButton";
import AuditionProcedure from "@/componenet/HowToJoin/AuditionProcedure";
import AuditionTip from "@/componenet/HowToJoin/AuditionTip";
import Comment from "@/componenet/HowToJoin/Comment";
import CommonExplainations from "@/componenet/HowToJoin/CommonExplainations";
import FirstAuditionExplaination from "@/componenet/HowToJoin/FirstAuditionExplaination";
import PositionExplainations from "@/componenet/HowToJoin/PositionExplainations";
import SecondAuditionExplaination from "@/componenet/HowToJoin/SecondAuditionExplaination";

function HowToJoin() {
  return (
    <div className="pt-[3.333rem] mb-[7.1rem] flex flex-col justify-center items-center mx-[2.595rem]">
      <Title content="Join To COMMENCE" />
      <div className="mt-[4.933rem]">
        <CommonExplainations />
        <div className="mt-[4.225rem]" />
        <PositionExplainations />
      </div>
      <div className="mt-[4.867rem]" />
      <AuditionProcedure />
      <div className="mt-[4.983rem]" />
      <FirstAuditionExplaination />
      <div className="mt-[5.099rem]" />
      <SecondAuditionExplaination />
      <div className="mt-[3.467rem]" />
      <AuditionTip />
      <div className="mt-[3.209rem]" />
      <Comment />
      <div className="mt-[1.7rem]" />
      <ApplyButton />
    </div>
  );
}

export default HowToJoin;
