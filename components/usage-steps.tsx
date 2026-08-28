import React from "react";
import { AlertTriangle } from "lucide-react";

export function UsageSteps() {
  return (
    <section id="how-it-works" className="py-16 bg-navy-950/40 border-b border-navy-900" aria-label="Step-by-Step Guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-pitch-500 font-bold bg-pitch-500/10 px-3 py-1 rounded-md">
            Process Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 mb-4">
            How MLTE Works
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            MLTE modifies transfer tables safely in five steps. Follow these instructions carefully.
          </p>
          
          {/* Visible backup warning for How It Works */}
          <div className="inline-flex items-center gap-2.5 text-xs text-amber-500/90 bg-amber-500/5 border border-amber-500/15 p-3 rounded-lg text-left max-w-xl mx-auto">
            <AlertTriangle size={14} className="flex-shrink-0" />
            <span><strong>Backup Warning:</strong> Always back up your <code>EDIT00000000</code> and <code>ML00000000</code> saves before performing any optimization steps!</span>
          </div>
        </div>

        <div className="relative">
          {/* Visual connector line for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-pitch-500/20 via-navy-800 to-pitch-500/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-navy-900/80 border border-navy-800 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-navy-950 border border-navy-700 text-pitch-500 font-bold font-mono rounded-full flex items-center justify-center text-sm mb-4 shadow-md">
                1
              </div>
              <h4 className="text-white font-bold text-base mb-1">Select EDIT Save</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Provide path to <code>EDIT00000000</code>. Used to discover clubs and leagues dynamically.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-navy-900/80 border border-navy-800 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-navy-950 border border-navy-700 text-pitch-500 font-bold font-mono rounded-full flex items-center justify-center text-sm mb-4 shadow-md">
                2
              </div>
              <h4 className="text-white font-bold text-base mb-1">Select ML Save</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Provide your active campaign save file (e.g., <code>ML00000000</code>).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-navy-900/80 border border-navy-800 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-navy-950 border border-navy-700 text-pitch-500 font-bold font-mono rounded-full flex items-center justify-center text-sm mb-4 shadow-md">
                3
              </div>
              <h4 className="text-white font-bold text-base mb-1">Target Configuration</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Select your target leagues for higher bid activity and choose club-specific offer limit.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-navy-900/80 border border-navy-800 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-navy-950 border border-navy-700 text-pitch-500 font-bold font-mono rounded-full flex items-center justify-center text-sm mb-4 shadow-md">
                4
              </div>
              <h4 className="text-white font-bold text-base mb-1">Generate Save</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Run the MLTE optimization process. A backup save is written instantly to your disk.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-navy-900/80 border border-navy-800 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-pitch-500/10 border border-pitch-500 text-pitch-500 font-bold font-mono rounded-full flex items-center justify-center text-sm mb-4 shadow-md">
                5
              </div>
              <h4 className="text-white font-bold text-base mb-1">Enjoy realist campaign</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Replace original files in the PES Save directory and load campaign. Check new transfer activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
