import Awards from "@/componenet/AboutUs/Awards";
import HugeCommenceMark from "@/componenet/AboutUs/HugeCommenceMark";
import IntroduceText from "@/componenet/AboutUs/IntroduceText";
import MainPerformances from "@/componenet/AboutUs/MainPerformances";

function AboutUs() {
    return <div className="flex flex-col">
        <HugeCommenceMark/>
        <IntroduceText/>
        <MainPerformances/>
        <Awards/>
    </div>
}

export default AboutUs;