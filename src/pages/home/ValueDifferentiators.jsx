import {
  Lightbulb,
  Handshake,
  TrendingUp,
  Zap,
  Clock,
  Target,
  Users,
  CheckCircle2,
  Award,
} from "lucide-react";

const ValueDifferentiators = () => {
  const items = [
    { icon: Lightbulb, title: "Enriched domain expertise and experience" },
    { icon: Handshake, title: "Ease to do business – flexible to business needs" },
    { icon: TrendingUp, title: "All-inclusive – fixed price engagement model" },
    { icon: Zap, title: "Agile & lean approach in implementation" },
    { icon: Clock, title: "Responsive & quick" },
    { icon: Target, title: "Focus on process improvement & real business benefits" },
    { icon: Users, title: "Strong focus on building long-term relationships" },
    { icon: CheckCircle2, title: "We remain with clients throughout the journey" },
    { icon: Award, title: "100% successful implementation" },
    { icon: Clock, title: "100% on-time project completion" },
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
            Our Strengths
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 dark:from-indigo-600 dark:to-blue-600 bg-clip-text text-transparent">
              Value
            </span>{" "}
            Differentiators
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute top-0 bottom-0 hidden w-px md:block left-1/2 -translate-x-1/2 bg-gradient-to-b from-orange-300 via-amber-300 to-orange-300 dark:from-indigo-600/40 dark:via-blue-600/40 dark:to-indigo-600/40" />

          <div className="grid gap-8 md:grid-cols-2">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`
                    flex items-center gap-4
                    ${isLeft ? "justify-end text-right" : "justify-start text-left"}
                  `}
                >
                  {/* LEFT ICON */}
                  {!isLeft && (
                    <div className="p-4 rounded-xl bg-orange-600 dark:bg-indigo-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                      <Icon size={24} />
                    </div>
                  )}

                  {/* TEXT */}
                  <div className={`flex-1 max-w-md ${isLeft ? "pr-8" : "pl-8"}`}>
                    <p className="font-semibold text-stone-700 dark:text-white/80">
                      {item.title}
                    </p>
                  </div>

                  {/* RIGHT ICON */}
                  {isLeft && (
                    <div className="p-4 rounded-xl bg-orange-600 dark:bg-indigo-600 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                      <Icon size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueDifferentiators;