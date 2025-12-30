import {
  Zap,
  ShoppingCart,
  HeartPulse,
  Factory,
  Monitor,
  Home,
} from "lucide-react";

const IndustralizationService = () => {
  const industries = [
    {
      id: 1,
      title: "Energy & Utilities",
      description:
        "Specialized audit and assurance services ensuring regulatory compliance and operational resilience.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Retail",
      description:
        "Strengthening governance, controls, and financial transparency across retail operations.",
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: "Healthcare",
      description:
        "Supporting healthcare organizations with compliance, risk, and performance assurance.",
      icon: HeartPulse,
    },
    {
      id: 4,
      title: "Manufacturing",
      description:
        "Enhancing efficiency, controls, and compliance across complex manufacturing ecosystems.",
      icon: Factory,
    },
    {
      id: 5,
      title: "Technology",
      description:
        "Helping technology-driven businesses manage risk, compliance, and scalability.",
      icon: Monitor,
    },
    {
      id: 6,
      title: "Real Estate",
      description:
        "Delivering audit and advisory solutions tailored for real estate and infrastructure sectors.",
      icon: Home,
    },
  ];

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
        {/* HEADER */}
        <div className="max-w-2xl mb-14">
          <p className="mb-4 text-sm tracking-wider uppercase font-semibold text-brandNavy dark:text-brandAccent">
            Industry Specialization
          </p>

          <h2 className="mb-6 text-3xl md:text-4xl font-bold leading-tight text-brandDark dark:text-white">
            Expertise Tailored <br /> to Every Industry
          </h2>

          <p className="leading-relaxed text-brandNavy dark:text-white/70">
            Delivering industry-specific audit and assurance solutions that
            strengthen governance, compliance, and performance.
          </p>

          <a href="/industries"
            className="
              inline-block mt-6 px-6 py-3 text-base font-semibold rounded-full
              border-2 border-brandDark
              text-brandDark hover:bg-brandDark hover:text-white
              transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105
              dark:border-brandAccent
              dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark
            "
          >
            Explore More
          </a>
        </div>

        {/* MAIN GRID */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT – INDUSTRY LIST */}
          <div className="grid gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.id}
                  className="
                    group cursor-pointer p-6 rounded-2xl
                    transition-all duration-300
                    bg-surfaceLight border border-borderLight shadow-md
                    hover:-translate-y-1 hover:shadow-xl hover:border-brandGold
                    dark:bg-surfaceDark dark:border-borderDark dark:shadow-none
                    dark:hover:bg-brandAccent/10 dark:hover:border-brandAccent
                  "
                >
                  <div className="flex items-start gap-6">
                    {/* ICON */}
                    <div
                      className="
                        w-12 h-12 rounded-xl flex items-center justify-center
                        bg-brandDark text-white
                        group-hover:bg-brandGold group-hover:text-white
                        transition-all duration-300 shadow-md
                        dark:bg-brandAccent dark:text-brandDark
                        dark:group-hover:bg-white dark:group-hover:text-brandDark
                      "
                    >
                      <Icon size={22} />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3
                        className="
                          mb-2 text-xl font-semibold
                          text-brandDark dark:text-white
                          transition-colors duration-300
                        "
                      >
                        {industry.title}
                      </h3>

                      <p
                        className="
                          text-sm leading-relaxed
                          text-brandNavy dark:text-white/70
                          dark:group-hover:text-white/90
                          transition-colors duration-300
                        "
                      >
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative h-full min-h-[520px] lg:min-h-[650px]">
            <img
              src="https://kit.createbigsupply.com/auditus/wp-content/uploads/sites/48/2025/05/two-multi-ethnic-economists-experienced-african-a-2024-12-13-02-43-51-utc.jpg"
              alt="Industry Specialization"
              className="w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-borderLight dark:ring-borderDark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustralizationService;