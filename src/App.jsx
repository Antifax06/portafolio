import { useEffect, useState } from 'react'
import { site, text, skills, projects, interests } from './config.js'

const P = {
  code: 'm16 18 6-6-6-6M8 6l-6 6 6 6',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
  server: 'M2 3h20v7H2zM2 14h20v7H2zM6 6.5h.01M6 17.5h.01',
  db: 'M3 5c0-1.7 4-3 9-3s9 1.3 9 3-4 3-9 3-9-1.3-9-3zM3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3',
  tool: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z',
  spark: 'm12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z',
  bot: 'M5 8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM12 8V4M9 14h.01M15 14h.01M9 17h6',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  ext: 'M7 17 17 7M8 7h9v9',
  github: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4M9 18c-4.51 2-5-2-7-2',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
}
const Icon = ({ n, size = 20 }) => (
  <svg className="ico" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d={P[n]} />
  </svg>
)
const SKILL_ICONS = ['code', 'globe', 'server', 'db', 'tool']
const repoPath = (u) => u.replace('https://github.com/', '')
const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

// Ilustraciones CSS: solo usan datos verificados en los README; el texto es genérico.
function Visual({ kind }) {
  const bars = (n) => Array.from({ length: n }, (_, i) => <i key={i} style={{ width: `${88 - ((i * 17) % 40)}%` }} />)
  return (
    <div className={`vis vis-${kind}`} aria-hidden="true">
      <div className="vis-bar"><b /><b /><b /></div>
      {kind === 'auth' && (
        <div className="vis-body auth">
          <span className="fld" /><span className="fld" /><span className="vbtn" />
          <div className="vchips"><em>JWT</em><em>6 dígitos / digits</em><em>5×</em></div>
        </div>
      )}
      {kind === 'store' && (
        <div className="vis-body store">
          {[0, 1, 2].map((k) => <div key={k} className="ph"><span className="screen" /><div className="lines">{bars(2)}</div></div>)}
        </div>
      )}
      {kind === 'table' && (
        <div className="vis-body table">
          {[0, 1, 2, 3, 4].map((k) => <div key={k} className={`row${k === 0 ? ' head' : ''}`}><i /><i /><i /></div>)}
        </div>
      )}
      {kind === 'terminal' && (
        <div className="vis-body term">
          <p><span>$</span> <i style={{ width: '40%' }} /></p>
          {[70, 55, 62].map((w, k) => <p key={k}><span>{k === 1 ? '[x]' : '[ ]'}</span> <i style={{ width: `${w}%` }} /></p>)}
        </div>
      )}
    </div>
  )
}

function Card({ p, t, lang, big }) {
  const c = p[lang]
  return (
    <article className={`card reveal${big ? ' big' : ''}`} onMouseMove={spot}>
      <div className="card-vis">
        {p.image ? <img src={p.image} alt={`${p.name}: ${c.description}`} loading="lazy" width="640" height="360" /> : <Visual kind={p.visual} />}
        {!p.image && <p className="illus">{t.illus}</p>}
      </div>
      <div className="card-body">
        <p className="kind">{p.kind[lang]}</p>
        <h3>{p.name}</h3>
        <p className="summary">{c.description}</p>
        <dl>
          <dt>{t.problem}</dt><dd>{c.problem}</dd>
          <dt>{t.features}</dt>
          <dd><ul>{c.features.map((f) => <li key={f}>{f}</li>)}</ul></dd>
        </dl>
        <ul className="tags" aria-label={t.stack}>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
        <div className="actions">
          <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${t.code}: ${p.name}`}>
            <Icon n="github" size={18} />{t.code}
          </a>
          {p.demo && (
            <a className="btn ghost" href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${t.demo}: ${p.name}`}>
              {t.demo}<Icon n="ext" size={16} />
            </a>
          )}
        </div>
        <p className="repo"><code>{repoPath(p.repo)}</code>{!p.demo && <span> · {t.noDemo}</span>}</p>
      </div>
    </article>
  )
}

function readLang() {
  try { const v = localStorage.getItem('lang'); if (v === 'es' || v === 'en') return v } catch { /* sin almacenamiento */ }
  return 'es'
}

export default function App() {
  const [lang, setLang] = useState(readLang)
  const [open, setOpen] = useState(false)
  const t = text[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.pageTitle
    const m = document.querySelector('meta[name="description"]')
    if (m) m.setAttribute('content', t.pageDesc)
    try { localStorage.setItem('lang', lang) } catch { /* ignorar */ }
  }, [lang, t])

  useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')]
    const root = document.documentElement
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.classList.add('js')
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => { io.disconnect(); root.classList.remove('js') }
  }, [])

  const links = [['sobre-mi', t.nav.about], ['habilidades', t.nav.skills], ['proyectos', t.nav.projects], ['contacto', t.nav.contact]]
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <a className="skip" href="#main">{t.skip}</a>
      <header className="top">
        <nav aria-label={t.navLabel}>
          <a className="logo" href="#inicio" aria-label={site.name}>MPA<span>.</span></a>
          <button type="button" className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            {t.menu}
          </button>
          <ul id="menu" className={open ? 'open' : ''}>
            {links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>)}
          </ul>
          <button type="button" className="lang" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t.langLabel}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
      </header>

      <main id="main">
        <section id="inicio" className="hero wrap" aria-labelledby="h-nombre">
          <div className="hero-text">
            <p className="status"><span className="dot" />{t.status}</p>
            <h1 id="h-nombre"><span className="hello">{t.hello}</span>{site.name}</h1>
            <p className="role">{t.role} <span>· Junior</span></p>
            <p className="lead">{t.intro}</p>
            <div className="actions">
              <a className="btn" href="#proyectos">{t.seeProjects}<Icon n="arrow" size={18} /></a>
              <a className="btn ghost" href={site.github} target="_blank" rel="noopener noreferrer"><Icon n="github" size={18} />{t.seeGithub}</a>
              <a className="btn ghost" href="#contacto">{t.contactMe}</a>
            </div>
          </div>
          <div className="orb" aria-hidden="true">
            <i className="ring r1" /><i className="ring r2" /><i className="ring r3" /><i className="core" />
            <span className="chip c1">Python</span><span className="chip c2">React</span>
            <span className="chip c3">APIs</span><span className="chip c4">Next.js</span>
            <pre className="mini">{`{ rol: "${t.role}",\n  stack: ["Python", "JS"] }`}</pre>
          </div>
        </section>

        <section id="sobre-mi" className="wrap section" aria-labelledby="h-sobre">
          <h2 id="h-sobre" className="reveal"><small>01</small>{t.aboutTitle}</h2>
          <div className="prose reveal">{t.about.map((x) => <p key={x}>{x}</p>)}</div>
          <h3 className="sub reveal">{t.interestsTitle}</h3>
          <p className="note reveal">{t.interestsNote}</p>
          <ul className="interests">
            {interests.map((i) => (
              <li key={i.icon} className="int reveal" onMouseMove={spot}>
                <Icon n={i.icon} size={22} /><h4>{i[lang][0]}</h4><p>{i[lang][1]}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="habilidades" className="wrap section" aria-labelledby="h-skills">
          <h2 id="h-skills" className="reveal"><small>02</small>{t.skillsTitle}</h2>
          <p className="note reveal">{t.skillsNote}</p>
          <div className="skills">
            {skills.map((g, k) => (
              <div key={g.en} className="skill reveal" onMouseMove={spot}>
                <h3><Icon n={SKILL_ICONS[k]} size={20} />{g[lang]}</h3>
                <ul className="tags">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="wrap section" aria-labelledby="h-proy">
          <h2 id="h-proy" className="reveal"><small>03</small>{t.projectsTitle}</h2>
          <p className="note reveal">{t.projectsNote}</p>
          <h3 className="sub reveal">{t.featuredTitle}</h3>
          <div className="featured">{featured.map((p) => <Card key={p.name} p={p} t={t} lang={lang} big />)}</div>
          <h3 className="sub reveal">{t.othersTitle}</h3>
          <div className="grid">
            {others.map((p) => <Card key={p.name} p={p} t={t} lang={lang} />)}
            <a className="card more reveal" href={site.github} target="_blank" rel="noopener noreferrer" onMouseMove={spot}>
              <Icon n="github" size={30} /><h3>{t.moreTitle}</h3><p>{t.moreText}</p>
              <span className="more-go">{t.seeGithub}<Icon n="ext" size={16} /></span>
            </a>
          </div>
        </section>

        <section id="contacto" className="wrap section contact" aria-labelledby="h-contacto">
          <h2 id="h-contacto" className="reveal"><small>04</small>{t.contactTitle}</h2>
          <p className="note reveal">{t.contactText}</p>
          <div className="actions reveal">
            <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer"><Icon n="github" size={18} />GitHub</a>
            {site.linkedin && <a className="btn ghost" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Icon n="linkedin" size={18} />LinkedIn</a>}
            {site.email && <a className="btn ghost" href={`mailto:${site.email}`}><Icon n="mail" size={18} />{site.email}</a>}
          </div>
        </section>
      </main>
      <footer className="wrap foot">© {new Date().getFullYear()} {site.name}. {t.footer}</footer>
    </>
  )
}
