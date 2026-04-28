"use client";
import React, { useState } from "react";
import { BsWindow, BsCodeSlash } from "react-icons/bs";
import { MdContentCopy, MdCheck } from "react-icons/md";
import componentMapper, { DefaultComponent } from "@/content/component_mapper";
import CodeBlock from "@/components/codeblock";

type TabKey = "preview" | "code";

interface DisplayPageProps {
  data: {
    slug: string;
    name: string;
    description: string;
    path: string;
    features?: Array<{ id: string; point: string }>;
    codeVariants: Array<{ language: string; code: string; demo_code?: string }>;
    codeblockCSS?: string;
    installationProcess?: Array<{ id: string; heading: string; code: string }>;
  };
}

function DisplayPage({ data }: DisplayPageProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("preview");
  const [copiedPath, setCopiedPath] = useState(false);

  const { slug } = data;
  const Component = componentMapper[slug as keyof typeof componentMapper] || DefaultComponent;
  const variant = data.codeVariants.find((v: any) => v.language === "javascript");
  const code = variant?.code || "// Code not available";
  const demoCode = variant?.demo_code || "// Demo code not available";

  const copyPath = () => {
    navigator.clipboard.writeText(data.path);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "preview", label: "Preview", icon: <BsWindow /> },
    { key: "code", label: "Code", icon: <BsCodeSlash /> },
  ];

  return (
    <div className="w-full max-w-5xl">
      {/* ── Header ───────────────────────────────── */}
      <div className="mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute block mb-2">Component</span>
        <h1 className="font-sans font-bold text-ink text-2xl md:text-3xl mb-3">{data.name}</h1>
        <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-2xl">{data.description}</p>
      </div>

      {/* ── Features ─────────────────────────────── */}
      {data.features && data.features.length > 0 && (
        <div className="mb-8 bg-surface-2 border border-rule rounded-xl p-5">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute mb-3">Features</h3>
          <ul className="grid gap-2">
            {data.features.map((feature: any) => (
              <li key={feature.id} className="flex items-start gap-2 text-sm text-ink-soft">
                <span className="text-accent mt-0.5 shrink-0">&#9656;</span>
                {feature.point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Tabs ─────────────────────────────────── */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 bg-surface-2 border border-rule rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-md transition-all duration-150 ${
                activeTab === tab.key
                  ? "bg-surface-3 text-ink shadow-sm"
                  : "text-ink-mute hover:text-ink-soft"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Preview / Code area ──────────────────── */}
      {activeTab === "preview" ? (
        <div className={data.codeblockCSS || "bg-surface-2 h-[75vh] w-full border border-rule rounded-xl overflow-hidden"}>
          <Component />
        </div>
      ) : (
        <div className="bg-surface-2 max-h-[75vh] overflow-y-auto w-full border border-rule rounded-xl" data-lenis-prevent>
          <CodeBlock code={demoCode} language="javascript" />
        </div>
      )}

      {/* ── Installation Steps ────────────────────── */}
      {data.installationProcess && data.installationProcess.length > 0 && (
        <div className="mt-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute block mb-5">Installation</span>
          <div className="relative pl-6 border-l-2 border-rule">
            {data.installationProcess.map((step: any, i: number) => (
              <div key={step.id} className="relative mb-8 last:mb-0">
                {/* Step dot */}
                <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-surface-2 border-2 border-accent flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                {/* Step content */}
                <div>
                  <h4 className="text-ink font-medium text-sm mb-2">
                    <span className="font-mono text-accent mr-2">0{i + 1}.</span>
                    {step.heading}
                  </h4>
                  <div className="max-w-screen-lg rounded-lg overflow-hidden">
                    <CodeBlock code={step.code} language="javascript" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Source Code ───────────────────────────── */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">Source Code</span>
          <button
            onClick={copyPath}
            className="flex items-center gap-1.5 text-xs text-ink-mute hover:text-ink font-mono border border-rule rounded-lg px-2.5 py-1 hover:border-ink-mute transition-colors duration-150"
          >
            {copiedPath ? <MdCheck className="text-emerald-400" /> : <MdContentCopy />}
            {data.path}
          </button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto border border-rule rounded-xl" data-lenis-prevent>
          <CodeBlock code={code} language="javascript" />
        </div>
      </div>
    </div>
  );
}

export default DisplayPage;
