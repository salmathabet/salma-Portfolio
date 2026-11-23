import { useState } from 'react';
import { 
  Home, 
  User, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  MapPin, 
  Phone, 
  Code2, 
  Terminal, 
  Layout, 
  Layers, 
  GraduationCap, 
  ArrowUpRight,
  Database
} from 'lucide-react';

// eslint-disable-next-line react/prop-types
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const BAITY_LIVE_URL = 'https://baity-store.vercel.app/';

const HeroVisual = () => (
  <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
    <div className="absolute w-64 h-64 bg-orange-200/60 rounded-full blur-3xl -z-10"></div>

    {/* Browser window */}
    <div className="w-[85%] bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden animate-float">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-50 border-b border-zinc-100">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
        <span className="ml-2 flex-1 text-[10px] font-mono text-zinc-400 bg-white border border-zinc-100 rounded-md px-2 py-0.5 truncate">
          baity-store.vercel.app
        </span>
      </div>
      <div className="p-3 space-y-2.5" dir="rtl">
        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-[#6B2D5C]">بيتي</span>
          <div className="flex gap-1">
            <span className="w-8 h-1.5 rounded-full bg-zinc-200"></span>
            <span className="w-6 h-1.5 rounded-full bg-zinc-200"></span>
            <span className="w-7 h-1.5 rounded-full bg-zinc-200"></span>
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-l from-[#6B2D5C] to-[#9B4D86] p-3 text-white">
          <p className="text-[11px] font-bold">كل اللي بيتك محتاجه</p>
          <span className="inline-block mt-1.5 text-[9px] bg-[#F5EDE3] text-[#6B2D5C] px-2 py-0.5 rounded-full font-bold">تسوقي دلوقتي</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['bg-[#F5EDE3]', 'bg-orange-50', 'bg-zinc-100'].map((c, i) => (
            <div key={i} className="space-y-1">
              <div className={`aspect-square rounded-lg ${c}`}></div>
              <div className="h-1.5 w-3/4 rounded-full bg-zinc-200"></div>
              <div className="h-1.5 w-1/2 rounded-full bg-[#6B2D5C]/40"></div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Floating code card */}
    <div className="absolute -bottom-2 -left-4 sm:-left-8 bg-zinc-900 text-[10px] font-mono rounded-xl px-3 py-2.5 shadow-xl leading-relaxed animate-float-delayed">
    <p><span className="text-pink-400">const</span> <span className="text-sky-300">dev</span> <span className="text-zinc-400">=</span> &#123;</p>
    <p className="pl-3"><span className="text-zinc-300">name:</span> <span className="text-orange-300">&apos;Salma&apos;</span>,</p>
    <p className="pl-3"><span className="text-zinc-300">loves:</span> <span className="text-orange-300">&apos;clean UI&apos;</span></p>
    <p>&#125;;</p>
  </div>

    {/* Tech badges */}
    <span className="absolute top-4 -right-2 bg-white border border-zinc-200 shadow-md rounded-full px-3 py-1 text-[11px] font-bold text-sky-600 animate-float-delayed">React</span>
    <span className="absolute top-1/2 -right-6 bg-white border border-zinc-200 shadow-md rounded-full px-3 py-1 text-[11px] font-bold text-teal-600 animate-float">Tailwind</span>
    <span className="absolute top-2 left-0 bg-white border border-zinc-200 shadow-md rounded-full px-3 py-1 text-[11px] font-bold text-emerald-600 animate-float">Supabase</span>
  </div>
);

const projects = [
  {
    title: 'Baity – Arabic E-commerce Store',
    category: 'React • Tailwind • Supabase',
    featured: true,
    liveUrl: BAITY_LIVE_URL,
    points: [
      'Full Arabic (RTL) online store for clothes and home goods with men, women, kids and home categories.',
      'Real backend on Supabase: user sign-up / login, products and orders stored in a live database.',
      'Admin dashboard for adding and managing products, separate from the customer storefront.',
      'Responsive plum & cream UI built with reusable React components and Tailwind CSS.',
      'Deployed on Vercel with environment-based configuration.',
    ],
    tags: ['React', 'Tailwind CSS', 'Supabase', 'Auth', 'Admin Dashboard', 'RTL', 'Vercel'],
  },
  {
    title: 'BOD – Meeting Management System',
    category: 'SharePoint On-Premises & JavaScript',
    points: [
      'Developed front-end interfaces for meeting creation, calendar views, and agenda management, integrating with APIs.',
      'Built and styled the approval workflow UI for meeting agendas across all stage transitions.',
      'Implemented report generation triggers for direct PDF downloads from the SharePoint interface.',
      'Utilized SharePoint list forms and CAML queries for optimized data rendering and faster page loads.',
      'Diagnosed FBA/NTLM URL context mismatches, resolving cross-authentication integration issues.',
    ],
    tags: ['SharePoint', 'JavaScript', 'jQuery', 'Approval Workflows', 'PDF Export'],
  },
  {
    title: 'Insider – HR Management System',
    category: 'SharePoint & JavaScript',
    points: [
      'Developed front-end forms and list views for employee attendance, leave, and travel requests within a SharePoint portal.',
      'Built employee balance dashboards and self-service portals for IT and office item requests.',
      'Designed finance request interfaces for loans and salary advances with real-time approval status tracking.',
      'Ensured responsive and consistent UI/UX across all request modules for various client departments.',
    ],
    tags: ['SharePoint', 'JavaScript', 'HR Portal', 'UI/UX', 'Dashboard', 'Workflows'],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 size={16} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> },
  ];

  return (
    <div className="min-h-screen md:h-screen w-full bg-[#FAFAFA] text-zinc-900 font-sans flex flex-col items-center justify-between p-4 sm:p-6 md:overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Top Floating Navbar */}
      <header className="w-full flex justify-center z-50">
        <nav className="bg-white/80 backdrop-blur-md border border-zinc-200/80 p-1.5 rounded-full shadow-sm flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-zinc-900 text-white shadow-md' 
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Dynamic Screen Container with Smooth Slide & Fade Transition */}
      <main 
        key={activeTab} 
        className="w-full max-w-5xl flex-1 flex items-center justify-center my-auto px-2 animate-slide-right"
      >
        
        {/* Tab 1: Home */}
        {activeTab === 'home' && (
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-5 text-left">
              
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 leading-[1.1]">
                Hi, I'm <span className="text-orange-600">Salma</span> Thabet
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-700">
                Frontend Developer
              </h2>

              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-lg">
                I create clean, responsive, and user-centered digital interfaces. Specializing in modern JavaScript, React.js, and clean UI components.
              </p>

              <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 py-1">
                <span className="flex items-center gap-1"><MapPin size={14} /> Cairo, Egypt</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-orange-600 transition-all shadow-sm flex items-center gap-2"
                >
                  Contact Me <ArrowUpRight size={14} />
                </button>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className="px-5 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-800 text-xs font-semibold hover:bg-zinc-50 transition-all shadow-sm"
                >
                  View Work
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/60 text-zinc-500">
                <span className="text-xs font-medium">Follow me:</span>
                <a href="https://github.com/SalmaThabet" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">
                  <GithubIcon size={18} />
                </a>
                <a href="https://www.linkedin.com/in/salma-thabet-b70553157/" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
            
<div className="md:col-span-5 flex justify-center items-center py-6 md:py-0">
              <HeroVisual />
            </div>
          </div>
        )}

        {/* Tab 2: About */}
        {activeTab === 'about' && (
          <div className="w-full max-w-3xl bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">About Me</h2>
              <p className="text-xs font-mono text-orange-600 mt-1">Frontend Developer & React Specialist</p>
            </div>
            
            <p className="text-zinc-600 text-sm leading-relaxed">
              Junior Frontend Developer passionate about building user-friendly interfaces. Proficient in React, Tailwind CSS, HTML, and CSS, with a strong focus on writing clean and maintainable code. Recently built and shipped a full e-commerce store with a real Supabase backend, and comfortable using Git for version control and Vercel for deployment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-100">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <h4 className="font-bold text-xs text-zinc-900 uppercase tracking-wider mb-1">Education</h4>
                <p className="text-sm font-semibold text-zinc-800">Bachelor of Commerce</p>
                <p className="text-xs text-zinc-500">Helwan University (2014 - 2018)</p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <h4 className="font-bold text-xs text-zinc-900 uppercase tracking-wider mb-1">Focus Areas</h4>
                <p className="text-sm font-semibold text-zinc-800">React.js & State Management</p>
                <p className="text-xs text-zinc-500">Responsive Web Applications</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Projects */}
        {activeTab === 'projects' && (
          <div className="w-full max-w-4xl space-y-4 overflow-y-auto max-h-[75vh] pr-2">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Key Projects</h2>

            <div className="grid grid-cols-1 gap-4">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className={`bg-white rounded-3xl border p-6 shadow-sm transition-all space-y-3 ${
                    p.featured ? 'border-orange-300 ring-4 ring-orange-50' : 'border-zinc-200/80 hover:border-orange-200'
                  }`}
                >
                  <div className="flex flex-wrap justify-between items-start gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full font-bold">
                          {p.category}
                        </span>
                        {p.featured && (
                          <span className="text-[10px] bg-zinc-900 text-white px-2.5 py-0.5 rounded-full font-bold">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mt-1">{p.title}</h3>
                    </div>

                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-orange-600 transition-all shadow-sm flex items-center gap-1.5"
                      >
                        Try it live <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>

                  <ul className="text-zinc-600 text-xs space-y-1.5 list-disc list-inside leading-relaxed">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((tech) => (
                      <span key={tech} className="text-[10px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Experience & Skills */}
        {activeTab === 'experience' && (
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-zinc-200/80 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                <Briefcase size={18} className="text-orange-600" /> Work Experience
              </h3>
              
              <div className="space-y-4 text-xs text-zinc-600">
                <div className="border-l-2 border-orange-500 pl-3 space-y-1">
                  <div className="flex justify-between font-bold text-zinc-900">
                    <span>Frontend Developer (Part Time)</span>
                    <span className="text-orange-600 font-mono">2025 - 2026</span>
                  </div>
                  <p className="text-zinc-500 font-medium">Uranium</p>
                  <p className="leading-relaxed">Rejoined the team to manage technical enhancements for SharePoint platforms.</p>
                </div>

                <div className="border-l-2 border-zinc-200 pl-3 space-y-1">
                  <div className="flex justify-between font-bold text-zinc-900">
                    <span>Frontend Developer</span>
                    <span className="text-zinc-400 font-mono">2019 - 2022</span>
                  </div>
                  <p className="text-zinc-500 font-medium">Uranium • Cairo</p>
                  <p className="leading-relaxed">Customized site pages and lists to improve internal workflows.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200/80 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                <Code2 size={18} className="text-orange-600" /> Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'React.js', icon: <Code2 size={16} /> },
                  { name: 'JavaScript', icon: <Terminal size={16} /> },
                  { name: 'HTML5 & CSS3', icon: <Layout size={16} /> },
                  { name: 'Tailwind CSS', icon: <Layers size={16} /> },
                  { name: 'Supabase', icon: <Database size={16} /> },
                  { name: 'Git & GitHub', icon: <GithubIcon size={16} /> },
                  { name: 'Vite / Vercel', icon: <FolderGit2 size={16} /> },
                  { name: 'SharePoint', icon: <Briefcase size={16} /> },
                  { name: 'Microsoft 365', icon: <GraduationCap size={16} /> }
                ].map((sk, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-xs font-semibold text-zinc-800">
                    <span className="text-orange-600">{sk.icon}</span>
                    <span>{sk.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Contact */}
        {activeTab === 'contact' && (
          <div className="w-full max-w-lg bg-white border border-zinc-200/80 rounded-3xl p-8 shadow-sm text-center space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Get In Touch</h2>
              <p className="text-xs text-zinc-500 mt-1">Open for new frontend opportunities</p>
            </div>

            <div className="space-y-3 text-sm">
              <a 
                href="mailto:salmathabet9@gmail.com" 
                className="flex items-center justify-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-orange-500 hover:bg-orange-50/50 transition-all text-zinc-800 font-semibold"
              >
                <Mail size={18} className="text-orange-600" />
                salmathabet9@gmail.com
              </a>
              <a 
                href="tel:01551484176" 
                className="flex items-center justify-center gap-3 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-orange-500 hover:bg-orange-50/50 transition-all text-zinc-800 font-semibold"
              >
                <Phone size={18} className="text-orange-600" />
                01551484176
              </a>
            </div>
          </div>
        )}

      </main>

      {/* Minimal Footer */}
      <footer className="w-full text-center py-2 text-xs text-zinc-400">
        © {new Date().getFullYear()} Salma Mohammed Thabet. All rights reserved.
      </footer>

    </div>
  );
}