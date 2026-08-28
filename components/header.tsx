import React from "react";
import { Activity, Coffee, Menu, X } from "lucide-react";
import { RELEASE_METADATA } from "@/lib/release";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-navy-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-pitch-500 rounded-md p-1" aria-label="MLTE Home">
              <div className="bg-gradient-to-tr from-pitch-600 to-pitch-500 p-2 rounded-lg text-navy-950 font-bold flex items-center justify-center shadow-lg shadow-pitch-500/10">
                <Activity size={18} />
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-pitch-500 transition-colors">
                MLTE
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4" aria-label="Main Navigation">
            <a href="#features" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-pitch-500 rounded-md transition-colors min-h-[44px] flex items-center">
              Features
            </a>
            <a href="#how-it-works" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-pitch-500 rounded-md transition-colors min-h-[44px] flex items-center">
              How It Works
            </a>
            <a href="#download" className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-pitch-500 rounded-md transition-colors min-h-[44px] flex items-center">
              Download
            </a>
            <a 
              href={RELEASE_METADATA.supportUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-pitch-500 rounded-md transition-colors min-h-[44px] flex items-center gap-1.5"
            >
              Support <Coffee size={14} className="text-amber-500" />
            </a>
          </nav>

          {/* CSS-only Mobile Menu Toggler via Checkbox Hack */}
          <div className="flex md:hidden relative">
            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
            
            {/* Menu Open button (hidden when checked) */}
            <label
              htmlFor="mobile-menu-toggle"
              className="inline-flex peer-checked:hidden items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-navy-900 cursor-pointer min-h-[44px] min-w-[44px] select-none"
              aria-label="Open Main Menu"
            >
              <Menu size={24} />
            </label>

            {/* Menu Close button (visible only when checked) */}
            <label
              htmlFor="mobile-menu-toggle"
              className="hidden peer-checked:inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-navy-900 cursor-pointer min-h-[44px] min-w-[44px] select-none"
              aria-label="Close Main Menu"
            >
              <X size={24} />
            </label>

            {/* Mobile menu panel using sibling selector and checkbox state */}
            <div className="hidden peer-checked:block fixed top-16 left-0 right-0 bg-navy-950 border-b border-navy-800 z-40 animate-fadeIn">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a 
                  href="#features" 
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-pitch-500 hover:bg-navy-900 transition-colors"
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-pitch-500 hover:bg-navy-900 transition-colors"
                >
                  How It Works
                </a>
                <a 
                  href="#download" 
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-pitch-500 hover:bg-navy-900 transition-colors"
                >
                  Download
                </a>
                <a 
                  href={RELEASE_METADATA.supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-pitch-500 hover:bg-navy-900 transition-colors flex items-center gap-2"
                >
                  Support <Coffee size={16} className="text-amber-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
