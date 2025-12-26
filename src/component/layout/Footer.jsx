import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ChevronUp,
  Mail,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSubmit = () => {
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
      alert("Thank you for subscribing!");
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/riskman", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/riskman", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/riskman", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/riskman", label: "Twitter" },
  ];

  return (
    <footer className="bg-orange-50/40 dark:bg-[#06071B] text-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16">
        
        {/* Top Section: Logo + Newsletter */}
        <div className="flex flex-col items-start justify-between gap-12 pb-16 border-b lg:flex-row border-gray-600">
          
          {/* Left: Logo + Description */}
          <div className="max-w-sm">
            <Link to="/" className="inline-block">
              <img
                src="./rm.png"
                alt="RiskMan"
                className="h-10 mb-6 transition-transform hover:scale-105"
              />
            </Link>
            
            <p className="text-sm leading-relaxed text-gray-300">
              RiskMan Consulting provides expert advisory in audit, risk, compliance, 
              cybersecurity, and digital transformation — helping businesses grow with confidence.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a 
                href="mailto:info@riskman.in" 
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <Mail size={16} />
                <span>info@riskman.in</span>
              </a>
              <a 
                href="tel:+911234567890" 
                className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
              >
                <Phone size={16} />
                <span>+91 123 456 7890</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-700 rounded hover:bg-indigo-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="w-full max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="flex-1 px-4 py-3 text-sm text-white transition-colors bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-indigo-500"
              />
              <motion.button
                onClick={handleNewsletterSubmit}
                className="px-8 py-3 text-sm font-semibold text-white transition-colors bg-indigo-600 rounded hover:bg-indigo-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Links Grid */}
        <div className="grid grid-cols-2 gap-8 pt-12 md:grid-cols-4">
          
          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/risk-advisory" className="transition-colors hover:text-white">Risk Advisory</Link></li>
              <li><Link to="/services/consulting" className="transition-colors hover:text-white">Consulting</Link></li>
              <li><Link to="/services/esg-advisory" className="transition-colors hover:text-white">ESG Advisory</Link></li>
              <li><Link to="/services/financial-advisory" className="transition-colors hover:text-white">Financial Advisory</Link></li>
              <li><Link to="/services/forensic-investigation" className="transition-colors hover:text-white">Forensic & Investigation</Link></li>
              <li><Link to="/services/cybersecurity" className="transition-colors hover:text-white">Cyber Security</Link></li>
              <li><Link to="/services/it-risk-management" className="transition-colors hover:text-white">IT Risk Management</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/industries/automobiles" className="transition-colors hover:text-white">Automobiles</Link></li>
              <li><Link to="/industries/banking-insurance" className="transition-colors hover:text-white">Banking & Insurance</Link></li>
              <li><Link to="/industries/retail-consumer" className="transition-colors hover:text-white">Retail & Consumer</Link></li>
              <li><Link to="/industries/healthcare" className="transition-colors hover:text-white">Healthcare</Link></li>
              <li><Link to="/industries/hospitality" className="transition-colors hover:text-white">Hospitality</Link></li>
              <li><Link to="/industries/media-communication" className="transition-colors hover:text-white">Media & Communication</Link></li>
              <li><Link to="/industries/education-edtech" className="transition-colors hover:text-white">Education & EdTech</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
              <li><Link to="/about/leadership" className="transition-colors hover:text-white">Leadership Team</Link></li>
              <li><Link to="/about/careers" className="transition-colors hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-white">Blogs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
              <li><Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 text-sm text-gray-400 border-t border-gray-600 md:flex-row">
          <p>RiskMan Consulting © {new Date().getFullYear()}</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms of Use</Link>
            <Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
          </div>
        </div>

      </div>

      {/* Cityscape Silhouette at Bottom */}
      <div className="relative h-24 overflow-hidden bg-[#1a1a1a]">
        {/* Checkered pattern base */}
        <div className="absolute bottom-0 left-0 right-0 h-8">
          <div className="grid h-full grid-cols-32 gap-0">
            {[...Array(32)].map((_, i) => (
              <div key={i} className={`${i % 2 === 0 ? 'bg-black' : 'bg-white'} opacity-80`}></div>
            ))}
          </div>
        </div>
        
        {/* City buildings silhouette */}
        <svg 
          viewBox="0 0 1000 100" 
          className="absolute bottom-8 left-0 w-full h-16 text-white"
          preserveAspectRatio="none"
        >
          <rect x="0" y="40" width="30" height="60" fill="currentColor" />
          <rect x="35" y="55" width="35" height="45" fill="currentColor" />
          <rect x="75" y="30" width="40" height="70" fill="currentColor" />
          <rect x="120" y="50" width="25" height="50" fill="currentColor" />
          <rect x="150" y="35" width="45" height="65" fill="currentColor" />
          <rect x="200" y="60" width="30" height="40" fill="currentColor" />
          <rect x="235" y="20" width="50" height="80" fill="currentColor" />
          <rect x="290" y="45" width="35" height="55" fill="currentColor" />
          <rect x="330" y="55" width="30" height="45" fill="currentColor" />
          <rect x="365" y="35" width="40" height="65" fill="currentColor" />
          <rect x="410" y="25" width="45" height="75" fill="currentColor" />
          <rect x="460" y="50" width="35" height="50" fill="currentColor" />
          <rect x="500" y="15" width="55" height="85" fill="currentColor" />
          <rect x="560" y="45" width="30" height="55" fill="currentColor" />
          <rect x="595" y="30" width="40" height="70" fill="currentColor" />
          <rect x="640" y="55" width="35" height="45" fill="currentColor" />
          <rect x="680" y="40" width="45" height="60" fill="currentColor" />
          <rect x="730" y="20" width="40" height="80" fill="currentColor" />
          <rect x="775" y="50" width="30" height="50" fill="currentColor" />
          <rect x="810" y="35" width="45" height="65" fill="currentColor" />
          <rect x="860" y="55" width="35" height="45" fill="currentColor" />
          <rect x="900" y="30" width="40" height="70" fill="currentColor" />
          <rect x="945" y="45" width="30" height="55" fill="currentColor" />
        </svg>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed z-50 p-4 text-white transition-all duration-300 rounded-full shadow-2xl bg-indigo-600 hover:bg-indigo-700 bottom-6 right-6 md:bottom-8 md:right-8"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}