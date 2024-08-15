// components/Logo.js
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Logo = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;

    // Get the total length of the path for animation
    const pathLength = path.getTotalLength();

    // Set initial stroke to transparent
    gsap.set(path, { stroke: "transparent" });

    // Tracing the path
    gsap.fromTo(
      path,
      { strokeDasharray: pathLength, strokeDashoffset: pathLength, stroke: "transparent" },
      {
        strokeDashoffset: 0,
        stroke: "white", // The stroke color will be white during the animation
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          // Filling the color from bottom to top
          gsap.fromTo(
            path,
            { fill: "transparent" },
            { fill: "white", duration: 1, ease: "power2.inOut" }
          );
        }
      }
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      fill="transparent"
      strokeWidth="0.1" // Adjust as needed
      role="img"
      viewBox="0 0 24 24"
      className="text-2xl mr-2"
      height="10em"
      width="10em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M3.199 20.001L20.801 12v8.001L11.999 24l-8.8-3.999zm8.8 3.999zm-.001-24L3.199 3.999V12l17.602-8.001L11.998 0zM3.803 12.275l7.592 3.453 8.803-4.002-7.594-3.45-8.801 3.999z"
      />
    </svg>
  );
};

export default Logo;
