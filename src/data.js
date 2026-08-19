export const profile = {
  name: 'Okolo Uchenna Maxwell',
  roles: ['Software Developer', 'EdTech Builder', 'Computer Science Educator'],
  company: 'EduMax Solutions',
  companyUrl: 'https://www.edumaxsolutions.com.ng/',
  title: 'Founder & CEO @ EduMax Solutions',
  tenure: '6+ Years in Education & Technology',
  location: 'Magboro, Ogun State, Nigeria',
  email: 'info@edumaxsolutions.com.ng',
  phone: '+234 805 940 3939',
  phoneAlt: '+234 806 781 9642',
  whatsapp: 'https://api.whatsapp.com/send?phone=2348059403939&text=Hello%20Okolo%2C%20I%20saw%20your%20portfolio.',
  github: 'https://github.com/eduvibe',
  linkedin: 'https://www.linkedin.com/in/okolo-uchenna-6700451a7/',
  website: 'https://www.edumaxsolutions.com.ng/',
  address: 'No 1 Liberty Estate, Greenroof Bus/Stop, Magboro, Ogun State, Nigeria',
}

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export const capabilities = [
  {
    num: '01',
    title: 'CBT & Examination Systems',
    copy: 'Secure, offline-capable computer-based testing with anti-cheating, auto-scoring, and analytics that hold up in a noisy computer lab.',
  },
  {
    num: '02',
    title: 'School Management Systems',
    copy: 'All-in-one portals for enrollment, SIS, attendance, gradebooks, billing, and parent communication — the work a school office actually does.',
  },
  {
    num: '03',
    title: 'LMS & E-Learning',
    copy: 'Learning platforms with interactive content, assignments, progress tracking, and collaboration designed for teachers who are not tech-first.',
  },
  {
    num: '04',
    title: 'Offline-First Applications',
    copy: 'Software that keeps running when the internet does not. Built for low-connectivity Nigerian school environments from day one.',
  },
  {
    num: '05',
    title: 'Business & Finance Apps',
    copy: 'Loan management, operations, and custom portals for SMEs and financial services — the same practical mindset, applied beyond the classroom.',
  },
  {
    num: '06',
    title: 'School Websites & Branding',
    copy: 'Modern, responsive, SEO-aware school sites that earn parent trust and convert enquiries into admissions.',
  },
]

export const projects = [
  {
    id: 'edumax',
    index: '01',
    name: 'EduMax Solutions',
    kicker: 'Flagship EdTech platform',
    tagline: 'Best CBT & school management software in Nigeria.',
    description:
      'A comprehensive, affordable EdTech suite trusted by primary and secondary schools. Built to work in low-connectivity environments — offline CBT & LMS, a full school portal, realtime student management, ExamVault, and modern school websites.',
    points: [
      'Robust offline CBT with secure question banks and anti-malpractice',
      'Realtime analytics for educators and parents',
      'Cashless voucher system and attendance notifications',
      'Exam integrity designed in, not bolted on',
    ],
    stack: ['Next.js', 'React', 'Supabase', 'MySQL', 'Offline-First', 'LMS', 'CBT'],
    href: 'https://www.edumaxsolutions.com.ng/',
    cta: 'Visit platform',
    image: '/images/project-edumax.jpg',
    imageAlt: '/images/project-cbt.jpg',
    accent: '#7ec8ff',
  },
  {
    id: 'primeportal',
    index: '02',
    name: 'PrimePortal',
    kicker: 'School management portal',
    tagline: 'Results, attendance, fees, and parents — one login.',
    description:
      'An all-in-one management portal for students, staff, and parents. Powered by EduMax Solutions. Handles SIS, automated result processing, billing, and a dedicated parent experience.',
    points: [
      'Student information system and admissions',
      'Automated result processing and gradebooks',
      'Fee and billing management',
      'Secure authentication for every role',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'React', 'School Portal'],
    href: 'http://primeportal.com.ng/',
    cta: 'Open portal',
    image: '/images/project-portal.jpg',
    accent: '#ff8a3d',
  },
  {
    id: 'mekaro',
    index: '03',
    name: 'Mekaro Innovative',
    kicker: 'FinTech & business platform',
    tagline: 'Personal, business, and educational loans in Delta State.',
    description:
      'A customer-focused financial services website with a streamlined loan application, transparent review process, and location-specific solutions for Ozoro and Delta State.',
    points: [
      'Business, personal, and educational loan products',
      'Online application with document upload',
      'Clear review and disbursement flow',
      'Local SEO for Ozoro and Delta State',
    ],
    stack: ['Next.js', 'React', 'Tailwind', 'Business', 'Finance'],
    href: 'https://www.mekaroinnovative.com/',
    cta: 'Visit website',
    image: '/images/project-mekaro.jpg',
    accent: '#3dd68c',
  },
  {
    id: 'distinct',
    index: '04',
    name: 'Distinct Star Schools',
    kicker: 'School website & brand',
    tagline: 'International schools in Lagos. Built for parent trust.',
    description:
      'A modern, responsive school website showcasing academic excellence, admissions, and culture — designed for conversion, not just decoration.',
    points: [
      'Admissions-focused information architecture',
      'Mobile-first storytelling for parents',
      'SEO for Magodo and Lagos school search',
      'Brand presence that matches the campus',
    ],
    stack: ['Web Design', 'Education', 'SEO', 'Responsive'],
    href: 'https://distinctstarschools.com/',
    cta: 'Visit school site',
    image: '/images/project-school.jpg',
    accent: '#e0b15b',
  },
]

export const stack = {
  Frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  'Backend & APIs': ['Laravel', 'PHP', 'Python', 'Node.js', 'Supabase', 'REST APIs'],
  'Data & Tools': ['MySQL', 'PostgreSQL', 'SQLite', 'Git', 'GitHub', 'VS Code'],
}

export const principles = [
  {
    title: 'Educator first',
    copy: 'Six years in actual classrooms and school admin. I understand the real problems, not just the tickets.',
  },
  {
    title: 'Offline-first mindset',
    copy: 'Built for Nigeria’s reality: unreliable power, poor internet, shared devices, and teachers who need software that just works.',
  },
  {
    title: 'Integrity & security',
    copy: 'CBT and exams ship with anti-malpractice, secure banks, and audit trails from day one — not as a later patch.',
  },
  {
    title: 'Results, not vanity',
    copy: 'Every feature must save time, reduce stress, or improve learning outcomes. If it is just impressive, it does not ship.',
  },
]

export const building = [
  'Offline-first CBT with advanced anti-cheat',
  'ExamVault — secure exam integrity system',
  'RSM — realtime student management + cashless vouchers',
  'Next-gen school portal with a parent mobile experience',
]

export const focus = [
  'Offline-first architectures for low-connectivity schools',
  'Scalable Laravel + MySQL systems for 10k+ students',
  'React / Next.js performance on rural internet',
  'Supabase for realtime school data sync',
]
