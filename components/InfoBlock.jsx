import Image from "next/image";

export default function InfoBlock({
  imageSrc,
  imageAlt,
  title,
  children,
  className = "",
  reverse = false,
}) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${reverse ? 'md:flex-row-reverse' : ''} ${className}`}
    >
      {/* Image */}
      <div className="relative md:w-1/2 w-full flex-shrink-0 min-h-[220px] md:min-h-[340px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-contain md:object-cover"
        />
      </div>
      {/* Text */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}
