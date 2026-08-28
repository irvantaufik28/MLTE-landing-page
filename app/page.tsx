import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TransferBoard } from "@/components/transfer-board";
import { FeatureGrid } from "@/components/feature-grid";
import { UsageSteps } from "@/components/usage-steps";
import { DownloadCard } from "@/components/download-card";
import { SupportCard } from "@/components/support-card";
import { Footer } from "@/components/footer";
import { getReleases } from "@/lib/release";

export default function LandingPage() {
  const releases = getReleases();
  const latestRelease = releases.find(r => r.isLatest) || releases[0];
  const latestVersion = latestRelease.version;

  return (
    <div className="flex-1 flex flex-col min-h-screen text-slate-100 bg-navy-950 selection:bg-pitch-500 selection:text-navy-950 font-sans relative overflow-x-hidden editorial-grid">
      <Header />
      <main>
        <Hero />
        <TransferBoard />
        <FeatureGrid />
        <UsageSteps />
        
        {/* DOWNLOAD SECTION */}
        <section id="download" className="py-20 border-b border-navy-900 relative" aria-label="Acquire Software package">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase font-mono tracking-widest text-pitch-500 font-bold bg-pitch-500/10 px-3 py-1 rounded-md">
                  Production Release Distribution
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  Download MLTE {latestVersion}
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
                  Centralized metadata allows reliable, easy deployment updates. All packages are hosted securely on fast, high-availability community download nodes.
                </p>
              </div>

              <DownloadCard />
              <SupportCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
