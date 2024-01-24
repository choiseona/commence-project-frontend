interface SubTitleProps {
  main: string;
  sub: string;
}

function AboutUsSubTitle({ main, sub }: SubTitleProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-tvNEnjoystoriesB text-[2.3rem]">
        {main}
      </span>
      <span className="font-tvNEnjoystoriesL text-[1.7rem] -mt-[0.9rem]">
        {sub}
      </span>
    </div>
  );
}

export default AboutUsSubTitle;
