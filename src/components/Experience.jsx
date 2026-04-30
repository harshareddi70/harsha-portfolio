import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-28 relative" ref={ref} style={{ background: '#020818' }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-3">Career</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-white">Experience</h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex gap-6"
            >
              {/* Timeline */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(45,212,191,0.15) 100%)',
                    border: '1px solid rgba(34,211,238,0.3)',
                    boxShadow: '0 0 20px rgba(34,211,238,0.15)',
                  }}
                >
                  <Briefcase size={15} className="text-cyan-400" />
                </div>
                <div className="flex-1 w-px mt-3" style={{ background: 'linear-gradient(to bottom, rgba(34,211,238,0.3), transparent)' }} />
              </div>

              {/* Card */}
              <div className="flex-1 pb-12">
                <div
                  className="glass rounded-2xl p-6 hover:glow-border transition-all duration-400"
                  style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-gradient font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <Calendar size={11} className="text-cyan-400/50" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <MapPin size={11} className="text-cyan-400/50" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{exp.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, hi) => (
                      <motion.div
                        key={hi}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + hi * 0.08, duration: 0.5 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 size={13} className="text-cyan-400/70 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-400">{h}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[11px] font-mono transition-all hover:scale-105"
                        style={{
                          background: 'rgba(34,211,238,0.06)',
                          color: '#67e8f9',
                          border: '1px solid rgba(34,211,238,0.12)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
