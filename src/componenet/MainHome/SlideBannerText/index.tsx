function SlideBannerText() {
  return (
    <div className="absolute z-[4] flex flex-col items-center top-[7rem] [text-shadow:_0_0.4rem_0.4rem_rgb(0_0_0_/_25%)]">
      <span className="font-AppleSDGothicNeoSB00 text-[3rem]">
        Who is Next?
      </span>
      <span className="font-AppleSDGothicNeoL00 text-[1.4rem] max-[372px]:text-[1.33rem] -mt-[0.3rem] ">
        인하대 No.1 밴드 동아리{" "}
        <span className="font-AppleSDGothicNeoSB00 text-[1.4rem]">
          꼬망스
        </span>
        에서 24학번 신입부원을 기다립니다.
      </span>
    </div>
  );
}

export default SlideBannerText;
