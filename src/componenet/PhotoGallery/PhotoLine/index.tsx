import line from "@/assets/icons/photo-line.svg";

interface Props {
  children: React.ReactNode;
}
function PhotoLine({ children }: Props) {
  return (
    <div className="w-[188px] h-[3922.5px] mx-auto relative">
      <img className="w-full h-full" src={line} alt="photo-line" />
      {children}
    </div>
  );
}

export default PhotoLine;
