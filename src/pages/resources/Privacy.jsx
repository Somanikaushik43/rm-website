import React, { useState } from "react";
import { Shield, Lock, Eye, Database, FileText, UserCheck, Users, Globe2, CheckCircle, Settings } from "lucide-react";

export default function Privacy() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: "introduction",
      icon: FileText,
      title: "Introduction",
      body: (
        <>
          <p>
            At <strong>RiskMan</strong>, accessible from{" "}
            <a
              href="https://www.riskman.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandPrimary dark:text-brandAccent underline hover:text-brandDark dark:hover:text-white transition-colors"
            >
              https://www.riskman.in/
            </a>
            , protecting your privacy is a core priority. This Privacy Policy
            explains what data we collect and how it is used.
          </p>
          <p className="mt-4">
            This policy applies only to information collected through our website
            and not to offline interactions.
          </p>
        </>
      ),
    },
    {
      id: "consent",
      icon: UserCheck,
      title: "Consent",
      body: (
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      ),
    },
    {
      id: "information-collected",
      icon: Database,
      title: "Information We Collect",
      body: (
        <>
          <p>
            We collect personal information when you voluntarily provide it,
            such as name, email address, phone number, company details, and
            inquiry messages.
          </p>
          <p className="mt-4">
            Additional information may be requested when registering for
            services or engaging in professional consultations.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use-info",
      icon: Settings,
      title: "How We Use Your Information",
      body: (
        <>
          <ul className="mt-4 space-y-3 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Operate and maintain our website</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Improve user experience and services</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Analyze usage trends and performance</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Develop new solutions and offerings</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Communicate updates, offers, and support</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Ensure security and prevent fraud</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies",
      icon: Eye,
      title: "Cookies",
      body: (
        <p>
          RiskMan uses cookies to store visitor preferences and enhance
          navigation. Users can disable cookies through browser settings;
          however, some features may not function optimally.
        </p>
      ),
    },
    {
      id: "rights",
      icon: Shield,
      title: "CCPA & GDPR Rights",
      body: (
        <>
          <p>
            Users may have data protection rights under applicable laws,
            including CCPA and GDPR, such as access, correction, deletion, and
            restriction of personal data.
          </p>
          <p className="mt-4">
            Requests can be made via{" "}
            <a href="/contact" className="text-brandPrimary dark:text-brandAccent underline hover:text-brandDark dark:hover:text-white transition-colors">
              the contact page
            </a>
            , and we typically respond within one month.
          </p>
        </>
      ),
    },
    {
      id: "children",
      icon: Users,
      title: "Children's Information",
      body: (
        <p>
          RiskMan does not knowingly collect personal data from children under
          the age of 13. If such information is identified, it will be removed
          promptly.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-brandDark dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[70vh] flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-bgLight/80 dark:bg-bgDark/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&q=80"
            alt="Privacy Policy"
            className="object-cover w-full h-full grayscale opacity-20"
          />
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-brandPrimary dark:text-brandAccent text-lg mb-4 tracking-wide uppercase font-semibold">
              Your Data Protection
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white">
              Privacy
              <br />
              <span className="text-brandPrimary dark:text-brandAccent">
                Policy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brandNavy dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              How we collect, use, and protect your information with transparency and integrity
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRIVACY SECTIONS ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Our Commitment to <span className="text-brandPrimary dark:text-brandAccent">Your Privacy</span>
            </h2>
            <p className="text-lg text-brandNavy dark:text-gray-400 max-w-3xl mx-auto">
              At RiskMan, we take data protection seriously. This policy outlines how we handle
              your personal information with the highest standards of security and compliance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl p-8 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300 rounded-3xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brandPrimary/10 dark:bg-brandAccent/10 flex items-center justify-center mb-6 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark transition-all duration-300">
                    <section.icon className="w-7 h-7" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                    {section.title}
                  </h3>

                  <div className="text-brandNavy dark:text-gray-400 leading-relaxed group-hover:text-brandNavy/80 dark:group-hover:text-white/90 transition-colors duration-300">
                    {section.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding text-center bg-surfaceLight/50 dark:bg-surfaceDark/50">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
          Need Privacy or
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">
            Compliance Support
          </span>?
        </h2>

        <p className="text-xl text-brandNavy dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          RiskMan assists organizations with privacy frameworks, governance,
          risk, and enterprise compliance programs
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-lg rounded-full font-bold bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Talk to RiskMan
          </a>
          <a
            href="/services"
            className="inline-block px-8 py-4 text-lg rounded-full font-bold border-2 border-brandPrimary dark:border-brandAccent text-brandPrimary dark:text-brandAccent hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark transition-all duration-300 hover:scale-105"
          >
            View Our Services
          </a>
        </div>
      </section>
    </div>
  );
}