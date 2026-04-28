'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { IoSearch } from 'react-icons/io5';
import type { SearchableComponent } from '@/components/navbar';
import staticComponents from '@/content/components';

interface SearchProps {
  open: boolean;
  onClose: () => void;
  components?: SearchableComponent[];
}

export default function Search({ open, onClose, components = [] }: SearchProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Use CMS components if available, fall back to static list
  const items = components.length > 0
    ? components.map((c) => ({
        name: c.name,
        slug: c.slug,
        img: c.thumbnailURL || '',
        description: c.description || '',
        isCMS: true,
      }))
    : staticComponents.map((c) => ({
        name: c.name,
        slug: c.link,
        img: `/assests/components_preview/${c.img}`,
        description: c.description,
        isCMS: false,
      }));

  const filtered = query.trim()
    ? items.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  // Reset state when opened
  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && filtered[activeIndex]) {
        e.preventDefault();
        router.push(`/components/${filtered[activeIndex].slug}`);
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    },
    [filtered, activeIndex, router, onClose]
  );

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[71] flex items-start justify-center pt-[15vh] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          >
            <motion.div
              className="w-full max-w-lg bg-surface-2 border border-rule rounded-xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, y: -10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 border-b border-rule">
                <IoSearch className="text-ink-soft text-lg shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search components..."
                  className="flex-1 bg-transparent text-ink text-sm py-3.5 outline-none placeholder:text-ink-soft"
                />
                <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono text-ink-soft border border-ink-mute/40 rounded px-1.5 py-0.5">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[320px] overflow-y-auto py-2">
                {filtered.length > 0 ? (
                  filtered.map((c, i) => (
                    <button
                      key={c.slug}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-75 ${
                        i === activeIndex
                          ? 'bg-accent/10 text-accent'
                          : 'text-ink hover:bg-surface-3'
                      }`}
                      onClick={() => {
                        router.push(`/components/${c.slug}`);
                        onClose();
                      }}
                      onMouseEnter={() => setActiveIndex(i)}
                    >
                      {c.img && (
                        <div className="w-8 h-8 rounded-md border border-rule bg-surface-3 overflow-hidden shrink-0">
                          <img
                            src={c.isCMS ? c.img : c.img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="text-sm font-medium block truncate">{c.name}</span>
                        <span className="text-xs text-ink-mute block truncate">{c.description}</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <p className="text-ink-soft text-sm">No components found</p>
                    <p className="text-ink-mute text-xs mt-1">Try a different search term</p>
                  </div>
                )}
              </div>

              {/* Footer hints */}
              <div className="flex items-center gap-4 px-4 py-2.5 border-t border-rule text-[11px] text-ink-soft font-mono">
                <span className="flex items-center gap-1">
                  <kbd className="border border-ink-mute/40 rounded px-1 py-px">↑↓</kbd> navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="border border-ink-mute/40 rounded px-1 py-px">↵</kbd> open
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="border border-ink-mute/40 rounded px-1 py-px">esc</kbd> close
                </span>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
