interface Props {
  position: string;
  preparation: string;
}

function PositionExplaination({ position, preparation }: Props) {
  return (
    <div className="flex  gap-[1.614rem]">
      <p className="font-AppleSDGothicNeoB00 text-[1.2rem] leading-[2rem] w-[3.2rem]">
        {position}
      </p>
      <p className="font-AppleSDGothicNeoM00 text-[1.2rem] leading-[2rem] text-black opacity-70">
        {preparation}
      </p>
    </div>
  );
}

export default PositionExplaination;
