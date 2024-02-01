import youtubeMark from "@/assets/icons/youtube-redmark.svg";

function YoutubeButton() {
  const COMMENCE_YOUTUBE_CHANNEL = "https://www.youtube.com/@commence-sw6xo";
  const onClick = () => {
    window.open(COMMENCE_YOUTUBE_CHANNEL);
  };

  return (
    <button
      onClick={onClick}
      className="px-[2.7rem] py-[1.4rem] flex justify-between items-center w-full min-h-[5.6rem] rounded-[1.4rem] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
    >
      <div>
        <p className="font-AppleSDGothicNeoL00 text-[1rem] leading-[100%] tracking-[-0.01rem]">
          이 외에 더 많은 꼬망스의 공연 영상들은 여기로!
        </p>
        <p className="font-AppleSDGothicNeoEB00 text-[1.5rem] leading-[130%] tracking-[-0.015rem]">
          인하대학교 꼬망스 COMMENCE
        </p>
      </div>
      <img src={youtubeMark} alt="유튜브 꼬망스 페이지 이동 아이콘" />
    </button>
  );
}

export default YoutubeButton;
