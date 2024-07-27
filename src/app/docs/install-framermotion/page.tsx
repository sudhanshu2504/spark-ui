import React from 'react'
import CodeBlock from '@/components/codeblock';

function page() {
  return (
    <div className='container mx-auto h-auto'>
      <h1 className='font-primary text-2xl text-white pl-4'>Install Framer Motion</h1>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Initialize your Project</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npx create-next-app@latest my-project --typescript --eslint \ncd my-project
`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Install Framer Motion :</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm install framer-motion`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>You can start using by importing Framer Motion:</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`import { motion } from "framer-motion"`} language="typescript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>For detailed Documentation and usage you can visit Framer Motion:</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
          <a href="https://www.framer.com/motion/introduction/" target="_blank" className='underline text-gray-400'>Documentaion Framer Motion</a>
        </span>
      </div>
    </div>
  )
}

export default page
