import { SchoolModule, BeforeAfterItem, PricingPlan, Testimonial, SimulationEvent } from '../types';

export const CORE_PILLARS = [
  {
    id: 'attendance',
    title: 'Smart 1-Tap Attendance & Instant Alerts',
    icon: 'Radio',
    summary: 'Zero paper registers. Class teachers mark attendance in 1 tap from their mobile app, instantly triggering WhatsApp and SMS notifications to parents.',
    metric: '100% Paper Register Elimination',
    highlight: 'Saves 25 mins per teacher daily'
  },
  {
    id: 'fees',
    title: 'Self-Reconciling Smart Fee Engine',
    icon: 'ReceiptCheck',
    summary: 'Virtual student accounts with direct bank API sync. Every fee paid via UPI, card, or netbanking auto-clears dues with zero cashier queues or tally slips.',
    metric: '99.8% On-Time Collection',
    highlight: 'Zero manual ledger reconciliation'
  },
  {
    id: 'timetable',
    title: 'Auto-Substitution & Timetable AI',
    icon: 'CalendarClock',
    summary: 'When a teacher logs leave on their mobile app, the system instantly calculates workload balance, resolves subject conflicts, and sends push invites in 3 seconds.',
    metric: 'Instant Leave Resolution',
    highlight: 'Zero morning timetable chaos'
  },
  {
    id: 'grades',
    title: 'Optical Marksheets & 1-Click Cards',
    icon: 'FileSpreadsheet',
    summary: 'Teachers snap answer sheets or enter raw points via speech-to-text. The system computes grading scales, ranks, CBSE/ICSE percentiles, and generates signed PDFs.',
    metric: '1-Click Report Card Generation',
    highlight: 'Zero manual calculation errors'
  },
  {
    id: 'fleet',
    title: 'Live Telematics & Geofenced Fleet',
    icon: 'Navigation',
    summary: 'Bus IoT GPS units communicate with parent mobile apps. Proximity geofencing sends arrival pings 500m before the stop so parents never wait in the cold.',
    metric: 'Real-time Student Safety',
    highlight: 'Zero parent transport calls to reception'
  },
  {
    id: 'admissions',
    title: 'Paperless OCR Student Onboarding',
    icon: 'Sparkles',
    summary: 'Parents upload documents from their phones. Machine vision auto-populates student demographic data, generates enrollment numbers, and provisions app logins.',
    metric: '3-Minute Admission Pass',
    highlight: 'Zero physical paperwork archiving'
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    workflow: 'Morning Student Attendance',
    traditionalWay: 'Teachers spend 15–20 minutes calling 45 names, writing registers, and sending paper slips to the front desk for compilation.',
    traditionalCostTime: '35 hours per day across 50 classrooms',
    schoolTekWay: 'Teachers mark attendance in 1 tap on the mobile app or via smart biometric sync. Automated WhatsApp & Push alert delivered to parent phone instantly.',
    automationGain: '100% Automated · 0 teacher minutes lost'
  },
  {
    workflow: 'Quarterly Fee Collection & Reconciliation',
    traditionalWay: 'Parents stand in queues with paper drafts or cash; accounts department manually verifies bank statements, creates paper receipts, and reconciles Tally.',
    traditionalCostTime: '120 administrative staff hours / quarter',
    schoolTekWay: 'Parents pay with 1-tap in the student app via UPI. Bank webhooks auto-reconcile the general ledger, update student status, and issue tax-compliant digital invoices.',
    automationGain: 'Instant 0-clerk reconciliation'
  },
  {
    workflow: 'Teacher Leave & Emergency Substitution',
    traditionalWay: 'Academic coordinator scrambles with a printed master chart at 7:30 AM, calling teachers on landlines to find free periods.',
    traditionalCostTime: '45 frantic minutes every morning',
    schoolTekWay: 'Teacher taps "Apply Sick Leave" in the app. The system auto-assigns appropriate subject teachers based on syllabus progress and updates their timetable.',
    automationGain: '3-second conflict-free auto-fill'
  },
  {
    workflow: 'Exam Grading & Report Card Generation',
    traditionalWay: 'Teachers transcribe paper marks to Excel sheets, calculate weightages manually, print 1,500 card templates, and hand-sign each one.',
    traditionalCostTime: '2 weeks of teacher overtime per exam term',
    schoolTekWay: 'Scores auto-calculate weighted GPA, grade boundaries, rank percentiles, and generate board-compliant PDF cards with principal digital watermark in 1 click.',
    automationGain: '10 seconds to batch generate 2,000 cards'
  },
  {
    workflow: 'School Bus & Transport Coordination',
    traditionalWay: 'Panicked parents call the school front desk when buses are delayed in traffic; receptionists scramble to call driver phone numbers.',
    traditionalCostTime: 'Over 80 telephone calls every evening',
    schoolTekWay: 'Live GPS telemetry streams directly to the parent mobile app with speed telemetry, delay estimation, and geo-fence alerts when bus is 2 stops away.',
    automationGain: '0 phone calls to front desk'
  }
];

export const SCHOOL_MODULES: SchoolModule[] = [
  {
    id: 'admissions',
    title: 'Admissions & Digital Onboarding',
    category: 'Administration',
    icon: 'UserPlus',
    tagline: 'Self-service inquiry to enrolled student in 3 minutes',
    description: 'Online inquiry portal, automated document OCR scanning, digital fee advance, auto-generation of admission roll numbers, and immediate app credential delivery.',
    zeroManualFeature: 'Document AI extracts birth date, blood group, and address from uploaded government IDs without staff data entry.',
    adminBenefit: 'Zero queue in admissions office, paperless documentation archive.',
    studentBenefit: 'Instant digital student ID and orientation schedule on their phone.',
    metrics: '70% faster admission cycle'
  },
  {
    id: 'attendance',
    title: 'Automated Attendance & Class Roster',
    category: 'Logistics',
    icon: 'ScanFace',
    tagline: '1-Tap Class Attendance & Instant Parent WhatsApp Alerts',
    description: 'Teachers take class attendance in seconds from mobile or sync with biometric hardware. Real-time absentee list broadcasted to administrators before morning assembly.',
    zeroManualFeature: 'Instant SMS & WhatsApp delivery to absent student guardians with zero human intervention.',
    adminBenefit: 'Instant dashboard of campus presence, bunking alerts, and fire-drill headcount.',
    studentBenefit: 'Fast, accurate attendance records viewable inside student portal.',
    metrics: '99.9% attendance logging speed'
  },
  {
    id: 'fees',
    title: 'Smart Billing & Automated Fee Ledger',
    category: 'Finance',
    icon: 'CreditCard',
    tagline: 'Direct Virtual Account Sync with Zero Cashier Queues',
    description: 'Multi-head fee setup (Tuition, Lab, Transport, Uniforms, Hostel). Automated payment reminders, installment plans, online payment gateway, and dynamic receipts.',
    zeroManualFeature: 'Bank API webhooks instantly post credits to the specific student ledger with automatic fine calculation.',
    adminBenefit: 'Real-time cashflow dashboard, audit-ready reports, zero manual bank reconciliation.',
    studentBenefit: 'Pay fees in 30 seconds via UPI/Card, view fee history and download tax receipts anytime.',
    metrics: '38% reduction in fee collection delays'
  },
  {
    id: 'academics',
    title: 'Curriculum & Smart Timetable Planner',
    category: 'Academics',
    icon: 'Calendar',
    tagline: 'Conflict-free algorithmic scheduling and dynamic syllabus tracking',
    description: 'Constraint-based schedule engine that balances teacher hours, classroom capacities, lab requirements, and substitute teacher rotations.',
    zeroManualFeature: 'Single-click auto-generation of 50+ class schedules without subject or room clashes.',
    adminBenefit: 'Eliminates human errors in room booking and teacher over-allocation.',
    studentBenefit: 'Always up-to-date schedule in mobile app with room numbers and teacher names.',
    metrics: '100% clash-free schedules'
  },
  {
    id: 'exams',
    title: 'Exam Management & Autonomous Gradebook',
    category: 'Academics',
    icon: 'Award',
    tagline: 'Continuous assessment, auto-weighting, and 1-click report cards',
    description: 'Full examination lifecycle: Hall ticket generation, seating arrangement, rubric-based score entry, automated grade calculation, and CBSE/ICSE/IB report cards.',
    zeroManualFeature: 'Auto-calculates scholastic & co-scholastic grades, percentiles, remarks, and generates signed batch PDFs.',
    adminBenefit: 'Instant board compliance, tamper-proof digital grade archives.',
    studentBenefit: 'Instant exam results notification, visual subject trend charts, and downloadable report cards.',
    metrics: '40+ hours saved per exam cycle'
  },
  {
    id: 'transport',
    title: 'IoT Fleet & Live Bus Telematics',
    category: 'Logistics',
    icon: 'Bus',
    tagline: 'Real-time GPS tracking, speed monitoring, and student tap-in tracking',
    description: 'Hardware GPS trackers on all vehicles with driver app and parent live tracking. Speed alerts, SOS buttons, route optimization, and maintenance logs.',
    zeroManualFeature: 'Automated geofence notifications trigger to parent phone when the bus enters a 1-kilometer perimeter.',
    adminBenefit: 'Live vehicle map with driver behavior monitoring, fuel logs, and delay analysis.',
    studentBenefit: 'Never miss the bus or wait in extreme weather; parents see exact live ETA on the map.',
    metrics: '0 incoming inquiries about bus delays'
  },
  {
    id: 'library',
    title: 'Smart Digital Library & Asset Catalog',
    category: 'Administration',
    icon: 'BookOpen',
    tagline: 'Automated book issue/return with barcode & QR checkout',
    description: 'Kiosk-based self checkout, e-book reader integration, automated fine calculation for overdue titles, and instant catalog search.',
    zeroManualFeature: 'Fast QR/Barcode mobile scanning issues books in seconds without manual ledger entry.',
    adminBenefit: 'Zero lost books, catalog sync across branch libraries.',
    studentBenefit: 'Search library catalog from phone, reserve books, and read recommended digital papers.',
    metrics: '95% faster book issue & returns'
  },
  {
    id: 'communication',
    title: 'OmniChannel Parent-School Bridge',
    category: 'Communication',
    icon: 'MessageSquare',
    tagline: 'App notifications, WhatsApp bot, circular broadcasts, and 2-way messaging',
    description: 'Targeted announcements by grade, section, or bus route. Digital permission slips with parent e-signature and AI-assisted multilingual translation.',
    zeroManualFeature: 'Emergency broadcast automatically sends high-priority push, WhatsApp, and SMS simultaneously.',
    adminBenefit: '100% audit trail of parent acknowledgments, zero printed notice slips.',
    studentBenefit: 'Clear homework guidelines, project submissions, and event calendar in one place.',
    metrics: '98% parent read-rate within 15 mins'
  }
];

export const INITIAL_SIMULATION_EVENTS: SimulationEvent[] = [
  {
    id: 'evt-1',
    time: '07:45 AM',
    type: 'attendance',
    title: 'Grade 10 1-Tap Attendance Marked',
    detail: '1,420 / 1,480 students marked present via teacher mobile roster. Real-time parent WhatsApp arrival confirmations dispatched.',
    badge: 'Zero Roll Call',
    status: 'automated'
  },
  {
    id: 'evt-2',
    time: '08:10 AM',
    type: 'substitution',
    title: 'Algorithmic Substitution Deployed',
    detail: 'Teacher Dr. K. Rao submitted medical leave for Period 3 & 5. Engine automatically reassigned Ms. Sunita (Free Period, Senior Physics certified).',
    badge: '3-Sec Auto-Resolve',
    status: 'automated'
  },
  {
    id: 'evt-3',
    time: '08:42 AM',
    type: 'fee',
    title: 'Direct Bank Webhook Auto-Reconciliation',
    detail: 'Term 2 Fee (₹24,500) paid via UPI by guardian of Aarav Sharma (Grade 9-B). Ledger cleared, fee receipt #OR-8921 auto-emailed.',
    badge: '0 Cashier Queue',
    status: 'automated'
  },
  {
    id: 'evt-4',
    time: '09:15 AM',
    type: 'transport',
    title: 'Bus Route 12 Entered Geofence Perimeter',
    detail: 'Fleet sensor detected stop #4 approach. 14 parents notified with live map tracking link. Speed: 32 km/h (within 40 km/h limit).',
    badge: 'Automated GPS',
    status: 'automated'
  },
  {
    id: 'evt-5',
    time: '10:00 AM',
    type: 'grade',
    title: 'Midterm Science Assessment Sync',
    detail: 'Batch scan of 85 OMR sheets finished. Class average: 84.6%. Highest: 99%. Digital marksheets dispatched to parent app wallets.',
    badge: '1-Click Report',
    status: 'automated'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Foundation Campus',
    targetSchool: 'Best for single-campus schools looking to eliminate manual attendance and paper fees.',
    pricePerStudentMonthly: 45,
    pricePerStudentAnnual: 35,
    features: [
      'Up to 1,500 students included',
      'Web-based Admin Command Center',
      'Student & Parent iOS & Android Apps',
      'Teacher 1-Tap Mobile Attendance & Biometric sync',
      'Online Fee Gateway with Auto-Reconciliation (UPI / RuPay)',
      'Automated WhatsApp & SMS Notifications',
      'Standard CBSE / ICSE / State Gradebook',
      'Cloud Backups with 99.9% SLA'
    ],
    schoolTekCapabilities: [
      'Eliminates morning paper registers',
      'Eliminates physical fee counter queues',
      'Parent mobile self-service'
    ],
    ctaText: 'Deploy Foundation'
  },
  {
    id: 'growth',
    name: 'Autonomous Pro',
    targetSchool: 'The complete hands-free operations suite for modern K-12 institutions.',
    pricePerStudentMonthly: 85,
    pricePerStudentAnnual: 69,
    highlighted: true,
    features: [
      'Everything in Foundation, plus:',
      'Unlimited student & staff capacity',
      'Algorithmic Timetable & Auto-Substitution engine',
      'IoT Bus Fleet Telematics with live parent map',
      'Paperless Admission OCR Document Ingestion',
      '1-Click CBSE/ICSE-Compliant Dynamic Report Cards',
      'Smart Digital Library & Asset Inventory',
      'Custom School Branded App on App Store & Play Store',
      'Dedicated Customer Success Manager & 24/7 SLA'
    ],
    schoolTekCapabilities: [
      'Zero manual data entries across all departments',
      'Instant teacher substitution in 3 seconds',
      'Automated parent geofence bus tracking',
      'Custom school icon & branding'
    ],
    ctaText: 'Launch Autonomous Pro'
  },
  {
    id: 'enterprise',
    name: 'Multi-Campus Enterprise',
    targetSchool: 'For educational trusts, franchise schools, and multi-branch academy networks.',
    pricePerStudentMonthly: 145,
    pricePerStudentAnnual: 119,
    features: [
      'Everything in Autonomous Pro, plus:',
      'Centralized Multi-School HQ Governance portal',
      'Consolidated Financial, Payroll & Fee Auditing',
      'Custom ERP API & SIS Data Sync with existing systems',
      'Dedicated On-Premise or Private Cloud hosting option',
      'Turnkey hardware setup (Biometric scanners & GPS units)',
      'Custom localized grading curriculums (CBSE, ICSE, IB, Cambridge)',
      'Executive Principal Analytics & Predictive Attrition AI',
      'VIP 1-hour guaranteed onsite engineering support'
    ],
    schoolTekCapabilities: [
      'Cross-campus staff & asset mobility',
      'Single pane of glass for Trust Board of Trustees',
      'Hardware + Software fully turnkey'
    ],
    ctaText: 'Request Trust Proposal'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Before SchoolTek, our 60 teachers lost 25 minutes every morning on roll call and our accounts office was overwhelmed with fee queues. Today, our teachers mark attendance in 30 seconds on their phones, parents get instant WhatsApp alerts, and fee reconciliation happens on auto-pilot via UPI.',
    author: 'Dr. Evelyn Sharma',
    role: 'Principal & Academic Director',
    school: 'Oakridge International Academy',
    location: 'Bengaluru, Karnataka',
    studentCount: 2400,
    keyMetric: 'Saved 420 staff hours / month',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    quote: 'The student mobile app has been a massive hit with our parents. They love watching the school bus approach in real-time, paying quarterly fees with 1 click on UPI, and receiving homework without digging through school bags. No manual entries means our data is finally 100% accurate.',
    author: 'Rajesh Subramanian',
    role: 'Managing Trustee',
    school: 'Cambridge Global Schools Trust (4 Campuses)',
    location: 'Bengaluru, India',
    studentCount: 5800,
    keyMetric: '99.4% fee collection on time',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    quote: 'The automated teacher substitution engine alone paid for the system. In the past, morning sick leaves created absolute pandemonium. Now, the algorithm instantly assigns qualified substitute teachers and notifies their phones before morning assembly finishes.',
    author: 'Father Anthony D\'Souza',
    role: 'Dean & Administrator',
    school: 'St. Vincent High School & Junior College',
    location: 'Pune, Maharashtra',
    studentCount: 1650,
    keyMetric: 'Zero morning timetable chaos',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What does "Zero Manual Entries" truly mean in practice?',
    answer: 'Traditional school ERPs are glorified digital notebooks where clerks, teachers, and accountants have to type in everything manually. SchoolTek automates repetitive workflows: teachers mark attendance in 1 tap with instant parent WhatsApp broadcasts, bank webhooks clear fees automatically, leave requests auto-resolve teacher substitutions, and OCR extracts paperwork into student profiles. Your team supervises exceptions instead of doing repetitive data entry.'
  },
  {
    question: 'How do the Student & Parent mobile apps work?',
    answer: 'Students and parents download the native SchoolTek app (or your own custom-branded school app) from the iOS App Store or Google Play Store. Logins are auto-provisioned upon enrollment with zero setup friction. They get real-time push notifications for attendance, fee due reminders with 1-click UPI payment, GPS bus tracking, interactive homework, and direct encrypted teacher messaging.'
  },
  {
    question: 'Can SchoolTek integrate with our existing biometric scanners or bus GPS trackers?',
    answer: 'Yes! SchoolTek is hardware-agnostic. We provide plug-and-play APIs and IoT controllers that work seamlessly with existing biometric scanners (ZKTeco, Suprema, Essl, Mantra), and automotive GPS trackers (Teltonika, Convex, Concox). If you need turnkey hardware, our team provides pre-configured plug-and-play biometric & GPS units.'
  },
  {
    question: 'How long does it take to migrate our existing school data?',
    answer: 'Most schools transition in less than 48 hours. Our automated Excel & SQL data ingest engine maps your existing student, parent, and fee ledger records into SchoolTek with automated data validation and deduplication. We also provide zero-downtime weekend rollouts.'
  },
  {
    question: 'Is student data secure and compliant with education privacy laws?',
    answer: 'Absolutely. SchoolTek enforces end-to-end 256-bit AES encryption at rest and TLS 1.3 in transit. We are strictly compliant with education board standards, with role-based permissions ensuring teachers, parents, and admins only access authorized student records.'
  }
];
