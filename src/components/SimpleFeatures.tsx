import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Smartphone, 
  GraduationCap, 
  Bus, 
  Bell, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface SimpleFeaturesProps {
  onOpenBookDemo: () => void;
  onScrollToPreview: () => void;
}

export const SimpleFeatures: React.FC<SimpleFeaturesProps> = ({ onOpenBookDemo, onScrollToPreview }) => {
  const [activeTab, setActiveTab] = useState<'attendance' | 'fees' | 'app' | 'academics'>('attendance');

  const features = [
    {
      id: 'attendance',
      icon: Clock,
      title: 'Smart Attendance',
      shortDesc: 'Mark classes in 15 seconds. Instant WhatsApp/SMS to absent parents.',
      color: 'blue',
      badge: '15-Sec Check-in',
      headline: 'Attendance marked in seconds, not half an hour.',
      description: 'Teachers take morning attendance with 1 tap on their phone or tablet. Absent students are instantly flagged and their parents receive an automated alert immediately — eliminating paper registers and morning front-desk calls.',
      points: [
        '1-tap whole-class attendance from teacher app',
        'Instant WhatsApp & SMS alerts sent to parents',
        'Automatic monthly attendance percentage calculation',
        'Optional biometric & RFID gate-sync support'
      ],
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Teacher taking classroom attendance with students in uniform'
    },
    {
      id: 'fees',
      icon: CreditCard,
      title: 'Online Fees & UPI',
      shortDesc: 'Instant UPI fee payments with automatic receipts and zero queues.',
      color: 'emerald',
      badge: 'Zero Cashier Queues',
      headline: 'Simple online fee collection with automated receipts.',
      description: 'Parents can pay school fees anytime from their mobile phones using UPI, Google Pay, PhonePe, credit cards, or net banking. Digital receipts are issued instantly, and fee ledgers reconcile automatically without cashier lines.',
      points: [
        'Direct UPI, QR code, and net-banking payments',
        'Instant downloadable fee receipts for parents',
        'Automated gentle WhatsApp reminders before due dates',
        'Real-time collection reports and fee defaulter lists'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'School accounting and fee payment dashboard on laptop'
    },
    {
      id: 'app',
      icon: Smartphone,
      title: 'Parent & Student App',
      shortDesc: 'Daily homework, notices, exam marks, and live bus GPS in their pocket.',
      color: 'indigo',
      badge: 'Live Bus GPS',
      headline: 'Keep parents informed and children safe.',
      description: 'Parents get a single, easy mobile app to track their child’s school day. See live school bus location on a map, view daily homework, receive circulars, and check exam schedules without cluttered WhatsApp parent groups.',
      points: [
        'Real-time GPS tracking of school bus on a live map',
        'Daily homework assignments and teacher feedback',
        'Official school notices and circulars in one clean feed',
        'Direct 1-on-1 teacher messaging during school hours'
      ],
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Yellow school bus ready for morning student transport'
    },
    {
      id: 'academics',
      icon: GraduationCap,
      title: 'Exams & Records',
      shortDesc: '1-click CBSE & ICSE report cards, timetables, and student profiles.',
      color: 'purple',
      badge: 'CBSE & ICSE Compliant',
      headline: 'Effortless report cards, timetables, and student archives.',
      description: 'Enter marks once and generate beautifully formatted, board-compliant report cards with one click. Manage teacher timetables, print transfer certificates, and access complete student histories with ease.',
      points: [
        'Automated report card generation with grading scales',
        'Smart clash-free timetable creation in minutes',
        'Digital student dossiers (ID cards, transfer certificates, medical info)',
        'Staff leave management and automated teacher substitution'
      ],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
      imageAlt: 'Students and teacher working together in a library'
    }
  ];

  const currentFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section id="features" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Core Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything your school needs, nothing you don't.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Four simple tools designed to make school operations smooth, fast, and completely paperless.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {features.map((feat) => {
            const Icon = feat.icon;
            const isActive = activeTab === feat.id;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(feat.id as any)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col items-start ${
                  isActive
                    ? 'bg-blue-50/80 border-blue-600 shadow-sm text-blue-950'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <div className={`p-2 rounded-xl mb-2.5 ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-slate-900">{feat.title}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">{feat.shortDesc}</div>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentFeature.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {currentFeature.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentFeature.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {currentFeature.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBookDemo}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  Book a 15-Minute Demo
                </button>
                <button
                  onClick={onScrollToPreview}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>See Interactive Preview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Photo Preview */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <img
                  src={currentFeature.image}
                  alt={currentFeature.imageAlt}
                  className="w-full h-64 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{currentFeature.title} Module</div>
                    <div className="text-[11px] text-slate-500">Built for CBSE, ICSE & State Board schools</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                    Ready to Deploy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
