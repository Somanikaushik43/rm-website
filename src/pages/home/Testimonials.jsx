import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Andreas Lim",
      role: "CFO, Pacific Holdings Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
      rating: 5,
      text: "Their audit team demonstrated deep industry knowledge and a proactive approach. They ensured compliance and delivered insights that improved our internal processes significantly.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Director of Finance, TechCorp Industries",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
      rating: 5,
      text: "Exceptional professionalism and attention to detail. Their recommendations significantly strengthened our internal controls and risk management.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "CEO, Global Manufacturing Ltd",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
      rating: 5,
      text: "More than auditors — strategic advisors. Their risk and compliance expertise helped us navigate complex regulations with confidence.",
    },
    {
      id: 4,
      name: "Emily Thompson",
      role: "VP Operations, RetailMax Group",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop",
      rating: 5,
      text: "Their insights were actionable and impactful, driving measurable improvements in efficiency and compliance across our organization.",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="
      relative w-full py-20 md:py-28
      bg-orange-50/40 dark:bg-[#06071B]
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-16">
          <p className="mb-3 text-sm tracking-[0.3em] uppercase text-orange-600 dark:text-orange-400 font-semibold">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white mb-4">
            Clients Feedback
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Stats */}
          <div className="lg:col-span-3 space-y-8">
            {/* Client Count */}
            <div>
              <div className="text-5xl md:text-6xl font-bold text-stone-900 dark:text-white mb-2">
                120+
              </div>
              <p className="text-sm text-stone-600 dark:text-gray-400">
                Trusted Clients Worldwide
              </p>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`
                    aspect-square rounded-lg overflow-hidden
                    transition-all duration-300
                    ${idx === currentIndex 
                      ? 'ring-2 ring-orange-500 dark:ring-orange-400 scale-105' 
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }
                  `}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CENTER: Image */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                key={current.id}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover animate-fadeIn"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT: Testimonial Content */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Review Platform Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-md border border-orange-200 dark:border-slate-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium text-stone-900 dark:text-white">
                Google Reviews
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-orange-500 text-orange-500"
                />
              ))}
              <span className="ml-2 text-sm text-stone-600 dark:text-gray-400">
                {current.rating}/5
              </span>
            </div>

            {/* Testimonial Text */}
            <div key={current.id} className="animate-fadeIn">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-stone-900 dark:text-white mb-6">
                "{current.text}"
              </p>

              {/* Author Info */}
              <div>
                <h4 className="text-xl font-bold text-stone-900 dark:text-white mb-1">
                  {current.name}
                </h4>
                <p className="text-sm text-stone-600 dark:text-gray-400">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={prevSlide}
                className="
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-white dark:bg-slate-800
                  border border-orange-200 dark:border-slate-700
                  text-stone-900 dark:text-white
                  hover:bg-orange-50 dark:hover:bg-slate-700
                  transition-all duration-200
                  shadow-md hover:shadow-lg
                "
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="
                  w-12 h-12 rounded-full flex items-center justify-center
                  bg-gradient-to-r from-orange-500 to-amber-600
                  text-white
                  hover:shadow-lg hover:scale-105
                  transition-all duration-200
                  shadow-md
                "
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Progress Indicator */}
              <div className="ml-4 flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <div
                    key={idx}
                    className={`
                      h-1 rounded-full transition-all duration-300
                      ${idx === currentIndex 
                        ? 'w-8 bg-orange-500 dark:bg-orange-400' 
                        : 'w-1 bg-stone-300 dark:bg-slate-700'
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;