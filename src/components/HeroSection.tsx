import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Monitor, 
  Smartphone,
  ShieldCheck,
  Star
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBookDemo: () => void;
  onScrollToSandbox: () => void;
  onScrollToRoi?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookDemo,
  onScrollToSandbox,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All-in-One School Software</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-medium">Web Portal & Mobile Apps</span>
          </div>
        </div>

        {/* Clear Headline & Short Subhead */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            School management, <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              made simple.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Attendance, online fees, parent communication, and student records — all in one easy platform with zero paperwork.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              id="hero-primary-demo-btn"
              onClick={onOpenBookDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-secondary-sandbox-btn"
              onClick={onScrollToSandbox}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Monitor className="w-4 h-4 text-blue-600" />
              <span>Explore Live Preview</span>
            </button>
          </div>

          {/* 3 Simple Key Stats */}
          <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">450+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">Partner Schools</div>
            </div>
            <div className="text-center border-x border-slate-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">15 Sec</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">Class Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">99.4%</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">On-Time Fees</div>
            </div>
          </div>
        </div>

        {/* Clean Hero Preview Frame */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80"
              alt="Modern smart school classroom with students and teacher"
              className="w-full h-64 sm:h-96 lg:h-[420px] object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Subtle Gradient & Floating Clean Card */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Unified Admin Portal & Parent Mobile Apps
                    </div>
                    <div className="text-xs text-slate-600">
                      Everything syncs in real-time — from morning roll call to fee receipts and bus GPS.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onScrollToSandbox}
                  className="shrink-0 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Try It Below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Trust Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
            Designed for all major boards and curriculums
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-slate-600">
            <span className="hover:text-slate-900 transition-colors">CBSE</span>
            <span className="text-slate-300">·</span>
            <span className="hover:text-slate-900 transition-colors">ICSE / ISC</span>
            <span className="text-slate-300">·</span>
            <span className="hover:text-slate-900 transition-colors">STATE BOARDS</span>
            <span className="text-slate-300">·</span>
            <span className="hover:text-slate-900 transition-colors">CAMBRIDGE / IB</span>
            <span className="text-slate-300">·</span>
            <span className="hover:text-slate-900 transition-colors">MATRICULATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};
