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
} from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
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
   BREADCRUMB COMPONENT
======================= */
// const Breadcrumbs = ({ items }) => (
//   <motion.nav
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     className="flex items-center gap-2 text-sm text-[var(--text-gray)] mb-8"
//   >
//     {items.map((item, index) => (
//       <div key={index} className="flex items-center gap-2">
//         {index > 0 && <FaChevronRight size={12} className="text-white/30" />}
//         {item.href ? (
//           <Link
//             to={item.href}
//             className="hover:text-[var(--accent-blue-light)] transition-colors"
//           >
//             {item.label}
//           </Link>
//         ) : (
//           <span className="text-white/60">{item.label}</span>
//         )}
//       </div>
//     ))}
//   </motion.nav>
// );

/* =======================
   MAIN COMPONENT
======================= */
export default function ServiceTemplate() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJSON() {
      try {
        setLoading(true);
        const data = await import(`../data/services/${id}.json`);
        setService(data.default);
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
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaHome /> Back to Services
          </Link>
        </motion.div>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="min-h-screen overflow-x-hidden text-brandDark dark:text-white bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative isolate min-h-[50vh] flex items-center justify-center section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        {(service.hero?.image || service.hero?.headerImage || service.headerImage) && (
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={service.hero?.image || service.hero?.headerImage || service.headerImage}
                alt={service.title}
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
              {service.hero?.tagline || "Enterprise Services"}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-5xl font-bold leading-tight md:text-7xl text-brandDark dark:text-white"
            >
              <span className="text-brandPrimary dark:text-brandAccent">
                {service.title}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-brandNavy dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              {service.hero?.subheading || service.summary}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative section-padding isolate">
        <div className="container max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          {/* <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: null },
            ]}
          /> */}

          {/* ================= OFFERINGS ================= */}
          {service.offerings && (
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
                  Our <span className="text-brandPrimary dark:text-brandAccent">Offerings & Solutions</span>
                </h2>
              </div>

              <p className="text-lg text-brandNavy dark:text-gray-400 mb-8 leading-relaxed">
                {service.offerings.intro}
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {service.offerings.items.map((item, idx) => (
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
                        <FaCheckCircle className="text-brandPrimary dark:text-brandAccent mt-1 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 leading-relaxed ml-6 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CLIENT SUCCESS ================= */}
          {service.clientSuccess && service.clientSuccess.length > 0 && (
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
                  Client <span className="text-brandPrimary dark:text-brandAccent">Success Stories</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {service.clientSuccess.map((item, idx) => (
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
                      <h3 className="text-lg font-bold text-brandPrimary dark:text-brandAccent mb-3 group-hover:text-brandDark dark:group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= RESOURCES ================= */}
          {service.resources && service.resources.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <FaFileAlt className="text-4xl text-brandPrimary dark:text-brandAccent" />
                <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                  <span className="text-brandPrimary dark:text-brandAccent">Resources</span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {service.resources.map((item, idx) => (
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
                      <h3 className="mb-3 text-lg font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= WHY RISKMAN ================= */}
          {service.whyRiskMan && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl p-10 relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300" />

                <div className="relative z-10">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                    Why <span className="text-brandPrimary dark:text-brandAccent">RiskMan?</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-brandNavy dark:text-gray-400">
                    {service.whyRiskMan}
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* ================= RELATED OFFERINGS ================= */}
          {service.relatedOfferings && service.relatedOfferings.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Related <span className="text-brandPrimary dark:text-brandAccent">Offerings</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {service.relatedOfferings.map((item, idx) => (
                  <Link key={idx} to={`/services/${item.id}`}>
                    <motion.div
                      variants={scaleIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative h-full p-6 overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl group hover:shadow-2xl hover:-translate-y-1 hover:border-brandGold dark:hover:border-brandAccent"
                    >
                      <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300 rounded-3xl" />

                      <div className="relative z-10">
                        <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                          {item.label}
                        </h3>
                        {item.desc && (
                          <p className="text-sm text-brandNavy dark:text-gray-400 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                            {item.desc}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent group-hover:translate-x-1 transition-all duration-300 mt-4">
                          Learn More <FaArrowRight size={12} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= FAQ ================= */}
          {service.faqs && service.faqs.length > 0 && (
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="mb-8 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
                Frequently Asked <span className="text-brandPrimary dark:text-brandAccent">Questions</span>
              </h2>

              <div className="space-y-4">
                {service.faqs.map((item, idx) => (
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
                      <FaCheckCircle className="flex-shrink-0 mt-1 text-brandPrimary dark:text-brandAccent" />
                      <span>{item.q}</span>
                    </summary>
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 ml-8 leading-relaxed text-brandNavy dark:text-gray-400"
                    >
                      {item.a}
                    </motion.p>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}

          {/* ================= CTA ================= */}
          {service.cta && (
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
                    {service.cta.heading}
                  </h2>
                  <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-brandNavy dark:text-gray-400">
                    {service.cta.text}
                  </p>
                  <motion.a
                    href={service.cta.link || "/contact"}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brandDark text-white hover:bg-brandPrimary dark:bg-brandAccent dark:text-brandDark dark:hover:bg-brandGold font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.cta.button || "Get Started"}
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