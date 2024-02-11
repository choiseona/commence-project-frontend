interface Props {
  title: string;
  content: string;
  additionalContent?: string;
}

function CommonExplaination({ title, content, additionalContent }: Props) {
  return (
    <div className="flex gap-[3.328rem]">
      <p className="font-AppleSDGothicNeoEB00 text-[1.4rem] leading-[2rem] w-[6.5rem] shrink-0">
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
