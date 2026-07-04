"use client";
import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import { cn } from "@/utils/cn";

// Static Tailwind classes so the JIT compiler always picks them up.
const GRID_COLS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

const COL_SPAN: Record<number, string> = {
  1: "",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
};

const ROW_SPAN: Record<number, string> = {
  1: "",
  2: "lg:row-span-2",
  3: "lg:row-span-3",
};

export type BentoGridProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Columns on large screens (1 on mobile, 2 on tablet). Default 3. */
  columns?: 1 | 2 | 3 | 4;
};

export function BentoGrid({
  className,
  children,
  columns = 3,
  ...props
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2",
        GRID_COLS[columns],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type BentoTileProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: React.ReactNode;
  /** Columns this tile spans (lg+). Default 1. */
  colSpan?: 1 | 2 | 3 | 4;
  /** Rows this tile spans. Default 1. */
  rowSpan?: 1 | 2 | 3;
  /** Cursor-tracking spotlight glow. Default true. */
  spotlight?: boolean;
  /** Spotlight colour. Default soft white. */
  spotlightColor?: string;
  /** Lift + scale slightly on hover. Default true. */
  hoverLift?: boolean;
  /** Lean toward the cursor, then spring back. Default false. */
  magnetic?: boolean;
  /** Magnetic pull strength (fraction of cursor offset). Default 0.18. */
  magneticStrength?: number;
};

const MAGNETIC_MAX = 26; // px cap, keeps tiles from drifting too far

export function BentoTile({
  className,
  children,
  colSpan = 1,
  rowSpan = 1,
  spotlight = true,
  spotlightColor = "rgba(255,255,255,0.10)",
  hoverLift = true,
  magnetic = false,
  magneticStrength = 0.18,
  onMouseMove,
  onMouseLeave,
  ...props
}: BentoTileProps) {
  // Spotlight position (px from the tile's top-left).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlightBg = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, ${spotlightColor}, transparent 70%)`;

  // Magnetic translate — a spring chases the pulled-toward-cursor target.
  const x = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);

    if (magnetic) {
      const pull = (offset: number) =>
        Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, offset * magneticStrength));
      x.set(pull(e.clientX - (r.left + r.width / 2)));
      y.set(pull(e.clientY - (r.top + r.height / 2)));
    }
    onMouseMove?.(e);
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(0);
    y.set(0);
    onMouseLeave?.(e);
  };

  // Magnetic tiles already move via x/y, so the hover effect is scale-only.
  const hover = !hoverLift
    ? undefined
    : magnetic
      ? { scale: 1.03 }
      : { y: -4, scale: 1.01 };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={hover}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={magnetic ? { x, y } : undefined}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6",
        COL_SPAN[colSpan],
        ROW_SPAN[rowSpan],
        props.onClick && "cursor-pointer",
        className
      )}
      {...props}
    >
      {spotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBg }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
