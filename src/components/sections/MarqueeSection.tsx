import React, { useEffect, useRef, useState } from 'react';
import {
  Terminal,
  Cpu,
  Database,
  Activity,
  Mic,
  Server,
  Layers,
  CheckCircle2,
  FileCode2,
  BookOpen,
} from 'lucide-react';

interface ShowcaseTileProps {
  category: string;
  title: string;
  subtitle: string;
  tag: string;
  badgeColor?: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const ShowcaseCard: React.FC<ShowcaseTileProps> = ({
  category,
  title,
  subtitle,
  tag,
  badgeColor = 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  icon,
  content,
}) => {
  return (
    <div className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl p-5 bg-gradient-to-b from-[#161821] to-[#0E1015] border border-white/10 shadow-2xl flex flex-col justify-between font-mono select-none overflow-hidden relative group hover:border-purple-500/40 transition-colors duration-300">
      {/* Background ambient tint */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80">
            {icon}
          </div>
          <div>
            <span className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-widest block">
              {category}
            </span>
            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
              {title}
            </h4>
          </div>
        </div>

        <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${badgeColor} font-mono`}>
          {tag}
        </span>
      </div>

      {/* Center Body / Technical Visual */}
      <div className="flex-grow py-3 flex flex-col justify-center">
        {content}
      </div>

      {/* Bottom Subtitle / Spec Note */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#D7E2EA]/50">
        <span className="truncate max-w-[280px]">{subtitle}</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          VERIFIED WORK
        </span>
      </div>
    </div>
  );
};

// Row 1: Lisabella-v2 & Cognitive Architecture Work
const ROW1_CARDS: ShowcaseTileProps[] = [
  {
    category: 'Flagship System',
    title: 'Lisabella-v2 Desktop Core',
    subtitle: 'Stateless Cognitive AI Orchestrator',
    tag: 'Python 3.11 • Tauri 2.0',
    icon: <Terminal className="w-4 h-4 text-purple-400" />,
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1.5 text-[11px] leading-relaxed">
        <div className="text-purple-300 font-medium flex items-center gap-1.5">
          <span>&gt; lisabella.orchestrate(event)</span>
        </div>
        <div className="text-[#D7E2EA]/70 pl-3 border-l border-purple-500/30">
          <span>perception: [AUDIO_STREAM, INTENT_DETECTED]</span>
          <br />
          <span>routing: DETERMINISTIC_FALLBACK // LOCAL_PIPELINE</span>
        </div>
        <div className="flex justify-between text-[10px] text-emerald-400 pt-1">
          <span>CONSTRAINT: 8GB_RAM_TARGET</span>
          <span>MODE: REAL-TIME</span>
        </div>
      </div>
    ),
  },
  {
    category: 'Architecture',
    title: '6-Phase Cognitive Pipeline',
    subtitle: 'Stateless execution workflow',
    tag: 'Pipeline Spec',
    icon: <Layers className="w-4 h-4 text-cyan-400" />,
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    content: (
      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
          <span className="text-purple-400 block font-bold">01</span>
          <span className="text-white/80">Perception</span>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
          <span className="text-cyan-400 block font-bold">02</span>
          <span className="text-white/80">Router</span>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
          <span className="text-blue-400 block font-bold">03</span>
          <span className="text-white/80">Chroma RAG</span>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
          <span className="text-emerald-400 block font-bold">04</span>
          <span className="text-white/80">Context</span>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
          <span className="text-amber-400 block font-bold">05</span>
          <span className="text-white/80">Execution</span>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
          <span className="text-pink-400 block font-bold">06</span>
          <span className="text-white/80">Telemetry</span>
        </div>
      </div>
    ),
  },
  {
    category: 'Memory Subsystem',
    title: 'ChromaDB Vector Retrieval',
    subtitle: 'Persistent semantic memory embeddings',
    tag: 'Vector DB',
    icon: <Database className="w-4 h-4 text-blue-400" />,
    badgeColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1.5 text-[11px]">
        <div className="flex justify-between text-[#D7E2EA]/60 text-[10px]">
          <span>COLLECTION: lisabella_memory</span>
          <span className="text-blue-400">COSINE_SIMILARITY</span>
        </div>
        <p className="text-white/90 font-mono text-[11px]">
          results = collection.query(query_texts=[intent], n_results=K)
        </p>
        <div className="flex items-center gap-2 pt-1 text-[10px] text-[#D7E2EA]/70">
          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">TOP_K_MATCHES</span>
          <span>RANKED_RETRIEVAL</span>
          <span className="text-emerald-400 ml-auto">PERSISTED</span>
        </div>
      </div>
    ),
  },
  {
    category: 'Real-Time Audio',
    title: 'WebSocket Audio Streaming',
    subtitle: 'Bidirectional low-latency audio transmission',
    tag: 'WebSockets',
    icon: <Mic className="w-4 h-4 text-emerald-400" />,
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-2 text-[11px]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-emerald-400 font-bold">● WS_CONNECTED</span>
          <span className="text-[#D7E2EA]/60">PCM_AUDIO_STREAM</span>
        </div>
        {/* Animated waveform bars simulation */}
        <div className="flex items-center justify-between gap-1 h-7 px-2 bg-white/5 rounded-lg">
          {[40, 70, 95, 30, 85, 60, 100, 45, 80, 50, 90, 65, 35, 75, 55, 85].map((h, i) => (
            <span
              key={i}
              className="w-1.5 bg-emerald-400/80 rounded-full"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="text-[10px] text-[#D7E2EA]/60 flex justify-between">
          <span>BUFFER: CONTINUOUS_CHUNKS</span>
          <span className="text-emerald-300">MODE: BIDIRECTIONAL</span>
        </div>
      </div>
    ),
  },
  {
    category: 'Hardware Telemetry',
    title: '8GB RAM Optimization Guard',
    subtitle: 'Local system constraint awareness',
    tag: 'Telemetry',
    icon: <Activity className="w-4 h-4 text-amber-400" />,
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-2 text-[11px]">
        <div className="flex justify-between text-[10px]">
          <span className="text-[#D7E2EA]/60">RESOURCE_OBJECTIVE</span>
          <span className="text-amber-400 font-semibold">8GB_RAM_ENVIRONMENT</span>
        </div>
        <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-[10px]">
          <span className="text-[#D7E2EA]/70">ALLOCATION_STRATEGY:</span>
          <span className="text-emerald-400 font-mono">LEAN_MEMORY_FOOTPRINT</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-1.5 rounded bg-white/5">
            <span className="text-[#D7E2EA]/50 block">EVENT_LOOP:</span>
            <span className="text-emerald-400">NON_BLOCKING</span>
          </div>
          <div className="p-1.5 rounded bg-white/5">
            <span className="text-[#D7E2EA]/50 block">LEAK_PROTECTION:</span>
            <span className="text-white font-medium">STATELESS_SESSIONS</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: 'Desktop Native',
    title: 'Tauri 2.0 & Rust Shell',
    subtitle: 'Cross-platform desktop integration',
    tag: 'Rust • Tauri',
    icon: <Cpu className="w-4 h-4 text-pink-400" />,
    badgeColor: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1.5 text-[11px]">
        <span className="text-pink-300 text-[10px]">#[tauri::command]</span>
        <p className="text-white/90 font-mono text-[11px]">
          async fn sync_telemetry(state: State&lt;&apos;_, AppState&gt;) -&gt; Result&lt;Telemetry, ()&gt;
        </p>
        <div className="flex justify-between text-[10px] text-[#D7E2EA]/60 pt-1">
          <span>ARCHITECTURE: TAURI_V2</span>
          <span className="text-emerald-400">NATIVE WEBVIEW RUNTIME</span>
        </div>
      </div>
    ),
  },
];

// Row 2: Full-Stack MERN, AI Speech, APIs & Writing Work
const ROW2_CARDS: ShowcaseTileProps[] = [
  {
    category: 'Collaborative Work',
    title: 'Next.js AI Speech Integration',
    subtitle: 'Speech-to-text & model execution pipeline',
    tag: 'Next.js • Web Speech',
    icon: <Mic className="w-4 h-4 text-cyan-400" />,
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1.5 text-[11px]">
        <div className="flex justify-between text-[10px] text-[#D7E2EA]/60">
          <span>MODULE: SpeechRecognitionController</span>
          <span className="text-cyan-300">COLLABORATIVE</span>
        </div>
        <p className="text-white/90 font-mono text-[11px]">
          const stream = await navigator.mediaDevices.getUserMedia(&#123; audio: true &#125;);
        </p>
        <div className="text-[10px] text-emerald-400 pt-1">
          ✓ Handled speech processing & model routing components
        </div>
      </div>
    ),
  },
  {
    category: 'Backend / APIs',
    title: 'FastAPI Contract Validation',
    subtitle: 'Typed Pydantic schemas & OpenAPI routes',
    tag: 'FastAPI',
    icon: <Server className="w-4 h-4 text-emerald-400" />,
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1 text-[11px]">
        <span className="text-emerald-400">@router.post(&quot;/v2/orchestrate/run&quot;)</span>
        <p className="text-white/85 text-[11px]">
          async def run_pipeline(payload: CognitivePayload) -&gt; PipelineResult:
        </p>
        <div className="flex justify-between text-[10px] text-[#D7E2EA]/60 pt-1">
          <span>SCHEMA: STRICT_TYPED</span>
          <span className="text-emerald-400">OPENAPI 3.1</span>
        </div>
      </div>
    ),
  },
  {
    category: 'Internship Work',
    title: 'MERN Stack Data Architecture',
    subtitle: 'MongoDB schema modeling & Express middleware',
    tag: 'MERN Stack',
    icon: <Database className="w-4 h-4 text-purple-400" />,
    badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1.5 text-[11px]">
        <div className="flex justify-between text-[10px] text-[#D7E2EA]/60">
          <span>DB: MongoDB Document Store</span>
          <span className="text-purple-300">INTERNSHIP_DEV</span>
        </div>
        <p className="text-white/90 font-mono text-[11px]">
          app.use(&apos;/api/v1&apos;, authMiddleware, dataRouter);
        </p>
        <div className="flex gap-2 text-[10px] pt-1 text-[#D7E2EA]/70">
          <span className="px-2 py-0.5 rounded bg-white/5">Express.js</span>
          <span className="px-2 py-0.5 rounded bg-white/5">Node.js</span>
          <span className="px-2 py-0.5 rounded bg-white/5">React</span>
        </div>
      </div>
    ),
  },
  {
    category: 'Testing & QA',
    title: 'Postman Contract Test Suite',
    subtitle: 'Automated API endpoint validation',
    tag: 'Postman • CI',
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-2 text-[11px]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-white font-medium">RUNNER: Contract Verification Suite</span>
          <span className="text-emerald-400 font-bold">ASSERTIONS_PASSED</span>
        </div>
        <div className="space-y-1 text-[10px] text-[#D7E2EA]/75">
          <div className="flex justify-between">
            <span>GET /v2/health</span>
            <span className="text-emerald-400">200 OK (HEALTHY)</span>
          </div>
          <div className="flex justify-between">
            <span>POST /v2/orchestrate/run</span>
            <span className="text-emerald-400">200 OK (SCHEMA_VALID)</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: 'System Philosophy',
    title: 'Architectural Decision Records',
    subtitle: 'Documenting architectural trade-offs',
    tag: 'System Design',
    icon: <FileCode2 className="w-4 h-4 text-amber-400" />,
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1 text-[11px]">
        <span className="text-amber-300 text-[10px]">ADR-004: Stateless Orchestration</span>
        <p className="text-white/85 text-[11px] leading-relaxed">
          &quot;Decouple in-memory conversational states to eliminate memory leaks and guarantee predictable performance.&quot;
        </p>
        <div className="text-[10px] text-emerald-400 pt-1">
          STATUS: ACCEPTED & IMPLEMENTED
        </div>
      </div>
    ),
  },
  {
    category: 'Creative Hub',
    title: 'Writing & Reflections',
    subtitle: 'Exploring engineering and creation',
    tag: 'aravhraj.stck.me',
    icon: <BookOpen className="w-4 h-4 text-purple-400" />,
    badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    content: (
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1.5 text-[11px]">
        <span className="text-purple-300 text-[10px]">PUBLICATION: STCK.ME</span>
        <p className="text-white/90 text-[11px] italic">
          &quot;Instead of only consuming, I started creating.&quot;
        </p>
        <p className="text-[10px] text-[#D7E2EA]/70">
          Reflections on technology, curiosity, software architecture, and creative balance.
        </p>
      </div>
    ),
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Tripled cards for seamless horizontal scrolling
  const row1Tripled = [...ROW1_CARDS, ...ROW1_CARDS, ...ROW1_CARDS];
  const row2Tripled = [...ROW2_CARDS, ...ROW2_CARDS, ...ROW2_CARDS];

  // Base negative shift on row 1 so that moving right (+translateX) never shows blank space on the left
  const row1Shift = offset - 200 - 1800;
  const row2Shift = -(offset - 200) - 200;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-32 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Lisabella-v2 & Cognitive Systems Architecture (Moves RIGHT on scroll) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translate3d(${row1Shift}px, 0px, 0px)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((card, i) => (
            <ShowcaseCard
              key={`row1-${i}`}
              category={card.category}
              title={card.title}
              subtitle={card.subtitle}
              tag={card.tag}
              badgeColor={card.badgeColor}
              icon={card.icon}
              content={card.content}
            />
          ))}
        </div>

        {/* Row 2: Full-Stack MERN, AI Speech, APIs & Writing (Moves LEFT on scroll) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translate3d(${row2Shift}px, 0px, 0px)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((card, i) => (
            <ShowcaseCard
              key={`row2-${i}`}
              category={card.category}
              title={card.title}
              subtitle={card.subtitle}
              tag={card.tag}
              badgeColor={card.badgeColor}
              icon={card.icon}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
