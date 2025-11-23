'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

function Magnetic({children}) {
    const magnetic = useRef(null);

    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x);
            yTo(y)
        })
        magnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}

export default function MagneticEffect() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-code">
      <Magnetic>
        <button className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
          Hover Me!
        </button>
      </Magnetic>
    </div>
  );
}
