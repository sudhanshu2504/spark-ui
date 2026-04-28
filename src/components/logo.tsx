'use client';

import React from 'react';

const sizeMap = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 64,
} as const;

type LogoSize = keyof typeof sizeMap | number;

interface LogoProps {
  size?: LogoSize;
  showWordmark?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showWordmark = false, className = '' }: LogoProps) => {
  const px = typeof size === 'number' ? size : sizeMap[size];

  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 140 140"
        aria-label="SparkUI"
        className="flex-shrink-0"
      >
        <defs>
          <radialGradient id="apertureGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-2, #ffce5c)" />
            <stop offset="60%" stopColor="var(--accent, #f5a623)" />
            <stop offset="100%" stopColor="var(--accent, #f5a623)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="70" cy="70" r="50" fill="url(#apertureGlow)" opacity="0.35" />
        <g transform="translate(70 70)" fill="var(--accent, #f5a623)">
          <polygon points="0,-46 8,-16 -8,-16" />
          <polygon points="0,-46 8,-16 -8,-16" transform="rotate(60)" />
          <polygon points="0,-46 8,-16 -8,-16" transform="rotate(120)" />
          <polygon points="0,-46 8,-16 -8,-16" transform="rotate(180)" />
          <polygon points="0,-46 8,-16 -8,-16" transform="rotate(240)" />
          <polygon points="0,-46 8,-16 -8,-16" transform="rotate(300)" />
        </g>
        <circle cx="70" cy="70" r="14" fill="var(--bg, #050505)" />
        <circle cx="70" cy="70" r="6" fill="var(--accent-2, #ffce5c)" />
      </svg>

      {showWordmark && (
        <span
          className="font-sans font-semibold text-ink tracking-tight"
          style={{ fontSize: Math.max(px * 0.55, 14) }}
        >
          spark
          <span className="font-display italic font-normal text-accent">ui</span>
        </span>
      )}
    </span>
  );
};

export default Logo;
