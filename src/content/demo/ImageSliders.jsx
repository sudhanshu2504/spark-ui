"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function Content() {
  return (
    <div className="text-4xl md:text-7xl font-primary font-black bg-gradient-to-b bg-clip-text text-transparent text-center from-white to-gray-400 z-[2]">
      Effortless Image Sliding,
      <br /> Seamless User Experience
    </div>
  );
}

export default function ImageSlider() {
  const images = [
    "https://images.unsplash.com/photo-1548913344-66177da9425e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549423506-90a675288ff1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1550623177-7c31a322de87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{
            filter: "blur(10px) brightness(50%)",
            opacity: 0.75,
            rotateY: 90,
            scale: 0.5,
          }}
          animate={{
            filter: "blur(0px) brightness(80%)",
            opacity: 0.9,
            rotateY: 0,
            scale: 1,
          }}
          exit={{
            filter: "blur(10px) brightness(50%)",
            opacity: 0.75,
            rotateY: -45,
            scale: 0,
          }}
          transition={{
            duration: 0.75,
          }}
        />
      </AnimatePresence>
      <Content />
    </div>
  );
}
