import { ctaBanner } from "../data/content";
import GoldButton from "./GoldButton";

export default function CTABanner() {
  return (
    <section className="bg-gold-800 py-12 sm:py-16 px-4 text-center">
      <h2 className="font-heading text-cream-50 text-xl sm:text-2xl tracking-wide max-w-lg mx-auto leading-snug">
        {ctaBanner.text}
      </h2>
      <GoldButton href="#contact" variant="inverted" className="mt-6">
        {ctaBanner.button}
      </GoldButton>
    </section>
  );
}
