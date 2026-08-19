import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#A77631] pt-12 sm:pt-16 pb-4 px-4 sm:px-10 overflow-hidden">
      {/* Brand Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-white font-bold text-xl sm:text-5xl tracking-wide leading-snug transition-transform duration-300 hover:scale-[1.02]">
          {footer.thankYou}
          <br />
          {footer.brand}
        </h2>
      </div>

      {/* Navigation Columns */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
        {footer.columns.map((col) => (
          <div key={col.heading} className="flex flex-col">
            <h3 className="font-mohave text-white font-semibold text-xs sm:text-3xl tracking-wide mb-3 uppercase drop-shadow-sm">
              {col.heading}
            </h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-block font-mohave text-white/90 text-[11px] sm:text-base tracking-wide transition-all duration-200 hover:text-white hover:translate-x-1 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-100 rounded-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Separator Line */}
      <div className="max-w-5xl mx-auto my-8 border-t border-white/20" />

      {/* Copyright Line */}
      <p className="text-center font-mohave text-white/80 text-xs sm:text-base tracking-wide transition-colors duration-300 hover:text-white">
        © {new Date().getFullYear()} Al-Afiyah Tours & Travels. All rights
        reserved.
      </p>
    </footer>
  );
}
