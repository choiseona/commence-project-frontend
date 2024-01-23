import CategoryBoxContainer from "@/componenet/MainHome/CategoryBoxContainer";
import JoinUsButton from "@/componenet/MainHome/JoinUsButton";
import MovingBanner from "@/componenet/MainHome/MovingBanner";
import OuterLinksContainer from "@/componenet/MainHome/OuterLinksContainer";
import SlideBanner from "@/componenet/MainHome/SlideBanner";

const MainHome = () => {
  return (
    <div className="flex flex-col w-full">
      <SlideBanner/>
      <MovingBanner/>
      <CategoryBoxContainer/>
      <OuterLinksContainer/>
      <JoinUsButton/>
    </div>
  );
};

export default MainHome;
