import { CheckCircle2, Shield, Lightbulb, Layers } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Trusted Expertise",
      description:
        "To uphold the highest standards of audit excellence, providing independent assurance.",
      icon: CheckCircle2,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Focused on understanding client needs and delivering tailored, value-driven solutions.",
      icon: Shield,
    },
    {
      title: "Commitment to Integrity",
      description:
        "Ensuring transparency, ethics, and accountability across all engagements.",
      icon: Layers,
    },
    {
      title: "Innovative Methodologies",
      description:
        "Leveraging modern frameworks and tools to deliver smarter audit outcomes.",
      icon: Lightbulb,
    },
  ];

  return (
    <section
      className="
        relative w-full z-20 py-20 md:py-28 transition-colors duration-300
        bg-bgLight
        dark:bg-bgDark
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP TEXT - RiskMan Brand Colors */}
        <div className="grid gap-4 mb-14 text-2xl lg:text-3xl font-medium tracking-tight lg:grid-cols-3">
          <div className="text-brandGold dark:text-brandAccent">
            financial <br /> reporting
          </div>
          <div className="text-brandGold dark:text-brandAccent">
            strengthen <br /> internal controls
          </div>
          <div className="text-brandGold dark:text-brandAccent">
            and enhance stakeholder confidence <br />
            empowering your organization
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group relative p-8 rounded-2xl h-[340px]
                  flex flex-col justify-between cursor-pointer
                  transition-all duration-300
                  bg-surfaceLight border border-borderLight shadow-lg
                  hover:-translate-y-2 hover:shadow-2xl
                  dark:bg-surfaceDark dark:border-borderDark dark:shadow-none
                  hover:bg-gradient-to-br hover:from-brandDark hover:to-brandNavy
                  dark:hover:from-brandAccent dark:hover:to-brandGold
                  hover:border-transparent
                "
              >
                {/* ICON - Navy/Gold Brand Colors */}
                <div
                  // className="
                  //   w-16 h-16 rounded-xl flex items-center justify-center
                  //   bg-brandDark text-white
                  //   dark:bg-brandAccent dark:text-brandDark
                  //   group-hover:bg-brandAccent group-hover:text-brandDark
                  //   dark:group-hover:bg-brandDark dark:group-hover:text-white
                  //   transition-colors duration-300 shadow-lg
                  // "
                  className=" w-12 h-12 rounded-xl flex items-center justify-center
                        bg-brandDark text-white
                        group-hover:bg-brandGold group-hover:text-white
                        transition-all duration-300 shadow-md
                        dark:bg-brandAccent dark:text-brandDark
                        dark:group-hover:bg-white dark:group-hover:text-brandDark"
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3
                    className="
                      mb-4 text-xl font-bold leading-tight
                      text-brandDark
                      dark:text-white
                      group-hover:text-white
                      dark:group-hover:text-brandDark
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      text-sm leading-relaxed
                      text-brandNavy
                      dark:text-white/70
                      group-hover:text-white/90
                      dark:group-hover:text-brandDark/80
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;