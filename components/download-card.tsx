import React from "react";
import { Download, AlertTriangle } from "lucide-react";
import { getReleases } from "@/lib/release";

export function DownloadCard() {
  const releases = getReleases();

  return (
    <div className="bg-navy-900/60 border-2 border-pitch-500/20 max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 shadow-2xl relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pitch-500 text-navy-950 font-bold uppercase tracking-wider text-[10px] px-3 py-1 rounded-full shadow-md">
        Download Center
      </div>

      {/* Safety Instructions */}
      <div className="space-y-4 text-left border-b border-navy-800 pb-8 mb-6">
        <h4 className="text-white font-bold text-sm flex items-center gap-1.5 text-amber-500">
          <AlertTriangle size={16} /> Important Usage &amp; Backup Safety Notice
        </h4>
        <p className="text-slate-300 text-xs leading-relaxed">
          <strong>MLTE</strong> is an independent, community-driven tool and is not associated, affiliated, or officially supported by Konami, Pro Evolution Soccer, or eFootball. It modifies game save file structures which are subject to community patches.
        </p>
        <div className="bg-navy-950 rounded-xl p-4 border border-navy-800 space-y-2 text-xs">
          <div className="flex gap-2">
            <span className="text-pitch-500 font-bold">Step 1:</span>
            <span className="text-slate-400">Locate your original <code>EDIT00000000</code> and <code>ML00000000</code> saves (usually in Documents\KONAMI\Pro Evolution Soccer 2017\save).</span>
          </div>
          <div className="flex gap-2">
            <span className="text-pitch-500 font-bold">Step 2:</span>
            <span className="text-slate-400"><strong>Create a safe manual copy of both files in another directory.</strong> Do not skip this step! Ensure you have a secure backup before proceeding!</span>
          </div>
          <div className="flex gap-2">
            <span className="text-pitch-500 font-bold">Step 3:</span>
            <span className="text-slate-400">Run the MLTE executable, supply the paths, set your optimization preferences, and click Generate.</span>
          </div>
        </div>
      </div>

      {/* All Available Packages (Download List) */}
      <div className="text-left space-y-4">
        <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono text-slate-300">
          All Available Packages
        </h4>
        <div className="space-y-3">
          {releases.map((rel) => (
            <div 
              key={rel.version}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border ${
                rel.isLatest 
                  ? "bg-pitch-500/5 border-pitch-500/30" 
                  : "bg-navy-950/40 border-navy-800/80 hover:border-navy-700/60"
              } transition-all gap-4`}
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-sm text-white">{rel.version}</span>
                  {rel.isLatest && (
                    <span className="text-[9px] uppercase font-mono tracking-wider text-pitch-500 bg-pitch-500/10 px-2 py-0.5 rounded font-extrabold">
                      Latest
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-500">{rel.date}</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono flex flex-wrap gap-x-2.5 gap-y-1">
                  <span>File: <span className="text-slate-300">{rel.filename}</span></span>
                  <span className="text-navy-800">•</span>
                  <span>Size: <span className="text-slate-300">{rel.size}</span></span>
                  <span className="text-navy-800">•</span>
                  <span>OS: <span className="text-slate-300">{rel.platform}</span></span>
                </div>
              </div>
              <a 
                href={rel.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-bold transition-all text-center min-h-[38px] flex items-center justify-center gap-1.5 ${
                  rel.isLatest
                    ? "bg-pitch-500 hover:bg-pitch-600 text-navy-950 shadow-md shadow-pitch-500/5"
                    : "bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700"
                }`}
              >
                <Download size={14} /> Download ({rel.size})
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
