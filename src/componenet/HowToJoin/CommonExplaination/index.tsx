interface Props {
  title: string;
  content: string;
  additionalContent?: string;
}

function CommonExplaination({ title, content, additionalContent }: Props) {
  return (
    <div className="flex gap-[3.328rem]">
      <p className="font-tvNEnjoystoriesM text-[2.5rem] leading-[2rem] w-[8rem] shrink-0">
        {title}
      </p>
      <p className="font-AppleSDGothicNeoM00 text-[1.2rem] leading-[2rem]">
        {content}
        <span className="font-AppleSDGothicNeoM00 text-[1.2rem] leading-[2rem] opacity-60">
          {additionalContent}
        </span>
      </p>
    </div>
  );
}

export default CommonExplaination;
