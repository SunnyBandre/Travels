import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#A77631] pt-12 sm:pt-16 pb-4 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-white font-bold text-xl sm:text-5xl tracking-wide leading-snug">
          {footer.thankYou}
          <br />
          {footer.brand}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
        {footer.columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-mohave text-white text-xs sm:text-3xl tracking-wide mb-3">
              {col.heading}
            </h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-mohave text-white text-[11px] sm:text-base tracking-wide hover:text-white/50 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center font-mohave text-white text-base mt-12">
        © {new Date().getFullYear()} Al-Afiyah Tours & Travels. All rights
        reserved.
      </p>
    </footer>
  );
}
