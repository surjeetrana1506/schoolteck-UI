import React from "react";
import { ArrowRight, CheckCircle, Smartphone, UploadCloud } from "lucide-react";
import { STEPS } from "../content";
import { Accent, PrimaryButton, Reveal, SectionHead } from "./Brand";

const ICONS = [UploadCloud, CheckCircle, Smartphone];

export const HowItWorks: React.FC<{ onOpenBookDemo: () => void }> = ({
  onOpenBookDemo,
}) => (
  <section id="how-it-works" className="py-24 sm:py-32 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHead
        label="Getting started"
        title={
          <>
            We set it up <Accent>with you.</Accent>
          </>
        }
        text="No servers to install and nothing technical for your staff to do."
      />

      <div className="relative">
        <div
          className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-rose-500/0 via-fuchsia-500/60 to-indigo-500/0"
          aria-hidden="true"
        />
        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {STEPS.map((s, idx) => {
            const Icon = ICONS[idx];
            return (
              <Reveal
                as="li"
                key={s.title}
                delay={idx * 120}
                className="relative text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-[0_10px_30px_-10px] shadow-fuchsia-500/40">
                  <Icon className="w-7 h-7 text-indigo-600" aria-hidden="true" />
                </div>
                <div className="mt-5 text-xs font-bold tracking-[0.2em] text-fuchsia-600">
                  STEP 0{idx + 1}
                </div>
                <h3 className="mt-2 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {s.text}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>

      <div className="mt-14 text-center">
        <PrimaryButton onClick={onOpenBookDemo}>
          Book a free demo
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </PrimaryButton>
      </div>
    </div>
  </section>
);
