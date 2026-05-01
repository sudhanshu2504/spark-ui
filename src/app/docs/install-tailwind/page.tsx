import React from 'react';
import type { Metadata } from 'next';
import CodeBlock from '@/components/codeblock';
import DocStep from '@/components/docs/DocStep';

export const metadata: Metadata = {
  title: 'Install Tailwind CSS — SparkUI Docs',
  description: 'Add Tailwind CSS to your Next.js project to style SparkUI components.',
};

export default function InstallTailwindPage() {
  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute block mb-2">Documentation</span>
        <h1 className="font-sans font-bold text-ink text-2xl md:text-3xl mb-3">Install Tailwind CSS</h1>
        <p className="text-ink-soft text-sm md:text-base leading-relaxed">
          Wire Tailwind into your Next.js project. SparkUI components use Tailwind utility classes throughout.
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

        <DocStep index={1} title="Install Tailwind CSS and dependencies">
          <CodeBlock
            code={`npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`}
            language="bash"
          />
        </DocStep>

        <DocStep index={2} title="Configure your template paths" filename="tailwind.config.js">
          <CodeBlock
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using \`src/\` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
            language="javascript"
          />
        </DocStep>

        <DocStep index={3} title="Add Tailwind directives" filename="globals.css">
          <CodeBlock
            code={`@tailwind base;\n@tailwind components;\n@tailwind utilities;`}
            language="css"
          />
        </DocStep>

        <DocStep index={4} title="Start the dev server">
          <CodeBlock code={`npm run dev`} language="bash" />
        </DocStep>
      </div>

      {/* Next step */}
      <div className="mt-12 p-5 bg-surface-2 border border-rule rounded-xl flex items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute block mb-1">Next up</span>
          <p className="text-ink text-sm font-medium">Install Motion</p>
        </div>
        <a
          href="/docs/install-motion"
          className="text-accent text-sm font-medium hover:text-accent-2 transition-colors duration-150 shrink-0"
        >
          Continue &rarr;
        </a>
      </div>
    </div>
  );
}
