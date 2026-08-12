import GoldButton from "./GoldButton";

/**
 * Reusable "big banner image + heading + blurb + CTA (+ optional gallery strip)"
 * block. Covers Umrah / Dubai / Yacht / Aviation / Kashmir style sections.
 */
export default function TourPromo({
  banner,
  title,
  text,
  button,
  gallery,
  titleSize = "text-3xl sm:text-4xl md:text-[150px]",
}) {
  return (
    <section className="bg-cream-50">
      <img
        src={banner}
        alt={title}
        className="w-full h-56 sm:h-80 md:h-full object-contain"
      />

      <div className="text-center py-10 sm:py-20 px-4">
        <h2 className={`font-namdhinggo text-[#A2722D] font-bold ${titleSize} tracking-wide`}>
          {title}
        </h2>
        <p className="font-mohave text-sm sm:text-5xl mt-4 mx-auto leading-relaxed">
          FOR MORE QUERIES PRESS THE<br/> BUTTON BELOW.
        </p>
        <GoldButton href="#contact" className="mt-6">
          {button}
        </GoldButton>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
          ))}
        </div>
      )}
    </section>
  );
}
