import React, { useState } from 'react';
import { 
  Bell, 
  Bus, 
  CreditCard, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  QrCode, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface StudentAppMockProps {
  onSimulateFeePayment: () => void;
  onSimulateBusAlert: () => void;
}

export const StudentAppMock: React.FC<StudentAppMockProps> = ({
  onSimulateFeePayment,
  onSimulateBusAlert,
}) => {
  const [activeMobileTab, setActiveMobileTab] = useState<'home' | 'bus' | 'fees' | 'id'>('home');
  const [isFeePaid, setIsFeePaid] = useState(false);
  const [busNearNotification, setBusNearNotification] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  const handlePay = () => {
    setIsFeePaid(true);
    setShowReceiptModal(true);
    onSimulateFeePayment();
  };

  const handleTriggerBus = () => {
    setBusNearNotification(true);
    onSimulateBusAlert();
    setTimeout(() => {
      setBusNearNotification(false);
    }, 6000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2">
      {/* Smartphone Outer Shell */}
      <div className="w-[320px] sm:w-[360px] h-[640px] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-800 relative flex flex-col justify-between overflow-hidden">
        {/* Speaker & Camera Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-4.5 bg-slate-900 rounded-full flex items-center justify-center z-30">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 mr-2"></div>
          <div className="w-10 h-1 rounded-full bg-slate-800"></div>
        </div>

        {/* Screen Container */}
        <div className="w-full h-full bg-slate-900 rounded-[34px] overflow-hidden flex flex-col justify-between text-slate-100 border border-slate-800/80 relative">
          {/* Mobile Top Status Bar */}
          <div className="pt-2 px-6 flex justify-between items-center text-[11px] text-slate-400 font-mono select-none z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="w-4 h-2 border border-slate-400 rounded-xs flex items-center p-0.5">
                <div className="w-full h-full bg-slate-400 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
                MP
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Maya Patel</div>
                <div className="text-[10px] text-slate-400">Grade 10-A · Roll #14</div>
              </div>
            </div>
            <button 
              id="student-app-bell"
              className="p-1.5 rounded-full bg-slate-800 text-slate-300 relative"
              aria-label="Student Notifications"
            >
              <Bell className="w-3.5 h-3.5" />
              <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-0.5 right-0.5 animate-pulse"></span>
            </button>
          </div>

          {/* Geofence Live Toast if triggered */}
          {busNearNotification && (
            <div className="absolute top-16 left-3 right-3 z-30 p-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-semibold shadow-xl flex items-center justify-between animate-bounce">
              <div className="flex items-center gap-2">
                <Bus className="w-4 h-4" />
                <span>Bus #12 is 400m from your stop!</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950/20">Live</span>
            </div>
          )}

          {/* Screen Content by Tab */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
            {activeMobileTab === 'home' && (
              <>
                {/* Gate Attendance Auto-Card */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Morning Attendance: Marked</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded border border-emerald-800/60">
                      Auto-Logged
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-slate-300">
                    Marked present at <strong className="text-white">07:42 AM</strong> via Classroom App 1-Tap. 
                    <span className="block text-[11px] text-slate-400 mt-0.5">Parent WhatsApp confirmation delivered at 07:42:04 AM.</span>
                  </div>
                </div>

                {/* Today's Timetable with Auto-Substitution Flag */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-200 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      Today's Live Timetable
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Friday</span>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-2 rounded-lg bg-slate-800 flex items-center justify-between border-l-2 border-emerald-500">
                      <div>
                        <div className="font-semibold text-slate-200">08:00 AM · Mathematics</div>
                        <div className="text-[10px] text-slate-400">Mr. Sharma · Room 204</div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">Done</span>
                    </div>

                    <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-between border-l-2 border-purple-400">
                      <div>
                        <div className="font-semibold text-purple-200 flex items-center gap-1">
                          <span>09:30 AM · Physics</span>
                          <span className="text-[9px] px-1 rounded bg-purple-500/20 text-purple-300 font-bold">Auto-Sub</span>
                        </div>
                        <div className="text-[10px] text-purple-300">Ms. Sunita (Substituting Dr. Rao) · Lab 2</div>
                      </div>
                      <span className="text-[10px] text-purple-300 font-mono animate-pulse">Now</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-800/80 flex items-center justify-between border-l-2 border-sky-400">
                      <div>
                        <div className="font-semibold text-slate-300">11:00 AM · English Lit</div>
                        <div className="text-[10px] text-slate-400">Mrs. Davis · Room 201</div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">Upcoming</span>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    id="mobile-quick-bus-btn"
                    onClick={() => setActiveMobileTab('bus')}
                    className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 hover:bg-amber-500/25 text-left transition-all cursor-pointer"
                  >
                    <Bus className="w-4 h-4 text-amber-400 mb-1" />
                    <div className="text-xs font-bold text-amber-300">School Bus</div>
                    <div className="text-[10px] text-slate-400">Route 12 · 8 min ETA</div>
                  </button>

                  <button
                    id="mobile-quick-fees-btn"
                    onClick={() => setActiveMobileTab('fees')}
                    className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/40 hover:bg-rose-500/25 text-left transition-all cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4 text-rose-400 mb-1" />
                    <div className="text-xs font-bold text-rose-300">Fee Portal</div>
                    <div className="text-[10px] text-slate-400">
                      {isFeePaid ? 'Cleared (0 Due)' : 'Term 2: ₹21,500 Due'}
                    </div>
                  </button>
                </div>
              </>
            )}

            {activeMobileTab === 'bus' && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Bus className="w-4 h-4 text-amber-400" />
                      Bus Route #12 Live Telematics
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                      GPS Active
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Vehicle: Yellow Coach 12 (Reg: CA-8921)
                  </div>
                </div>

                {/* Simulated Visual Route Map */}
                <div className="h-44 rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden flex flex-col justify-between p-3">
                  {/* Grid Lines to simulate map */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

                  {/* Simulated Path Line */}
                  <div className="absolute top-12 left-8 right-8 h-1 bg-emerald-500/40 rounded-full">
                    <div className="w-2/3 h-full bg-emerald-500 rounded-full relative">
                      <div className="w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-950 absolute -right-2 -top-1.5 shadow-lg animate-pulse flex items-center justify-center text-[8px] text-slate-950 font-bold">
                        🚌
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      Green Valley Stop
                    </span>
                    <span className="text-amber-400 font-mono font-bold">32 km/h</span>
                  </div>

                  <div className="relative z-10 bg-slate-900/90 p-2 rounded-lg border border-slate-800 text-[11px] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Estimated Arrival: 8 Mins</div>
                      <div className="text-[10px] text-slate-400">Driver: Robert K. · Clean Safety Score</div>
                    </div>
                    <button
                      onClick={handleTriggerBus}
                      className="px-2 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded text-[10px] font-bold transition-all"
                    >
                      Test Alert
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-[11px] text-slate-400 space-y-1">
                  <div className="font-semibold text-slate-300">Automated Parent Comfort:</div>
                  Zero calls to the school front desk. Parents receive automated geofence buzzers when bus is 500m away.
                </div>
              </div>
            )}

            {activeMobileTab === 'fees' && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <div className="text-xs text-slate-400">Student Tuition & Services Ledger</div>
                  <div className="text-lg font-bold text-white mt-1">
                    {isFeePaid ? 'All Dues Cleared' : '₹21,500.00 Outstanding'}
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">
                    {isFeePaid ? '✓ Auto-reconciled with school bank ledger' : 'Due by Sep 30, 2026'}
                  </div>
                </div>

                {isFeePaid ? (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <div className="text-xs font-bold text-white">Fee Paid & Instantly Reconciled</div>
                    <p className="text-[11px] text-slate-300">
                      Receipt #REC-2026-9812 generated and stored in tax archives. Zero cashier queue.
                    </p>
                    <button
                      onClick={() => setShowReceiptModal(true)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 mx-auto border border-slate-700"
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-400" />
                      View Official PDF Receipt
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-[11px] space-y-1">
                      <div className="flex justify-between text-slate-300">
                        <span>Term 2 Tuition:</span>
                        <span className="font-mono text-white">₹14,000.00</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Science & Computer Lab:</span>
                        <span className="font-mono text-white">₹3,500.00</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>GPS Bus Route 12:</span>
                        <span className="font-mono text-white">₹4,000.00</span>
                      </div>
                      <div className="border-t border-slate-700 pt-1 flex justify-between font-bold text-white">
                        <span>Total Due:</span>
                        <span className="font-mono text-emerald-400">₹21,500.00</span>
                      </div>
                    </div>

                    <button
                      id="mobile-pay-fee-action"
                      onClick={handlePay}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 cursor-pointer"
                    >
                      <CreditCard className="w-4 h-4 text-white" />
                      1-Click Pay with UPI / RuPay (₹21,500)
                    </button>
                    <div className="text-[10px] text-slate-400 text-center">
                      Auto-posts to school ledger via real-time bank webhook
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeMobileTab === 'id' && (
              <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-purple-500/30 text-center space-y-3">
                <div className="text-[10px] uppercase font-bold tracking-wider text-purple-400">
                  SchoolTek Partner Academy · Student Pass
                </div>

                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 mx-auto flex items-center justify-center text-xl font-bold text-white shadow-lg border-2 border-purple-400">
                  MP
                </div>

                <div>
                  <div className="text-sm font-bold text-white">Maya Patel</div>
                  <div className="text-[11px] text-slate-300">Grade 10-A · Section Green</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">ID: STU-2026-0814</div>
                </div>

                <div className="p-3 bg-white rounded-xl inline-block shadow-md">
                  <QrCode className="w-24 h-24 text-slate-950" />
                </div>

                <div className="text-[10px] text-slate-400 leading-tight">
                  Dynamic encrypted QR digital token for cafeteria, student verification, and library checkout.
                </div>
              </div>
            )}
          </div>

          {/* Mobile Bottom Navigation Bar */}
          <div className="h-14 bg-slate-950 border-t border-slate-800/80 px-4 flex items-center justify-around text-[10px] text-slate-400 z-10">
            {[
              { id: 'home', label: 'Today', icon: Clock, activeColor: 'text-cyan-400' },
              { id: 'bus', label: 'Bus GPS', icon: Bus, activeColor: 'text-amber-400' },
              { id: 'fees', label: 'Fees', icon: CreditCard, activeColor: 'text-rose-400' },
              { id: 'id', label: 'Digital ID', icon: QrCode, activeColor: 'text-purple-400' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeMobileTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`mobile-tab-${tab.id}`}
                  onClick={() => setActiveMobileTab(tab.id as any)}
                  className={`flex flex-col items-center gap-1 transition-all ${
                    isActive ? `${tab.activeColor} font-bold` : 'hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* iPhone Bottom Home Indicator bar */}
          <div className="pb-1 flex justify-center bg-slate-950">
            <div className="w-24 h-1 bg-slate-700 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Simulated Receipt Modal */}
      {showReceiptModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-sm w-full p-5 text-slate-100 shadow-2xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm">Automated Digital Receipt</span>
              </div>
              <span className="text-xs text-emerald-400 font-mono font-bold">PAID</span>
            </div>

            <div className="space-y-1 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Receipt Number:</span>
                <span className="font-mono">#OR-8921-2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Student:</span>
                <span>Maya Patel (Grade 10-A)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Amount Cleared:</span>
                <span className="font-bold text-white font-mono">₹21,500.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Payment Channel:</span>
                <span>Direct Bank UPI / Webhook Sync</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Reconciliation:</span>
                <span className="text-emerald-400 font-semibold">Instant (0 Clerical Work)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <button
                onClick={() => setShowReceiptModal(false)}
                className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer border border-slate-700"
              >
                Close Receipt Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
