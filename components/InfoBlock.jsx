import Image from 'next/image';

/**
 * InfoBlock Component
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
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* ✅ Wrap the Image in a relative container */}
      <div className="w-full md:w-1/2 flex-shrink-0 relative h-64 md:h-80">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover rounded-2xl shadow-xl border-4 border-white"
          loading="lazy"
          fill
        />
      </div>

      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow">
          <span className="text-gray-900">{title}</span>
        </h2>
        <div className="text-lg md:text-xl leading-relaxed text-gray-800">
          {children}
        </div>
      </div>
    </section>
  );
}
