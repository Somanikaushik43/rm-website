import React from "react";
import { ArrowUpRight } from "lucide-react";

const KeyServices = () => {
  const services = [
    {
      id: "01",
      title: "Risk & Assessment Audits",
      description:
        "We evaluate key risk areas and assess the design and effectiveness of internal controls to ensure proactive risk mitigation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2L3 6v6c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V6l-9-4z" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Operational & Financial Audits",
      description:
        "Comprehensive audits focused on improving efficiency, financial accuracy, and governance controls.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M3 3h18v18H3V3zm4 4h4v4H7V7zm6 0h4v10h-4V7z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Risk Compliance Audits",
      description:
        "Ensuring regulatory compliance and minimizing exposure to compliance-related risks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z" />
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "IT & Cybersecurity Audits",
      description:
        "Auditing IT systems and cybersecurity controls to protect digital assets and infrastructure.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          <path d="M11 10h2v5h-2zm0-3h2v2h-2z" />
        </svg>
      ),
    },
  ];

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="
        transition-colors duration-300
        bg-orange-50/40
        dark:bg-[#06071B]
        py-20 md:py-28
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:sticky lg:top-24">
            {/* Label - LIGHT MODE: Warm gray | DARK MODE: White/50 */}
            <p className="mb-4 text-sm tracking-wider uppercase text-stone-500 dark:text-white/50">
              Key Services
            </p>

            {/* Heading - LIGHT MODE: Dark stone | DARK MODE: White */}
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-stone-900 dark:text-white leading-tight">
              Comprehensive
              <br />
              Audit Solutions
              <br />
              for Every
              <br />
              Challenge
            </h2>

            {/* Description - LIGHT MODE: Medium stone | DARK MODE: White/70 */}
            <p className="max-w-xl mb-8 text-stone-600 dark:text-white/70">
              Explore our specialized internal audit services designed to manage
              risk, enhance control, and ensure operational and regulatory
              excellence.
            </p>

            {/* CTA Button - LIGHT MODE: Orange | DARK MODE: Indigo */}
            <button
              onClick={scrollTop}
              className="
                px-8 py-4 rounded-full font-semibold
                bg-orange-600 text-white
                hover:bg-orange-700
                dark:bg-indigo-600 dark:hover:bg-indigo-700
                transition
              "
            >
              Book Consultation
            </button>
          </div>

          {/* RIGHT COLUMN - SERVICE CARDS */}
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`
                  relative group rounded-3xl p-6 min-h-[260px]
                  transition-all duration-300
                  border border-orange-200 bg-white shadow-lg
                  hover:-translate-y-1 hover:shadow-2xl hover:border-orange-500/60
                  dark:bg-white/5 dark:border-white/10 dark:shadow-none
                  dark:hover:border-indigo-500/60
                  ${index === 1 || index === 3 ? "lg:ml-20" : ""}
                `}
              >
                {/* BIG NUMBER - LIGHT MODE: Light orange | DARK MODE: White/5 */}
                <span className="absolute top-6 right-8 text-7xl font-bold select-none text-orange-200 dark:text-white/5">
                  {service.id}
                </span>

                {/* ICON - LIGHT MODE: Orange | DARK MODE: Indigo */}
                <div className="w-10 h-10 mb-6 rounded-xl flex items-center justify-center bg-orange-600/15 group-hover:bg-orange-600 dark:bg-indigo-600/15 dark:group-hover:bg-indigo-600 transition">
                  <div className="text-orange-600 group-hover:text-white dark:text-indigo-600 dark:group-hover:text-white transition">
                    {service.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="mb-4 text-xl md:text-2xl font-semibold text-stone-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mb-10 leading-relaxed text-stone-600 dark:text-white/70">
                  {service.description}
                </p>

                {/* ARROW BUTTON - LIGHT MODE: Orange on hover | DARK MODE: Indigo on hover */}
                <button
                  onClick={scrollTop}
                  className="
                    absolute bottom-5 right-5
                    w-10 h-10 rounded-full
                    border border-orange-300
                    flex items-center justify-center
                    hover:bg-orange-600 hover:border-orange-600
                    dark:border-white/20
                    dark:hover:bg-indigo-600 dark:hover:border-indigo-600
                    transition
                  "
                >
                  <ArrowUpRight
                    size={16}
                    className="text-stone-700 dark:text-white group-hover:text-white"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;