import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '../content';
import { Logo } from './Brand';

export const Footer: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => (
  <footer className="bg-white text-slate-600 border-t border-slate-200">
    <div className="py-16 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">See it with your own school in mind.</h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
          In a free demo we’ll show you the office console and both apps, and answer your questions.
        </p>
        <button
          onClick={onOpenBookDemo}
          className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-base shadow-md transition-all cursor-pointer"
        >
          Book a free demo
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-3">
          <Logo tagline={false} />
          <p className="text-slate-600 leading-relaxed">
            School management for Indian schools: an office console, a parent app and a teacher app on one system.
          </p>
        </div>

        <nav aria-label="Footer">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Product</div>
          <ul className="space-y-2">
            <li><a href="#tour" className="hover:text-slate-900">See the real screens</a></li>
            <li><a href="#modules" className="hover:text-slate-900">What’s included</a></li>
            <li><a href="#how-it-works" className="hover:text-slate-900">Getting started</a></li>
            <li><a href="#faq" className="hover:text-slate-900">FAQ</a></li>
          </ul>
        </nav>

        <div>
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Contact</div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-rose-500" aria-hidden="true" />
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-rose-600">{CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-500" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-indigo-600">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <span>{CONTACT.place}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
        © {new Date().getFullYear()} SchoolTek Technologies Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);
