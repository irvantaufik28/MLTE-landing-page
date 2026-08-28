import React from "react";
import { Activity, Coffee } from "lucide-react";
import { RELEASE_METADATA } from "@/lib/release";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-950 border-t border-navy-900" aria-label="Page Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-navy-900 pb-10">
          {/* Left */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-pitch-600 to-pitch-500 p-1.5 rounded-lg text-navy-950 font-bold flex items-center justify-center">
                <Activity size={14} />
              </div>
              <span className="font-mono text-lg font-bold tracking-tight text-white">MLTE</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A static-first utility parsing, evaluating, and writing ML save tables dynamically. Designed for custom league fluidity and market authenticity on PC.
            </p>
          </div>

          {/* Right link list */}
          <div className="md:col-span-7 flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-end">
            <a href="#features" className="text-xs text-slate-400 hover:text-pitch-500 min-h-[44px] flex items-center">Features</a>
            <a href="#how-it-works" className="text-xs text-slate-400 hover:text-pitch-500 min-h-[44px] flex items-center">How It Works</a>
            <a href="#download" className="text-xs text-slate-400 hover:text-pitch-500 min-h-[44px] flex items-center">Download Package</a>
            <a href={RELEASE_METADATA.supportUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-pitch-500 min-h-[44px] flex items-center gap-1.5"><Coffee size={12} className="text-amber-500" /> Support</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-slate-500 font-mono">
          <div className="space-y-1 max-w-2xl">
            <p>Disclaimer: This is an independent, community-driven tool. We do not claim official affiliation with, or endorsement by, Konami, Pro Evolution Soccer (PES), or eFootball.</p>
            <p>All trademarks, team names, or game titles are properties of their respective owners. Used purely for dynamic save file calibration references.</p>
          </div>
          <div className="flex-shrink-0">
            <p>© {RELEASE_METADATA.lastUpdated} MLTE. Open Source. MIT License.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
