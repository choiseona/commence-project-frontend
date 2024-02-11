import nextIcon from "@/assets/icons/tail-arrow.svg";

function ApplyButton() {
  const APPLY_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSffj7Op4qWoYEcYOZel1dOvzjvZLjrojTdlqFalkdiqAV2Odw/viewform?fbclid=PAAab9cev4YKRIZnvt2gPT2G1pthv6kapZXDj88UEM-gp-Uv3xWt62q_asQqU";
  const onClick = () => {
    window.location.href = "";
  };
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[34.9rem] h-[5.6rem] rounded-[1.4rem] bg-[#E4E4E4]  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
    >
      <a
        href={APPLY_LINK}
        className="font-AppleSDGothicNeoEB00 text-[1.8rem] leading-_normal relative"
      >
        지원서 작성하기!
        <div className="inline absolute top-1/2 -translate-y-1/2 right-[-3rem] w-[1.5385rem]">
          <img src={nextIcon} alt="go to apply icon" />
        </div>
      </a>
    </button>
  );
}

export default ApplyButton;
