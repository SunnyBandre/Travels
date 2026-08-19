import { exploreMore } from "../data/content";

export default function ExploreMore() {
  return (
    <section id="destination">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10 sm:py-14 flex flex-col sm:flex-row gap-10">
        {exploreMore.cards.map((card) => (
          <div
            key={card.key}
            className="group flex-1 min-w-0 flex flex-col items-center text-center"
          >
            <div className="w-full rounded-4xl overflow-hidden shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <h3 className="font-mohave text-[#A2722D] text-lg sm:text-5xl max-w-min tracking-wide py-16 transition-colors duration-300 group-hover:text-gold-600">
              {card.title}
            </h3>
            <a
              href="#contact"
              className="inline-block font-inter tracking-wide text-sm sm:text-xl md:text-2xl px-6 py-3 transition-all duration-300 rounded-lg bg-[#A77631] text-white hover:bg-gold-700 hover:scale-105 active:scale-95 shadow-md"
            >
              {card.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
