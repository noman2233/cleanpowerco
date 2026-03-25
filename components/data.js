export const app_logo = "https://i.ibb.co/zTmNhX39/logo.png";
// export const app_logo="https://sowindwp.websitelayout.net/wp-content/uploads/2023/12/logo.png"
// "https://www.cleanpowerco.com.au/wp-content/uploads/2018/11/logo.png";
import { IoIosArrowForward } from "react-icons/io";

export const website_email = "admin@cleanpowerco.com.au";
export const website_phone = "1300976741";
export const contact_para = "1300976741";
export const contact_image =
  "https://img.freepik.com/premium-photo/female-worker-engineer-uniform-is-near-solar-panels_146671-144350.jpg?semt=ais_hybrid&w=740&q=80";

export const MENU_ITEMS = [
  { label: "Home", id: "home", path: "/", icon: IoIosArrowForward },
  {
    label: "Services",
    id: "Services",
    path: "/services",
    icon: IoIosArrowForward,
  }, // Path changed
  { label: "About", id: "about", path: "/about", icon: IoIosArrowForward }, // Path changed
  // {
  //   label: "Testimonials",
  //   id: "testimonials",
  //   path: "/",
  //   icon: IoIosArrowForward,
  // },
  { label: "FAQs", id: "faqs", path: "/", icon: IoIosArrowForward },
  {
    label: "Contact",
    id: "contact",
    path: "/contact",
    icon: IoIosArrowForward,
  },
];

export const about_text =
  "AWARD WINING SOLAR COMPANY IN VICTORIA, QLD & SOUTH AUSTRALIA. Clean Power Co prides itself on making solar power accessible to all Australians by making its inception to completion power solutions simple, affordable and dependable to all consumers. Clean Power Co installs an average of 3,000,000 watts of solar each year. Clean Power Co guarantees and backs every system installed with a commitment to its performance and durability. We are always on the look out for new innovative ideas within the industry.";

export const footer_text =
  "Clean Power Co is dedicated to democratizing renewable energy for all Australians. From initial design to final connection, we deliver seamless, cost-effective, and steadfast solar solutions tailored for every home.";

export const testimonialsData = [
  {
    name: "Callum Lissa",
    role: "Business Owner",
    text: "Just had my 6kW solar system installed. I’d like to thank Ange for the deal he put together for me on my system which was at least $1500 cheaper than anyone else I spoke to. I’d also like to thank Ross who did a great job",
    image:
      "https://sowindwp.websitelayout.net/wp-content/uploads/2024/01/avatar-06.jpg",
    highlighted: false,
  },
  {
    name: "Shane Nichols",
    role: "Accounts Manager",
    text: "I Bought a micro inverter system. The whole process was very easy start to finish, and I found Frank to be very helpful, brutally honest and not full of BS like the vast majority of solar installers who use cheap sales tactics",
    image:
      "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg",

    highlighted: true,
  },
  {
    name: "Lily Hogben",
    role: "IT Consultant",
    text: "I would like to commend clean power co on the recent solar installation at my home. Sam provided me with a prompt & clear documentation and a very fair price. The installation crew Cam and Elliot were a pleasure to deal with",
    image:
      "https://img.freepik.com/free-photo/confident-skilled-entrepreneur-seated-her-corporate-office-desk_482257-123681.jpg?semt=ais_hybrid&w=740&q=80",
    highlighted: false,
  },
];

// data/faqData.js
export const faqData = [
  {
    id: 1,
    question: "1. Why we are best company?",
    answer:
      "New limit across the sun powered worth chain become important to help the PV market's development. In any case, the capital needed to build up and increase wafer, sun powered cell and sun based module fabricating offices.",
  },
  {
    id: 2,
    question: "2. How you can solar energy systems?",
    answer:
      "Our expert team handles the entire installation process, from initial site assessment and design to final grid connection, ensuring maximum efficiency for your home or business.",
  },
  {
    id: 3,
    question: "3. Company mission & vision?",
    answer:
      "To accelerate the world's transition to sustainable energy by providing accessible, high-quality solar solutions while protecting our natural environment and resources.",
  },
];

export const services = [
  {
    id: 1,
    title: "Solar System Design",
    description:
      "Customized system design based on your energy needs and roof space. Optimized for maximum efficiency and return on investment.",
    image:
      "https://img.freepik.com/free-photo/foreman-businessman-solar-energy-station_1157-35687.jpg?semt=ais_hybrid&w=740&q=80",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      >
        <rect x="3" y="10" width="18" height="11" rx="1" />
        <path d="M7 10v11M12 10v11M17 10v11M3 15h18M3 10l9-7 9 7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Residential Solar Systems",
    description:
      "Tailored solar solutions built specifically for modern homes. Lower your energy costs while increasing property value.",
    image:
      "https://img.freepik.com/premium-photo/private-home-roof-covered-with-solar-photovoltaic-panels-generating-clean-ecological-electric-energy-suburban-rural-town-area-concept-autonomous-house_127089-20920.jpg",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      >
        <path d="M12 12L12 22M12 12L18 8M12 12L6 8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Commercial Solar Solutions",
    description:
      "Efficient solar systems designed for businesses of all sizes.Cut operational costs and move towards sustainable energy.",
    image:
      "https://i.ibb.co/qLTZF2jR/aerial-shot-industrial-buildings-bristol-england.jpg",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      >
        <path d="M9 18h6M10 22h4M12 2v3M5 8l2 2M19 8l-2 2" />
        <path d="M12 5a7 7 0 0 0-7 7c0 2.5 2 4.5 4 5h6c2-.5 4-2.5 4-5a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Solar Panel Installation",
    description:
      "Expert installation using premium solar panels for long-term performance. Designed to maximize energy output and reduce your electricity bills.",
    image:
      "https://img.freepik.com/premium-vector/two-men-working-roof-with-solar-panels_666353-3989.jpg?semt=ais_hybrid&w=740&q=80",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      >
        <path d="M9 18h6M10 22h4M12 2v3M5 8l2 2M19 8l-2 2" />
        <path d="M12 5a7 7 0 0 0-7 7c0 2.5 2 4.5 4 5h6c2-.5 4-2.5 4-5a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },

  {
    id: 5,
    title: "Energy Efficiency Consulting",
    description:
      "Expert guidance to optimize your energy consumption.Maximize savings with smarter energy usage strategies.",
    image:
      "https://img.freepik.com/premium-photo/engineer-with-solar-panel-explaining-colleague-tablet-office_1270664-3684.jpg?semt=ais_hybrid&w=740&q=80",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      >
        <path d="M9 18h6M10 22h4M12 2v3M5 8l2 2M19 8l-2 2" />
        <path d="M12 5a7 7 0 0 0-7 7c0 2.5 2 4.5 4 5h6c2-.5 4-2.5 4-5a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Solar Maintenance & Repairs",
    description:
      "Routine maintenance to keep your system running smoothly.Fast and reliable repairs to ensure consistent performance.",
    image:
      "https://img.freepik.com/premium-photo/african-american-worker-cleaning-solar-panel-solar-power-plant_255667-58646.jpg",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      >
        <path d="M9 18h6M10 22h4M12 2v3M5 8l2 2M19 8l-2 2" />
        <path d="M12 5a7 7 0 0 0-7 7c0 2.5 2 4.5 4 5h6c2-.5 4-2.5 4-5a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
];

// constants/data.js
export const officeData = [
  {
    id: 1,
    state: "SA",
    address: "Level 11 147 Pirie St, Adelaide, SA 5000, Australia",
    status: "OPEN NOW",
  },
  {
    id: 2,
    state: "VIC",
    address: "Level. 1/225 Chapel St, Prahan, Victoria 3181, Australia",
    status: "OPEN NOW",
  },
  {
    id: 3,
    state: "QLD",
    address:
      "Unit 18, 3 Alison st, Surfers Paradise, Gold Coast 4217, Australia",
    status: "OPEN NOW",
  },
  {
    id: 4,
    state: "NSW",
    address: "Regus, 680 George Street, Sydney, NSW, Australia",
    status: "OPEN NOW",
  },
];

export const aboutTabs = [
  {
    id: "choose",
    label: "Why Choose Us",
    content:
      "Ontes mauris eget aliquet fermentum venenatis taciti tempus dignssim mollis pharetra class habitant congue pulvinar rhoncus proin bibendum torquent life ultrices penatibus feugiat phasellus.",
    features: [
      "Experienced Team of Experts",
      "Very first Customers Service",
      "Flexiblity Work Environment",
      "Provide Quality Service",
    ],
  },
  {
    id: "mission",
    label: "Our Mission",
    content:
      "Our mission is to lead the world's transition to sustainable energy by providing highly efficient solar and wind solutions tailored for every community.",
    features: [
      "Sustainable Energy Focus",
      "Innovative Tech Solutions",
      "Global Reach & Impact",
      "24/7 Support Systems",
    ],
  },
  {
    id: "goal",
    label: "Our Goal",
    content:
      "We aim to reduce global carbon emissions by 40% over the next decade through accessible and affordable renewable energy installations.",
    features: [
      "Zero Carbon Footprint",
      "Affordable Clean Energy",
      "Community Empowerment",
      "Nature Preservation",
    ],
  },
];


// constants/data.js
export const workProcessData = [
  {
    id: "01",
    title: "Project Planning",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800", // Engineer with turbines
  },
  {
    id: "02",
    title: "Research & Analysis",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800", // Team meeting
  },
  {
    id: "03",
    title: "Installation & Maintenance",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800", // Solar/Tech maintenance
  },
];