'use client';
import React,{useState} from 'react';
import { BsWindow,BsCodeSlash} from "react-icons/bs";
import ParallexDemo from './ParallexDemo';
import CodeBlock from '@/components/codeblock';

function Page() {
  const demoCode =`
'use client';
import React from 'react';
import Parallex from '@/components/ui/parallex';

export default function Page() {
  return(
    <div>
      <Parallex/>
    </div>
  )
};
  `;
  const code =`
'use client';
import { useEffect, React } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ParallexDemo() {
  useEffect(() => {
    const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      
      return () => {
        if (lenis) {
          lenis.destroy(); // Clean up Lenis instance
        }
      };
    },[]);

  function IntroSection() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "150%"])
  
    return (
      <div className='h-screen overflow-hidden'>
        <motion.div style={{y}} className='relative h-full'>
          <img src='https://howtostartabusinessindubai.com/wp-content/uploads/2022/08/metaverse-based-business-dubai.jpg' fill="true" alt="image" className='w-full h-full object-cover brightness-50'/>
        </motion.div>
      </div>
    )
  }
  function MainSection() {
    return (
        <div className='flex justify-center py-40 h-screen items-center bg-yellow-400'>
            <p className='text-2xl md:text-5xl text-center max-w-[60vw] leading-none text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corporis vel ducimus, minima, deserunt optio omnis consectetur excepturi repudiandae amet odio fugit animi sit tempora sint qui eligendi. Omnis, dolore?</p>
        </div>
    )
  }
  function EndingSection() {
      const container = useRef();
      const { scrollYProgress } = useScroll({
          target: container,
          offset: ["start end", 'end start']
      })
      const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

      return (
          <div
          ref={container} 
          className='relative flex items-center justify-center h-screen overflow-hidden'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
          >
          <div className='relative z-10 py-10 text-white w-full h-full flex flex-col justify-between'>
              <p className='w-2/3 text-2xl md:text-4xl self-end'>Create Exciting Landing Designs using the image parallex Effects.</p>
              <p className='text-2xl md:text-4xl font-black w-full'>Background Image Parallax</p>
          </div>
          <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
              <motion.div style={{y}} className='relative w-full h-full object-cover bg-black z-[1]'>
              <img src='https://beaconvcfund.sgp1.cdn.digitaloceanspaces.com/2022/06/metaverse-cover-1288x724-1.jpeg' alt="image" className='h-full w-full object-cover brightness-50'/>
              </motion.div>
          </div>
          </div>
      )
  }
  return (
    <main>
      <IntroSection />
      <MainSection />
      <EndingSection />
    </main>
  );
}
  `;

  const [codeView, setCodeView] = useState(false);
  return (
    <div className='text-white w-full'>
      <h1 className="text-3xl font-primary pb-4">Background Image Parallex</h1>
      <p className='p-2 my-2'>The Background Image Parallax Effect is a visually captivating UI feature that creates an illusion of depth and movement on a webpage. As users scroll through the content, the background images move at a slower pace compared to the foreground content, producing a stunning 3D-like effect. This technique enhances the user experience by adding a dynamic and engaging element to your website.</p>
      <div className='p-2 my-2'>
        <h1 className='text-lg'>Features :</h1>
        <span>
          <li>Depth Illusion: Creates a perception of depth by making background images move slower than the foreground content, giving a 3D-like effect.</li>
          <li>Smooth Scrolling: Ensures fluid and seamless transitions between different sections of the webpage, enhancing the overall user experience.</li>
          <li>Customizable Speed: Allows for easy adjustment of the parallax scrolling speed to match the design and aesthetic requirements of your website.</li>
          <li>Responsive Design: Adapts to various screen sizes and devices, ensuring a consistent visual experience across desktops, tablets, and smartphones.</li>
          <li>Lightweight and Efficient: Minimal impact on performance, ensuring that the parallax effect enhances the user experience without compromising the website&apos;s speed and responsiveness.</li>
        </span>
      </div>
      <div className="buttons flex flex-row gap-2 my-6">
        <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
        <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
      </div>
      {(!codeView) ? 
      (<div className="bg-code h-auto w-full border border-gray-500 rounded-md border-opacity-10">
        <ParallexDemo/>
      </div>) : (<div className="bg-code h-auto max-h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Install Dependencies</span>
        </span>
        <span className='flex h-auto max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm install framer-motion lenis`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Copy the Source code</span>
        </span>
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/parallex.jsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </div>
  )
}

export default Page
