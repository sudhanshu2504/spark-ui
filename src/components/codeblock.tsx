'use client';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MdContentCopy, MdCheck } from "react-icons/md";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative w-full rounded-lg">
      <button
        onClick={copyToClipboard}
        className="absolute top-2.5 right-2.5 z-10 text-ink-mute hover:text-ink p-1.5 rounded-md hover:bg-surface-3 transition-colors duration-150"
        aria-label="Copy code"
      >
        {copied ? <MdCheck className="text-emerald-400 text-base" /> : <MdContentCopy className="text-base" />}
      </button>
      <div className="rounded-lg border border-rule overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, background: 'var(--bg-2)' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
