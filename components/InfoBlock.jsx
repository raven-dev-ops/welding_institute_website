// components/InfoBlock.jsx

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
    return (
      <section
        className={`
          flex flex-col md:flex-row items-center gap-8 mb-12
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--ciwt-blue)] drop-shadow">
            {title}
          </h2>
          <div className="text-lg md:text-xl leading-relaxed">{children}</div>
        </div>
      </section>
    );
  }
  