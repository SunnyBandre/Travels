import { introduction } from "../data/content";

export default function Introduction() {
  return (
    <section id="about" className="bg-[#8C560A] overflow-hidden">
      <div className="mx-auto px-4 sm:px-10 py-12 sm:py-16 flex flex-col xl:flex-row items-center gap-8 md:gap-16">
        {/* Image */}
        <div className="w-full md:flex-1 min-w-0 shrink-0">
          <img
            src={introduction.destImg}
            alt="Destination"
            className="w-full md:h-full object-cover rounded-md"
          />
        </div>

        {/* Copy */}
        <div className="w-full md:flex-1 min-w-0 text-center">
          <h2 className="font-marcellus text-white text-xl sm:text-3xl md:text-7xl tracking-wide leading-tight wrap-break-words">
            {introduction.heading}
          </h2>
          <p className="font-marcellus-sc text-white text-xl sm:text-3xl md:text-6xl py-20 leading-tight wrap-break-words">
            {introduction.subheading}
          </p>
          <p className="font-marcellus text-white text-lg sm:text-2xl md:text-4xl leading-relaxed">
            {introduction.text}
          </p>
        </div>
      </div>
    </section>
  );
}
