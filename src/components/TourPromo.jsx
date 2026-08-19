import GoldButton from "./GoldButton";

function ImageGrid({ images }) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 ${
        images.length > 4 ? "md:grid-cols-5" : ""
      }`}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-full h-32 sm:h-40 md:h-48 object-cover"
        />
      ))}
    </div>
  );
}

/**
 * Reusable "banner (image or image grid) + heading + blurb + CTA
 * (+ optional bottom gallery grid)" block.
 * Covers Umrah / Dubai / Yacht / Aviation / Kashmir style sections.
 *
 * `banner` accepts either:
 *   - a single image URL string  -> renders as one large banner image
 *   - an array of image URLs     -> renders as a grid (like Dubai's top 4)
 */
export default function TourPromo({
  banner,
  title,
  text,
  button,
  gallery,
  titleSize = "text-3xl sm:text-4xl md:text-9xl",
  headerFont = "font-namdhinggo",
}) {
  const isBannerGrid = Array.isArray(banner);

  return (
    <section className="bg-cream-50">
      {isBannerGrid ? (
        <ImageGrid images={banner} />
      ) : (
        <img
          src={banner}
          alt={title}
          className="w-full h-56 sm:h-screen object-contain"
        />
      )}

      <div className="text-center py-10 sm:py-20 px-4">
        <h2
          className={`${headerFont} text-[#A2722D] font-bold ${titleSize} tracking-wide`}
        >
          {title}
        </h2>
        <p className="font-mohave text-2xl sm:text-5xl mt-4 mx-auto leading-relaxed">
          {text}
        </p>
        <GoldButton href="#contact" className="mt-6">
          {button}
        </GoldButton>
      </div>

      {gallery && gallery.length > 0 && <ImageGrid images={gallery} />}
    </section>
  );
}
