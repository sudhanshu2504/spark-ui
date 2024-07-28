'use client';
import React from 'react';
import CardStack from './CardStackDemo';
import { BsWindow,BsCodeSlash} from "react-icons/bs";

function Page() {
  const [codeView, setCodeView] = React.useState(false);
  return (
    <div className='text-white'>
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
        </div>) :(<div className="bg-code h-[75vh] w-full border border-gray-500 rounded-md border-opacity-10 flex justify-center items-center">Coming Soon... Stay Tuned</div>)}
      </div>
  )
}

export default Page
