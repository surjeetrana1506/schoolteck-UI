// Everything the site says, in one place. Keep it true to the product: only
// describe what a school can use today, and say "coming" for anything that isn't.

export const CONTACT = {
  phoneDisplay: '+91 90391 95325',
  phoneTel: '+919039195325',
  whatsapp: '919039195325',
  email: 'info@schoolteck.in',
  place: 'Indore, Madhya Pradesh, India',
};

export type Shot = { src: string; alt: string };

export type TourItem = {
  id: string;
  title: string;
  text: string;
  shot: Shot;
};

export type TourGroup = {
  id: 'office' | 'parent' | 'teacher';
  label: string;
  intro: string;
  device: 'browser' | 'phone';
  items: TourItem[];
};

const screen = (name: string, alt: string): Shot => ({ src: `${import.meta.env.BASE_URL}screens/${name}.webp`, alt });

export const TOUR: TourGroup[] = [
  {
    id: 'office',
    label: 'School office',
    intro: 'The web console your office, principal and admissions desk use every day.',
    device: 'browser',
    items: [
      { id: 'dashboard', title: 'Dashboard', text: 'Students, fees collected, teachers and parents on the app — plus what needs attention today.', shot: screen('dashboard', 'Schoolteck office dashboard with key numbers and items needing attention') },
      { id: 'students', title: 'Students', text: 'Every student and class in one list. Enrol one at a time or import your spreadsheet.', shot: screen('students', 'Student list with class, admission number and app status') },
      { id: 'profile', title: 'Student profile', text: 'Details, parents, fees, bus, documents and consent for one child, with full history.', shot: screen('profile', 'A student profile with details, parents, fees and school bus') },
      { id: 'record-payment', title: 'Record a payment', text: 'Cash, UPI, cheque, bank transfer or card — recorded at the counter in seconds.', shot: screen('record-payment', 'Recording a ₹14,700 UPI fee payment') },
      { id: 'receipt', title: 'Numbered receipts', text: 'Every payment gets the next receipt number for the year, printed on your letterhead.', shot: screen('receipt', 'Printable fee receipt on the school letterhead') },
      { id: 'transport', title: 'Transport', text: 'Buses, drivers, routes and stops on a map, with seat counts and expiring papers flagged.', shot: screen('transport', 'Transport page with a bus route drawn on a map') },
      { id: 'notices', title: 'Notices', text: 'A notice to the whole school or one class, with photos. Copy it to WhatsApp or print it too.', shot: screen('notices', 'Writing a notice to the whole school') },
      { id: 'calendar', title: 'Calendar', text: 'Holidays, events, PTMs and exams — for the whole school or one class.', shot: screen('calendar', 'School calendar with holidays, exams and a PTM') },
      { id: 'timetable', title: 'Timetable', text: 'Each class’s week, period by period. Double-booked teachers are flagged.', shot: screen('timetable', 'Class timetable with a double-booking warning') },
      { id: 'exams', title: 'Exams & results', text: 'Set up exams, teachers enter marks, and parents see results once you publish.', shot: screen('exams', 'Exams page showing marks entered per subject') },
      { id: 'chat', title: 'Teacher–parent messages', text: 'One-to-one messages with the office able to read, step in or close a conversation.', shot: screen('chat', 'A conversation between a parent and a class teacher') },
      { id: 'activity', title: 'Activity log', text: 'Who changed what, and when — for every payment, notice and record.', shot: screen('activity', 'Activity log listing recent changes with who made them') },
      { id: 'admissions', title: 'Admissions', text: 'Enquiries from your website in one list, with stages and follow-up dates.', shot: screen('admissions', 'Admissions list of enquiries with stages and follow-ups') },
    ],
  },
  {
    id: 'parent',
    label: 'Parent app',
    intro: 'Everything about their child on their phone — for each child, if they have more than one.',
    device: 'phone',
    items: [
      { id: 'p-home', title: 'Home', text: 'Attendance, homework, results, calendar, fees and new notices at a glance.', shot: screen('p-home', 'Parent app home screen with tiles for attendance, results and fees') },
      { id: 'p-attendance', title: 'Attendance', text: 'The month on a calendar: present, absent, late and leave, with holidays shaded.', shot: screen('p-attendance', 'Monthly attendance calendar in the parent app') },
      { id: 'p-fees', title: 'Fees & receipts', text: 'What’s due, what’s paid, and every receipt — shareable as a PDF.', shot: screen('p-fees', 'Fees screen with receipts in the parent app') },
      { id: 'p-diary', title: 'School diary', text: 'Every notice in one place: pinned items, categories, search and photos.', shot: screen('p-diary', 'School diary with pinned and categorised notices') },
      { id: 'p-chat', title: 'Messages', text: 'A direct line to the class teacher — with quiet hours at night.', shot: screen('p-chat', 'A parent’s conversation with the class teacher') },
      { id: 'p-results', title: 'Results', text: 'Marks and grades for each published exam, and the year’s percentage.', shot: screen('p-results', 'Exam results with grades in the parent app') },
      { id: 'p-calendar', title: 'Calendar', text: 'Holidays, events and PTMs for their child’s class.', shot: screen('p-calendar', 'School calendar in the parent app') },
      { id: 'p-timetable', title: 'Timetable', text: 'Their child’s week, period by period, with the teacher for each subject.', shot: screen('p-timetable', 'Class timetable in the parent app') },
      { id: 'p-leave', title: 'Leave', text: 'Apply for leave in seconds and see when the teacher approves it.', shot: screen('p-leave', 'Leave application approved by the teacher') },
    ],
  },
  {
    id: 'teacher',
    label: 'Teacher app',
    intro: 'Only their own classes — attendance, homework, marks and messages.',
    device: 'phone',
    items: [
      { id: 't-home', title: 'My classes', text: 'Today’s classes, what’s not marked yet, messages and leave requests waiting.', shot: screen('t-home', 'Teacher app home with today’s classes') },
      { id: 't-attendance', title: 'Attendance', text: 'Everyone starts present — tap only the absentees and save. Parents see it straight away.', shot: screen('t-attendance', 'Marking attendance for a whole class in the teacher app') },
    ],
  },
];

/** Every school has these. */
export const CORE = [
  { title: 'Students & classes', text: 'Enrol, import from Excel/CSV, edit, mark as left — history is never lost.' },
  { title: 'Teachers', text: 'Staff list, their classes and subjects, switch accounts off when someone leaves.' },
  { title: 'Fees & receipts', text: 'Fee structures, invoices, payments at the counter, numbered receipts, dues and collection reports.' },
  { title: 'Notices', text: 'To the whole school or one class, with photos, pinned items and a push to parents’ phones.' },
  { title: 'Parent & teacher apps', text: 'Sign in with their mobile number and a one-time code — no passwords to forget.' },
  { title: 'Activity log & consent', text: 'Every change recorded, and parents’ consent collected as India’s DPDP Act requires.' },
];

/** Switched on per school — pay only for what you use. */
export const MODULES = [
  { title: 'Transport', text: 'Buses, drivers, routes, stops and pickup times; parents see their child’s bus.' },
  { title: 'Academics', text: 'Daily attendance, homework and exam results with CBSE grading.' },
  { title: 'Timetable', text: 'Periods for every class, for parents and teachers.' },
  { title: 'Calendar', text: 'Holidays, events, PTMs and exams.' },
  { title: 'Leave applications', text: 'Parents apply in the app; teachers or the office decide.' },
  { title: 'Teacher–parent messages', text: 'Safe one-to-one chat the office can oversee, with quiet hours.' },
  { title: 'Admissions', text: 'An enquiry form for your website and a follow-up list for the front desk.' },
];

export const TRUST = [
  { title: 'Stored in India', text: 'Your school’s data is hosted in Mumbai, India.' },
  { title: 'Kept separate', text: 'Each school’s data lives in its own separate space — never mixed with another school’s.' },
  { title: 'Parent consent built in', text: 'Parents agree to the privacy notice in the app, and can ask to withdraw it.' },
  { title: 'Every change recorded', text: 'The activity log answers “who did that?” for payments, notices and records.' },
];

export const STEPS = [
  { title: 'Send us your lists', text: 'Students, parents’ mobile numbers and teachers in Excel or CSV. We import and check them with you.' },
  { title: 'We set up your school', text: 'Your logo, classes, fee structures and office accounts — and the modules you chose.' },
  { title: 'Parents and teachers sign in', text: 'With their mobile number and a one-time code. The office sees who has joined.' },
];

export const FAQ = [
  {
    q: 'Do students get their own login?',
    a: 'No. Parents use the parent app on their child’s behalf, and teachers use the teacher app. A parent with two children sees both in one app.',
  },
  {
    q: 'Can parents pay fees online?',
    a: 'Today the office records every payment — cash, UPI, cheque, bank transfer or card — and the parent sees the receipt in the app straight away. Online payment from the app is on the way.',
  },
  {
    q: 'Is there live bus tracking?',
    a: 'Not yet. Parents see their child’s route, stop and pickup and drop times; the office manages buses, drivers and stops on a map.',
  },
  {
    q: 'How do parents hear about notices?',
    a: 'Parents who use the app get a notification on their phone. For families not on the app yet, any notice can be copied to WhatsApp or printed on your letterhead in one click.',
  },
  {
    q: 'How do we move our existing data?',
    a: 'Send us your student and teacher lists in Excel or CSV. The import checks every row and shows you what it found before anything is saved.',
  },
  {
    q: 'What does it cost?',
    a: 'Every school gets the core — students, teachers, fees, notices and the apps — and you add only the modules you need. Tell us about your school and we’ll send you a quote.',
  },
];
