import rightarrow from "@/assets/icons/right-arrow-icon.svg"

function DeveloperButton() {
  return (
    <button className="absolute top-[3rem] right-[2.2rem] bg-black  flex justify-center items-center w-[12%] h-[10%] rounded-[1.5rem]">
      <div className="text-white font-AppleSDGothicNeoL00 text-[10%] mt-[0.3rem] flex items-center space-x-2">
        <span>제작자</span>
        <span className="mb-[0.2rem]">
          <img src={rightarrow} alt="right-arrow"/>
        </span>
      </div>
    </button>
  );
}

export default DeveloperButton;
