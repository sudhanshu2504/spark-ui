'use client';
import React from 'react';
import Magnet from './components/magnetic-effect';
import CodeBlock from '@/components/codeblock';
import { BsTwitterX, BsInstagram, BsGithub, BsDiscord, BsWindow,BsCodeSlash} from "react-icons/bs";

function Page() {
  const [codeView, setCodeView] = React.useState(false);
  const code = `
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Magnetic({children}) {
    const magnetic = useRef(null);

    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x);
            yTo(y)
        })
        magnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}
  `;
  const demoCode = `
  import React from 'react';
  import Magnet from '@/components/ui/magnetic-effect';
  import { BsTwitterX, BsInstagram, BsGithub, BsDiscord } from "react-icons/bs";

  export default function MagneticDemo() {
    return (
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
    )
  };
  `;
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
        </div>) : (<div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
        <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Install Dependencies</span>
        </span>
        <span className='flex h-auto max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm install gsap`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Copy the Source code</span>
        </span>
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/magnetic-effect.jsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
      </div>
  )
}

export default Page
