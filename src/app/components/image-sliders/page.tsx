'use client';
import React,{useState} from 'react';
import {BsWindow,BsCodeSlash} from "react-icons/bs";
import CodeBlock from '@/components/codeblock';
import Demo from './components/Demo';

function Page() {
  const [codeView, setCodeView] = useState(false);
 
  const code = `
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Content(){
  return(
    <div className='text-7xl font-black bg-gradient-to-b bg-clip-text text-transparent text-center from-white to-gray-400 z-[2]'>
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
          alt={\`$\{currentIndex + 1}\`}
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

  `;
  const demoCode = `
"use client";
import React from 'react'
import ImageSlider from '@/components/ui/ImageSlider';

function ImageSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1548913344-66177da9425e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549423506-90a675288ff1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1550623177-7c31a322de87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <div className='h-full bg-black flex justify-center items-center'>
        <ImageSlider images={images}/>
    </div>
  )
}

export default ImageSliderDemo;
  `;
  ;
  return (<>
    <div className='text-white w-full'>
      <h1 className="text-3xl font-primary pb-4">Image Slider</h1>
      <p className='p-2 my-2'>
        The Image Slider Component is a captivating and user-friendly way to display a series of images with engaging animations. Ideal for portfolios, galleries, or product showcases, this component combines smooth transitions with interactive navigation, creating a visually stunning experience for users.
      </p>
      <div className='p-2 my-2'>
        <h1 className='text-lg'>Features :</h1>
        <span>
          <li>Smooth Animations: Integrates dynamic transitions with effects like blur, scaling, rotation, and color changes using Framer Motion for a seamless visual experience.</li>
          <li>Automatic and Manual Navigation: Offers automatic slide transitions or manual navigation controls, giving users flexibility to explore the images at their own pace.</li>
          <li>Customizable Effects: Allows customization of transition styles and durations, enabling you to tailor the slider&apos;s appearance to match your website&apos;s aesthetic.</li>
          <li>Responsive Layout: Fully responsive and optimized for various screen sizes, ensuring a consistent user experience across desktops, tablets, and mobile devices.</li>
          <li>Engaging Interactivity: Enhances user engagement with hover effects, thumbnail navigation, or progress indicators for a modern and interactive design.</li>
        </span>
      </div>


        <div className="buttons flex flex-row gap-2 my-6">
          <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
          <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
        </div>
        {(!codeView) ? 
        (<div className="bg-code h-[80vh] w-full border border-gray-500 rounded-md my-4 overflow-hidden border-opacity-50">
          <Demo/>
        </div>):(<div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
        
      
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
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/ImageSlider.jsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </div>
  </>
  )
}

export default Page
