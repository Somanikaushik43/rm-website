import React, { useState } from "react";
import {
  FileText,
  Shield,
  Lock,
  Link2,
  AlertCircle,
  Users,
  Globe2,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Terms() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: "intro",
      icon: FileText,
      title: "Welcome",
      body: (
        <>
          <p>
            These Terms of Use govern your access to and use of RiskMan Consulting
            LLP's website (the "Website"). By using the Website, you accept these
            Terms in full. If you disagree with any part, please discontinue use.
          </p>
          <p className="mt-4">
            The terminology "Client", "You", and "Your" refers to you, the person
            accessing this Website. "The Company", "Ourselves", "We", "Our", and
            "Us" refers to RiskMan Consulting LLP.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      icon: CheckCircle,
      title: "Cookies",
      body: (
        <p>
          We use cookies to enhance your experience. By accessing RiskMan, you
          consent to the use of cookies in accordance with our Privacy Policy. You
          may disable cookies in your browser; some features may be affected.
        </p>
      ),
    },
    {
      id: "license",
      icon: Shield,
      title: "License",
      body: (
        <>
          <p>
            Unless otherwise stated, RiskMan Consulting LLP and/or its licensors
            own the intellectual property rights for all material on RiskMan. You
            must not:
          </p>
          <ul className="mt-4 space-y-2 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Republish material from RiskMan</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Sell, rent, or sub-license material</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Reproduce or copy material for commercial purposes</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Redistribute content without permission</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "iframes",
      icon: Globe2,
      title: "iFrames",
      body: (
        <p>
          Without prior approval and written permission, you may not create frames
          around our webpages that alter the visual presentation or appearance of
          our Website.
        </p>
      ),
    },
    {
      id: "content-liability",
      icon: AlertCircle,
      title: "Content Liability",
      body: (
        <p>
          We are not responsible for content that appears on your website. You
          agree to indemnify and defend us against all claims arising from your
          website.
        </p>
      ),
    },
    {
      id: "links",
      icon: Link2,
      title: "Hyperlinking to our Content",
      body: (
        <>
          <p className="mb-3">The following organizations may link to our Website without prior written approval:</p>
          <ul className="mb-4 space-y-2 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Government agencies</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Search engines</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>News organizations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>Online directory distributors</span>
            </li>
          </ul>
          <p>
            Approved organizations may hyperlink using our corporate name, URL, or
            other appropriate description.
          </p>
        </>
      ),
    },
    {
      id: "privacy",
      icon: Lock,
      title: "Your Privacy",
      body: (
        <p>
          Please read our{" "}
          <a href="/privacy-policy" className="text-brandPrimary dark:text-brandAccent underline hover:text-brandDark dark:hover:text-white transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      ),
    },
    {
      id: "disclaimer",
      icon: Shield,
      title: "Disclaimer",
      body: (
        <>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations and warranties relating to our website.
          </p>
          <ul className="mt-4 mb-4 space-y-2 list-none">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>No liability for personal injury or death</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>No liability for fraud</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" size={16} />
              <span>No liability beyond what law permits</span>
            </li>
          </ul>
          <p>
            As long as the Website is provided free of charge, we will not be
            liable for any loss or damage.
          </p>
        </>
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
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&q=80"
            alt="Terms of Use"
            className="object-cover w-full h-full grayscale opacity-20"
          />
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-brandPrimary dark:text-brandAccent text-lg mb-4 tracking-wide uppercase font-semibold">
              Legal Information
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white">
              Terms
              <br />
              <span className="text-brandPrimary dark:text-brandAccent">
                of Use
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-brandNavy dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services
            </p>
          </div>
        </div>
      </section>

      {/* ================= TERMS SECTIONS ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              Understanding Our <span className="text-brandPrimary dark:text-brandAccent">Terms</span>
            </h2>
            <p className="text-lg text-brandNavy dark:text-gray-400 max-w-3xl mx-auto">
              These terms outline acceptable use, intellectual property rights,
              limitations, and legal responsibilities when using RiskMan services.
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
          Questions About
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">
            Our Terms
          </span>?
        </h2>

        <p className="text-xl text-brandNavy dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          If you have any questions or concerns about these Terms of Use,
          our team is here to help
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-lg rounded-full font-bold bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us
          </a>
          <a
            href="/privacy-policy"
            className="inline-block px-8 py-4 text-lg rounded-full font-bold border-2 border-brandPrimary dark:border-brandAccent text-brandPrimary dark:text-brandAccent hover:bg-brandPrimary dark:hover:bg-brandAccent hover:text-white dark:hover:text-brandDark transition-all duration-300 hover:scale-105"
          >
            View Privacy Policy
          </a>
        </div>
      </section>
    </div>
  );
}