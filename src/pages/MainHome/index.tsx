import CategoryBoxContainer from "@/componenet/MainHome/CategoryBoxContainer";
import JoinUsButton from "@/componenet/MainHome/JoinUsButton";
import MovingBanner from "@/componenet/MainHome/MovingBanner";
import OuterLinks from "@/componenet/MainHome/OuterLinks";
import SlideBanner from "@/componenet/MainHome/SlideBanner";

const MainHome = () => {
  return (
    <div className="flex flex-col w-full">
      <SlideBanner/>
      <MovingBanner/>
      <CategoryBoxContainer/>
      <OuterLinks/>
      <JoinUsButton/>
    </div>
  );
};

export default MainHome;
