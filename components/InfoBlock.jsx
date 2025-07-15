import Image from "next/image";

export default function InfoBlock({
  imageSrc,
  imageAlt,
  title,
  children,
  className = "",
}) {
  return (
    <section className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${className}`}>
      {/* Image left */}
      <div className="relative w-full md:w-1/2 flex-shrink-0 min-h-[220px] md:min-h-[340px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-contain md:object-cover"
        />
      </div>
      {/* Text right */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2>{title}</h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
