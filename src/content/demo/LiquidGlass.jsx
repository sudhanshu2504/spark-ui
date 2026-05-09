'use client';
import { LiquidGlass } from '@/components/ui/liquid-glass';

const NOTIFICATIONS = [
  { label: 'New comment on your post', time: '2m ago' },
  { label: 'Maya liked your design',   time: '9m ago' },
  { label: 'Deploy succeeded ✓',       time: '1h ago' },
];

export default function LiquidGlassDemo() {
  return (
    <div className="h-full w-full bg-code flex flex-col items-center justify-center gap-8 p-6 overflow-y-auto">
      <div className="text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium block mb-2">
          Glass morphism
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Liquid <span className="italic font-light text-yellow-400">Glass</span>
        </h2>
      </div>

      {/* grid-cols-2 — number of columns. max-w-sm — overall width of the grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">

        {/* col-span-2 — spans full row. h-44 — card height. displacement — warp strength */}
        <LiquidGlass className="col-span-2 h-44 w-full" displacement={60}>
          <div className="p-6">
            <p className="text-xs uppercase tracking-wider text-white/70">Now playing</p>
            <p className="mt-2 text-lg font-semibold text-white">Midnight City</p>
            <p className="text-sm text-white/60">M83 · Hurry Up, We&apos;re Dreaming</p>
            <div className="mt-6 h-1 rounded-full bg-white/20">
              <div className="h-1 w-2/3 rounded-full bg-white" />
            </div>
          </div>
        </LiquidGlass>

        {/* col-span-1 — half width. radius — corner rounding. tint — background colour */}
        <LiquidGlass className="col-span-1 h-44 w-full" displacement={90} radius={22} tint="rgba(234,179,8,0.10)">
          <div className="h-full flex flex-col items-center justify-center gap-1 text-center">
            <p className="text-4xl font-black text-white">72°</p>
            <p className="text-xs text-white/60 uppercase tracking-widest">Partly cloudy</p>
            <p className="text-[10px] text-white/40 mt-1">San Francisco</p>
          </div>
        </LiquidGlass>

        {/* col-span-1 — half width. Remove col-span-* to let the grid decide */}
        <LiquidGlass className="col-span-1 h-44 w-full" displacement={50} radius={20}>
          <div className="h-full flex flex-col justify-start gap-3 p-5">
            <p className="text-[10px] uppercase tracking-widest text-white/50">Notifications</p>
            {NOTIFICATIONS.map((n) => (
              <div key={n.label} className="flex items-center justify-between gap-2">
                <p className="text-xs text-white/80 truncate">{n.label}</p>
                <p className="text-[10px] text-white/40 shrink-0">{n.time}</p>
              </div>
            ))}
          </div>
        </LiquidGlass>

      </div>
    </div>
  );
}
