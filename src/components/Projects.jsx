import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FolderOpen, ExternalLink, GitBranch } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 relative" ref={ref}
      style={{ background: 'linear-gradient(180deg, #020818 0%, #030d1f 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-white">Featured Projects</h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <div
              className="rounded-3xl p-12 text-center"
              style={{
                background: 'rgba(34,211,238,0.03)',
                border: '1px dashed rgba(34,211,238,0.2)',
                boxShadow: '0 0 60px rgba(34,211,238,0.04)',
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.15)',
                }}
              >
                <FolderOpen size={26} className="text-cyan-400" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Projects Coming Soon
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Real-world data analytics case studies are being curated and will be published here shortly.
                Check back soon.
              </p>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
                style={{ background: 'rgba(34,211,238,0.08)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.15)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Under construction
              </span>
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:glow-border transition-all duration-400 hover:-translate-y-1"
              >
                {/* Top accent bar */}
                <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-transparent" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-white text-lg leading-snug">{project.title}</h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.github && (
                        <a href={project.github} className="text-slate-500 hover:text-white transition-colors">
                          <GitBranch size={15} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} className="text-slate-500 hover:text-cyan-400 transition-colors">
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech?.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-mono"
                        style={{ background: 'rgba(34,211,238,0.06)', color: '#67e8f9', border: '1px solid rgba(34,211,238,0.12)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.impact && (
                    <div className="flex items-center gap-2 text-xs text-cyan-400/80 font-mono border-t border-white/5 pt-3">
                      <span className="text-green-400">↑</span>
                      {project.impact}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
