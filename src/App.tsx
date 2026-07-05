import { useState, useEffect } from "react";
import { 
  ArrowUp, Mail, ShieldAlert, BadgeCheck, Download, 
  Terminal, Sparkles, Code2, Briefcase, Award, 
  ChevronRight, Calendar, User, Eye, Printer, X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { PROJECTS, PERSONAL_INFO, HIGHLIGHTS, TIMELINE, CERTIFICATIONS, ACHIEVEMENTS } from "./data";
import { Project } from "./types";

// Import modular components
import ThemeToggle from "./components/ThemeToggle";
import LoadingScreen from "./components/LoadingScreen";
import ProjectCard from "./components/ProjectCard";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import SkillBadges from "./components/SkillBadges";
import GithubDashboard from "./components/GithubDashboard";
import ContactForm from "./components/ContactForm";

const TYPED_ROLES = [
  "Frontend Developer",
  "React Engineer",
  "UI/UX Designer",
  "Cyber Security BCA Graduate",
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Custom typing effect state
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Monitor scroll progress & Back to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrolled > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dynamic typed characters
  useEffect(() => {
    if (isLoading) return;

    let timer: NodeJS.Timeout;
    const currentRole = TYPED_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && roleText === currentRole) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && roleText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
    } else {
      timer = setTimeout(() => {
        setRoleText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [roleText, roleIndex, isDeleting, isLoading]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <>
      {/* Cinematic Loader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 relative selection:bg-emerald-500/10 selection:text-emerald-500 font-sans antialiased overflow-x-hidden">
          {/* Top Sticky Scroll Progress Bar */}
          <div 
            id="scroll-progress-indicator" 
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 z-50 origin-left"
            style={{ transform: `scaleX(${scrollProgress / 100})` }}
          />

          {/* Background Ambient Radial Glow */}
          <div className="absolute inset-0 radial-glow pointer-events-none z-0" />

          {/* Header & Sticky Glass Navigation Bar */}
          <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
              {/* Logo Brand Brand */}
              <div 
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-2.5 cursor-pointer group"
                id="header-brand-logo"
              >
                <div className="w-9 h-9 rounded-none bg-emerald-500 text-black flex items-center justify-center font-display font-black text-sm tracking-tighter shadow-md group-hover:scale-105 transition-transform">
                  CJ
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-sm font-display font-black text-neutral-900 dark:text-white tracking-tighter leading-none">
                    {PERSONAL_INFO.name.toUpperCase()}
                  </h1>
                  <span className="text-[9px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                    {PERSONAL_INFO.role}
                  </span>
                </div>
              </div>

              {/* Navigation Nodes - Desktop */}
              <nav className="hidden lg:flex items-center space-x-8 font-mono text-xs font-bold tracking-wider">
                <button onClick={() => scrollToSection("about")} className="hover:text-emerald-500 transition-colors cursor-pointer">01. ABOUT</button>
                <button onClick={() => scrollToSection("skills")} className="hover:text-emerald-500 transition-colors cursor-pointer">02. SKILLS</button>
                <button onClick={() => scrollToSection("projects")} className="hover:text-emerald-500 transition-colors cursor-pointer">03. WORK</button>
                <button onClick={() => scrollToSection("credentials")} className="hover:text-emerald-500 transition-colors cursor-pointer">04. CREDENTIALS</button>
                <button onClick={() => scrollToSection("github")} className="hover:text-emerald-500 transition-colors cursor-pointer">05. ACTIVITY</button>
                <button onClick={() => scrollToSection("contact")} className="hover:text-emerald-500 transition-colors cursor-pointer">06. CONNECT</button>
              </nav>

              {/* CTAs Menu Control Panel */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />

                <button
                  id="nav-hire-me-btn"
                  onClick={() => scrollToSection("contact")}
                  className="hidden sm:flex items-center space-x-2 px-5 py-2 text-xs font-mono font-bold tracking-widest rounded-none border-2 border-neutral-900 dark:border-white hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all cursor-pointer bg-transparent"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>HIRE ME</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Scoping Section */}
          <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-36">
            
            {/* HERO SECTION */}
            <section id="home" className="min-h-[70vh] flex flex-col justify-center items-start pt-4 space-y-8 relative overflow-hidden md:overflow-visible">
              {/* Massive Background Typography */}
              <div className="absolute inset-0 flex flex-col justify-center leading-none pointer-events-none opacity-[0.02] dark:opacity-[0.03] select-none z-0">
                <h1 className="text-[100px] md:text-[200px] font-black tracking-tighter -ml-10 text-neutral-400 dark:text-white">CREATIVE</h1>
                <h1 className="text-[100px] md:text-[200px] font-black tracking-tighter ml-20 text-neutral-400 dark:text-white">DEVELOPER</h1>
              </div>

              <div className="space-y-4 max-w-3xl relative z-10">
                {/* Intro welcome sticker */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-none bg-emerald-500 text-black font-mono text-[10px] font-bold tracking-widest"
                >
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>WELCOME TO MY DIGITAL TERMINAL</span>
                </motion.div>

                {/* Main Heading Large */}
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-9xl font-display font-black tracking-tighter text-neutral-900 dark:text-white leading-none uppercase"
                  >
                    Chirag<br className="hidden md:block" />Jangid<span className="text-emerald-500">.</span>
                  </motion.h1>
                  
                  {/* Dynamic Typing Subheading */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center space-x-2 text-xl md:text-3xl font-display font-bold text-neutral-500 dark:text-neutral-400"
                  >
                    <ChevronRight className="w-6 h-6 text-emerald-500" />
                    <span className="text-neutral-900 dark:text-neutral-100">{roleText}</span>
                    <span className="w-1.5 h-6 bg-emerald-500 typed-cursor inline-block" />
                  </motion.div>
                </div>

                {/* Professional Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed max-w-2xl"
                >
                  {PERSONAL_INFO.tagline} {PERSONAL_INFO.summary}
                </motion.p>
              </div>

              {/* Action Trigger Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3.5 w-full max-w-xl relative z-10"
              >
                <button
                  id="hero-download-resume-btn"
                  onClick={() => setShowResumeModal(true)}
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 bg-emerald-500 text-black font-bold uppercase text-[11px] tracking-widest hover:scale-105 transform transition-all cursor-pointer rounded-none shadow-lg"
                >
                  <Download className="w-4 h-4 text-black" />
                  <span>DOWNLOAD RESUME</span>
                </button>

                <button
                  id="hero-view-work-btn"
                  onClick={() => scrollToSection("projects")}
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 border border-neutral-400 dark:border-white/20 text-neutral-900 dark:text-white font-bold uppercase text-[11px] tracking-widest backdrop-blur-sm hover:scale-105 transform transition-all cursor-pointer rounded-none"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 border border-neutral-400 dark:border-white/20 text-neutral-900 dark:text-white font-bold uppercase text-[11px] tracking-widest backdrop-blur-sm hover:scale-105 transform transition-all cursor-pointer rounded-none"
                >
                  <span>GET IN TOUCH</span>
                </button>
              </motion.div>

              {/* Micro decoration: background floating cards representing Tech categories */}
              <div className="absolute top-1/4 right-0 lg:right-12 w-64 h-64 pointer-events-none hidden xl:block z-0">
                <div className="p-4 rounded-2xl glass-card border border-neutral-200/40 dark:border-neutral-800/40 animate-float absolute top-0 right-0 w-48 space-y-2 bg-white/30 dark:bg-neutral-900/30">
                  <div className="flex items-center space-x-2 text-emerald-500">
                    <Code2 className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-bold tracking-wider">FRONTEND</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">High-performance components using React, TS, and CSS Grid layouts.</p>
                </div>
                
                <div className="p-4 rounded-2xl glass-card border border-neutral-200/40 dark:border-neutral-800/40 animate-float-delayed absolute bottom-0 left-0 w-48 space-y-2 bg-white/30 dark:bg-neutral-900/30">
                  <div className="flex items-center space-x-2 text-cyan-500">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-bold tracking-wider">CYBER SEC</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">EC-Council certified background in Ethical Hacking & network defense.</p>
                </div>
              </div>
            </section>

            {/* ABOUT ME SECTION */}
            <section id="about" className="space-y-12">
              {/* Section Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                  <span>01. BACKGROUND</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                  About Me & Career Goals
                </h2>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Professional summary & Goals card (7 slots) */}
                <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 glass-card space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-emerald-500">
                      <User className="w-4.5 h-4.5" />
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold">Summary Core</span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                      {PERSONAL_INFO.summary}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                    <div className="flex items-center space-x-2 text-cyan-500">
                      <Terminal className="w-4.5 h-4.5" />
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold">Career Goal</span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans font-medium italic">
                      "{PERSONAL_INFO.careerGoal}"
                    </p>
                  </div>
                </div>

                {/* Education Timeline Card (5 slots) */}
                <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50 dark:bg-neutral-900/10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-indigo-500">
                      <Calendar className="w-4.5 h-4.5" />
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold">Education Timeline</span>
                    </div>

                    {TIMELINE.map((edu) => (
                      <div key={edu.id} className="relative pl-6 border-l-2 border-emerald-500/30 space-y-2">
                        {/* Dot marker */}
                        <div className="absolute top-1.5 left-[-6px] w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" />
                        
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">
                            {edu.year}
                          </span>
                          {edu.grade && (
                            <span className="text-[10px] font-mono bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded">
                              {edu.grade}
                            </span>
                          )}
                        </div>

                        <h4 className="text-sm font-display font-bold text-neutral-900 dark:text-white leading-snug">
                          {edu.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                          {edu.subtitle}
                        </p>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono text-neutral-400 mt-6 text-right">
                    JECRC UNIVERSITY // Cyber Security Wing
                  </div>
                </div>
              </div>

              {/* Core Highlights Grid */}
              <div className="space-y-4">
                <span className="block font-mono text-xs text-neutral-500 uppercase tracking-widest px-1">
                  Key Skill Highlights
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {HIGHLIGHTS.map((hl, idx) => (
                    <div
                      key={hl.title}
                      className="p-5 rounded-2xl border border-neutral-200/40 dark:border-neutral-800/40 bg-white/30 dark:bg-neutral-900/20 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 group transition-colors duration-300"
                    >
                      <h4 className="text-sm font-display font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {hl.title}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-1.5 leading-relaxed">
                        {hl.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* TECHNICAL SKILLS SECTION */}
            <section id="skills" className="space-y-12">
              {/* Section Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                  <span>02. DISCIPLINE</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                  Technical Expertise
                </h2>
              </div>

              {/* Custom Badges Display */}
              <SkillBadges />
            </section>

            {/* PROJECT SHOWCASE SECTION */}
            <section id="projects" className="space-y-12">
              {/* Section Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                  <span>03. PORTFOLIO</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                  Featured Product Builds
                </h2>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onViewDetails={(p) => setSelectedProject(p)}
                  />
                ))}
              </div>
            </section>

            {/* CERTIFICATIONS & ACHIEVEMENTS SECTION */}
            <section id="credentials" className="space-y-12">
              {/* Section Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                  <span>04. VALIDATION</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                  Certifications & Accomplishments
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left side - Certifications Grid (7 slots) */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="block font-mono text-xs text-neutral-500 uppercase tracking-wider px-1">
                    Professional Accreditation
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert.name}
                        className="p-5 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 glass-card flex flex-col justify-between group hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 h-40"
                      >
                        <div className="space-y-2">
                          {cert.name.includes("Hacker") || cert.name.includes("Defender") ? (
                            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-red-500/10 text-red-500 border border-red-500/20 text-[9px] font-mono font-bold uppercase">
                              <ShieldAlert className="w-3.5 h-3.5" />
                              <span>SECURITY CONSOLE</span>
                            </div>
                          ) : (
                            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[9px] font-mono font-bold uppercase">
                              <BadgeCheck className="w-3.5 h-3.5" />
                              <span>DEVELOPER KEY</span>
                            </div>
                          )}

                          <h4 className="text-sm font-display font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                            {cert.name}
                          </h4>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                          <span>{cert.issuer}</span>
                          <span className="font-semibold">{cert.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side - Achievements (5 slots) */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="block font-mono text-xs text-neutral-500 uppercase tracking-wider px-1">
                    Core Accomplishments
                  </span>

                  <div className="p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50 dark:bg-neutral-900/10 space-y-4">
                    <ul className="space-y-3">
                      {ACHIEVEMENTS.map((ach) => (
                        <li key={ach.title} className="p-3 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-100 dark:border-neutral-800/60 flex items-start space-x-3 group hover:border-emerald-500/30 transition-all duration-300">
                          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5">
                            <BadgeCheck className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-500 transition-colors">
                              {ach.title}
                            </h4>
                            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans mt-0.5 leading-relaxed">
                              {ach.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* GITHUB DYNAMIC ACTIVITY SECTION */}
            <section id="github" className="space-y-12">
              <GithubDashboard />
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="space-y-12">
              {/* Section Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                  <span>05. CONNECTION</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white tracking-tight">
                  Get in Touch
                </h2>
              </div>

              {/* Form & Map container */}
              <ContactForm />
            </section>
          </main>

          {/* Footer bar */}
          <footer className="border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 relative z-10 py-8 text-xs font-mono text-neutral-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center text-white font-bold text-[10px]">
                  CJ
                </div>
                <span>© {new Date().getFullYear()} CHIRAG JANGID. ALL RIGHTS RESERVED.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-[10px]">
                <span className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>UTC DEPLOYED STATE</span>
                </span>
                <span>JAIPUR // INDIA</span>
              </div>
            </div>
          </footer>

          {/* Floaters Back to Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                id="back-to-top-btn"
                onClick={() => scrollToSection("home")}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border border-neutral-300 dark:border-neutral-800 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all shadow-lg cursor-pointer"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectDetailsModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>

          {/* Print Resume Modal Drawer */}
          <AnimatePresence>
            {showResumeModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-neutral-950/80 backdrop-blur-md">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white text-neutral-900 w-full max-w-4xl rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl flex flex-col max-h-[90vh]"
                >
                  {/* Modal header controls */}
                  <div className="flex items-center justify-between px-6 py-4 bg-neutral-50 border-b border-neutral-200">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-neutral-500">
                      <Terminal className="w-4 h-4 text-emerald-500" />
                      <span>PRINTER OPTIMIZED DIGITAL RESUME</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={handlePrintResume}
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold transition-all cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>PRINT / PDF</span>
                      </button>

                      <button
                        onClick={() => setShowResumeModal(false)}
                        className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 transition-colors cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Resume actual printable sheet */}
                  <div className="overflow-y-auto p-8 md:p-12 space-y-6 font-sans select-text bg-white" id="printable-resume-body">
                    {/* Header line */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 pb-6 border-b-2 border-neutral-900">
                      <div>
                        <h2 className="text-3xl font-bold tracking-tight">{PERSONAL_INFO.name}</h2>
                        <p className="text-sm font-semibold text-emerald-600 uppercase font-mono">{PERSONAL_INFO.role}</p>
                      </div>

                      <div className="text-xs font-mono text-neutral-600 space-y-1">
                        <p>Mail: {PERSONAL_INFO.email}</p>
                        <p>Phone: {PERSONAL_INFO.phone}</p>
                        <p>Jaipur, Rajasthan, India</p>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Professional Summary</h3>
                      <p className="text-xs text-neutral-700 leading-relaxed font-serif">
                        {PERSONAL_INFO.summary}
                      </p>
                    </div>

                    {/* Technical skill layout */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Core Technical Capabilities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                        <div className="space-y-1">
                          <p className="font-bold border-b border-neutral-300 pb-1">Frontend Engineering</p>
                          <p className="text-neutral-600 text-[11px]">HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Flexbox, CSS Grid, Responsive design</p>
                        </div>

                        <div className="space-y-1">
                          <p className="font-bold border-b border-neutral-300 pb-1">Backend & DB</p>
                          <p className="text-neutral-600 text-[11px]">REST APIs, JSON, Java, SQL, MySQL Database, CRUD interfaces</p>
                        </div>

                        <div className="space-y-1">
                          <p className="font-bold border-b border-neutral-300 pb-1">Developer Tools</p>
                          <p className="text-neutral-600 text-[11px]">Git, GitHub, Postman Client, VS Code Editor, Command Lines</p>
                        </div>

                        <div className="space-y-1">
                          <p className="font-bold border-b border-neutral-300 pb-1">Security & Cloud</p>
                          <p className="text-neutral-600 text-[11px]">Certified Ethical Hacker, Network Defender, Firebase, GCP Run</p>
                        </div>
                      </div>
                    </div>

                    {/* Experience Projects details list */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Key Portfolio Products</h3>
                      <div className="space-y-4">
                        {PROJECTS.map((p) => (
                          <div key={p.id} className="space-y-1">
                            <div className="flex justify-between items-baseline">
                              <span className="font-bold text-xs">{p.name} — {p.tagline}</span>
                              <span className="text-[10px] font-mono text-neutral-500">{p.technologies.slice(0, 4).join(" | ")}</span>
                            </div>
                            <p className="text-[11px] text-neutral-600 leading-relaxed">{p.description}</p>
                            <p className="text-[11px] font-mono text-neutral-500 italic">GitHub: {p.githubUrl}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-2 pt-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Academic Background</h3>
                      <div className="flex justify-between items-start text-xs">
                        <div>
                          <p className="font-bold">Bachelor of Computer Applications (Cyber Security Especialization)</p>
                          <p className="text-neutral-600">JECRC University</p>
                        </div>
                        <div className="text-right font-mono text-neutral-600">
                          <p>2020 - 2023</p>
                          <p className="font-bold text-neutral-900">7.4 CGPA</p>
                        </div>
                      </div>
                    </div>

                    {/* Certifications list */}
                    <div className="space-y-2 pt-2">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Professional Certifications</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        {CERTIFICATIONS.map((cert) => (
                          <div key={cert.name} className="border-l-2 border-neutral-300 pl-3">
                            <p className="font-bold text-[11px]">{cert.name}</p>
                            <p className="text-[10px] text-neutral-500">{cert.issuer} // {cert.date}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Foot panel */}
                  <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 text-center text-xs font-mono text-neutral-500">
                    ESC to dismiss // Click "PRINT / PDF" to download offline document
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
