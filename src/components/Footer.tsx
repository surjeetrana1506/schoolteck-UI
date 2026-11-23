import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../content';
import { Accent, Logo, PrimaryButton, Reveal } from './Brand';

export const Footer: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => (
  <footer className="relative text-slate-400">
    <div className="relative px-4 sm:px-6 lg:px-8">
      <Reveal className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 px-6 py-16 sm:py-24 text-center">
        <div className="aurora" aria-hidden="true" />
        <div className="grid-lines" aria-hidden="true" />
        <div className="relative">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            See it with your <br className="hidden sm:inline" />
            <Accent>own school</Accent> in mind.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            In a free demo we’ll show you the office console and both apps, and answer your questions.
          </p>
          <PrimaryButton onClick={onOpenBookDemo} className="mt-8">
            Book a free demo
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </Reveal>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div className="space-y-3">
          <Logo tagline={false} />
          <p className="leading-relaxed max-w-xs">
            School management for Indian schools: an office console, a parent app and a teacher app on one system.
          </p>
        </div>

        <nav aria-label="Footer">
          <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Product</div>
          <ul className="space-y-2">
            <li><a href="#tour" className="hover:text-white">Watch it in action</a></li>
            <li><a href="#modules" className="hover:text-white">What’s included</a></li>
            <li><a href="#how-it-works" className="hover:text-white">Getting started</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </nav>

        <div>
          <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Contact</div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-rose-400" aria-hidden="true" />
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white">{CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
              <span>{CONTACT.place}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-xs text-slate-500">
        © {new Date().getFullYear()} SchoolTek Technologies Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);
