import CategoryBox from "@/componenet/MainHome/CategoryBox";
import JoinUsButton from "@/componenet/MainHome/JoinUsButton";
import MovingBanner from "@/componenet/MainHome/MovingBanner";
import OuterLinks from "@/componenet/MainHome/OuterLinks";
import SlideBanner from "@/componenet/MainHome/SlideBanner";

const MainHome = () => {
  return (
    <div className="flex flex-col w-full">
      <SlideBanner/>
      <MovingBanner/>
      <CategoryBox/>
      <OuterLinks/>
      <JoinUsButton/>
    </div>
  );
};

export default MainHome;
