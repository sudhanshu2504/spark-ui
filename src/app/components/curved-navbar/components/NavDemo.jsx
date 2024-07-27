'use client'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CurvedNavbar from './curved-navbar';
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
      <div className={`w-[45%]`}>
        <div className={`text-xl text-white w-fit font-black h-full flex items-center justify-center pl-4`}>
          LOGO
        </div>
      </div>
      <div className={`flex justify-end w-[45%]`}>
        <div onClick={() => {setIsActive(!isActive)}} className={`w-20 h-20 rounded-full flex flex-col items-center justify-center`}>
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