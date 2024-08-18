import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "SparkUI",
  description: "SparkUI is a comprehensive and innovative UI library tailored to meet the needs of modern web development. Our library offers a robust selection of highly customizable components that enable developers to create responsive, visually appealing, and performance-optimized web interfaces. SparkUI is designed to integrate seamlessly with popular frontend frameworks like React, Next.js, and Vue.js, making it a versatile choice for any project. By prioritizing accessibility, speed, and user experience, SparkUI ensures that your websites not only look stunning but also perform exceptionally well on all devices. Whether you are building a landing page, an e-commerce site, or a complex web application, SparkUI provides the tools you need to streamline development and enhance user engagement. Optimized for search engines and fast loading times, SparkUI components are built with clean, semantic code that adheres to best practices in web development. This focus on quality ensures that your website ranks higher in search engine results, improving visibility and driving more organic traffic to your site. Elevate your web projects with SparkUI and create stunning, high-performance websites that stand out in search engine rankings and offer an exceptional user experience",
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
