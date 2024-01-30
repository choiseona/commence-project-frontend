import { cls } from "@/libs/util";

interface TextProps {
  bold: boolean;
  contents: string[];
}

function TextItem({ bold, contents }: TextProps) {
  return (
    <div className="mb-[1.5rem] flex flex-col items-center">
      {contents.map((content) => (
        <span
          className={cls(
            bold ? "font-AppleSDGothicNeoH00" : "font-AppleSDGothicNeoM00",
            "text-[1.1rem]"
          )}
        >
          {content}
        </span>
      ))}
    </div>
  );
}

export default TextItem
