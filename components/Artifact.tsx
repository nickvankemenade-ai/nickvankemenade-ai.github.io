export default function Artifact({
  type,
  src,
}: {
  type: "image" | "video" | "svg";
  src: string;
}) {
  if (type === "video") {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full rounded-lg border border-neutral-800"
      />
    );
  }

  return (
    <img
      src={src}
      className="w-full rounded-lg border border-neutral-800"
      alt=""
    />
  );
}