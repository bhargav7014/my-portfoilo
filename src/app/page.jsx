"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowOutward, GitHub, LinkedIn, Email, Menu, Close } from "@mui/icons-material"
import styles from "./page.module.css"

const GITHUB = "https://github.com/bhargav7014"
const LINKEDIN = "https://linkedin.com/in/bhargav-hj-b0a9b7283"
const EMAIL = "bhargavhj@gmail.com"

const skills = [
  { title: "LANGUAGES", number: "01", items: ["JavaScript", "TypeScript", "SQL"], className: "languages" },
  { title: "WEB", number: "02", items: ["React.js", "Next.js", "HTML5", "CSS3"], className: "web" },
  { title: "MOBILE", number: "03", items: ["React Native", "Expo"], className: "mobile" },
  { title: "BACKEND", number: "04", items: ["Node.js", "Express.js", "REST APIs", "Redis"], className: "backend" },
  { title: "DATA", number: "05", items: ["MongoDB", "Realm", "Firebase", "AsyncStorage", "Zustand"], className: "data" },
  { title: "DEVOPS & TOOLS", number: "06", items: ["Git", "GitHub Actions", "VS Code", "Postman", "Figma"], className: "devops" },
]

const projects = [
  ["01", "IoT DEVICE MONITORING", "A connected-device platform for telemetry, lifecycle tracking, alerts and real-time health visibility."],
  ["02", "AI RESUME ANALYZER", "A resume builder and AI-assisted analyzer with templates, document import and ATS-focused feedback."],
  ["03", "COOKMITRA", "A React Native recipe experience with discovery, favorites, AI recipe generation and offline-aware flows."],
]

function SkillCard({ skill }) {
  return <motion.article className={`${styles.skillCard} ${styles[skill.className]}`} whileHover={{ y: -5, borderColor: "rgba(246,194,72,.8)" }} transition={{ duration: .25 }}>
    <h3>{skill.title}</h3><span className={styles.cardRule} />
    <ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
    <footer><small>{skill.number}</small><ArrowOutward fontSize="inherit" /></footer>
  </motion.article>
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"].map(id => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: "-35% 0px -55%", threshold: [0, .2, .5] })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navigate = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return <main className={styles.page}>
    <div className={styles.ambient} aria-hidden="true" /><div className={styles.grain} aria-hidden="true" />
    <header className={styles.nav}>
      <button className={styles.logo} onClick={() => navigate("home")} aria-label="Go home">BH<span>.</span></button>
      <nav className={menuOpen ? `${styles.navLinks} ${styles.navLinksOpen}` : styles.navLinks}>
        {["home", "about", "skills", "projects", "contact"].map(id => <button key={id} className={active === id ? styles.active : ""} onClick={() => navigate(id)}>{id.toUpperCase()}</button>)}
      </nav>
      <a className={styles.navCta} href={`mailto:${EMAIL}`}>LET&apos;S TALK <ArrowOutward fontSize="inherit" /></a>
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <Close /> : <Menu />}</button>
    </header>

    <section id="home" className={styles.hero}>
      <div className={styles.heroLabel}><span>01</span><p>FULL STACK DEVELOPER<br />MOBILE · IoT · WEB</p></div>
      <svg className={styles.heroLines} viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true"><circle cx="600" cy="380" r="180" /><circle cx="600" cy="380" r="230" /><circle cx="600" cy="380" r="285" /><path d="M0 175 L430 340 M0 575 L430 410 M1200 200 L770 340 M1200 535 L770 410" /><path d="M600 0V180 M600 580V760" /></svg>
      <div className={styles.heroCore}><span className={styles.coreInitials}>BH</span><span className={styles.coreRule} /><p>FULL STACK</p><small>BUILD · INNOVATE · DEPLOY</small></div>
      <div className={styles.heroIntro}><p className={styles.eyebrow}>HELLO, I&apos;M BHARGAV HJ</p><h1>Digital products<br /><em>with purpose.</em></h1><button onClick={() => navigate("projects")} className={styles.textLink}>EXPLORE MY WORK <ArrowOutward fontSize="inherit" /></button></div>
    </section>

    <section id="about" className={`${styles.section} ${styles.about}`}><span className={styles.sectionNo}>02</span><div><p className={styles.eyebrow}>A DEVELOPER WHO LIKES SYSTEMS</p><h2>I turn ideas into <em>working products.</em></h2></div><p className={styles.aboutCopy}>I build thoughtful, scalable experiences across the web, mobile and connected devices. From the first line of code to the final interaction, I care about clarity, performance and the details that make software feel effortless.</p></section>

    <section id="skills" className={styles.skillsSection}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>03 — TOOLKIT</p><h2>The stack behind<br /><em>the work.</em></h2></div><p>Technology is a tool. The right combination makes the impossible feel simple.</p></div><div className={styles.skillMap}><div className={styles.skillCore}><b>BH</b><span>FULL STACK</span><small>BUILD · INNOVATE · DEPLOY</small></div><svg className={styles.mapLines} viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true"><circle cx="600" cy="300" r="145" /><circle cx="600" cy="300" r="205" /><path d="M250 135 L470 260 M520 25 L560 160 M950 140 L730 260 M250 470 L470 340 M820 475 L710 350 M1150 300 L760 300" /></svg>{skills.map(skill => <SkillCard key={skill.title} skill={skill} />)}</div></section>

    <section id="projects" className={`${styles.section} ${styles.projects}`}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>04 — SELECTED WORK</p><h2>Things I&apos;ve<br /><em>built.</em></h2></div><p>Selected projects shaped by curiosity, collaboration and a bias toward shipping.</p></div><div className={styles.projectGrid}>{projects.map(([number, type, text], index) => <motion.article key={number} className={styles.projectCard} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .1 }}><div className={styles.projectTop}><span>{number}</span><ArrowOutward fontSize="small" /></div><p className={styles.eyebrow}>{type}</p><h3>{text}</h3><a href={GITHUB} target="_blank" rel="noreferrer">VIEW PROJECT <ArrowOutward fontSize="inherit" /></a></motion.article>)}</div></section>

    <section id="contact" className={styles.contact}><p className={styles.eyebrow}>05 — CONTACT</p><h2>Let&apos;s build something<br /><em>worth remembering.</em></h2><a className={styles.contactButton} href={`mailto:${EMAIL}`}>START A CONVERSATION <ArrowOutward fontSize="small" /></a></section>
    <footer className={styles.footer}><span>© {new Date().getFullYear()} BHARGAV HJ</span><span>FULL STACK · MOBILE · IoT</span><div><a href={GITHUB} target="_blank" rel="noreferrer"><GitHub fontSize="small" /></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><LinkedIn fontSize="small" /></a><a href={`mailto:${EMAIL}`}><Email fontSize="small" /></a></div></footer>
  </main>
}
