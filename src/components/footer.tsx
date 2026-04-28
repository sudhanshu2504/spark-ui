'use client'
import React from "react";
import { FaXTwitter, FaGithub} from "react-icons/fa6";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <>
    <div className="w full h-20 bg-surface border-t border-rule flex justify-center items-center">
        <div className="w-[45%] h-auto flex items-center"><Logo size="lg" showWordmark /></div>
        <div className="w-[45%] h-auto text-ink flex justify-end gap-x-4">
            <a href="https://github.com/sudhanshu2504" target="_blank"><FaGithub/></a>
            <a href="https://www.x.com/Knight_s18" target="_blank"><FaXTwitter/></a>
        </div>
    </div>
    </>
  );
}
