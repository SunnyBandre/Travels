import { exploreMore } from "../data/content";

export default function ExploreMore() {
  return (
    <section id="destination" className="bg-cream-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10 sm:py-14 flex flex-col sm:flex-row gap-10">
        {exploreMore.cards.map((card) => (
          <div
            key={card.key}
            className="flex-1 min-w-0 flex flex-col items-center text-center"
          >
            <div className="w-full rounded-4xl overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-mohave text-[#A2722D] text-lg sm:text-5xl max-w-min tracking-wide py-16">
              {card.title}
            </h3>
            <a
              href="#contact"
              className="inline-block font-inter tracking-wide text-sm sm:text-xl md:text-2xl px-6 py-3 transition-colors duration-200 rounded-lg bg-[#A77631] text-white hover:bg-gold-700"
            >
              {card.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
