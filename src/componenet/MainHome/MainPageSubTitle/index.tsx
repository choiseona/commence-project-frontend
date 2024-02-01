interface SubTitleProps {
    mainText:string;
    subText:string;
}

function MainPageSubTitle({mainText,subText}:SubTitleProps){
    return <div className="ml-[0.373rem] mb-[0.7rem] flex flex-col">
    <span className="font-AppleSDGothicNeoH00 text-black text-[1.5rem]">
      {mainText}
    </span>
    <span className="font-AppleSDGothicNeoL00 text-black text-[1rem] leading-[100%] tracking-[0.04rem]">
      {subText}
    </span>
  </div>
}

export default MainPageSubTitle;