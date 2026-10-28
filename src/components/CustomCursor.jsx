import React, { useEffect, useRef, useState } from "react";

/**
 * CustomCursor
 * Smooth center dot + lagging outer ring
 * Pure requestAnimationFrame & direct DOM updates (Zero React re-renders on mousemove)
 * Respects prefers-reduced-motion, fine pointer query, non-blocking pointer-events: none
 */
function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer and no reduced-motion preference
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkSupport = () => {
      return finePointerQuery.matches && !reducedMotionQuery.matches;
    };

    if (!checkSupport()) {
      return;
    }

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let isHidden = true;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (isHidden) {
        isHidden = false;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Check if hovering over interactive targets
      const target = e.target;
      if (target && target.closest) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive-target, .bento-card'
        );
        isHovering = Boolean(interactive);
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isHidden = true;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isHidden = false;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    // Physics tick loop
    const tick = () => {
      // Direct center dot update
      if (dotRef.current) {
        const dotScale = isClicking ? 0.6 : isHovering ? 1.4 : 1;
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }

      // Smooth outer ring trailing with linear interpolation (lerp)
      const ease = 0.16;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        const ringScale = isClicking ? 0.8 : isHovering ? 1.6 : 1;
        const ringBorderColor = isHovering
          ? "rgba(56, 189, 248, 0.75)"
          : "rgba(56, 189, 248, 0.35)";
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        ringRef.current.style.borderColor = ringBorderColor;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          width: "7px",
          height: "7px",
          backgroundColor: "#38bdf8",
          borderRadius: "50%",
          boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
        }}
      />
      {/* Lagging Outer Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          width: "36px",
          height: "36px",
          border: "1.5px solid rgba(56, 189, 248, 0.35)",
          borderRadius: "50%",
          backgroundColor: "rgba(56, 189, 248, 0.04)",
          backdropFilter: "blur(0.5px)",
        }}
      />
    </>
  );
}

export default CustomCursor;
