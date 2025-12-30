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
        bg-bgLight
        dark:bg-bgDark
        py-20 md:py-28
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:sticky lg:top-24">
            {/* Label */}
            <p className="mb-4 text-sm tracking-wider uppercase font-semibold text-brandNavy dark:text-brandAccent">
              Key Services
            </p>

            {/* Heading */}
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-brandDark dark:text-white leading-tight">
              Comprehensive
              <br />
              Audit Solutions
              <br />
              for Every
              <br />
              Challenge
            </h2>

            {/* Description */}
            <p className="max-w-xl mb-8 text-base text-brandNavy dark:text-white/70">
              Explore our specialized internal audit services designed to manage
              risk, enhance control, and ensure operational and regulatory
              excellence.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollTop}
              className="
                px-8 py-4 rounded-full font-semibold
                bg-brandDark text-white
                hover:bg-brandPrimary
                dark:bg-brandAccent dark:text-brandDark
                dark:hover:bg-brandGold
                transition-all duration-300
                shadow-lg hover:shadow-xl hover:scale-105
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
                  border border-borderLight bg-surfaceLight shadow-lg
                  hover:-translate-y-1 hover:shadow-2xl hover:border-brandGold
                  dark:bg-surfaceDark dark:border-borderDark dark:shadow-none
                  dark:hover:border-brandAccent
                  ${index === 1 || index === 3 ? "lg:ml-20" : ""}
                `}
              >
                {/* BIG NUMBER */}
                <span className="absolute top-6 right-8 text-7xl font-bold select-none text-brandGold/20 dark:text-brandAccent/10">
                  {service.id}
                </span>

                {/* ICON */}
                <div className="w-10 h-10 mb-6 rounded-xl flex items-center justify-center bg-brandDark/10 group-hover:bg-brandDark dark:bg-brandAccent/15 dark:group-hover:bg-brandAccent transition-all duration-300">
                  <div className="text-brandDark group-hover:text-white dark:text-brandAccent dark:group-hover:text-brandDark transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="mb-4 text-xl md:text-2xl font-semibold text-brandDark dark:text-white">
                  {service.title}
                </h3>

                <p className="mb-10 leading-relaxed text-brandNavy dark:text-white/70">
                  {service.description}
                </p>

                {/* ARROW BUTTON */}
                <button
                  onClick={scrollTop}
                  className="
                    absolute bottom-5 right-5
                    w-10 h-10 rounded-full
                    border-2 border-brandGold
                    flex items-center justify-center
                    hover:bg-brandGold hover:border-brandGold
                    dark:border-brandAccent
                    dark:hover:bg-brandAccent
                    transition-all duration-300
                  "
                >
                  <ArrowUpRight
                    size={16}
                    className="text-brandDark dark:text-brandAccent group-hover:text-white dark:group-hover:text-brandDark transition-colors duration-300"
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