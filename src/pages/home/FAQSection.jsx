import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const faqs = [
    {
      question: "How do you ensure independence and objectivity during audits?",
      answer:
        "We adhere strictly to professional standards and ethical guidelines, ensuring our audit teams remain independent from management and avoid any conflicts of interest throughout the engagement.",
    },
    {
      question: "What is the difference between audit and assurance services?",
      answer:
        "Audit services involve examining financial statements to provide an opinion on their accuracy, while assurance services are broader and include evaluations that provide confidence in information quality, processes, and controls.",
    },
    {
      question: "What documents are required for an audit?",
      answer:
        "Typical documents include financial statements, ledgers, bank statements, invoices, contracts, payroll records, tax returns, and internal control documentation.",
    },
    {
      question: "Can you assist with compliance to international standards?",
      answer:
        "Yes, we provide guidance on compliance with IFRS, ISA, SOX, ISO frameworks, and other global regulatory requirements.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in finance, manufacturing, technology, healthcare, energy, retail, infrastructure, and emerging enterprises.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* LEFT – HEADER */}
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 text-sm tracking-[0.2em] uppercase text-stone-500 dark:text-white/50">
              FAQ
            </p>

            <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-stone-900 dark:text-white">
              Clarity for
              <br />
              Your Critical
              <br />
              Questions
            </h2>

            <p className="text-lg leading-relaxed text-stone-600 dark:text-white/70">
              Find clear, concise answers to common questions about our audit and
              assurance services, processes, and standards—designed to help you
              make informed decisions with confidence.
            </p>
          </div>

          {/* RIGHT – FAQ ACCORDION */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    rounded-2xl overflow-hidden transition-all duration-300
                    border bg-white shadow-md
                    dark:bg-white/5 dark:border-white/10 dark:shadow-none
                    ${isOpen 
                      ? "border-orange-500/40 dark:border-indigo-500/40" 
                      : "border-orange-200 dark:border-white/10 hover:bg-orange-50/50 dark:hover:bg-white/10"}
                  `}
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full p-5 md:p-6 text-left group"
                  >
                    <h3
                      className={`
                        text-base md:text-lg font-medium pr-4 transition-colors
                        ${isOpen
                          ? "text-stone-900 dark:text-white"
                          : "text-stone-600 dark:text-white/70 group-hover:text-stone-900 dark:group-hover:text-white"}
                      `}
                    >
                      {faq.question}
                    </h3>

                    {/* ICON */}
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${isOpen
                          ? "bg-orange-600 dark:bg-indigo-600 rotate-180 text-white"
                          : "bg-orange-200 text-orange-600 dark:bg-white/10 dark:text-white"}
                      `}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="px-5 pb-5 md:px-6">
                      <div className="pt-4 border-t border-orange-200 dark:border-white/10">
                        <p className="text-sm leading-relaxed text-stone-600 dark:text-white/70">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;