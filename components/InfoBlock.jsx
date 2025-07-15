import Image from "next/image";

/**
 * InfoBlock Component
 * Props:
 * - imageSrc: string - relative path to image
 * - imageAlt: string - alt text
 * - title: string - heading
 * - children: ReactNode - description content
 * - reverse: boolean - if true, image appears on the right on desktop
 */
export default function InfoBlock({
  imageSrc,
  imageAlt,
  title,
  children,
  reverse = false,
}) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* ✅ Make sure parent has relative + height for fill */}
      <div className="relative w-full md:w-1/2 flex-shrink-0 min-h-[320px] md:min-h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority // ✅ Preload if this block is above the fold
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 px-4">
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
