import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Mail, MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT } from '../content';

type Form = { name: string; school: string; city: string; phone: string; students: string; note: string };
const EMPTY: Form = { name: '', school: '', city: '', phone: '', students: '', note: '' };

function demoMessage(f: Form) {
  return [
    'Hello Schoolteck, I’d like a demo.',
    `Name: ${f.name}`,
    `School: ${f.school}`,
    `City: ${f.city}`,
    `Phone: ${f.phone}`,
    f.students && `Students: about ${f.students}`,
    f.note && `Note: ${f.note}`,
  ]
    .filter(Boolean)
    .join('\n');
}

const inputClass =
  'w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white';

export const BookDemoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<Form>(EMPTY);
  const [sent, setSent] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    firstField.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  const message = demoMessage(form);
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Demo request: ${form.school}`)}&body=${encodeURIComponent(message)}`;

  function close() {
    setSent(false);
    onClose();
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener');
    setSent(true);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {!sent ? (
          <>
            <h2 id="demo-title" className="text-2xl font-bold text-slate-900 pr-10">Book a free demo</h2>
            <p className="text-base text-slate-600 mt-1">
              We’ll show you Schoolteck with a sample school and answer your questions.
            </p>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-sm font-semibold text-slate-700 mb-1">Your name and role</label>
                <input id="demo-name" ref={firstField} required className={inputClass} placeholder="e.g. Rajesh Kumar, Principal" value={form.name} onChange={set('name')} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-school" className="block text-sm font-semibold text-slate-700 mb-1">School</label>
                  <input id="demo-school" required className={inputClass} value={form.school} onChange={set('school')} />
                </div>
                <div>
                  <label htmlFor="demo-city" className="block text-sm font-semibold text-slate-700 mb-1">City</label>
                  <input id="demo-city" required className={inputClass} value={form.city} onChange={set('city')} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-phone" className="block text-sm font-semibold text-slate-700 mb-1">Mobile / WhatsApp</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    required
                    inputMode="tel"
                    pattern={'\\+?[0-9 ]{10,15}'}
                    title="A 10-digit mobile number, e.g. 98765 43210"
                    className={inputClass}
                    value={form.phone}
                    onChange={set('phone')}
                  />
                </div>
                <div>
                  <label htmlFor="demo-students" className="block text-sm font-semibold text-slate-700 mb-1">
                    Students <span className="font-normal text-slate-500">(optional)</span>
                  </label>
                  <input id="demo-students" type="number" min={1} max={20000} className={inputClass} value={form.students} onChange={set('students')} />
                </div>
              </div>
              <div>
                <label htmlFor="demo-note" className="block text-sm font-semibold text-slate-700 mb-1">
                  Anything you’d like to see? <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea id="demo-note" rows={2} className={inputClass} placeholder="e.g. fee receipts, transport, admissions" value={form.note} onChange={set('note')} />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Continue on WhatsApp
              </button>
              <p className="text-sm text-slate-500 text-center">
                WhatsApp opens with your details filled in — just press Send. We use them only to arrange your demo.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
            </div>
            <h2 id="demo-title" className="text-2xl font-bold text-slate-900">One last step: press Send</h2>
            <p className="text-base text-slate-600 mt-2 max-w-sm mx-auto">
              Your message to us is ready in WhatsApp. Once you send it, we’ll reply to fix a time for your demo.
            </p>
            <div className="mt-6 space-y-2 text-base">
              <a href={whatsappUrl} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-300 text-emerald-700 font-semibold hover:bg-emerald-50">
                <MessageCircle className="w-4 h-4" aria-hidden="true" /> WhatsApp didn’t open? Try again
              </a>
              <a href={mailUrl} className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50">
                <Mail className="w-4 h-4" aria-hidden="true" /> Send by email instead
              </a>
              <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50">
                <Phone className="w-4 h-4" aria-hidden="true" /> Or call us: {CONTACT.phoneDisplay}
              </a>
            </div>
            <button onClick={close} className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 cursor-pointer">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
