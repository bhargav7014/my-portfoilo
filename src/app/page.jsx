"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowOutward, GitHub, LinkedIn, Email } from "@mui/icons-material"
import styles from "./page.module.css"

const GITHUB = "https://github.com/bhargav7014"
const LINKEDIN = "https://linkedin.com/in/bhargav-hj-b0a9b7283"
const EMAIL = "bhargavhj@gmail.com"

const skills = [
  { title: "LANGUAGES", number: "01", items: ["JavaScript", "TypeScript", "SQL"], className: "languages" },
  { title: "WEB", number: "02", items: ["React.js", "Next.js", "HTML5", "CSS3"], className: "web" },
  { title: "MOBILE", number: "03", items: ["React Native", "Expo"], className: "mobile" },
  { title: "BACKEND", number: "04", items: ["Node.js", "Express.js", "REST APIs"], className: "backend" },
  { title: "DATA", number: "05", items: ["MongoDB", "Realm", "Firebase", "AsyncStorage", "Zustand", "Context API"], className: "data" },
  { title: "DEVOPS & TOOLS", number: "06", items: ["Git", "GitHub", "GitHub Actions", "VS Code", "Android Studio", "Postman", "Figma"], className: "devops" },
]

const projects = [
  { number: "01", type: "BLE / IoT", title: "BLE Power", text: "IoT mobile application work focused on BLE communication, device pairing and device management, using Realm Database and Zustand for local data and state handling.", href: GITHUB },
  { number: "02", type: "AI / WEB", title: "AI Resume Analyzer", text: "React/Vite resume application integrating Google Gemini AI for resume analysis and ATS-focused insights, with PDF/DOCX document handling.", href: GITHUB + "/ai-resume" },
  { number: "03", type: "MOBILE / IoT", title: "LIV App", text: "Connected-health mobile application work including device link/unlink flows, Sleep and Activity modules, and REST API integration.", href: GITHUB },
]

function WorldCanvas({ progress, mouseX, mouseY }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext("2d")
    let raf = 0, t = 0
    let isVisible = true

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible && !raf) {
        raf = requestAnimationFrame(draw)
      }
    }, { threshold: 0 })
    observer.observe(c)

    const stars = Array.from({ length: 70 }, (_, i) => ({ x: (i * 0.618) % 1, y: (i * 0.37) % 1, s: 0.4 + (i % 3) * 0.5 }))
    const resize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2)
      c.width = c.clientWidth * d
      c.height = c.clientHeight * d
      ctx.setTransform(d, 0, 0, d, 0, 0)
    }

    const draw = () => {
      if (!isVisible) {
        raf = 0
        return
      }
      const w = c.clientWidth, h = c.clientHeight
      if (!w || !h) {
        raf = requestAnimationFrame(draw)
        return
      }
      const p = progress.get(), mx = (mouseX.get() - 0.5), my = (mouseY.get() - 0.5)
      t++
      ctx.clearRect(0, 0, w, h)

      // Background Gradient
      const bg = ctx.createLinearGradient(0, 0, 0, h)
      bg.addColorStop(0, "#020706")
      bg.addColorStop(0.55, "#0a211d")
      bg.addColorStop(1, "#020504")
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // Stars
      stars.forEach((s, i) => {
        ctx.fillStyle = "rgba(220,235,215," + (0.12 + 0.12 * Math.sin(t * 0.015 + i)) + ")"
        ctx.beginPath()
        ctx.arc(s.x * w + mx * 20, s.y * h + my * 10, s.s, 0, 7)
        ctx.fill()
      })

      const rx = w * 0.68 + mx * 25, ry = h * (0.31 - p * 0.08) + my * 15, rr = Math.min(w, h) * (0.14 + p * 0.055)

      // Glow behind globe
      const glow = ctx.createRadialGradient(rx, ry, 4, rx, ry, rr * 3)
      glow.addColorStop(0, "rgba(232,178,67,.18)")
      glow.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      // Mountains
      ;[["#102824", 110, 1.2], ["#091815", 70, 3.7], ["#050e0c", 42, 6.1]].forEach((a, k) => {
        ctx.beginPath()
        ctx.moveTo(0, h)
        for (let x = 0; x <= w; x += 12) {
          ctx.lineTo(x, h * (0.58 + k * 0.08) - Math.sin(x * 0.008 + a[2]) * a[1] - Math.sin(x * 0.019 + a[2] * 2) * a[1] * 0.35 + my * k * 5 + mx * k * 10)
        }
        ctx.lineTo(w, h)
        ctx.closePath()
        ctx.fillStyle = a[0]
        ctx.fill()
      })

      // City Skyline
      ctx.fillStyle = "#030807"
      for (let i = 0; i < 20; i++) {
        const x = i * w / 19 + mx * 18, bh = 25 + (i * 29) % 60
        ctx.fillRect(x, h * 0.64 - bh, 9 + (i % 3) * 5, bh)
      }

      // ── 3D Mathematical Holographic Globe (Optimized) ──
      const rotY = t * 0.007 + mx * 1.4 + p * 0.6
      const rotX = 0.38 + my * 0.6
      const rotZ = -0.16

      const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX)
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ)

      const project = (x, y, z) => {
        const x1 = x * cosY + z * sinY
        const z1 = -x * sinY + z * cosY
        const y2 = y * cosX - z1 * sinX
        const z2 = y * sinX + z1 * cosX
        return {
          x: rx + (x1 * cosZ - y2 * sinZ) * rr,
          y: ry + (x1 * sinZ + y2 * cosZ) * rr,
          z: z2
        }
      }

      // 1. Globe Atmosphere Volume
      const innerAtmosphere = ctx.createRadialGradient(rx - rr * 0.28, ry - rr * 0.28, rr * 0.1, rx, ry, rr)
      innerAtmosphere.addColorStop(0, "rgba(247, 214, 120, 0.08)")
      innerAtmosphere.addColorStop(0.55, "rgba(18, 82, 70, 0.14)")
      innerAtmosphere.addColorStop(0.85, "rgba(4, 20, 16, 0.45)")
      innerAtmosphere.addColorStop(1, "rgba(2, 6, 5, 0.75)")
      ctx.fillStyle = innerAtmosphere
      ctx.beginPath()
      ctx.arc(rx, ry, rr, 0, Math.PI * 2)
      ctx.fill()

      // 2. Polar Axis
      const poleNorth = project(0, -1.22, 0)
      const poleSouth = project(0, 1.22, 0)
      ctx.strokeStyle = "rgba(247, 194, 74, 0.45)"
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.moveTo(poleNorth.x, poleNorth.y)
      ctx.lineTo(poleSouth.x, poleSouth.y)
      ctx.stroke()

      // 3. Batched Longitude Meridians
      const meridianAngles = [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4]
      ctx.strokeStyle = "rgba(228, 184, 84, 0.18)"
      ctx.lineWidth = 0.9
      ctx.beginPath()
      meridianAngles.forEach(lambda => {
        let started = false
        for (let phi = -Math.PI / 2; phi <= Math.PI / 2 + 0.05; phi += 0.12) {
          const pt = project(Math.cos(phi) * Math.sin(lambda), Math.sin(phi), Math.cos(phi) * Math.cos(lambda))
          if (pt.z < -0.05) {
            if (!started) { ctx.moveTo(pt.x, pt.y); started = true }
            else { ctx.lineTo(pt.x, pt.y) }
          } else { started = false }
        }
      })
      ctx.stroke()

      ctx.strokeStyle = "rgba(247, 194, 74, 0.75)"
      ctx.lineWidth = 1.4
      ctx.beginPath()
      meridianAngles.forEach(lambda => {
        let started = false
        for (let phi = -Math.PI / 2; phi <= Math.PI / 2 + 0.05; phi += 0.12) {
          const pt = project(Math.cos(phi) * Math.sin(lambda), Math.sin(phi), Math.cos(phi) * Math.cos(lambda))
          if (pt.z >= -0.05) {
            if (!started) { ctx.moveTo(pt.x, pt.y); started = true }
            else { ctx.lineTo(pt.x, pt.y) }
          } else { started = false }
        }
      })
      ctx.stroke()

      // 4. Batched Latitude Parallels
      const latitudes = [-0.95, -0.55, 0, 0.55, 0.95]
      ctx.strokeStyle = "rgba(228, 184, 84, 0.16)"
      ctx.lineWidth = 0.8
      ctx.beginPath()
      latitudes.forEach(phi => {
        const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi)
        let started = false
        for (let lambda = 0; lambda <= Math.PI * 2 + 0.1; lambda += 0.14) {
          const pt = project(cosPhi * Math.sin(lambda), sinPhi, cosPhi * Math.cos(lambda))
          if (pt.z < -0.05) {
            if (!started) { ctx.moveTo(pt.x, pt.y); started = true }
            else { ctx.lineTo(pt.x, pt.y) }
          } else { started = false }
        }
      })
      ctx.stroke()

      ctx.strokeStyle = "rgba(247, 194, 74, 0.7)"
      ctx.lineWidth = 1.3
      ctx.beginPath()
      latitudes.forEach(phi => {
        const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi)
        let started = false
        for (let lambda = 0; lambda <= Math.PI * 2 + 0.1; lambda += 0.14) {
          const pt = project(cosPhi * Math.sin(lambda), sinPhi, cosPhi * Math.cos(lambda))
          if (pt.z >= -0.05) {
            if (!started) { ctx.moveTo(pt.x, pt.y); started = true }
            else { ctx.lineTo(pt.x, pt.y) }
          } else { started = false }
        }
      })
      ctx.stroke()

      // 5. IoT Tech Network Nodes
      const techNodes = [
        { name: "BLR", lat: 12.97, lon: 77.59, isHome: true },
        { name: "SGP", lat: 1.35, lon: 103.82 },
        { name: "TYO", lat: 35.68, lon: 139.76 },
        { name: "LDN", lat: 51.51, lon: -0.13 },
        { name: "SFO", lat: 37.77, lon: -122.42 },
        { name: "BER", lat: 52.52, lon: 13.40 },
      ]

      const projectedNodes = techNodes.map(node => {
        const radLat = (node.lat * Math.PI) / 180
        const radLon = (node.lon * Math.PI) / 180
        return {
          ...node,
          ...project(Math.cos(radLat) * Math.sin(radLon), -Math.sin(radLat), Math.cos(radLat) * Math.cos(radLon))
        }
      })

      const blrNode = projectedNodes[0]
      if (blrNode.z > -0.1) {
        projectedNodes.slice(1).forEach(tgt => {
          if (tgt.z > -0.1) {
            ctx.beginPath()
            ctx.moveTo(blrNode.x, blrNode.y)
            const midX = (blrNode.x + tgt.x) / 2 + (blrNode.y - tgt.y) * 0.15
            const midY = (blrNode.y + tgt.y) / 2 - Math.abs(blrNode.x - tgt.x) * 0.15
            ctx.quadraticCurveTo(midX, midY, tgt.x, tgt.y)
            ctx.strokeStyle = "rgba(247, 194, 74, 0.35)"
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      }

      projectedNodes.forEach((node, idx) => {
        if (node.z > -0.15) {
          const alpha = Math.max(0.2, (node.z + 0.15) / 1.15)
          const pulseProgress = ((t * 0.6 + idx * 18) % 50) / 50
          const pulseR = 3 + pulseProgress * 10
          ctx.beginPath()
          ctx.arc(node.x, node.y, pulseR, 0, Math.PI * 2)
          ctx.strokeStyle = "rgba(255, 218, 120," + (1 - pulseProgress) * 0.6 * alpha + ")"
          ctx.lineWidth = 1
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(node.x, node.y, node.isHome ? 3.5 : 2.5, 0, Math.PI * 2)
          ctx.fillStyle = node.isHome ? "#ffffff" : "rgba(255, 218, 120," + alpha + ")"
          ctx.fill()
        }
      })

      // 6. Gyroscopic Orbital Ring
      const orbitAngle = t * 0.015
      const orbitR = rr * 1.34
      ctx.save()
      ctx.translate(rx, ry)
      ctx.rotate(-0.35 + p * 0.2)
      ctx.beginPath()
      ctx.ellipse(0, 0, orbitR, orbitR * 0.32, 0.3, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(247, 194, 74, 0.45)"
      ctx.lineWidth = 1.3
      ctx.stroke()

      const satX = Math.cos(orbitAngle) * orbitR
      const satY = Math.sin(orbitAngle) * (orbitR * 0.32)
      ctx.beginPath()
      ctx.arc(satX, satY, 3, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
      ctx.restore()

      // 7. Outer Silhouette Rim
      ctx.strokeStyle = "rgba(247, 194, 74, 0.9)"
      ctx.lineWidth = 2.4
      ctx.beginPath()
      ctx.arc(rx, ry, rr, 0, Math.PI * 2)
      ctx.stroke()

      // Ground / Silhouette
      for (let i = 0; i < 6; i++) {
        const x = w * (0.08 + i * 0.16) + Math.sin(t * 0.001 + i) * 25 + mx * 15, y = h * (0.58 + i * 0.045)
        const f = ctx.createRadialGradient(x, y, 2, x, y, w * 0.25)
        f.addColorStop(0, "rgba(170,200,186,.08)")
        f.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = f
        ctx.fillRect(x - w * 0.25, y - 80, w * 0.5, 160)
      }
      ctx.beginPath()
      ctx.moveTo(0, h)
      ctx.lineTo(w * 0.34 + mx * 30, h * 0.79)
      ctx.lineTo(w * 0.52 + mx * 42, h * 0.72)
      ctx.lineTo(w * 0.74 + mx * 48, h * 0.79)
      ctx.lineTo(w, h * 0.73)
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = "#020605"
      ctx.fill()

      const fx = w * 0.52 + mx * 55, fy = h * (0.75 - p * 0.035)
      ctx.save()
      ctx.translate(fx, fy)
      ctx.fillStyle = "#010202"
      ctx.beginPath()
      ctx.ellipse(0, 25, 21, 8, 0, 0, 7)
      ctx.fill()
      ctx.fillRect(-4, -3, 8, 30)
      ctx.beginPath()
      ctx.arc(0, -12, 8, 0, 7)
      ctx.fill()
      ctx.rotate(-0.2 + p * 0.18)
      ctx.fillRect(5, -4, 38, 2)
      ctx.restore()

      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      observer.disconnect()
    }
  }, [progress, mouseX, mouseY])

  return <canvas ref={ref} className={styles.canvas} aria-hidden="true" />
}

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
        {skill.items.map(item => (
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
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const pctRef = useRef(null)
  const scrollProgress = useMotionValue(0)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const springX = useSpring(mouseX, { stiffness: 70, damping: 24 })
  const springY = useSpring(mouseY, { stiffness: 70, damping: 24 })

  useEffect(() => {
    let ticking = false
    let lastScrolled = false

    const s = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const max = document.documentElement.scrollHeight - window.innerHeight
          const v = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0
          scrollProgress.set(v)

          if (pctRef.current) {
            pctRef.current.textContent = `${String(Math.round(v * 100)).padStart(3, "0")}%`
          }

          const isPast = scrollY > 40
          if (isPast !== lastScrolled) {
            lastScrolled = isPast
            setScrolled(isPast)
          }

          ticking = false
        })
        ticking = true
      }
    }

    s()
    window.addEventListener("scroll", s, { passive: true })
    return () => window.removeEventListener("scroll", s)
  }, [scrollProgress])

  useEffect(() => {
    const m = (e) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener("pointermove", m, { passive: true })
    return () => window.removeEventListener("pointermove", m)
  }, [mouseX, mouseY])

  const navigate = (id) => {
    setMenu(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className={styles.page}>
      <div className={styles.grain} aria-hidden="true" />

      {/* ── Navigation (Zero re-renders on scroll) ── */}
      <header className={scrolled ? `${styles.nav} ${styles.navOn}` : styles.nav}>
        <a className={styles.logo} href="#top" onClick={(e) => { e.preventDefault(); navigate("top") }}>
          BH<span>.</span>
        </a>
        <nav className={menu ? styles.mobileNav : styles.navLinks}>
          {[["HOME", "top"], ["ABOUT", "about"], ["STACK", "skills"], ["WORK", "projects"], ["CONTACT", "contact"]].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); navigate(id) }}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.navRight}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); navigate("contact") }}>
            LET&apos;S TALK <ArrowOutward fontSize="inherit" />
          </a>
          <button onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            <i /><i />
          </button>
        </div>
      </header>

      {/* ── Hero from Production Opening Page ── */}
      <section id="top" className={styles.hero}>
        <WorldCanvas progress={scrollProgress} mouseX={springX} mouseY={springY} />
        <div className={styles.vignette} />
        <div className={styles.heroMeta}>01 — FULL STACK / MOBILE / IoT</div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>BHARGAV HJ · DEVELOPER</p>
          <h1>Building<br /><em>digital</em><br />experiences.</h1>
          <p>Full Stack Developer building web and cross-platform mobile products with React, Next.js, React Native, TypeScript, Node.js and IoT/BLE integrations.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects" onClick={(e) => { e.preventDefault(); navigate("projects") }}>
              EXPLORE WORK <ArrowOutward fontSize="inherit" />
            </a>
            <a className={styles.ghost} href={GITHUB} target="_blank" rel="noreferrer">
              GITHUB <GitHub fontSize="inherit" />
            </a>
          </div>
        </div>
        <div className={styles.heroSide}>SCROLL TO EXPLORE <i /></div>
        <div className={styles.heroFoot}>
          <span>BASED IN BANGALORE, INDIA</span>
          <span>FULL STACK · MOBILE · IoT</span>
          <span ref={pctRef}>000%</span>
        </div>
      </section>

      {/* ── Retaining All Existing Rest of the Portfolio ── */}
      <section id="about" className={`${styles.section} ${styles.about}`}>
        <span className={styles.sectionNo}>02</span>
        <div>
          <p className={styles.eyebrow}>A DEVELOPER WHO LIKES SYSTEMS</p>
          <h2>I turn ideas into <em>working products.</em></h2>
        </div>
        <p className={styles.aboutCopy}>
          I build thoughtful, scalable experiences across the web, mobile and connected devices. From the first line of code to the final interaction, I care about clarity, performance and the details that make software feel effortless.
        </p>
      </section>

      <section id="skills" className={styles.skillsSection}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>03 — TOOLKIT</p>
            <h2>The stack behind<br /><em>the work.</em></h2>
          </div>
          <p>Technology is a tool. The right combination makes the impossible feel simple.</p>
        </div>
        <div className={styles.skillMap}>
          <div className={styles.skillCore}>
            <b>BH</b>
            <span>FULL STACK</span>
            <small>BUILD · INNOVATE · DEPLOY</small>
          </div>
          <svg className={styles.mapLines} viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
            <circle cx="600" cy="300" r="145" />
            <circle cx="600" cy="300" r="205" />
            <path d="M250 135 L470 260 M520 25 L560 160 M950 140 L730 260 M250 470 L470 340 M820 475 L710 350 M1150 300 L760 300" />
          </svg>
          {skills.map(skill => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </section>

      <section id="projects" className={`${styles.section} ${styles.projects}`}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>04 — SELECTED WORK</p>
            <h2>Things I&apos;ve<br /><em>built.</em></h2>
          </div>
          <p>Selected projects shaped by curiosity, collaboration and a bias toward shipping.</p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.projectTop}>
                <span>{project.number}</span>
                <ArrowOutward fontSize="small" />
              </div>
              <p className={styles.eyebrow}>{project.type}</p>
              <h3>{project.title}</h3>
              <p className={styles.projectDescription}>{project.text}</p>
              <a href={project.href} target="_blank" rel="noreferrer">
                VIEW PROJECT <ArrowOutward fontSize="inherit" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <p className={styles.eyebrow}>05 — CONTACT</p>
        <h2>Let&apos;s build something<br /><em>worth remembering.</em></h2>
        <a className={styles.contactButton} href={`mailto:${EMAIL}`}>
          START A CONVERSATION <ArrowOutward fontSize="small" />
        </a>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} BHARGAV HJ</span>
        <span>FULL STACK · MOBILE · IoT · +91 8310320913</span>
        <div>
          <a href={GITHUB} target="_blank" rel="noreferrer"><GitHub fontSize="small" /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer"><LinkedIn fontSize="small" /></a>
          <a href={`mailto:${EMAIL}`}><Email fontSize="small" /></a>
        </div>
      </footer>
    </main>
  )
}
