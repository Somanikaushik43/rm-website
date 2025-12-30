import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendar,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import blogs from "../../data/blogs.json";

/* =======================
   ANIMATIONS (SAME STYLE)
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};


const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const heroStagger = {
  animate: {
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUpSoft = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};




export default function BlogList() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-brandDark dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden text-center isolate section-padding">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-bgLight/80 dark:bg-bgDark/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop&q=80"
            alt="Knowledge Hub"
            className="object-cover w-full h-full grayscale opacity-20"
          />
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={heroStagger}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* <p className="text-[var(--accent-blue-light)] uppercase tracking-widest font-semibold mb-4">
            Insights
          </p> */}

          <motion.p
            variants={fadeInUpSoft}
            className="text-brandPrimary dark:text-brandAccent uppercase tracking-widest font-semibold mb-4"
          >
            Insights
          </motion.p>
          {/* <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl"> */}

          <motion.h1
            variants={fadeInUpSoft}
            className="mb-6 text-5xl font-bold leading-tight md:text-6xl text-brandDark dark:text-white"
          >
            Knowledge <span className="text-brandPrimary dark:text-brandAccent">Hub</span>
          </motion.h1>
          {/* Knowledge <span className="gradient-text">Hub</span> */}
          {/* </h1> */}
          {/* <p className="text-lg text-[var(--text-gray)] max-w-2xl mx-auto">
            Expert perspectives on risk management, compliance, cybersecurity,
            and digital transformation.
          </p> */}
          <motion.p
            variants={fadeInUpSoft}
            className="text-lg text-brandNavy dark:text-gray-400 max-w-2xl mx-auto"
          >
            Expert perspectives on risk management, compliance, cybersecurity,
            and digital transformation.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative section-padding isolate">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                variants={scaleIn}
                transition={{ delay: i * 0.12 }}
                className="group bg-surfaceLight dark:bg-surfaceDark rounded-3xl border border-borderLight dark:border-borderDark overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:-translate-y-1"
              >
                <Link to={`/blog/${blog.slug}`} className="block h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brandPrimary dark:bg-brandAccent text-white dark:text-brandDark text-xs font-bold shadow-lg">
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full p-6">
                    <h3 className="text-xl font-bold mb-3 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-brandNavy dark:text-gray-400 mb-5 line-clamp-3 group-hover:text-brandNavy/80 dark:group-hover:text-white/80 transition-colors duration-300">
                      {blog.shortDescription}
                    </p>

                    <div className="flex items-center justify-between text-xs text-brandNavy dark:text-gray-400 mb-5">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-brandPrimary dark:text-brandAccent" size={12} />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-brandPrimary dark:text-brandAccent" size={12} />
                        {blog.readTime}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center font-bold text-brandPrimary dark:text-brandAccent group-hover:translate-x-1 transition-all duration-300">
                      Read More
                      <FaChevronRight className="ml-2" size={14} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
