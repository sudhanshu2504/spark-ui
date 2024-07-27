import React from 'react'
import CodeBlock from '@/components/codeblock';

function page() {
  return (
    <div className='container mx-auto h-auto'>
      <h1 className='font-primary text-2xl text-white pl-4'>Install NextJS</h1>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Create Next app</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npx create-next-app@latest`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>You need to make the choices as per the prompt :</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`      \nWhat is your project named? my-app\nWould you like to use TypeScript? No / Yes\nWould you like to use ESLint? No / Yes\nWould you like to use Tailwind CSS? No / Yes\nWould you like to use 'src/' directory? No / Yes\nWould you like to use App Router? (recommended) No / Yes\nWould you like to customize the default import alias (@/*)? No / Yes\nWhat import alias would you like configured? @/*
                `} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Start your app deployment :</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`cd my-app \nnpm run dev`} language="javascript" />
        </span>
      </div>
    </div>
  )
}

export default page
