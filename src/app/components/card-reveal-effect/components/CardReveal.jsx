'use client';
import React from 'react';
import Image from 'next/image';
import bg from './bg.jpeg';

function CardReveal(){
  const [hovered, setHovered] = React.useState(false);

  return (
      <div className="relative w-64 max-w-[95%] min-h-80 rounded-lg bg-gray-100 shadow-md shadow-black flex items-center justify-center text-yellow text-center [transform:preserve-3d] [perspective:2000px]"
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
      >
        <div className={`absolute overflow-hidden top-0 h-full w-full shadow-md shadow-black origin-left rounded-lg flex flex-col items-center justify-between cursor-pointer transition-all duration-500 p-4 ${(hovered)?"[transform:rotateY(-80deg)]":""}
        `}>
          <Image src={bg} height={1080} width={1440} className='absolute top-0 h-full w-full'/>
          <div className='h-full w-full z-[1] flex flex-col justify-between'>
            <div className='flex flex-col gap-y-3'>
              <p className='text-xl font-semibold text-white'>Don&apos;t know the drill?</p>
              <p className='text-sm text-white'>Don&apos;t Worry just Hover on the Card</p>
            </div>
            <p className='text-sm text-yellow-500 font-semibold'>Designed By SparkUI</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 justify-center w-full items-center text-black">
          <div>
            <p>Got the drill?</p>
            <p>Loved it?</p>
          </div>
          <div className='text-sm'>
            <p>Do follow me on X</p>
            <a href='https://x.com/knight_s18' target='_blank'>@Knight_s18</a>
          </div>
        </div>
      </div>
  )
}
export default CardReveal;
