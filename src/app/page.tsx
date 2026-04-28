import React from "react";
import { HoverBorderGradient } from "@/components/ui/gradient-border";
import Logo from "@/components/logo";
import Link from "next/link";
import components from '@/content/components'
import { getHomePageData } from '@/lib/fetchCMSData';
import HeroParallaxSection from "@/components/home/HeroParallaxSection";
import Marquee from "@/components/ui/marquee";
import { TbComponents } from "react-icons/tb";
import { AnimatedSection, StaggerGrid, StaggerItem, GlowOrb } from "@/components/home/AnimatedSection";

const Content = ({ data }: { data: any }) => {
  const heroBlock = data?.content?.hero || {};
  const heroMetadata = heroBlock.metadata || {};
  const buttons = heroMetadata.buttons?.length
    ? heroMetadata.buttons
    : [
        { label: "Browse Components \u2192", link: "/components", style: "primary" },
        { label: "GitHub", link: "https://github.com/sudhanshu2504/spark-ui", style: "ghost" },
      ];

  return (
    <main className="min-h-[90vh] flex flex-col gap-6 justify-center items-center container mx-auto z-[1] py-16">
      {/* Pill */}
      <HoverBorderGradient
        containerClassName="rounded-full border-rule mx-auto"
        as="button"
        className="bg-surface flex items-center gap-2 text-xs"
      >
        <Logo size="xs" />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Introducing SparkUI</span>
      </HoverBorderGradient>

      {/* Headline */}
      <h1 className="font-sans font-bold text-ink text-center max-w-4xl px-4 leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
        Build with{' '}
        <span className="font-display italic font-normal text-accent">Spark</span>.{' '}
        Ship with{' '}
        <span className="font-display italic font-normal text-accent">Style</span>.
      </h1>

      {/* Sub-headline */}
      <p className="text-ink-soft text-center text-base md:text-lg max-w-xl px-4">
        {components.length} hand-crafted components. Free forever. New ones drop weekly.
      </p>

      {/* CTAs */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-4">
        {buttons.map((btn: any, idx: number) => (
          <Link
            key={idx}
            href={btn.link}
            className={
              btn.style === 'primary'
                ? 'inline-flex items-center text-[#0a0a0a] text-sm font-semibold rounded-lg bg-accent px-6 py-3 hover:bg-accent-2 transition-all duration-150 ease-out hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(245,166,35,0.25)] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-surface'
                : 'inline-flex items-center text-ink-soft text-sm font-medium rounded-lg border border-rule/60 bg-surface-2/50 backdrop-blur-sm px-6 py-3 hover:text-ink hover:border-ink-mute hover:bg-surface-2 transition-all duration-150 ease-out'
            }
          >
            {btn.label}
          </Link>
        ))}
      </div>

      {/* Tech row */}
      <div className="flex flex-row justify-center items-center gap-1 mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">
        <span>Built with</span>
        <span className="mx-1">&middot;</span>
        <span>React</span>
        <span className="mx-1">&middot;</span>
        <span>Tailwind</span>
        <span className="mx-1">&middot;</span>
        <span>Motion</span>
      </div>
    </main>
  )
}

const OurComponents = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={`md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-ink to-ink-mute text-center mb-6`}>Our Components</h1>
      <div className="flex flex-row flex-wrap gap-4">
        <Marquee className="[--duration:35s] antialiased h-[500px]">
          {components.map((component) => (
            <div key={component.name} className="flex flex-col gap-2 h-1/2 w-1/2 border border-rule rounded-md ">
              <img
                src={`/assests/components_preview/${component.img}`}
                alt={component.name}
                className="h-full w-full object-cover object-center"
              />
              <h3 className="text-ink">{component.name}</h3>
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
    <section className="w-full py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] -left-48 top-1/2 -translate-y-1/2 bg-accent/10 blur-[120px]" />
      <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 relative z-10">
        <AnimatedSection className="space-y-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Features</span>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl font-sans text-accent">{featuresBlock.title || "Feel the Spark"}</h2>
          <p className="text-ink-soft md:text-xl">
            {featuresBlock.description || "SparkUI offers a comprehensive suite of customizable components to elevate your web applications. From sleek UI elements to advanced interactive features, SparkUI has everything you need to create stunning user experiences."}
          </p>
        </AnimatedSection>
        <StaggerGrid className="grid gap-6">
          {featureList.length > 0 ? featureList.map((feature: any, idx: number) => (
            <StaggerItem key={idx}>
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="rounded-full p-2 text-ink">
                  <TbComponents className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl text-accent font-bold">{feature.title}</h3>
                  <p className="text-ink-soft">
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          )) : null}
        </StaggerGrid>
      </div>
    </section>
  );
}
/* ── Pick · Copy · Paste ─────────────────────────────── */
const steps = [
  { num: '01', title: 'Pick a component', body: 'Browse the collection. Hover for a live preview.' },
  { num: '02', title: 'Copy the source', body: 'One click. JSX + Tailwind classes — no npm install.' },
  { num: '03', title: 'Paste into your project', body: 'It works. Tweak the source to make it yours.' },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <AnimatedSection className="text-center mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft block mb-3">How it works</span>
        <h2 className="font-sans font-bold text-ink text-3xl md:text-4xl">
          Pick. Copy.{' '}
          <span className="font-display italic font-normal text-accent">Paste.</span>
        </h2>
      </AnimatedSection>
      <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s) => (
          <StaggerItem key={s.num}>
            <div className="bg-surface-2 border border-rule rounded-2xl p-7 group hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 h-full">
              <span className="font-mono text-sm text-accent mb-5 block">{s.num}</span>
              <h3 className="font-sans font-semibold text-ink text-lg mb-2">{s.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{s.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  </section>
);

/* ── Component Showcase Grid ─────────────────────────── */
const ComponentGrid = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <GlowOrb className="w-[600px] h-[600px] -right-64 top-0 bg-accent/8 blur-[140px]" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft block mb-3">Available now</span>
          <h2 className="font-sans font-bold text-ink text-3xl md:text-4xl">
            {components.length} components,{' '}
            <span className="font-display italic font-normal text-accent">free.</span>
          </h2>
        </div>
        <span className="text-ink-soft text-sm">+ more dropping weekly</span>
      </AnimatedSection>
      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {components.map((c) => (
          <StaggerItem key={c.name}>
            <Link
              href={`/components/${c.link}`}
              className="group bg-surface-2 border border-rule rounded-2xl overflow-hidden hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 block"
            >
              <div className="h-[180px] overflow-hidden border-b border-rule bg-surface-3 flex items-center justify-center">
                <img
                  src={`/assests/components_preview/${c.img}`}
                  alt={c.name}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-sans font-medium text-sm text-ink">{c.name}</span>
                {(c as any).latest && (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 rounded px-1.5 py-0.5">new</span>
                )}
              </div>
            </Link>
          </StaggerItem>
        ))}
        <StaggerItem>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-ink-mute/40 rounded-2xl min-h-[240px] hover:border-ink-mute transition-colors duration-200">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute mb-2">More dropping</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">weekly &rarr;</span>
          </div>
        </StaggerItem>
      </StaggerGrid>
    </div>
  </section>
);

/* ── Bottom CTA Strip ────────────────────────────────── */
const BottomCTA = () => (
  <section className="py-20 md:py-28">
    <AnimatedSection className="container mx-auto px-4 md:px-6">
      <div
        className="bg-surface-2 border border-rule rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(245,166,35,0.12), transparent 60%), var(--bg-2)',
        }}
      >
        <GlowOrb className="w-[400px] h-[400px] left-1/2 -translate-x-1/2 -top-48 bg-accent/15 blur-[100px]" />
        <div className="relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent block mb-4">Open source</span>
          <h2 className="font-sans font-bold text-ink text-3xl md:text-4xl mb-4 max-w-lg mx-auto">
            Ready to build something{' '}
            <span className="font-display italic font-normal text-accent">beautiful</span>?
          </h2>
          <p className="text-ink-soft text-base mb-8 max-w-md mx-auto">
            Every component is free, copy-pasteable, and built with React + Tailwind + Framer Motion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/components"
              className="inline-flex items-center text-[#0a0a0a] text-sm font-semibold rounded-lg bg-accent px-6 py-3 hover:bg-accent-2 transition-all duration-150 ease-out hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(245,166,35,0.25)]"
            >
              Browse Components &rarr;
            </Link>
            <Link
              href="https://github.com/sudhanshu2504/spark-ui"
              className="inline-flex items-center text-ink-soft text-sm font-medium rounded-lg border border-rule/60 bg-surface/50 backdrop-blur-sm px-6 py-3 hover:text-ink hover:border-ink-mute transition-all duration-150 ease-out"
            >
              Star on GitHub
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);
export default async function Home() {
  const data = await getHomePageData() || {};

  return (
    <>
      <HeroParallaxSection components={components} data={data} ContentComponent={<Content data={data} />} />
      <HowItWorks />
      <Features data={data} />
      <ComponentGrid />
      <BottomCTA />
    </>
  );
}
