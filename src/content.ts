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

/** One chapter of a tour clip: what it shows and where it plays (seconds). */
export type TourItem = {
  id: string;
  title: string;
  text: string;
  at: [start: number, end: number];
};

/** A silent, looping clip cut from the demo video, with chapters. */
export type TourGroup = {
  id: 'office' | 'parent' | 'teacher';
  label: string;
  video: string;
  poster: string;
  alt: string;
  items: TourItem[];
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const screen = (name: string, alt: string): Shot => ({ src: asset(`screens/${name}.webp`), alt });

export const HERO = {
  dashboard: screen('dashboard', 'Schoolteck office dashboard with key numbers and items needing attention'),
  parentHome: screen('p-home', 'Parent app home screen with tiles for attendance, results and fees'),
};

export const TOUR: TourGroup[] = [
  {
    id: 'office',
    label: 'School office',
    video: asset('video/office.mp4'),
    poster: asset('video/office.webp'),
    alt: 'A walk through the Schoolteck office console with a sample school',
    items: [
      { id: 'dashboard', title: 'Dashboard', text: 'Students, fees collected, teachers and parents on the app — plus what needs attention today.', at: [0, 23.5] },
      { id: 'students', title: 'Students', text: 'Every student and class in one list. Enrol one at a time or import your spreadsheet.', at: [23.5, 28.4] },
      { id: 'profile', title: 'Student profile', text: 'Details, parents, fees, bus, documents and consent for one child, with full history.', at: [28.4, 42.8] },
      { id: 'record-payment', title: 'Record a payment', text: 'Cash, UPI, cheque, bank transfer or card — recorded at the counter in seconds.', at: [60.8, 74] },
      { id: 'receipt', title: 'Numbered receipts', text: 'Every payment gets the next receipt number for the year, printed on your letterhead.', at: [74, 84.2] },
      { id: 'transport', title: 'Transport', text: 'Buses, drivers, routes and stops on a map, with seat counts and expiring papers flagged.', at: [84.2, 101.8] },
      { id: 'notices', title: 'Notices', text: 'A notice to the whole school or one class, with photos. Copy it to WhatsApp or print it too.', at: [101.8, 118.8] },
      { id: 'calendar', title: 'Calendar', text: 'Holidays, events, PTMs and exams — for the whole school or one class.', at: [118.8, 127.8] },
      { id: 'timetable', title: 'Timetable', text: 'Each class’s week, period by period. Double-booked teachers are flagged.', at: [127.8, 136.8] },
      { id: 'leave', title: 'Leave', text: 'Parents apply in the app; the class teacher or the office approves, and attendance follows.', at: [136.8, 147.3] },
      { id: 'exams', title: 'Exams & results', text: 'Set up exams, teachers enter marks, and parents see results once you publish.', at: [147.3, 159] },
      { id: 'chat', title: 'Teacher–parent messages', text: 'One-to-one messages with the office able to read, step in or close a conversation.', at: [159, 164.6] },
      { id: 'activity', title: 'Activity log', text: 'Who changed what, and when — for every payment, notice and record.', at: [164.6, 172.8] },
      { id: 'admissions', title: 'Admissions', text: 'An enquiry form for your website, and every enquiry in one list with stages and follow-up dates.', at: [187.3, 227.8] },
    ],
  },
  {
    id: 'parent',
    label: 'Parent app',
    video: asset('video/parent.mp4'),
    poster: asset('video/parent.webp'),
    alt: 'A walk through the Schoolteck parent app',
    items: [
      { id: 'p-home', title: 'Home', text: 'Attendance, homework, results, calendar, fees and new notices at a glance.', at: [0, 5.5] },
      { id: 'p-attendance', title: 'Attendance', text: 'The month on a calendar: present, absent, late and leave, with holidays shaded.', at: [5.5, 16.5] },
      { id: 'p-fees', title: 'Fees & receipts', text: 'What’s due, what’s paid, and every receipt — shareable as a PDF.', at: [16.5, 23.5] },
      { id: 'p-diary', title: 'School diary', text: 'Every notice in one place: pinned items, categories, search and photos.', at: [23.5, 33.5] },
      { id: 'p-chat', title: 'Messages', text: 'A direct line to the class teacher — with quiet hours at night.', at: [33.5, 45.5] },
      { id: 'p-results', title: 'Results', text: 'Marks and grades for each published exam, and the year’s percentage.', at: [45.5, 53.5] },
      { id: 'p-calendar', title: 'Calendar', text: 'Holidays, events and PTMs for their child’s class.', at: [53.5, 60.5] },
      { id: 'p-timetable', title: 'Timetable', text: 'Their child’s week, period by period, with the teacher for each subject.', at: [60.5, 68.5] },
      { id: 'p-leave', title: 'Leave', text: 'Apply for leave in seconds and see when the teacher approves it.', at: [68.5, 75.5] },
      { id: 'p-privacy', title: 'Privacy', text: 'Parents give consent in the app and can ask to withdraw it.', at: [75.5, 89] },
    ],
  },
  {
    id: 'teacher',
    label: 'Teacher app',
    video: asset('video/teacher.mp4'),
    poster: asset('video/teacher.webp'),
    alt: 'A walk through the Schoolteck teacher app',
    items: [
      { id: 't-signin', title: 'Sign in', text: 'Find the school, then a one-time code to their mobile — no password to forget.', at: [0, 11] },
      { id: 't-home', title: 'My classes', text: 'Today’s classes, what’s not marked yet, messages and leave requests waiting.', at: [11, 19] },
      { id: 't-attendance', title: 'Attendance', text: 'Everyone starts present — tap only the absentees and save. Parents see it straight away.', at: [19, 36] },
      { id: 't-chat', title: 'Messages', text: 'Only with parents of children in their own classes, with quiet hours at night.', at: [36, 46] },
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
