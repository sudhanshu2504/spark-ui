'use client';
import React,{useState} from 'react';
import Preloader from './components/apple-preloader';
import {BsWindow,BsCodeSlash} from "react-icons/bs";
import {AnimatePresence} from 'framer-motion';
import CodeBlock from '@/components/codeblock';

function Page() {
  const [codeView, setCodeView] = useState(false);
  const [loader, setLoader] = useState(false);
  const startLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2250);
  };
  const code = `
  "use client";
  import { useEffect, useState } from "react";
  import { motion } from "framer-motion";
  
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0.2 },
    },
  };
  
  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };
  
  const words = [
    "नमस्ते",
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "やあ",
    "Hallå",
    "Guten tag",
    "Hallo",
  ];
  
  export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);
  
    useEffect(() => {
      if (index === words.length - 1) return;
      setTimeout(
        () => {
          setIndex(index + 1);
        },
        index === 0 ? 1000 : 150
      );
    }, [index]);
  
    const initialPath = \`M0 0 L\${dimension.width} 0 L\${dimension.width} \${dimension.height} Q\${dimension.width / 2} \${dimension.height + 300} 0 \${dimension.height}  L0 0\`;
    const targetPath = \`M0 0 L\${dimension.width} 0 L\${dimension.width} \${dimension.height} Q\${dimension.width / 2} \${dimension.height} 0 \${dimension.height}  L0 0\`;
  
    const curve = {
      initial: {
        d: initialPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      },
    };
  
    return (
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="h-[100vh] w-[100vw] flex items-center justify-center fixed top-0 left-0 z-[99] bg-[#000]"
      >
        {dimension.width > 0 && (
          <>
            <motion.p
              variants={opacity}
              initial="initial"
              animate="enter"
              className="flex bg-clip-text bg-gradient-to-br to-[rgb(255,255,255,0.5)] from-[rgb(255,255,255,0.58)] font-medium text-[42px] items-center absolute z-[1]"
              style={{ color: "transparent" }}
            >
              {words[index]}
            </motion.p>
            <svg className="absolute top-0 w-[100%] h-[calc(100% + 200px)]">
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
                fill="#000"
              ></motion.path>
            </svg>
          </>
        )}
      </motion.div>
    );
  }
  `;
  const demoCode = `
  // paste the code in the root directory of your project
  'use client';
  import React,{useState} from 'react';
  import Preloader from '@/components/ui/apple-preloader';
  import {AnimatePresence} from 'framer-motion';

  function Page() {
  const [loader, setLoader] = useState(false);
  const startLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2250);
  };
  return (<>
    <AnimatePresence mode="wait">
      {loader && <Preloader />}
    </AnimatePresence> 
    /* Your content goes here */
    </>
  `;
  ;
  return (<>
    <AnimatePresence mode="wait">
      {loader && <Preloader />}
    </AnimatePresence> 
    <div className='text-white w-full'>
        <h1 className="text-3xl font-primary pb-4">Apple Preloader</h1>
        <p className='p-2 my-2'>The Apple Preloader Component is a sleek and engaging UI element inspired by Apple&apos;s iconic design language. This component features a dynamic loading animation combined with rotating greeting messages in different languages, providing a welcoming and inclusive user experience.</p>
        <div className='p-2 my-2'>
          <h1 className='text-lg'>Features :</h1>
          <span>
            <li>Dynamic Preloader Animation: The component mimics Apple&apos;s elegant loading animation, creating a visually appealing introduction while content is being prepared.</li>
            <li>Multilingual Greetings: Displays a rotating set of greeting messages in various languages, including English, Spanish, French, German, Chinese, and more, fostering a global and inclusive atmosphere.</li>
            <li>Customizable Design: Easily customizable to fit different design themes, with options to adjust colors, fonts, and animation speed to match your brand identity.</li>
            <li>Smooth Transitions: Leveraging Framer Motion or similar animation libraries, the component ensures smooth transitions between greeting messages, enhancing the overall user experience.</li>
            <li>Accessibility: Designed with accessibility in mind, ensuring that the text is legible and the animations are not disruptive for users with visual or cognitive impairments.</li>
          </span>
        </div>
        <div className="buttons flex flex-row gap-2 my-6">
          <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
          <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
        </div>
        {(!codeView) ? 
        (<div className="bg-code h-[75vh] w-full border border-gray-500 flex justify-center items-center rounded-md border-opacity-10">
          <button className='px-4 py-2 bg-white rounded-md text-black' onClick={startLoader}>Start Preloader</button>
        </div>) :(<div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
        
      
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Install Dependencies</span>
        </span>
        <span className='flex h-auto max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm install framer-motion`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Copy the Source code</span>
        </span>
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/apple-preloader.tsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </div>
  </>
  )
}

export default Page
