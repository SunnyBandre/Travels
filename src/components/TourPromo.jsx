import { useEffect, useRef, useState } from "react";
import GoldButton from "./GoldButton";

export default function TourPromo({
  banner,
  title,
  text,
  button,
  titleSize = "text-3xl sm:text-4xl md:text-9xl",
  headerFont = "font-namdhinggo",
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      {/* ================= IMAGE ================= */}
      <div className="relative overflow-hidden">
        <img
          src={banner}
          alt={title}
          className={`w-full h-[280px] sm:h-[70vh] lg:h-screen object-contain transition-all duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-[1.12] blur-md"
            }
          `}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="text-center py-10 sm:py-20 px-4">
        {/* TITLE */}
        <h2
          className={`${headerFont} text-[#A2722D] font-bold ${titleSize} tracking-wide transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-16 blur-md"
            }
          `}
          style={{
            transitionDelay: "350ms",
          }}
        >
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className={`font-mohave text-2xl sm:text-5xl mt-4 mx-auto leading-relaxed max-w-6xl transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-12 blur-sm"
            }
          `}
          style={{
            transitionDelay: "550ms",
          }}
        >
          {text}
        </p>

        {/* BUTTON */}
        <div
          className={`transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-90"
            }
          `}
          style={{
            transitionDelay: "750ms",
          }}
        >
          <GoldButton href="#contact" className="mt-6">
            {button}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
