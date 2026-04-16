"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "hover" | "click";

export default function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring — slow, laggy follow
  const ringX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

  // Inner dot — instant
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.2 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onDown = () => setVariant("click");
    const onUp = () => setVariant("default");

    // Detect hoverable elements
    const addHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [data-cursor='hover'], input, label, select, textarea");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => setVariant("hover"));
        el.addEventListener("mouseleave", () => setVariant("default"));
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    addHoverListeners();

    // Re-scan on DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  // Ring size & style per variant
  const ringSize = variant === "hover" ? 52 : variant === "click" ? 28 : 36;
  const ringOpacity = variant === "click" ? 0.3 : 0.6;
  const dotSize = variant === "hover" ? 4 : variant === "click" ? 6 : 5;

  return (
    <>
      {/* Hide native cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full border border-(--primary)"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? ringOpacity : 0,
        }}
        animate={{ width: ringSize, height: ringSize }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full bg-(--primary)"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ width: dotSize, height: dotSize }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
