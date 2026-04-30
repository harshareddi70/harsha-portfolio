import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative py-8 border-t text-center" style={{ background: '#020818', borderColor: 'rgba(255,255,255,0.05)' }}>
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()}{' '}
        <span className="text-slate-400 font-medium">{personal.name}</span>
        <span className="mx-2 text-slate-700">·</span>
        <span className="text-slate-600">{personal.location}</span>
      </p>
      <p className="text-xs text-slate-800 mt-1 font-mono">React · Vite · Tailwind · Framer Motion</p>
    </footer>
  )
}
