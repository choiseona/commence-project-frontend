import playIcon from "@/assets/icons/play-icon.svg";

interface MainProps {
  children: React.ReactNode;
}

interface GenreProps {
  genre: string;
}

interface ThumbnailProps {
  imgSrc: string;
  alt: string;
}

interface InformationProps {
  title: string;
  singer: string;
}

function VideoMain({ children }: MainProps) {
  return <div className="w-full max-w-[17.4rem]">{children}</div>;
}

function Genre({ genre }: GenreProps) {
  return (
    <span className="font-tvNEnjoystoriesL text-[2rem] leading-[100%] tracking-[-0.02rem] ml-[1.2rem] mb-[0.4rem] ">
      {genre}
    </span>
  );
}

function Thumbnail({ imgSrc, alt }: ThumbnailProps) {
  return (
    <div className="relative">
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-[9.75rem] rounded-[14px]  shadow-[0_2px_2px_0_rgba(0,0,0,0.25)] cursor-pointer"
      />
      <img
        src={playIcon}
        alt="재생 버튼"
        className="absolute bottom-[0.656rem] right-[0.843rem]"
      />
    </div>
  );
}

function Information({ title, singer }: InformationProps) {
  return (
    <div className="mt-[0.855rem] text-center font-AppleSDGothicNeoL00">
      <p className="text-[1rem] leading-[100%] tracking-[-0.01rem]">{title}</p>
      <p className="text-[0.8rem] leading-[100%] tracking-[-0.008rem]">
        {singer}
      </p>
    </div>
  );
}

export const VideoItem = Object.assign(VideoMain, {
  Genre: Genre,
  Thumbnail: Thumbnail,
  Information: Information,
});
