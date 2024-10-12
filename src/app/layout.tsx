import type { Metadata } from "next";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "SparkUI | Frontend Library",
  description: "Elevate your web projects with SparkUI and create stunning, high-performance websites that stand out in SEO and offer an exceptional user experience",
  keywords: "React, TypeScript, TailwindCSS, SparkUI, Frontend Library, Shadcn, Nextjs, Framer Motion, SEO, Web Development, Web Design, UI/UX, Components, Templates, Open Source, Free, Interfaces, Apple, Premium, Development, Library, Services",
  alternates: {
    canonical: 'https://www.sparkui.me',
  },
  // Open Graph metadata (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'SparkUI - Your Ultimate UI Library',
    description: 'Explore SparkUI, a powerful and customizable UI library with a wide range of components for building modern web applications.',
    url: 'https://www.sparkui.me',
    siteName: 'SparkUI',
    images: [
      {
        url: 'https://www.sparkui.me/banner.png',
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
    images: ['https://www.sparkui.me/banner.png'],
  },
  icons: {
    icon: 'https://sparkui.me/favicon.ico', 
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="bg-black">
      <body>
        <Analytics/>
        <NextUIProvider>
          <Navigation/>
          <div className="min-h-screen">
            {children}
          </div>
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
