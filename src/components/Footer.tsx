import React from 'react';
import { 
  GraduationCap, 
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface FooterProps {
  onOpenBookDemo: () => void;
  onScrollToSandbox: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookDemo, onScrollToSandbox }) => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 text-xs">
      {/* Pre-Footer Call to Action */}
      <div className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>Get Started Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to simplify your school management?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Schedule a 15-minute demo to see how SchoolTek can transform your school operations.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenBookDemo}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Free Demo</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={onScrollToSandbox}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              Try Interactive Preview
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-black text-slate-900">
                School<span className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Tek</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Simple, reliable school management software for modern K-12 schools, colleges, and educational institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Product
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-slate-900 transition-colors">How It Works</a></li>
              <li><button onClick={onScrollToSandbox} className="hover:text-indigo-600 text-left transition-colors cursor-pointer">Live Preview</button></li>
              <li><a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Modules */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Features
            </div>
            <ul className="space-y-2 text-xs">
              <li>1-Tap Attendance</li>
              <li>UPI & Online Fees</li>
              <li>Parent Mobile App</li>
              <li>Live Bus GPS</li>
              <li>CBSE / ICSE Report Cards</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Contact
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <a href="tel:+919039195325" className="hover:text-rose-600 transition-colors">
                  +91 90391 95325
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <a href="mailto:info@schoolteck.in" className="hover:text-indigo-600 transition-colors">
                  info@schoolteck.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div>
            © {new Date().getFullYear()} SchoolTek Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-800">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-800">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-800">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
