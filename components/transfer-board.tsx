import React from "react";
import { Database, FileCode, FileText, CheckCircle2, Cpu, AlertTriangle } from "lucide-react";

export function TransferBoard() {
  return (
    <section id="specification" className="py-16 bg-navy-950/40 border-b border-navy-900" aria-label="How MLTE Operates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side: Editorial text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-pitch-500 bg-pitch-500/10 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider font-semibold">
              <Database size={12} />
              Binary Preservation
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
              Pure Save Data Modification. <br/>
              <span className="text-slate-400 font-light">Zero Executable Risk.</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Traditional gameplay mods risk destabilizing binary executables and breaking patch compatibility. 
              MLTE takes a safer, non-invasive approach: it parses, recalibrates, and writes back your local Pro Evolution Soccer 2017 save files directly.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <div className="bg-navy-900 border border-navy-800 p-2.5 rounded-lg text-slate-400 flex-shrink-0">
                  <FileCode size={20} className="text-teal-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">EDIT00000000 Save File</h4>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    MLTE reads your global Edit Save to dynamically analyze active leagues, registered club IDs, stats, and market structures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-navy-900 border border-navy-800 p-2.5 rounded-lg text-slate-400 flex-shrink-0">
                  <FileText size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">ML00000000 Master League File</h4>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    MLTE reads your active Master League campaign save file, extracts player market indices, and introduces rich transfer variety.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: SVG Transfer Intelligence Board Visuals (No copyrighted PES content) */}
          <div className="lg:col-span-7">
            <div className="bg-navy-900/80 border border-navy-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
              {/* Visual Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pitch-500" />
                  <span className="font-mono text-xs text-slate-300 uppercase tracking-wider font-bold">Transfer intelligence board</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  STATUS: ACTIVE
                </div>
              </div>

              {/* Simulated Data Grid */}
              <div className="space-y-4">
                {/* File Upload Visual Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-navy-950 border border-navy-800 rounded-xl p-4 flex flex-col justify-between h-28">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Input File A</span>
                      <CheckCircle2 size={14} className="text-pitch-500" />
                    </div>
                    <div>
                      <div className="font-mono font-bold text-sm text-slate-200">EDIT00000000</div>
                      <div className="text-slate-400 text-xs mt-0.5">Database & League Index</div>
                    </div>
                  </div>

                  <div className="bg-navy-950 border border-navy-800 rounded-xl p-4 flex flex-col justify-between h-28">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Input File B</span>
                      <CheckCircle2 size={14} className="text-pitch-500" />
                    </div>
                    <div>
                      <div className="font-mono font-bold text-sm text-slate-200">ML00000000</div>
                      <div className="text-slate-400 text-xs mt-0.5">Master League state</div>
                    </div>
                  </div>
                </div>

                {/* Flow Connection Visual */}
                <div className="flex justify-center my-2">
                  <div className="h-6 w-0.5 border-r border-dashed border-navy-700 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy-900 border border-navy-800 text-slate-400 p-0.5 rounded-full">
                      <Cpu size={12} className="text-pitch-500" />
                    </div>
                  </div>
                </div>

                {/* Processing Unit Visual */}
                <div className="bg-navy-950/60 border border-navy-800/80 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Optimizer Engine Core</span>
                    <span className="text-[11px] font-mono text-pitch-500 bg-pitch-500/10 px-2 py-0.5 rounded">100% Executable Safe</span>
                  </div>

                  {/* Simulating stats changes */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">AI Bid Frequency Variance</span>
                      <span className="font-mono text-pitch-500 font-bold">+28.5% Realism</span>
                    </div>
                    <div className="w-full bg-navy-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-pitch-500 h-full w-[82%]" />
                    </div>

                    <div className="flex justify-between items-center text-xs pt-1">
                      <span className="text-slate-400">Cross-League Market Fluidity</span>
                      <span className="font-mono text-pitch-500 font-bold">Activated</span>
                    </div>
                    <div className="w-full bg-navy-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-pitch-500 h-full w-full" />
                    </div>
                  </div>
                </div>
                
                {/* Warning instruction */}
                <div className="flex items-center gap-2.5 text-xs text-amber-500/90 bg-amber-500/5 border border-amber-500/15 p-3 rounded-lg">
                  <AlertTriangle size={14} className="flex-shrink-0" />
                  <span><strong>Precaution:</strong> Always make a secure copy of your original save files before processing!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
