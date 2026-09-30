import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw
} from 'lucide-react';
import { AdminPortalMock } from './AdminPortalMock';
import { StudentAppMock } from './StudentAppMock';
import { SimulationEvent } from '../types';
import { INITIAL_SIMULATION_EVENTS } from '../data/erpData';

interface InteractiveSandboxProps {
  onOpenBookDemo: () => void;
}

export const InteractiveSandbox: React.FC<InteractiveSandboxProps> = ({ onOpenBookDemo }) => {
  const [deviceMode, setDeviceMode] = useState<'admin' | 'student'>('admin');
  const [events, setEvents] = useState<SimulationEvent[]>(INITIAL_SIMULATION_EVENTS);
  const [attendanceCount, setAttendanceCount] = useState(1420);
  const [feesCollected, setFeesCollected] = useState(4820000);
  const [adminActiveTab, setAdminActiveTab] = useState<'overview' | 'attendance' | 'fees' | 'timetable' | 'fleet'>('overview');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleTriggerEvent = (type: 'attendance' | 'fee' | 'substitution' | 'transport') => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (type === 'attendance') {
      setAttendanceCount(prev => Math.min(1480, prev + 25));
      const newEvt: SimulationEvent = {
        id: `evt-${Date.now()}`,
        time: timeNow,
        type: 'attendance',
        title: 'Batch Attendance Marked: Class 10-A',
        detail: '25 students marked present. Automated SMS alert sent to absent parents.',
        badge: 'Instant Alert',
        status: 'automated'
      };
      setEvents(prev => [newEvt, ...prev]);
      showNotification('✓ Attendance logged. Instant parent notification sent!');
    } else if (type === 'fee') {
      setFeesCollected(prev => prev + 24500);
      const newEvt: SimulationEvent = {
        id: `evt-${Date.now()}`,
        time: timeNow,
        type: 'fee',
        title: 'Online UPI Fee Received (₹24,500)',
        detail: 'Term 2 tuition paid for Class 8 student. Digital receipt generated instantly.',
        badge: 'Auto Reconciled',
        status: 'automated'
      };
      setEvents(prev => [newEvt, ...prev]);
      showNotification('✓ Online UPI fee payment received and receipt generated!');
    } else if (type === 'substitution') {
      const newEvt: SimulationEvent = {
        id: `evt-${Date.now()}`,
        time: timeNow,
        type: 'substitution',
        title: 'Teacher Substitute Assigned',
        detail: 'Period 3 Math assigned to Mr. Anderson based on free schedule.',
        badge: 'Auto Scheduled',
        status: 'automated'
      };
      setEvents(prev => [newEvt, ...prev]);
      showNotification('✓ Substitute teacher assigned in 3 seconds!');
    } else if (type === 'transport') {
      const newEvt: SimulationEvent = {
        id: `evt-${Date.now()}`,
        time: timeNow,
        type: 'transport',
        title: 'Bus Route #12 Proximity Alert',
        detail: 'Bus within 500 meters of Main Gate stop.',
        badge: 'GPS Active',
        status: 'automated'
      };
      setEvents(prev => [newEvt, ...prev]);
      showNotification('✓ Bus arrival alert sent to parents on this stop.');
    }
  };

  return (
    <section id="live-sandbox" className="py-20 bg-slate-100 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Interactive Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See how simple it is to use.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Switch between the school administration portal and the parent mobile app below.
          </p>
        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-sm font-semibold shadow-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Switcher & Simple Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs">
          {/* Dual Platform Switcher */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 w-full sm:w-auto">
            <button
              id="switch-admin-view-btn"
              onClick={() => setDeviceMode('admin')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                deviceMode === 'admin'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Admin Web Portal</span>
            </button>
            <button
              id="switch-student-view-btn"
              onClick={() => setDeviceMode('student')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                deviceMode === 'student'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Parent Mobile App</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => handleTriggerEvent('attendance')}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Test 1-Tap Attendance</span>
            </button>
            <button
              onClick={() => handleTriggerEvent('fee')}
              className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Test UPI Fee Payment</span>
            </button>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="relative">
          {deviceMode === 'admin' ? (
            <AdminPortalMock
              events={events}
              attendanceCount={attendanceCount}
              totalStudents={1480}
              feesCollected={feesCollected}
              onTriggerEvent={handleTriggerEvent}
              activeTab={adminActiveTab}
              setActiveTab={setAdminActiveTab}
            />
          ) : (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 flex flex-col items-center shadow-md">
              <div className="max-w-md text-center mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                  <Smartphone className="w-3.5 h-3.5" />
                  Parent & Student App
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Intuitive mobile app for families
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Track bus location, pay school fees with UPI, and view daily marks in real-time.
                </p>
              </div>

              <StudentAppMock
                onSimulateFeePayment={() => handleTriggerEvent('fee')}
                onSimulateBusAlert={() => handleTriggerEvent('transport')}
              />
            </div>
          )}
        </div>

        {/* Simple Bottom Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-900">
              Want a personalized walkthrough with your school’s curriculum and fee structure?
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              We can load your sample class roster and demonstrate the app in 15 minutes.
            </div>
          </div>
          <button
            onClick={onOpenBookDemo}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>Schedule Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
