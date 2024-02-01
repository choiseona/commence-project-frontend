import FaqContainer from "@/componenet/FAQ/FaqContainer";
import TitleText from "@/componenet/FAQ/TitleText";

function FAQ() {
  return (
    <div className="flex flex-col text-black">
      <TitleText />
      <FaqContainer />
    </div>
  );
}

export default FAQ;
