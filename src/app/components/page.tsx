import React from 'react'
import components from '@/content/components';
import { getComponents } from '@/lib/fetchCMSData';
import { Component } from '@/types/components';
import Card from '@/components/ui/components_card';

async function page() {
  const components: Component[] = await getComponents('name,slug,thumbnailURL,description');
  console.log(components.length)
  
  return (
    <div className='text-white flex flex-row flex-wrap items-start justify-center w-full gap-y-8 gap-x-2 h-auto'>
      {components.map((component, index) => {
        return (
            <Card key={index} {...component}/>
        )
      })}
      <div className='flex flex-col gap-1 w-[450px] max-w-full cursor-pointer'>
      <div className='w-full h-auto overflow-hidden rounded-md border border-gray-500 border-opacity-50'>
       <img src={`./assests/components_preview/coming_soon.png`} alt="SparkUI" className='h-full w-full duration-300 hover:scale-105' />
      </div>
        <h1 className='font-primary font-medium text-lg'>Coming Soon...</h1>
        <p className='font-normal text-sm'></p>
    </div>
    </div>
  )
}

export default page
