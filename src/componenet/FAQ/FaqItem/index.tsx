import faqHorizon from "@/assets/icons/faq-horizon.svg";
import DownArrow from "@/assets/icons/category-DownArrow.svg";
import UpArrow from "@/assets/icons/category-UpArrow.svg";
import { useState } from "react";

interface FaqItemProps {
    question:string;
    answer:string[];
}

function FaqItem({question,answer}:FaqItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col space-y-[0.8rem] mb-[0.8rem]">
      <div className="flex justify-between" onClick={onClick}>
        <span className="font-AppleSDGothicNeoSB00 text-[1.5rem]">
          {question}
        </span>
        <img
          className="mr-[1rem]"
          src={isOpen ? UpArrow : DownArrow}
          alt="downArrow"
        />
      </div>

      <img className="w-full h-[0.5rem]" src={faqHorizon} alt="faqhorizon" />
      {isOpen && (
        <div className="flex flex-col font-AppleSDGothicNeoL00 text-[1.2rem] pb-[0.5rem]">
          {answer.map((ans,index) => <span key={index}>{ans}</span>)}
        </div>
      )}
    </div>
  );
}

export default FaqItem;
