import Title from "@/componenet/Common/Title";
import VideoList from "@/componenet/PerformanceVideo/VideoList";
import YoutubeButton from "@/componenet/PerformanceVideo/YouTubeButton";

function PerformanceVideo() {
  return (
    <div className="mx-[1.7rem] pt-[4rem] pb-[4.2rem] flex justify-center ">
      <div className="w-full max-w-[36rem] flex flex-col justify-center items-center ">
        <Title content="Best Performance" />
        <div className="mt-[3.5rem]" />
        <VideoList />
        <div className="mt-[2.2rem]" />
        <YoutubeButton />
      </div>
    </div>
  );
}

export default PerformanceVideo;
