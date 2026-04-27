import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const STAGES = [
  {
    week: 'Weeks 1–2',
    title: 'AI Foundations',
    desc: 'Python fundamentals, APIs, environment setup, and the mental model of modern AI systems.',
    tags: ['Python', 'APIs', 'OpenAI SDK'],
  },
  {
    week: 'Weeks 3–4',
    title: 'Prompt Engineering',
    desc: 'From basic prompts to advanced techniques — chain-of-thought, few-shot, structured outputs.',
    tags: ['Prompt Design', 'Structured Output', 'JSON Mode'],
  },
  {
    week: 'Weeks 5–7',
    title: 'LangChain + RAG',
    desc: 'Build retrieval-augmented generation systems, vector databases, and document pipelines.',
    tags: ['LangChain', 'Pinecone', 'Embeddings', 'FAISS'],
  },
  {
    week: 'Weeks 8–9',
    title: 'Agents + Memory',
    desc: 'Create autonomous AI agents with tools, memory layers, and multi-step reasoning.',
    tags: ['LangGraph', 'Memory', 'Tool Use', 'ReAct'],
  },
  {
    week: 'Weeks 10–11',
    title: 'Capstone Projects',
    desc: 'Build 4 end-to-end production projects under mentorship — resume analyzer, interview bot, and more.',
    tags: ['Full Projects', 'GitHub', 'Portfolio'],
  },
  {
    week: 'Week 12',
    title: 'Deployment + Career Prep',
    desc: 'Deploy on cloud, prep your portfolio, mock interviews, and connect with hiring partners.',
    tags: ['FastAPI', 'Docker', 'Resume', 'Mock Interviews'],
  },
];

export default function CourseTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.3'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="section timeline-section" ref={ref}>
      <div className="wrap">
        <motion.div
          className="section-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow eyebrow-plain" style={{ justifyContent: 'center', display: 'flex', marginBottom: 16 }}>04 — The Journey</div>
          <h2 className="display h2" style={{ textAlign: 'center' }}>
            Your 12-Week Career <em>Transformation</em>
          </h2>
        </motion.div>

        <div className="timeline-track">
          <div className="timeline-line-bg" />
          <motion.div className="timeline-line-fill" style={{ height: lineHeight }} />

          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.title}
              className={`timeline-stage ${i % 2 === 0 ? 'stage-left' : 'stage-right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="stage-dot">
                <motion.div
                  className="stage-dot-inner"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + 0.05 * i }}
                />
              </div>
              <motion.div
                className="stage-card"
                whileHover={{ scale: 1.02, borderColor: 'var(--brand-tint)', boxShadow: '0 0 0 3px var(--brand-soft), 0 8px 32px rgba(131,77,251,0.1)' }}
                transition={{ duration: 0.25 }}
              >
                <div className="stage-week">{stage.week}</div>
                <h3 className="stage-title">{stage.title}</h3>
                <p className="stage-desc">{stage.desc}</p>
                <div className="stage-tags">
                  {stage.tags.map(t => <span key={t} className="stage-tag tag-shimmer">{t}</span>)}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
