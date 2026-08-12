import { kashmir } from "../data/content";
import GoldButton from "./GoldButton";

export default function KashmirSection() {
  return (
    <section className="bg-cream-50">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        {kashmir.gallery.map((item) => (
          <div key={item.label} className="relative group overflow-hidden">
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-28 sm:h-32 md:h-36 object-cover"
            />
            <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-cream-50 text-[9px] sm:text-[10px] uppercase tracking-wide text-center py-1 px-1 leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center py-10 sm:py-14 px-4">
        <h2 className="font-heading text-gold-700 text-4xl sm:text-5xl tracking-wide">
          {kashmir.title}
        </h2>
        <p className="font-heading-alt text-neutral-800 text-sm sm:text-base mt-4 max-w-md mx-auto leading-relaxed">
          {kashmir.text}
        </p>
        <GoldButton href="#contact" className="mt-6">
          {kashmir.button}
        </GoldButton>
      </div>
    </section>
  );
}
