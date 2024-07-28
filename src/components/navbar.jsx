'use client'
import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SiSparkar } from "react-icons/si";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 1, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.25
  });

  return (<>
  <div className="sticky top-0 h-16 flex justify-center items-center text-white bg-black z-[5]">
    <a href="/" className="w-2/5 font-bold text-lg flex items-center">
      <SiSparkar className="text-2xl mr-2"/> Spark<span className="text-yellow-400 font-black">UI</span>
    </a>
    <div className="w-2/5 flex justify-end">
      <FaBarsStaggered className="text-xl cursor-pointer" onClick={()=>setIsMenuOpen(true)}/>
    </div>
  </div>
  {<div ref={ref} className={`${(isMenuOpen)?'translate-y-0 delay-200':"-translate-y-full delay-0"}  duration-500 transition-transform h-screen w-screen bg-code fixed z-50 top-0`}>
    <div className="container mx-auto h-4/5">
      <div className="h-full">
          <div className="w-full flex justify-end">
            <button className="font-black font-primary text-4xl mr-5 mt-5 p-2 text-white justify-end" onClick={()=>setIsMenuOpen(false)}><IoClose/></button>
          </div>
          <div className="h-full w-full flex flex-col justify-around items-center">
            <div className="overflow-hidden">
              <motion.p variants={animation} initial="initial" animate={inView ? "enter" : ""} className="m-0 text-white text-3xl"><a href="/" onClick={()=>setIsMenuOpen(false)}>Home</a></motion.p>
              </div>
            <div className="overflow-hidden">
              <motion.p variants={animation} initial="initial" animate={inView ? "enter" : ""} className="m-0 text-white text-3xl"><a href="/about" onClick={()=>setIsMenuOpen(false)}>About</a></motion.p>
              </div>
            <div className="overflow-hidden">
              <motion.p variants={animation} initial="initial" animate={inView ? "enter" : ""} className="m-0 text-white text-3xl"><a href="/components" onClick={()=>setIsMenuOpen(false)}>Components</a></motion.p>
              </div>
            <div className="overflow-hidden">
              <motion.p variants={animation} initial="initial" animate={inView ? "enter" : ""} className="m-0 text-white text-3xl"><a href="/pricing" onClick={()=>setIsMenuOpen(false)}>Pricing</a></motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p variants={animation} initial="initial" animate={inView ? "enter" : ""} className="m-0 text-white text-3xl"><a href="/contribute" onClick={()=>setIsMenuOpen(false)}>Contribute</a></motion.p>
            </div>
          </div>
      </div>
    </div>
  </div>}
  {<div className={`${(isMenuOpen)?'translate-y-0':"-translate-y-full delay-200"} duration-500 transition-transform h-screen w-screen bg-yellow-500 fixed z-[49] top-0`}>
    </div>}
  </>
  );
}
