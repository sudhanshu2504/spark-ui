'use client';
import React,{useState} from 'react';
import {BsWindow,BsCodeSlash} from "react-icons/bs";
import CodeBlock from '@/components/codeblock';
import Carousel from './components/Carousel';

function Page() {
  const [codeView, setCodeView] = useState(false);
 
  const code = `
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const Carousel = () => {
  const nextDom = useRef(null);
  const prevDom = useRef(null);
  const carouselDom = useRef(null);
  const sliderDom = useRef(null);
  const thumbnailBorderDom = useRef(null);
  const [index, setIndex] = useState(0);

  // Make the necessary changes to the items array related to content and images as per the need
  const items = [
    { img: '/image/img1.jpg', title: 'Animated Carousel', topic: 'Spark UI', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, totam! Id iste delectus ratione odit tenetur.' },
    { img: '/image/img2.jpg', title: 'Animated Carousel', topic: 'Spark UI', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, totam! Id iste delectus ratione odit tenetur.' },
    { img: '/image/img3.jpg', title: 'Animated Carousel', topic: 'Spark UI', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, totam! Id iste delectus ratione odit tenetur.' },
    { img: '/image/img4.jpg', title: 'Animated Carousel', topic: 'Spark UI', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, totam! Id iste delectus ratione odit tenetur.' },
  ];

  const handlePrev = () => {
    setIndex(index - 1 < 0 ? items.length - 1 : index - 1);
  };
  const handleNext = () => {
    setIndex(index + 1 >= items.length ? 0 : index + 1);
  };
  useEffect(() => {
    let timeAutoNext = 5000;
    let runNextAuto;

    const showSlider = (type) => {
      const sliderItemsDom = sliderDom.current.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderDom.current.querySelectorAll('.item');

      if (type === 'next') {
        // Append the first item to the end and animate
        sliderDom.current.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.current.appendChild(thumbnailItemsDom[0]);
        carouselDom.current.classList.add('next');
      } else {
        // Prepend the last item to the start and animate
        sliderDom.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.current.classList.add('prev');
      }

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.current.click();
      }, timeAutoNext);
    };

    nextDom.current.onclick = () => showSlider('next');
    prevDom.current.onclick = () => showSlider('prev');

    runNextAuto = setTimeout(() => {
      nextDom.current.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
    };
  }, [index]);

  return (
    <div className="h-full max-h-[90vh] w-full max-w-[100vw] overflow-hidden relative carousel" ref={carouselDom}>
      <div className="list" ref={sliderDom}>
        <AnimatePresence initial={false} custom={index}>
          <motion.img
            key={index}
            src={items[index].img} alt={\`Carousel-\${index}\`} className='absolute h-full w-full top-0 object-cover blur-sm brightness-90' />
            <div className="absolute top-[20%] max-w-[1080px] w-[80%] left-[45%] -translate-x-[50%] pr-[30%] text-white z-[1]">
            <div className="text-lg md:text-2xl font-bold">{items[index].title}</div>
            <div className="text-3xl md:text-5xl text-yellow-400 font-black">{items[index].topic}</div>
            <div className="my-4">{items[index].description}</div>
            <div className="buttons flex gap-2">
              <button className="text-black text-sm md:text-base rounded-full bg-gray-200 px-8 py-2">Explore</button>
            </div>
          </div>
        </AnimatePresence>
        <AnimatePresence initial={false} custom={index}>
          <motion.div
            className="item h-[90vh] w-full relative flex-shrink-0"
            key={index}
            initial={{ opacity: 0.75, scale: 0.25, y: "75%" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <Image src={items[index].img} alt={\`Carousel \${index}\`} layout="fill" objectFit="cover" className='brightness-50' />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="thumbnail absolute w-fit z-50 flex gap-5 bottom-[10%] left-1/2"
        initial={{ x: '150px' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        ref={thumbnailBorderDom}
      >
        {items.map((item, index) => (
          <motion.div
            className="item h-28 w-48 relative flex-shrink-0"
            key={index}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '192px', opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <motion.img 
              src={item.img} 
              alt={\`Thumbnail \${index}\`} 
              layout="fill" // Use layout fill for better responsiveness
              className="w-full h-full object-cover rounded-md"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-[10%] right-2/3 z-[1] flex gap-2.5 items-center">
        <button id="prev" onClick={handlePrev} className="w-10 h-10 rounded-full text-white border border-gray-600 font-bold transition-colors delay-75 hover:text-black hover:bg-white hover:border-none" ref={prevDom}>{\`<\`}</button>
        <button id="next" onClick={handleNext} className="w-10 h-10 rounded-full text-white border border-gray-600 font-bold transition-colors delay-75 hover:text-black hover:bg-white hover:border-none" ref={nextDom}>{\`>\`}</button>
      </div>
    </div>
  );
};

export default Carousel;

  `;
  const demoCode = `
"use client";
import React from 'react'
import Carousel from './components/Carousel'
function Page() {
  return (
    <>
      <Carousel />
      // Place other components here
    </>
  )
}

export default Page;
  `;
  ;
  return (<>
    <div className='text-white w-full'>
    <h1 className="text-3xl font-primary pb-4">Animated Carousel</h1>
<p className='p-2 my-2'>
  The Animated Carousel Component offers a visually engaging and dynamic way to showcase images or content in a rotating carousel format. Perfect for portfolios, galleries, or product displays, this component provides smooth transitions and rich interactivity, making it a standout feature on any website.
</p>
<div className='p-2 my-2'>
        <h1 className='text-lg'>Features :</h1>
        <span>
          <li>Seamless Transitions: The carousel ensures smooth and fluid transitions between slides, using Framer Motion or CSS animations to create a polished and professional feel.</li>
          <li>Dynamic Image Display: Showcase multiple images or content slides with automatic or manual navigation, allowing users to engage with the content at their own pace.</li>
          <li>Customizable Navigation: Offers flexible navigation options such as arrows, dots, or swipe gestures, providing an intuitive user experience across all devices.</li>
          <li>Responsive Design: Fully responsive and optimized for different screen sizes, ensuring that the carousel looks great on desktop, tablet, and mobile devices.</li>
          <li>Interactive Thumbnails: Thumbnail previews of slides can be added, enhancing the user’s control over navigating to specific content within the carousel.</li>
        </span>
      </div>

        <div className="buttons flex flex-row gap-2 my-6">
          <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
          <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
        </div>
        {(!codeView) ? 
        (<div className="bg-code h-[80vh] w-full border border-gray-500 rounded-md my-4 overflow-hidden border-opacity-50">
          <Carousel/>
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
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/Carousel.jsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </div>
  </>
  )
}

export default Page
