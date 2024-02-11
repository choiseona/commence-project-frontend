import PositionExplaination from "../PositionExplaination";

function PositionExplainations() {
  return (
    <div className="flex gap-[4.8rem]">
      <p className="font-AppleSDGothicNeoEB00 text-[1.4rem] leading-[100%] w-[4.9rem] shrink-0 tracking-[-1%]">
        준비사항
      </p>
      <div className="flex flex-col">
        <PositionExplaination
          position="보컬"
          preparation="가창할 노래의 건반 악보"
        />
        <PositionExplaination
          position="건반"
          preparation="연주할 곡의 악보(프린트 및 태블릿)"
        />
        <PositionExplaination
          position="일렉"
          preparation="연주할 곡의 AR or MR"
        />
        <PositionExplaination
          position="베이스"
          preparation="연주할 곡의 AR or MR"
        />
        <PositionExplaination
          position="통기타"
          preparation="연주할 곡의 악보(프린트 및 태블릿)"
        />
        <PositionExplaination
          position="드럼"
          preparation="연주할 곡의 AR or MR"
        />
        <PositionExplaination
          position="작곡"
          preparation="직접 만든 노래의 파일 or 악보"
        />
        <PositionExplaination
          position="미디"
          preparation="직접 만든 노래의 파일 or 악보"
        />
      </div>
    </div>
  );
}

export default PositionExplainations;
