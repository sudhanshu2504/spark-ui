'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseFollower() {
  const cursor = useRef(null);
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  // Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Move custom cursor to follow the mouse
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);

  return (
    <div className={`styles.cursorContainer`}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          pointerEvents: 'none',
          width: cursorSize,
          height: cursorSize
        }}
        className={`h-4 w-4 fixed rounded-full bg-white`}
        ref={cursor}
      ></motion.div>
    </div>
  );
}
