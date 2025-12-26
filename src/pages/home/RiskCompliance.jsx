import {
  ShieldCheck,
  FileText,
  Users,
  Settings,
} from "lucide-react";

// 4. Risk & Compliance Section
const RiskCompliance = () => {
  const services = [
    {
      id: 1,
      title: "Enterprise Risk Management",
      description:
        "A structured framework to identify, assess, and manage risks across your organization, aligning with strategic objectives.",
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: "Regulatory Risk Compliance",
      description:
        "Helping organizations meet regulatory requirements while maintaining operational efficiency.",
      icon: FileText,
    },
    {
      id: 3,
      title: "Third-Party Risk Assessments",
      description:
        "Assessing and managing risks arising from vendors, partners, and external stakeholders.",
      icon: Users,
    },
    {
      id: 4,
      title: "Compliance Risk Program",
      description:
        "Designing and implementing compliance programs that strengthen governance and accountability.",
      icon: Settings,
    },
  ];

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
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* LEFT – IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&q=80&w=800"
              alt="Risk & Compliance"
              className="w-full h-full min-h-[520px] lg:min-h-[650px] rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <p className="mb-4 text-sm tracking-wider text-stone-500 dark:text-white/50">
              Key Risk & Compliance
            </p>

            <h2 className="mb-6 text-3xl md:text-4xl font-semibold leading-tight text-stone-900 dark:text-white">
              Managing Risk,
              <br />
              Ensuring Total
              <br />
              Compliance
            </h2>

            <p className="mb-12 text-base leading-relaxed text-stone-600 dark:text-white/70">
              Explore tailored risk and compliance solutions that safeguard
              operations, meet regulations, and strengthen enterprise-wide
              accountability and control.
            </p>

            {/* SERVICES GRID */}
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.id}
                    className="
                      group cursor-pointer
                      transition-all duration-300
                    "
                  >
                    <div
                      className="
                        flex items-center justify-center w-16 h-16 mb-4
                        rounded-2xl 
                        bg-orange-600 text-white
                        dark:bg-indigo-600 dark:text-white
                        transition-colors duration-300
                        group-hover:bg-orange-700
                        dark:group-hover:bg-indigo-500
                      "
                    >
                      <Icon size={28} />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold text-stone-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-stone-600 dark:text-white/70">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskCompliance;