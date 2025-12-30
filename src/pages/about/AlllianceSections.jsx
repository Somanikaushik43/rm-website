import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaHandshake } from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

/* =======================
   ALLIANCE PARTNERS DATA
======================= */
const alliancePartners = [
  {
    name: "Integrität Audit, Accounting & Advisory",
    shortName: "Integrität CPA",
    title: "Integrated Audit Services",
    description: "Public accounting firm providing integrated audit services in alliance with RiskMan Consulting.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    website: "https://www.integritatcpa.com",
    fullDescription: `RiskMan Consulting, in alliance with Integrität CPA, provides integrated audit services.

An integrated audit is an examination of the effectiveness of the internal control over financial reporting and of the financial statements. The Sarbanes-Oxley Act requires larger issuers to have integrated audits (internal control over financial reporting (ICFR) auditor attestation requirements), issuers with $100 million in annual revenue or more. An integrated audit aims to issue a report on the internal control environment, the quality and compliance of financial reporting.

RiskMan Consulting is a firm with various internal control professionals with top tier and high-level corporate experience in testing the internal control environment for operational and financial reporting purposes. Click images below to see each partner's profile.

Integritat CPA began an alliance with RiskMan Consulting in 2024 to pool resources and expertise in performing integrated audits for issuers requiring these audits, in process of uplisting or companies that opt to have integrated audits. The alliance is a dynamic, engaging team with ample years industry experience serving businesses in the US and EU. Through this alliance Integritat CPA continues to realize its mission to make accountability understandable and practical.`,
    services: ["Integrated Audit Services (ICOFR)", "Financial Statement Audits", "Internal Control Testing", "Sarbanes-Oxley Compliance", "Audit & Review Services (US GAAP)"],
    region: "United States & European Union",
  },
  {
    name: "GQ Auditores Consultores",
    shortName: "GQ Auditores",
    title: "Financial Statement Audits in Spanish",
    description: "Chilean public accounting firm providing financial statement audit and review services in Spanish.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    website: "https://gqauditores.cl",
    fullDescription: `GQ Auditores Consultores is located in Santiago (Chile), is a public accounting firm registered to provide assurance services in Chile. It regularly provides this service in accordance with IFRS/Chilean GAAP. In alliance with Integritat CPA, GQ Auditores provides financial statement audit and review services in Spanish under US GAAP (US generally accepted accounting standards) and IFRS (international financial reporting standards).

This alliance facilitates companies in Latin America to obtain audit and review services for going public in the US or Canada and effecting mergers/reverse mergers into US and Canadian public quoted entities. It also accommodates Spanish speaking companies in the US to have audits performed with ease, financial statements and audit reports prepared in Spanish and English with audit documentation prepared in English, as required for AICPA and PCOAB reviews and inspections.

The alliance merges our common expertise in the US and LATAM markets to realize the mission of making accountability, reporting and compliance practical for emerging businesses.`,
    services: ["Financial Statement Audits (US GAAP)", "Financial Statement Reviews (IFRS)", "Bilingual Audit Services", "Going Public Support", "Merger & Reverse Merger Services"],
    region: "Latin America (Chile) & United States",
  },
  {
    name: "Supriyo Mullick CPA PLLC",
    shortName: "SM CPA",
    title: "Comprehensive Accounting & Advisory Services",
    description: "Delivering insightful, reliable, and globally informed accounting and advisory services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    website: "https://www.smcpallc.com",
    fullDescription: `At Supriyo Mullick CPA PLLC, we specialize in delivering insightful, reliable, and globally informed accounting and advisory services. With deep expertise in US GAAP, international financial reporting, and comprehensive business consulting, we serve clients ranging from emerging startups to established enterprises.

Our team combines decades of experience with a commitment to understanding each client's unique needs, ensuring tailored solutions that drive financial clarity, compliance, and strategic growth. Whether you need audit and assurance services, tax planning, or management consulting, we bring precision, integrity, and a client-centered approach to every engagement.`,
    services: ["Financial Statement Audits & Reviews", "Tax Planning & Compliance", "Management Consulting", "Internal Controls", "Business Process Improvement"],
    region: "United States & Global",
  },
];

export default function AlliancePartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const services = [
    "Audit", "Accounting", "Tax", "Advisory",
    "Bookkeeping", "SOC Compliance", "Internal Controls", "Risk Management"
  ];

  return (
    <>
      <section id="alliance-partners" className="relative overflow-hidden transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark py-14 md:pt-20 md:pb-0 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-center"
          >
            <div className="flex items-start gap-3 mb-4">
              <FaHandshake className="text-3xl text-brandPrimary dark:text-brandAccent" />
              <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Strategic<br />
                <span className="text-brandPrimary dark:text-brandAccent">Alliance Partners</span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mb-12 text-base text-start text-brandNavy dark:text-gray-400"
          >
            Collaborating with leading firms to deliver comprehensive solutions across audit, compliance, and consulting services.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {alliancePartners.map((partner, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-32 h-32 rounded-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 border-4 border-brandPrimary/30 dark:border-brandAccent/30 group-hover:border-brandPrimary/60 dark:group-hover:border-brandAccent/60"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-center transition-colors duration-500 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {partner.shortName}
                  </h3>
                  <p className="font-semibold mb-3 text-center text-brandPrimary dark:text-brandAccent">{partner.title}</p>
                  <p className="mb-6 text-sm leading-relaxed text-center text-brandNavy dark:text-gray-400">{partner.description}</p>
                  <div className="flex justify-center">
                    <span className="px-4 py-2 text-xs rounded-full bg-brandPrimary/10 dark:bg-brandAccent/20 border border-brandPrimary/30 dark:border-brandAccent/40 text-brandPrimary dark:text-brandAccent">
                      {partner.region}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= UPDATED ANIMATED RIBBON ================= */}
          <div className="relative flex items-center justify-center mt-20 mb-10 h-80">

            {/* RIBBON 1: Tilting Down Right (Light mode) */}
            <div
              className="absolute w-[150%] z-20 flex items-center overflow-hidden border-y border-borderLight dark:hidden"
              style={{
                transform: "rotate(-4.5deg) translateY(-20px)",
                transformOrigin: "left center",
                backgroundColor: "#001F3F", // brandDark
                height: "85px",
                left: "-25%",
                boxShadow: "0 25px 50px -12px rgba(0, 31, 63, 0.4)"
              }}
            >
              <div className="flex whitespace-nowrap animate-scroll-left">
                {[...Array(4)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex items-center gap-12 px-6">
                    {services.map((service, idx) => (
                      <span key={idx} className="text-3xl italic font-black tracking-tighter text-white uppercase">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* RIBBON 2: Tilting Up Right (Light mode) */}
            <div
              className="absolute w-[150%] z-10 flex items-center overflow-hidden dark:hidden"
              style={{
                transform: "rotate(3.5deg)  translateY(30px)",
                transformOrigin: "right center",
                backgroundColor: "#003366", // brandNavy
                height: "85px",
                left: "-25%",
                boxShadow: "0 15px 35px rgba(0, 51, 102, 0.4)"
              }}
            >
              <div className="flex whitespace-nowrap animate-scroll-right">
                {[...Array(4)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex items-center gap-12 px-6">
                    {services.map((service, idx) => (
                      <span key={idx} className="text-2xl italic font-black tracking-tighter uppercase text-white/90">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* RIBBON 1: Tilting Down Right (Dark mode) */}
            <div
              className="absolute w-[150%] z-20 items-center overflow-hidden border-y border-borderDark hidden dark:flex"
              style={{
                transform: "rotate(-4.5deg) translateY(-20px)",
                transformOrigin: "left center",
                backgroundColor: "#FFC000", // brandAccent
                height: "85px",
                left: "-25%",
                boxShadow: "0 25px 50px -12px rgba(255, 192, 0, 0.4)"
              }}
            >
              <div className="flex whitespace-nowrap animate-scroll-left">
                {[...Array(4)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex items-center gap-12 px-6">
                    {services.map((service, idx) => (
                      <span key={idx} className="text-3xl italic font-black tracking-tighter text-brandDark uppercase">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* RIBBON 2: Tilting Up Right (Dark mode) */}
            <div
              className="absolute w-[150%] z-10 items-center overflow-hidden hidden dark:flex"
              style={{
                transform: "rotate(3.5deg)  translateY(30px)",
                transformOrigin: "right center",
                backgroundColor: "#FFB800", // brandGold
                height: "85px",
                left: "-25%",
                boxShadow: "0 15px 35px rgba(255, 184, 0, 0.4)"
              }}
            >
              <div className="flex whitespace-nowrap animate-scroll-right">
                {[...Array(4)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex items-center gap-12 px-6">
                    {services.map((service, idx) => (
                      <span key={idx} className="text-2xl italic font-black tracking-tighter uppercase text-brandDark/90">
                        {service}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 35s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 45s linear infinite;
          }
        `}</style>
      </section>

      {/* ================= PARTNER DETAILS MODAL ================= */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full max-w-4xl max-h-[90vh] border shadow-2xl rounded-3xl overflow-y-auto bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Close button with higher z-index */}
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="absolute z-50 flex items-center justify-center w-10 h-10 transition-all rounded-full top-12 right-12 bg-brandPrimary/10 dark:bg-brandAccent/20 hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/30 hover:scale-110"
                >
                  <FaTimes className="text-xl text-brandPrimary dark:text-brandAccent" />
                </button>

                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                  <img
                    src={selectedPartner.image}
                    alt={selectedPartner.name}
                    className="w-32 h-32 rounded-full border-4 mb-4 border-brandPrimary dark:border-brandAccent"
                  />
                  <h2 className="text-3xl font-bold text-center text-brandDark dark:text-white mb-2">
                    {selectedPartner.name}
                  </h2>
                  <p className="text-lg font-semibold text-center text-brandPrimary dark:text-brandAccent mb-3">
                    {selectedPartner.title}
                  </p>
                  <span className="px-4 py-2 text-sm rounded-full bg-brandPrimary/10 dark:bg-brandAccent/20 border border-brandPrimary/30 dark:border-brandAccent/40 text-brandPrimary dark:text-brandAccent">
                    {selectedPartner.region}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-brandDark dark:text-white">About</h3>
                  <div className="leading-relaxed whitespace-pre-line text-brandNavy dark:text-gray-400">
                    {selectedPartner.fullDescription}
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-brandDark dark:text-white">Services Offered</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {selectedPartner.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/10 border border-borderLight dark:border-borderDark"
                      >
                        <div className="w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-brandNavy dark:text-gray-400">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Website Link */}
                {selectedPartner.website && (
                  <div className="flex justify-center pt-6 border-t border-borderLight dark:border-borderDark">
                    <a
                      href={selectedPartner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white dark:text-brandDark transition-all duration-300 rounded-full shadow-lg bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:hover:bg-brandGold hover:shadow-xl hover:scale-105"
                    >
                      <FaExternalLinkAlt />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}