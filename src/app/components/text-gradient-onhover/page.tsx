"use client";
import React from "react";
import { BsWindow, BsCodeSlash } from "react-icons/bs";
import CodeBlock from "@/components/codeblock";
import TextSVG from "./components/text-gradient-onhover";

function Page() {
  const [codeView, setCodeView] = React.useState(false);
  const demoCode = `
import React from 'react';
import TextSVG from '@/components/ui/text-gradient-onhover';

export default function TextGradientDemo() {
  return (
    <div className='bg-black h-screen flex items-center justify-center' >
      <TextSVG text="SparkUI" />
    </div>
  )
};

  `;
  const code = `
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
        cx: \`$\{cxPercentage}%\`,
        cy: \`$\{cyPercentage}%\`,
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
        // you can edit the stopColor to change the gradient effect
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
      >
        {text}
      </text>
    </svg>
  );
};

export default TextSVG;

  `;
  return (
    <div className="text-white">
      <h1 className="text-3xl font-primary pb-4">Text Gradient Onhover</h1>
      <p className="p-2 my-2">
        The Text Gradient On-Hover Effect is a visually striking UI feature that
        dynamically transforms the appearance of text when hovered over,
        applying a vibrant gradient effect. Built using modern web technologies,
        this effect enhances the visual appeal of your website, making text
        elements more engaging and interactive for users.
      </p>
      <div className="p-2 my-2">
        <h1 className="text-lg">Features :</h1>
        <span>
          <li>Smooth Transition: The gradient effect smoothly transitions as users
            hover over text, creating a visually pleasing experience.</li>
          <li>Customizable Colors: Easily customizable gradient colors to match
            the branding and theme of your website.</li>
          <li>Subtle Animation: The effect is subtle yet noticeable, drawing
            attention to key text elements without overwhelming the user.</li>
          <li>Lightweight Implementation: Designed to be lightweight, ensuring
            quick load times and minimal impact on performance.</li>
          <li>Cross-Browser Compatibility: Works seamlessly across all major
            browsers, ensuring a consistent user experience.</li>
        </span>
      </div>
      <div className="buttons flex flex-row gap-2 my-6">
        <button
          className={`${
            !codeView ? "bg-slate-700/70 duration-400" : ""
          } border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`}
          onClick={() => setCodeView(false)}
        >
          <BsWindow /> Preview
        </button>
        <button
          className={`${
            codeView ? "bg-slate-700/70 duration-400" : ""
          } border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`}
          onClick={() => setCodeView(true)}
        >
          <BsCodeSlash /> Code
        </button>
      </div>
      {!codeView ? (
        <div className="bg-code h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10">
          <div className="w-full h-full flex justify-center items-center">
            <TextSVG text="SparkUI" />
          </div>
        </div>
      ) : (
        <div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10">
          <CodeBlock code={demoCode} language="javascript" />
        </div>
      )}
      <div className="flex flex-col border-l py-4">
        <span className="flex h-8 items-center gap-4">
          <span className="bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full"></span>
          <span className="text-white">Copy the Source code</span>
        </span>
        <span className="text-gray-300 text-sm ml-5 pb-2">
          `components/ui/text-gradient-onhover.jsx`
        </span>
        <span className="flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5">
          <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </div>
  );
}

export default Page;
