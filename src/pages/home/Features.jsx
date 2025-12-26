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
        bg-orange-50/40
        dark:bg-[#06071B]
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP TEXT - LIGHT MODE: Orange/Amber gradient | DARK MODE: Indigo */}
        <div className="grid gap-4 mb-14 text-2xl lg:text-3xl font-medium tracking-tight lg:grid-cols-3">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:text-indigo-600">
            financial <br /> reporting
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:text-indigo-600">
            strengthen <br /> internal controls
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:text-indigo-600">
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
                  bg-white border border-orange-200 shadow-lg
                  hover:-translate-y-2 hover:shadow-2xl
                  dark:bg-white/5 dark:border-white/10 dark:shadow-none
                  hover:bg-gradient-to-br hover:from-orange-500 hover:to-indigo-600
                  dark:hover:bg-indigo-600
                  hover:border-transparent
                "
              >
                {/* ICON - LIGHT MODE: Orange bg, white on hover | DARK MODE: Indigo bg, white on hover */}
                <div
                  className="
                    w-16 h-16 rounded-xl flex items-center justify-center
                    bg-orange-600 text-white
                    dark:bg-indigo-600 dark:text-white
                    group-hover:bg-white group-hover:text-orange-600
                    dark:group-hover:bg-white dark:group-hover:text-indigo-600
                    transition-colors duration-300 shadow-lg
                  "
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3
                    className="
                      mb-4 text-xl font-bold leading-tight
                      text-stone-900
                      dark:text-white
                      group-hover:text-white
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      text-sm leading-relaxed
                      text-stone-600
                      dark:text-white/70
                      group-hover:text-white/90
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