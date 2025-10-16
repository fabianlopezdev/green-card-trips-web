interface Props {
  src: string;
  altText?: string;
}

function IphoneFrame({ src, altText = "App screenshot" }: Props) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute top-2 bottom-2 left-2.5">
        <img
          src={src}
          loading="lazy"
          alt={altText}
          className="rounded-2xl h-full"
        />
      </div>
      <img
        src="/misc/iphone-frame.webp"
        loading="lazy"
        alt="iphone-frame"
        className="relative z-10 h-full"
      />
    </div>
  );
}

export default IphoneFrame;
