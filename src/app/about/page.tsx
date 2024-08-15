import React from 'react'
import Logo from "@/components/logo";
import { StarsBackground } from '@/components/ui/star-background';
import { ShootingStars } from '@/components/ui/shooting-stars';
function Page() {
  return (
        <div className="h-auto flex flex-col justify-center items-center">
        <h1 className='text-center text-3xl md:text-5xl my-10 font-primary text-white'>About SparkUI</h1>
        <div className="container mx-auto h-auto flex flex-wrap justify-center items-center my-10 md:my-20 gap-y-10">
            <div className="w-[95%] md:w-1/3 text-lg flex items-center justify-center">
            <Logo/>
            </div>
            <div className="w-[90%] md:w-2/3 h-full text-base md:text-xl text-white">
            SparkUI is a cutting-edge UI library crafted to elevate the web development experience by providing a suite of highly customizable, responsive, and visually striking components. Designed with both developers and designers in mind, SparkUI streamlines the creation of modern web interfaces, allowing you to build polished, interactive, and dynamic applications with ease. Whether you&apos;re developing a simple landing page or a complex web app, SparkUI's extensive collection of pre-built components, flexible customization options, and intuitive design principles will help you bring your creative visions to life efficiently and effectively. 
            <br />
            With a focus on performance and usability, SparkUI integrates seamlessly with popular frontend frameworks, empowering you to create stunning user experiences that are not only aesthetically pleasing but also fast, responsive, and accessible across all devices.
            </div>
        </div>
        <StarsBackground/>
        <ShootingStars minDelay={1000} maxDelay={2000}/>
        </div>
  )
}

export default Page
