'use client';
import React from 'react';
import Link from 'next/link';
import { SiSparkar } from "react-icons/si";

const Card = (component: any) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Link 
      href={`/components/${component.slug}`}
      className='flex flex-col gap-[1px] w-[450px] max-w-full cursor-pointer no-underline' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-full h-auto overflow-hidden rounded-md border border-gray-500 border-opacity-50'>
       {(component.thumbnailURL)?(<img src={`${component.thumbnailURL}`} alt="SparkUI" className='h-full w-full duration-300 hover:scale-105'/>):
      (<div className='h-300px w-full duration-300 hover:scale-110'> <SiSparkar/> </div>)}
      </div>
      <h1 className='font-primary font-medium text-lg text-white'>{component.name}</h1>
      <p className={`font-normal text-sm transition-colors ${
        isHovered ? "text-gray-300" : "text-gray-500"
      }`}>
        {component.description}
      </p>
    </Link>
  )
};

export default Card;
