import React, { ReactNode } from 'react';
import Link from 'next/link';
import layout from '@/content/layout';
import { getComponents } from '@/lib/fetchCMSData';
import { Component } from '@/types/components';

export default async function Layout({ children }: Readonly<{ children: ReactNode }>) {
  const components: Component[] = await getComponents('name,slug,isActive,isNewComponent');

  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-[240px] shrink-0 py-8 px-6 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto hidden md:flex flex-col gap-8 border-r border-rule bg-surface scrollbar-thin">
        {/* Follow */}
        <div className="flex flex-col gap-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">Follow for updates</h3>
          <a
            href="https://x.com/Knight_s18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft text-sm hover:text-accent transition-colors duration-150"
          >
            X @Knight_s18
          </a>
        </div>

        {/* Docs */}
        <div className="flex flex-col gap-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">Documentation</h3>
          <nav className="flex flex-col gap-1">
            {layout.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-ink-soft text-sm py-0.5 hover:text-accent transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Components list */}
        <div className="flex flex-col gap-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">All Components</h3>
          <nav className="flex flex-col gap-0.5">
            {components.map((component, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <Link
                  href={`/components/${component.slug}`}
                  className="text-ink-soft text-sm py-0.5 hover:text-accent transition-colors duration-150"
                >
                  {component.name}
                </Link>
                {component?.isNewComponent && (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 rounded px-1 py-px">
                    new
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 px-4 md:px-10 py-6 md:py-8">
        {children}
      </main>
    </div>
  );
}
