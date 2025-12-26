import React from "react";

const BackgroundGrid = () => {
  return (
    <div
      className="
        absolute inset-0 z-0 overflow-hidden pointer-events-none h-full
      "
    >
      {/* Grid */}
      <div className="absolute inset-0 flex flex-wrap content-start justify-center">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="
              w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 m-1
              rounded-[2.5rem]
              border
              border-black/10 dark:border-white/10
            "
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent via-transparent
          to-orange-50/40 dark:to-[#06071B]
        "
      />
    </div>
  );
};

export default BackgroundGrid;