'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function SidebarLink({ href, children, className = '' }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(href + '/');

  return (
    <Link
      href={href}
      className={`text-sm py-0.5 transition-colors duration-150 ${
        isActive ? 'text-accent font-medium' : 'text-ink-soft hover:text-accent'
      } ${className}`}
    >
      {children}
    </Link>
  );
}
