'use client';
import React from 'react';
import { FaCheck } from "react-icons/fa";
export default function Page() {
  return (
    <div className="min-h-screen h-auto w-full bg-black bg-grid-white/[0.075] relative flex items-start justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 bg-black flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
      <div className='flex flex-col w-full'>
        <div className="py-16 px-6 text-white w-full text-lg md:text-3xl font-black text-center">
          Looking for Customized Components or Complete websites?
          <div className='text-center w-full text-gray-500 text-sm md:text-lg'>Choose the services as per your need and Get in Touch now.</div>
        </div>
        <div className="text-white py-8 h-full bg-opacity-40 w-[95%] mx-auto flex flex-row flex-wrap gap-4 justify-evenly">
            <div className="rounded-lg bg-gray-900/80 backdrop-blur-2xl p-6 shadow-lg w-full md:w-[49%] lg:w-[24%]">
              <div className="flex flex-col justify-evenly gap-4 h-full">
                <div>
                  <h3 className="text-base font-medium text-yellow-500">Existing Component</h3>
                  <p className="text-sm">Perfect for individuals and small teams.</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl md:text-3xl lg:text-4xl font-bold">FREE</span>
                  {/* <span className="text-muted-foreground">/month</span> */}
                </div>
                <ul className="grid gap-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Collection of various components.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>React / Nextjs / Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Full Code Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Basic features</span>
                  </li>
                </ul>
                <a href="/components">
                <button className="bg-white text-black mt-10 rounded-lg w-full py-2 text-center hover:scale-105 transition-all">Proceed</button>
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-gray-900/80 backdrop-blur-2xl p-6 shadow-lg w-full md:w-[49%] lg:w-[24%]">
                <div className="flex flex-col justify-evenly gap-4 h-full">
                  <div>
                    <h3 className="text-base font-medium text-yellow-500">Personalized Components</h3>
                    <p className="text-sm">Ideal for growing teams and businesses.</p>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl md:text-3xl lg:text-4xl font-bold">$99</span>
                    <span className="text-sm">/ component</span>
                  </div>
                  <ul className="grid gap-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5" />
                      <span>Customized Components</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5" />
                      <span>Lifetime Access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5" />
                      <span>5 Revisions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <button className="bg-white text-black mt-10 rounded-lg w-full py-2 text-center hover:scale-105 transition-all">Proceed</button>
                </div>
            </div>
            <div className="rounded-lg bg-yellow-400 text-black backdrop-blur-2xl p-6 shadow-lg w-full md:w-[49%] lg:w-[24%]">
              <div className="flex flex-col justify-evenly gap-4 h-full">
                <div>
                  <h3 className="text-base font-medium text-white">Webpage Develop & Design</h3>
                  <p className="text-sm">Tailored for early startups and organizations.</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl md:text-3xl lg:text-4xl font-bold">$499</span>
                  <span className="text-muted-foreground text-sm">/ page</span>
                </div>
                <ul className="grid gap-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 stroke-black" />
                    <span>Complete Design & Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 stroke-black" />
                    <span>Access to Code & Figma Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 stroke-black" />
                    <span>8 Revisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 stroke-black" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <button className="bg-white text-black mt-10 rounded-lg w-full py-2 text-center hover:scale-105 transition-all">Proceed</button>
              </div>
            </div>
            <div className="rounded-lg bg-gray-900/80 backdrop-blur-2xl p-6 shadow-lg w-full md:w-[49%] lg:w-[24%]">
              <div className="flex flex-col justify-evenly gap-4 h-full">
                <div>
                  <h3 className="text-base font-medium text-yellow-500">Website Develop & Design</h3>
                  <p className="text-sm">Tailored for large teams and organizations.</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-muted-foreground text-sm">Starts from</span>
                  <span className="text-4xl md:text-3xl lg:text-4xl font-bold">$1999</span>
                </div>
                <ul className="grid gap-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Complete Design & Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Access to Code & Figma Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Unlimited Revisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <button className="bg-white text-black mt-10 rounded-lg w-full py-2 text-center hover:scale-105 transition-all">Proceed</button>
              </div>
            </div>
        </div>
        </div>
      </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}