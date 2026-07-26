"use client";
import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/utils/cn";

/**
 * Props:
 *   intensity    max tilt in degrees                              default 12
 *   foilOpacity  peak opacity of the rainbow foil while hovering   default 0.5
 */
const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };

export function HolographicCard({
  children,
  className,
  intensity = 12,
  foilOpacity = 0.5,
}) {
  // pointer position normalized to 0..1 within the card
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const [hovering, setHovering] = React.useState(false);
  // pointer events fire for touch too, but there's no real "hover" on a
  // tap — skip the tilt/foil on coarse (touch) pointers so a tap doesn't
  // flash a one-off tilt with nothing driving it.
  const [enabled, setEnabled] = React.useState(true);

  React.useEffect(() => {
    setEnabled(!window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), SPRING);

  const glareX = useSpring(useTransform(px, [0, 1], [0, 100]), SPRING);
  const glareY = useSpring(useTransform(py, [0, 1], [0, 100]), SPRING);
  const foilShift = useSpring(
    useTransform([px, py], (v) => {
      const [x, y] = v;
      return (x + y) * 50;
    }),
    SPRING
  );

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.45), transparent 45%)`;
  const foilPosition = useMotionTemplate`${foilShift}% 50%`;

  const handlePointerMove = (e) => {
    if (!enabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handlePointerEnter = () => {
    if (enabled) setHovering(true);
  };

  const handlePointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
    setHovering(false);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900",
          className
        )}
      >
        {children}

        {/* rainbow foil sheen, driven by pointer position */}
        <motion.div
          aria-hidden
          animate={{ opacity: hovering ? foilOpacity : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 20%, rgba(255,0,132,0.7) 36%, rgba(255,214,0,0.7) 43%, rgba(0,255,163,0.7) 50%, rgba(0,178,255,0.7) 57%, rgba(172,0,255,0.7) 64%, transparent 80%)",
            backgroundSize: "300% 300%",
            backgroundPosition: foilPosition,
            mixBlendMode: "color-dodge",
          }}
          className="pointer-events-none absolute inset-0"
        />

        {/* fine holo scanlines, only visible through the foil */}
        <motion.div
          aria-hidden
          animate={{ opacity: hovering ? 0.25 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 3px)",
            mixBlendMode: "overlay",
          }}
          className="pointer-events-none absolute inset-0"
        />

        {/* glare that follows the pointer */}
        <motion.div
          aria-hidden
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ backgroundImage: glare, mixBlendMode: "overlay" }}
          className="pointer-events-none absolute inset-0"
        />
      </motion.div>
    </div>
  );
}
