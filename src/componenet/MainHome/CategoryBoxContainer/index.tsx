import CategoryBox from "../CategoryBox";

const BoxData = [
  {
    title:"우리가 궁금하다면?",
    bottomText: "About us",
    link: "/about-us"
  },{
    title:"자주 묻는 질문!",
    bottomText: "FAQ",
    link: "/faq"
  },{
    title:"꼬망스의 1년 모아보기!",
    bottomText: "COMMENCE's 2023",
    link: "/photo"
  },{
    title:"꼬망스 공연 모아보기!",
    bottomText: "Best Performance",
    link: "/performance-video"
  }
]

function CategoryBoxContainer() {
  return (
    <div className="mt-[2.1rem] mx-[4.82%] grid grid-cols-2  grid-rows-2 gap-y-[1.8rem] gap-x-[4%] items-center justify-items-center">
      
      {BoxData.map(box => <CategoryBox title={box.title}  bottomText={box.bottomText} link={box.link}/>)}
    </div>
  );
}

export default CategoryBoxContainer;
