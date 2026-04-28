import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import {HeroUIProvider} from "@heroui/react";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";
import { getComponents } from "@/lib/fetchCMSData";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SparkUI | Frontend Library",
  description: "Elevate your web projects with SparkUI and create stunning, high-performance websites that stand out in SEO and offer an exceptional user experience",
  keywords: "React, TypeScript, TailwindCSS, SparkUI, Frontend Library, Shadcn, Nextjs, Framer Motion, SEO, Web Development, Web Design, UI/UX, Components, Templates, Open Source, Free, Interfaces, Apple, Premium, Development, Library, Services",
  alternates: {
    canonical: 'https://www.sparkui.site',
  },
  // Open Graph metadata (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'SparkUI - Your Ultimate UI Library',
    description: 'Explore SparkUI, a powerful and customizable UI library with a wide range of components for building modern web applications.',
    url: 'https://www.sparkui.site',
    siteName: 'SparkUI',
    images: [
      {
        url: 'https://www.sparkui.site/banner.png',
        width: 1200,
        height: 630,
        alt: 'SparkUI Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Twitter metadata
  twitter: {
    title: 'SparkUI - Your Ultimate UI Library',
    description: 'Discover SparkUI, the customizable UI library with reusable components for modern web design.',
    site: '@knight_s18', 
    creator: '@knight_s18',
    images: ['https://www.sparkui.site/banner.png'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const cmsComponents = await getComponents('name,slug,thumbnailURL,description');

  return (
    <html lang="en" className={`bg-surface ${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Analytics/>
        <HeroUIProvider>
          <Navigation components={cmsComponents} />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer/>
        </HeroUIProvider>
      </body>
    </html>
  );
}
