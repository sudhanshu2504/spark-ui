import React, { ReactNode } from 'react';
import Link from 'next/link';
import layout from '@/content/layout.js';
import components from '@/content/components.js';


export default function Layout({children,}: Readonly<{children: ReactNode;}>){
  return (
    <>
      <div className="flex flex-row">
        <main className='bg-black w-1/5 py-10 h-full sticky top-14 drop-shadow-xl md:flex flex-col justify-start items-center hidden'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-white font-semibold'>Follow for updates</h1>
              <a href='https://x.com/Knight_s18' target='_blank' className='text-gray-400 text-sm'>X @Knight_s18</a>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-white font-semibold'>Documentation</h1>
              {layout.map((item, index) => (
                <Link href={`${item.link}`} key={index} className='text-gray-400 text-sm cursor-pointer hover:text-yellow-400 duration-150'>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-white font-semibold'>All Components</h1>
              {components.map((component, index) => (
                <div key={index} className='py-1'>
                  <Link href={`/components/${component.link}`} className='text-gray-400 text-sm hover:text-yellow-400 duration-150'>
                    {component.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
        <main className="flex md:w-4/5 w-full container ml-auto px-4 py-8">
          {children}
        </main>
      </div>
    </>
  );
};

