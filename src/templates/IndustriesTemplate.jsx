// src/pages/industries/IndustriesTemplate.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaFileAlt,
  FaChevronRight,
  FaHome,
  FaShieldAlt,
  FaChartLine,
  FaBriefcase,
  FaGlobe,
  FaCogs,
  FaUserCheck,
  FaCreditCard,
  FaIndustry,
  FaUserTie,
  FaDesktop,
  FaTruck,
  FaTrophy,
  FaAward,
  FaLeaf,
  FaLock,
  FaSun,
  FaFilm,
  FaCode,
  FaCompass,
  FaDatabase,
  FaBan,


} from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

/* =======================
   ICON MAP FOR WHY PARTNER
======================= */
const iconMap = {
  Briefcase: FaBriefcase,
  Globe: FaGlobe,
  Settings: FaCogs,
  UserCheck: FaUserCheck,
  Shield: FaShieldAlt,
  Users: FaUsers,
  Scale: FaCheckCircle,

  // Automotive / Ecommerce / Industries
  Industry: FaIndustry,
  Global: FaGlobe,
  Business: FaBriefcase,
  User: FaUserTie,

  // 🔥 E-COMMERCE SPECIFIC
  CreditCard: FaCreditCard,

  //HealthCare specific
  FileText: FaFileAlt,
  Monitor: FaDesktop,

  //Reatil Consumer
  Truck: FaTruck,

  //It consulting
  Trophy: FaTrophy,

  //manufacturing
  Award: FaAward,
  Leaf: FaLeaf,

  //travel-logistics
  Lock: FaLock,

  //energy utilities
  Sun: FaSun,

  //media 
  Film: FaFilm,
  Code: FaCode,
  Database: FaDatabase,
  Compass: FaCompass,
  ShieldOff: FaBan,
  Activity: FaChartLine,
};

/* =======================
   MAIN COMPONENT
======================= */
export default function IndustriesTemplate() {
  const { id } = useParams();
  const [industry, setIndustry] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJSON() {
      try {
        setLoading(true);
        const data = await import(`../data/industries/${id}.json`);
        setIndustry(data.default);
        setLoading(false);
      } catch (e) {
        console.error("JSON not found for service:", id);
        setError(true);
        setLoading(false);
      }
    }
    loadJSON();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bgLight dark:bg-bgDark flex items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 border-4 border-brandPrimary dark:border-brandAccent border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bgLight dark:bg-bgDark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6 text-center"
        >
          <div className="text-6xl text-brandPrimary dark:text-brandAccent">⚠️</div>
          <h1 className="text-3xl font-bold text-brandDark dark:text-white">Service Not Found</h1>
          <p className="text-brandNavy dark:text-gray-400">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaHome /> Back to Services
          </Link>
        </motion.div>
      </div>
    );
  }

  if (!industry) return null;

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-brandDark dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[50vh] flex items-center justify-center section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        {industry.headerImage && (
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={industry.headerImage}
                alt={industry.title}
                className="object-cover w-full h-full grayscale"
              />
            </motion.div>
            <div className="absolute inset-0 bg-bgLight/80 dark:bg-bgDark/80" />
          </div>
        )}

        <motion.div
          className="bg-glow-blue absolute top-[-200px] right-[-100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="container relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-brandPrimary dark:text-brandAccent text-lg mb-4 tracking-wide uppercase font-semibold"
            >
              {industry.heroTagline || "Industry Expertise"}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white"
            >
              <span className="text-brandPrimary dark:text-brandAccent">
                {industry.title}
              </span>
            </motion.h1>

            {/* Stats Display */}
            {industry.stats && (
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="px-6 py-3 border rounded-full bg-surfaceLight/50 dark:bg-surfaceDark/50 backdrop-blur-sm border-borderLight dark:border-borderDark text-brandDark dark:text-white">
                  <span className="text-3xl font-bold text-brandPrimary dark:text-brandAccent">
                    {industry.stats.value}
                  </span>
                  <span className="ml-2 text-sm text-brandNavy dark:text-gray-400">
                    {industry.stats.label}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative section-padding isolate">
        <div className="container max-w-6xl mx-auto">
          {/* ================= INTRODUCTION ================= */}
          {industry.introduction && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaLightbulb className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  {industry.introduction.title || (
                    <>
                      Industry <span className="text-brandPrimary dark:text-brandAccent">Overview</span>
                    </>
                  )}
                </h2>
              </div>

              <p className="text-lg text-brandNavy dark:text-gray-400 leading-relaxed mb-8">
                {industry.introduction.content || industry.introduction}
              </p>

              {/* Sub Image if available */}
              {industry.introduction.subImage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 overflow-hidden rounded-2xl"
                >
                  <img
                    src={industry.introduction.subImage}
                    alt={industry.introduction.title}
                    className="object-cover w-full h-auto"
                  />
                </motion.div>
              )}
            </motion.section>
          )}

          {/* ================= KEY CHALLENGES ================= */}
          {industry.keyChallenges && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaShieldAlt className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  {industry.keyChallenges.title || (
                    <>
                      Key <span className="text-brandPrimary dark:text-brandAccent">Challenges</span>
                    </>
                  )}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(industry.keyChallenges.list || industry.keyChallenges).map((item, idx) => {
                  const IconComponent = item.icon ? iconMap[item.icon] : FaCheckCircle;
                  return (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl p-6 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300 rounded-3xl" />

                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-3">
                          <IconComponent className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" />
                          {item.title && (
                            <h3 className="text-lg font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                              {item.title}
                            </h3>
                          )}
                        </div>
                        <p className="text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 leading-relaxed ml-6 transition-colors duration-300">
                          {item.text || item.desc || item}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* ================= SOLUTIONS ================= */}
          {industry.solutions && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaChartLine className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  {industry.solutions.title || (
                    <>
                      Our <span className="text-brandPrimary dark:text-brandAccent">Solutions</span>
                    </>
                  )}
                </h2>
              </div>

              <div className="space-y-6">
                {(industry.solutions.list || industry.solutions).map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="block p-6 rounded-3xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300" />
                        <div className="flex items-start gap-4 relative z-10">
                          {item.number && (
                            <span className="flex-shrink-0 text-3xl font-bold text-brandPrimary dark:text-brandAccent">
                              {item.number}
                            </span>
                          )}
                          <div className="flex-1">
                            <h3 className="mb-2 text-xl font-semibold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                              {item.summary || item.desc}
                            </p>
                          </div>
                          <div className="text-brandPrimary dark:text-brandAccent group-hover:text-brandDark dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                            <FaArrowRight />
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="p-6 rounded-3xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent transition-all duration-300 group">
                        <div className="flex gap-4">
                          {item.number && (
                            <span className="text-3xl font-bold text-brandPrimary dark:text-brandAccent">
                              {item.number}
                            </span>
                          )}
                          <div>
                            <h3 className="mb-2 text-xl font-semibold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">{item.title}</h3>
                            <p className="text-brandNavy dark:text-gray-400 leading-relaxed transition-colors duration-300">
                              {item.summary || item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= WHY PARTNER ================= */}
          {industry.whyPartner && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaUsers className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  {industry.whyPartner.title || (
                    <>
                      Why <span className="text-brandPrimary dark:text-brandAccent">Partner with RiskMan</span>
                    </>
                  )}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {industry.whyPartner.usps.map((item, idx) => {
                  const IconComponent = item.icon ? iconMap[item.icon] : FaBriefcase;
                  return (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl p-6 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300 rounded-3xl" />

                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 flex items-center justify-center mx-auto mb-4 text-brandPrimary dark:text-brandAccent group-hover:bg-brandPrimary dark:group-hover:bg-brandAccent group-hover:text-white dark:group-hover:text-brandDark transition-all duration-300">
                          <IconComponent className="text-2xl" />
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-sm text-brandNavy dark:text-gray-400 leading-relaxed group-hover:text-brandNavy/80 dark:group-hover:text-white/80 transition-colors duration-300">
                          {item.summary}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* ================= CLIENT LOGOS ================= */}
          {industry.clientLogos && industry.clientLogos.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl text-brandDark dark:text-white">
                Trusted by <span className="text-brandPrimary dark:text-brandAccent">Industry Leaders</span>
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-8">
                {industry.clientLogos.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-4 rounded-xl bg-surfaceLight/50 dark:bg-surfaceDark/50 backdrop-blur-sm border border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent transition-all duration-300"
                  >
                    <span className="text-lg font-semibold text-brandDark dark:text-white">{logo}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= FAQ ================= */}
          {industry.faq && industry.faq.questions && industry.faq.questions.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                {industry.faq.title || (
                  <>
                    Frequently Asked <span className="text-brandPrimary dark:text-brandAccent">Questions</span>
                  </>
                )}
              </h2>

              <div className="space-y-4">
                {industry.faq.questions.map((item, idx) => (
                  <motion.details
                    key={idx}
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-6 group cursor-pointer hover:border-brandGold dark:hover:border-brandAccent transition-all duration-300 shadow-md"
                  >
                    <summary className="flex items-start gap-3 text-lg font-semibold list-none cursor-pointer text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                      <FaCheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" />
                      <span>{item.q}</span>
                    </summary>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 ml-8 text-brandNavy dark:text-gray-400 leading-relaxed"
                    >
                      {item.a}
                    </motion.p>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= RELATED INDUSTRIES ================= */}
          {industry.relatedIndustries && industry.relatedIndustries.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Related <span className="text-brandPrimary dark:text-brandAccent">Industries</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {industry.relatedIndustries.map((item, idx) => (
                  <Link key={idx} to={`/industries/${item.id}`}>
                    <motion.div
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl p-6 group cursor-pointer relative overflow-hidden transition-all duration-300 h-full hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300 rounded-3xl" />

                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300 mb-2">
                          {item.label}
                        </h3>
                        {item.desc && (
                          <p className="text-sm text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                            {item.desc}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent group-hover:translate-x-1 transition-all duration-300 mt-4">
                          Explore Industry <FaArrowRight size={12} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CTA ================= */}
          {industry.cta && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="relative p-10 overflow-hidden text-center bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-2xl rounded-3xl md:p-12 transition-colors duration-300">
                <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300" />

                <div className="relative z-10">
                  <h2 className="mb-4 text-3xl font-bold text-brandDark dark:text-white md:text-4xl">
                    {industry.cta.heading}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-brandNavy dark:text-gray-400">
                    {industry.cta.text}
                  </p>
                  <motion.a
                    href={industry.cta.link || "/contact"}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold font-bold shadow-xl hover:shadow-2xl transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {industry.cta.button || "Get Started"}
                    <FaArrowRight />
                  </motion.a>
                </div>
              </div>
            </motion.section>
          )}
        </div>
      </section>
    </div>
  );
}