"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center relative overflow-hidden font-secondary">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full mx-4 h-full flex items-center justify-center"
      >
        <div className="backdrop-blur-xl bg-black/40 border h-full border-white/10 rounded-2xl p-8 shadow-2xl text-center relative overflow-hidden group flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 relative"
          >
            <h1 className="text-9xl font-black font-primary bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10 select-none">
              404
            </h1>
            <div className="absolute inset-0 blur-3xl bg-yellow-400/20 rounded-full -z-10" />
          </motion.div>

          <h2 className="text-2xl font-bold text-white mb-4 font-primary">
            Not Found
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Check the URL or head back to browse our collection.
          </p>

          <Link
            href="/components"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200 group/btn z-10"
          >
            <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
            Browse Components
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
