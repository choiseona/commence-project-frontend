import { FaqData } from "@/data/FaqData";
import FaqItem from "../FaqItem";

function FaqContainer() {
    return <div className="mt-[2.6rem] mb-[5rem] mx-[3rem] text-black">
        {FaqData.map((data,index) => <FaqItem key={index} question={data.question} answer={data.answer}/>)}
    </div>
}

export default FaqContainer;