import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


import hyd1 from "../../assets/iia-hyderabad/iia-hyderabad-1.webp"
import hyd2 from "../../assets/iia-hyderabad/iia-hyderabad-2.jpeg"
import hyd3 from "../../assets/iia-hyderabad/iia-hyderabad-3.jpeg"
import hyd4 from "../../assets/iia-hyderabad/iia-hyderabad-4.jpeg"
import hyd5 from "../../assets/iia-hyderabad/iia-hyderabad-5.jpeg"
import hyd6 from "../../assets/iia-hyderabad/iia-hyderabad-6.jpeg"
import hyd7 from "../../assets/iia-hyderabad/iia-hyderabad-7.jpeg"
import hyd8 from "../../assets/iia-hyderabad/iia-hyderabad-8.jpeg"
import hyd9 from "../../assets/iia-hyderabad/iia-hyderabad-9.jpeg"

import bang3 from "../../assets/iia-bangalore/iia-bangalore-3.jpeg"
import bang6 from "../../assets/iia-bangalore/iia-bangalore-6.jpeg"

import kol2 from "../../assets/iia-kolkata/iia-kolkata-2.jpeg"
import kol3 from "../../assets/iia-kolkata/iia-kolkata-3.jpg"

import mum1 from "../../assets/iia-bombay/IIA-bombay-1.jpeg"
import mum5 from "../../assets/iia-bombay/IIA-bombay-5.jpg"
import mum9 from "../../assets/iia-bombay/IIA-bombay-9.jpg"

import delh1 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-1.webp"
import delh2 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-2.webp"
import delh3 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-3.webp"
import delh4 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-4.webp"
import delh5 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-5.webp"
import delh6 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-6.webp"
import delh7 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-7.webp"
import delh8 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-8.webp"
import delh9 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-9.webp"
import delh10 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-10.webp"
import delh11 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-11.webp"

import wofa1 from "../../assets/wofa-2025/wofa-1.jpeg"
import wofa2 from "../../assets/wofa-2025/wofa-2.jpeg"
import wofa3 from "../../assets/wofa-2025/wofa-3.jpeg"
import wofa4 from "../../assets/wofa-2025/wofa-4.jpeg"
import wofa5 from "../../assets/wofa-2025/wofa-5.jpeg"
import wofa6 from "../../assets/wofa-2025/wofa-6.jpeg"
import wofa7 from "../../assets/wofa-2025/wofa-7.jpeg"
import wofa8 from "../../assets/wofa-2025/wofa-8.jpeg"

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
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

/* =======================
   EVENTS DATA
======================= */
const events = [
  {
    id: "hyderabad",
    title: "IIA Hyderabad Chapter",
    date: "24 May 2025",
    location: "Hyderabad, India",
    image: hyd1,
    shortDesc:
      "Insightful discussions on governance, risk, and internal audit excellence.",
    fullDesc:
      "At the IIA Hyderabad Chapter event, we connected with audit professionals to exchange perspectives on governance, risk management, and the evolving internal audit landscape.",
    gallery: [
      hyd1,hyd2,hyd3,hyd4,hyd5,hyd6,hyd7,hyd8,hyd9
    ],
  },
  {
    id: "bangalore",
    title: "IIA Bangalore Chapter",
    date: "19 Feb 2025",
    location: "Bangalore, India",
    image: bang6,
    shortDesc:
      "Exploring innovation and technology in modern internal auditing.",
    fullDesc:
      "The IIA Bangalore Chapter event brought together industry experts to discuss innovation, digital transformation, and the future of internal auditing.",
    gallery: [
      bang3,bang6
    ],
  },
  {
    id: "kolkata",
    title: "IIA Kolkata Chapter",
    date: "10 Feb 2025",
    location: "Kolkata, India",
    image: kol2,
    shortDesc:
      "Meaningful dialogue on governance and emerging audit trends.",
    fullDesc:
      "At the IIA Kolkata Chapter event, professionals explored emerging trends in governance, compliance, and internal audit practices.",
    gallery: [
      kol2,kol3,
    ],
  },
  {
    id: "mumbai",
    title: "IIA Mumbai Chapter",
    date: "5 March 2025",
    location: "Mumbai, India",
    image: mum9,
    shortDesc:
      "Focused conversations on strengthening audit excellence.",
    fullDesc:
      "The IIA Mumbai Chapter event was a hub of ideas, collaboration, and forward-thinking audit strategies.",
    gallery: [
      mum1,mum5,mum9,
    ],
  },
  {
    id: "delhi",
    title: "AGM – IIA Delhi Chapter",
    date: "18 July 2025",
    location: "New Delhi, India",
    image: delh7,
    shortDesc:
      "Strategic discussions shaping the future of internal auditing.",
    fullDesc:
      "At the AGM IIA Delhi Chapter, audit leaders collaborated on strategies, insights, and advancements shaping the future of internal audit.",
    gallery: [
      delh1,delh2,delh3,delh4,delh5,delh6,delh7,delh8,delh9,delh10,delh11
    ],
  },
  {
    id: "wofa",
    title: "WOFA 2025",
    date: "31 Jan – 2 Feb 2025",
    location: "New Delhi, India",
    image: wofa7,
    shortDesc:
      "A global platform celebrating leadership, innovation, and empowerment.",
    fullDesc:
      "WOFA 2025 brought together changemakers, leaders, and innovators for impactful discussions and global collaboration.",
    gallery: [
      wofa1,wofa2,wofa3,wofa4,wofa5,wofa6,wofa7,wofa8
    ],
  },
];

/* =======================
   COMPONENT
======================= */
export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeEvent) setActiveIndex(0);
  }, [activeEvent]);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === activeEvent.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? activeEvent.gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="relative py-20 transition-colors duration-300 bg-white dark:bg-black">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-[var(--accent-blue)] dark:to-[var(--accent-purple)]">Events & Conferences</span>
            </h2>
            <p className="max-w-2xl mt-4 text-stone-600 dark:text-white/70">
              Showcasing our presence across industry-leading conferences,
              forums, and professional gatherings.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                onClick={() => setActiveEvent(event)}
                className="group cursor-pointer bg-white border border-orange-200 dark:bg-zinc-900 dark:border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-500 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:border-[var(--accent-blue)]/50 dark:hover:shadow-[var(--accent-blue)]/20"
              >
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full transition-all duration-500 h-52 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-stone-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-[var(--accent-blue-light)]">
                  {event.title}
                </h3>

                <div className="flex gap-4 mb-3 text-sm text-stone-600 dark:text-white/60">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {event.location}
                  </span>
                </div>

                <p className="text-sm text-stone-600 dark:text-white/70">{event.shortDesc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveEvent(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white dark:bg-zinc-900"
            >

             <div className="absolute top-0 left-0 right-0 z-50 flex justify-end p-4">
              <button
                onClick={() => setActiveEvent(null)}
                className="p-2 text-white transition rounded-full bg-black/70 backdrop-blur-md hover:scale-110" aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>
              </div>

              {/* Carousel */}
                <div className="relative flex items-center justify-center px-6 pt-16 pb-6 bg-gray-100 dark:bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeEvent.gallery[activeIndex]}
                      src={activeEvent.gallery[activeIndex]}
                      alt=""
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.35 }}
                      className="object-contain w-auto max-w-full max-h-[70vh] rounded-xl"
                    />
                  </AnimatePresence>

                  <button
                    onClick={prevSlide}
                    className="absolute z-40 p-3 text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/60 hover:bg-black/80 transition-colors"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute z-40 p-3 text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/60 hover:bg-black/80 transition-colors"
                  >
                    <FaChevronRight />
                  </button>

                  <div className="absolute px-3 py-1 text-xs text-white rounded-full bottom-4 right-6 bg-black/60">
                    {activeIndex + 1} / {activeEvent.gallery.length}
                  </div>
                </div>

                <div className="px-8 pb-10">
                <h2 className="mb-4 text-3xl font-bold text-stone-900 dark:text-white">{activeEvent.title}</h2>
                <p className="max-w-3xl text-stone-700 dark:text-white/80">{activeEvent.fullDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}