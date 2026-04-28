'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from 'motion/react';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose, IoSearch } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import Logo from "@/components/logo";
import Search from "@/components/search";

export interface SearchableComponent {
  name: string;
  slug: string;
  thumbnailURL?: string;
  description?: string;
}

const navLinks = [
  { label: 'Components', href: '/components' },
  { label: 'Docs', href: '/docs/install-nextjs' },
];

export default function Navigation({ components = [] }: { components?: SearchableComponent[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── Main Nav Bar ─────────────────────────────── */}
      <nav
        className={`sticky top-0 z-[50] h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-rule'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Logo size="lg" showWordmark />
        </Link>

        {/* Center: Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft text-sm font-medium px-3 py-1.5 rounded-lg hover:text-ink hover:bg-surface-2 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/sudhanshu2504/spark-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft text-sm font-medium px-3 py-1.5 rounded-lg hover:text-ink hover:bg-surface-2 transition-colors duration-150 inline-flex items-center gap-1.5"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>
        </div>

        {/* Right: Search + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:inline-flex items-center gap-2 text-ink-soft text-sm rounded-lg border border-rule bg-surface-2/60 px-3 py-1.5 hover:text-ink hover:border-ink-mute hover:bg-surface-2 transition-colors duration-150"
            aria-label="Search components"
          >
            <IoSearch className="text-base" />
            <span className="text-xs font-medium">Search</span>
            <kbd className="text-[10px] font-mono text-ink-soft border border-rule rounded px-1.5 py-0.5 ml-1">⌘ K</kbd>
          </button>
          <button
            className="md:hidden flex items-center gap-2 text-ink"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <IoSearch className="text-lg" onClick={(e) => { e.stopPropagation(); setIsSearchOpen(true); }} />
            <FaBarsStaggered className="text-xl" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ──────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Amber flash layer */}
            <motion.div
              className="fixed inset-0 bg-accent z-[59]"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%', transition: { delay: 0.15 } }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            />

            {/* Menu panel */}
            <motion.div
              className="fixed inset-0 bg-surface-2 z-[60] flex flex-col"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
            >
              {/* Top bar */}
              <div className="h-16 flex items-center justify-between px-6">
                <Logo size="lg" showWordmark />
                <button
                  className="text-ink text-3xl p-1"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <IoClose />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex flex-col justify-center items-center gap-8">
                {[
                  { label: 'Home', href: '/' },
                  ...navLinks,
                  { label: 'GitHub', href: 'https://github.com/sudhanshu2504/spark-ui' },
                ].map((link, i) => (
                  <div key={link.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.33, 1, 0.68, 1],
                        delay: 0.1 + i * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="text-ink hover:text-accent text-3xl font-medium transition-colors duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="px-6 pb-10">
                <Link
                  href="/components"
                  className="flex items-center justify-center w-full text-[#0a0a0a] text-base font-semibold rounded-xl bg-accent py-4 hover:bg-accent-2 transition-colors duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse Components &rarr;
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <Search open={isSearchOpen} onClose={() => setIsSearchOpen(false)} components={components} />
    </>
  );
}
