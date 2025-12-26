import { motion } from "framer-motion";

export function CityDivider() {
  return (
    <div className="w-full relative -mb-1 z-10">
      <motion.svg
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-[#fdf4ff] fill-current"
        preserveAspectRatio="none"
      >
        <path d="M0,200 L1440,200 L1440,100 L1300,100 L1300,120 L1250,120 L1250,80 L1150,80 L1150,140 L1050,140 L1050,60 L950,60 L950,150 L850,150 L850,90 L750,90 L750,130 L650,130 L650,50 L550,50 L550,140 L450,140 L450,100 L350,100 L350,160 L250,160 L250,110 L150,110 L150,150 L0,150 Z" />
      </motion.svg>
    </div>
  );
}
