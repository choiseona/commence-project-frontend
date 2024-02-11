interface Props {
  content: string;
}

function Title({ content }: Props) {
  return (
    <p className="font-AppleSDGothicNeoEB00 text-[2.5rem] leading-[100%] tracking-[-1%]">
      {content}
    </p>
  );
}

export default Title;
