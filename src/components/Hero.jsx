// Update these two paths to wherever your images actually live.
// I'm assuming: src/assets/images/hero.png and src/assets/images/aeroplane.png
import heroBg from "/images/hero.png";
import aeroplane from "/images/aeroplane.png";
import { hero } from "../data/content";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-bottom overflow-hidden flex filter-[drop-shadow(0px_0px_4px_#00000040)]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Darkens the left side so the heading stays readable over the sky */}
      <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/15 to-transparent" />

      {/* Plane — angled climbing up toward the right, anchored bottom-right.
          Tweak bottom / right / w- / rotate- below to match your exact crop. */}
      <img
        src={aeroplane}
        alt="Airplane climbing into a sunset sky"
        className="absolute -top-20 left-10 w-[85%] sm:w-[70%] md:w-full -rotate-7 select-none pointer-events-none filter-[drop-shadow(0px_0px_4px_#00000030)]"
      />

      <div className="relative z-10 mx-auto p-23 w-full">
        <div className="">
          <h1 className="font-julius text-white font-normal text-4xl sm:text-8xl leading-tight tracking-wide">
            {hero.heading}
            <br />
            <span className="text-[#37ff00]">{hero.headingAccent}</span>
          </h1>
          <p
            className="font-namdhinggo text-white font-bold text-base sm:text-3xl leading-tight"
            dangerouslySetInnerHTML={{ __html: hero.subtext }}
          />
        </div>
      </div>
    </section>
  );
}
