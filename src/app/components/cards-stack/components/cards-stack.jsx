'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';



export default function Card ({i, title, description, src, color, progress, range, targetScale}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={`h-screen flex items-center justify-center sticky top-0`}>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={`flex flex-col relative  h-[70%] w-full rounded-3xl p-10 `} >
        <h2 className='text-center m-0 text-2xl'>{title}</h2>
        <div className={`flex flex-row h-full mt-10 gap-3`}>
          <div className={`w-full md:w-2/5 relative top-[10%]`}>
            <p className='text-base'>{description}</p>
          </div>

          <div className={`relative w-3/5 h-full rounded-md overflow-hidden hidden md:inline-block`}>
            <motion.div
              className={`w-full h-full`}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/assests/images/cards-stack/${src}`}
                alt="image"
                className='object-cover'
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}



