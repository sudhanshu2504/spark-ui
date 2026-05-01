'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const formatValue = (value, target) => {
  if (target >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}m`;
  if (target >= 1_000)     return `${Math.round(value / 1_000)}k`;
  return value.toLocaleString();
};

function Counter({ from = 0, to, duration = 2000, prefix = '', suffix = '', label, delay = 0 }) {
  const [displayValue, setDisplayValue] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let frameId;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      setDisplayValue(Math.round(from + (to - from) * easeOutQuart(t)));
      if (t < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, from, to, duration]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 32 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay }}
      className="group relative bg-zinc-950 border border-white/[0.06] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col
                 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]
                 hover:border-white/[0.12] hover:bg-[#111111]
                 hover:shadow-[0_0_40px_-8px_rgba(234,179,8,0.12),0_1px_0_0_rgba(255,255,255,0.07)_inset]
                 transition-all duration-500"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mb-5 sm:mb-6 md:mb-8
                      shadow-[0_0_10px_3px_rgba(234,179,8,0.5)]" />
      <span className="text-4xl sm:text-5xl md:text-6xl font-black font-primary
                       bg-gradient-to-b from-white via-white to-zinc-400
                       bg-clip-text text-transparent leading-none">
        {prefix}{formatValue(displayValue, to)}{suffix}
      </span>
      <p className="text-[10px] sm:text-xs text-zinc-500 mt-3 md:mt-4 tracking-widest uppercase font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export default function SmoothCounter() {
  return (
    <div className="h-full w-full bg-code flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-medium block mb-2 sm:mb-3">
          By the numbers
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Trusted by <span className="italic font-light text-yellow-400">thousands</span>.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl">
        <Counter to={500}     suffix="+" label="Components"   delay={0} />
        <Counter to={12000}   suffix="+" label="Developers"   delay={0.1} />
        <Counter to={98}      suffix="%" label="Satisfaction"  delay={0.2} />
        <Counter to={4}       prefix="v" label="Releases"     delay={0.3} />
      </div>
    </div>
  );
}
