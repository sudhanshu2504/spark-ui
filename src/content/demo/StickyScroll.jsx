"use client";
import { useRef } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll";

function PaneImage({ src, alt }) {
  return (
    <div className="relative h-full w-full">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {/* soft bottom vignette so the frame reads on bright photos */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </div>
  );
}

const ITEMS = [
  {
    badge: "01 · Copy-paste",
    title: "Drop-in components, zero config",
    description:
      "Every Spark UI component ships as a single file you own. No package lock-in, no theme provider gymnastics — paste it and it works with your Tailwind setup.",
    content: <PaneImage src="/image/img1.png" alt="Drop-in components" />,
  },
  {
    badge: "02 · Conversion",
    title: "Motion that earns its keep",
    description:
      "Animation isn't decoration. Well-placed motion guides attention, communicates state, and keeps visitors scrolling — the numbers follow.",
    content: <PaneImage src="/image/img2.png" alt="Motion that earns its keep" />,
  },
  {
    badge: "03 · Performance",
    title: "Springs, not spinners",
    description:
      "Everything runs on transform and opacity with hardware-accelerated springs from Motion. Buttery on a MacBook, still smooth on a mid-range Android.",
    content: <PaneImage src="/image/img3.jpg" alt="Springs, not spinners" />,
  },
  {
    badge: "04 · Workflow",
    title: "From idea to shipped in minutes",
    description:
      "Browse the gallery, grab the component, wire your content. The sticky pane you're looking at right now is one of them — meta, we know.",
    content: <PaneImage src="/image/img4.jpg" alt="From idea to shipped" />,
  },
];

export default function StickyScrollDemo() {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      data-lenis-prevent
      className="relative h-full w-full overflow-y-auto overflow-x-hidden bg-black"
    >
      <StickyScroll
        items={ITEMS}
        paneHeight="75vh"
        scrollContainer={scrollRef}
      />

      <div className="h-24" />
    </div>
  );
}
