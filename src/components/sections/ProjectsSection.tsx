import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { ArrowUpRight, Github, Terminal, Cpu, Database, Network, ShieldCheck, Activity } from 'lucide-react';

interface ProjectData {
  number: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  techStack: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Lisabella-v2',
    category: 'Flagship Architecture',
    subtitle: 'Stateless Cognitive AI Orchestrator & Real-Time Desktop Assistant',
    description:
      'A real-time AI desktop assistant built around a stateless cognitive orchestration architecture, combining LLM-based perception and routing, persistent semantic memory (RAG), voice interaction, and real-time system telemetry. Engineered from first principles to challenge hardware constraints and run responsively within 8GB RAM environments.',
    techStack: [
      'Python 3.11',
      'FastAPI',
      'React',
      'TypeScript',
      'Tauri 2.0',
      'Rust',
      'ChromaDB',
      'SQLAlchemy',
      'WebSockets',
      'Asyncio',
    ],
    keyHighlights: [
      'Stateless 6-Phase Processing Pipeline (Perception → Routing → Retrieval → Compilation → Execution → Telemetry)',
      'Persistent Semantic Memory via ChromaDB Vector Search & RAG',
      'Bidirectional WebSockets for Real-Time Audio Streaming & State Sync',
      'Hardware Resource Telemetry & Local System Constraint Awareness',
    ],
    githubUrl: 'https://github.com/aravhraj',
    liveUrl: '#',
  },
  {
    number: '02',
    name: 'AI Speech & Cognitive Engine',
    category: 'Collaborative Project',
    subtitle: 'Real-Time Voice Streaming & AI Model Integration',
    description:
      'Engineered the speech-recognition pipeline and AI model cognitive components as part of a collaborative Next.js web application. Handled client-side microphone streaming, bidirectional audio transport, and inference routing.',
    techStack: [
      'Next.js',
      'React',
      'Python',
      'WebSockets',
      'Speech Recognition APIs',
      'FastAPI',
    ],
    keyHighlights: [
      'Engineered Speech-to-Text Audio Streaming Pipeline',
      'Direct AI Model Integration & Inference Routing',
      'Collaborative Team Development with Clean API Boundaries',
    ],
    githubUrl: 'https://github.com/aravhraj',
    liveUrl: '#',
  },
  {
    number: '03',
    name: 'Full-Stack MERN Architecture',
    category: 'Production Internship',
    subtitle: 'Scalable REST API & Database Systems',
    description:
      'Comprehensive full-stack web application developed during my MERN stack internship. Implemented secure RESTful APIs, optimized MongoDB queries, and engineered reactive user interfaces with structured data validations.',
    techStack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'REST APIs',
      'Docker',
      'Postman',
    ],
    keyHighlights: [
      'Normalized & Document Data Modeling in MongoDB',
      'Modular Express.js Architecture with Authentication & Middleware',
      'Structured Endpoint Verification & Contract Testing with Postman',
    ],
    githubUrl: 'https://github.com/aravhraj',
    liveUrl: '#',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[85vh] flex items-start justify-center relative mb-12 sm:mb-16 md:mb-20 last:mb-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5rem + ${index * 28}px)`,
        }}
        className="sticky w-full max-w-6xl mx-auto rounded-[36px] sm:rounded-[48px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10"
      >
        {/* Top row: Number, Category, Name & Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 md:pb-8 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none font-mono"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
                [{project.category}]
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 text-xs sm:text-sm font-mono uppercase transition-colors"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-purple-200 transition-colors"
              >
                Demo <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom content: Technical Architecture Showcase */}
        <div className="pt-6 md:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (5 Cols) - Deep Architecture Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white/90 mb-2 font-mono">
                {project.subtitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <span className="text-[11px] font-mono uppercase text-purple-300 tracking-wider block mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Architectural Highlights:
              </span>
              <ul className="space-y-1.5 text-xs text-[#D7E2EA]/85 font-mono">
                {project.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">›</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[#D7E2EA]/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (6 Cols) - Technical Visual Representation */}
          <div className="lg:col-span-6 rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#12141A] to-[#0A0B0E] border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden font-mono shadow-inner">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs text-[#D7E2EA]/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-white/75 font-semibold text-[11px]">
                  {project.name.toLowerCase()} // architecture.spec
                </span>
              </div>
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>

            {/* Visual Architecture Schematic */}
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50">
                  <span>SUBSYSTEM PIPELINE</span>
                  <span className="text-cyan-400">ONLINE</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400 mx-auto mb-1" />
                    <span>Perception</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <Database className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-1" />
                    <span>Vector RAG</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <Network className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                    <span>WebSocket</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1 text-[11px]">
                <div className="text-[#D7E2EA]/70 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-white">Design Principle:</span>
                </div>
                <p className="text-purple-300/90 pl-5">
                  &quot;Stateless orchestration keeps memory footprint strictly predictable.&quot;
                </p>
              </div>
            </div>

            {/* Footer telemetry */}
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-[#D7E2EA]/50">
              <span>TARGET_HOST: LOCALHOST / CLOUD</span>
              <span className="text-emerald-400">STRICT CONTRACTS ENFORCED</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-28 md:pt-36 pb-32 px-4 sm:px-8 md:px-12 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#D7E2EA]/60 mb-2 block">
              03 // Engineering Showcase
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 130px)' }}
            >
              Featured Projects
            </h2>
          </div>
        </FadeIn>

        {/* 3 Sticky-stacking project cards */}
        <div className="relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
