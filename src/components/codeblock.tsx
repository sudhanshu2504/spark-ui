'use client';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MdContentCopy } from "react-icons/md";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative w-full rounded-md">
      <button
        onClick={()=>copyToClipboard()}
        className="absolute top-2 right-2 text-white p-2 rounded"
      >
        <MdContentCopy/>
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
