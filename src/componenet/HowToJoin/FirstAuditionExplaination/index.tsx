import { firstAuditionExplainationData } from "@/data/AuditionData";
import { formatContent } from "@/libs/util";

function FirstAuditionExplaination() {
  return (
    <div>
      <div className="flex items-center gap-[0.739rem]">
        <div className="w-[0.522rem] h-[0.522rem] bg-black rounded-full" />
        <p className="font-tvNEnjoystoriesB text-[2rem] leading-[100%] tracking-[-0.02rem]">
          1차 오디션
        </p>
      </div>

      <p className="mt-[0.412rem] font-AppleSDGothicNeoL00 text-[1.3rem] leading-_normal max-w-[33.8rem]">
        본인이 준비한 노래{" "}
        <span className="font-AppleSDGothicNeoB00">두 곡을 1절 분량</span>으로
        가창 또는 연주를 합니다. 가창 또는 연주 이후 꼬망서로부터 짧게{" "}
        <span className="font-AppleSDGothicNeoB00">질의응답 시간</span>이
        있습니다.
      </p>

      <div className="mt-[3.415rem]">
        {firstAuditionExplainationData.map((item, index) => {
          return (
            <div
              key={`${index}-${item.position}`}
              className={index % 2 ? "text-right" : "text-left"}
            >
              <p className="font-AppleSDGothicNeoEB00 text-[1.2rem] leading-_normal">
                {item.position}
              </p>
              <p className="font-AppleSDGothicNeoL00 text-[1.2rem] leading-_normal">
                {formatContent(item.content)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FirstAuditionExplaination;
