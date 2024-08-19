'use client';
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { HoverBorderGradient } from "@/components/ui/gradient-border";
import Logo from "@/components/logo";
import components from '@/content/components'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const Content = () => {
  return(
  <main className="min-h-screen flex flex-col md:flex-row gap-3 justify-evenly items-center container mx-auto z-[1]">
    <div className="">
      <Logo/>
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-6">
        <HoverBorderGradient
          containerClassName="rounded-full border-gray-600 border-opacity-35 mx-auto"
          as="button"
          className="bg-black flex items-center text-sm"
        >
          <span className="bg-clip-text z-0 bg-gradient-to-br to-[rgb(255,255,255,0.18)] from-[rgb(255,255,255,0.38)]">Introducing SparkUI</span>
        </HoverBorderGradient>
        <h1 className="font-black md:text-4xl text-base text-center text-white text-wrap max-w-screen-md px-4">
        Transform your web projects into <span className="text-yellow-400 underline underline-offset-2">Spark</span>, the next-generation <span className="text-yellow-400 underline underline-offset-2">UI Library</span> designed for seamless, dynamic, and stunning user interfaces.
        </h1>
      </div>
      <div className="flex flex-col lg:my-10 my-4 gap-y-4">
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 ">
          <a href='/components' className="text-black text-sm md:text-lg rounded-lg bg-white px-4 py-2 md:px-6 md:py-3">
            Browse Components
          </a>
          <a href='/pricing'className="text-white text-sm md:text-lg border border-white rounded-lg px-4 py-2 md:px-6 md:py-3">
            Custom Components
          </a>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-2 my-2 lg:my-10">
          <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>
              <h3 className="font-bold text-gray-400">React JS</h3>
          </div>
          <div className="flex items-center gap-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[0.5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
              <h3 className="font-bold text-gray-400">Tailwind CSS</h3>
          </div>
          <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"><path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path><path d="M20 12l-8 8l-4 -4"></path></svg>
              <h3 className="font-bold text-gray-400">Framer Motion</h3>
          </div>
        </div>
      </div>
    </div>
    </main>
    )
}
const Card = ({
  component,
  translate,
}: {
  component: {
    name: string;
    link: string;
    img: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={component.name}
      className="group/component h-[300px] w-[450px] relative flex-shrink-0 bg-red-700"
    >
      <img
        src={`/assests/components_preview/${component.img}`}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={component.name}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/component:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/component:opacity-100 text-white">
        {component.name}
      </h2>
    </motion.div>
  );
};
const HeroParallax = ({
  components,
}: {
  components: {
    name: string;
    link: string;
    img: string;
  }[];
}) => {
  const firstRow = components.slice(0, 5);
  const secondRow = components.slice(5, 10);
  const thirdRow = components.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
 
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [450, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [25, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 0.9]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-800, 300]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Content />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((component) => (
            <Card
              component={component}
              translate={translateX}
              key={component.name}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((component) => (
            <Card
              component={component}
              translate={translateXReverse}
              key={component.name}
            />
          ))}
        </motion.div>
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((component) => (
            <Card
              component={component}
              translate={translateX}
              key={component.name}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};
export default function Home() {
  return (
      <NextUIProvider>
        <HeroParallax components={components} />
      </NextUIProvider>
  );
}
