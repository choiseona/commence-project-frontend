import { PerformanceVideoData } from "@/data/PerformanceVideoData";
import { VideoItem } from "../VideoItem";

function VideoList() {
  return (
    <div className="w-full max-w-[35rem] grid grid-cols-2 gap-x-[1.172rem] gap-y-[0.8rem]">
      {PerformanceVideoData.map((video, index) => (
        <VideoItem key={index}>
          <VideoItem.Genre genre={video.genre} />
          <VideoItem.Thumbnail imgSrc={video.imgSrc} alt={video.alt} />
          <VideoItem.Information title={video.title} singer={video.singer} />
        </VideoItem>
      ))}
    </div>
  );
}

export default VideoList;
