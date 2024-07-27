'use client';
import React from 'react'
import components from '@/content/components';
const Card = (component: any) => {
  const navigate = (link: string) => {
    window.location.href = `/components/${link}`;
  }
  return (
    <div className='flex flex-col gap-1 w-[450px] max-w-full cursor-pointer' onClick={()=>navigate(component.link)}>
      <div className='w-full h-auto overflow-hidden border border-gray-600 rounded-md'>
        <img src="https://dummyimage.com/300x200/000/fff" alt="SparkUI" className='h-full w-full duration-300 hover:scale-110' />
      </div>
        <h1 className='font-primary font-bold text-lg'>{component.name}</h1>
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
