import CommonExplaination from "../CommonExplaination";

function CommonExplainations() {
  return (
    <>
      <div className="flex flex-col gap-[1.2rem]">
        <CommonExplaination title="모집대상" content="23학번 신입생" />
        <CommonExplaination
          title="모집기간"
          content="2024년 상시모집"
          additionalContent=" *2학기 종강총회 전까지"
        />
        <CommonExplaination title="오디션 일시" content="매주 화요일 6~7시" />
        <CommonExplaination
          title="오디션 장소"
          content="나빌레관 or 5호관"
          additionalContent=" *상세 장소는 문자로 추후 안내"
        />
      </div>
    </>
  );
}

export default CommonExplainations;
