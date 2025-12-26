import React, { useRef, useEffect } from "react";

const ConnectingDots = ({ progress }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let raf;
    let rotation = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (p) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (p < 0.35 || p > 0.85) return;

      const fade =
        p < 0.45 ? (p - 0.35) / 0.1 :
        p > 0.75 ? 1 - (p - 0.75) / 0.1 :
        1;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rings = 22;
      const points = 60;

      rotation += 0.003;

      for (let i = 0; i < rings; i++) {
        const r = (Math.min(cx, cy) * 0.15) + i * 14;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(46,51,255,${0.15 * fade})`;
        ctx.lineWidth = 1.5;

        for (let j = 0; j <= points; j++) {
          const a = (j / points) * Math.PI * 2 + rotation * (i % 2 ? -1 : 1);
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.stroke();
      }
    };

    const animate = () => {
      const p = typeof progress === "number"
        ? progress
        : progress?.get?.() || 0;

      draw(p);
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [progress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default ConnectingDots;
