import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Code2, Globe, Server, Database, Bot, Wrench, Briefcase } from 'lucide-react';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; note?: string }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'PHP' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: 'FastAPI' },
      { name: 'REST APIs' },
      { name: 'WebSockets' },
      { name: 'Node.js', note: 'MERN Internship' },
      { name: 'Express', note: 'MERN Internship' },
    ],
  },
  {
    title: 'AI, ML & Cognition',
    icon: <Bot className="w-5 h-5 text-cyan-400" />,
    skills: [
      { name: 'Speech Recognition' },
      { name: 'AI Model Integration' },
      { name: 'Foundational ML' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Scikit-learn' },
    ],
  },
  {
    title: 'Frontend & Web',
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    skills: [
      { name: 'React' },
      { name: 'Next.js', note: 'Collaborative AI/Speech project' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Databases & Vector Storage',
    icon: <Database className="w-5 h-5 text-amber-400" />,
    skills: [
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'NoSQL' },
      { name: 'Vector Databases (ChromaDB)' },
    ],
  },
  {
    title: 'Developer Tools & Workflows',
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Docker' },
      { name: 'Postman' },
      { name: 'Antigravity' },
      { name: 'Claude' },
      { name: 'Cursor' },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-28 relative select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#D7E2EA]/60 mb-2 block">
              02 // Technical Foundation
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 120px)' }}
            >
              Technical Skills
            </h2>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_GROUPS.map((group, idx) => (
            <FadeIn
              key={group.title}
              delay={idx * 0.08}
              y={25}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3">
                {group.icon}
                <h3 className="font-semibold text-white uppercase tracking-tight text-sm sm:text-base">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-mono text-white/90 font-medium">
                      {skill.name}
                    </span>
                    {skill.note && (
                      <span className="text-[10px] text-purple-300/80 font-mono tracking-tight">
                        {skill.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* MERN Experience Card */}
        <FadeIn delay={0.2} y={30}>
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-black to-purple-950/20 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mt-1">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                  Professional Experience
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                  MERN Stack Developer Internship
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/75 max-w-2xl font-light leading-relaxed">
                  Completed an internship focused on full-stack development using MongoDB, Express, React, and Node.js. Built RESTful services, designed schema models, and integrated reactive UI components.
                </p>
              </div>
            </div>
            <div className="shrink-0 self-end md:self-center">
              <span className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA]/70">
                Verified Internship Experience
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SkillsSection;
