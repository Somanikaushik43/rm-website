// Alternative Testimonials Section (Without Tree - Simpler)
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CFO",
    company: "TechVentures India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "RiskMan's strategic advisory transformed our risk management approach. Their insights helped us navigate complex compliance challenges with confidence.",
  },
  {
    name: "Rajesh Kumar",
    role: "CEO",
    company: "FinSecure Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Their cybersecurity audit uncovered vulnerabilities we never knew existed. The team's expertise and professionalism are unmatched.",
  },
  {
    name: "Ananya Desai",
    role: "Director",
    company: "Healthcare Innovations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    rating: 5,
    text: "Working with RiskMan has been transformative. Their ESG advisory helped us align our business practices with sustainable growth goals.",
  },
  {
    name: "Vikram Malhotra",
    role: "COO",
    company: "RetailConnect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    rating: 4,
    text: "The forensic investigation services provided crucial insights that protected our organization. Highly recommend their meticulous approach.",
  },
  {
    name: "Meera Patel",
    role: "VP Risk Management",
    company: "BankSecure",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    rating: 5,
    text: "RiskMan's IT risk management solutions are comprehensive and practical. They helped us build a robust framework for digital transformation.",
  },
  {
    name: "Arjun Singh",
    role: "Managing Director",
    company: "AutoTech Industries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Their compliance consulting gave us the clarity we needed to expand internationally. The team is knowledgeable, responsive, and truly invested in our success.",
  },
];

export default function TestimonialsSimple() {
  return (
    <section className="relative py-20 bg-bgLight dark:bg-bgDark overflow-hidden transition-colors duration-300">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brandPrimary/5 dark:bg-brandAccent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brandPrimary/5 dark:bg-brandAccent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surfaceLight dark:bg-surfaceDark rounded-full shadow-md mb-6 border border-borderLight dark:border-borderDark"
          >
            <Star className="text-brandPrimary dark:text-brandAccent" size={18} fill="currentColor" />
            <span className="text-sm font-bold text-brandDark dark:text-gray-300 uppercase tracking-wider">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold md:text-5xl text-stone-900 dark:text-white"
          >
            Client
            <br />
            <span className="text-brandPrimary dark:text-brandAccent">
              Testimonials
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-brandNavy dark:text-gray-400 text-lg"
          >
            Hear what our clients say about working with RiskMan
          </motion.p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative overflow-hidden group bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-8 transition-all duration-300 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-brandPrimary opacity-0 group-hover:opacity-5 dark:bg-brandAccent transition-all duration-300 pointer-events-none" />

              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl opacity-20 absolute top-6 right-6 group-hover:opacity-40 transition-opacity duration-500 text-brandPrimary dark:text-brandAccent" />

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FaStar
                      key={j}
                      className="text-lg text-brandGold transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${j * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 italic text-brandNavy dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-borderLight dark:border-borderDark">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brandPrimary/20 dark:bg-brandAccent/20 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-brandPrimary/30 dark:border-brandAccent/30 group-hover:border-brandPrimary dark:group-hover:border-brandAccent group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-brandPrimary dark:text-brandAccent">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats or CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brandPrimary dark:text-brandAccent mb-1">500+</div>
                <div className="text-brandNavy dark:text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-16 bg-borderLight dark:bg-borderDark" />
              <div className="text-center">
                <div className="text-4xl font-bold text-brandPrimary dark:text-brandAccent mb-1">4.9</div>
                <div className="text-brandNavy dark:text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-borderLight dark:bg-borderDark" />
              <div className="text-center">
                <div className="text-4xl font-bold text-brandPrimary dark:text-brandAccent mb-1">98%</div>
                <div className="text-brandNavy dark:text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}