import { services } from "../data/content";

export default function ServicesSection() {
  return (
    <section id="tours">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-16 flex flex-col gap-10 sm:gap-14">
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
              className="w-96 object-contain rounded shrink-0"
            />
            <h3 className="font-mohave text-xl sm:text-3xl md:text-6xl tracking-wide text-center flex-1 uppercase">
              {s.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
