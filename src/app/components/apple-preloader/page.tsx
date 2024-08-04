'use client';
import React,{useState} from 'react';
import Preloader from './components/apple-preloader';
import {BsWindow,BsCodeSlash} from "react-icons/bs";
import {AnimatePresence} from 'framer-motion';

function Page() {
  const [codeView, setCodeView] = useState(false);
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
    <div className='text-white'>
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
        </div>) :(<div className="bg-code h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10 flex justify-center items-center">Coming Soon... Stay Tuned</div>)}
    </div>
  </>
  )
}

export default Page
