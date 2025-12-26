// import React, { useEffect, useState } from 'react';
// import BackgroundGrid from '../../component/common/BackgroundGrid';

// // Reusable Counter Component
// const StatCounter = ({ end, suffix = "", label, subLabel }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let start = 0;
//         const duration = 2000;
//         const increment = end / (duration / 16);
//         const timer = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//                 setCount(end);
//                 clearInterval(timer);
//             } else {
//                 setCount(Math.ceil(start));
//             }
//         }, 16);
//         return () => clearInterval(timer);
//     }, [end]);

//     return (
//         <div className="flex flex-col pl-4">
//             {/* LIGHT MODE: Orange gradient text | DARK MODE: White text */}
//             <div className="mb-2 font-sans text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:text-white lg:text-6xl">
//                 {count}{suffix}
//             </div>
//             <div className="text-lg font-medium leading-tight text-stone-800 dark:text-white">{label}</div>
//             <div className="text-lg font-medium leading-tight text-stone-800 dark:text-white">{subLabel}</div>
//         </div>
//     );
// };

// const HeroSection = () => {
//     return (
//         <section className="relative w-full min-h-screen bg-orange-50/40 dark:bg-[#06071B] overflow-hidden">
          
//           {/* <BackgroundGrid/> */}

//           {/* Content Container with max-width */}
//           <div className="relative pt-16 md:pt-24 pb-16 md:pb-12 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-8 items-start min-h-screen">

//             {/* Decorative Background Icons - LIGHT MODE: Orange tones | DARK MODE: Blue/purple tones */}
//             <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
//               {/* Icon 1 - Top Right */}
//               <div className="absolute w-32 h-32 border-2 rounded-full top-20 right-20 border-orange-400/40 dark:border-indigo-500/30"></div>
              
//               {/* Icon 2 - Middle Left */}
//               <div className="absolute w-40 h-40 border-2 rounded-full top-1/2 -left-10 border-amber-400/30 dark:border-blue-500/20"></div>
              
//               {/* Icon 3 - Bottom Center */}
//               <div className="absolute border-2 rounded-full bottom-32 left-1/4 w-28 h-28 border-orange-300/35 dark:border-purple-500/25"></div>
              
//               {/* Icon 4 - Top Center */}
//               <div className="absolute w-24 h-24 border-2 rounded-full top-32 left-1/3 border-amber-300/30 dark:border-indigo-400/20"></div>
              
//               {/* Icon 5 - Right Side */}
//               <div className="absolute border-2 rounded-full top-2/3 right-1/4 w-36 h-36 border-orange-300/25 dark:border-blue-400/15"></div>
              
//               {/* Icon 6 - Far Right */}
//               <div className="absolute w-32 h-32 border-2 rounded-full top-1/3 right-10 border-amber-400/30 dark:border-purple-400/20"></div>
//             </div>

//             {/* Left Column: Text, Search, Stats - Increased z-index to 20 to stack above right column */}
//             <div className="relative z-20 flex flex-col w-full p-0 lg:col-span-7 lg:pl-10">

//                 {/* Top Left Floating Icon (Calculator) - LIGHT MODE: White bg with border | DARK MODE: Dark bg */}
//                 <div className="absolute -left-8 sm:left-0 -top-6 sm:-top-10 items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-white dark:bg-[#1a1a2e] rounded-2xl border border-orange-200 dark:border-white/10 shadow-2xl flex animate-bounce duration-[3000ms]">
//                     <svg className="w-5 h-5 text-orange-600 dark:text-white sm:w-6 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                     </svg>
//                 </div>

//                 {/* Floating Icon (Pie Chart) - LIGHT MODE: White bg | DARK MODE: Dark bg */}
//                 <div className="absolute left-16 sm:left-24 md:left-40 lg:left-[450px] -top-4 sm:-top-6 md:-top-8 items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-white dark:bg-[#1a1a2e] rounded-2xl border border-orange-200 dark:border-white/10 shadow-2xl flex animate-pulse duration-[4000ms] z-20">
//                     <svg className="w-5 h-5 text-orange-600 dark:text-white sm:w-6 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
//                     </svg>
//                 </div>

//                 {/* LIGHT MODE: Dark text | DARK MODE: White text */}
//                 <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-bold text-stone-900 dark:text-white leading-tight md:leading-[1.05] mb-6 md:mb-12 tracking-tight">
//                     Clarity, Risk <br />
//                     <span className="text-stone-900 dark:text-white">Value</span> <br />
//                     <span className="text-stone-900 dark:text-white">Assurance</span>
//                 </h1>

//                 {/* LIGHT MODE: Dark gray text | DARK MODE: Light gray text */}
//                 <p className="max-w-2xl mb-8 text-sm font-light leading-relaxed text-stone-600 dark:text-gray-300 md:mb-12 sm:text-base md:text-lg">
//                     Empowering your business with precise audits, trusted insights, and assurance services that drive transparency and growth.
//                 </p>

//                 {/* Search Section Wrapper */}
//                 <div className="relative w-full mb-8 md:mb-12">
//                     {/* Search Bar - Maintains white bg in both modes */}
//                     <div className="bg-white dark:bg-white rounded-full p-1.5 sm:p-2 flex items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full relative z-20 h-12 sm:h-14 md:h-[4.5rem]">
//                         <input
//                             type="text"
//                             placeholder="Internal Audit Services"
//                             className="flex-1 h-full min-w-0 px-4 text-xs font-medium text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none sm:px-6 sm:text-base md:text-lg"
//                         />
//                         {/* LIGHT MODE: Orange button | DARK MODE: Blue button */}
//                         <button className="bg-orange-600 hover:bg-orange-700 dark:bg-[#5a5afc] dark:hover:bg-[#4a4af0] text-white px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-colors text-xs sm:text-sm md:text-lg h-full whitespace-nowrap shadow-md flex-shrink-0">
//                             Search
//                         </button>
//                     </div>
//                 </div>

//                 {/* Tags Row with Floating Icons */}
//                 <div className="relative z-30 flex flex-wrap items-center gap-2 mb-16 sm:gap-3 md:gap-4 md:mb-24">

//                     {/* "S" Icon - LIGHT MODE: White bg | DARK MODE: Dark bg */}
//                     <div className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-white dark:bg-[#0a0a2e] rounded-2xl border border-orange-200 dark:border-white/10 shadow-lg shrink-0">
//                         <span className="text-xl font-bold text-orange-600 dark:text-white sm:text-2xl">S</span>
//                     </div>

//                     {/* Tags - LIGHT MODE: White with orange border | DARK MODE: Dark bg */}
//                     {["Risk Assurance", "Systems Audit", "ESG Assurance"].map((tag) => (
//                         <div key={tag} className="flex items-center gap-2 px-2 sm:px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-[#1a1a3a] border border-orange-200 dark:border-white/10 rounded-full text-stone-700 dark:text-gray-200 text-xs sm:text-sm cursor-pointer hover:bg-orange-50 dark:hover:bg-[#252545] transition-colors shadow-lg whitespace-nowrap">
//                             <span className="text-xs text-orange-400 dark:text-gray-400">✕</span> 
//                             <span>{tag}</span>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Stats Numbers aligned with grid columns */}
//                 <div className="grid grid-cols-3 gap-12 pb-10 mt-auto">
//                     <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
//                     <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
//                     <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
//                 </div>
//             </div>

//             {/* Right Column: Image and Cards */}
//             <div className="relative flex flex-col items-center lg:col-span-5">

//                 {/* Floating Icon: Bottom Left of Image (Grid) - LIGHT MODE: White bg | DARK MODE: Dark bg */}
//                 <div className="absolute -left-20 bottom-40 p-5 bg-white/90 dark:bg-white/5 border border-orange-200 dark:border-white/10 rounded-2xl text-orange-600 dark:text-slate-400 backdrop-blur-sm hidden xl:block animate-bounce duration-[3000ms]">
//                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
//                     </svg>
//                 </div>

//                 {/* Main Image */}
//                 <div className="relative w-full mb-5">
//                     <div className="rounded-[1rem] overflow-hidden p-2">
//                         <img 
//                             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
//                             alt="Professional Team" 
//                             className="w-full h-auto rounded-[1rem] object-cover aspect-[4/5]" 
//                         />
//                     </div>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid w-full grid-cols-2 gap-4">
//                     {/* Card 1 - LIGHT MODE: Orange gradient | DARK MODE: Purple/Indigo */}
//                     <div className="bg-gradient-to-br from-orange-500 to-amber-600 dark:from-purple-600 dark:to-indigo-600 p-8 rounded-[1rem] text-white flex flex-col justify-between min-h-[250px] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
//                         <div className="p-3 bg-white/20 rounded-xl w-fit">
//                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                             </svg>
//                         </div>
//                         <div className="space-y-2">
//                             <p className="text-xl font-bold leading-tight">15+ Years Service</p>
//                             <p className="text-xs opacity-70">We've built a reputation for precision, trust, and integrity—supporting organizations across industries for over a decade.</p>
//                         </div>
//                     </div>

//                     {/* Card 2 - White in both modes (already light) */}
//                     <div className="bg-white dark:bg-white p-8 rounded-[1rem] text-slate-900 dark:text-slate-900 flex flex-col justify-between min-h-[250px] shadow-2xl hover:-translate-y-2 transition-transform duration-500">
//                         <div className="p-3 text-orange-600 dark:text-blue-600 bg-orange-100 dark:bg-slate-100 rounded-xl w-fit">
//                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
//                             </svg>
//                         </div>
//                         <div className="space-y-2">
//                             <p className="text-xl font-bold leading-tight">Trusted Insight</p>
//                             <p className="text-xs text-slate-500 dark:text-slate-500">We've built a reputation for precision, trust, and integrity—supporting organizations across industries for over a decade.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </div>
//         </section>
//     );
// };

// export default HeroSection;



// import React from 'react';
// import teamImg from "../../assets/team.png"

// function HeroSection() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#c9c2d8] via-[#e4d9cf] to-[#b9b2c8] px-6 py-16">
      
//       {/* Main Container */}
//       <div className="mx-auto max-w-6xl bg-[#fffdf5] rounded-xl shadow-lg overflow-hidden">
        
//         {/* ================= HERO TEXT ================= */}
//         <section className="text-center px-6 md:px-16 py-24">
//           <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#111]">
//             From Idea to IPO, We <br /> Help You Get There
//           </h1>

//           <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
//             Expert startup advisors, investors, and operators helping founders
//             launch, validate, and scale.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-black text-white px-7 py-3 rounded-md text-sm hover:opacity-90 transition">
//               Get Your Growth Plan →
//             </button>

//             <button className="bg-pink-200 text-black px-7 py-3 rounded-md text-sm hover:bg-pink-300 transition">
//               Schedule a Meeting
//             </button>
//           </div>
//         </section>

//         {/* ================= DECORATIVE DIVIDER ================= */}
//         <div className="w-full">
//           <svg
//             viewBox="0 0 1440 120"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full"
//           >
//             <path
//               d="M0 80L60 70C120 60 240 40 360 45C480 50 600 80 720 85C840 90 960 70 1080 60C1200 50 1320 50 1380 50L1440 50V120H0V80Z"
//               fill="#e8e5f3"
//             />
//           </svg>
//         </div>

//         {/* ================= TEAM IMAGE SECTION ================= */}
//         <div className="relative bg-gradient-to-b from-[#e8e5f3] to-[#f2eaf6] pt-24 pb-40 flex justify-center">
          
//           {/* Team Image */}
//           <img
//             src={teamImg}   // 👉 use transparent PNG
//             alt="Team"
//             className="w-[85%] max-w-4xl object-contain"
//           />

//           {/* Floating Stats Card */}
//           <div className="absolute right-8 md:right-20 bottom-16 bg-white rounded-lg shadow-lg p-4 w-48">
//             <h4 className="text-lg font-semibold">$24M</h4>
//             <p className="text-xs text-gray-500">
//               Revenue generated
//             </p>

//             <div className="mt-3">
//               <div className="flex items-end gap-1 h-16">
//                 <div className="w-3 bg-purple-300 h-10" />
//                 <div className="w-3 bg-pink-300 h-14" />
//                 <div className="w-3 bg-yellow-300 h-8" />
//                 <div className="w-3 bg-indigo-300 h-12" />
//                 <div className="w-3 bg-purple-400 h-16" />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Lightbulb, Layers } from "lucide-react";

/* ================= COUNTER ================= */
const StatCounter = ({ end, suffix = "", label, subLabel }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      start >= end ? setCount(end) : setCount(Math.ceil(start));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col">
      <div className="
        text-5xl lg:text-6xl font-medium 
        bg-gradient-to-r from-orange-600 to-amber-600 
        dark:from-indigo-400 dark:to-purple-400
        bg-clip-text text-transparent
        transition-all duration-300
      ">
        {count}{suffix}
      </div>
      <div className="text-lg font-medium text-stone-800 dark:text-gray-200 transition-colors duration-300">
        {label}
      </div>
      <div className="text-lg font-medium text-stone-800 dark:text-gray-300 transition-colors duration-300">
        {subLabel}
      </div>
    </div>
  );
};

/* ================= HERO SECTION ================= */
const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="
      relative overflow-hidden transition-colors duration-300
      bg-orange-50/40 dark:bg-[#06071B]
    ">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-32">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-7">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-4xl md:text-6xl lg:text-[6.2rem] leading-[1.15] font-bold mb-10
                text-stone-900 dark:text-white
                transition-colors duration-300
              "
            >
              Clarity, Risk <br />
              Value <br />
              Assurance
            </motion.h1>

            <p className="
              max-w-xl mb-12
              text-stone-600 dark:text-gray-300
              transition-colors duration-300
            ">
              Empowering your business with precise audits, trusted insights,
              and assurance services that drive transparency and growth.
            </p>

            {/* Search */}
            <div className="
              rounded-full p-2 flex shadow-xl mb-14 max-w-xl
              bg-white dark:bg-white/5
              dark:border dark:border-white/10
            ">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Growth strategy, funding, hiring..."
                className="
                  flex-1 px-6 bg-transparent outline-none
                  text-stone-900 dark:text-white
                  placeholder:text-stone-400 dark:placeholder:text-gray-400
                  transition-colors duration-300
                "
              />
              <button className="
                px-8 py-3 rounded-full font-semibold
                bg-orange-600 hover:bg-orange-700
                dark:bg-indigo-600 dark:hover:bg-indigo-700
                text-white transition-colors duration-200
              ">
                Search
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-14">
              <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
              <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
              <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="
              rounded-2xl overflow-hidden shadow-2xl
              dark:ring-1 dark:ring-white/10
            ">
              <img
                src="./team-skyline.png"
                alt="Professional Team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="
                p-6 rounded-xl shadow-lg text-white
                bg-gradient-to-br from-orange-500 to-amber-600
                dark:from-indigo-600 dark:to-purple-600
              ">
                <p className="text-lg font-bold">15+ Years</p>
                <p className="text-xs opacity-80">Trusted Service</p>
              </div>

              <div className="
                p-6 rounded-xl shadow-lg
                bg-white border border-orange-200
                dark:bg-slate-800 dark:border-slate-700
                transition-colors duration-300
              ">
                <p className="text-lg font-bold text-stone-900 dark:text-white transition-colors duration-300">
                  Rapid Growth
                </p>
                <p className="text-xs text-stone-600 dark:text-gray-300 transition-colors duration-300">
                  Expert Guidance
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection
