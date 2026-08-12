import { exploreMore } from "../data/content";
import SectionBanner from "./SectionBanner";
import GoldButton from "./GoldButton";

export default function ExploreMore() {
  return (
    <section id="destination" className="bg-cream-50">
      <SectionBanner heading={exploreMore.heading} />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-14 grid sm:grid-cols-2 gap-10">
        {exploreMore.cards.map((card) => (
          <div key={card.key} className="text-center">
            <div className="grid grid-cols-4 gap-1 rounded-2xl overflow-hidden">
              {card.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-full h-20 sm:h-28 object-cover"
                />
              ))}
            </div>
            <h3 className="font-heading text-gold-700 text-lg sm:text-xl tracking-wide mt-4">
              {card.title}
            </h3>
            <GoldButton href="#contact" className="mt-4 !px-5 !py-2 !text-xs">
              {card.button}
            </GoldButton>
          </div>
        ))}
      </div>
    </section>
  );
}
