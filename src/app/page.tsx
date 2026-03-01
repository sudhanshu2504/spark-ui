import React from "react";
import { HoverBorderGradient } from "@/components/ui/gradient-border";
import Logo from "@/components/logo";
import Link from "next/link";
import components from '@/content/components'
import { getHomePageData } from '@/lib/fetchCMSData';
import HeroParallaxSection from "@/components/home/HeroParallaxSection";
import Marquee from "@/components/ui/marquee";
import { TbComponents } from "react-icons/tb";

const Content = ({ data }: { data: any }) => {
  // Extracting data dynamically from CMS
  const heroBlock = data?.content?.hero || {};
  const heroMetadata = heroBlock.metadata || {};
  
  return (
    <main className="min-h-[90vh] flex flex-col md:flex-row gap-3 justify-evenly items-center container mx-auto z-[1]">
      <div className="">
        <Logo />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-6">
          <HoverBorderGradient
            containerClassName="rounded-full border-gray-600 border-opacity-35 mx-auto"
            as="button"
            className="bg-black flex items-center text-sm"
          >
            <span className="bg-clip-text mx-2 z-0 bg-gradient-to-br to-[rgb(255,255,255,0.18)] from-[rgb(255,255,255,0.38)]">{heroMetadata.badge || heroBlock.title || "Introducing SparkUI"}</span>
          </HoverBorderGradient>
          <h1 
            className="font-black md:text-4xl text-base text-center text-white text-wrap max-w-screen-md px-4" 
            dangerouslySetInnerHTML={{ __html: heroBlock.description || "Transform your web projects into Spark, the next-generation UI Library designed for seamless, dynamic, and stunning user interfaces." }} 
          />
        </div>
        <div className="flex flex-col lg:my-10 my-4 gap-y-4">
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 ">
            {/* Map buttons from CMS if available, otherwise fallback to mock data */}
            {(heroMetadata.buttons || []).map((btn: any, idx: number) => (
              <Link 
                key={idx} 
                href={btn.link} 
                className={btn.style === 'primary' ? 'text-black text-sm md:text-lg rounded-lg bg-white px-4 py-2 md:px-6 md:py-3' : 'text-white text-sm md:text-lg border border-white rounded-lg px-4 py-2 md:px-6 md:py-3'}
              >
                {btn.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-center flex-wrap gap-2 my-2 lg:my-10">
            {/* Map techStack from CMS if available, otherwise fallback to mock data */}
            {(heroMetadata.techStack || [])?.map((tech: any, idx: number) => (
              <div key={idx} className="flex items-center gap-1 md:gap-2">
                <div dangerouslySetInnerHTML={{ __html: tech.iconSvg }} />
                <h3 className="font-bold text-gray-400">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

const OurComponents = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={`md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 text-center mb-6`}>Our Components</h1>
      <div className="flex flex-row flex-wrap gap-4">
        <Marquee className="[--duration:35s] antialiased h-[500px]">
          {components.map((component) => (
            <div key={component.name} className="flex flex-col gap-2 h-1/2 w-1/2 border border-gray-500/50 rounded-md ">
              <img
                src={`/assests/components_preview/${component.img}`}
                alt={component.name}
                className="h-full w-full object-cover object-center"
              />
              <h3 className="text-white">{component.name}</h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const Features = ({ data }: { data: any }) => {
  // Setup fallback data based on content block index mapping if available
  const featuresBlock = data?.content?.features || {};
  const featureList = featuresBlock.metadata?.features || [];

  return (
    <section className="w-full py-20 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-black">
            Features
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl uppercase font-primary text-yellow-400">{featuresBlock.title || "Feel the Spark"}</h2>
          <p className="text-gray-200 md:text-xl">
            {featuresBlock.description || "SparkUI offers a comprehensive suite of customizable components to elevate your web applications. From sleek UI elements to advanced interactive features, SparkUI has everything you need to create stunning user experiences."}
          </p>
        </div>
        <div className="grid gap-6">
          {featureList.length > 0 ? featureList.map((feature: any, idx: number) => (
            <div key={idx} className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="rounded-full p-2 text-white">
                <TbComponents className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl text-yellow-400 font-bold">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
const TryItNow = ({ data }: { data: any }) => {
  const ctaBlock = data?.content?.tryItNow || {};
  const ctaButton = ctaBlock.metadata?.button || { label: "Try It Now", link: "/components" };

  return (
    <section className="py-60 md:py-40 bg-yellow-400 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black">{ctaBlock.title || "Unlock the Spark of Premium UI"}</h2>
        <p className="text-black/75">
          {ctaBlock.description || "Our library of high-quality components is designed to help you build stunning and responsive web applications with ease."}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href={ctaButton.link || "/components"}
            className="inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm md:text-base font-medium text-yellow-400 shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#1e293b]"
            prefetch={false}
          >
            {ctaButton.label || "Try It Now"}
          </Link>
        </div>
      </div>
    </section>
  )
}
const Contribute = ({ data }: { data: any }) => {
  const joinBlock = data?.content?.contribute || {};
  const joinButton = joinBlock.metadata?.button || { label: "Contribute Now", link: "/contribute" };

  return (
    <section className="py-60 md:py-40 px-4 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{joinBlock.title || "Looking forward to contribute as an Developer?"}</h2>
        <p className="text-gray-400">
          {joinBlock.description || "Expand your network and contribute to the open-source community by becoming a SparkUI contributor."}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href={joinButton.link || "/contribute"}
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#1e293b]"
            prefetch={false}
          >
            {joinButton.label || "Contribute Now"}
          </Link>
        </div>
      </div>
    </section>
  )
}
export default async function Home() {
  const data = await getHomePageData() || {};

  return (
    <>
      <HeroParallaxSection components={components} data={data} ContentComponent={<Content data={data} />} />
      <Features data={data} />
      <TryItNow data={data} />
      <Contribute data={data} />
    </>
  );
}
