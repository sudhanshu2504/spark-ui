'use client';
import React from 'react';
import NavDemo from '@/app/components/curved-navbar/components/NavDemo';
import { BsWindow,BsCodeSlash} from "react-icons/bs";
import CodeBlock from '@/components/codeblock';

function Page() {
  const [codeView, setCodeView] = React.useState(false);
  const code = `
'use client'
import {React, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
]
const menuSlide = {
initial: {x: "calc(100% + 100px)"},
enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}
const slide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}
const scale = {
  open: {scale: 1, transition: {duration: 0.3}},
  closed: {scale: 0, transition: {duration: 0.4}}
}
function Curve() {

    const initialPath = \`M100 0 L200 0 L200 $\{window.innerHeight} L100 $\{window.innerHeight} Q-100 $\{window.innerHeight/2} 100 0\`
    const targetPath = \`M100 0 L200 0 L200 \${window.innerHeight} L100 \${window.innerHeight} Q100 \${window.innerHeight/2} 100 0\`
    
    const curve = {
      initial: {
          d: initialPath
      },
      enter: {
          d: targetPath,
          transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
      },
      exit: {
          d: initialPath,
          transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
      }
    }
  
    return (
      <svg className={\`absolute top-0 -left-[99px] w-[100px] stroke-none h-full fill-[rgb(255,224,69)]\`}>
          <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
      </svg>
    )
  }
  function Footer() {
    return (
      <div className={\`flex w-full text-sm justify-between\`}>
          <a>Link 1</a>
          <a>Link 2</a>
          <a>Link 3</a>
          <a>Link 4</a>
      </div>
    )
  }
  function NavLink({data, isActive, setSelectedIndicator}) {
    
    const { title, href, index} = data;
  
    return (
      <motion.div className={\`relative flex items-center\`} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={\`w-2.5 h-2.5 bg-black rounded-full absolute -left-8\`}></motion.div>
        <Link href={href} className='uppercase font-black'>{title}</Link>
      </motion.div>
    )
  }
export default function CurvedNavbar({isActive, setIsActive}) {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  
    return (
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={\`h-screen w-screen max-w-screen-sm fixed right-0 top-0 text-black bg-[rgb(255,224,69)] z-10\`}>
        <div className='w-full flex justify-end text-3xl p-4' onClick={()=>setIsActive(false)}><IoClose className='text-3xl'/></div>
         <div className={\`styles.body h-full p-24 flex flex-col justify-between\`}>
              <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={\`flex flex-col text-5xl gap-3 mt-20\`}>
                      <div className={\`text-gray-900 border-b border-gray-800 uppercase text-sm mb-10\`}>
                          <p>Brand Logo</p>
                      </div>
                      {
                        navItems.map( (data, index) => {
                          return <NavLink key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></NavLink>
                        })
                      }
              </div>
              <Footer />
          </div>
          <Curve />
      </motion.div>
    )
  }
  `;
  const demoCode = `
'use client'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CurvedNavbar from '@/components/ui/curved-navbar';
import { FaBarsStaggered } from "react-icons/fa6";

export default function NavDemo() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <div>
    <div className='h-auto w-full flex justify-around bg-black border-b'>
      <div className={\`w-[45%]\`}>
        <div className={\`text-xl text-white w-fit font-black h-full flex items-center justify-center pl-4\`}>
          LOGO
        </div>
      </div>
      <div className={\`flex justify-end w-[45%]\`}>
        <div onClick={() => {setIsActive(!isActive)}} className={\`w-20 h-20 rounded-full flex flex-col items-center justify-center\`}>
          {<FaBarsStaggered className='text-2xl'/>}
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <CurvedNavbar isActive={isActive} setIsActive={setIsActive}/>}
    </AnimatePresence>
    </div>
  )
}
  `;
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
      (<div className="bg-code h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10">
        <NavDemo/>
        <div className="w-full h-3/4 flex justify-center items-center">
          <span className="text-3xl uppercase font-black">
            Landing Page Content
          </span>
        </div>
      </div>) : (<div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
        <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Install Dependencies</span>
        </span>
        <span className='flex h-auto max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm install framer-motion react-icons`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Copy the Source code</span>
        </span>
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/curved-navbar.jsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </div>
  )
}

export default Page
