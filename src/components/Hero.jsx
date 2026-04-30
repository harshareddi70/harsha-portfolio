import { motion } from 'framer-motion'
import { MapPin, Download, ArrowRight, ChevronDown } from 'lucide-react'
import { personal } from '../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '50+', label: 'Dashboards Built' },
  { value: '3', label: 'Cloud Platforms' },
  { value: '∞', label: 'Data Points Processed' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-bg"
      style={{ background: 'radial-gradient(ellipse 120% 80% at 60% 40%, #061228 0%, #020818 70%)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)' }} />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-0 w-32 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
      <div className="absolute top-24 left-0 h-32 w-px bg-gradient-to-b from-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-8">
              <span className="w-8 h-px bg-cyan-400" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-cyan-400">
                Available for opportunities
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <h1 className="font-display leading-[1.0] mb-4">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-white">
                  Harsha Vardhan
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-gradient">
                  Reddy Vippala
                </span>
              </h1>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-cyan-400/60" />
              <span className="font-display text-xl md:text-2xl font-semibold text-slate-300">
                {personal.title}
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="flex items-center gap-1.5 mb-6">
              <MapPin size={13} className="text-cyan-400" />
              <span className="text-sm text-slate-500 font-mono">{personal.location}</span>
            </motion.div>

            <motion.p {...fadeUp(0.45)} className="text-slate-400 text-base leading-relaxed max-w-lg mb-10">
              {personal.summary}
            </motion.p>

            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-glow group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-300 hover:shadow-glow-md"
                style={{ color: '#020818' }}
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={personal.resume}
                download
                className="btn-glow flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/40 transition-all duration-300"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Profile orb + stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            {/* Glowing profile circle */}
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, rgba(34,211,238,0.4) 25%, transparent 50%, rgba(45,212,191,0.4) 75%, transparent 100%)',
                  padding: '2px',
                  borderRadius: '50%',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              {/* Second ring */}
              <div
                className="absolute -inset-4 rounded-full opacity-30"
                style={{
                  background: 'conic-gradient(from 180deg, transparent 0%, rgba(34,211,238,0.2) 30%, transparent 60%)',
                  animation: 'spin 15s linear infinite reverse',
                }}
              />
              {/* Glow bg */}
              <div
                className="absolute -inset-8 rounded-full opacity-40"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)' }}
              />
              {/* Profile placeholder */}
              <div
                className="relative w-52 h-52 rounded-full flex items-center justify-center glass-strong"
                style={{
                  border: '1px solid rgba(34,211,238,0.25)',
                  boxShadow: '0 0 40px rgba(34,211,238,0.2), inset 0 0 40px rgba(34,211,238,0.05)',
                }}
              >
                <span className="font-display text-5xl font-bold text-gradient">HV</span>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="glass rounded-xl p-4 text-center hover:glow-border transition-all duration-300 group"
                >
                  <div className="font-display text-2xl font-bold text-gradient mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Mobile stats */}
      <div className="lg:hidden px-6 pb-10 relative z-10">
        <div className="grid grid-cols-2 gap-3">
          {stats.slice(0,4).map((s,i) => (
            <div key={i} className="glass rounded-xl p-4 text-center">
              <div className="font-display text-xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-cyan-400 transition-colors z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={14} />
      </motion.a>
    </section>
  )
}
