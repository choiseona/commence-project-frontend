interface ContentCommentProps {
  bottom: string;
  right: string;
  content: string;
}

interface ContentImageProps {
  rotate: string;
  src: string;
  alt: string;
}

interface ContentMainProps {
  children: React.ReactNode;
}

function ContentComment({ bottom, right, content }: ContentCommentProps) {
  return (
    <p className={`bottom-[${bottom}] right-[${right}] absolute`}>{content}</p>
  );
}

function ContentMain({ children }: ContentMainProps) {
  return <div className={`relative w-[238px] h-[169px]`}>{children}</div>;
}

function ContentImage({ rotate, src, alt }: ContentImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rotate-[${rotate}] w-full h-full bg-[#D9D9D9] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] `}
    />
  );
}

export const PhotoItem = Object.assign(ContentMain, {
  Image: ContentImage,
  Comment: ContentComment,
});
