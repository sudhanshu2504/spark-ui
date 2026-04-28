'use client';
import React from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';

interface CardProps {
  slug: string;
  name: string;
  description?: string;
  thumbnailURL?: string;
  isNewComponent?: boolean;
}

const Card = ({ slug, name, description, thumbnailURL, isNewComponent }: CardProps) => {
  return (
    <Link
      href={`/components/${slug}`}
      className="group bg-surface-2 border border-rule rounded-2xl overflow-hidden hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 block no-underline"
    >
      {/* Thumbnail */}
      <div className="h-[180px] overflow-hidden border-b border-rule bg-surface-3 flex items-center justify-center">
        {thumbnailURL ? (
          <img
            src={thumbnailURL}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <Logo size="xl" />
        )}
      </div>

      {/* Info */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <span className="font-sans font-medium text-sm text-ink">{name}</span>
          {isNewComponent && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 rounded px-1.5 py-0.5">
              new
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-ink-mute line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Card;
