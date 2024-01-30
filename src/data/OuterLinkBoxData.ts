import whiteYoutubeMark from "@/assets/icons/white-youtube-mark.svg";
import whiteInstagramMark from "@/assets/icons/white-instagram-mark.svg";
import whiteCommenceMark from "@/assets/icons/white-commence-mark.svg";

export const SvgName = {
    YOUTUBE:"youtube",
    INSTAGRAM: "instagram",
    COMMENCE: "commence"
}


export const OuterLinkBoxData = [
    {
        title:"꼬망스 유튜브",
        svg:SvgName.YOUTUBE,
        src:whiteYoutubeMark,
        alt:"whiteYoutubeMark",
        link: "https://www.youtube.com/@commence-sw6xo"
    },
    {
        title: "꼬망스 인스타",
        svg: SvgName.INSTAGRAM,
        src:whiteInstagramMark,
        alt:"whiteInstagramMark",
        link:"https://www.instagram.com/commence_official/"
    },
    {
        title: "꼬망스 홈페이지",
        svg: SvgName.COMMENCE,
        src:whiteCommenceMark,
        alt:"whiteCommenceMark",
        link:"https://commence.co.kr/"
    }
]