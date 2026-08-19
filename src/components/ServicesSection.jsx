import { useEffect, useState } from "react";
import { services } from "../data/content";

export default function ServicesSection() {
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;

            setVisibleItems((prev) => ({
              ...prev,
              [index]: true,
            }));

            // Animate only once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    const elements = document.querySelectorAll(".service-item");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tours" className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-16 flex flex-col gap-10 sm:gap-14">
        {services.map((s, index) => {
          const isVisible = visibleItems[index];

          return (
            <div
              key={s.key}
              data-index={index}
              className={`service-item flex items-center gap-6 sm:gap-10 ${
                s.imgFirst ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* IMAGE */}
              <div
                className={`
                  w-24 sm:w-56 md:w-72 lg:w-96
                  shrink-0
                  transition-all
                  duration-[1000ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100 scale-100 blur-0"
                      : s.imgFirst
                        ? "-translate-x-32 opacity-0 scale-90 blur-sm"
                        : "translate-x-32 opacity-0 scale-90 blur-sm"
                  }
                `}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="
                    w-full
                    object-contain
                    rounded
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-105
                  "
                />
              </div>

              {/* TEXT */}
              <div
                className={`
                  flex-1
                  min-w-0
                  transition-all
                  duration-[900ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : s.imgFirst
                        ? "translate-x-24 opacity-0"
                        : "-translate-x-24 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${index * 120 + 180}ms`,
                }}
              >
                <h3
                  className="
                    font-mohave
                    text-xl
                    sm:text-3xl
                    md:text-6xl
                    tracking-wide
                    text-center
                    uppercase
                  "
                >
                  {s.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
