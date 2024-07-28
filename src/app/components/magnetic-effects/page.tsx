'use client';
import React from 'react';
import Magnet from './components/magnetic-effect';
import { BsTwitterX, BsInstagram, BsGithub, BsDiscord, BsWindow,BsCodeSlash} from "react-icons/bs";
function Page() {
  const [codeView, setCodeView] = React.useState(false);
  return (
    <div className='text-white'>
        <h1 className="text-3xl font-primary pb-4">Magnetic Effect</h1>
        <p className='p-2 my-2'>The Magnetic Effect Component is a dynamic and interactive UI element designed to enhance user engagement by creating a magnet-like attraction effect. As users move their cursor near the component, it smoothly follows the cursor, creating a captivating and fluid motion. This effect can add a playful and modern touch to various elements such as buttons, images, and cards, making them stand out and inviting users to interact.</p>
        <div className='p-2 my-2'>
          <h1 className='text-lg'>Features :</h1>
          <span>
            <li>Smooth Interaction: The component uses Framer Motion&apos;s spring physics to create a smooth and natural motion, enhancing the overall user experience.</li>
            <li>Customizable Parameters: Easily adjustable parameters such as stiffness, damping, and mass allow you to fine-tune the motion to suit your design needs.</li>
            <li>Ease of Use: Simple to integrate into any React application, with minimal setup required.</li>
            <li>Engaging Visuals: Adds a modern and interactive visual effect that can make UI elements more appealing and noticeable.</li>
            <li>Non-Intrusive: The magnetic effect is subtle and non-intrusive, ensuring it enhances user experience without being distracting.</li>
          </span>
        </div>
        <div className="buttons flex flex-row gap-2 my-6">
          <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
          <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
        </div>
        {(!codeView) ? 
        (<div className="bg-code h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10">
          <div className="w-full h-full flex flex-col justify-center items-center bg-code">
            <p className='text-yellow-400 py-4'>Hover over the elements to see the effects</p>
            <div className="flex">

                <Magnet>
                  <div className="text-white text-3xl md:text-7xl hover:cursor-pointer p-5">
                    <BsTwitterX />
                  </div>
                </Magnet>
                
                <Magnet>
                  <div className="text-white text-3xl md:text-7xl hover:cursor-pointer p-5">
                    <BsInstagram />
                  </div>
                </Magnet>
                
                <Magnet>
                  <div className="text-white text-3xl md:text-7xl hover:cursor-pointer p-5">
                    <BsGithub />
                  </div>
                </Magnet>

                <Magnet>
                  <div className="text-white text-3xl md:text-7xl hover:cursor-pointer p-5">
                    <BsDiscord />
                  </div>
                </Magnet>

            
            </div>      
          </div>
        </div>) :(<div className="bg-code h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10 flex justify-center items-center">Coming Soon... Stay Tuned</div>)}
      </div>
  )
}

export default Page
