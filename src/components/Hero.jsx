import { hero } from "../data/content";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[60vh] sm:min-h-[70vh] flex items-center"
      style={{ backgroundImage: `url(${hero.img})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16 w-full">
        <div className="max-w-xl">
          <h1 className="font-heading text-cream-50 text-3xl sm:text-5xl leading-tight tracking-wide">
            {hero.heading}
            <br />
            <span className="text-green-400">{hero.headingAccent}</span>
          </h1>
          <p className="font-heading-alt text-cream-50/90 text-sm sm:text-base mt-4 leading-relaxed max-w-md">
            {hero.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
