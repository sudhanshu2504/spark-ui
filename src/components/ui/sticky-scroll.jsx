"use client";
import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cn } from "@/utils/cn";

export function StickyScroll({
  items,
  className,
  paneHeight = "100vh",
  scrollContainer,
}) {
  const containerRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  const { scrollYProgress } = useScroll({
    container: scrollContainer,
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length)));
    setActive(idx);
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-16 px-6 lg:grid-cols-2",
        className
      )}
    >
      {/* scrolling copy */}
      <div>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-center py-16 lg:min-h-[70vh]"
          >
            <motion.div
              animate={{
                opacity: active === i ? 1 : 0.25,
                x: active === i ? 0 : -8,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {item.badge && (
                <span className="mb-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {item.badge}
                </span>
              )}
              <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </motion.div>

            {/* inline visual on mobile, where the sticky pane is hidden */}
            <div className="mt-8 lg:hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* sticky visual pane */}
      <div
        style={{ height: paneHeight }}
        className="sticky top-0 hidden items-center lg:flex"
      >
        <div className="relative w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -32, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                {items[active].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* progress rail */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  width: active === i ? 24 : 8,
                  opacity: active === i ? 1 : 0.3,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-1 rounded-full bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
