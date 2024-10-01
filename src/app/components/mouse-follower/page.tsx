'use client';
import React from 'react';
import { BsWindow,BsCodeSlash} from "react-icons/bs";
import MouseFollower from './components/mouse-follower';
import CodeBlock from '@/components/codeblock';

function Page() {
  const [codeView, setCodeView] = React.useState(false);
  const demoCode = `
  // paste the code in the root directory of your project
  'use client';
  import MouseFollower from '@/components/ui/mouse-follower';
  import {AnimatePresence} from 'framer-motion';

  function Page() {
    return (<div>
      <MouseFollower />
      /* Your content goes here */
      </div>
    );
  `;
  const code = `
'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseFollower() {
  const cursor = useRef(null);
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  // Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Move custom cursor to follow the mouse
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);

  return (
    <div className={\`styles.cursorContainer\`}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          pointerEvents: 'none',
          width: cursorSize,
          height: cursorSize
        }}
        className={\`h-4 w-4 fixed rounded-full bg-white\`}
        ref={cursor}
      ></motion.div>
    </div>
  );
}

  `;
  return (
    <div className='text-white w-full'>
        <MouseFollower/>
        <h1 className="text-3xl font-primary pb-4">Mouse Follower</h1>
        <p className='p-2 my-2'>The Mouse Follower Element is a dynamic UI component that enhances user interaction by smoothly tracking and following the user&apos;s mouse movements across the screen. Built with React and Framer Motion, this element adds a modern and engaging effect to your website, providing a more interactive and visually appealing experience for users.</p>
        <div className='p-2 my-2'>
          <h1 className='text-lg'>Features :</h1>
          <span>
            <li>Smooth Tracking: Utilizes Framer Motions useSpring hook to ensure fluid and natural movement that closely follows the user&apos;s cursor, creating a seamless and responsive interaction.</li>
            <li>Customizable Appearance: Easily customizable size, color, and shape to fit the design and aesthetic of any website.</li>
            <li>Non-intrusive: Implemented with pointerEvents: &apos;none&apos; to ensure it does not interfere with other interactive elements on the page, maintaining the full functionality of underlying content.</li>
            <li>Lightweight: Minimal impact on performance, ensuring that it enhances the user experience without slowing down the website.</li>
          </span>
        </div>
        <div className="buttons flex flex-row gap-2 my-6">
          <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
          <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
        </div>
        {(!codeView) ? 
        (<div className="bg-code h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10">
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-base md:text-2xl max-w-3xl font-normal text-wrap px-6">
              Mouse Follower is enabled interact with the mouse to see the effects. Create Exciting Stuffs using the Mouse Follower Components easily.
            </span>
          </div>
        </div>) : (<div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
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
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/mouse-follower.jsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
      </div>
  )
}

export default Page
