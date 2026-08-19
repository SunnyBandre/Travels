import { community } from "../data/content";
import SectionBanner from "./SectionTitle";

const icons = {
  instagram: "/images/instagram.png",
  whatsapp: "/images/whatsapp.png",
  facebook: "/images/facebook.png",
};

export default function Community() {
  return (
    <section id="testimonials" className="bg-cream-50 overflow-hidden">
      <SectionBanner heading={community.heading} font={community.headingFont} />
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-10 sm:py-14">
        {community.socials.map((s) => (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="group flex justify-center flex-1 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
          >
            <img
              src={icons[s.key]}
              alt={s.label}
              className="sm:w-1/2 object-contain transition-transform duration-300 group-hover:rotate-3"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
