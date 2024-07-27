'use client'
import React from "react";
import { SiSparkar } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
    <div className="w full h-20 bg-black border-t border-gray-500 border-opacity-25 flex justify-center items-center">
        <div className="w-[45%] h-auto flex text-white font-bold"><SiSparkar className="text-2xl mr-2"/> Spark<span className="text-yellow-400 font-black">UI</span></div>
        <div className="w-[45%] h-auto text-white flex justify-end">
            <a href="https://www.x.com/Knight_s18" target="_blank"><FaXTwitter/></a>
        </div>
    </div>
    </>
  );
}
