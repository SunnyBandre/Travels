import { useState } from "react";
import { nav } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gold-600 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="w-7 h-7 rounded-full bg-cream-50 grid place-items-center text-gold-700 text-xs">
            ✦
          </span>
          <span className="font-heading text-cream-50 text-sm sm:text-lg tracking-wide whitespace-nowrap">
            {nav.brand}
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-heading-alt text-cream-50 text-sm tracking-wide hover:text-cream-200 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-block bg-cream-50 text-gold-700 font-heading-alt text-sm px-5 py-2 tracking-wide hover:bg-cream-100 transition-colors"
        >
          {nav.cta}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden text-cream-50 p-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-gold-700 px-4 pb-4 flex flex-col gap-3">
          {nav.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-heading-alt text-cream-50 text-sm tracking-wide py-1"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-cream-50 text-gold-700 font-heading-alt text-sm px-5 py-2 tracking-wide text-center mt-1"
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
