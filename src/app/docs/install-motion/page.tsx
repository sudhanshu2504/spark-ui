import React from 'react';
import type { Metadata } from 'next';
import CodeBlock from '@/components/codeblock';
import DocStep from '@/components/docs/DocStep';

export const metadata: Metadata = {
  title: 'Install Motion — SparkUI Docs',
  description: 'Add Motion (previously Framer Motion) — the animation library powering SparkUI components.',
};

export default function InstallMotionPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute block mb-2">Documentation</span>
        <h1 className="font-sans font-bold text-ink text-2xl md:text-3xl mb-3">Install Motion</h1>
        <p className="text-ink-soft text-sm md:text-base leading-relaxed">
          SparkUI components use Motion (previously Framer Motion) for transitions, scroll effects, and hover interactions.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-rule">
        <DocStep index={0} title="Create your project">
          <CodeBlock
            code={`npx create-next-app@latest my-project --typescript --eslint\ncd my-project`}
            language="bash"
          />
        </DocStep>

        <DocStep index={1} title="Install Motion">
          <CodeBlock code={`npm install motion`} language="bash" />
        </DocStep>

        <DocStep index={2} title="Import where you need it">
          <CodeBlock code={`import { motion } from "motion/react";`} language="typescript" />
        </DocStep>

        <DocStep index={3} title="Reference the official docs">
          <a
            href="https://motion.dev/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent text-sm hover:text-accent-2 transition-colors duration-150"
          >
            motion.dev/docs &rarr;
          </a>
        </DocStep>
      </div>

      {/* Next step */}
      <div className="mt-12 p-5 bg-surface-2 border border-rule rounded-xl flex items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute block mb-1">Ready to build</span>
          <p className="text-ink text-sm font-medium">Browse all components</p>
        </div>
        <a
          href="/components"
          className="text-accent text-sm font-medium hover:text-accent-2 transition-colors duration-150 shrink-0"
        >
          Continue &rarr;
        </a>
      </div>
    </div>
  );
}
