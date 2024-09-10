import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "SparkUI | Frontend Library",
  description: "Elevate your web projects with SparkUI and create stunning, high-performance websites that stand out in SEO and offer an exceptional user experience",
  keywords: "React, TypeScript, TailwindCSS, SparkUI, Frontend Library, Shadcn, Nextjs, Framer Motion, SEO, Web Development, Web Design, UI/UX, Components, Templates, Open Source, Free, Interfaces, Apple, Premium, Development, Library, Services",
  alternates: {
    canonical: 'https://www.sparkui.me',
  },

};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="bg-black">
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
