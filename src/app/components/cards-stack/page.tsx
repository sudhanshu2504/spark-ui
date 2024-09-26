'use client';
import React from 'react';
import CardStack from './CardStackDemo';
import { BsWindow,BsCodeSlash} from "react-icons/bs";
import CodeBlock from '@/components/codeblock';

function Page() {
  const [codeView, setCodeView] = React.useState(false);
  const demoCode = `
'use client';
import React from 'react';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Card from '@/components/ui/cards-stack';

const sections = [
    {
      title: "Delhi, India",
      description: "The capital city of India, Delhi, is a blend of historic and modern attractions. Visitors can explore ancient monuments like the Red Fort and Humayun's Tomb, or enjoy the vibrant street life in markets like Chandni Chowk. Delhi's diverse culture and rich history make it a fascinating destination.",
      src: "image1.webp",
      color: "#BBACAF"
    },
    {
      title: "Taj Mahal, Agra",
      description: "One of the most iconic monuments in the world, the Taj Mahal is a stunning example of Mughal architecture. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble mausoleum attracts millions of visitors each year..",
      src: "image2.webp",
      color: "#977F6D"
    },
    {
      title: "Goa, India",
      description: "Famous for its beaches, Goa is a paradise for beach lovers. From the lively Baga Beach to the tranquil Palolem Beach, there is a spot for everyone. Goa also offers vibrant nightlife, colonial architecture, and lush greenery.",
      src: "image5.webp",
      color: "#88A28D"
    },
    {
      title: "Golden Temple, Amritsar",
      description: "The Golden Temple, or Harmandir Sahib, is the spiritual and cultural center of the Sikh religion. Its stunning golden architecture and serene surroundings make it a must-visit. The temple is known for its hospitality, serving free meals to thousands of visitors daily.",
      src: "image3.webp",
      color: "#C2491D"
    },
    {
      title: "Udaipur, Rajasthan",
      description: "Known as the City of Lakes, Udaipur is famous for its palaces and scenic beauty. The City Palace, overlooking Lake Pichola, offers a glimpse into the royal past of Rajasthan. Udaipur's romantic ambiance makes it a popular destination for couples.",
      src: "image4.webp",
      color: "#B62429"
    },
  ]

  export default function CardStack() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })
  
    useEffect(() => {
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      
      return () => {
        if (lenis) {
          lenis.destroy(); // Clean up Lenis instance
        }
      };
    },[]);
  
    return (
      <main ref={container}>
        {
          sections.map( (section, i) => {
            const targetScale = 1 - ( (sections.length - i) * 0.05);
            return <Card key={\`p_\${i}\`\} i={i} {...section} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
          })
        }
      </main>
    )
  }`;
  const code =`
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
    <div ref={container} className={\`h-screen flex items-center justify-center sticky top-0\`}>
      <motion.div 
        style={{backgroundColor: color, scale, top:\`calc(-5vh + $\{i * 25}px)\`}} 
        className={\`flex flex-col relative  h-[70%] w-full rounded-3xl p-10 \`} >
        <h2 className='text-center m-0 text-2xl'>{title}</h2>
        <div className={\`flex flex-row h-full mt-10 gap-3\`}>
          <div className={\`w-full md:w-2/5 relative top-[10%]\`}>
            <p className='text-base'>{description}</p>
          </div>

          <div className={\`relative w-3/5 h-full rounded-md overflow-hidden hidden md:inline-block\`}>
            <motion.div
              className={\`w-full h-full\`}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={\`/assests/images/cards-stack/$\{src}\`}
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
  `;
  return (
    <div className='text-white w-full'>
        <h1 className="text-3xl font-primary pb-4">Cards Stack</h1>
        <p className='p-2 my-2'>The Cards Stack Component is a visually engaging and interactive UI element designed to display a collection of cards in an overlapping, stacked format. This component enhances user interaction by allowing the cards to dynamically respond to user actions, creating a sense of depth and motion. Ideal for showcasing portfolios, product listings, or any content that benefits from a layered presentation.</p>
        <div className='p-2 my-2'>
          <h1 className='text-lg'>Features :</h1>
          <span>
            <li>Dynamic Interaction: The component leverages Framer Motion to provide smooth animations and transitions, making the card stack visually appealing and interactive.</li>
            <li>Customizable Layout: Easily adjustable parameters such as spacing, alignment, and animation duration allow for fine-tuning the stack to match your design requirements.</li>
            <li>Ease of Integration: Simple to integrate into any React application, with minimal setup required, making it accessible for developers of all skill levels.</li>
            <li>Engaging Design: Adds a modern and sophisticated visual effect that enhances the overall aesthetics of your UI, making content more attractive and engaging.</li>
            <li>Responsive and Accessible: Designed to be fully responsive and accessible, ensuring a consistent and user-friendly experience across different devices and screen sizes.</li>
          </span>
        </div>

        <div className="buttons flex flex-row gap-2 my-6">
          <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
          <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
        </div>
        {(!codeView) ? 
        (<div className="bg-code p-5 relative max-h-auto w-full border border-gray-500 rounded-md border-opacity-10">
          <CardStack/>
        </div>) : (<div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
        <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Install Dependencies</span>
        </span>
        <span className='flex h-auto max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={`npm install framer-motion lenis`} language="javascript" />
        </span>
      </div>
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Copy the Source code</span>
        </span>
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/card-stack.tsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>

      </div>
  )
}

export default Page
