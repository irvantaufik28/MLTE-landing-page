import React from "react";
import { Compass, Sparkles, Database, Activity, ShieldCheck, RefreshCw } from "lucide-react";

export function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-24 border-b border-navy-900 relative" aria-label="MLTE Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Designed For Master League Enthusiasts
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-light">
            Leagues are read dynamically for broader patch compatibility, but no promise of every patch.
            Enjoy a responsive and balanced transfer market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-navy-900/60 border border-navy-800 rounded-xl p-6 transition-all hover:border-navy-700/80 group">
            <div className="bg-navy-950 text-pitch-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-navy-800 shadow-inner">
              <Compass size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Cross-League Market</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stimulates Transfer activity between leagues. Breaks static AI loops to allow unexpected global movements, bringing dormant transfers to life.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-navy-900/60 border border-navy-800 rounded-xl p-6 transition-all hover:border-navy-700/80 group">
            <div className="bg-navy-950 text-pitch-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-navy-800 shadow-inner">
              <Sparkles size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Club DNA Intelligence</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Assigns tailored profile traits and budgets to top-tier clubs, matching their historical market focus, squad size preferences, and budget behavior.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-navy-900/60 border border-navy-800 rounded-xl p-6 transition-all hover:border-navy-700/80 group">
            <div className="bg-navy-950 text-pitch-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-navy-800 shadow-inner">
              <Database size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Disposal Market</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Forces AI-managed clubs to actively list, loan, or sell aging or lower-tier surplus players, clearing up squad space for fresh youth signings.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-navy-900/60 border border-navy-800 rounded-xl p-6 transition-all hover:border-navy-700/80 group">
            <div className="bg-navy-950 text-pitch-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-navy-800 shadow-inner">
              <Activity size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">High-Rated Market Flow</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Accelerates blockbuster moves for world-class stars. Simulates elite clubs competing directly over top-rated players, resulting in exciting headlines.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-navy-900/60 border border-navy-800 rounded-xl p-6 transition-all hover:border-navy-700/80 group">
            <div className="bg-navy-950 text-pitch-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-navy-800 shadow-inner">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Human-Club Protection</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Prevents sudden, toxic AI bid pressure or structural roster sabotage on the human-managed club, ensuring you stay in absolute control.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-navy-900/60 border border-navy-800 rounded-xl p-6 transition-all hover:border-navy-700/80 group">
            <div className="bg-navy-950 text-pitch-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-navy-800 shadow-inner">
              <RefreshCw size={20} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Roster Cap & Backup safety</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enforces logical squad limits so teams don&apos;t end up with 45 players, while generating an automatic, encrypted file backup with every pass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
