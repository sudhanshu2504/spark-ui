"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Marquee from "@/components/ui/marquee";

export default function HeroParallaxSection({
  components,
  data,
  ContentComponent
}: {
  components: {
    name: string;
    link: string;
    img: string;
  }[];
  data: any;
  ContentComponent: React.ReactNode;
}) {
  const firstRow = components.slice(0, 3);
  const secondRow = components.slice(3, 6);
  const ref = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: mounted ? ref : undefined,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [25, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.1], [0.3, 1]), springConfig);
  const textOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-750, 50]), springConfig);

  return (
    <div
      ref={ref}
      className="h-auto w-full pb-20 overflow-hidden antialiased relative z-0 flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {ContentComponent}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="text-center mb-6" style={{ opacity: textOpacity }}>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft block mb-3">Components</span>
          <h2 className="md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-ink to-ink-mute">
            {data?.content?.parallexSection?.title || "Our Components"}
          </h2>
        </motion.div>
        <motion.div className="h-[300px] w-[150%] -translate-x-[25%] flex flex-row space-x-20">
          <Marquee pauseOnHover className="[--duration:25s] antialiased h-[450px] w-full">
            {firstRow.map((component) => (
              <Link href={`/components/${component.link}`} key={component.name}>
                <div className="flex flex-col max-w-[380px] gap-2 h-1/2 border border-rule rounded-md ">
                  <img
                    src={`/assests/components_preview/${component.img}`}
                    alt={component.name}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="text-ink">{component.name}</h3>
              </Link>
            ))}
            <div className="flex flex-col items-center justify-center max-w-[380px] h-1/2 border-2 border-dashed border-ink-mute rounded-md px-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute whitespace-nowrap">
                More dropping weekly &rarr;
              </span>
            </div>
          </Marquee>
        </motion.div>
        <motion.div className="h-[300px] w-[150%] -translate-x-[25%] flex flex-row space-x-20">
          <Marquee pauseOnHover reverse className="[--duration:25s] antialiased h-[450px] w-full">
            {secondRow.map((component) => (
              <Link href={`/components/${component.link}`} key={component.name}>
                <div className="flex flex-col max-w-[380px] gap-2 h-1/2 border border-rule rounded-md ">
                  <img
                    src={`/assests/components_preview/${component.img}`}
                    alt={component.name}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="text-ink">{component.name}</h3>
              </Link>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </div>
  );
}
