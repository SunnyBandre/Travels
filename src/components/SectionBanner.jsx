export default function SectionBanner({ heading, text, tone = "dark", font="font-montserrat-alt" }) {
  const bg = tone === "dark" ? "bg-[#B68540]" : "bg-gold-600";

  return (
    <div className={`${bg} py-6 sm:py-10 px-4 text-center my-10`}>
      <h2 className={`${font} text-white font-bold text-2xl sm:text-4xl md:text-8xl tracking-wide`}>
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
