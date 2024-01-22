import Title from "@/componenet/Common/Title";
import SubTitle from "@/componenet/PerformanceVideo/SubTitle";
import VideoItem from "@/componenet/PerformanceVideo/VideoItem";

function PerformanceVideo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title content="Best Performance" />
      <SubTitle />
      <VideoItem />
    </div>
  );
}

export default PerformanceVideo;
