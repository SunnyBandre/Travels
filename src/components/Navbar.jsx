import { useState } from "react";
import { nav } from "../data/content";
import logo from "/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#B68540] relative z-50 transition-colors duration-300">
      <div className="mx-auto flex text-[#261544] items-center justify-between px-8">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 shrink-0 group">
          <img
            src={logo}
            alt="Logo"
            className="w-24 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-cinzel font-bold text-sm sm:text-3xl tracking-wide whitespace-nowrap">
            {nav.brand}
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden xl:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-inter text-xl tracking-wide hover:text-cream-200 transition-colors duration-200 hover:-translate-y-0.5"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden xl:inline-block bg-[#F0EAE0] rounded-lg font-inter text-sm px-5 py-2 tracking-wide hover:bg-cream-100 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
        >
          {nav.cta}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="xl:hidden text-cream-50 p-2 transition-transform duration-200 active:scale-90"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-300"
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
        <nav className="xl:hidden bg-gold-700 px-4 pb-4 flex flex-col gap-3 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-top-2">
          {nav.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-heading-alt text-cream-50 text-sm tracking-wide py-1 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-cream-50 text-gold-700 font-heading-alt text-sm px-5 py-2 tracking-wide text-center mt-1 transition-transform active:scale-95"
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
