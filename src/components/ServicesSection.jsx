import { servicesBanner, services } from "../data/content";
import SectionBanner from "./SectionBanner";

export default function ServicesSection() {
  return (
    <section id="tours" className="bg-cream-50">
      <SectionBanner
        heading={servicesBanner.heading}
        text={servicesBanner.text}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-16 flex flex-col gap-10 sm:gap-14">
        {services.map((s) => (
          <div
            key={s.key}
            className={`flex items-center gap-6 sm:gap-10 ${
              s.imgFirst ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded shrink-0"
            />
            <h3 className="font-heading-alt text-neutral-800 text-lg sm:text-2xl tracking-wide text-center flex-1 uppercase">
              {s.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
