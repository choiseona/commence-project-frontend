import { OuterLinkBoxData } from "@/data/OuterLinkBoxData";
import MainPageSubTitle from "../MainPageSubTitle";
import { OuterLinkBox } from "../OuterLinkBox";

function OuterLinksContainer() {
  return (
    <div className="mt-[2.3rem] mx-[4.82%]">
      <MainPageSubTitle
        mainText={"꼬망스 더 알아보기!"}
        subText={"꼬망스의 다양한 sns를 구경해보세요!"}
      />

      <div className="grid grid-cols-3 gap-x-[3%]">
        {OuterLinkBoxData.map((box,index) => (
            <OuterLinkBox key={index} link={box.link}>
                <OuterLinkBox.Content>
                    <OuterLinkBox.Svg svg={box.svg} src={box.src} alt={box.alt}/>
                    <OuterLinkBox.Title title={box.title}/>
                </OuterLinkBox.Content>
            </OuterLinkBox>
        ))}
      </div>
    </div>
  );
}

export default OuterLinksContainer;
