'use client';
import React from 'react';
import { BsWindow,BsCodeSlash} from "react-icons/bs";
import StickyCursor from './components/mouse-follower';
function Page() {
  const [codeView, setCodeView] = React.useState(false);
  return (
    <div className='text-white'>
        <StickyCursor/>
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
        (<div className="bg-slate-900 h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10">
          <div className="w-full h-full flex justify-center items-center">
            <span className="text-3xl font-bold text-wrap">
              Mouse Follower is enabled, interact with the screen to see the effect.
            </span>
          </div>
        </div>) :(<div className="bg-slate-900 h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10 flex justify-center items-center">Coming Soon... Stay Tuned</div>)}
      </div>
  )
}

export default Page
