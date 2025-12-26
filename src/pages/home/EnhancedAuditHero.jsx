import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ConnectingDots from "./ConnectingDots";
import riskManLogo from "../../assets/images/rm.png";

const EnhancedAuditHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ======================
     SCENE VISIBILITY
  ====================== */

  // INTRO: 0 → 0.35
  const introOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);

  // CONNECT: 0.35 → 0.85
  const connectOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.75, 0.85],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white"
      style={{ height: "240vh" }} // total scroll length
    >
      {/* ======================
          PINNED VIEWPORT
      ====================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden relative">

        {/* ======================
            CANVAS (GLOBAL)
        ====================== */}
        <ConnectingDots progress={scrollYProgress} />

        {/* ======================
            INTRO SCENE
        ====================== */}
        <motion.section
          style={{ opacity: introOpacity }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center min-h-screen text-center"
        >
          {/* Logo */}
          <div className="relative mb-12">
            <div className="absolute inset-0 blur-[80px] bg-blue-600/40 rounded-full" />
            <img
              src={riskManLogo}
              alt="RiskMan"
              className="relative z-10 w-44 md:w-56"
            />
          </div>

          <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9]">
            Risk. Trust.
            <br />
            Assurance.
          </h1>

          <p className="mt-6 tracking-[0.35em] text-white/50 text-xs">
            WELCOME TO RISKMAN
          </p>

          <div className="absolute bottom-14 flex flex-col items-center text-white/40">
            <span className="text-[10px] tracking-widest mb-2">SCROLL</span>
            <ChevronDown />
          </div>
        </motion.section>

        {/* ======================
            CONNECT SCENE
        ====================== */}
        <motion.section
          style={{ opacity: connectOpacity }}
          className="absolute inset-0 z-30 min-h-screen flex items-center"
        >
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT TEXT */}
            <div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight mb-6">
                Connecting the dots.
                <br />
                <span className="text-blue-500">It’s what we do.</span>
              </h2>

              <p className="text-white/70 text-lg max-w-xl mb-10">
                We help organizations transform uncertainty into confidence —
                aligning governance, insight, and assurance for sustainable growth.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Who we are", "What we do", "Careers"].map((item) => (
                  <button
                    key={item}
                    className="px-6 py-3 rounded-full border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT EMPTY SPACE (for canvas focus) */}
            <div className="hidden lg:block h-[60vh]" />
          </div>
        </motion.section>

      </div>
    </section>
  );
};

export default EnhancedAuditHero;
