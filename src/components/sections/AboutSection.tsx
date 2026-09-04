import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { Terminal, Cpu, Cloud, PenTool, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const manifestoText =
    "I am a builder. I don't just ask how to build something—I ask why it should be built that way. The best way to understand me as an engineer is through what I build.";

  const architectureTopics = [
    'Software Architecture',
    'System Design',
    'Scalability & Concurrency',
    'Cloud & AWS Infrastructure',
    'Networking & Data Centers',
    'Cognitive AI Pipelines',
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* 4 Corner Floating Tech & Creative Badges */}
      {/* 1. Top-left: System Architecture */}
      <div className="absolute top-[4%] left-[2%] sm:left-[4%] z-10 pointer-events-none hidden sm:block">
        <FadeIn delay={0.1} duration={0.9} x={-60} y={0}>
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-2.5 text-[#D7E2EA]/70">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-mono">BCA @ Netaji Subhas Engg College</span>
          </div>
        </FadeIn>
      </div>

      {/* 2. Top-right: Cloud & Scale */}
      <div className="absolute top-[4%] right-[2%] sm:right-[4%] z-10 pointer-events-none hidden sm:block">
        <FadeIn delay={0.15} duration={0.9} x={60} y={0}>
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-2.5 text-[#D7E2EA]/70">
            <Cloud className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-mono">Cloud & Network Architecture</span>
          </div>
        </FadeIn>
      </div>

      {/* 3. Bottom-left: Real-time Systems & Terminal */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[5%] z-10 pointer-events-none hidden sm:block">
        <FadeIn delay={0.25} duration={0.9} x={-60} y={0}>
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-2.5 text-[#D7E2EA]/70">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono">Challenging Hardware Limitations</span>
          </div>
        </FadeIn>
      </div>

      {/* 4. Bottom-right: Creative Expression */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[5%] z-10 pointer-events-none hidden sm:block">
        <FadeIn delay={0.3} duration={0.9} x={60} y={0}>
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-2.5 text-[#D7E2EA]/70">
            <PenTool className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-mono">Writing, Drawing & Music</span>
          </div>
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#D7E2EA]/60 mb-3 block">
            01 // Engineering Story & Mindset
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.75rem, 10vw, 120px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        <div className="h-8 sm:h-12" />

        {/* Character-by-character scroll animated core manifesto */}
        <div style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}>
          <AnimatedText
            text={manifestoText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-2xl mx-auto"
          />
        </div>

        <div className="h-12 sm:h-16" />

        {/* Narrative Narrative Cards: Honest, Compelling Developer Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full">
          {/* Card 1: Origin & Motivation */}
          <FadeIn delay={0.15} y={30} className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              The Spark & Motivation
            </h3>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light mb-4">
              I am currently pursuing a <strong>Bachelor of Computer Application (BCA)</strong> at <strong>Netaji Subhas Engineering College</strong>. I did not grow up thinking I was naturally the brightest student or destined to code.
            </p>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light">
              My curiosity started through movies—Iron Man made technology feel exhilarating, and reading about future technologies sparked a desire to build tools that future generations could actually rely on.
            </p>
          </FadeIn>

          {/* Card 2: The Architectural Lens */}
          <FadeIn delay={0.25} y={30} className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Architectural Curiosity
            </h3>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light mb-4">
              I am deeply interested in what lies beneath the surface: <strong>software architecture, networking, cloud systems, and concurrency</strong>. I want to understand how distributed pieces coordinate under high traffic.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {architectureTopics.map((topic) => (
                <span
                  key={topic}
                  className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[#D7E2EA]/90"
                >
                  {topic}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Card 3: The 8GB RAM Catalyst (Lisabella) */}
          <FadeIn delay={0.35} y={30} className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm md:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Challenging Constraints: The Lisabella Story
              </h3>
              <span className="text-xs font-mono text-emerald-400/90 border border-emerald-500/30 px-3 py-1 rounded-full w-fit">
                Resource Optimization Mindset
              </span>
            </div>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed font-light">
              When someone once asked what realistic development could be done on modest hardware like <strong>8GB RAM</strong>, I didn&apos;t accept the limitation as an endpoint. That question led directly to <strong>Lisabella-v2</strong>—a real-time cognitive assistant engineered from scratch with a stateless processing pipeline, vector search, and local telemetry designed to run responsively under strict memory constraints.
            </p>
          </FadeIn>
        </div>

        <div className="h-12 sm:h-16" />

        {/* Creative Side CTA & Writing Link */}
        <FadeIn delay={0.4} y={20} className="w-full flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/20 via-black to-cyan-950/20 border border-white/10 gap-6">
          <div className="text-left max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-300 block mb-1">
              Creative Balance // Beyond The Terminal
            </span>
            <h4 className="text-base sm:text-lg font-medium text-white mb-2">
              &quot;Instead of only consuming, I started creating.&quot;
            </h4>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
              Outside coding, I express ideas through writing, sketching, and music. Read my reflections, stories, and technical thoughts on my dedicated writing hub.
            </p>
          </div>
          <a
            href="https://aravhraj.stck.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-400/50 bg-purple-500/10 hover:bg-purple-500/20 text-white text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 select-none shrink-0"
          >
            Read My Writing <ArrowUpRight className="w-4 h-4 text-purple-300" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
