interface SubTitleProps {
    mainText:string;
    subText:string;
}

function MainPageSubTitle({mainText,subText}:SubTitleProps){
    return <div className="ml-[0.373rem] mb-[0.7rem] flex flex-col">
    <span className="font-AppleSDGothicNeoH00 text-[1.5rem]">
      {mainText}
    </span>
    <span className="font-AppleSDGothicNeoL00 text-[0.8rem] text-[#6E6E6E] leading-[100%] tracking-[0.04rem]">
      {subText}
    </span>
  </div>
}

export default MainPageSubTitle;