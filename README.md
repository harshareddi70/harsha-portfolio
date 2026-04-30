# Harsha Vardhan Reddy Vippala — Portfolio

React + Vite + Tailwind CSS + Framer Motion

## Local Development

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build

```bash
npm run build
```

## Deploy on Vercel

1. Push to GitHub
2. Import repo on vercel.com (auto-detects Vite)
3. Click Deploy — vercel.json handles SPA routing

## Editing Content

All personal data: `src/data/portfolio.js`
- Update email, LinkedIn URL
- Add projects to `projects` array
- Edit experience

## Resume

Place PDF at `public/resume.pdf` — download button links automatically.

## Folder Structure

```
src/
  components/  Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
  data/        portfolio.js  ← edit here
  App.jsx
  main.jsx
  index.css
vercel.json    SPA routing
```
