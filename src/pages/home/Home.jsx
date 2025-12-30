// src/pages/home/Home.jsx
import React from "react";

// layout / common
import BackgroundGrid from "../../component/common/BackgroundGrid";
import EnhancedAuditHero from "./EnhancedAuditHero";
import HeroSection from "./HeroSection";

// sections
import Features from "./Features";
import RiskCompliance from "./RiskCompliance";
import KeyServices from "./KeyServices";
import IndustralizationService from "./IndustralizationService";
import ValueDifferentiators from "./ValueDifferentiators";
import WhyRiskman from "./WhyRiskman";
import StatsSection from "./StatsSection";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import BlogSection from "./BlogSection";
import AuditService from "./AuditService";
import CTASection from "./CTASections";

export default function Home() {
  return (
    <main
      className="
        w-full overflow-x-hidden transition-colors duration-300
        bg-white text-slate-900
        dark:bg-[#06071B] dark:text-white
      "
    >
      {/* 1. CINEMATIC INTRO EXPERIENCE (400vh scroll) */}
      {/* <EnhancedAuditHero /> */}

      {/* <HeaderBlend/>

      <DeloitteHero/> */}

     

      {/* 2. MAIN SITE CONTENT (Starts here) */}
      <div id="main-content">

        {/* <BackgroundGrid/> */}
        <HeroSection />

        {/* FEATURES */}
        <Features />

        <AuditService/>

        {/* RISK & COMPLIANCE */}
        <RiskCompliance />

        {/* KEY SERVICES */}
        <KeyServices />

        {/* INDUSTRIALIZATION */}
        <IndustralizationService />

        {/* VALUE DIFFERENTIATORS */}
        <ValueDifferentiators />

        <BlogSection/>

        {/* WHY RISKMAN */}
        <WhyRiskman />



        {/* STATS */}
        <StatsSection />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FAQ */}
        <FAQSection />

        <CTASection/>

        {/* AUDIT CTA */}
        {/* <AuditService /> */}
      </div>
    </main>
  );
}


