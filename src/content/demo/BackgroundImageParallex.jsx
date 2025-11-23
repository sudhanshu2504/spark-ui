'use client';
import { useEffect, React } from 'react';
import Lenis from 'lenis';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

export default function ParallexDemo() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollContainer.current,
      // content is automatically the first child usually, or we can specify
    })
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

  function IntroSection({ containerRef }) {
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
      target: targetRef,
      container: containerRef,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "150%"])
  
    return (
      <div className='h-full overflow-hidden' ref={targetRef}>
        <motion.div style={{y}} className='relative h-full'>
          <img src='https://howtostartabusinessindubai.com/wp-content/uploads/2022/08/metaverse-based-business-dubai.jpg' fill="true" alt="image" className='w-full h-full object-cover brightness-50'/>
        </motion.div>
      </div>
    )
  }
  function MainSection() {
    return (
        <div className='flex justify-center py-40 h-full items-center bg-yellow-400'>
            <p className='text-2xl md:text-5xl text-center max-w-[60vw] leading-none text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corporis vel ducimus, minima, deserunt optio omnis consectetur excepturi repudiandae amet odio fugit animi sit tempora sint qui eligendi. Omnis, dolore?</p>
        </div>
    )
  }
  function EndingSection({ containerRef }) {
      const targetRef = useRef();
      const { scrollYProgress } = useScroll({
          target: targetRef,
          container: containerRef,
          offset: ["start end", 'end start']
      })
      const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

      return (
          <div
          ref={targetRef} 
          className='relative flex items-center justify-center h-full overflow-hidden'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
          >
          <div className='relative z-10 py-10 text-white w-full h-full flex flex-col justify-between'>
              <p className='w-2/3 text-2xl md:text-4xl self-end'>Create Exciting Landing Designs using the image parallex Effects.</p>
              <p className='text-2xl md:text-4xl font-black w-full'>Background Image Parallax</p>
          </div>
          <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
              <motion.div style={{y}} className='relative w-full h-full object-cover bg-black z-[1]'>
              <img src='https://beaconvcfund.sgp1.cdn.digitaloceanspaces.com/2022/06/metaverse-cover-1288x724-1.jpeg' alt="image" className='h-full w-full object-cover brightness-50'/>
              </motion.div>
          </div>
          </div>
      )
  }
  return (
    <main ref={scrollContainer} className="h-full w-full overflow-y-auto">
      <div className="h-[300vh]">
        <div className="h-[100vh]">
            <IntroSection containerRef={scrollContainer} />
        </div>
        <div className="h-[100vh]">
            <MainSection />
        </div>
        <div className="h-[100vh]">
            <EndingSection containerRef={scrollContainer} />
        </div>
      </div>
    </main>
  );
}
