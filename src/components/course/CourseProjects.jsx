import { motion } from 'framer-motion';
import { useState } from 'react';

const PROJECTS = [
  {
    title: 'AI Resume Analyzer',
    desc: 'Parses resumes against job descriptions, scores fit, and suggests improvements using LLMs.',
    tech: ['Python', 'OpenAI', 'FastAPI', 'React'],
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=380&fit=crop',
    color: '#834DFB',
  },
  {
    title: 'AI Interview Bot',
    desc: 'Voice-enabled interview simulator that generates contextual questions and evaluates responses.',
    tech: ['LangChain', 'Whisper', 'TTS', 'RAG'],
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=380&fit=crop',
    color: '#4A1FB8',
  },
  {
    title: 'Autonomous AI Agent',
    desc: 'Multi-step agent that browses, searches, and executes tasks with tool use and memory.',
    tech: ['LangGraph', 'Tool Use', 'Memory', 'Serper'],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=380&fit=crop',
    color: '#10A37F',
  },
  {
    title: 'Business Automation System',
    desc: 'End-to-end workflow automation: emails, CRM updates, reports — all powered by AI.',
    tech: ['n8n', 'Python', 'OpenAI', 'Zapier'],
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=380&fit=crop',
    color: '#FF6B35',
  },
];

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-img-wrap">
        <motion.img
          src={project.img}
          alt={project.title}
          className="project-img img-graded"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.div
          className="project-overlay"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-overlay-icon" style={{ background: project.color }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </div>
          <span className="project-overlay-label">View Project</span>
        </motion.div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tech.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function CourseProjects() {
  return (
    <section className="section projects-section">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>05 — Projects</div>
            <h2 className="display h2">What You'll <em>Build</em></h2>
          </div>
          <p className="lede">
            Real projects, real deployment, real GitHub commits.
            Not toy exercises — things you can demo in interviews.
          </p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
