import { introduction } from "../data/content";

export default function Introduction() {
  return (
    <section id="about" className="bg-gold-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-12 sm:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Destination photo grid */}
        <div className="grid grid-cols-2 gap-1 rounded overflow-hidden">
          {introduction.destinations.map((d) => (
            <div key={d.name} className="relative h-24 sm:h-32">
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-black/30 flex items-center justify-center font-heading text-cream-50 text-sm sm:text-lg tracking-wide">
                {d.name}
              </span>
            </div>
          ))}
        </div>

        {/* Copy */}
        <div className="text-center md:text-left">
          <h2 className="font-heading text-cream-50 text-3xl sm:text-4xl tracking-wide">
            {introduction.heading}
          </h2>
          <p className="font-heading text-cream-100 text-lg sm:text-xl mt-3">
            {introduction.subheading}
          </p>
          <p className="font-heading-alt text-cream-100/90 text-sm sm:text-base mt-5 leading-relaxed">
            {introduction.text}
          </p>
        </div>
      </div>
    </section>
  );
}
