import React from 'react'
import CodeBlock from '@/components/codeblock';

function page() {
  return (
    <div className='container mx-auto h-auto'>
      <h1 className='font-primary text-2xl text-white pl-4'>Install Tailwind CSS</h1>
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
            <span className='text-white'>Install Tailwind CSS :</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm install -D tailwindcss postcss autoprefixer \nnpx tailwindcss init -p`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Configure your template paths :</span>
        </span>
        <span className='text-white pl-8 my-1 text-xs'>{`(tailwind.config.js)`}</span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using src' directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Add Tailwind to CSS :</span>
        </span>
        <span className='text-white pl-8 my-1 text-xs'>{`(global.css)`}</span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`@tailwind base;\n@tailwind components;\n@tailwind utilities;`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Start your development :</span>
        </span>
        <span className='flex h-auto items-center max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm run dev`} language="typescript" />
        </span>
      </div>
    </div>
  )
}

export default page
