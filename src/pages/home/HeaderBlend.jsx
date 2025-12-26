import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderBlend() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "header",
      start: "bottom top",
      end: "+=1",
      onEnter: () =>
        gsap.to("header", {
          backgroundColor: "rgba(5,8,20,0.95)",
          backdropFilter: "blur(12px)",
          duration: 0.4,
        }),
      onLeaveBack: () =>
        gsap.to("header", {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          duration: 0.4,
        }),
    });
  }, []);

  return null;
}
