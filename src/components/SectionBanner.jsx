export default function SectionBanner({ heading, text, tone = "dark" }) {
  const bg = tone === "dark" ? "bg-gold-800" : "bg-gold-600";

  return (
    <div className={`${bg} py-6 sm:py-8 px-4 text-center`}>
      <h2 className="font-heading text-cream-50 text-2xl sm:text-3xl md:text-4xl tracking-wide">
        {heading}
      </h2>
      {text && (
        <p className="font-heading-alt text-cream-100/90 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
          {text}
        </p>
      )}
    </div>
  );
}
