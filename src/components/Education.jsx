import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react'
import { education } from '../data/portfolio'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-28 relative" ref={ref}
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
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-3">Academic</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-white">Education</h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex gap-6"
            >
              {/* Timeline icon */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(45,212,191,0.15) 100%)',
                    border: '1px solid rgba(34,211,238,0.3)',
                    boxShadow: '0 0 20px rgba(34,211,238,0.15)',
                  }}
                >
                  <GraduationCap size={15} className="text-cyan-400" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 pb-4">
                <div
                  className="glass rounded-2xl p-6 hover:glow-border transition-all duration-400"
                  style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-gradient font-semibold text-sm mt-0.5">{edu.school}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <Calendar size={11} className="text-cyan-400/50" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <MapPin size={11} className="text-cyan-400/50" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="flex items-start gap-2.5 pt-4 border-t border-white/5">
                    <BookOpen size={13} className="text-cyan-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-600 uppercase tracking-wider">Relevant Coursework</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="px-3 py-1 rounded-full text-[11px] font-mono"
                            style={{
                              background: 'rgba(34,211,238,0.06)',
                              color: '#67e8f9',
                              border: '1px solid rgba(34,211,238,0.12)',
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
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
