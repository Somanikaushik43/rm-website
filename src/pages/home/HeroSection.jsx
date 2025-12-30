// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle2, Shield, Lightbulb, Layers } from "lucide-react";

// /* ================= COUNTER ================= */
// const StatCounter = ({ end, suffix = "", label, subLabel }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = end / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;
//       start >= end ? setCount(end) : setCount(Math.ceil(start));
//       if (start >= end) clearInterval(timer);
//     }, 16);

//     return () => clearInterval(timer);
//   }, [end]);

//   return (
//     <div className="flex flex-col gap-2">
//       <div className="
//         text-4xl lg:text-5xl xl:text-6xl font-bold
//         text-brandGold dark:text-brandAccent
//         transition-all duration-300
//       ">
//         {count}{suffix}
//       </div>
//       <div className="text-base lg:text-lg font-semibold text-brandDark dark:text-white transition-colors duration-300">
//         {label}
//       </div>
//       <div className="text-sm lg:text-base font-medium text-brandNavy dark:text-gray-400 transition-colors duration-300">
//         {subLabel}
//       </div>
//     </div>
//   );
// };

// /* ================= HERO SECTION ================= */
// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <section className="
//       relative overflow-hidden transition-colors duration-300
//       bg-bgLight dark:bg-bgDark
//     ">
//       <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-32">

//         <div className="grid lg:grid-cols-12 gap-16 items-center">

//           {/* ================= LEFT CONTENT ================= */}
//           <div className="lg:col-span-7">

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="
//                 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-bold mb-6 lg:mb-10
//                 text-brandDark dark:text-white
//                 transition-colors duration-300
//               "
//             >
//               Clarity, Risk <br />
//               Value <br />
//               Assurance
//             </motion.h1>

//             <p className="
//               max-w-xl mb-8 lg:mb-12 text-base lg:text-lg
//               text-brandNavy dark:text-gray-300
//               transition-colors duration-300
//             ">
//               Empowering your business with precise audits, trusted insights,
//               and assurance services that drive transparency and growth.
//             </p>

//             {/* Search */}
//             <div className="
//               rounded-full p-2 flex shadow-xl mb-14 max-w-xl
//               bg-surfaceLight dark:bg-surfaceDark
//               dark:border dark:border-borderDark
//             ">
//               <input
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Growth strategy, funding, hiring..."
//                 className="
//                   flex-1 px-6 bg-transparent outline-none
//                   text-brandDark dark:text-white
//                   placeholder:text-brandNavy/60 dark:placeholder:text-gray-400
//                   transition-colors duration-300
//                 "
//               />
//               <button className="
//                 px-8 py-3 rounded-full font-semibold
//                 bg-brandDark hover:bg-brandPrimary
//                 dark:bg-brandAccent dark:hover:bg-brandGold
//                 text-white dark:text-brandDark 
//                 shadow-lg dark:shadow-brandAccent/20
//                 transition-all duration-200
//               ">
//                 Search
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 lg:gap-14">
//               <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
//               <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
//               <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
//             </div>
//           </div>

//           {/* ================= RIGHT IMAGE ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="lg:col-span-5 relative"
//           >
//             <div className="
//               rounded-2xl overflow-hidden shadow-2xl
//               dark:ring-1 dark:ring-borderDark
//             ">
//               <img
//                 src="./team-skyline.png"
//                 alt="Professional Team"
//                 className="w-full h-auto object-cover"
//               />
//             </div>

//             {/* Floating Cards */}
//             <div className="grid grid-cols-2 gap-4 mt-6">
//               <div className="
//                 p-6 rounded-xl shadow-lg
//                 bg-brandDark text-white
//                 dark:bg-brandAccent dark:text-brandDark
//                 transition-colors duration-300
//               ">
//                 <p className="text-lg font-bold">15+ Years</p>
//                 <p className="text-xs opacity-80">Trusted Service</p>
//               </div>

//               <div className="
//                 p-6 rounded-xl shadow-lg
//                 bg-surfaceLight border border-borderLight
//                 dark:bg-surfaceDark dark:border-borderDark
//                 transition-colors duration-300
//               ">
//                 <p className="text-lg font-bold text-brandDark dark:text-white transition-colors duration-300">
//                   Rapid Growth
//                 </p>
//                 <p className="text-xs text-brandNavy dark:text-gray-300 transition-colors duration-300">
//                   Expert Guidance
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection



import React, { useEffect, useState } from "react";
import { Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

/* ================= COUNTER ================= */
const StatCounter = ({ end, suffix = "", label, subLabel }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col gap-1">
      <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-yellow-600 dark:text-yellow-400 transition-all duration-300">
        {count}{suffix}
      </div>
      <div className="text-sm lg:text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider transition-colors duration-300">
        {label}
      </div>
      <div className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-400 transition-colors duration-300">
        {subLabel}
      </div>
    </div>
  );
};

/* ================= HERO SECTION ================= */
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-bgLight dark:bg-bgDark pt-16 pb-10 lg:pt-24 lg:pb-16 transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gray-900/10 dark:bg-gray-900/20 blur-[120px] rounded-full opacity-50 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-400/10 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10 text-sm font-bold text-gray-900/80 dark:text-white/80 backdrop-blur-sm transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <span className="text-yellow-600 dark:text-yellow-400 text-lg">✦</span>
              Empowering Business Growth
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-extrabold mb-8 text-brandDark dark:text-brandLight tracking-tight transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Clarity, Risk <br />
              Value <br />
              & <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Assurance</span>
            </h1>

            <p className={`max-w-xl mb-12 text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              Empowering your business with precise audits, trusted insights, 
              and assurance services that drive transparency and growth.
            </p>

            <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {/* <button className="px-10 py-4 rounded-xl font-bold text-white bg-brandDark
                dark:bg-brandAccent dark:hover:bg-brandGold text-white dark:text-brandDark shadow-lg dark:shadow-brandAccent/20 transition-all duration-300 hover:scale-105 active:scale-95">
                Get Started
              </button>
              <button className="px-10 py-4 rounded-xl font-bold text-black bg-brandLight  border border-borderLight dark:border-borderDark transition-all duration-300">
                Learn More
              </button> */}

              <Link to="/contact"
                className="px-10 py-4 rounded-xl font-bold text-white bg-brandDark dark:bg-brandAccent dark:text-brandDark shadow-lg dark:shadow-brandAccent/20 transition-all duration-300 hover:scale-105 hover:bg-brandNavy dark:hover:bg-brandGold active:scale-95 inline-block"
              >
                Get Started
              </Link>
              <Link to="/about" 
                className="px-10 py-4 rounded-xl font-bold text-brandDark dark:text-white bg-brandLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 inline-block"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-8 lg:gap-12 border-t border-gray-300 dark:border-gray-700 pt-10 transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <StatCounter end={15} suffix="+" label="Audit" subLabel="Excellence" />
              <StatCounter end={98} suffix="%" label="Client" subLabel="Loyalty" />
              <StatCounter end={25} suffix="+" label="Certified" subLabel="Auditors" />
            </div>
          </div>

          {/* ================= RIGHT IMAGE WITH FLOATING CARDS ================= */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-borderLight dark:border-borderDark group">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                alt="Professional Audit Team"
                className="w-full h-auto aspect-[4/3] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
            </div>

            {/* Floating Card 1 - Top Right (Dashboard) */}
            <div 
              className="absolute top-6 right-6 p-6 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                animation: 'floatCard1 3s ease-in-out infinite'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-600/20 dark:bg-yellow-400/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Trusted Verification</p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-semibold">ISO Certified Standards</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Left (Growth Stats) */}
            <div 
              className="absolute bottom-6 left-6 p-6 rounded-2xl bg-gradient-to-br from-yellow-600 to-yellow-500 text-white shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                animation: 'floatCard2 3.5s ease-in-out infinite'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold">15+ Years</p>
                  <p className="text-xs opacity-90 font-medium">Trusted Service</p>
                </div>
              </div>
            </div>

            {/* Background Blur Elements */}
            <div 
              className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400/20 blur-3xl rounded-full"
              style={{
                animation: 'floatUp 4s ease-in-out infinite'
              }}
            />
            <div 
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gray-900/20 blur-3xl rounded-full"
              style={{
                animation: 'floatDown 5s ease-in-out infinite'
              }}
            />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        @keyframes floatCard1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-8px) translateX(3px); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(8px) translateX(-3px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;