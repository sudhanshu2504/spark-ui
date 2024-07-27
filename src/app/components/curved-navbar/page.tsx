'use client';
import React from 'react';
import NavDemo from '@/app/components/curved-navbar/components/NavDemo';
import { BsWindow,BsCodeSlash} from "react-icons/bs";

function Page() {
  const [codeView, setCodeView] = React.useState(false);
  return (
    <div className='text-white'>
      <h1 className="text-3xl font-primary pb-4">Curved Navigation Menu</h1>
      <p className='p-2 my-2'>The Curved Navigation Menu is an elegantly designed user interface component built with React.js, TailwindCSS, and Framer Motion. This menu provides a smooth and interactive way to navigate through different sections of a website, enhancing the user experience with modern animations and a sleek curved design.</p>
      <div className='p-2 my-2'>
        <h1 className='text-lg'>Features :</h1>
        <span>
          <li>Responsive Design : Tailored to work seamlessly across various devices and screen sizes, ensuring an optimal user experience on mobile, tablet, and desktop.</li>
          <li>Smooth Animations : Utilizes Framer Motion to deliver fluid and engaging animations, enhancing the visual appeal and interaction quality.</li>
          <li>Interactive Hover Effects : Dynamic hover effects that highlight menu items and provide visual feedback to users, improving navigation clarity.</li>
          <li>Customizable Styles : Built with TailwindCSS, offering extensive customization options to fit different design needs and themes.</li>
          <li>User-Friendly : Intuitive navigation structure that makes it easy for users to explore the website&apos;s content.</li>
        </span>
      </div>
      <div className="buttons flex flex-row gap-2 my-6">
        <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
        <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
      </div>
      {(!codeView) ? 
      (<div className="bg-slate-900 h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10">
        <NavDemo/>
        <div className="w-full h-3/4 flex justify-center items-center">
          <span className="text-3xl uppercase font-black">
            Landing Page Content
          </span>
        </div>
      </div>) :(<div className="bg-slate-900 h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10 flex justify-center items-center">Coming Soon...</div>)}
    </div>
  )
}

export default Page
