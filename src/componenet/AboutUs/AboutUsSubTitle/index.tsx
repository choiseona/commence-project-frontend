interface SubTitleProps {
  main: string;
  sub: string;
}

function AboutUsSubTitle({ main, sub }: SubTitleProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-AppleSDGothicNeoEB00 text-black text-[2.3rem]">
        {main}
      </span>
      <span className="font-AppleSDGothicNeoM00 text-black/70 text-[1.7rem] -mt-[0.9rem]">
        {sub}
      </span>
    </div>
  );
}

export default AboutUsSubTitle;
