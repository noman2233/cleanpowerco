export const app_logo = "https://i.ibb.co/zTmNhX39/logo.png";
// export const app_logo="https://sowindwp.websitelayout.net/wp-content/uploads/2023/12/logo.png"
// "https://www.cleanpowerco.com.au/wp-content/uploads/2018/11/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineShieldCheck, HiOutlineLightningBolt } from "react-icons/hi";
import { BiLeaf } from "react-icons/bi";
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

export const featureCards = [
  {
    icon: <HiOutlineShieldCheck size={40} color="#27a770" />,
    title: "Trust & Warranty",
text: "Securing full legal compliance, land rights, and state permits for your peace of mind.",  },
  {
    icon: <HiOutlineLightningBolt size={40} color="#27a770" />,
    title: "Efficiency & Power",
text: "Optimizing infrastructure for peak energy output and long-term technical performance.",  },
  {
    icon: <BiLeaf size={40} color="#27a770" />,
    title: "Simple & Easy",
text: "Streamlining complex logistics and site management into one seamless, turnkey solution.",  },
];

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
    slug: "solar-system-design",
    
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
    slug: "residential-solar-systems",
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
    slug: "commercial-solar-solutions",
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main Building Structure */}
        <path d="M3 21h18" />
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />

        {/* Windows */}
        <path d="M9 7h1" />
        <path d="M14 7h1" />
        <path d="M9 11h1" />
        <path d="M14 11h1" />
        <path d="M9 15h1" />
        <path d="M14 15h1" />

        {/* Entrance Door */}
        <path d="M11 21v-3h2v3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Solar Panel Installation",
    slug: "solar-panel-installation",

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
    slug: "energy-efficiency-consulting",
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* The Handshake / Partnership */}
        <path d="M11 20H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v8" />
        <path d="M16 20v2" />
        <path d="M20 20v2" />
        <path d="M13 15l3 3 5-5" />
        <path d="M8 8h1M8 12h1M16 8h1M16 12h1M8 16h1" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Solar Maintenance & Repairs",
    slug: "solar-maintenance-repairs",
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* The Gear (System/Machine) */}
        <path d="M12.22 2a9 9 0 0 1 8.7 8.7" />
        <path d="M19 12a7 7 0 1 1-7-7" />
        <path d="M12 9v3l2 2" />

        {/* The Wrench (The Tool) */}
        <path d="M21 2l-2 2" />
        <path d="M19 4L11 12" />
        <path d="M16 4h4v4" />

        {/* Bottom Plate/Nut */}
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export const detailedServices = [
  {
    id: "solar-system-design",
    title: "Solar System Design",
    slug: "solar-system-design",
    bannerTitle: "Precision Engineering for Solar Efficiency",
    metaDescription: "Professional custom solar system design services. We optimize panel layout and energy storage for maximum ROI and long-term reliability.",
    heroImage: "https://img.freepik.com/free-photo/foreman-businessman-solar-energy-station_1157-35687.jpg?w=1200",
    description: "Our engineering team specializes in creating bespoke solar blueprints. We don't believe in one-size-fits-all; we analyze your specific roof orientation, shading factors, and local climate data to design a system that generates the highest possible kilowatt-hours per year.",
    subDescription: "Using advanced 3D modeling and irradiance analysis, we ensure your solar investment is future-proofed against rising energy costs and grid instability.",
    benefits: [
      "Custom 3D Site Irradiance Analysis",
      "Optimized Panel Placement for Peak Sun",
      "Structural Engineering Approval",
      "Battery Storage Compatibility Design",
      "Maximum Government Rebate Eligibility",
      "Grid Connection Pre-Approval Support",
      "Scalable System Architecture",
      "Comprehensive Performance Projection"
    ]
  },
  {
    id: "residential-solar-systems",
    title: "Residential Solar Systems",
    slug: "residential-solar-systems",
    bannerTitle: "Empower Your Home with Clean Energy",
    metaDescription: "High-performance residential solar systems for modern homes. Reduce electricity bills and increase property value with Clean Power Co.",
    heroImage: "https://img.freepik.com/premium-photo/private-home-roof-covered-with-solar-photovoltaic-panels_127089-20920.jpg",
    description: "Transform your home into a self-sustaining power plant. Our residential solutions focus on high-efficiency aesthetics—panels that look as good as they perform. We manage everything from the initial solar audit to the final local council approvals.",
    subDescription: "Join thousands of Australian homeowners who have eliminated their daytime energy costs and protected their families from future energy price hikes.",
    benefits: [
      "Significant Reductions in Power Bills",
      "Increased Real Estate Valuation",
      "Premium 'All-Black' Aesthetic Options",
      "Real-Time Mobile App Monitoring",
      "Tier-1 Quality Panel Selection",
      "Zero-Deposit Financing Options",
      "25-Year Performance Warranties",
      "Rapid Installation Turnaround"
    ]
  },
  {
    id: "commercial-solar-solutions",
    title: "Commercial Solar Solutions",
    slug: "commercial-solar-solutions",
    bannerTitle: "Scalable Energy for Modern Business",
    metaDescription: "Slash operational costs with industrial-grade commercial solar. Expert installation and energy management for Australian businesses.",
    heroImage: "https://i.ibb.co/qLTZF2jR/aerial-shot-industrial-buildings-bristol-england.jpg",
    description: "For businesses, solar isn't just an environmental choice—it's a critical financial strategy. We help companies turn idle roof space into an income-generating asset. Our commercial systems are engineered for heavy-duty load demands and high-uptime reliability.",
    subDescription: "We provide detailed financial modeling including IRR (Internal Rate of Return) and payback period analysis to help your board make an informed investment decision.",
    benefits: [
      "Substantial Operational Cost Savings",
      "Enhanced ESG and Sustainability Profile",
      "Tax Incentives and Asset Write-offs",
      "Peak-Shaving Load Management",
      "Industrial Grade Mounting Systems",
      "Minimal Business Disruption Installation",
      "Remote Fleet Monitoring & Alerts",
      "Dedicated Commercial Project Manager"
    ]
  },
  {
    id: "solar-panel-installation",
    title: "Solar Panel Installation",
    slug: "solar-panel-installation",
    bannerTitle: "Certified Technical Solar Installation",
    metaDescription: "CEC-accredited solar panel installation services. Safety-first approach with premium workmanship for long-term system performance.",
    heroImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200",
    description: "Workmanship is the difference between a system that lasts 5 years and one that lasts 25. Our installers are fully licensed and CEC-accredited. We use high-grade conduit, marine-grade stainless steel fasteners, and premium flashing to ensure your roof remains watertight.",
    subDescription: "Safety is our priority. Every installation undergoes a multi-point quality check and is commissioned with professional testing equipment before we hand over the keys.",
    benefits: [
      "CEC Accredited Master Installers",
      "Compliant with AU/NZ Standards",
      "Weather-Proof Sealing Technology",
      "Safety-First High-Voltage Wiring",
      "Clean & Professional Site Management",
      "System Commissioning & Testing",
      "Post-Installation Safety Induction",
      "Full Public Liability Insurance"
    ]
  },
  {
    id: "energy-consulting",
    title: "Energy Efficiency Consulting",
    slug: "energy-efficiency-consulting",
    bannerTitle: "Data-Driven Energy Management",
    metaDescription: "Expert energy efficiency consulting to optimize consumption and lower costs. Maximize your savings with smarter energy strategies.",
    heroImage: "https://img.freepik.com/premium-photo/engineer-with-solar-panel-explaining-colleague-tablet-office_1270664-3684.jpg?w=1200",
    description: "The cheapest kilowatt-hour is the one you never use. Our consulting service audits your current consumption patterns to identify 'energy leaks' in your business or home. We provide a roadmap for lighting upgrades, HVAC optimization, and behavioral changes.",
    subDescription: "By combining energy reduction with solar generation, we help clients achieve the elusive 'Net Zero' status faster and more affordably.",
    benefits: [
      "Comprehensive Energy Usage Audits",
      "ROI Focused Efficiency Roadmaps",
      "Tariff and Bill Analysis",
      "Power Factor Correction Advice",
      "Smart Home/Building Integration",
      "Carbon Footprint Measurement",
      "Compliance with Industry Standards",
      "Long-Term Energy Savings Coaching"
    ]
  },
  {
    id: "maintenance-repairs",
    title: "Solar Maintenance & Repairs",
    slug: "solar-maintenance-repairs",
    bannerTitle: "Protect Your Solar Investment",
    metaDescription: "Professional solar maintenance, panel cleaning, and repair services. Keep your system running at 100% efficiency year-round.",
    heroImage: "https://img.freepik.com/premium-photo/african-american-worker-cleaning-solar-panel-solar-power-plant_255667-58646.jpg",
    description: "Dust, bird droppings, and salt air can reduce your solar output by up to 30%. Our maintenance packages include professional cleaning, thermal imaging to detect hot spots, and DC isolator safety checks to prevent fire risks and ensure peak output.",
    subDescription: "Don't wait for a high power bill to realize your system is down. We provide rapid diagnostic services and inverter repairs for all major brands including Fronius, SMA, and Sungrow.",
    benefits: [
      "Professional Chemical-Free Cleaning",
      "Inverter Error Diagnostic & Repair",
      "Thermal Imaging of Panel Cells",
      "DC/AC Isolator Safety Inspections",
      "System Performance Benchmarking",
      "Wiring Integrity & Pest Checks",
      "Warranty Claim Management",
      "Fast Response Emergency Repairs"
    ]
  }
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
      "Our team uses smart tools and careful planning to help you succeed. We listen to what you need and build things that are strong, safe for the planet, and made to last for many years.",
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
    image:
      "https://img.freepik.com/free-photo/side-view-engineer-drawing-plan-outdoors_23-2149352262.jpg?semt=ais_hybrid&w=740&q=80", // Engineer with turbines
  },
  {
    id: "02",
    title: "Research & Analysis",
    image:
      "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?semt=ais_hybrid&w=740&q=80", // Team meeting
  },
  {
    id: "03",
    title: "Installation & Maintenance",
    image:
      "https://img.freepik.com/free-photo/solar-panel-installation-rooftop_23-2152021003.jpg", // Solar/Tech maintenance
  },
];

export const slides = [
  {
    image:
"https://i.ibb.co/ZwHqn8b/slider-h1-1.webp",    tagline: "INSTANT . SIMPLE . EXCELLENCE",
    title: (
      <>
        Driving Australia’s <br /> Energy Future Forward
      </>
    ),
  },
  {
    image:
      "https://gepsenergy.com/assets/images/blog/single/hyrbird-power.webp",
    tagline: "CLEAN . RENEWABLE . RELIABLE",
    title: (
      <>
        Leading Seamless <br /> Solar Energy Transition
      </>
    ),
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0497/4749/3026/files/1_7733b6f3-c80f-452c-92e4-ad853201dec1_1024x1024.png?v=1686314683",
    tagline: "AWARD WINNING . TRUSTED",
    title: (
      <>
        Powering Australia’s Clean <br /> Energy Future Together
      </>
    ),
  },
];

export const TERMS_DATA = [
  {
    id: 1,
    title: "Agreement to Terms",
    desc: "By accessing our platform, creating a registered account, or completing a furniture purchase, you acknowledge that you have read, understood, and legally agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and our furniture logistics platform. If you do not agree with any part of these terms, you must immediately discontinue use of the site and our services.",
  },
  {
    id: 2,
    title: "User Account Responsibility",
    desc: "You are solely responsible for maintaining the confidentiality and security of your account credentials and your JWT-based session tokens. You agree to accept full financial and legal responsibility for all activities and orders placed through your account. In the event of unauthorized access or a security breach of your login information, you must notify our security team immediately to invalidate the compromised session.",
  },
  {
    id: 3,
    title: "Product Representation",
    desc: "We make every effort to display the colors, textures, and dimensions of our furniture as accurately as possible. However, due to variations in professional studio lighting, individual monitor calibrations, and the natural characteristics of materials like wood grain or leather, we cannot guarantee that the physical product will perfectly match the digital representation on your screen. Minor variations are not considered manufacturing defects.",
  },
  {
    id: 4,
    title: "Pricing & Availability",
    desc: "All prices, discounts, and availability are subject to change without prior notice. While we strive for 100% accuracy, we reserve the right to cancel any orders arising from typographical errors, pricing glitches, or unexpected stock shortages from our manufacturing partners. In the event of a cancellation after payment has been processed, a full refund will be issued to your original payment method immediately.",
  },
  {
    id: 5,
    title: "Intellectual Property",
    desc: "All content included on this site—including website architecture, furniture photography, logos, descriptive text, and proprietary custom code—is the exclusive property of this company and is protected by international copyright, trademark, and intellectual property laws. Users are strictly prohibited from reproducing, duplicating, or exploiting any portion of this site for commercial purposes without express written consent.",
  },
  {
    id: 6,
    title: "Prohibited Site Use",
    desc: "You agree not to engage in any activity that interferes with the proper working of the platform. This includes, but is not limited to, using automated systems (bots, spiders, or scrapers) to harvest pricing data, attempting to bypass security headers, or trying to access unauthorized order information via API manipulation. Any attempt to reverse-engineer our authentication flow or JWT implementation will result in an immediate account ban and potential legal action.",
  },
  {
    id: 7,
    title: "Limitation of Liability",
    desc: "To the maximum extent permitted by law, our company shall not be held liable for any indirect, incidental, special, or consequential damages—including loss of profits or property damage—resulting from the use of our products or unavoidable delays in the freight shipping process. Our total liability for any claim related to a purchase shall not exceed the original purchase price paid by the customer for the specific item in question.",
  },
  {
    id: 8,
    title: "Governing Law",
    desc: "These Terms and Conditions and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the jurisdiction where our corporate headquarters are located. You agree that any legal disputes or claims arising from your use of this site will be settled exclusively in the state or federal courts within that jurisdiction, and you waive any objection to such venue.",
  },
];

export const PRIVACY_DATA = [
  {
    id: 1,
    title: "Information Collection",
    desc: "We collect essential personal identifiers including your full name, email address, physical shipping address, and primary phone number. This data is gathered specifically to facilitate the processing of high-value furniture orders, verify your identity for secure transactions, and provide real-time delivery updates through our automated tracking systems.",
  },
  {
    id: 2,
    title: "Logistics Data Sharing",
    desc: "To ensure your furniture arrives safely, we share your delivery address and contact number with our trusted third-party freight carriers and LTL logistics partners. These partners are contractually obligated to use your information solely for the purpose of coordinating delivery appointments and are strictly prohibited from using or selling your data for independent marketing purposes.",
  },
  {
    id: 3,
    title: "JWT & Cookie Usage",
    desc: "Our platform utilizes JSON Web Tokens (JWT) to provide a secure, persistent login experience without storing sensitive passwords in your browser. Additionally, we use functional cookies to maintain your shopping cart progress, remember your site preferences, and ensure that your session remains authenticated across different tabs or during return visits to our storefront.",
  },
  {
    id: 4,
    title: "Payment Data Security",
    desc: "Your financial security is our top priority. We do not store full credit card numbers or CVV codes on our internal servers. All financial transactions are transmitted via Secure Socket Layer (SSL) technology and processed through fully encrypted, PCI-DSS compliant third-party payment gateways to ensure your sensitive billing information remains inaccessible to unauthorized parties.",
  },
  {
    id: 5,
    title: "Marketing & Opt-Out",
    desc: "Users may choose to opt-in to our newsletter to receive furniture care guides, interior design tips, and exclusive promotional offers. Your participation is entirely voluntary. You maintain full control over your communication preferences and can opt-out at any any time by clicking the 'Unsubscribe' link found at the bottom of our emails or by updating your profile settings.",
  },
  {
    id: 6,
    title: "Data Retention",
    desc: "We retain order history and basic contact data as required by law for tax reporting, financial auditing, and furniture warranty fulfillment. However, we respect your right to privacy; you may request the permanent deletion of your personal account data at any time via our support portal, provided there are no active orders or outstanding legal obligations tied to the account.",
  },
  {
    id: 7,
    title: "Child Privacy",
    desc: "Our website and services are intended strictly for adults aged 18 and over. We do not knowingly collect, solicit, or maintain personal information from children under the age of 13. If we become aware that a minor has provided us with personal data without verifiable parental consent, we will take immediate steps to delete that information from our database and terminate the associated account.",
  },
  {
    id: 8,
    title: "Policy Updates",
    desc: "We reserve the right to update this Privacy Policy to reflect changes in global privacy laws or our internal data handling practices. If significant changes are made—specifically regarding how we share or secure your personal information—we will notify all registered users via their primary email address and place a prominent notice on our homepage for 30 days.",
  },
];
