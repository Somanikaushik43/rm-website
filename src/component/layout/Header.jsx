// import { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import menus from "../../data/menus.json";
// import MegaMenu from "./MegaMenu";
// import { Menu, X, ArrowRight, Phone, Sun, Moon, ChevronDown } from "lucide-react";

// const {
//   mainNav,
//   servicesMegaMenu,
//   industriesMegaMenu,
//   insightsMegaMenu,
//   aboutMegaMenu,
// } = menus;

// const gradientBgLight =
//   "bg-gradient-to-r from-brandPrimary via-brandNavy to-brandDark";
// const gradientBgDark =
//   "bg-gradient-to-r from-brandAccent via-brandGold to-yellow-500";

// export default function Header() {
//   const location = useLocation();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [desktopOpenMenu, setDesktopOpenMenu] = useState(null);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
//   const closeTimeoutRef = useRef(null);
//   const [scrolled, setScrolled] = useState(false);

//   /* ================= THEME ================= */
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("theme") || "light"
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((p) => (p === "dark" ? "light" : "dark"));

//   /* ================= SCROLL ================= */
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 80);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   /* ================= ROUTE CHANGE ================= */
//   useEffect(() => {
//     setMobileOpen(false);
//     setDesktopOpenMenu(null);
//     setMobileDropdownOpen({});
//   }, [location.pathname]);

//   /* ================= DESKTOP HOVER ================= */
//   const openMenu = (label) => {
//     if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
//     setDesktopOpenMenu(label);
//   };

//   const closeMenu = () => {
//     closeTimeoutRef.current = setTimeout(
//       () => setDesktopOpenMenu(null),
//       120
//     );
//   };

//   const closeImmediately = () => {
//     if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
//     setDesktopOpenMenu(null);
//   };

//   const getMegaData = (key) => {
//     if (key === "services") return servicesMegaMenu;
//     if (key === "industries") return industriesMegaMenu;
//     if (key === "insights") return insightsMegaMenu;
//     if (key === "about") return aboutMegaMenu;
//     return [];
//   };

//   /* ================= HEADER ================= */
//   return (
//     <>
//       {/* BACKDROP OVERLAY (IMPORTANT FIX) */}
//       <AnimatePresence>
//         {desktopOpenMenu && (
//           <motion.div
//             key="menu-backdrop"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-[90] dark:bg-black/50 bg-black/50 backdrop-blur-md"
//             onMouseEnter={closeImmediately}
//           />
//         )}
//       </AnimatePresence>

//       <header
//         className={`fixed top-0 left-0 w-full z-[100] transition-all ${
//           scrolled
//             ? "bg-surfaceLight/95 dark:bg-surfaceDark/95 backdrop-blur border-b"
//             : "bg-surfaceLight dark:bg-surfaceDark border-b"
//         } border-borderLight dark:border-borderDark`}
//       >
//         <div className="max-w-[1280px] mx-auto px-6">
//           <div className="flex items-center justify-between py-4">
//             {/* LOGO */}
//             <Link to="/" className="hover:scale-105 transition-transform">
//               <img
//                 src={theme === "dark" ? "/riskman-logo-white.svg" : "/rm.png"}
//                 className="h-8 md:h-10"
//                 alt="RiskMan"
//               />
//             </Link>

//             {/* DESKTOP NAV */}
//             <nav className="hidden md:flex items-center gap-10">
//               {mainNav.map((item) => {
//                 /* ---------- SIMPLE LINK ---------- */
//                 if (item.type === "link") {
//                   return (
//                     <NavLink
//                       key={item.label}
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `text-sm font-medium transition-colors ${
//                           isActive
//                             ? "text-brandPrimary dark:text-brandAccent"
//                             : "text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent"
//                         }`
//                       }
//                     >
//                       {item.label}
//                     </NavLink>
//                   );
//                 }

//                 /* ---------- DROPDOWN (KEEP CHEVRON) ---------- */
//                 if (item.type === "dropdown") {
//                   return (
//                     <div
//                       key={item.label}
//                       className="relative"
//                       onMouseEnter={() => openMenu(item.label)}
//                       onMouseLeave={closeMenu}
//                     >
//                       <button className="flex items-center gap-1 text-sm font-medium text-brandDark dark:text-brandLight hover:text-brandPrimary">
//                         {item.label}
//                         <ChevronDown size={14} />
//                       </button>

//                       <AnimatePresence>
//                         {desktopOpenMenu === item.label && (
//                           <motion.div
//                             initial={{ opacity: 0, y: 8 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: 8 }}
//                             className="absolute right-0 mt-3 w-56 bg-surfaceLight dark:bg-surfaceDark border rounded-xl shadow-xl z-[100]"
//                           >
//                             {item.items.map((sub) => (
//                               <Link
//                                 key={sub.label}
//                                 to={sub.path}
//                                 onClick={closeImmediately}
//                                 className="block px-4 py-2.5 text-sm hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
//                               >
//                                 {sub.label}
//                               </Link>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 }

//                 /* ---------- MEGA MENU (NO CHEVRON) ---------- */
//                 if (item.type === "mega") {
//                   const isActive =
//                     desktopOpenMenu === item.label ||
//                     location.pathname.startsWith(item.path);

//                   return (
//                     <div
//                       key={item.label}
//                       className="relative"
//                       onMouseEnter={() => openMenu(item.label)}
//                       onMouseLeave={closeMenu}
//                     >
//                       <button
//                         className={`relative text-sm font-medium ${
//                           isActive
//                             ? "text-brandPrimary dark:text-brandAccent"
//                             : "text-brandDark dark:text-brandLight hover:text-brandPrimary"
//                         }`}
//                       >
//                         {item.label}
//                         {/* RestoPro style underline */}
//                         <span
//                           className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-transform duration-300 ${
//                             isActive
//                               ? "bg-gradient-to-r from-brandPrimary to-brandAccent scale-x-100"
//                               : "scale-x-0"
//                           }`}
//                         />
//                       </button>

//                       <AnimatePresence>
//                         {desktopOpenMenu === item.label && (
//                           <MegaMenu
//                             sections={getMegaData(item.key)}
//                             parentLabel={item.label}
//                             onNavigate={closeImmediately}
//                           />
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 }

//                 return null;
//               })}
//             </nav>

//             {/* CTA + THEME */}
//             <div className="hidden md:flex items-center gap-3">
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg hover:bg-brandPrimary/10"
//               >
//                 {theme === "dark" ? (
//                   <Sun size={18} className="text-brandAccent" />
//                 ) : (
//                   <Moon size={18} className="text-brandNavy" />
//                 )}
//               </button>

//               <Link
//                 to="/contact"
//                 className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition ${
//                   theme === "dark"
//                     ? `${gradientBgDark} text-brandDark`
//                     : `${gradientBgLight} text-white`
//                 }`}
//               >
//                 <Phone size={16} />
//                 Get Started
//                 <ArrowRight size={14} />
//               </Link>
//             </div>

//             {/* MOBILE */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="md:hidden p-2 rounded-lg"
//             >
//               {mobileOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }


// src/components/layout/Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menus from "../../data/menus.json";
import MegaMenu from "./MegaMenu";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

const {
  mainNav,
  servicesMegaMenu,
  industriesMegaMenu,
  insightsMegaMenu,
  aboutMegaMenu,
} = menus;

const gradientBgLight =
  "bg-gradient-to-r from-brandPrimary via-brandNavy to-brandDark";
const gradientBgDark =
  "bg-gradient-to-r from-brandAccent via-brandGold to-yellow-500";

export default function Header() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [desktopOpenMenu, setDesktopOpenMenu] = useState(null);
  const closeTimeoutRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  /* ================= THEME ================= */
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= ROUTE CHANGE ================= */
  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpenMenu(null);
    setMobileDropdownOpen({});
  }, [location.pathname]);

  /* ================= DESKTOP HOVER ================= */
  const openMenu = (label) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDesktopOpenMenu(label);
  };

  const closeMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDesktopOpenMenu(null);
    }, 120);
  };

  const closeImmediately = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDesktopOpenMenu(null);
  };

  const getMegaData = (key) => {
    if (key === "services") return servicesMegaMenu;
    if (key === "industries") return industriesMegaMenu;
    if (key === "insights") return insightsMegaMenu;
    if (key === "about") return aboutMegaMenu;
    return [];
  };

  return (
    <>
      {/* DESKTOP BACKDROP */}
      <AnimatePresence>
        {desktopOpenMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-bgLight dark:bg-bgDark backdrop-blur-md"
            onMouseEnter={closeImmediately}
          />
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all ${
          scrolled
            ? "bg-surfaceLight/95 dark:bg-[#050b1f]/95 backdrop-blur border-b"
            : "bg-surfaceLight dark:bg-[#050b1f] border-b"
        } border-borderLight dark:border-borderDark`}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <Link to="/">
              <img
                src={theme === "dark" ? "/riskman-logo-white.svg" : "/rm.png"}
                className="h-8 md:h-10"
                alt="RiskMan"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10">
              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className={({ isActive }) =>
                        `text-sm font-medium ${
                          isActive
                            ? "text-brandPrimary dark:text-brandAccent"
                            : "text-brandDark dark:text-gray-200 hover:text-brandPrimary"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                if (item.type === "mega") {
                  const isActive =
                    location.pathname.startsWith(item.path);

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={closeMenu}
                    >
                      <NavLink
                        to={item.path}
                        className={`relative text-sm font-medium ${
                          isActive
                            ? "text-brandPrimary dark:text-brandAccent"
                            : "text-brandDark dark:text-gray-200 hover:text-brandPrimary"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 right-0 h-[2px] transition-transform duration-300 ${
                            isActive
                              ? "scale-x-100 bg-gradient-to-r from-brandPrimary to-brandAccent"
                              : "scale-x-0"
                          }`}
                        />
                      </NavLink>

                      <AnimatePresence>
                        {desktopOpenMenu === item.label && (
                          <MegaMenu
                            sections={getMegaData(item.key)}
                            parentLabel={item.label}
                            onNavigate={closeImmediately}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return null;
              })}
            </nav>

            {/* DESKTOP CTA + THEME */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="w-10 h-10 rounded-full flex items-center justify-center
                           bg-white/70 dark:bg-black/40
                           "
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-brandAccent" />
                ) : (
                  <Moon size={18} className="text-brandNavy" />
                )}
              </button>

              <Link
                to="/contact"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold ${
                  theme === "dark"
                    ? `${gradientBgDark} text-brandDark`
                    : `${gradientBgLight} text-white`
                }`}
              >
                <Phone size={16} />
                Get Started
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-gradient-to-b from-[#050b1f] to-[#020617] md:hidden pt-[80px] overflow-y-auto"
          >
            <div className="px-6 pb-10 space-y-6 text-white">

              {/* MOBILE THEME TOGGLE */}
              <div className="flex justify-end">
                <button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             bg-brandDark/70 ring-1 ring-brandAccent/30"
                >
                  {theme === "dark" ? (
                    <Sun size={18} className="text-brandAccent" />
                  ) : (
                    <Moon size={18} className="text-white" />
                  )}
                </button>
              </div>

              {mainNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block text-lg font-semibold text-white"
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                if (item.type === "mega") {
                  const open = mobileDropdownOpen[item.label];
                  const sections = getMegaData(item.key);

                  return (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-white">
                          {item.label}
                        </span>
                        <button
                          onClick={() =>
                            setMobileDropdownOpen((p) => ({
                              ...p,
                              [item.label]: !p[item.label],
                            }))
                          }
                        >
                          <ChevronDown
                            className={`text-white transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {open && (
                        <div className="pl-4 space-y-4">
                          {sections.map((section, idx) => (
                            <div key={idx}>
                              <p className="text-sm font-semibold text-brandAccent mb-1">
                                {section.title}
                              </p>
                              {section.items.map((sub, i) => (
                                <NavLink
                                  key={i}
                                  to={sub.path}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-sm text-gray-200 hover:text-brandAccent"
                                >
                                  {sub.label}
                                </NavLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return null;
              })}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-8 text-center py-3 rounded-full font-semibold text-white bg-gradient-to-r from-brandPrimary to-brandAccent"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


