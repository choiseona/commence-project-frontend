import Title from "@/componenet/Common/Title";
import SubTitle from "@/componenet/PerformanceVideo/SubTitle";
import VideoList from "@/componenet/PerformanceVideo/VideoList";
import YoutubeButton from "@/componenet/PerformanceVideo/YouTubeButton";

function PerformanceVideo() {
  return (
    <div className="mx-[1.7rem] flex flex-col justify-center items-center pt-[1.5rem] pb-[4.2rem]">
      <Title content="Best Performance" />
      <SubTitle />
      <div className="mt-[3.3rem]" />
      <VideoList />
      <div className="mt-[2.2rem]" />
      <YoutubeButton />
    </div>
  );
}

export default PerformanceVideo;
