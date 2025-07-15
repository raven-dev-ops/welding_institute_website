// In InfoBlock.jsx

import Image from "next/image";

export default function InfoBlock({
  imageSrc,
  imageAlt,
  title,
  children,
}) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12`}
    >
      {/* Image always on the left */}
      <div className="relative w-full md:w-1/2 flex-shrink-0 min-h-[320px] md:min-h-[400px] rounded-2xl overflow-hidden bg-white">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-contain p-4"
        />
      </div>
      {/* Text always on right, aligned left */}
      <div className="w-full md:w-1/2 px-4 md:px-8 text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
        <div className="text-lg md:text-xl leading-relaxed text-gray-800">
          {children}
        </div>
      </div>
    </section>
  );
}
