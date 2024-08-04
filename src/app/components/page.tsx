'use client';
import React from 'react'
import components from '@/content/components';
import { SiSparkar } from "react-icons/si";

const Card = (component: any) => {
  const navigate = (link: string) => {
    window.location.href = `/components/${link}`;
  }
  return (
    <div className='flex flex-col gap-1 w-[450px] max-w-full cursor-pointer' onClick={()=>navigate(component.link)}>
      <div className='w-full h-auto overflow-hidden rounded-md border border-gray-500 border-opacity-50'>
       {(component.img)?(<img src={`./assests/components_preview/${component.img}`} alt="SparkUI" className='h-full w-full duration-300 hover:scale-105' />):
      (<div className='h-300px w-full duration-300 hover:scale-110'> <SiSparkar/> </div>)}
      </div>
        <h1 className='font-primary font-medium text-lg'>{component.name}</h1>
        <p className='font-normal text-sm'>{component.description}</p>
    </div>
  )
}

function page() {
  
  return (
    <div className='text-white flex flex-row flex-wrap items-start justify-center w-full gap-y-8 gap-x-2 h-auto'>
      {components.map((component, index) => {
        return (
            <Card key={index} {...component}/>
        )
      })}
    </div>
  )
}

export default page
