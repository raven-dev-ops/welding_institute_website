// components/InfoBlock.jsx

import Image from 'next/image';

/**
 * InfoBlock Component
 * Props:
 * - imageSrc: string - image path (relative to public/images or public/)
 * - imageAlt: string - alt text for accessibility
 * - title: string - heading for the block
 * - children: ReactNode - description or inner content
 * - reverse: boolean - if true, image appears on the right on desktop
 */

export default function InfoBlock({
    imageSrc,
    imageAlt,
    title,
    children,
    reverse = false,
  }) {
    // Base classes for the section, including responsive flex layout and gap
    return (
      <section
        className={`
          flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* Image container with responsive width */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <Image
 src={imageSrc} // Consider converting imageSrc to a static import for better optimization with next/image
            alt={imageAlt}
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-white relative"
            loading="lazy"
            fill
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow">
            <span className="text-gray-900">{title}</span>
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-800">{children}</div>
        </div>
      </section>
    );
  }
  