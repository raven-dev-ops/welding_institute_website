import Image from "next/image";

export default function InfoBlock({
  imageSrc,
  imageAlt,
  title,
 children,
  whiteText = false, // new prop
}) {
  const headingClass = whiteText
 ? "text-3xl md:text-4xl font-bold mb-4 text-white"
 : "text-3xl md:text-4xl font-bold mb-4 text-gray-900";
  const textClass = whiteText
 ? "text-lg md:text-xl leading-relaxed text-white"
 : "text-lg md:text-xl leading-relaxed text-gray-800";

  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-12 px-4 md:px-12">
      {/* Image left */}
      <div className="relative w-full md:w-1/2 flex-shrink-0 min-h-[220px] md:min-h-[340px] rounded-2xl overflow-hidden bg-white shadow">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-contain md:object-cover p-2 md:p-4"
        />
      </div>
      {/* Text right, limited width, left-aligned */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="max-w-2xl text-left mx-auto px-1 md:px-0">
          <h2 className={headingClass}>{title}</h2>
          <div className={textClass}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
