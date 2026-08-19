import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionBanner from "./components/SectionBanner";
import SectionTitle from "./components/SectionTitle";
import TourPromo from "./components/TourPromo";
import ServicesSection from "./components/ServicesSection";
import Introduction from "./components/Introduction";
import ExploreMore from "./components/ExploreMore";
import Community from "./components/Community";
import Contact from "./components/Contact";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

import {
  tours,
  premierBanner,
  luxuryTours,
  servicesBanner,
  exploreMore,
} from "./data/content";

export default function App() {
  const [umrah, dubai] = tours;
  const [yacht, aviation, kashmir] = luxuryTours;

  return (
    <div className="font-heading-alt bg-cream-50 min-h-screen">
      <Navbar />
      <Hero />

      <SectionTitle heading="POPULAR TOURS" />
      <TourPromo {...umrah} />
      <TourPromo {...dubai} />

      <SectionBanner
        heading={premierBanner.heading}
        font={premierBanner.headingFont}
        text={premierBanner.text}
      />
      <TourPromo
        {...yacht}
        headerFont="font-mohave"
        titleSize="text-2xl sm:text-4xl md:text-6xl"
      />
      <TourPromo
        {...aviation}
        headerFont="font-mohave"
        titleSize="text-2xl sm:text-4xl md:text-6xl"
      />

      <TourPromo {...kashmir} />

      <SectionBanner
        heading={servicesBanner.heading}
        font={servicesBanner.headingFont}
        text={servicesBanner.text}
      />

      <ServicesSection />

      <Introduction />

      <SectionBanner
        heading={exploreMore.heading}
        font={exploreMore.headingFont}
      />

      <ExploreMore />

      <Community />

      <Contact />

      <CTABanner />

      <Footer />
    </div>
  );
}
