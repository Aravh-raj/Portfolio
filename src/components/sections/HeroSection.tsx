import React from 'react';
import { motion } from 'framer-motion';
import { Magnet } from '../ui/Magnet';
import { Terminal, Cpu, Network, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'What I Build', href: '#what-i-build' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Writing', href: 'https://aravhraj.stck.me/', external: true },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none pt-4 pb-8 sm:pb-10">
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex items-center justify-between px-6 md:px-12 pt-4 md:pt-6 z-30"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-mono">
            Aravh Raj • Kolkata, IN
          </span>
        </div>

        <div className="flex items-center gap-5 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.1rem] transition-opacity duration-200 hover:opacity-70 flex items-center gap-1"
            >
              {link.name}
              {link.external && <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* 2. Hero Heading Container */}
      <div className="w-full overflow-hidden text-center z-0 mt-4 sm:mt-2 md:-mt-2 px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-3"
        >
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-mono">
            Full-Stack Developer & AI-Powered Product Builder
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.5vw] pointer-events-none select-none uppercase"
        >
          Aravh Raj
        </motion.h1>
      </div>

      {/* 3. Hero Visual Centerpiece: Interactive Cognitive System Core (Replaces generic 3D kid avatar) */}
      <div className="relative z-10 w-full flex justify-center items-center my-4 sm:my-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] flex justify-center"
        >
          <Magnet
            padding={150}
            strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <div className="w-full rounded-2xl bg-gradient-to-b from-[#16181F]/90 to-[#0F1015]/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
              {/* Subtle background ambient glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[11px] sm:text-xs text-[#D7E2EA]/60">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 text-white/80 font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    aravh@builder:~/cognitive-core
                  </span>
                </div>
                <span className="hidden sm:inline text-emerald-400 font-medium">● ACTIVE</span>
              </div>

              {/* Architecture telemetry display */}
              <div className="font-mono text-left space-y-2.5 text-xs sm:text-[13px] leading-relaxed">
                <p className="text-white/90">
                  <span className="text-purple-400 font-semibold">&gt; philosophy:</span> &quot;I don&apos;t just ask how to build something. I ask <span className="text-amber-300 font-bold underline decoration-amber-400/50">why</span> it should be built that way.&quot;
                </p>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                  <div>
                    <span className="text-[#D7E2EA]/50 block">CURRENT_FOCUS:</span>
                    <span className="text-cyan-300 font-medium">Software Architecture & Cloud</span>
                  </div>
                  <div>
                    <span className="text-[#D7E2EA]/50 block">FEATURED_SYSTEM:</span>
                    <span className="text-purple-300 font-medium">Lisabella-v2 Orchestrator</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/60 pt-1 border-t border-white/5 font-mono">
                  <span className="flex items-center gap-1">
                    <Network className="w-3 h-3 text-cyan-400" /> Stateless 6-Phase Pipeline
                  </span>
                  <span className="text-emerald-400">8GB RAM Optimized</span>
                </div>
              </div>
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 px-6 md:px-12 z-20">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-md"
        >
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.25rem)' }}
          >
            Building web applications, AI-powered products, automations, and systems with an architectural mindset.
          </p>
        </motion.div>

        {/* Right Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap items-center gap-3.5"
        >
          {/* Primary CTA: View My Work */}
          <a
            href="#projects"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
              outline: '2px solid white',
              outlineOffset: '-3px',
            }}
            className="inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110 cursor-pointer select-none"
          >
            View My Work
          </a>

          {/* Secondary CTA: GitHub Profile */}
          <a
            href="https://github.com/aravhraj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 cursor-pointer select-none gap-1.5"
          >
            GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
