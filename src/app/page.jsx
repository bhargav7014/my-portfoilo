"use client"

import { useMemo, useState } from "react"
import { ArrowOutward, Check, ContentCopy, Email, GitHub, LinkedIn, Phone, School } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Chip, Container, Divider, IconButton, Snackbar, Stack, Typography } from "@mui/material"

const GITHUB = "https://github.com/bhargav7014"
const LINKEDIN = "https://linkedin.com/in/bhargav-hj-b0a9b7283"
const EMAIL = "bhargavhj7@gmail.com"
const PHONE = "+91 8310320913"

const skills = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { title: "Web", items: ["React.js", "Next.js", "HTML5", "CSS3"] },
  { title: "Mobile", items: ["React Native", "Expo"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Redis"] },
  { title: "Data & State", items: ["MongoDB", "Realm", "Firebase", "AsyncStorage", "Zustand", "Context API"] },
  { title: "DevOps & Tools", items: ["Git", "GitHub", "GitHub Actions", "VS Code", "Android Studio", "Postman", "Figma"] },
]

const projects = [
  { title: "AI Resume Analyzer", status: "Personal project", description: "A resume builder and AI-assisted analyzer supporting resume editing, multiple templates, PDF/DOCX import, resume enhancement and ATS-oriented analysis through a server-side AI proxy.", technologies: ["React", "Vite", "JavaScript", "Express", "Groq AI", "PDF.js", "Mammoth"], github: `${GITHUB}/ai-resume` },
  { title: "CookMitra", status: "Personal project", description: "A React Native recipe application with authentication, recipe discovery, favorites, AI recipe generation, chat, offline-aware handling and API integration. A separate Node/Express backend supports the application.", technologies: ["React Native", "Expo", "Axios", "AsyncStorage", "Node.js", "Express", "MongoDB", "AI"], github: `${GITHUB}/Bharat-ai-recipe-app`, secondaryGithub: `${GITHUB}/indian-recipe-app-backend` },
  { title: "SaaS Admin & User Dashboard", status: "In progress", description: "A role-based SaaS dashboard with login and registration, protected routes, admin/user dashboards, user management and profile flows. The project is currently being developed further.", technologies: ["React", "TypeScript", "Vite", "React Router", "Zustand", "Axios", "Radix UI"], github: `${GITHUB}/saas-app` },
  { title: "Weather App", status: "Personal project", description: "A React weather application that searches cities through the OpenWeather API and displays current temperature, humidity, wind speed and weather conditions with dynamic weather icons.", technologies: ["React", "Vite", "OpenWeather API", "CSS"], github: `${GITHUB}/WeatherApp` },
]

const professionalProjects = [
  { title: "BLE Power", description: "Professional IoT mobile work involving BLE communication, device pairing and device management, with Realm Database and Zustand for local data/state handling. Redis was used for caching, with GitHub Actions used for CI/CD workflows.", technologies: ["React Native", "Expo", "BLE", "Realm", "Zustand", "Redis", "GitHub Actions"] },
  { title: "LIV App", description: "Professional mobile application work including device link/unlink flows, Sleep and Activity modules, and REST API integration.", technologies: ["React Native", "Expo", "REST APIs"] },
  { title: "Company Website", description: "Professional web development and maintenance using React.js and Next.js, including responsive interfaces implemented from Figma designs.", technologies: ["React.js", "Next.js", "Figma", "Responsive UI"] },
]

const sectionSx = { py: { xs: 7, md: 10 } }
const chipSx = { borderColor: "rgba(148,163,184,.25)", color: "#cbd5e1", background: "rgba(255,255,255,.025)" }

function Section({ id, eyebrow, title, children }) {
  return <Box component="section" id={id} sx={sectionSx}><Container maxWidth="lg">
    <Stack spacing={1} sx={{ mb: 4 }}><Typography sx={{ color: "#818cf8", fontWeight: 800, fontSize: ".78rem", letterSpacing: 2, textTransform: "uppercase" }}>{eyebrow}</Typography><Typography sx={{ fontWeight: 850, fontSize: { xs: "2rem", md: "3rem" }, letterSpacing: -.8 }}>{title}</Typography></Stack>{children}
  </Container></Box>
}

function CopyButton({ value, label = "Copy" }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1600) } catch { /* clipboard unavailable */ }
  }
  return <Button onClick={copy} size="small" startIcon={copied ? <Check /> : <ContentCopy />} sx={{ color: copied ? "#86efac" : "#94a3b8", textTransform: "none", minWidth: 0, px: 1.2 }}>{copied ? "Copied" : label}</Button>
}

function ProjectCard({ project }) {
  const isSaas = project.title === "SaaS Admin & User Dashboard"
  return <Card sx={{ height: "100%", background: "linear-gradient(145deg, rgba(17,24,39,.92), rgba(10,15,28,.94))", border: "1px solid rgba(148,163,184,.14)", borderRadius: 4, transition: "transform .25s ease, border-color .25s ease", "&:hover": { transform: "translateY(-5px)", borderColor: "rgba(129,140,248,.45)" } }}><CardContent sx={{ p: { xs: 3, md: 3.5 }, height: "100%", display: "flex", flexDirection: "column" }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}><Chip label={project.status} size="small" sx={{ ...chipSx, border: "1px solid", borderColor: project.status === "In progress" ? "rgba(251,191,36,.35)" : "rgba(129,140,248,.3)", color: project.status === "In progress" ? "#fbbf24" : "#a5b4fc" }} /><Typography sx={{ color: "#475569", fontSize: ".75rem" }}>PROJECT</Typography></Stack>
    <Typography sx={{ fontSize: "1.35rem", fontWeight: 800, mb: 1.5, color: isSaas ? "#a5b4fc" : "#f8fafc", textShadow: isSaas ? "0 0 18px rgba(129,140,248,.28)" : "none" }}>{project.title}</Typography><Typography sx={{ color: "#94a3b8", lineHeight: 1.75, fontSize: ".95rem", mb: 2.5 }}>{project.description}</Typography>
    <Stack direction="row" spacing={.8} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>{project.technologies.map((item) => <Chip key={item} label={item} size="small" sx={chipSx} />)}</Stack>
    <Stack direction="row" spacing={1} sx={{ mt: "auto" }}><Button href={project.github} target="_blank" rel="noreferrer" startIcon={<GitHub />} size="small" variant="outlined" sx={{ textTransform: "none", borderColor: "rgba(148,163,184,.25)" }}>Source</Button>{project.secondaryGithub && <Button href={project.secondaryGithub} target="_blank" rel="noreferrer" startIcon={<GitHub />} size="small" variant="outlined" sx={{ textTransform: "none", borderColor: "rgba(148,163,184,.25)" }}>Backend</Button>}</Stack>
  </CardContent></Card>
}

export default function Portfolio() {
  const year = useMemo(() => new Date().getFullYear(), [])
  const [toast, setToast] = useState(false)

  return <Box sx={{ minHeight: "100vh", background: "#070a12", color: "#f8fafc", overflow: "hidden", "& a": { textDecoration: "none" } }}>
    <Box sx={{ position: "fixed", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 10% 5%, rgba(99,102,241,.16), transparent 28%), radial-gradient(circle at 90% 12%, rgba(56,189,248,.08), transparent 24%)" }} />
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(7,10,18,.72)", backdropFilter: "blur(18px)", borderBottom: "1px solid rgba(148,163,184,.10)" }}><Container maxWidth="lg"><Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: 68 }}>
      <Button href="#top" sx={{ color: "#fff", fontWeight: 900, fontSize: "1rem", textTransform: "none", p: 0, minWidth: 0 }}>BH<span style={{ color: "#818cf8" }}>.</span></Button>
      <Stack direction="row" spacing={.5} sx={{ display: { xs: "none", sm: "flex" } }}>{[["Work", "projects"], ["Skills", "skills"], ["Experience", "experience"], ["Contact", "contact"]].map(([label, id]) => <Button key={id} href={`#${id}`} sx={{ color: "#94a3b8", textTransform: "none", fontSize: ".9rem", "&:hover": { color: "#fff" } }}>{label}</Button>)}</Stack>
    </Stack></Container></Box>

    <Box id="top" component="main" sx={{ position: "relative", zIndex: 1 }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 8, md: 12 } }}><Box sx={{ maxWidth: 930 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}><Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 18px rgba(34,197,94,.7)" }} /><Typography sx={{ color: "#94a3b8", fontSize: ".82rem", fontWeight: 700, letterSpacing: 1.2 }}>FULL STACK · REACT NATIVE · IoT</Typography></Stack>
        <Typography component="h1" sx={{ fontSize: { xs: "3.5rem", sm: "5.2rem", md: "7rem" }, lineHeight: .95, letterSpacing: -5, fontWeight: 900 }}>Bhargav <Box component="span" sx={{ color: "#818cf8" }}>HJ</Box></Typography>
        <Typography sx={{ mt: 4, maxWidth: 760, color: "#94a3b8", fontSize: { xs: "1.05rem", md: "1.25rem" }, lineHeight: 1.8 }}>Full Stack Developer building web and cross-platform mobile applications with React, Next.js, React Native, TypeScript, Node.js, REST APIs and IoT/BLE integrations.</Typography>
        <Stack direction="row" spacing={1.5} sx={{ mt: 4 }} flexWrap="wrap"><Button href="#projects" variant="contained" endIcon={<ArrowOutward />} sx={{ px: 2.5, py: 1.2, borderRadius: 2.5, textTransform: "none", fontWeight: 800 }}>View my work</Button><Button href={GITHUB} target="_blank" rel="noreferrer" startIcon={<GitHub />} variant="outlined" sx={{ px: 2, py: 1.2, borderRadius: 2.5, textTransform: "none", borderColor: "rgba(148,163,184,.25)", color: "#e2e8f0" }}>GitHub</Button><Button href={LINKEDIN} target="_blank" rel="noreferrer" startIcon={<LinkedIn />} variant="outlined" sx={{ px: 2, py: 1.2, borderRadius: 2.5, textTransform: "none", borderColor: "rgba(148,163,184,.25)", color: "#e2e8f0" }}>LinkedIn</Button></Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5, pt: 3, borderTop: "1px solid rgba(148,163,184,.10)" }}><Typography sx={{ color: "#64748b", fontSize: ".82rem" }}>Based in Bangalore, India</Typography><Typography sx={{ color: "#334155" }}>•</Typography><Typography sx={{ color: "#64748b", fontSize: ".82rem" }}>Open to full-stack & mobile opportunities</Typography></Stack>
      </Box></Container>

      <Section id="skills" eyebrow="Toolkit" title="Technologies I work with"><Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", lg: "repeat(3,1fr)" }, gap: 2 }}>{skills.map((group) => <Card key={group.title} sx={{ background: "rgba(15,23,42,.58)", border: "1px solid rgba(148,163,184,.11)", borderRadius: 3 }}><CardContent sx={{ p: 3 }}><Typography sx={{ fontWeight: 800, mb: 2, color: "#e2e8f0" }}>{group.title}</Typography><Stack direction="row" spacing={.8} useFlexGap flexWrap="wrap">{group.items.map((item) => <Chip key={item} label={item} size="small" sx={chipSx} />)}</Stack></CardContent></Card>)}</Box></Section>

      <Section id="projects" eyebrow="Selected work" title="Personal projects"><Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" }, gap: 2.5 }}>{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</Box></Section>

      <Section id="experience" eyebrow="Professional experience" title="Building production software"><Card sx={{ background: "linear-gradient(145deg, rgba(17,24,39,.95), rgba(10,15,28,.95))", border: "1px solid rgba(129,140,248,.16)", borderRadius: 4 }}><CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={2}><Box><Typography sx={{ fontSize: "1.6rem", fontWeight: 850 }}>Full Stack Developer</Typography><Typography sx={{ color: "#a5b4fc", mt: .5, fontWeight: 700 }}>Skoegle IoT Innovations Pvt. Ltd.</Typography></Box><Chip label="Oct 2024 – Present" sx={chipSx} /></Stack>
        <Typography sx={{ color: "#64748b", mt: 1 }}>Previously Web Developer Intern · Jul 2024 – Sep 2024 · Promoted within three months.</Typography><Divider sx={{ my: 3, borderColor: "rgba(148,163,184,.10)" }} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 1.5 }}>{["Develop web applications with React.js and Next.js.", "Build cross-platform mobile applications with React Native and Expo.", "Integrate REST APIs and BLE functionality for IoT applications.", "Work with Realm Database, MongoDB, AsyncStorage and Zustand.", "Use Redis for caching in professional application infrastructure.", "Work with GitHub Actions for CI/CD automation.", "Convert Figma designs into responsive, production-ready interfaces.", "Contribute to the development and maintenance of the company website."].map((item) => <Box key={item} sx={{ p: 2, borderRadius: 2.5, background: "rgba(255,255,255,.025)", color: "#cbd5e1", lineHeight: 1.65, fontSize: ".92rem" }}>→ {item}</Box>)}</Box>
      </CardContent></Card>
      <Typography sx={{ fontWeight: 800, fontSize: "1.35rem", mt: 6, mb: 2.5 }}>Selected professional projects</Typography><Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" }, gap: 2 }}>{professionalProjects.map((project) => <Card key={project.title} sx={{ background: "rgba(15,23,42,.55)", border: "1px solid rgba(148,163,184,.11)", borderRadius: 3 }}><CardContent sx={{ p: 3 }}><Typography sx={{ fontWeight: 800, mb: 1.5 }}>{project.title}</Typography><Typography sx={{ color: "#94a3b8", lineHeight: 1.7, fontSize: ".9rem", mb: 2 }}>{project.description}</Typography><Stack direction="row" spacing={.7} useFlexGap flexWrap="wrap">{project.technologies.map((item) => <Chip key={item} label={item} size="small" sx={chipSx} />)}</Stack></CardContent></Card>)}</Box></Section>

      <Section id="education" eyebrow="Education" title="Academic foundation"><Card sx={{ background: "rgba(15,23,42,.55)", border: "1px solid rgba(148,163,184,.11)", borderRadius: 3 }}><CardContent sx={{ p: 3.5 }}><Stack direction="row" spacing={2} alignItems="flex-start"><Box sx={{ width: 44, height: 44, display: "grid", placeItems: "center", borderRadius: 2, background: "rgba(129,140,248,.10)" }}><School sx={{ color: "#818cf8" }} /></Box><Box><Typography sx={{ fontWeight: 800 }}>Bachelor of Engineering — Information Science</Typography><Typography sx={{ color: "#94a3b8", mt: .5 }}>Dr. Ambedkar Institute of Technology, Bangalore · 2023</Typography><Typography sx={{ color: "#64748b", mt: .5 }}>CGPA: 6.5 / 10</Typography></Box></Stack></CardContent></Card></Section>

      <Section id="contact" eyebrow="Contact" title="Let's connect"><Card sx={{ background: "linear-gradient(145deg, rgba(30,41,59,.72), rgba(15,23,42,.7))", border: "1px solid rgba(129,140,248,.18)", borderRadius: 4 }}><CardContent sx={{ p: { xs: 3, md: 5 } }}><Typography sx={{ color: "#cbd5e1", maxWidth: 650, lineHeight: 1.8 }}>Interested in full-stack, React Native, IoT/BLE and product-focused engineering opportunities? Get in touch.</Typography>
        <Stack spacing={1.2} sx={{ mt: 4, maxWidth: 650 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, p: 1, pl: 2, borderRadius: 2.5, background: "rgba(0,0,0,.18)", border: "1px solid rgba(148,163,184,.10)" }}><Stack direction="row" spacing={1.5} alignItems="center" sx={{ minWidth: 0 }}><Email sx={{ color: "#818cf8", fontSize: 20 }} /><Typography sx={{ color: "#e2e8f0", fontSize: ".95rem", overflow: "hidden", textOverflow: "ellipsis" }}>{EMAIL}</Typography></Stack><CopyButton value={EMAIL} /></Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, p: 1, pl: 2, borderRadius: 2.5, background: "rgba(0,0,0,.18)", border: "1px solid rgba(148,163,184,.10)" }}><Stack direction="row" spacing={1.5} alignItems="center"><Phone sx={{ color: "#818cf8", fontSize: 20 }} /><Typography sx={{ color: "#e2e8f0", fontSize: ".95rem" }}>{PHONE}</Typography></Stack><CopyButton value={PHONE} /></Box>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 3 }}><Button href={`mailto:${EMAIL}`} startIcon={<Email />} sx={{ textTransform: "none", color: "#fff" }}>Email me</Button><Button href={`tel:${PHONE.replace(/\s/g, "")}`} startIcon={<Phone />} sx={{ textTransform: "none", color: "#fff" }}>Call me</Button><IconButton href={GITHUB} target="_blank" rel="noreferrer" sx={{ color: "#94a3b8" }}><GitHub /></IconButton><IconButton href={LINKEDIN} target="_blank" rel="noreferrer" sx={{ color: "#94a3b8" }}><LinkedIn /></IconButton></Stack>
      </CardContent></Card></Section>
    </Box>

    <Box component="footer" sx={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(148,163,184,.09)", py: 4 }}><Container maxWidth="lg"><Typography sx={{ color: "#475569", fontSize: ".8rem", textAlign: "center" }}>© {year} Bhargav HJ · Built with Next.js & MUI</Typography></Container></Box>
    <Snackbar open={toast} autoHideDuration={1800} onClose={() => setToast(false)} message="Copied to clipboard" />
  </Box>
}