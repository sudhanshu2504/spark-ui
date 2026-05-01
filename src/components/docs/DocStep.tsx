import React from 'react';

interface DocStepProps {
  index: number;
  title: string;
  filename?: string;
  children: React.ReactNode;
}

export default function DocStep({ index, title, filename, children }: DocStepProps) {
  return (
    <div className="relative mb-8 last:mb-0">
      {/* Step dot */}
      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-surface border-2 border-accent flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>

      {/* Step content */}
      <h4 className="text-ink font-medium text-sm mb-1">
        <span className="font-mono text-accent mr-2">0{index + 1}.</span>
        {title}
      </h4>
      {filename && (
        <p className="text-ink-mute font-mono text-xs mb-2">{filename}</p>
      )}
      <div className="max-w-screen-lg mt-2 rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
}
