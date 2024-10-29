'use client';
import React,{useState} from 'react';
import CardReveal from './components/CardReveal';
import {BsWindow,BsCodeSlash} from "react-icons/bs";
import CodeBlock from '@/components/codeblock';

function Page() {
  const [codeView, setCodeView] = useState(false);
  
  const demoCode = `
  import React from "react";
  import CardReveal from '@/components/ui/card-reveal-effect';

  export default function CardDemo() {
    // for using multiple cards, you can use an array of objects with content
    const content = {
    title: \`Don't Know the Drill? \`,
    subtitle: \`Don't worry, Just hover on the card.\`,
    description: \`Got the Drill? Loved it? Do Follow me on X @Knight_s18\`,
    };

    return (
      // You can set the styling for div as per your need it is just a demo.
      <div className="flex items-center justify-center h-screen w-full bg-yellow-500"> 
        <CardReveal content={content}/>
      </div>  
    );
    }
  `;
  const code = `
'use client';
import React from 'react';
import Image from 'next/image';
import bg from 'path-to-your-background-image';

function CardReveal({content}){
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="relative w-64 max-w-[95%] min-h-80 rounded-lg bg-gray-100 shadow-md shadow-black flex items-center justify-center text-yellow text-center [transform:preserve-3d] [perspective:2000px]"
          onMouseEnter={()=>setHovered(true)}
          onMouseLeave={()=>setHovered(false)}
        >
          <div className={\`absolute overflow-hidden top-0 h-full w-full shadow-md shadow-black origin-left rounded-lg flex flex-col items-center justify-between cursor-pointer transition-all duration-500 p-4 \${(hovered)?"[transform:rotateY(-80deg)]":""}\`}>
            <Image src={bg} height={1080} width={1440} className='absolute top-0 h-full w-full'/>
            <div className='h-full w-full z-[1] flex flex-col justify-between'>
              <div className='flex flex-col gap-y-3'>
                <p className='text-xl font-semibold text-white'>{content.title}</p>
                <p className='text-sm text-white'>{content.subtitle}</p>
              </div>
              <p className='text-sm text-yellow-500 font-semibold'>Designed By SparkUI</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 justify-center w-full items-center text-black">
            <span className='w-auto mx-10'>{content.description}</span>
          </div>
    </div>
  )
}
export default CardReveal;

  `;
  ;
  return (<>
    <div className='text-white w-full'>
        <h1 className="text-3xl font-primary pb-4">Card Reveal Effect</h1>
        <p className='p-2 my-2'>The Card Reveal Effect Component offers an immersive experience by mimicking a book-opening animation on hover. This component is designed to reveal additional information in a visually appealing way, ideal for story-based content or product details, providing a dynamic and engaging user experience.</p>
        <div className='p-2 my-2'> 
          <h1 className='text-lg'>Features :</h1> 
            <li>Book-Opening Animation: The component uses a 3D hinge animation to give a realistic book-opening effect, allowing users to reveal content as if turning a page.</li>
            <li>Rich Content Display: Perfect for detailed cards, it offers space for multimedia elements like text, images, and icons, making it ideal for storytelling or product showcases.</li> 
            <li>Customizable Styling: Easily customize colors, fonts, and animation speed to match the visual style of your brand, allowing seamless integration.</li> 
            <li>Smooth Transitions: Built with Framer Motion or similar animation libraries, the component transitions smoothly between states, enhancing the interactive feel.</li> 
            <li>Responsive Design: Optimized for various devices and screen sizes, ensuring that the reveal effect is accessible on desktops, tablets, and mobile devices.</li> 
        </div>
        <div className="buttons flex flex-row gap-2 my-6">
          <button className={`${!codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(false)}><BsWindow/> Preview</button>
          <button className={`${codeView?("bg-slate-700/70 duration-400"):("")} border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`} onClick={()=>setCodeView(true)}><BsCodeSlash/> Code</button>
        </div>
        {(!codeView) ? 
        (<div className="min-h-[75vh] w-full border bg-yellow-500 border-gray-500 flex justify-center items-center rounded-md border-opacity-10">
          <CardReveal/>
        </div>) :(<div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10"><CodeBlock code={demoCode} language='javascript'/></div>)}
        
      <div className="flex flex-col border-l py-4">
        <span className='flex h-8 items-center gap-4'>
            <span className='bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full'></span>
            <span className='text-white'>Copy the Source code</span>
        </span>
        <span className='text-gray-300 text-sm ml-5 pb-2'>`components/ui/card-reveal-effect.jsx`</span>
        <span className='flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5'>
            <CodeBlock code={code} language="javascript" />
        </span>
      </div>
    </div>
  </>
  )
}

export default Page
