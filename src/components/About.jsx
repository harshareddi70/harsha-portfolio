import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart2, Database, TrendingUp, Cpu, MapPin } from 'lucide-react'
import { personal } from '../data/portfolio'

const highlights = [
  { icon: BarChart2, label: 'Dashboard Automation', desc: 'Real-time BI dashboards reducing manual reporting cycles by automating data flows end-to-end.' },
  { icon: Database, label: 'Data Quality', desc: 'SQL-based validation pipelines that catch anomalies before they reach business stakeholders.' },
  { icon: TrendingUp, label: 'Supply Chain Analytics', desc: 'Actionable insights from complex logistics, inventory, and demand-planning datasets.' },
  { icon: Cpu, label: 'Cloud Engineering', desc: 'Scalable data pipelines on Snowflake, Azure Data Factory, and Databricks.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 relative" ref={ref}
      style={{ background: 'linear-gradient(180deg, #020818 0%, #030d1f 50%, #020818 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-3">Who I am</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-white">About Me</h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Avatar */}
            <div className="relative inline-block mb-8">
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center font-display text-3xl font-bold text-gradient"
                style={{
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(45,212,191,0.1) 100%)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  boxShadow: '0 0 30px rgba(34,211,238,0.1)',
                }}
              >
                HV
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <h3 className="font-display text-2xl font-semibold text-white mb-5">
              Turning raw data into{' '}
              <span className="text-gradient">business clarity</span>
            </h3>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I'm <strong className="text-white">Harsha Vardhan Reddy Vippala</strong>, a Data Analyst
                based in <span className="text-cyan-400 font-mono text-sm">Troy, Michigan</span> with 4+ years
                of experience building scalable reporting and delivering data-driven insights across supply chain and business operations.
              </p>
              <p>
                At <strong className="text-white">Blue Yonder</strong>, I develop Power BI dashboards, automate reporting workflows, and build data pipelines that support supply chain and logistics decisions. I've driven a <strong className="text-white">60% reduction in manual reporting effort</strong> and a <strong className="text-white">12% reduction in distribution costs</strong>.
              </p>
              <p>
                My expertise spans SQL, Power BI, Tableau, Python, and Snowflake — focused on data quality,
                clean data models, and self-service dashboards that teams can actually rely on.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-full border border-white/10 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/40 hover:border-[#0A66C2]/50 transition-all"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="btn-glow flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-full border border-cyan-400/25 bg-cyan-400/10 hover:bg-cyan-400/20 transition-all"
              >
                Email Me
              </a>
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group glass rounded-2xl p-5 hover:glow-border transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(45,212,191,0.1) 100%)',
                      border: '1px solid rgba(34,211,238,0.15)',
                    }}
                  >
                    <Icon size={17} className="text-cyan-400" />
                  </div>
                  <div className="font-semibold text-white text-sm mb-1.5">{h.label}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{h.desc}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
