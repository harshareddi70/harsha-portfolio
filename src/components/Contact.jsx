import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Link2, MapPin, Download, ArrowRight } from 'lucide-react'
import { personal } from '../data/portfolio'

const items = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: '#22d3ee' },
  { icon: Link2, label: 'LinkedIn', value: 'Connect with me', href: personal.linkedin, color: '#60a5fa' },
  { icon: MapPin, label: 'Location', value: personal.location, href: null, color: '#2dd4bf' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-28 relative" ref={ref}
      style={{ background: 'linear-gradient(180deg, #020818 0%, #030d1f 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 mb-3">Let's connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-white">Get In Touch</h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            Open to Data Analyst roles | Open to relocation | No sponsorship required
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {items.map((item, i) => {
              const Icon = item.icon
              const Inner = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="group glass rounded-2xl p-5 text-center hover:glow-border transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon size={17} style={{ color: item.color }} />
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 mb-1">{item.label}</div>
                  <div className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors truncate">
                    {item.value}
                  </div>
                </motion.div>
              )
              return item.href ? (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">{Inner}</a>
              ) : (
                <div key={i}>{Inner}</div>
              )
            })}
          </div>

          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative rounded-3xl p-8 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(45,212,191,0.05) 50%, rgba(34,211,238,0.08) 100%)',
              border: '1px solid rgba(34,211,238,0.15)',
            }}
          >
            {/* Corner deco */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
              style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }} />

            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Interested in working together?
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Download my resume to learn more about my experience and accomplishments.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={personal.resume}
                download
                className="btn-glow flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-glow-md"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #2dd4bf)',
                  color: '#020818',
                }}
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="btn-glow flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all"
              >
                Send a message
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
