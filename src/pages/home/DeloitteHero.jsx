import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WebGLDots from "./WebGLDots";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function DeloitteHero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         MAIN HERO TIMELINE
      ========================= */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
          },
        })
        .from(logoRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
        })
        .from(
          textRef.current.children,
          {
            opacity: 0,
            y: 80,
            stagger: 0.2,
          },
          "-=0.4"
        );

      /* =========================
         BACKGROUND PARALLAX
      ========================= */
      gsap.to(".dots-canvas", {
        y: "-15%",
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-root">
      {/* BACKGROUND */}
      <WebGLDots />

      {/* FOREGROUND */}
      <div className="hero-content">
        <img
          ref={logoRef}
          src="/rm.png"
          alt="RiskMan"
          className="hero-logo"
        />

        <h1 ref={textRef}>
          <span>Risk.</span>
          <span>Trust.</span>
          <span>Assurance.</span>
        </h1>
      </div>
    </section>
  );
}
