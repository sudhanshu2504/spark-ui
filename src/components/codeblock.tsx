'use client';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';
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
    <div className="relative w-full rounded-md">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 text-white p-2 rounded"
      >
        {copied ? <MdCheck className="text-green-400" /> : <MdContentCopy />}
      </button>
      <div className="rounded-lg border border-gray-700 overflow-hidden text-xl">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
