import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLDots() {
  const mountRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    /* ======================
       SCENE
    ====================== */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    /* ======================
       DOTS
    ====================== */
    const geometry = new THREE.BufferGeometry();
    const dots = 4000;
    const positions = new Float32Array(dots * 3);

    for (let i = 0; i < dots * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 1000;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: 0x2e33ff,
      size: 1.8,
      transparent: true,
      opacity: 0.7,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    /* ======================
       ANIMATION
    ====================== */
    const animate = () => {
      points.rotation.y += 0.0006;
      points.rotation.x += 0.0003;
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    /* ======================
       RESIZE
    ====================== */
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);

    /* ======================
       CLEANUP (SAFE)
    ====================== */
    return () => {
      // stop animation
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      window.removeEventListener("resize", resize);

      // dispose GPU resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      // remove canvas SAFELY (prevents crash)
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 dots-canvas" />;
}
