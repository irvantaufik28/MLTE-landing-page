import React from "react";
import { Coffee, ArrowRight } from "lucide-react";
import { RELEASE_METADATA } from "@/lib/release";

export function SupportCard() {
  return (
    <div className="pt-2 text-center">
      <a 
        href={RELEASE_METADATA.supportUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-navy-900 border border-navy-800 text-slate-300 hover:text-white px-5 py-3 rounded-2xl text-sm transition-all shadow-sm hover:border-navy-700 min-h-[44px]"
      >
        <Coffee size={16} className="text-amber-500 animate-bounce" />
        <span>Support development on <strong>Buy Me A Coffee</strong></span>
        <ArrowRight size={14} className="text-slate-500" />
      </a>
    </div>
  );
}
