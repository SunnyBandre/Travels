export default function SectionBanner({
  heading,
  text,
  tone = "dark",
  font = "font-montserrat-alt",
}) {
  const bg = tone === "dark" ? "bg-[#B68540]" : "bg-gold-600";

  return (
    <div className={`${bg} py-6 sm:py-10 px-4 text-center my-10`}>
      <h2
        className={`${font} text-white font-bold text-xl sm:text-2xl md:text-4xl xl:text-6xl tracking-wide`}
      >
        {heading}
      </h2>
      {text && (
        <p className="font-montserrat-alt font-semibold text-white text-xs sm:text-base md:text-xl xl:text-2xl mt-2 max-w-6xl mx-auto leading-relaxed">
          {text}
        </p>
      )}
    </div>
  );
}
