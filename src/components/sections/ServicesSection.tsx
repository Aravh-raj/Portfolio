import React from 'react';
import { FadeIn } from '../ui/FadeIn';

interface FocusArea {
  number: string;
  name: string;
  description: string;
}

const AREAS: FocusArea[] = [
  {
    number: '01',
    name: 'Backend Development',
    description:
      'Engineering robust server-side architectures, concurrency pipelines, and data handling workflows that prioritize structural stability under load.',
  },
  {
    number: '02',
    name: 'API Development',
    description:
      'Building performant RESTful APIs and real-time WebSockets with FastAPI, clean contracts, and structured schema validations.',
  },
  {
    number: '03',
    name: 'AI Automation',
    description:
      'Developing system-level automations, telemetry aggregators, and background routines that eliminate operational friction.',
  },
  {
    number: '04',
    name: 'AI Workflows',
    description:
      'Integrating speech recognition, LLM perception engines, vector search with ChromaDB, and multi-phase cognitive pipelines.',
  },
  {
    number: '05',
    name: 'Full-Stack Development',
    description:
      'Connecting responsive user interfaces with solid backend systems, MERN stacks, typed state synchronization, and secure databases.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="what-i-build"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20 md:mb-28">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#0C0C0C]/60 mb-2 block">
              Core Technical Competencies
            </span>
            <h2
              className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 10vw, 130px)' }}
            >
              What I Build
            </h2>
          </div>
        </FadeIn>

        {/* 5 Focus areas in a vertical list */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {AREAS.map((area, i) => (
            <FadeIn
              key={area.number}
              delay={i * 0.1}
              y={30}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 group hover:bg-black/[0.02] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                {/* Left: Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 font-mono tracking-tighter"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {area.number}
                </div>

                {/* Right: Name + Description stacked vertically */}
                <div className="flex flex-col justify-center flex-grow">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] leading-tight mb-2 sm:mb-3 tracking-tight"
                    style={{ fontSize: 'clamp(1.15rem, 2.4vw, 2.2rem)' }}
                  >
                    {area.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] opacity-75 leading-relaxed max-w-2xl text-sm sm:text-base md:text-lg"
                  >
                    {area.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
