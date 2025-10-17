interface Props {
  src: string;
  altText?: string;
}

function IphoneFrame({ src, altText = "App screenshot" }: Props) {
  // Generate responsive image paths
  const basePath = src.replace('.webp', '');

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute top-2 bottom-2 left-2.5 right-2.5">
        <img
          srcSet={`${basePath}-250.webp 250w, ${basePath}-298.webp 298w, ${basePath}-311.webp 311w, ${basePath}-327.webp 327w`}
          sizes="(max-width: 768px) 311px, 298px"
          src={`${basePath}-311.webp`}
          loading="lazy"
          alt={altText}
          className="rounded-2xl h-full w-full object-cover"
        />
      </div>
      <img
        srcSet="/misc/iphone-frame-sm.webp 252w, /misc/iphone-frame-md.webp 331w, /misc/iphone-frame-lg.webp 298w, /misc/iphone-frame-xl.webp 331w"
        sizes="(max-width: 768px) 331px, 298px"
        src="/misc/iphone-frame-md.webp"
        loading="lazy"
        alt="iphone-frame"
        className="relative z-10 h-full"
      />
    </div>
  );
}

export default IphoneFrame;
