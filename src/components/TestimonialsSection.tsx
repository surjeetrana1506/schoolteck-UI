import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  Lock,
  Building2
} from 'lucide-react';
import { TESTIMONIALS } from '../data/erpData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Principal Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by school leaders.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hear from administrators who replaced manual registers and fee queues with SchoolTek.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{t.author}</div>
                    <div className="text-[11px] text-blue-600 font-medium">{t.role}</div>
                    <div className="text-[10px] text-slate-500">
                      {t.school}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Certifications Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">NEP 2020 & Board Compliant</div>
              <div className="text-[11px] text-slate-500">Built for CBSE, ICSE and State guidelines</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 border border-blue-200 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">256-Bit Data Encryption</div>
              <div className="text-[11px] text-slate-500">Student and financial records safely encrypted</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700 border border-purple-200 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">99.9% Uptime Guarantee</div>
              <div className="text-[11px] text-slate-500">Fast, reliable cloud servers with daily backups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
