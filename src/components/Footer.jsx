import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-gold-600 pt-12 sm:pt-16 pb-10 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-cream-50 text-xl sm:text-2xl tracking-wide leading-snug">
          {footer.thankYou}
          <br />
          {footer.brand}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
        {footer.columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-heading-alt text-cream-50 text-xs sm:text-sm tracking-wide mb-3">
              {col.heading}
            </h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-heading-alt text-cream-100/80 text-[11px] sm:text-xs tracking-wide hover:text-cream-50 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center font-heading-alt text-cream-100/70 text-[11px] mt-12">
        © {new Date().getFullYear()} Al-Afiyah Tours & Travels. All rights
        reserved.
      </p>
    </footer>
  );
}
