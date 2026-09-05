import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { FadeIn } from './components/ui/FadeIn';
import { Mail, Github, Linkedin, BookOpen, ArrowUpRight } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-sans min-h-screen selection:bg-[#7621B0] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. DUAL-ROW MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. WHAT I BUILD (SERVICES / COMPETENCIES) */}
      <ServicesSection />

      {/* 5. TECHNICAL SKILLS & MERN INTERNSHIP */}
      <SkillsSection />

      {/* 6. FEATURED PROJECTS (STICKY CARDS) */}
      <ProjectsSection />

      {/* 7. FOOTER & CONTACT SECTION */}
      <footer id="contact" className="bg-[#0C0C0C] py-20 px-6 sm:px-12 border-t border-white/10 select-none">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <FadeIn delay={0.1} y={30}>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-purple-400 mb-3 block">
              Opportunities • Placements • Collaborations
            </span>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}
            >
              Let&apos;s Build Together
            </h2>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto mb-8 font-light">
              Open to internship opportunities, full-time developer roles, and engineering collaborations. Reach out to discuss software architecture, AI systems, or project ideas.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <a
                href="mailto:aravhraj@example.com"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
                className="inline-flex items-center gap-2 rounded-full font-medium uppercase tracking-widest text-white px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110 cursor-pointer select-none"
              >
                <Mail className="w-4 h-4" /> Get In Touch
              </a>

              <a
                href="https://aravhraj.stck.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 cursor-pointer select-none"
              >
                <BookOpen className="w-4 h-4" /> Writing Hub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>

          {/* Social Links & Copyright */}
          <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#D7E2EA]/60 gap-4">
            <div className="flex items-center gap-3">
              <span>© {new Date().getFullYear()} Aravh Raj • Kolkata, India</span>
              <span className="hidden md:inline text-white/30">|</span>
              <span className="hidden md:inline text-[#D7E2EA]/40 font-mono text-[11px]">
                Built with architectural intent
              </span>
            </div>

            <div className="flex items-center gap-5 uppercase tracking-wider font-mono text-xs">
              <a
                href="https://github.com/aravh-raj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aravhraj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href="https://aravhraj.stck.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" /> Writing
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
