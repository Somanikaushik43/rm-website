import React from "react"

const WhyRiskMan = () => {
  const items = [
    {
      title: "Customized Solutions",
      description:
        "Tailoring services to unique client needs ensuring optimal outcomes.",
    },
    {
      title: "Client-Centric Focus",
      description:
        "Our unwavering dedication to understanding and addressing client goals ensures satisfaction and success.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Constantly evolving and refining our processes to stay ahead of industry trends and client expectations.",
    },
    {
      title: "Proven Track Record",
      description:
        "A solid history of delivering measurable results showcases our commitment to excellence.",
    },
    {
      title: "Innovative Approach",
      description:
        "Utilizing cutting-edge technologies and methodologies to provide forward-thinking solutions.",
    },
    {
      title: "Expertise and Experience",
      description:
        "Our seasoned professionals bring years of industry experience, guaranteeing top-tier solutions.",
    },
    {
      title: "Ethical Standards",
      description:
        "Upholding the highest levels of integrity and transparency in all interactions.",
    },
  ];

  return (
    <section
      className="
        relative w-full
        transition-colors duration-300
        bg-bgLight
        dark:bg-bgDark
        py-20 md:py-28
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-left">
          <p className="mb-3 text-sm tracking-wider uppercase font-semibold text-brandNavy dark:text-brandAccent">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-brandDark dark:text-white">
            Why{" "}
            <span className="text-brandGold dark:text-brandAccent">
              RiskMan
            </span>
            ?
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl
                transition-all duration-300
                border border-borderLight bg-surfaceLight shadow-lg
                hover:-translate-y-1 hover:shadow-2xl hover:border-brandGold
                dark:bg-surfaceDark dark:border-borderDark dark:shadow-none
                dark:hover:border-brandAccent
              "
            >
              <h3 className="mb-3 text-xl font-bold text-brandGold dark:text-brandAccent">
                {item.title}
              </h3>
              <p className="text-brandNavy dark:text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRiskMan;