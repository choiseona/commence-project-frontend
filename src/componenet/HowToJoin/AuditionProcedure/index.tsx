import Step from "../Step";
import nextIcon from "@/assets/icons/arrow-icon.svg";

function AuditionProcedure() {
  return (
    <div>
      <p className="font-tvNEnjoystoriesM text-[2.5rem] leading-[100%] shrink-0 tracking-[-0.025rem] ml-[0.707rem]">
        오디션 절차
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[2.244rem] flex gap-[0.539rem]">
          <Step content="지원서 작성" />
          <img src={nextIcon} alt="다음 단계 화살표" />
          <Step content="1차 오디션" />
          <img src={nextIcon} alt="다음 단계 화살표" />
          <Step content="2차 오디션" />
          <img src={nextIcon} alt="다음 단계 화살표" />
          <Step content="최종 합격" />
        </div>
        <p className="mt-[1.484rem] font-AppleSDGothicNeoL00 text-[0.9rem] leading-[100%] tracking-[-0.009rem] text-black opacity-70">
          *지원서 작성은 아래 지원하기 버튼 또는 나빌레관 205호 직접 방문(평일
          12-18시)을 통해 가능합니다.
        </p>
      </div>
    </div>
  );
}

export default AuditionProcedure;
