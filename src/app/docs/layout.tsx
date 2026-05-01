import React, { ReactNode } from 'react';
import layout from '@/content/layout';
import { getComponents } from '@/lib/fetchCMSData';
import { Component } from '@/types/components';
import constants from '@/utils/constants';
import SidebarLink from '@/components/docs/SidebarLink';

export default async function DocsLayout({ children }: Readonly<{ children: ReactNode }>) {
  const components: Component[] = await getComponents(constants.CMS.COMPONENTS_FIELDS);

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

        {/* Documentation */}
        <div className="flex flex-col gap-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">Documentation</h3>
          <nav className="flex flex-col gap-1">
            {layout.map((item, index) => (
              <SidebarLink href={item.link} key={index}>
                {item.name}
              </SidebarLink>
            ))}
          </nav>
        </div>

        {/* All components */}
        <div className="flex flex-col gap-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">All Components</h3>
          <nav className="flex flex-col gap-0.5">
            {components.map((component, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <SidebarLink href={`/components/${component.slug}`}>
                  {component.name}
                </SidebarLink>
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
