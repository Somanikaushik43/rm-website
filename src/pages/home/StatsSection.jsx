import { TrendingUp, Building2, Users, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "../../component/common/AnimatedCounter"

const StatsSection = () => {
  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      icon: TrendingUp,
    },
    {
      number: 50,
      suffix: "+",
      label: "Industries Served",
      icon: Building2,
    },
    {
      number: 150,
      suffix: "+",
      label: "Global Clients",
      icon: Users,
    },
    {
      number: 300,
      suffix: "+",
      label: "Projects Delivered",
      icon: CheckCircle2,
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
            Our Impact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-brandDark dark:text-white">
            Trusted by{" "}
            <span className="text-brandGold dark:text-brandAccent">
              Global Enterprises
            </span>
          </h2>
        </div>

        {/* STATS GRID */}
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={i}
                className="group transition-all duration-300"
              >
                <div
                  className="
                    p-8 text-center rounded-3xl
                    border border-borderLight shadow-lg
                    bg-surfaceLight
                    hover:shadow-2xl hover:-translate-y-1 hover:border-brandGold
                    dark:bg-surfaceDark dark:border-borderDark dark:shadow-none
                    dark:hover:border-brandAccent
                  "
                >
                  {/* ICON */}
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brandDark to-brandNavy dark:from-brandAccent dark:to-brandGold flex items-center justify-center shadow-lg"
                  >
                    <Icon className="text-white dark:text-brandDark" size={24} />
                  </div>

                  {/* NUMBER */}
                  <h3 className="mb-2 text-5xl font-bold text-brandGold dark:text-brandAccent">
                    <AnimatedCounter
                      target={stat.number}
                      suffix={stat.suffix}
                    />
                  </h3>

                  {/* LABEL */}
                  <p className="text-brandNavy dark:text-white/70 font-medium">
                    {stat.label}
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

export default StatsSection;