import { motion, useMotionValue, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';

const PHASES = [
  {
    num: '01', title: 'Foundations', weeks: 'Wk 1–2',
    desc: 'Python, APIs & AI basics',
    tags: ['Python', 'APIs'],
    top: true, dotX: 100, dotY: 200,
  },
  {
    num: '02', title: 'Prompting & Automation', weeks: 'Wk 3–4',
    desc: 'Advanced prompting & pipelines',
    tags: ['OpenAI', 'n8n'],
    top: false, dotX: 300, dotY: 520,
  },
  {
    num: '03', title: 'AI Workflows', weeks: 'Wk 5–7',
    desc: 'RAG, LangChain & vector search',
    tags: ['LangChain', 'RAG'],
    top: true, dotX: 500, dotY: 200,
  },
  {
    num: '04', title: 'Agents & Systems', weeks: 'Wk 8–9',
    desc: 'Multi-agent architectures',
    tags: ['LangGraph', 'Memory'],
    top: false, dotX: 700, dotY: 520,
  },
  {
    num: '05', title: 'Build & Deploy', weeks: 'Wk 10–11',
    desc: 'Ship your capstone end-to-end',
    tags: ['FastAPI', 'React'],
    top: true, dotX: 900, dotY: 200,
  },
  {
    num: '06', title: 'Career Launch', weeks: 'Wk 12',
    desc: 'Portfolio, interviews & offers',
    tags: ['Portfolio', 'Hiring'],
    top: false, dotX: 1100, dotY: 520,
  },
];

const VB_W = 1200;
const VB_H = 720;
const TOP_Y = 200;
const BOT_Y = 520;

const ROAD_PATH = [
  `M 100,${TOP_Y}`,
  `C 200,${TOP_Y} 200,${BOT_Y} 300,${BOT_Y}`,
  `C 400,${BOT_Y} 400,${TOP_Y} 500,${TOP_Y}`,
  `C 600,${TOP_Y} 600,${BOT_Y} 700,${BOT_Y}`,
  `C 800,${BOT_Y} 800,${TOP_Y} 900,${TOP_Y}`,
  `C 1000,${TOP_Y} 1000,${BOT_Y} 1100,${BOT_Y}`,
].join(' ');

// One full gait cycle: 4 keyframes map to t = [0, 0.25, 0.5, 0.75, 1]
// Left leg forward at t=0  → right arm forward (cross-body) at t=0
// Right leg forward at t=0.5 → left arm forward at t=0.5
const TIMES = [0, 0.25, 0.5, 0.75, 1];
const CYCLE_S = 0.78; // seconds per full gait cycle (≈ 77 steps/min, natural pace)

function WalkingCharacter({ walking }) {
  const loop = {
    duration: CYCLE_S,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'linear',
    times: TIMES,
  };

  // when not walking — arms down, legs together, still
  const still = { duration: 0.4, ease: 'easeOut' };

  return (
    <svg
      width="38" height="54"
      viewBox="-19 -44 38 54"
      style={{ overflow: 'visible', display: 'block' }}
      aria-hidden="true"
    >
      {/* ground shadow — squishes when foot plants */}
      <motion.ellipse
        cx="0" cy="10" rx="9" ry="2.8"
        fill="rgba(131,77,251,0.16)"
        animate={walking ? { rx: [9, 6, 9, 6, 9] } : { rx: 9 }}
        transition={walking ? loop : still}
      />

      {/* body group — bobs up on mid-stance, sways side to side */}
      <motion.g
        animate={walking
          ? { y: [0, -2.5, 0, -2.5, 0], rotate: [-1.5, 0, 1.5, 0, -1.5] }
          : { y: 0, rotate: 0 }}
        transition={walking ? loop : still}
      >
        {/* head */}
        <circle cx="0" cy="-34" r="8" fill="#834DFB" />
        {/* white eyes so it reads as a face */}
        <circle cx="-3"  cy="-35" r="1.4" fill="white" />
        <circle cx="3"   cy="-35" r="1.4" fill="white" />

        {/* torso */}
        <rect x="-5.5" y="-25" width="11" height="14" rx="3.5" fill="#834DFB" />

        {/* ── Left arm (back when left-leg forward, forward at t=0.5) ── */}
        <motion.line
          x1="-5.5" y1="-21"
          animate={walking
            ? { x2: [-11, -5, 10, -5, -11], y2: [-13, -9, -13, -9, -13] }
            : { x2: -8,  y2: -11 }}
          transition={walking ? loop : still}
          stroke="#834DFB" strokeWidth="3.5" strokeLinecap="round"
        />

        {/* ── Right arm (forward at t=0, back at t=0.5) ── */}
        <motion.line
          x1="5.5" y1="-21"
          animate={walking
            ? { x2: [11, 5, -10, 5, 11], y2: [-13, -9, -13, -9, -13] }
            : { x2: 8,  y2: -11 }}
          transition={walking ? loop : still}
          stroke="#834DFB" strokeWidth="3.5" strokeLinecap="round"
        />

        {/* ── Left leg: forward(+x) at t=0 → lifts mid-swing → back(-x) at t=0.5 ── */}
        {/* foot arc: y goes from ground(8) → lifted(1) → ground(8) twice per cycle  */}
        <motion.line
          x1="-2.5" y1="-11"
          animate={walking
            ? { x2: [8, 0, -8, 0, 8], y2: [8, 1, 8, 1, 8] }
            : { x2: -3, y2: 8 }}
          transition={walking ? loop : still}
          stroke="#834DFB" strokeWidth="4.5" strokeLinecap="round"
        />

        {/* ── Right leg: back(-x) at t=0 → lifts → forward(+x) at t=0.5 ── */}
        <motion.line
          x1="2.5" y1="-11"
          animate={walking
            ? { x2: [-8, 0, 8, 0, -8], y2: [8, 1, 8, 1, 8] }
            : { x2: 3, y2: 8 }}
          transition={walking ? loop : still}
          stroke="#834DFB" strokeWidth="4.5" strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
}

function RoadCard({ phase, index }) {
  const leftPct = (phase.dotX / VB_W) * 100;
  const cardStyle = {
    position: 'absolute',
    width: 176,
    left: `${leftPct}%`,
    transform: 'translateX(-50%)',
    ...(phase.top
      ? { bottom: `${((VB_H - phase.dotY + 28) / VB_H) * 100}%` }
      : { top:    `${((phase.dotY + 28) / VB_H) * 100}%` }
    ),
  };

  return (
    <motion.div
      className="cj-road-card"
      style={cardStyle}
      initial={{ opacity: 0, y: phase.top ? -14 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay: 0.5 + index * 0.18 }}
    >
      <div className="cj-road-num">{phase.num}</div>
      <div className="cj-road-weeks">{phase.weeks}</div>
      <div className="cj-road-title">{phase.title}</div>
      <p className="cj-road-desc">{phase.desc}</p>
      <div className="cj-road-tags">
        {phase.tags.map(t => <span key={t} className="cj-tag">{t}</span>)}
      </div>
    </motion.div>
  );
}

function MobilePhase({ phase, index }) {
  return (
    <motion.div
      className="cj-mobile-phase"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.08 }}
    >
      <div className="cj-mobile-dot" />
      <div className="cj-mobile-body">
        <div className="cj-mobile-meta">{phase.num} · {phase.weeks}</div>
        <div className="cj-mobile-title">{phase.title}</div>
        <p className="cj-mobile-desc">{phase.desc}</p>
        <div className="cj-road-tags" style={{ marginTop: 8 }}>
          {phase.tags.map(t => <span key={t} className="cj-tag">{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function CourseJourney() {
  const sectionRef = useRef(null);
  const roadRef    = useRef(null);
  const pathRef    = useRef(null);
  const dimsRef    = useRef({ w: 0, h: 0 });
  const charX      = useMotionValue(0);
  const charY      = useMotionValue(0);
  const [walking, setWalking] = useState(false);

  // trigger once when 30 % of the section enters the viewport
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  // compute character position from a 0–1 progress value
  const placeChar = useCallback((v) => {
    const path = pathRef.current;
    if (!path) return;
    const { w, h } = dimsRef.current;
    if (!w || !h) return;
    const pt = path.getPointAtLength(Math.max(0, Math.min(1, v)) * path.getTotalLength());
    charX.set((pt.x / VB_W) * w);
    charY.set((pt.y / VB_H) * h);
  }, [charX, charY]);

  // cache container dimensions; re-place character on resize
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (!roadRef.current) return;
      dimsRef.current = {
        w: roadRef.current.offsetWidth,
        h: roadRef.current.offsetHeight,
      };
      placeChar(0); // keep at start until animation fires
    });
    if (roadRef.current) ro.observe(roadRef.current);
    return () => ro.disconnect();
  }, [placeChar]);

  // when section enters view → animate progress 0 → 1
  useEffect(() => {
    if (!inView) return;
    placeChar(0);   // snap to start first
    setWalking(true);

    const ctrl = animate(0, 1, {
      duration: 8,
      ease: 'linear',           // constant speed = natural walking feel
      onUpdate: placeChar,
      onComplete: () => setWalking(false),
    });

    return ctrl.stop;
  }, [inView, placeChar]);

  return (
    <section className="cp-section cp-alt" ref={sectionRef}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="cp-eyebrow">04 — The Path</div>
          <h2 className="cp-h2">
            Not a curriculum.<br /><em>A transformation arc.</em>
          </h2>
          <p className="cp-lede">
            Six phases. Twelve weeks. One destination: job-ready.
          </p>
        </motion.div>

        {/* ── Desktop road ──────────────────────────────── */}
        <div className="cj-road-wrap" ref={roadRef}>

          {/* road SVG */}
          <svg
            className="cj-road-svg"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* track shadow */}
            <path d={ROAD_PATH} stroke="var(--border)" strokeWidth="4" strokeLinecap="round" />

            {/* animated dashed line */}
            <motion.path
              d={ROAD_PATH}
              stroke="var(--brand)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="10 7"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.6, ease: 'easeInOut', delay: 0.1 }}
            />

            {/* invisible path that the character follows (same d, used for getPointAtLength) */}
            <path
              ref={pathRef}
              d={ROAD_PATH}
              stroke="none"
              fill="none"
              style={{ visibility: 'hidden' }}
            />

            {/* milestone dots */}
            {PHASES.map((ph, i) => (
              <g key={ph.num}>
                <motion.circle
                  cx={ph.dotX} cy={ph.dotY} r="15"
                  fill="var(--canvas)"
                  stroke="var(--brand-tint)"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.5 + i * 0.18 }}
                />
                <motion.circle
                  cx={ph.dotX} cy={ph.dotY} r="7"
                  fill="var(--brand)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.62 + i * 0.18 }}
                />
              </g>
            ))}
          </svg>

          {/* walking character — positioned via scroll-driven motion values */}
          <div className="cj-walker-anchor">
            <motion.div
              style={{ x: charX, y: charY }}
              className="cj-walker"
            >
              <WalkingCharacter walking={walking} />
            </motion.div>
          </div>

          {/* phase cards */}
          {PHASES.map((ph, i) => (
            <RoadCard key={ph.num} phase={ph} index={i} />
          ))}
        </div>

        {/* ── Mobile vertical timeline ──────────────────── */}
        <div className="cj-mobile-list">
          {PHASES.map((ph, i) => (
            <MobilePhase key={ph.num} phase={ph} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
