// Central place for all site copy + image references.
// Replace the `img` values with your own photos (e.g. import from "../assets/...")
// or keep the placeholder URLs while you're wiring up the layout.

export const nav = {
  brand: "AL-AFIYAH TRAVELS",
  links: ["Destination", "Tours", "About", "Testimonials", "Contact"],
  cta: "Book Now",
};

export const hero = {
  heading: "EVERY JOURNEY TELLS",
  headingAccent: "A STORY!",
  subtext:
    "Curated adventures to the world's<br/> most extraordinary places. Expert guides,<br/> handpicked stays, and memories that last a lifetime.",
};

// Each "tour" is one of the big promo blocks: banner image, title, blurb, CTA, gallery strip
export const tours = [
  {
    key: "umrah",
    banner: "images/umrah-tour.png",
    title: "UMRAH TOUR!",
    text: "FOR MORE QUERIES PRESS THE BUTTON BELOW.",
    button: "Know More",
  },
  {
    key: "dubai",
    banner: "images/dubai-tour.png",
    title: "DUBAI TOUR!",
    text: "FOR MORE QUERIES MESSAGE US ON WHATS APP.",
    button: "Message Now",
  },
];

export const premierBanner = {
  heading: "Premier Luxury Experiences",
  headingFont: "font-namdhinggo",
  text: "These exclusive luxury experiences can be added to your tour package upon special request and are available at an additional cost.",
};

export const luxuryTours = [
  {
    key: "yacht",
    banner: "images/yacht-tour.png",
    title: "Private Yacht Charter.",
    text: "FOR MORE QUERIES MESSAGE US ON WHATS APP.",
    button: "Message Now",
  },
  {
    key: "aviation",
    banner: "images/aviation-tour.png",
    title: "Private Aviation.",
    text: "FOR MORE QUERIES MESSAGE US ON WHATS APP.",
    button: "Message Now",
  },
  {
    key: "kashmir",
    banner: "images/kashmir-tour.png",
    title: "KASHMIR!",
    text: "FOR MORE QUERIES MESSAGE US ON WHATS APP.",
    button: "Message Now",
  },
];

export const servicesBanner = {
  heading: "OUR TRAVEL SERVICES!",
  headingFont: "font-namdhinggo",
  text: "From planning to destination, we've got you covered. Enjoy hassle-free travel with our complete range of tours, flights, hotels, visas, airport transfers, and car rental services.",
};

export const services = [
  {
    key: "hotel",
    title: "HOTEL RESERVATIONS.",
    img: "images/travel-1.png",
    imgFirst: true,
  },
  {
    key: "car",
    title: "Car Rental | Domestic & Intl. Airport Pick-up & Drop",
    img: "images/travel-2.png",
    imgFirst: false,
  },
  {
    key: "passport",
    title: "PASSPORT & VISA ASSISTANCE.",
    img: "images/travel-3.png",
    imgFirst: true,
  },
  {
    key: "flights",
    title: "Flight Tickets Domestic & International",
    img: "images/travel-4.png",
    imgFirst: false,
  },
  {
    key: "packages",
    title: "TOUR PACKAGES.",
    img: "images/travel-5.png",
    imgFirst: true,
  },
  {
    key: "docs",
    title: "ALL KIND OF DOCUMENTATION.",
    img: "images/travel-6.png",
    imgFirst: false,
  },
];

export const introduction = {
  heading: "INTRODUCTION!",
  subheading: "Travel the Way It Was Meant to Be",
  text: "At Al-Afiyah Travels, we believe every journey should be seamless, comfortable, and memorable. From travel planning and documentation to accommodation and transportation, our experienced team handles every detail with professionalism and care. We are committed to providing reliable services, competitive prices, and personalized support to ensure a stress-free travel experience for every customer.",
  destImg: "images/destination.png",
  destinations: [
    {
      name: "Taj Mahal",
      img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Kashmir",
      img: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Mumbai",
      img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Singapore",
      img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Kerala",
      img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Bali",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Jaipur",
      img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Switzerland",
      img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Goa",
      img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=300&auto=format&fit=crop",
    },
  ],
};

export const exploreMore = {
  heading: "EXPLORE MORE!",
  headingFont: "font-namdhinggo",
  cards: [
    {
      key: "domestic",
      title: "DOMESTIC TOURS",
      button: "Get Details Now",
      image: "images/domestic.png",
    },
    {
      key: "international",
      title: "INTERNATIONAL TOURS",
      button: "Get Details Now",
      image: "images/international.png",
    },
  ],
};

export const community = {
  heading: "JOIN OUR COMMUNITY!",
  headingFont: "font-namdhinggo",
  socials: [
    { key: "instagram", label: "Instagram", href: "#" },
    { key: "whatsapp", label: "WhatsApp", href: "#" },
    { key: "facebook", label: "Facebook", href: "#" },
  ],
};

export const contact = {
  heading: "CONTACT US!",
  headingFont: "font-namdhinggo",
  formHeading: "YOUR FEEDBACK MATTERS!",
  fields: ["Your Name", "Your Email", "Number", "Message"],
  submit: "Submit",
  phone: { label: "PHONE", value: "+91 *********" },
  mail: { label: "MAIL", value: "info@alafiyahtravels.com" },
};

export const footer = {
  thankYou: "THANK YOU FOR VISITING",
  brand: "AL-AFIYAH TOURS & TRAVELS!",
  columns: [
    {
      heading: "SERVICES",
      links: [
        "Hotel Reservations",
        "Car Rental Services",
        "Passport & Visa Assistance",
        "Flight Tickets",
        "Tour Packages",
        "All Kind of Documentation",
      ],
    },
    { heading: "DOMESTIC", links: ["Kashmir", "Kerala", "Goa", "Jaipur"] },
    {
      heading: "INTERNATIONAL",
      links: ["Dubai", "Umrah", "Paris", "Maldives"],
    },
    { heading: "POPULAR", links: ["Umrah Tour", "Dubai Tour", "Kashmir Tour"] },
  ],
};
