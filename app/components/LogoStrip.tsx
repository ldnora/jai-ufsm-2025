import Image from "next/image";

export default function LogoStrip({
  logos,
}: {
  logos: { src: string; alt: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {logos.map((l) => (
        <div key={l.src} className="h-10 sm:h-12 flex items-center">
          <Image src={l.src} alt={l.alt} width={60} height={60} priority />
        </div>
      ))}
    </div>
  );
}
