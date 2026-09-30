import React, { useState } from 'react';
import { 
  Users, 
  CreditCard, 
  Bus, 
  Calendar, 
  ShieldCheck, 
  Bell, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  CheckCheck, 
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import { SimulationEvent } from '../types';

interface AdminPortalMockProps {
  events: SimulationEvent[];
  attendanceCount: number;
  totalStudents: number;
  feesCollected: number;
  onTriggerEvent: (type: 'attendance' | 'fee' | 'substitution' | 'transport') => void;
  activeTab: 'overview' | 'attendance' | 'fees' | 'timetable' | 'fleet';
  setActiveTab: (tab: 'overview' | 'attendance' | 'fees' | 'timetable' | 'fleet') => void;
}

export const AdminPortalMock: React.FC<AdminPortalMockProps> = ({
  events,
  attendanceCount,
  totalStudents,
  feesCollected,
  onTriggerEvent,
  activeTab,
  setActiveTab,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const attendanceRate = ((attendanceCount / totalStudents) * 100).toFixed(1);

  return (
    <div id="admin-portal-preview" className="bg-white text-slate-800 rounded-2xl overflow-hidden border border-slate-200 shadow-xl flex flex-col md:flex-row min-h-[580px]">
      {/* Sidebar */}
      <aside className="w-full md:w-56 bg-slate-50 border-r border-slate-200 p-4 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              ST
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 tracking-wide">SCHOOLTEK HQ</div>
              <div className="text-[10px] text-emerald-700 flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Auto-Engine Active
              </div>
            </div>
          </div>

          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-2 mb-2">
            Command Center
          </div>

          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Autonomous Hub', icon: Sparkles },
              { id: 'attendance', label: 'Smart Attendance', icon: CheckCheck, count: `${attendanceRate}%` },
              { id: 'fees', label: 'Bank Fee Sync', icon: CreditCard, count: `₹${(feesCollected/100000).toFixed(1)}L` },
              { id: 'timetable', label: 'Timetable AI', icon: Calendar, count: '4 Auto' },
              { id: 'fleet', label: 'Fleet Telematics', icon: Bus, count: '18 Live' },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`admin-nav-${item.id}`}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-slate-600 font-mono border border-slate-200">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
            <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Manual Slips</span>
            </div>
            <p className="text-[10px] text-slate-600 mt-1 leading-relaxed">
              All 1,480 student records auto-synchronized with zero clerical intervention.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-slate-50/50 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-14 border-b border-slate-200 px-4 flex items-center justify-between gap-4 bg-white">
          <div className="flex items-center gap-3 flex-1 max-w-sm">
            <div className="relative w-full">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search student ID, parent phone, or bus route..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Cloud Sync: All Services Online</span>
            </div>
            <button 
              id="admin-alert-bell"
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 relative"
              aria-label="Admin Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-blue-600 absolute top-1 right-1"></span>
            </button>
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-xs">
              DR
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-4 md:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Top Metric Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                <span>Autonomous Attendance</span>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[10px] px-1 rounded font-mono">1-Tap App</span>
              </div>
              <div className="text-xl font-bold text-slate-900 font-mono flex items-baseline gap-1.5">
                {attendanceCount}
                <span className="text-xs text-slate-400 font-normal">/ {totalStudents}</span>
              </div>
              <div className="text-[11px] text-emerald-700 mt-1 flex items-center gap-1 font-medium">
                <TrendingUp className="w-3 h-3" />
                <span>{attendanceRate}% present (0 roll calls)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                <span>Auto-Reconciled Fees</span>
                <span className="text-blue-700 bg-blue-50 border border-blue-200 text-[10px] px-1 rounded font-mono">Bank API</span>
              </div>
              <div className="text-xl font-bold text-slate-900 font-mono">
                ₹{feesCollected.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-blue-700 mt-1 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3 h-3" />
                <span>0 manual cashier vouchers</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                <span>Active Bus Telematics</span>
                <span className="text-amber-700 bg-amber-50 border border-amber-200 text-[10px] px-1 rounded font-mono">GPS IoT</span>
              </div>
              <div className="text-xl font-bold text-slate-900 font-mono">
                18 / 18
              </div>
              <div className="text-[11px] text-amber-700 mt-1 flex items-center gap-1 font-medium">
                <span>0 delay complaints today</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 text-xs mb-1">
                <span>Teacher Substitution</span>
                <span className="text-purple-700 bg-purple-50 border border-purple-200 text-[10px] px-1 rounded font-mono">AI Engine</span>
              </div>
              <div className="text-xl font-bold text-slate-900 font-mono">
                4 Resolved
              </div>
              <div className="text-[11px] text-purple-700 mt-1 flex items-center gap-1 font-medium">
                <span>Avg resolution time: 3.2s</span>
              </div>
            </div>
          </div>

          {/* Interactive Trigger Bar (Shows How Zero-Manual-Entry Works in Real-time) */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase tracking-wider">
                Live Simulator
              </span>
              <span className="text-xs text-slate-700 font-medium">
                Test Zero-Manual automations in real time:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                id="btn-simulate-gate"
                onClick={() => onTriggerEvent('attendance')}
                className="px-2.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-all flex items-center gap-1 shadow-xs active:scale-95 cursor-pointer"
              >
                <CheckCheck className="w-3 h-3" />
                Mark 25 Attendance
              </button>
              <button
                id="btn-simulate-fee"
                onClick={() => onTriggerEvent('fee')}
                className="px-2.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold transition-all flex items-center gap-1 shadow-xs active:scale-95 cursor-pointer"
              >
                <CreditCard className="w-3 h-3" />
                Simulate UPI Fee Payment
              </button>
              <button
                id="btn-simulate-sub"
                onClick={() => onTriggerEvent('substitution')}
                className="px-2.5 py-1.5 rounded bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-semibold transition-all flex items-center gap-1 shadow-xs active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3 h-3" />
                Auto-Fill Leave Period
              </button>
            </div>
          </div>

          {/* Tab Specific Content */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Live Automated Stream */}
              <div className="lg:col-span-2 rounded-xl bg-white border border-slate-200 shadow-xs p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Real-Time Autonomous Event Stream
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Zero clerical intervention
                    </span>
                  </div>

                  <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                    {events.map((evt) => (
                      <div
                        key={evt.id}
                        className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between gap-3 text-xs"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-900">{evt.title}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-medium">
                              {evt.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-relaxed">
                            {evt.detail}
                          </p>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 shrink-0">
                          {evt.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Autonomous sync heartbeat: 100% healthy</span>
                  <span className="text-emerald-700 font-medium">Bank Webhooks & Cloud Attendance Active</span>
                </div>
              </div>

              {/* Quick Status / Hardware Health */}
              <div className="rounded-xl bg-white border border-slate-200 shadow-xs p-3.5 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  System & Integration Status
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-slate-700">Classroom 1-Tap App Roster</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-mono font-bold">ONLINE</span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-slate-700">UPI/Bank Direct Ledger</span>
                    </div>
                    <span className="text-[10px] text-blue-700 font-mono font-bold">SYNCED</span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bus className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-slate-700">18 Fleet GPS Telematics</span>
                    </div>
                    <span className="text-[10px] text-amber-700 font-mono font-bold">LIVE PING</span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-purple-600" />
                      <span className="text-slate-700">Report Card PDF Engine</span>
                    </div>
                    <span className="text-[10px] text-purple-700 font-mono font-bold">READY</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-[11px] text-slate-700">
                  <div className="font-semibold text-blue-900 mb-0.5">Admin Benefit:</div>
                  Zero manual roll call, zero fee tally errors, and zero parent bus calls.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCheck className="w-4 h-4 text-emerald-600" />
                      <span>1-Tap Digital Attendance Feed</span>
                    </h4>
                    <p className="text-xs text-slate-500">
                      Teachers mark full class in 1 tap or students check in via class tablet. WhatsApp & push alerts triggered within 0.4s to parents.
                    </p>
                  </div>
                  <button
                    onClick={() => onTriggerEvent('attendance')}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    <span>Simulate 1-Tap Check-In (+25)</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500">Senior Wing (Grade 9-12)</div>
                    <div className="text-base font-bold text-slate-900 font-mono">420 Present</div>
                    <div className="text-[10px] text-emerald-700">Status: Synced (100%)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500">Middle Wing (Grade 6-8)</div>
                    <div className="text-base font-bold text-slate-900 font-mono">680 Present</div>
                    <div className="text-[10px] text-emerald-700">Status: Synced (99.2%)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500">Primary Wing (Grade 1-5)</div>
                    <div className="text-base font-bold text-slate-900 font-mono">320 Present</div>
                    <div className="text-[10px] text-emerald-700">Status: Synced (100%)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500">Teacher Time Saved</div>
                    <div className="text-base font-bold text-emerald-700 font-mono">35 Hours</div>
                    <div className="text-[10px] text-slate-500">Across 52 Classrooms</div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500">
                        <th className="pb-2">Student Name</th>
                        <th className="pb-2">Grade & Section</th>
                        <th className="pb-2">Method</th>
                        <th className="pb-2">Classroom</th>
                        <th className="pb-2">Timestamp</th>
                        <th className="pb-2 text-right">Parent Alert</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {[
                        { name: 'Maya Patel', grade: '10-A', mode: '1-Tap Mobile App', room: 'Room 204', time: '08:14:02 AM', alert: 'Delivered (WhatsApp)' },
                        { name: 'Liam Chen', grade: '11-B', mode: 'Biometric QR', room: 'Room 102', time: '08:13:58 AM', alert: 'Delivered (Push)' },
                        { name: 'Sofia Rodriguez', grade: '9-C', mode: '1-Tap Mobile App', room: 'Room 305', time: '08:13:45 AM', alert: 'Delivered (WhatsApp)' },
                        { name: 'Aiden Brooks', grade: '12-A', mode: 'Biometric QR', room: 'Room 401', time: '08:13:21 AM', alert: 'Delivered (Push)' },
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          <td className="py-2.5 font-semibold text-slate-900">{row.name}</td>
                          <td className="py-2.5">{row.grade}</td>
                          <td className="py-2.5 font-medium text-slate-600">{row.mode}</td>
                          <td className="py-2.5">{row.room}</td>
                          <td className="py-2.5 font-mono text-slate-500">{row.time}</td>
                          <td className="py-2.5 text-right font-medium text-emerald-700">{row.alert}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fees' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      <span>Bank Webhook Auto-Reconciliation Engine</span>
                    </h4>
                    <p className="text-xs text-slate-500">
                      Real-time payment gateway synchronization. Fees clear instantly without cashier queues or manual slips.
                    </p>
                  </div>
                  <button
                    onClick={() => onTriggerEvent('fee')}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Simulate UPI Fee Payment (₹24,500)</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500">Total Collected YTD</div>
                    <div className="text-xl font-bold text-slate-900 font-mono">₹{feesCollected.toLocaleString('en-IN')}</div>
                    <div className="text-[10px] text-emerald-700">99.4% auto-reconciled via UPI/Netbanking</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500">Pending Tuition Due</div>
                    <div className="text-xl font-bold text-amber-700 font-mono">₹4,20,000</div>
                    <div className="text-[10px] text-slate-500">Auto-reminders sent via WhatsApp</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500">Manual Accounting Errors</div>
                    <div className="text-xl font-bold text-emerald-700 font-mono">0.00%</div>
                    <div className="text-[10px] text-slate-500">Direct bank-to-ledger API sync</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700">Recent Automated Bank Ingestion Logs</div>
                  {[
                    { tx: 'TXN-UPI-99812', student: 'Maya Patel (10-A)', head: 'Term 2 Tuition + Bus', amt: '₹21,500.00', status: 'Auto-Matched to GL #4010' },
                    { tx: 'TXN-UPI-99811', student: 'Devin Scott (12-B)', head: 'Physics Lab + Exam Fee', amt: '₹8,400.00', status: 'Auto-Matched to GL #4020' },
                    { tx: 'TXN-UPI-99810', student: 'Aanya Sharma (8-A)', head: 'Annual Activity & Library Deposit', amt: '₹3,500.00', status: 'Auto-Matched to GL #4030' },
                  ].map((tx, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-slate-900">{tx.student}</div>
                        <div className="text-[11px] text-slate-500">{tx.head} · <span className="font-mono text-slate-400">{tx.tx}</span></div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-emerald-700">{tx.amt}</div>
                        <div className="text-[10px] text-blue-600 font-medium">{tx.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timetable' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>Algorithmic Timetable & Auto-Substitution Engine</span>
                    </h4>
                    <p className="text-xs text-slate-500">
                      Automatically fills unplanned teacher leaves in 3 seconds based on syllabus progress and free periods.
                    </p>
                  </div>
                  <button
                    onClick={() => onTriggerEvent('substitution')}
                    className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Auto-Fill Leave Period</span>
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-purple-50 border border-purple-200 mb-4 text-xs space-y-1">
                  <div className="font-bold text-purple-900">Live Auto-Substitution Case:</div>
                  <div className="text-slate-700">
                    Ms. Jennifer Adams (Grade 10 Biology) submitted emergency sick leave at 07:42 AM.
                  </div>
                  <div className="text-emerald-800 font-semibold">
                    ✓ SchoolTek Auto-Engine evaluated 14 free teachers in Period 3 and assigned Mr. Anderson (Chemistry Dean). Timetables synced to both teacher phones with zero coordinator scrambling.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-slate-500">Period 1 (08:30)</div>
                    <div className="font-bold text-slate-900">Math 10-A</div>
                    <div className="text-[10px] text-emerald-700">Normal Schedule</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-slate-500">Period 2 (09:20)</div>
                    <div className="font-bold text-slate-900">Physics 10-A</div>
                    <div className="text-[10px] text-emerald-700">Normal Schedule</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-300">
                    <div className="text-purple-800 font-medium">Period 3 (10:15)</div>
                    <div className="font-bold text-purple-950">Biology 10-A</div>
                    <div className="text-[10px] text-purple-700 font-semibold">Auto-Sub: Mr. Anderson</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-slate-500">Period 4 (11:05)</div>
                    <div className="font-bold text-slate-900">English Lit 10-A</div>
                    <div className="text-[10px] text-emerald-700">Normal Schedule</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fleet' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Bus className="w-4 h-4 text-amber-600" />
                      <span>IoT Bus Fleet Telematics & Live Parent Geofence</span>
                    </h4>
                    <p className="text-xs text-slate-500">
                      18 GPS units broadcasting real-time speed, live stop alerts, and student boarding logs.
                    </p>
                  </div>
                  <button
                    onClick={() => onTriggerEvent('transport')}
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Bus className="w-3.5 h-3.5" />
                    <span>Broadcast Proximity Alert</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { route: 'Route #12 (Oak Ridge)', driver: 'Carlos Gomez', speed: '38 km/h', nextStop: 'Sunset Boulevard Stop 4', onBoard: '28 / 32 Students', eta: '3 mins' },
                    { route: 'Route #04 (Riverdale)', driver: 'Mark Daniels', speed: '42 km/h', nextStop: 'Pine Crest Heights', onBoard: '31 / 32 Students', eta: '6 mins' },
                    { route: 'Route #07 (Highland)', driver: 'Samira Khan', speed: '25 km/h', nextStop: 'Heritage Park Gate', onBoard: '22 / 30 Students', eta: 'On Time' },
                  ].map((busItem, bIdx) => (
                    <div key={bIdx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">{busItem.route}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">GPS LIVE</span>
                      </div>
                      <div className="text-slate-500 text-[11px]">Driver: {busItem.driver} · Speed: {busItem.speed}</div>
                      <div className="text-slate-700">Next: <span className="text-amber-700 font-semibold">{busItem.nextStop}</span></div>
                      <div className="flex justify-between text-[11px] pt-1 border-t border-slate-200">
                        <span className="text-slate-600">Students Onboard: {busItem.onBoard}</span>
                        <span className="text-blue-700 font-semibold">{busItem.eta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
