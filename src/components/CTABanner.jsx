import GoldButton from "./GoldButton";

export default function CTABanner() {
  return (
    <section className="bg-gold-800 py-12 sm:py-16 px-4 text-center overflow-hidden">
      <h2 className="font-cinzel font-bold text-white text-2xl sm:text-5xl tracking-wide mx-auto leading-snug transition-transform duration-300 hover:scale-105">
        MESSAGE US ON WHAT'S APP
        <br /> TO KNOW MORE!
      </h2>
      <GoldButton href="#contact" variant="inverted" className="mt-6">
        Get Details Now
      </GoldButton>
    </section>
  );
}
