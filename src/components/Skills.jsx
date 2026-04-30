import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'

const skillColors = {
  'Power BI': 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/25 text-yellow-300',
  Tableau: 'from-orange-500/20 to-orange-600/10 border-orange-500/25 text-orange-300',
  Excel: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/25 text-emerald-300',
  DAX: 'from-amber-500/20 to-amber-600/10 border-amber-500/25 text-amber-300',
  SQL: 'from-blue-500/20 to-blue-600/10 border-blue-500/25 text-blue-300',
  Python: 'from-green-500/20 to-green-600/10 border-green-500/25 text-green-300',
  Pandas: 'from-violet-500/20 to-violet-600/10 border-violet-500/25 text-violet-300',
  PySpark: 'from-rose-500/20 to-rose-600/10 border-rose-500/25 text-rose-300',
  'Azure ML': 'from-sky-500/20 to-sky-600/10 border-sky-500/25 text-sky-300',
  Snowflake: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/25 text-cyan-300',
  'Azure Data Factory': 'from-blue-400/20 to-blue-500/10 border-blue-400/25 text-blue-200',
  Databricks: 'from-red-500/20 to-red-600/10 border-red-500/25 text-red-300',
  Kafka: 'from-teal-500/20 to-teal-600/10 border-teal-500/25 text-teal-300',
  'Azure Synapse': 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/25 text-indigo-300',
}

const proficiency = {
  'Power BI': 92, Tableau: 80, Excel: 90, DAX: 82,
  SQL: 95, Python: 85, Pandas: 83, PySpark: 78,
}

function Badge({ name, delay, inView }) {
  const cls = skillColors[name] || 'from-slate-500/20 to-slate-600/10 border-slate-500/25 text-slate-300'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className={`group relative px-3.5 py-2 rounded-full bg-gradient-to-r ${cls} border text-xs font-medium font-mono cursor-default transition-all duration-300 hover:scale-105 hover:shadow-glow-sm`}
    >
      {name}
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 relative" ref={ref} style={{ background: '#020818' }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-3">Tech stack</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-white">Skills & Tools</h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow-border transition-all duration-500"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-white text-base">{group.category}</h3>
                <span className="ml-auto text-xs font-mono text-slate-600">
                  {group.items.length} tools
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {group.items.map((skill, si) => (
                  <Badge key={skill} name={skill} delay={0.1 + gi * 0.08 + si * 0.05} inView={inView} />
                ))}
              </div>

              {/* Progress bars for primary skills */}
              {gi < 2 && (
                <div className="space-y-3 pt-3 border-t border-white/5">
                  {group.items.filter(s => proficiency[s]).slice(0, 3).map((skill) => (
                    <div key={skill}>
                      <div className="flex justify-between text-[11px] mb-1.5">
                        <span className="font-mono text-slate-500">{skill}</span>
                        <span className="text-cyan-400/70">{proficiency[skill]}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, #22d3ee, #2dd4bf)' }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${proficiency[skill]}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.4 + gi * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
