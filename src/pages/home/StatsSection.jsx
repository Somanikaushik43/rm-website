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
        bg-orange-50/40
        dark:bg-[#06071B]
        py-20 md:py-28
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-left">
          <p className="mb-3 text-sm tracking-wider uppercase text-stone-500 dark:text-white/50">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-indigo-600 dark:to-blue-600 bg-clip-text text-transparent">
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
                    border border-orange-200 shadow-lg
                    bg-white
                    hover:shadow-2xl hover:-translate-y-1
                    dark:bg-white/5 dark:border-white/10 dark:shadow-none
                  "
                >
                  {/* ICON - LIGHT: Orange | DARK: Blue/Indigo */}
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 dark:from-indigo-600 dark:to-blue-600 flex items-center justify-center"
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* NUMBER - LIGHT: Orange | DARK: Blue/Indigo */}
                  <h3 className="mb-2 text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-indigo-600 dark:to-blue-600 bg-clip-text text-transparent">
                    <AnimatedCounter
                      target={stat.number}
                      suffix={stat.suffix}
                    />
                  </h3>

                  {/* LABEL */}
                  <p className="text-stone-600 dark:text-white/70">
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