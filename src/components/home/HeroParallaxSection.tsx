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
      className="h-auto w-full pb-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.h1
          className="md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 text-center mb-6"
          style={{ opacity: textOpacity }}
        >
          {data?.content?.parallexSection?.title || "Our Components"}
        </motion.h1>
        <motion.div className="h-[300px] w-[150%] -translate-x-[25%] flex flex-row space-x-20">
          <Marquee pauseOnHover className="[--duration:25s] antialiased h-[450px] w-full">
            {firstRow.map((component) => (
              <Link href={`/components/${component.link}`} key={component.name}>
                <div className="flex flex-col max-w-[380px] gap-2 h-1/2 border border-gray-500/50 rounded-md ">
                  <img
                    src={`/assests/components_preview/${component.img}`}
                    alt={component.name}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="text-white">{component.name}</h3>
              </Link>
            ))}
          </Marquee>
        </motion.div>
        <motion.div className="h-[300px] w-[150%] -translate-x-[25%] flex flex-row space-x-20">
          <Marquee pauseOnHover reverse className="[--duration:25s] antialiased h-[450px] w-full">
            {secondRow.map((component) => (
              <Link href={`/components/${component.link}`} key={component.name}>
                <div className="flex flex-col max-w-[380px] gap-2 h-1/2 border border-gray-500/50 rounded-md ">
                  <img
                    src={`/assests/components_preview/${component.img}`}
                    alt={component.name}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="text-white">{component.name}</h3>
              </Link>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </div>
  );
}
