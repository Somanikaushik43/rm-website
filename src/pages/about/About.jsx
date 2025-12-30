import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaChevronDown,
  FaLinkedin,
  FaTimes,
  FaQuoteLeft,
  FaStar,
  FaHeart
} from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import BackgroundGrid from "../../component/common/BackgroundGrid";
import AlliancePartnersSection from "./AlllianceSections";
import TeamMembersSection from "./TeamMembersSection";
import Events from "./Events";
import TestimonialsSection from "./TestimonialsSection";
import TestimonialSimple from "./TestimonialSimple";


/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

/* =======================
   ANIMATED COUNTER COMPONENT
======================= */
function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


export default function About() {

  const [openFaq, setOpenFaq] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const toggleFaq = (index) =>
    setOpenFaq(openFaq === index ? null : index);

  /* =======================
     FEATURE CARDS
  ======================= */
  const features = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Performance",
      subtitle: "Maximize Outcomes",
      description:
        "Delivering high-impact services with integrity, objectivity and best-in-class execution.",
      type: "gradient",
      animated: false,
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Reliability",
      subtitle: "Trusted Execution",
      description:
        "Customized solutions aligned with client strategy and globally accepted deliverables.",
      type: "light",
      animated: false,
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Cost",
      subtitle: "Optimized Value",
      description:
        "Efficient sourcing and refined processes to enhance productivity and reduce costs.",
      type: "dark",
      animated: false,
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: <><AnimatedCounter end={50} duration={2} suffix="+" /> Experts</>,
      subtitle: "Industry SMEs",
      description:
        "Qualified professionals across risk, compliance, finance, IT and strategy domains.",
      type: "gradient",
      animated: true,
    },
  ];

  /* =======================
     MISSION & VISION
  ======================= */
  const missionVision = {
    mission: {
      title: "Mission",
      content: "Our mission is to achieve sustainable growth and build better future for all.",
      points: [
        "Embracing technology and innovation",
        "Being client and people focussed",
        "Build trust and relationship",
        "Be prompt and deliver efficient and quality execution",
      ],
    },
    vision: {
      title: "Vision",
      content: "Our vision is to become a leading consulting firm in India and globally through rendering sustainable quality services aligned to our mission.",
    },
    pillars: [
      {
        title: "Performance",
        points: [
          "Maximize performance through our services",
          "Ensure our services operate with integrity and objectivity with best-in-class outcomes",
        ],
      },
      {
        title: "Reliability",
        points: [
          "Customized agreements that exactly meet service needs and customer's internal strategy",
          "Faster delivery and globally accepted deliverables",
        ],
      },
      {
        title: "Cost",
        points: [
          "By focusing on refining elements and investigating on alternative resources",
          "Efficiently managing our sourcing, we aim to enhance service productivity and minimize operational costs",
        ],
      },
    ],
  };

  /* =======================
     LEADERSHIP
  ======================= */
  const teamMembers = [
    {
      name: "Sukanta Nag",
      title: "Founder & Managing Partner",
      bio:
        "CA, CS, CMA, CAIIB with 39+ years of experience across credit rating, corporate banking, risk management and financial consulting.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/sukanta-nag.jpg",
      linkedin: "#",
      fullBio: "CA, CS, CMA, CAIIB and M.Com, with over 39 years of experience spanning Credit Rating, Corporate Management, Risk Management, Financial and Management Consulting. His key strengths are in Understanding the holistic approach to the business and client's need for offering 360-degree solutions and build an effective relationship with them.",
    },
    {
      name: "Prasen Pal",
      title: "Partner – Corporate Compliance",
      bio:
        "Ex-Deloitte and Genpact professional with 16+ years in internal audit, ESG, taxation, AI and RPA practices.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/prasen-pal.jpg",
      linkedin: "#",
      fullBio: "A CA, ex-Deloitte ERS and Genpact ERC with 16+ years of experience spanning Internal Audits, ESG, Direct and Indirect taxation including GST, Process automation and RPA, adoption of AI. He is instrumental in managing pre-investment, post-investment, and other advisory and outsourced services.",
    },
    {
      name: "Arpit Garg",
      title: "Partner – Risk & IT Advisory",
      bio:
        "CA, CIA, CRMA, CISA with global experience in ERM, SOC, cybersecurity, fraud analytics and IT risk.",
      image:
        "https://www.riskman.in/wp-content/uploads/2020/09/arpit-garg.jpg",
      linkedin: "#",
      fullBio: "A CA, CIA, CRMA, CISA, ex-EY, Genpact ERC and SNB with 13+ years of experience spanning Risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors.",
    },
  ];

  /* =======================
     SERVICE LEADERS
  ======================= */
  const serviceLeaders = [
    {
      name: "Manish Agarwal",
      title: "Service Leader",
      credentials: "Master's in Information Application, CISA, CISM, AWS Solutions Architect, ITIL v4",
      bio: "Professional with 20+ years of experience across the domain of Information Security. He has played notable roles at IDFC FIRST Bank and Airtel.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      expertise: ["Information Security", "BCP", "IT Security Strategy"],
    },
    {
      name: "Amitabh Jain",
      title: "Service Leader",
      credentials: "Seasoned Chartered Accountant with 30+ years of experience",
      bio: "Expert in Financial Services and Business Enterprises. As COO and CFO in Ed-Tech & Vocational Training sector, he excelled in corporate governance, financial services, and risk governance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      expertise: ["Corporate Governance", "Financial Services", "PE Capital"],
    },
    {
      name: "Jitendra Khimavat",
      title: "Service Leader",
      credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
      bio: "Expert in risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors including infrastructure, mining, manufacturing, and finance.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      expertise: ["Internal Audits", "Risk Management", "Compliance"],
    },
    {
      name: "Narayanan Rajendran",
      title: "Service Leader",
      credentials: "CA, CISA with 20+ years at Ex-Ford, Ex-PKF, Ex-Templar Shield",
      bio: "Expert in ERM/SOX/ICOFR, TPRM, Internal Information Security, ISO27001 and forensic assignments. He has worked with Fortune 500 companies on global roles.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      expertise: ["ERM", "Cybersecurity", "Forensic Analysis"],
    },
  ];

  /* =======================
     TESTIMONIALS
  ======================= */
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Zomato",
      role: "CFO",
      text: "RiskMan has been instrumental in helping us navigate complex regulatory landscapes. Their expertise and professionalism are unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Priya Sharma",
      company: "World Bank",
      role: "Risk Manager",
      text: "Working with RiskMan transformed our risk management approach. Their team's depth of knowledge is truly impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Amit Patel",
      company: "Jindal Steel",
      role: "Head of Compliance",
      text: "The level of detail and customization in RiskMan's solutions exceeded our expectations. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  ];

  /* =======================
     MARQUEE CLIENTS
  ======================= */
  const clients = [
    { name: "Moder", logo: "https://images.squarespace-cdn.com/content/v1/628d18ddf477d1092801dcb2/ce6bfc6d-46cf-43a4-9f45-dce56bd7b2c0/Moder_Logotype_Soft-Black_RGB.png" },
    { name: "Zomato", logo: "https://www.boardinfinity.com/blog/content/images/2024/09/1712377685818.png" },
    { name: "Jindal Steel & Power", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jindal_Steel_and_Power_Logo.svg/2560px-Jindal_Steel_and_Power_Logo.svg.png" },
    { name: "Blinkit", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Blinkit-logo-1-1.webp" },
    { name: "The World Bank", logo: "https://www.grsproadsafety.org/wp-content/uploads/2023/05/WorldBankLogo.png" },
    { name: "Indorama", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Indorama_Ventures_Logo.svg-2.webp" },
    { name: "Electrosteel", logo: "https://companieslogo.com/img/orig/ELECTCAST.NS_BIG-aca1b4fb.png?t=1720244491" },
    { name: "Emami Agrotech", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Emami-logo-2.webp" },
    { name: "Ambuja Neotia", logo: "https://phrealtors.in/wp-content/uploads/2023/07/Ambuja-Neotia-logo.png" },
    { name: "Jindal Renewables", logo: "https://sgurrenergy.com/wp-content/uploads/2025/01/jindal-renewables.png" },
    { name: "Innovist", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Innovist-logo-1-150x20.webp" },
    { name: "India TV", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Indiatv-logo-1.webp" },
    { name: "Nexval", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Nexval-logo-150x40.webp" },
    { name: "Khadim", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Khadim-logo-3-150x35.webp" },
    { name: "Cars24", logo: "https://via.placeholder.com/150x60/1e293b/f59e0b?text=Cars24" },
    { name: "Kariwala", logo: "https://via.placeholder.com/150x60/1e293b/10b981?text=Kariwala" },
    { name: "India Power", logo: "https://via.placeholder.com/150x60/1e293b/ef4444?text=India+Power" },
    { name: "Pernod Ricard", logo: "https://via.placeholder.com/150x60/1e293b/a855f7?text=Pernod+Ricard" },
    { name: "SKL Automotive", logo: "https://via.placeholder.com/150x60/1e293b/60a5fa?text=SKL+Auto" },
    { name: "Feeding India", logo: "https://via.placeholder.com/150x60/1e293b/10b981?text=Feeding+India" },
    { name: "Schoolnet", logo: "https://via.placeholder.com/150x60/1e293b/f59e0b?text=Schoolnet" },
    { name: "Danieli", logo: "https://via.placeholder.com/150x60/1e293b/60a5fa?text=Danieli" },
    { name: "Care Health Insurance", logo: "https://via.placeholder.com/150x60/1e293b/ef4444?text=Care+Health" },
  ];
  /* =======================
     FAQ
  ======================= */
  const faqs = [
    {
      question: "What does RiskMan stand for?",
      answer:
        "RiskMan is a trusted advisory firm focused on delivering sustainable value through risk, compliance, financial and strategic consulting services.",
    },
    {
      question: "What is RiskMan's mission?",
      answer:
        "To achieve sustainable growth and build a better future by embracing technology, innovation, trust and long-term partnerships.",
    },
    {
      question: "What industries does RiskMan serve?",
      answer:
        "We serve clients across manufacturing, financial services, technology, retail, infrastructure and emerging enterprises.",
    },
    {
      question: "What makes RiskMan different?",
      answer:
        "We are propreneurs — professionals with an entrepreneurial mindset — delivering customized solutions rather than generic consulting.",
    },
  ];

  // =======================CTA==============





  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 200);
      }
    }
  }, [location]);



  return (
    <div className=" min-h-screen overflow-x-hidden
  bg-bgLight dark:bg-bgDark
  text-brandDark dark:text-white
  transition-colors duration-300
    ">
      {/* ================= HERO ================= */}

      {/* <BackgroundGrid/> */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-surfaceLight dark:bg-surfaceDark">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920"
            className="w-full h-full object-cover opacity-30 dark:opacity-40"
            alt=""
          />
          <div className="absolute inset-0 bg-bgLight/60 dark:bg-bgDark/70" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.p
            variants={fadeInUp}
            className="mb-4 tracking-widest uppercase text-brandNavy dark:text-brandAccent"
          >
            About RiskMan
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-brandDark dark:text-white"
          >
            Build confidence,
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">
              enable clarity & impact
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-textLightSecondary dark:text-textDarkSecondary"
          >
            Strategic advisory, risk management & sustainable growth.
          </motion.p>
        </div>
      </section>


      {/* ================= ABOUT US SECTION ================= */}
      {/* <section className="relative py-16 transition-colors duration-300 bg-white isolate lg:py-24 dark:bg-black">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl lg:px-8 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-orange-600 dark:text-[var(--accent-blue)]">About us</span>
            </h2>
            <div className="w-24 h-1 mb-8"></div>

            <p className="text-lg leading-relaxed mb-6 text-stone-600 dark:text-[var(--text-gray)]">
              At RiskMan, we focus on creating enduring value for our clients, people, communities
              and other stakeholders through our "Customised Solution" based services.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-stone-600 dark:text-[var(--text-gray)]">
              RiskMan is a team of experienced professionals with high level of knowledge
              and accomplishments who bring to the table a varied and storied experience set,
              to create outstanding value for its clients and other stakeholders. Rather than being
              classical consultants, we take pride in being propreneurs i.e., professionals, with
              an entrepreneurial mindset.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-stone-600 dark:text-[var(--text-gray)]">
              We are a passionate team and feel excited in making a meaningful impact through our
              experience, competency and ability to deliver sustainable goal with perseverance.
              We endeavor to engage with people in meaningful ways and believe in building
              long term relationship with all our stakeholders.
            </p>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 border-l-4 border-orange-600 dark:from-[var(--accent-blue)]/10 dark:to-[var(--accent-purple)]/10 dark:border-[var(--accent-blue)] rounded-lg p-6">
              <p className="text-xl italic font-semibold text-center text-stone-900 dark:text-white">
                "RISKMAN IS THE TRUSTED PARTNER IN YOUR SUSTAINABLE GROWTH JOURNEY"
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
      {/* <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-amber-600 dark:from-[var(--accent-blue)] dark:to-[var(--accent-purple)] rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=1000&fit=crop"
              alt="About RiskMan"
              className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>
        </div> */}
      {/* </section> */}


      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8 max-w-7xl mx-auto bg-surfaceLight dark:bg-surfaceDark">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-wider text-brandNavy dark:text-brandAccent mb-6">
            • Introduction
          </p>
          <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-normal leading-[1.15] max-w-5xl text-brandDark dark:text-white">
            At RiskMan, we focus on creating enduring value for our clients, people, communities and other stakeholders through our "Customised Solution" based services.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Card 1: Professional Excellence */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden group rounded-[2rem] h-[460px] shadow-card-light dark:shadow-card-dark hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover transition-all duration-700"
          >
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=1000&fit=crop&q=80"
              alt="Professional Excellence"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brandDark/60 transition-opacity duration-300 group-hover:bg-brandDark/70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-[1.75rem] font-semibold leading-tight mb-3">Professional Excellence</h3>
              <p className="text-[0.95rem] leading-relaxed text-white/85">
                RiskMan is a team of experienced professionals with high level of knowledge and accomplishments who bring varied and storied experience to create outstanding value.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Propreneurial Mindset */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden group rounded-[2rem] h-[460px] shadow-card-light dark:shadow-card-dark hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover transition-all duration-700"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80"
              alt="Propreneurial Mindset"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brandDark/60 transition-opacity duration-300 group-hover:bg-brandDark/70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-[1.75rem] font-semibold leading-tight mb-3">Propreneurial Mindset</h3>
              <p className="text-[0.95rem] leading-relaxed text-white/85">
                Rather than being classical consultants, we take pride in being propreneurs—professionals with an entrepreneurial mindset.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Long-term Relationships */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden group rounded-[2rem] h-[460px] shadow-card-light dark:shadow-card-dark hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover transition-all duration-700"
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=1000&fit=crop&q=80"
              alt="Long-term Relationships"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brandDark/60 transition-opacity duration-300 group-hover:bg-brandDark/70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-[1.75rem] font-semibold leading-tight mb-3">Long-term Relationships</h3>
              <p className="text-[0.95rem] leading-relaxed text-white/85">
                We are passionate about making meaningful impact through our experience and competency. We engage with people meaningfully and believe in building long-term relationships.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= TRIBUTE SECTION ================= */}
      <section className="relative py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="max-w-6xl px-6 mx-auto grid md:grid-cols-[380px_1fr] gap-10 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brandPrimary/10 rounded-3xl blur-2xl opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
              className="relative h-[420px] w-full object-cover rounded-2xl grayscale hover:grayscale-0 transition"
              alt=""
            />
          </div>

          {/* CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandAccent/10 text-brandAccent mb-4">
              <FaHeart /> In Loving Memory
            </div>

            <h2 className="text-4xl font-bold mb-6">
              A Tribute to <br />
              <span className="text-brandPrimary dark:text-brandAccent">
                Excellence & Leadership
              </span>
            </h2>

            <blockquote className="border-l-4 border-brandAccent pl-4 italic text-lg text-brandNavy/80 dark:text-white/70 mb-4">
              “Excellence is not a destination; it is a continuous journey.”
            </blockquote>

            <p className="text-brandNavy/70 dark:text-white/60">
              We honor the legacy of Prabir Sen Gupta whose vision and mentorship
              laid the foundation for RiskMan.
            </p>
          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="relative bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl h-[340px] flex flex-col justify-between cursor-pointer transition-all duration-300 border border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-brandGold dark:hover:border-brandAccent text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto transition-all duration-300 bg-brandDark/10 group-hover:bg-brandDark dark:bg-brandAccent/15 dark:group-hover:bg-brandAccent rounded-xl">
                  <div className="text-brandDark group-hover:text-white dark:text-brandAccent dark:group-hover:text-brandDark transition-colors duration-300">
                    {f.icon}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-3xl font-bold text-brandDark dark:text-white transition-colors duration-300">{f.title}</h3>
                  <p className="mb-3 text-lg font-semibold text-brandNavy/70 dark:text-white/70 transition-colors duration-300">
                    {f.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-surfaceLight dark:bg-surfaceDark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-medium tracking-wider text-textLightSecondary dark:text-textDarkSecondary mb-4">
              • Who we are
            </p>
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-normal leading-[1.2] text-brandDark dark:text-brandAccent mb-16">
              Team reliable care<br />for your healing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Mission, Vision, Future Goals */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-sm font-bold text-textLight dark:text-textDark mb-3">Our Mission:</h3>
                <p className="text-[0.95rem] leading-relaxed text-textLightSecondary dark:text-textDarkSecondary mb-4">
                  Our mission is to achieve sustainable growth and build better future for all.
                </p>
                <p className="text-sm text-textLightMuted dark:text-textDarkMuted mb-2">We believe in:</p>
                <ul className="space-y-2 text-sm text-textLightMuted dark:text-textDarkMuted">
                  <li>• Embracing technology and innovation</li>
                  <li>• Being client and people focussed</li>
                  <li>• Build trust and relationship</li>
                  <li>• Be prompt and deliver efficient and quality execution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-textLight dark:text-textDark mb-3">Our Vision:</h3>
                <p className="text-[0.95rem] leading-relaxed text-textLightSecondary dark:text-textDarkSecondary">
                  Our vision is to become a leading consulting firm in India and globally through rendering sustainable quality services aligned to our mission.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-textLight dark:text-textDark mb-3">Future Goals:</h3>
                <p className="text-[0.95rem] leading-relaxed text-textLightSecondary dark:text-textDarkSecondary">
                  We focus on maximizing performance, ensuring reliability through customized agreements, and enhancing service productivity while minimizing operational costs.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-8">
                <div className="font-signature text-3xl text-textLight dark:text-textDark">
                  RiskMan Team
                </div>
              </div>
            </motion.div>

            {/* Right: Image Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[240px]">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[300px] mt-12">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                  alt="Professional consulting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[200px] -mt-8">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
                  alt="Strategic planning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-[1.5rem] overflow-hidden h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=800&fit=crop"
                  alt="Client engagement"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ================= SUSTAINABILITY CIRCLE WITH PILLARS ================= */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center gap-4 mb-8">
              <div className="w-40 h-40 rounded-full border-4 border-brandPrimary dark:border-brandAccent flex items-center justify-center shadow-lg">
                <div className="w-36 h-36 rounded-full bg-surfaceLight dark:bg-surfaceDark flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <p className="text-lg font-bold text-textLight dark:text-textDark">Sustainability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Pillar 1: Performance */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-6 text-center relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover cursor-pointer"
            >
              <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-10 dark:bg-brandAccent transition-all duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white transition-colors duration-300">Performance</h3>
                <div className="space-y-2 text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    • Maximize performance through our services
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    • Ensure our services operate with integrity and objectivity with best-in-class outcomes
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: Reliability */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-6 text-center relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover cursor-pointer"
            >
              <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-10 dark:bg-brandAccent transition-all duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white transition-colors duration-300">Reliability</h3>
                <div className="space-y-2 text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    • Customized agreements that exactly meet service needs and customer's internal strategy
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    • Faster delivery and globally accepted deliverables
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pillar 3: Cost */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-6 text-center relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover cursor-pointer"
            >
              <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-10 dark:bg-brandAccent transition-all duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white transition-colors duration-300">Cost</h3>
                <div className="space-y-2 text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    • By focusing on refining elements and investigating on alternative resources
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    • Efficiently managing our sourcing, we aim to enhance service productivity and minimize operational costs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section id="co-founders" className="relative bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-start md:text-5xl"
          >
            Co-founding
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">Partners</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mb-12 text-start text-gray-600 dark:text-gray-400"
          >
            Meet the visionary leaders driving RiskMan's mission forward
          </motion.p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                onClick={() => setSelectedLeader(m)}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-28 h-28 object-cover rounded-full border-4 border-brandPrimary/30 dark:border-brandAccent/30 grayscale group-hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-brandDark dark:text-white">{m.name}</h3>
                <p className="font-semibold mb-3 text-brandPrimary dark:text-brandAccent">
                  {m.title}
                </p>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{m.bio}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={m.linkedin}
                    className="inline-flex items-center gap-2 text-brandPrimary dark:text-brandAccent hover:text-brandNavy dark:hover:text-brandGold transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <button className="text-sm text-brandAccent dark:text-brandGoldLight hover:text-brandGold dark:hover:text-brandAccent transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE LEADERS ================= */}
      <section id="service-leaders" className="relative bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-start md:text-5xl"
          >
            Our Team
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">Service Leaders</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mb-12 text-start text-gray-600 dark:text-gray-400"
          >
            Industry experts leading specialized service domains
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceLeaders.map((leader, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-cardLight border border-borderLight dark:bg-cardDark dark:border-borderDark rounded-2xl p-6 group cursor-pointer transition-all duration-500 hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover"
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-brandPrimary dark:border-brandAccent group-hover:border-brandNavy dark:group-hover:border-brandGold group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-brandDark dark:text-white">{leader.name}</h3>
                <p className="font-semibold mb-2 text-sm text-brandPrimary dark:text-brandAccent">
                  {leader.title}
                </p>
                <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                  {leader.credentials}
                </p>
                <button className="text-sm text-brandAccent dark:text-brandGoldLight hover:text-brandGold dark:hover:text-brandAccent transition-colors w-full text-left">
                  View Profile →
                </button>
              </motion.div>
            ))}
          </div>

          {/* Team Stats */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 mt-12 md:grid-cols-3"
          >
            <div className="p-8 text-center border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark shadow-lg">
              <h3 className="mb-2 text-5xl font-bold md:text-6xl text-brandPrimary dark:text-brandAccent">
                <AnimatedCounter end={50} duration={2.5} suffix="+" />
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Team Size</p>
            </div>

            <div className="p-8 text-center border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark shadow-lg">
              <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandPrimary dark:text-brandAccent">
                Qualified & Experienced
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Professionals</p>
            </div>

            <div className="p-8 text-center border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark shadow-lg">
              <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandPrimary dark:text-brandAccent">
                Industry / Sector
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">SMEs</p>
            </div>
          </motion.div>
        </div>
      </section >

      {/* ================= TESTIMONIALS ================= */}
      {/* <TestimonialsSection /> */}
      {/* <TestimonialSimple /> */}

      <section className="relative bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-start md:text-5xl"
          >
            Client
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">Testimonials</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-xl mb-10 text-start text-gray-600 dark:text-gray-400"
          >
            Hear what our clients say about working with RiskMan
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300"></div>
                <FaQuoteLeft className="text-4xl opacity-20 absolute top-4 left-4 group-hover:opacity-40 transition-opacity duration-500 text-brandPrimary dark:text-brandAccent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <FaStar key={j} className="text-lg text-brandGold transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${j * 50}ms` }} />
                    ))}
                  </div>
                  <p className="mb-6 italic text-gray-600 dark:text-gray-400">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-brandPrimary dark:border-brandAccent group-hover:border-brandNavy dark:group-hover:border-brandGold group-hover:scale-110 transition-all duration-500"
                    />
                    <div>
                      <h4 className="font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-brandPrimary dark:text-brandAccent">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= MARQUEE CLIENTS ================= */}
      <section className="relative overflow-hidden bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="max-w-6xl px-6 lg:px-6">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-12 text-3xl font-bold text-start md:text-4xl"
          >
            Our Marquee
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">Clients</span>
          </motion.h2>

          {/* Scrolling Client Logos */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex items-center gap-12"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...clients, ...clients].map((client, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center flex-shrink-0 w-48 h-24 px-4 bg-white dark:bg-white border border-borderLight dark:border-borderDark rounded-xl hover:bg-white dark:hover:bg-brandNavy/20 transition-colors"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Fade edges */}

          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-3 gap-6 mt-12 md:grid-cols-6">
            {clients.slice(0, 12).map((client, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white dark:bg-white border border-borderLight dark:border-borderDark aspect-square rounded-xl hover:bg-white dark:hover:bg-white transition-colors"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain max-w-full max-h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AlliancePartnersSection />

      <TeamMembersSection />

      <Events />

      {/* ================= FAQ ================= */}
      <section className="relative transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="max-w-4xl px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-10 text-3xl font-bold text-start md:text-4xl text-brandDark dark:text-white"
          >
            Frequently Asked
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">Questions</span>
          </motion.h2>

          {faqs.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className={`mb-4 cursor-pointer transition-all duration-300 border rounded-2xl p-6 ${openFaq === i
                ? "bg-surfaceLight dark:bg-surfaceDark border-brandGold dark:border-brandAccent shadow-lg"
                : "bg-surfaceLight/50 dark:bg-surfaceDark/50 border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent"
                }`}
              onClick={() => toggleFaq(i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-brandDark dark:text-white">{f.question}</h3>
                <FaChevronDown
                  className={`transition-transform text-brandPrimary dark:text-brandAccent ${openFaq === i ? "rotate-180" : ""
                    }`}
                />
              </div>
              {openFaq === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-600 dark:text-gray-400"
                >
                  {f.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white"
          >
            Partner With
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">RiskMan Today</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 dark:text-gray-400"
          >
            Strengthen governance, manage risk and drive sustainable growth with
            confidence.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/contact" className="inline-block px-8 py-4 text-lg text-white transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold hover:shadow-xl hover:scale-105">
              Schedule Consultation
            </a>
            <a href="/about" className="inline-block px-8 py-4 text-lg transition-all duration-300 border-2 rounded-full shadow-lg border-brandDark text-brandDark dark:border-brandAccent dark:text-brandAccent hover:bg-brandDark hover:text-white dark:hover:bg-brandAccent dark:hover:text-brandDark">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADER MODAL ================= */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full max-w-2xl border border-borderLight dark:border-borderDark shadow-2xl rounded-3xl bg-surfaceLight dark:bg-surfaceDark"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute z-10 flex items-center justify-center transition-all rounded-full top-5 right-5 w-9 h-9 bg-brandDark/5 dark:bg-white/5 hover:bg-brandDark/10 dark:hover:bg-white/10 hover:scale-110"
              >
                <FaTimes className="text-brandDark dark:text-white/70 hover:text-brandPrimary dark:hover:text-white" />
              </button>

              {/* CONTENT */}
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start p-6">

                {/* LEFT – IMAGE */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-brandPrimary/30 dark:border-brandAccent/30 hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* RIGHT – TEXT */}
                <div>
                  <h2 className="mb-1 text-2xl font-bold text-brandDark dark:text-white">
                    {selectedLeader.name}
                  </h2>

                  <p className="font-semibold mb-2 text-brandPrimary dark:text-brandAccent">
                    {selectedLeader.title}
                  </p>

                  {selectedLeader.credentials && (
                    <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                      {selectedLeader.credentials}
                    </p>
                  )}

                  <div className="h-px my-4 bg-borderLight dark:bg-borderDark" />

                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {selectedLeader.fullBio || selectedLeader.bio}
                  </p>

                  {selectedLeader.expertise && (
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-semibold text-brandDark dark:text-white">
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedLeader.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-brandPrimary/10 border border-brandPrimary/20 text-brandPrimary dark:bg-brandAccent/10 dark:border-brandAccent/30 dark:text-brandAccent"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedLeader.linkedin && (
                    <a
                      href={selectedLeader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent hover:text-brandNavy dark:hover:text-brandGold"
                    >
                      <FaLinkedin className="text-xl" />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}