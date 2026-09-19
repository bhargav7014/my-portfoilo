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
  return (
    <motion.article
      className={`${styles.skillCard} ${styles[skill.className]}`}
      whileHover={{ y: -5, borderColor: "rgba(246,194,72,.8)" }}
      transition={{ duration: 0.25 }}
    >
      <h3>{skill.title}</h3>
      <span className={styles.cardRule} />
      <ul>
        {skill.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <footer>
        <small>{skill.number}</small>
        <ArrowOutward fontSize="inherit" />
      </footer>
    </motion.article>
  )
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navigate = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className={styles.page}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <header className={styles.nav}>
        <button className={styles.logo} onClick={() => navigate("home")} aria-label="Go home">
          BH<span>.</span>
        </button>

        <nav className={menuOpen ? `${styles.navLinks} ${styles.navLinksOpen}` : styles.navLinks}>
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <button
              key={id}
              className={active === id ? styles.active : ""}
              onClick={() => navigate(id)}
            >
              {id.toUpperCase()}
            </button>
          ))}
        </nav>

        <a className={styles.navCta} href={`mailto:${EMAIL}`}>
          LET&apos;S TALK <ArrowOutward fontSize="inherit" />
        </a>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <Close /> : <Menu />}
        </button>
      </header>

      <section id="home" className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.heroLabel}>
            <span>01</span>
            <p>
              FULL STACK DEVELOPER
              <br />
              MOBILE · IoT · WEB
            </p>
          </div>

          <div className={styles.heroBigText}>
            <span className={styles.word}>Building</span>
            <span className={styles.goldWord}>digital</span>
            <span className={styles.word}>experiences.</span>
          </div>

          <p className={styles.heroSummary}>
            Full Stack Developer building web and cross-platform mobile products with React,
            Next.js, React Native, TypeScript, Node.js and IoT/BLE integrations.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.primaryButton} onClick={() => navigate("projects")}>
              Explore Work <ArrowOutward fontSize="inherit" />
            </button>

            <a className={styles.secondaryAction} href={GITHUB} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <GitHub fontSize="small" />
            </a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.globeWrap}>
            <div className={styles.globeGlow} />
            <div className={styles.globe}>
              <span className={`${styles.ring} ${styles.ringOne}`} />
              <span className={`${styles.ring} ${styles.ringTwo}`} />
              <span className={`${styles.ring} ${styles.ringThree}`} />
            </div>
          </div>

          <div className={styles.barStrip}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <div className={styles.mountains} aria-hidden="true" />

      <section id="about" className={`${styles.section} ${styles.about}`}>
        <span className={styles.sectionNo}>02</span>
        <div>
          <p className={styles.eyebrow}>A DEVELOPER WHO LIKES SYSTEMS</p>
          <h2>
            I turn ideas into product experiences that feel solid, useful, and memorable.
          </h2>
        </div>
      </section>

      <section id="skills" className={styles.skillsSection}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>03 — TOOLKIT</p>
            <h2>
              The stack behind
              <br />
              <em>the work.</em>
            </h2>
          </div>
        </div>

        <div className={styles.skillMap}>
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>

      <section id="projects" className={`${styles.section} ${styles.projects}`}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>04 — SELECTED WORK</p>
            <h2>
              Things I&apos;ve built
              <br />
              <em>with real use cases.</em>
            </h2>
          </div>
        </div>

        <div className={styles.projectGrid}>
          {projects.map(([number, title, description]) => (
            <article key={title} className={styles.projectCard}>
              <div className={styles.projectMeta}>
                <span>{number}</span>
                <ArrowOutward fontSize="inherit" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <p className={styles.eyebrow}>05 — CONTACT</p>
        <h2>
          Let&apos;s build something
          <br />
          <em>worth remembering.</em>
        </h2>

        <div className={styles.contactLinks}>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            <GitHub fontSize="small" /> GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            <LinkedIn fontSize="small" /> LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Email fontSize="small" /> Email
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} BHARGAV HJ</span>
        <span>FULL STACK · MOBILE · IoT</span>
        <div>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            <GitHub fontSize="small" />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            <LinkedIn fontSize="small" />
          </a>
        </div>
      </footer>
    </main>
  )
}
