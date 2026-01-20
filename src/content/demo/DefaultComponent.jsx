'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DefaultComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [codeLines, setCodeLines] = useState(0);
  
  const fullText = "Looks like this component isn't being rendered...";
  const maxCodeLines = 5;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Code lines animation
  useEffect(() => {
    if (codeLines < maxCodeLines) {
      const timeout = setTimeout(() => {
        setCodeLines(codeLines + 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCodeLines(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [codeLines]);

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-black via-[#0f0f0f] to-black overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 179, 8, 0.15) 0%, transparent 50%)`,
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
        
        {/* Developer Illustration */}
        <motion.div
          className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Developer character */}
          <div className="relative">
            {/* Computer/Monitor */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 sm:p-4 shadow-2xl border-2 border-yellow-400/30"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(234, 179, 8, 0.2)",
                  "0 0 40px rgba(234, 179, 8, 0.4)",
                  "0 0 20px rgba(234, 179, 8, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Screen */}
              <div className="bg-black rounded p-2 sm:p-3 min-h-[180px] sm:min-h-[200px]">
                {/* Code editor header */}
                <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Code lines */}
                <div className="space-y-1.5 sm:space-y-2 font-mono text-[10px] sm:text-xs h-20">
                  <AnimatePresence mode="wait">
                    {codeLines >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-purple-400"
                      >
                        <span className="text-gray-500">1</span> <span className="text-pink-400">import</span> <span className="text-yellow-400">Component</span> <span className="text-pink-400">from</span> <span className="text-green-400">&apos;./Component&apos;</span>;
                      </motion.div>
                    )}
                    {codeLines >= 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-purple-400"
                      >
                        <span className="text-gray-500">2</span>
                      </motion.div>
                    )}
                    {codeLines >= 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-400"
                      >
                        <span className="text-gray-500">3</span> <span className="text-pink-400">export default function</span> <span className="text-yellow-400">App</span>() {'{'}
                      </motion.div>
                    )}
                    {codeLines >= 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 pl-2 sm:pl-4"
                      >
                        <span className="text-gray-500">4</span>   <span className="text-pink-400">return</span> <span className="text-yellow-400">&lt;Component /&gt;</span>;
                      </motion.div>
                    )}
                    {codeLines >= 5 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-blue-400"
                      >
                        <span className="text-gray-500">5</span> {'}'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Cursor */}
                  <motion.div
                    className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-yellow-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>
              
              {/* Keyboard hint */}
              <div className="mt-1.5 sm:mt-2 flex justify-center gap-0.5 sm:gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-1.5 sm:w-8 sm:h-2 bg-gray-700 rounded"
                    animate={{
                      backgroundColor: codeLines > i ? "#eab308" : "#374151",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating tools */}
            <motion.div
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-yellow-400/30"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4 sm:mb-6"
            animate={{
              borderColor: ["rgba(234, 179, 8, 0.3)", "rgba(234, 179, 8, 0.6)", "rgba(234, 179, 8, 0.3)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-yellow-400 text-xs sm:text-sm font-semibold">Working on it...</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
            Oops!
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 min-h-[50px] sm:min-h-[60px]">
            {typedText}
            <motion.span
              className="inline-block w-0.5 h-4 sm:w-1 sm:h-5 bg-yellow-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Our developer is getting it fixed right now! 🛠️
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <motion.div
              className="flex items-center gap-2 text-yellow-400 justify-center lg:justify-start pb-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">Component in progress</span>
            </motion.div>
          </div>

          {/* Progress indicator */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
              <span className="text-gray-400 text-xs sm:text-sm">Building component</span>
              <motion.span
                className="text-yellow-400 text-xs sm:text-sm font-semibold"
                key={codeLines}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Math.min(codeLines * 20, 99)}%
              </motion.span>
            </div>
            <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-400"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(codeLines * 20, 100)}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-yellow-400/10"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: [0, 400, 600],
              height: [0, 400, 600],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
