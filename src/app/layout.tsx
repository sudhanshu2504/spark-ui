import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Spark UI - Frontend Library",
  description: "Frontend based React and Tailwind CSS Library that provides you an access to various components and utilities.",
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
