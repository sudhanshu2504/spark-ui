'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Content(){
  return(
    <div className='text-4xl md:text-7xl font-primary font-black bg-gradient-to-b bg-clip-text text-transparent text-center from-white to-gray-400 z-[2]'>
    Effortless Image Sliding,<br/> Seamless User Experience
    </div>
  )
};

export default function ImageSlider({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  // Automatically change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4000ms = 4sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{
            filter: "blur(10px) brightness(50%)",
            opacity:0.75,
            rotateY: 90,
            scale: 0.5,
          }}
          animate={{
            filter: "blur(0px) brightness(80%)",
            opacity:0.9,
            rotateY: 0,
            scale: 1,
          }}
          exit={{
            filter: "blur(10px) brightness(50%)",
            opacity:0.75,
            rotateY: -45,
            scale: 0,
          }}
          transition={{
            duration: 0.75
          }}
        />
      </AnimatePresence>
      {/* Content to be displayed above Sliders */}
      <Content/>
    </div>
  );
}
