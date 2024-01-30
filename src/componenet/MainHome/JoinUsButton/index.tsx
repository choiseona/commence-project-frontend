import { useNavigate } from "react-router";
import MainPageSubTitle from "../MainPageSubTitle";
import rightArrow from "@/assets/icons/right-arrow-icon.svg";
function JoinUsButton() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/how-to-join");
  };
  return (
    <div className="mt-[2.3rem] mx-[4.82%] mb-[4.25rem]">
      <MainPageSubTitle
        mainText={"모두 확인 하셨나요?"}
        subText={"아름다운 청춘의 한 장, 꼬망스에서 함께해요"}
      />
      <button
        className="relative w-full bg-[#393939] flex justify-center items-center rounded-[1.6rem]  shadow-[0.2rem_0.4rem_0.6rem_0_rgba(0,0,0,0.25)] transition-all hover:shadow-[0.4rem_0.6rem_0.8rem_0_rgba(0,0,0,0.25)]"
        onClick={onClick}
      >
        <span className="font-AppleSDGothicNeoB00 text-white text-[1.3rem] py-[0.97rem]">
          꼬망스 지원하기
        </span>
        <img className="absolute right-[3rem] w-[1.7rem]" src={rightArrow} />
      </button>
    </div>
  );
}

export default JoinUsButton;
