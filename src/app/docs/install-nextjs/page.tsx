import React from 'react';
import type { Metadata } from 'next';
import CodeBlock from '@/components/codeblock';
import DocStep from '@/components/docs/DocStep';

export const metadata: Metadata = {
  title: 'Install Next.js — SparkUI Docs',
  description: 'Quick-start guide to scaffold a Next.js project ready for SparkUI components.',
};

export default function InstallNextJsPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute block mb-2">Documentation</span>
        <h1 className="font-sans font-bold text-ink text-2xl md:text-3xl mb-3">Install Next.js</h1>
        <p className="text-ink-soft text-sm md:text-base leading-relaxed">
          Spin up a fresh Next.js project — the foundation for any SparkUI component.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-rule">
        <DocStep index={0} title="Create a new Next.js app">
          <CodeBlock code={`npx create-next-app@latest`} language="bash" />
        </DocStep>

        <DocStep index={1} title="Answer the setup prompts">
          <CodeBlock
            code={`What is your project named? my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use \`src/\` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias (@/*)? No`}
            language="bash"
          />
        </DocStep>

        <DocStep index={2} title="Run the dev server">
          <CodeBlock code={`cd my-app\nnpm run dev`} language="bash" />
        </DocStep>
      </div>

      {/* Next step */}
      <div className="mt-12 p-5 bg-surface-2 border border-rule rounded-xl flex items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute block mb-1">Next up</span>
          <p className="text-ink text-sm font-medium">Install Tailwind CSS</p>
        </div>
        <a
          href="/docs/install-tailwind"
          className="text-accent text-sm font-medium hover:text-accent-2 transition-colors duration-150 shrink-0"
        >
          Continue &rarr;
        </a>
      </div>
    </div>
  );
}
