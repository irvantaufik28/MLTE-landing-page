import React from "react";
import { Download, AlertTriangle } from "lucide-react";
import { getReleases } from "@/lib/release";

export function Hero() {
  const releases = getReleases();
  const latestRelease = releases.find(r => r.isLatest) || releases[0];
  const latestVersion = latestRelease.version;

  return (
    <section className="relative pt-10 pb-16 md:py-24 flex flex-col items-center justify-center border-b border-navy-900" aria-label="Welcome and Download Overview">
      {/* Background Decorative Pitch-like Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          PES 2017 Master League <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pitch-500 via-emerald-400 to-teal-400">
            Transfer Engine
          </span>
        </h1>

        {/* Value Prop */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Inject tactical variety, dynamic club DNA, and realistic market valuations into your Master League campaign. 
          MLTE optimizes AI behavior through automated file processing without ever modifying your game executable.
        </p>

        {/* Backup Warning Callout */}
        <div className="mb-8 inline-flex items-center gap-2.5 text-xs text-amber-500/90 bg-amber-500/5 border border-amber-500/15 p-3 rounded-lg max-w-xl mx-auto text-left sm:text-center">
          <AlertTriangle size={14} className="flex-shrink-0" />
          <span><strong>Backup Warning:</strong> Always make a secure copy of your original <code>EDIT00000000</code> and <code>ML00000000</code> save files before running the optimizer!</span>
        </div>

        {/* Call to Actions */}
        <div className="flex justify-center items-center">
          <a 
            href="#download"
            className="bg-pitch-500 hover:bg-pitch-600 text-navy-950 font-bold px-10 py-4 rounded-xl shadow-lg shadow-pitch-500/10 transition-all min-h-[48px] flex items-center justify-center gap-2 hover:scale-[1.02] text-base"
          >
            <Download size={20} /> Download MLTE ({latestVersion})
          </a>
        </div>

        {/* Footnote */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span>Independent Community Utility</span>
        </div>
      </div>
    </section>
  );
}
