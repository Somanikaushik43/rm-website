import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AuditServices = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Professional Integrity and Expertise",
      description:
        "Our services are delivered by highly qualified professionals, ensuring accuracy, independence, and compliance with the highest international auditing standards.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800",
    },
    {
      id: 2,
      title: "Internal Audit Services",
      description:
        "We provide comprehensive internal audit solutions that evaluate your operational effectiveness, identify control weaknesses, and recommend improvements.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800",
    },
    {
      id: 3,
      title: "Risk Assurance",
      description:
        "Our risk assurance services help you identify, assess, and mitigate business risks while ensuring compliance with regulatory requirements.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800",
    },
    {
      id: 4,
      title: "Compliance & Regulatory Review",
      description:
        "Ensuring accuracy, independence, and adherence to the highest regulatory and governance standards.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&q=80&w=800",
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
        <div className="grid gap-8 mb-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm tracking-wider text-stone-500 dark:text-white/50">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-stone-900 dark:text-white">
              Precision. Assurance. <br />
              Value-Driven Insights.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-base leading-relaxed text-stone-600 dark:text-white/70">
              Our comprehensive audit and assurance services are designed to
              deliver accurate financial reporting, strengthen internal
              controls, and enhance stakeholder confidence.
            </p>
          </div>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {services.map((service) => {
            const isOpen = expandedCard === service.id;

            return (
              <div
                key={service.id}
                className="
                  overflow-hidden rounded-2xl
                  border border-orange-200
                  bg-white shadow-md
                  transition-all duration-300
                  dark:bg-white/5 dark:border-white/10 dark:shadow-none
                "
              >
                {/* BUTTON */}
                <button
                  onClick={() =>
                    setExpandedCard(isOpen ? null : service.id)
                  }
                  className="
                    flex items-center justify-between w-full px-6 py-6
                    transition-colors duration-200
                    hover:bg-orange-50/50
                    dark:hover:bg-white/10
                  "
                >
                  <h3 className="text-lg md:text-xl font-medium text-left text-stone-900 dark:text-white">
                    {service.id}. {service.title}
                  </h3>

                  <div
                    className={`
                      w-10 h-10 rounded-full border
                      flex items-center justify-center
                      transition-transform duration-300
                      border-orange-300 text-orange-600
                      dark:border-white/30 dark:text-white
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <ChevronDown size={22} />
                  </div>
                </button>

                {/* CONTENT */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[600px]" : "max-h-0"}
                  `}
                >
                  <div className="px-6 md:px-10 pt-4 pb-10">
                    <div className="flex flex-col gap-8 lg:flex-row">
                      <div className="lg:w-1/2">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex items-center lg:w-1/2">
                        <p className="text-base leading-relaxed text-stone-600 dark:text-white/70">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          
            <a href="/services"
            className="
              inline-block px-8 py-4 text-lg font-medium rounded-full
              transition-all duration-300
              border-2 border-orange-600
              text-orange-600 hover:bg-orange-600 hover:text-white
              dark:border-indigo-600
              dark:text-white dark:hover:bg-indigo-600
            "
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuditServices;