import { motion } from 'framer-motion';

const NODES = [
  { id: 'input', label: 'User Input', x: 60, y: 120, color: '#834DFB' },
  { id: 'llm', label: 'LLM Router', x: 240, y: 60, color: '#4A1FB8' },
  { id: 'rag', label: 'RAG Pipeline', x: 240, y: 180, color: '#10A37F' },
  { id: 'agent', label: 'AI Agent', x: 420, y: 120, color: '#FF6B35' },
  { id: 'tools', label: 'Tool Layer', x: 420, y: 220, color: '#FFB38A' },
  { id: 'output', label: 'Output API', x: 600, y: 120, color: '#834DFB' },
];

const EDGES = [
  { from: 'input', to: 'llm' },
  { from: 'input', to: 'rag' },
  { from: 'llm', to: 'agent' },
  { from: 'rag', to: 'agent' },
  { from: 'agent', to: 'tools' },
  { from: 'agent', to: 'output' },
];

function getPos(id) { return NODES.find(n => n.id === id); }

const POINTS = [
  'Production API integrations with OpenAI, Anthropic, and Gemini',
  'Automation pipelines that run 24/7 without human intervention',
  'AI systems with persistent memory across conversations',
  'Real enterprise use cases — not academic exercises',
];

export default function CourseIndustry() {
  return (
    <section className="section industry-section">
      <div className="wrap industry-inner">
        {/* LEFT */}
        <motion.div
          className="industry-left"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>06 — Industry Relevance</div>
          <h2 className="display h2" style={{ marginBottom: 20 }}>
            Built Around Real<br /><em>Industry Workflows</em>
          </h2>
          <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 32, fontSize: 17 }}>
            Every week mirrors how AI teams at startups and enterprises actually work.
            You're not learning theory — you're learning the workflow.
          </p>
          <ul className="industry-points">
            {POINTS.map((p, i) => (
              <motion.li
                key={p}
                className="industry-point"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <div className="ipoint-dot" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — flow diagram */}
        <motion.div
          className="industry-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="flow-diagram">
            <svg width="660" height="300" viewBox="0 0 660 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
              {EDGES.map((e, i) => {
                const from = getPos(e.from);
                const to = getPos(e.to);
                return (
                  <motion.line
                    key={i}
                    x1={from.x + 50} y1={from.y + 20}
                    x2={to.x} y2={to.y + 20}
                    stroke="var(--border-strong)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                  />
                );
              })}
              {NODES.map((n, i) => (
                <motion.g
                  key={n.id}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  style={{ transformOrigin: `${n.x + 50}px ${n.y + 20}px` }}
                >
                  <rect x={n.x} y={n.y} width={100} height={40} rx={8}
                    fill={n.color + '18'} stroke={n.color + '60'} strokeWidth="1.5" />
                  <text x={n.x + 50} y={n.y + 25} textAnchor="middle"
                    fontSize="11" fontFamily="var(--f-mono)" fill={n.color} fontWeight="500">
                    {n.label}
                  </text>
                </motion.g>
              ))}
            </svg>
            <div className="flow-caption">Typical AI system architecture — built week by week</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
