'use client';
import React,{useState} from 'react';
import NavDemo from '@/app/components/curved-navbar/components/NavDemo';
import { BsWindow,BsCodeSlash} from "react-icons/bs";
import ParallexDemo from './ParallexDemo';
function page() {
  const [codeView, setCodeView] = useState(false);
  return (
    <div className='text-white'>
      <h1 className="text-3xl font-primary pb-4">Background Image Parallex</h1>
      <p className='p-2 my-2'>The Background Image Parallax Effect is a visually captivating UI feature that creates an illusion of depth and movement on a webpage. As users scroll through the content, the background images move at a slower pace compared to the foreground content, producing a stunning 3D-like effect. This technique enhances the user experience by adding a dynamic and engaging element to your website.</p>
      <div className='p-2 my-2'>
        <h1 className='text-lg'>Features :</h1>
        <span>
          <li>Depth Illusion: Creates a perception of depth by making background images move slower than the foreground content, giving a 3D-like effect.</li>
          <li>Smooth Scrolling: Ensures fluid and seamless transitions between different sections of the webpage, enhancing the overall user experience.</li>
          <li>Customizable Speed: Allows for easy adjustment of the parallax scrolling speed to match the design and aesthetic requirements of your website.</li>
          <li>Responsive Design: Adapts to various screen sizes and devices, ensuring a consistent visual experience across desktops, tablets, and smartphones.</li>
          <li>Lightweight and Efficient: Minimal impact on performance, ensuring that the parallax effect enhances the user experience without compromising the website's speed and responsiveness.</li>
        </span>
      </div>
      <div className="buttons flex flex-row gap-2 my-6">
        <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
        <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
      </div>
      {(!codeView) ? 
      (<div className="bg-black h-auto w-full border border-gray-500 rounded-md border-opacity-10">
        <ParallexDemo/>
      </div>) :(<div className="bg-slate-900 h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10 flex justify-center items-center">Coming Soon...</div>)}
    </div>
  )
}

export default page
