// src/components/layout/MegaMenu.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Globe2,
  Building2,
  Factory,
  ShoppingBag,
  Users,
  Mail,
  ArrowRight,
} from "lucide-react";

/* Navy and Gold gradients from logo colors */
const gradientBgLight =
  "bg-gradient-to-r from-brandPrimary via-brandNavy to-brandDark";

const gradientBgDark =
  "bg-gradient-to-r from-brandAccent via-brandGold to-yellow-500";

/* Animations */
const containerVariants = {
  initial: { opacity: 0, y: -8, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.1 },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};

/* Icon mapper */
const getIcon = (title, parentLabel) => {
  const t = title.toLowerCase();
  const p = parentLabel.toLowerCase();

  if (p.includes("services")) {
    if (t.includes("governance")) return Shield;
    if (t.includes("consulting")) return Globe2;
    return Shield;
  }

  if (p.includes("industries")) {
    if (t.includes("core")) return Building2;
    if (t.includes("commerce")) return ShoppingBag;
    if (t.includes("manufacturing")) return Factory;
    return Users;
  }

  return Users;
};

export default function MegaMenu({
  sections = [],
  parentLabel = "",
  onNavigate,
  align = "center",
  ctaLink,
  onMouseEnter,
  onMouseLeave,
}) {
  const alignmentClass =
    align === "left"
      ? "left-0"
      : align === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";

  const ctaHref =
    ctaLink ||
    (parentLabel.toLowerCase().includes("service")
      ? "/contact"
      : "/about");

  return (
    <motion.div
      key="mega"
      className={`absolute ${alignmentClass} mt-2 max-w-[95vw] z-50`}
      style={{
        width:
          sections.length === 1
            ? "360px"
            : sections.length === 2
            ? "560px"
            : "860px",
      }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Container */}
      <div className="p-6 rounded-2xl -translate-x-72 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-2xl">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {sections.map((section) => {
            const Icon = getIcon(section.title, parentLabel);

            return (
              <motion.div
                key={section.title}
                variants={cardVariants}
                className="overflow-hidden rounded-xl bg-white dark:bg-brandDark border border-borderLight dark:border-borderDark transition-all duration-200 hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-md"
              >
                {/* Card Header */}
                <div className="flex gap-3 p-4 bg-white dark:bg-brandDark">
                  <div className="flex items-center justify-center w-10 h-10 shadow-md rounded-xl bg-brandDark hover:bg-brandPrimary dark:bg-brandAccent dark:hover:bg-brandGold transition-colors duration-200">
                    <Icon className="w-5 h-5 text-white dark:text-brandDark" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-brandDark dark:text-white">
                      {section.title}
                    </h4>
                    {section.subtitle && (
                      <p className="text-[11px] text-brandNavy dark:text-gray-400">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="border-t bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark">
                  <ul className="p-3 space-y-2 max-h-60">
                    {section.items.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.path}
                          onClick={onNavigate}
                          className="flex items-center justify-between gap-2 px-3 py-2 text-xs transition-all duration-150 rounded-lg text-brandDark dark:text-gray-200 hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10 hover:text-brandPrimary dark:hover:text-brandAccent group"
                        >
                          <span className="truncate">{link.label}</span>
                          <ArrowRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3 pt-4 mt-5 text-xs md:flex-row md:items-center md:justify-between">
          <Link
            to={ctaHref}
            onClick={onNavigate}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-[12px] shadow-md hover:shadow-lg transition-all duration-200 ${gradientBgLight} text-white dark:${gradientBgDark} dark:text-brandDark`}
          >
            <Mail size={13} />
            Talk to Team
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
