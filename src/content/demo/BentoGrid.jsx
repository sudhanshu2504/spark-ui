'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'motion/react';
import { BentoGrid, BentoTile } from '@/components/ui/bento-grid';

/* CountUp — animates a number the first time it scrolls into view */
function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, mv]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

const activity = [
  { who: 'Maya', what: 'deployed to prod', color: '#4FAE4D' },
  { who: 'Arjun', what: 'opened PR #214', color: '#59BBEB' },
  { who: 'Lena', what: 'starred the repo', color: '#D7C200' },
  { who: 'Theo', what: 'merged main', color: '#A534A0' },
];

export default function BentoGridDemo() {
  const [liveIdx, setLiveIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setLiveIdx((i) => (i + 1) % activity.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto bg-code p-4">
      {/* min-h-full + items/justify-center keeps the grid centred when it fits,
          and scrolls from the top (no clipping) on small screens */}
      <div className="flex min-h-full w-full items-center justify-center">
        <BentoGrid columns={3} className="w-full max-w-2xl gap-3 lg:auto-rows-[118px]">
        {/* colSpan={2} — tile spans two columns */}
        <BentoTile
          colSpan={2}
          spotlightColor="rgba(168,85,247,0.18)"
          className="min-h-[110px] p-4 bg-gradient-to-br from-fuchsia-600/20 to-indigo-600/20"
        >
          <div className="flex h-full flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
              Spark UI
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">Components that feel alive.</h3>
              <p className="mt-1 max-w-sm text-xs text-white/60">
                Copy-paste, prop-driven, built with React, Tailwind and Motion.
              </p>
            </div>
          </div>
        </BentoTile>

        {/* magnetic — tile leans toward the cursor, then springs back */}
        <BentoTile magnetic className="min-h-[110px] p-4">
          <div className="flex h-full flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
              Developers
            </span>
            <p className="text-3xl font-black text-white">
              <CountUp to={12400} suffix="+" />
            </p>
            <p className="text-xs text-zinc-500">shipping with Spark UI</p>
          </div>
        </BentoTile>

        {/* Live activity feed */}
        <BentoTile className="min-h-[110px] p-4">
          <div className="flex h-full flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                Live
              </span>
            </div>
            <div className="relative flex-1">
              {activity.map((a, i) => (
                <motion.div
                  key={a.who}
                  animate={{ opacity: i === liveIdx ? 1 : 0.25, x: i === liveIdx ? 0 : -4 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 py-0.5 text-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: a.color }} />
                  <span className="text-white">{a.who}</span>
                  <span className="text-zinc-500">{a.what}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </BentoTile>

        {/* spotlight glow tile */}
        <BentoTile className="min-h-[110px] p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
          <div className="flex h-full flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">
              Spotlight
            </span>
            <p className="text-sm font-semibold text-white">
              A glow follows your cursor across every tile.
            </p>
          </div>
        </BentoTile>

        {/* rowSpan={2} — tall tile filling two rows */}
        <BentoTile
          magnetic
          rowSpan={2}
          spotlightColor="rgba(79,174,77,0.18)"
          className="min-h-[110px] p-4 bg-gradient-to-b from-emerald-500/15 to-zinc-900/40"
        >
          <div className="flex h-full flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
              Built with
            </span>
            <div className="space-y-1.5">
              {['React', 'Tailwind', 'Motion', 'TypeScript'].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2 text-xs text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {t}
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-zinc-500">Zero config. Copy-paste.</p>
          </div>
        </BentoTile>

        {/* colSpan={2} + onClick — interactive CTA tile */}
        <BentoTile
          colSpan={2}
          magnetic
          onClick={() => {}}
          spotlightColor="rgba(234,179,8,0.18)"
          className="min-h-[110px] p-4 bg-gradient-to-br from-yellow-500/15 to-orange-600/15"
        >
          <div className="flex h-full items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Browse all components →</h3>
              <p className="mt-0.5 text-xs text-white/60">60+ and counting. Dropping weekly.</p>
            </div>
            <motion.div
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-white text-black sm:flex"
              whileHover={{ scale: 1.12, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              ↗
            </motion.div>
          </div>
        </BentoTile>
        </BentoGrid>
      </div>
    </div>
  );
}
