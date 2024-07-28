'use client';
import React from 'react';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'
import Card from './components/cards-stack';

const projects = [
    {
      title: "Delhi, India",
      description: "The capital city of India, Delhi, is a blend of historic and modern attractions. Visitors can explore ancient monuments like the Red Fort and Humayun's Tomb, or enjoy the vibrant street life in markets like Chandni Chowk. Delhi's diverse culture and rich history make it a fascinating destination.",
      src: "image1.webp",
      color: "#BBACAF"
    },
    {
      title: "Taj Mahal, Agra",
      description: "One of the most iconic monuments in the world, the Taj Mahal is a stunning example of Mughal architecture. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble mausoleum attracts millions of visitors each year..",
      src: "image2.webp",
      color: "#977F6D"
    },
    {
      title: "Goa, India",
      description: "Famous for its beaches, Goa is a paradise for beach lovers. From the lively Baga Beach to the tranquil Palolem Beach, there is a spot for everyone. Goa also offers vibrant nightlife, colonial architecture, and lush greenery.",
      src: "image5.webp",
      color: "#88A28D"
    },
    {
      title: "Golden Temple, Amritsar",
      description: "The Golden Temple, or Harmandir Sahib, is the spiritual and cultural center of the Sikh religion. Its stunning golden architecture and serene surroundings make it a must-visit. The temple is known for its hospitality, serving free meals to thousands of visitors daily.",
      src: "image3.webp",
      color: "#C2491D"
    },
    {
      title: "Udaipur, Rajasthan",
      description: "Known as the City of Lakes, Udaipur is famous for its palaces and scenic beauty. The City Palace, overlooking Lake Pichola, offers a glimpse into the royal past of Rajasthan. Udaipur's romantic ambiance makes it a popular destination for couples.",
      src: "image4.webp",
      color: "#B62429"
    },
  ]

  export default function CardStack() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })
  
    useEffect( () => {
      const lenis = new Lenis()
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
  
    return (
      <main ref={container} className={`styles.main`}>
        {
          projects.map( (project, i) => {
            const targetScale = 1 - ( (projects.length - i) * 0.05);
            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
          })
        }
      </main>
    )
  }