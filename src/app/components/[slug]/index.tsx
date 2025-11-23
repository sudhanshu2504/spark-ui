"use client";
import React, { useState } from "react";
import { BsWindow, BsCodeSlash } from "react-icons/bs";
import componentMapper, { DefaultComponent } from "@/content/component_mapper";
import CodeBlock from "@/components/codeblock";

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
  const [codeView, setCodeView] = useState(false);
  const { slug } = data;
  const Component = componentMapper[slug as keyof typeof componentMapper] || DefaultComponent;
  const language = 'javascript';
  const variant = data.codeVariants.find((variant: any) => variant.language === language);
  const code = variant?.code || "// Code not available";
  const demoCode = variant?.demo_code || "// Demo code not available";

  return (
    <>
      <div className="text-white w-full">
        <h1 className="text-3xl font-primary pb-4">{data.name}</h1>
        <p className="p-2 my-2">{data.description}</p>

        {data.features &&
          <div className="p-2 my-2">
            <h1 className="text-lg">Features :</h1>
            <span>
              {data.features.map((feature: any) => (
                <li key={feature.id} className="ml-5 list-disc">
                  {feature.point}
                </li>
              ))}
            </span>
          </div>}

        <div className="buttons flex flex-row gap-2 my-6">
          <button
            className={`${!codeView ? "bg-slate-700/70 duration-400" : ""
              } border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`}
            onClick={() => setCodeView(false)}
          >
            <BsWindow /> Preview
          </button>
          <button
            className={`${codeView ? "bg-slate-700/70 duration-400" : ""
              } border border-slate-700/70 text-sm px-3 py-2 w-fit cursor-pointer rounded-md flex gap-1 items-center justify-center font-medium`}
            onClick={() => setCodeView(true)}
          >
            <BsCodeSlash /> Code
          </button>
        </div>
        {!codeView ? (
          <div className={data.codeblockCSS ? data.codeblockCSS : "bg-code h-[80vh] w-full border border-gray-500 rounded-md my-4 overflow-hidden border-opacity-50"}>
            <Component />
          </div>
        ) : (
          <div className="bg-code h-auto max-h-[75vh] overflow-y-scroll w-full border border-gray-500 rounded-md border-opacity-10" data-lenis-prevent>
            <CodeBlock code={demoCode} language="javascript" />
          </div>
        )}

        {data.installationProcess &&
          data.installationProcess.map((point: any) => (<div key={point.id} className="flex flex-col border-l py-4">
            <span className="flex h-8 items-center gap-4">
              <span className="bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full"></span>
              <span className="text-white">{point.heading}</span>
            </span>
            <span className="flex h-auto max-w-screen-lg rounded-md pl-5">
              <CodeBlock
                code={point.code}
                language="javascript"
              />
            </span>
          </div>))
        }
        <div className="flex flex-col border-l py-4">
          <span className="flex h-8 items-center gap-4">
            <span className="bg-gray-400 w-[6px] h-full rounded-tr-full rounded-br-full"></span>
            <span className="text-white">Copy the Source code</span>
          </span>
          <span className="text-gray-300 text-sm ml-5 pb-2">
            `{data.path}`
          </span>
          <span className="flex h-[75vh] overflow-y-scroll max-w-screen-lg rounded-md pl-5" data-lenis-prevent>
            <CodeBlock code={code} language="javascript" />
          </span>
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
