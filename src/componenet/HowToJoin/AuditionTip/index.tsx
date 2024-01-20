function AuditionTip() {
  return (
    <div className="pt-[1rem] w-[34.5rem] h-[16.2111rem] bg-white rounded-[1.4rem] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <p>
        <span className="ml-[2.3rem] font-tvNEnjoystoriesB text-[3rem] leading-[100%] tracking-[-0.03rem]">
          Tip!
        </span>
        <span className="ml-[0.8rem] font-tvNEnjoystoriesL text-[2.5rem] leading-[100%] tracking-[-0.025rem]">
          레슨데이
        </span>
      </p>
      <p className="mx-auto mt-[1.4rem] font-AppleSDGothicNeoL00 text-[1.2rem] leading-_normal max-w-[32.1rem] text-center whitespace-pre-line">
        {`레슨데이란 현직 꼬망서들이 예비 꼬망서들에게 1,2차 오디션 이전,
          희망자에 한해 1:1 코칭 및 피드백을 해주는 날을 말합니다.\n현직 꼬망서들의 오디션 합격 노하우 전수 및 피드백을 통해 오디션 합격을 높일 수 있으니 꼭 참여하시길 바랍니다!`}
      </p>

      <p className="mx-auto mt-[1.4rem] font-AppleSDGothicNeoL00 text-[1rem] text-[#828282] leading-_normal w-[32.1rem] text-center">
        *실제로 레슨데이 참가한 지원자들의 오디션 합격률이 높았습니다.
      </p>
    </div>
  );
}

export default AuditionTip;
