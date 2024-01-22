interface Props {
  content: string;
}

function Title({ content }: Props) {
  return (
    <p className="font-tvNEnjoystoriesB text-[4rem] leading-[100%] tracking-[-0.04rem]">
      {content}
    </p>
  );
}

export default Title;
