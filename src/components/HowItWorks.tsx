import React from 'react';
import { UploadCloud, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBookDemo: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBookDemo }) => {
  const steps = [
    {
      step: '01',
      icon: UploadCloud,
      title: 'Send Us Your Excel Rosters',
      description: 'Simply share your student and staff lists in Excel or CSV. Our support engineers format, verify, and set up your school within 24 hours.'
    },
    {
      step: '02',
      icon: Smartphone,
      title: 'Staff & Parents Install the App',
      description: 'Teachers and parents log in using their verified phone number. No passwords to forget, no special training required.'
    },
    {
      step: '03',
      icon: CheckCircle,
      title: 'Your School Runs Effortlessly',
      description: 'Morning attendance is taken in 15 seconds, online fees flow directly to your bank account, and parents stay updated in real time.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Simple 3-Step Setup
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live on your campus in under 24 hours.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Zero technical headache. We handle all data migration and system setup for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 font-mono">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookDemo}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
          >
            <span>Get Started with a Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
