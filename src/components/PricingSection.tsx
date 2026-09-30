import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { PRICING_PLANS, FAQ_ITEMS } from '../data/erpData';

interface PricingSectionProps {
  onOpenBookDemo: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBookDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="pricing" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span>Simple Pricing</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent pricing for any school size.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No hidden setup fees or surprise add-ons. Web admin portal and parent mobile apps included.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300">
            <button
              id="pricing-billing-annual"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isAnnual
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual Billing <span className="text-[11px] ml-1 text-rose-600 font-semibold">(Save 20%)</span>
            </button>
            <button
              id="pricing-billing-monthly"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-20 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.pricePerStudentAnnual : plan.pricePerStudentMonthly;
            return (
              <div
                key={plan.id}
                id={`pricing-plan-${plan.id}`}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all bg-white ${
                  plan.highlighted
                    ? 'border-2 border-indigo-500 shadow-lg relative lg:-translate-y-2'
                    : 'border border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 min-h-[32px]">
                    {plan.targetSchool}
                  </p>

                  <div className="my-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                        ₹{price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ student / month</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      Billed {isAnnual ? 'annually' : 'monthly'} · Full support included
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      What's Included:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    id={`btn-select-plan-${plan.id}`}
                    onClick={() => onOpenBookDemo(plan.name)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-rose-500 to-indigo-600 hover:opacity-95 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Common questions from school principals and administrators.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
