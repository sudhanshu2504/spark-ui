import React, { useRef, useEffect, useState } from 'react';

const TextSVG = ({ text }) => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
      <radialGradient
        id="multiColorGradient"
        gradientUnits="userSpaceOnUse"
        r="15%"
        cx={gradientCenter.cx}
        cy={gradientCenter.cy}
      >
        {isHovered && (
          <>
            <stop offset="40%" stopColor="#FFFF00" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#FFFF00" stopOpacity="0.50" />
            <stop offset="80%" stopColor="#FFFF50" stopOpacity="0.25" />
            <stop offset="90%" stopColor="#FFFF50" stopOpacity="0.2" />
          </>
        )}
        <stop offset="100%" stopColor="#404040" stopOpacity="0.75"/>
      </radialGradient>
      </defs>
      <text
        ref={textRef}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="40"
        fill="none"
        stroke="url(#multiColorGradient)"
        strokeWidth="0.5"
        style={{ cursor: 'none' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='font-primary'
      >
        {text}
      </text>
    </svg>
  );
};

export default TextSVG;
