import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionBanner from "./components/SectionBanner";
import TourPromo from "./components/TourPromo";
import KashmirSection from "./components/KashmirSection";
import ServicesSection from "./components/ServicesSection";
import Introduction from "./components/Introduction";
import ExploreMore from "./components/ExploreMore";
import Community from "./components/Community";
import Contact from "./components/Contact";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

import { tours, premierBanner, luxuryTours } from "./data/content";

export default function App() {
  const [umrah, dubai] = tours;
  const [yacht, aviation] = luxuryTours;

  return (
    <div className="font-heading-alt bg-cream-50 min-h-screen">
      <Navbar />
      <Hero />

      <SectionBanner heading="POPULAR TOURS" />
      <TourPromo {...umrah} />
      <TourPromo {...dubai} />

      <SectionBanner
        heading={premierBanner.heading}
        text={premierBanner.text}
      />
      <TourPromo {...yacht} titleSize="text-2xl sm:text-3xl" />
      <TourPromo {...aviation} titleSize="text-2xl sm:text-3xl" />

      <KashmirSection />

      <ServicesSection />

      <Introduction />

      <ExploreMore />

      <Community />

      <Contact />

      <CTABanner />

      <Footer />
    </div>
  );
}
