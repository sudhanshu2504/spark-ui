"use client";
import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { HolographicCard } from "@/components/ui/holographic-card";

const CARDS = [
  {
    rarity: "Legendary",
    name: "Spark Core",
    stat: "∞ / 100",
    gradient: "from-fuchsia-600/40 via-purple-800/20 to-transparent",
    ring: "text-fuchsia-400",
  },
  {
    rarity: "Epic",
    name: "Motion Rune",
    stat: "94 / 100",
    gradient: "from-cyan-500/40 via-blue-800/20 to-transparent",
    ring: "text-cyan-400",
  },
  {
    rarity: "Rare",
    name: "Glass Shard",
    stat: "87 / 100",
    gradient: "from-amber-500/40 via-orange-800/20 to-transparent",
    ring: "text-amber-400",
  },
];

export default function HolographicCardDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black p-8">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {CARDS.map((card) => (
          <HolographicCard key={card.name} className="aspect-[3/4]">
            <div className="relative flex h-full flex-col justify-between p-5">
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient}`}
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                  {card.rarity}
                </span>
                <ShieldCheck className={`h-4 w-4 ${card.ring}`} />
              </div>
              <div className="relative flex flex-1 items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
                  <Sparkles className={`h-8 w-8 ${card.ring}`} />
                </div>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-white">{card.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Power</span>
                  <span className="font-mono text-xs tabular-nums text-white/70">
                    {card.stat}
                  </span>
                </div>
              </div>
            </div>
          </HolographicCard>
        ))}
      </div>
    </div>
  );
}
