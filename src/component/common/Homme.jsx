// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ContactDialog } from "@/components/ContactDialog";

// // Reusable Counter Component
// const StatCounter = ({ end, suffix = "", label, subLabel }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = end / (duration / 16);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, 16);
//     return () => clearInterval(timer);
//   }, [end]);

//   return (
//     <div className="flex flex-col pl-4">
//       <div className="mb-2 font-sans text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:text-white lg:text-6xl">
//         {count}{suffix}
//       </div>
//       <div className="text-lg font-medium leading-tight text-stone-800 dark:text-white">
//         {label}
//       </div>
//       <div className="text-lg font-medium leading-tight text-stone-800 dark:text-white">
//         {subLabel}
//       </div>
//     </div>
//   );
// };

// export default function Home() {
//   const [dialogState, setDialogState] = useState<{
//     open: boolean;
//     type: "growth_plan" | "meeting";
//   }>({
//     open: false,
//     type: "growth_plan",
//   });

//   const openDialog = (type: "growth_plan" | "meeting") => {
//     setDialogState({ open: true, type });
//   };

//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <div className="min-h-screen bg-orange-50/40 dark:bg-[#06071B] font-sans overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="relative w-full min-h-screen overflow-hidden">
//         {/* Content Container with max-width */}
//         <div className="relative pt-16 md:pt-24 pb-16 md:pb-12 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-8 items-start min-h-screen">
//           {/* Decorative Background Icons */}
//           <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
//             <div className="absolute w-32 h-32 border-2 rounded-full top-20 right-20 border-orange-400/40 dark:border-indigo-500/30"></div>
//             <div className="absolute w-40 h-40 border-2 rounded-full top-1/2 -left-10 border-amber-400/30 dark:border-blue-500/20"></div>
//             <div className="absolute border-2 rounded-full bottom-32 left-1/4 w-28 h-28 border-orange-300/35 dark:border-purple-500/25"></div>
//             <div className="absolute w-24 h-24 border-2 rounded-full top-32 left-1/3 border-amber-300/30 dark:border-indigo-400/20"></div>
//             <div className="absolute border-2 rounded-full top-2/3 right-1/4 w-36 h-36 border-orange-300/25 dark:border-blue-400/15"></div>
//             <div className="absolute w-32 h-32 border-2 rounded-full top-1/3 right-10 border-amber-400/30 dark:border-purple-400/20"></div>
//           </div>

//           {/* Left Column */}
//           <div className="relative z-20 flex flex-col w-full p-0 lg:col-span-7 lg:pl-10">
//             {/* Top Left Floating Icon */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="absolute -left-8 sm:left-0 -top-6 sm:-top-10 items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-white dark:bg-[#1a1a2e] rounded-2xl border border-orange-200 dark:border-white/10 shadow-2xl flex"
//             >
//               <svg
//                 className="w-5 h-5 text-orange-600 dark:text-white sm:w-6 md:w-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                 />
//               </svg>
//             </motion.div>

//             {/* Floating Icon (Pie Chart) */}
//             <motion.div
//               animate={{ y: [0, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="absolute left-16 sm:left-24 md:left-40 lg:left-[450px] -top-4 sm:-top-6 md:-top-8 items-center justify-center w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-white dark:bg-[#1a1a2e] rounded-2xl border border-orange-200 dark:border-white/10 shadow-2xl flex z-20"
//             >
//               <svg
//                 className="w-5 h-5 text-orange-600 dark:text-white sm:w-6 md:w-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
//                 />
//               </svg>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-bold text-stone-900 dark:text-white leading-tight md:leading-[1.05] mb-6 md:mb-12 tracking-tight"
//             >
//               From Idea to IPO, We <br />
//               <span className="text-stone-900 dark:text-white">Help You Get</span> <br />
//               <span className="text-stone-900 dark:text-white">There</span>
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="max-w-2xl mb-8 text-sm font-light leading-relaxed text-stone-600 dark:text-gray-300 md:mb-12 sm:text-base md:text-lg"
//             >
//               Expert startup advisors, investors, and operators helping founders launch, validate, and scale.
//             </motion.p>

//             {/* Search Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative w-full mb-8 md:mb-12"
//             >
//               <div className="bg-white dark:bg-white rounded-full p-1.5 sm:p-2 flex items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full relative z-20 h-12 sm:h-14 md:h-[4.5rem]">
//                 <input
//                   type="text"
//                   placeholder="Growth strategy, funding, hiring..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="flex-1 h-full min-w-0 px-4 text-xs font-medium text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none sm:px-6 sm:text-base md:text-lg"
//                 />
//                 <button
//                   onClick={() => openDialog("growth_plan")}
//                   className="bg-orange-600 hover:bg-orange-700 dark:bg-[#5a5afc] dark:hover:bg-[#4a4af0] text-white px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-colors text-xs sm:text-sm md:text-lg h-full whitespace-nowrap shadow-md flex-shrink-0"
//                 >
//                   Search
//                 </button>
//               </div>
//             </motion.div>

//             {/* Tags Row */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="relative z-30 flex flex-wrap items-center gap-2 mb-16 sm:gap-3 md:gap-4 md:mb-24"
//             >
//               <div className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-white dark:bg-[#0a0a2e] rounded-2xl border border-orange-200 dark:border-white/10 shadow-lg shrink-0">
//                 <span className="text-xl font-bold text-orange-600 dark:text-white sm:text-2xl">
//                   S
//                 </span>
//               </div>

//               {["Growth Strategy", "Launch Support", "Scale Operations"].map((tag) => (
//                 <div
//                   key={tag}
//                   className="flex items-center gap-2 px-2 sm:px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-[#1a1a3a] border border-orange-200 dark:border-white/10 rounded-full text-stone-700 dark:text-gray-200 text-xs sm:text-sm cursor-pointer hover:bg-orange-50 dark:hover:bg-[#252545] transition-colors shadow-lg whitespace-nowrap"
//                 >
//                   <span className="text-xs text-orange-400 dark:text-gray-400">✕</span>
//                   <span>{tag}</span>
//                 </div>
//               ))}
//             </motion.div>

//             {/* Stats Numbers */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="grid grid-cols-3 gap-12 pb-10 mt-auto"
//             >
//               <StatCounter end={500} suffix="+" label="Founders" subLabel="Supported" />
//               <StatCounter end={2} suffix="B+" label="Capital" subLabel="Deployed" />
//               <StatCounter end={95} suffix="%" label="Success" subLabel="Rate" />
//             </motion.div>
//           </div>

//           {/* Right Column: Image and Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative flex flex-col items-center lg:col-span-5"
//           >
//             {/* Floating Icon: Grid */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="absolute -left-20 bottom-40 p-5 bg-white/90 dark:bg-white/5 border border-orange-200 dark:border-white/10 rounded-2xl text-orange-600 dark:text-slate-400 backdrop-blur-sm hidden xl:block"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
//                 />
//               </svg>
//             </motion.div>

//             {/* Main Image - Transparent */}
//             <div className="relative w-full mb-5">
//               <div className="rounded-[1rem] overflow-hidden">
//                 <img
//                   src="/images/team-skyline.png"
//                   alt="Professional Team"
//                   className="w-full h-auto rounded-[1rem] object-contain"
//                 />
//               </div>
//             </div>

//             {/* Cards Grid */}
//             <div className="grid w-full grid-cols-2 gap-4">
//               {/* Card 1 - Orange/Amber Gradient */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="bg-gradient-to-br from-orange-500 to-amber-600 dark:from-purple-600 dark:to-indigo-600 p-8 rounded-[1rem] text-white flex flex-col justify-between min-h-[250px] shadow-2xl hover:-translate-y-2 transition-transform duration-500"
//               >
//                 <div className="p-3 bg-white/20 rounded-xl w-fit">
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="text-xl font-bold leading-tight">15+ Years Service</p>
//                   <p className="text-xs opacity-70">
//                     We've built a reputation for precision, trust, and integrity.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Card 2 - White with gradient */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a3a] dark:to-[#0f0f25] p-8 rounded-[1rem] border border-orange-200 dark:border-purple-500/30 flex flex-col justify-between min-h-[250px] shadow-2xl hover:-translate-y-2 transition-transform duration-500"
//               >
//                 <div className="p-3 bg-orange-100 dark:bg-purple-500/20 rounded-xl w-fit">
//                   <svg
//                     className="w-6 h-6 text-orange-600 dark:text-purple-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="text-xl font-bold leading-tight text-stone-900 dark:text-white">
//                     Rapid Growth
//                   </p>
//                   <p className="text-xs text-stone-600 dark:text-gray-400 opacity-70">
//                     Accelerate your startup with expert guidance.
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Decorative Divider */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="w-full"
//       >
//         <svg
//           viewBox="0 0 1440 120"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full"
//         >
//           <path
//             d="M0 80L60 70C120 60 240 40 360 45C480 50 600 80 720 85C840 90 960 70 1080 60C1200 50 1320 50 1380 50L1440 50V120H0V80Z"
//             fill="#e8e5f3"
//             className="dark:fill-[#0f0f25]"
//           />
//         </svg>
//       </motion.div>

//       {/* Team Section */}
//       <section className="relative bg-gradient-to-b from-[#e8e5f3] to-[#f2eaf6] dark:from-[#0f0f25] dark:to-[#06071B] pt-24 pb-40">
//         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative flex justify-center"
//           >
//             {/* Team Image */}
//             <img
//               src="/images/team-skyline.png"
//               alt="Team"
//               className="w-[85%] max-w-4xl object-contain"
//             />

//             {/* Floating Stats Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="absolute right-4 md:right-8 lg:right-20 bottom-16 md:bottom-20 bg-white dark:bg-[#1a1a3a] rounded-lg shadow-2xl p-6 w-56"
//             >
//               <h4 className="text-2xl font-bold text-stone-900 dark:text-white">
//                 $24M
//               </h4>
//               <p className="text-xs text-stone-600 dark:text-gray-400 mt-1">
//                 Revenue generated in total
//               </p>

//               <div className="mt-6">
//                 <div className="flex items-end gap-1.5 h-20 justify-center">
//                   <motion.div
//                     initial={{ height: 0 }}
//                     whileInView={{ height: "40px" }}
//                     transition={{ delay: 0.5 }}
//                     className="w-3 bg-purple-300 dark:bg-purple-400 rounded-t"
//                   />
//                   <motion.div
//                     initial={{ height: 0 }}
//                     whileInView={{ height: "56px" }}
//                     transition={{ delay: 0.6 }}
//                     className="w-3 bg-pink-300 dark:bg-pink-400 rounded-t"
//                   />
//                   <motion.div
//                     initial={{ height: 0 }}
//                     whileInView={{ height: "32px" }}
//                     transition={{ delay: 0.7 }}
//                     className="w-3 bg-yellow-300 dark:bg-yellow-400 rounded-t"
//                   />
//                   <motion.div
//                     initial={{ height: 0 }}
//                     whileInView={{ height: "48px" }}
//                     transition={{ delay: 0.8 }}
//                     className="w-3 bg-indigo-300 dark:bg-indigo-400 rounded-t"
//                   />
//                   <motion.div
//                     initial={{ height: 0 }}
//                     whileInView={{ height: "64px" }}
//                     transition={{ delay: 0.9 }}
//                     className="w-3 bg-purple-400 dark:bg-purple-500 rounded-t"
//                   />
//                 </div>
//               </div>

//               {/* Small labels */}
//               <div className="mt-4 text-xs text-stone-600 dark:text-gray-400 space-y-1">
//                 <div className="flex justify-between">
//                   <span>Spending</span>
//                   <span className="font-semibold">$8M</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Allocation</span>
//                   <span className="font-semibold">$12M</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Revenue</span>
//                   <span className="font-semibold">$24M</span>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Feature Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid md:grid-cols-3 gap-8 mt-32"
//           >
//             {[
//               {
//                 title: "Strategic Planning",
//                 desc: "We help you map out the critical path to product-market fit.",
//                 icon: "📋",
//               },
//               {
//                 title: "Capital Allocation",
//                 desc: "Smart financial modeling to extend your runway.",
//                 icon: "💰",
//               },
//               {
//                 title: "Network Access",
//                 desc: "Direct intros to top-tier VCs and strategic partners.",
//                 icon: "🤝",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 + i * 0.1 }}
//                 className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="font-serif text-xl font-bold mb-2 text-stone-900 dark:text-white">
//                   {item.title}
//                 </h3>
//                 <p className="text-stone-600 dark:text-gray-300 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white dark:bg-[#0a0a2e] py-8 border-t border-orange-200 dark:border-white/10">
//         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 text-center text-sm text-stone-600 dark:text-gray-400">
//           © {new Date().getFullYear()} Growth Plan Advisors. All rights reserved.
//         </div>
//       </footer>

//       {/* Action Dialog */}
//       <ContactDialog
//         open={dialogState.open}
//         onOpenChange={(open) => setDialogState((prev) => ({ ...prev, open }))}
//         type={dialogState.type}
//       />
//     </div>
//   );
// }
