"use client"

import { ArrowOutward, Email, GitHub, LinkedIn, LocationOn, Phone, School } from "@mui/icons-material"
import { Box, Button, Card, CardContent, Chip, Container, Divider, Stack, Typography } from "@mui/material"
import { useMemo } from "react"

const GITHUB = "https://github.com/bhargav7014"
const LINKEDIN = "https://linkedin.com/in/bhargav-hj-b0a9b7283"
const EMAIL = "bhargavhj7@gmail.com"

const skills = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { title: "Web", items: ["React.js", "Next.js", "HTML5", "CSS3"] },
  { title: "Mobile", items: ["React Native", "Expo"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Redis"] },
  { title: "Data & State", items: ["MongoDB", "Realm", "Firebase", "AsyncStorage", "Zustand", "Context API"] },
  { title: "DevOps & Tools", items: ["Git", "GitHub", "GitHub Actions", "VS Code", "Android Studio", "Postman", "Figma"] },
]

const projects = [
  {
    title: "AI Resume Analyzer", status: "Personal project",
    description: "A resume builder and AI-assisted analyzer supporting resume editing, multiple templates, PDF/DOCX import, resume enhancement and ATS-oriented analysis through a server-side AI proxy.",
    technologies: ["React", "Vite", "JavaScript", "Express", "Groq AI", "PDF.js", "Mammoth"], github: `${GITHUB}/ai-resume`, live: null,
  },
  {
    title: "Bharat AI Recipe App", status: "Personal project",
    description: "A React Native recipe application with authentication, recipe discovery, favorites, AI recipe generation, chat, offline-aware handling and API integration. A separate Node/Express backend supports the application.",
    technologies: ["React Native", "Expo", "Axios", "AsyncStorage", "Node.js", "Express", "MongoDB", "AI"], github: `${GITHUB}/Bharat-ai-recipe-app`, secondaryGithub: `${GITHUB}/indian-recipe-app-backend`, live: null,
  },
  {
    title: "SaaS Admin & User Dashboard", status: "In progress",
    description: "A role-based SaaS dashboard with login and registration, protected routes, admin/user dashboards, user management and profile flows. The project is currently being developed further.",
    technologies: ["React", "TypeScript", "Vite", "React Router", "Zustand", "Axios", "Radix UI"], github: `${GITHUB}/saas-app`, live: null,
  },
  {
    title: "Weather App", status: "Personal project",
    description: "A React weather application that searches cities through the OpenWeather API and displays current temperature, humidity, wind speed and weather conditions with dynamic weather icons.",
    technologies: ["React", "Vite", "OpenWeather API", "CSS"], github: `${GITHUB}/WeatherApp`, live: null,
  },
]

const professionalProjects = [
  {
    title: "BLE Power",
    description: "Professional IoT mobile work involving BLE communication, device pairing and device management, with Realm Database and Zustand for local data/state handling. Redis was used for caching, with GitHub Actions used for CI/CD workflows.",
    technologies: ["React Native", "Expo", "BLE", "Realm", "Zustand", "Redis", "GitHub Actions"],
  },
  {
    title: "LIV App",
    description: "Professional mobile application work including device link/unlink flows, Sleep and Activity modules, and REST API integration.",
    technologies: ["React Native", "Expo", "REST APIs"],
  },
  {
    title: "Company Website",
    description: "Professional web development and maintenance using React.js and Next.js, including responsive interfaces implemented from Figma designs.",
    technologies: ["React.js", "Next.js", "Figma", "Responsive UI"],
  },
]

function Section({ id, eyebrow, title, children }) {
  return <Box id={id} component="section" sx={{ py: { xs: 8, md: 11 } }}><Container maxWidth="lg">
    <Typography sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", mb: 1 }}>{eyebrow}</Typography>
    <Typography variant="h2" sx={{ fontWeight: 800, mb: 5, fontSize: { xs: "2.25rem", md: "3.2rem" } }}>{title}</Typography>{children}
  </Container></Box>
}

function ProjectCard({ project }) {
  return <Card sx={{ height: "100%", border: "1px solid", borderColor: "divider", borderRadius: 4 }}><CardContent sx={{ p: { xs: 3, md: 4 }, height: "100%", display: "flex", flexDirection: "column" }}>
    <Chip label={project.status} size="small" color={project.status === "In progress" ? "warning" : "primary"} variant="outlined" sx={{ alignSelf: "flex-start", mb: 2 }} />
    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>{project.title}</Typography>
    <Typography color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>{project.description}</Typography>
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>{project.technologies.map((technology) => <Chip key={technology} label={technology} size="small" />)}</Stack>
    <Stack direction="row" spacing={1.5} sx={{ mt: "auto" }} flexWrap="wrap">
      <Button href={project.github} target="_blank" rel="noreferrer" startIcon={<GitHub />} variant="outlined">Source Code</Button>
      {project.secondaryGithub && <Button href={project.secondaryGithub} target="_blank" rel="noreferrer" startIcon={<GitHub />} variant="outlined">Backend</Button>}
      {project.live ? <Button href={project.live} target="_blank" rel="noreferrer" endIcon={<ArrowOutward />} variant="contained">Live Demo</Button> : <Button disabled variant="outlined">Demo not published</Button>}
    </Stack>
  </CardContent></Card>
}

export default function Portfolio() {
  const year = useMemo(() => new Date().getFullYear(), [])
  return <Box sx={{ minHeight: "100vh", background: "#080b16", color: "#f8fafc" }}>
    <Box sx={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(circle at 15% 10%, rgba(99,102,241,.20), transparent 32%), radial-gradient(circle at 85% 20%, rgba(236,72,153,.12), transparent 30%)" }} />
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(16px)", background: "rgba(8,11,22,.82)", borderBottom: "1px solid rgba(255,255,255,.08)" }}><Container maxWidth="lg"><Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2 }}>
      <Typography sx={{ fontWeight: 800, fontSize: "1.15rem" }}>Bhargav HJ</Typography>
      <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>{[["Projects", "projects"], ["Skills", "skills"], ["Experience", "experience"], ["Contact", "contact"]].map(([label, id]) => <Button key={id} href={`#${id}`} sx={{ color: "inherit" }}>{label}</Button>)}</Stack>
    </Stack></Container></Box>

    <Box component="main" sx={{ position: "relative", zIndex: 1 }}>
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}><Box sx={{ maxWidth: 900 }}>
        <Chip label="FULL STACK DEVELOPER · REACT NATIVE DEVELOPER" color="primary" variant="outlined" sx={{ mb: 3, fontWeight: 700 }} />
        <Typography variant="h1" sx={{ fontWeight: 900, lineHeight: 1.02, fontSize: { xs: "3.4rem", md: "6.4rem" }, letterSpacing: -3 }}>Bhargav HJ</Typography>
        <Typography sx={{ mt: 3, maxWidth: 760, fontSize: { xs: "1.15rem", md: "1.35rem" }, lineHeight: 1.8, color: "#cbd5e1" }}>Full Stack Developer building web and cross-platform mobile applications with React, Next.js, React Native, TypeScript, Node.js, REST APIs and IoT/BLE integrations.</Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }} flexWrap="wrap"><Button href="#projects" variant="contained" size="large" endIcon={<ArrowOutward />}>View Projects</Button><Button href={GITHUB} target="_blank" rel="noreferrer" variant="outlined" size="large" startIcon={<GitHub />}>GitHub</Button><Button href={LINKEDIN} target="_blank" rel="noreferrer" variant="outlined" size="large" startIcon={<LinkedIn />}>LinkedIn</Button></Stack>
      </Box></Container>

      <Section id="skills" eyebrow="Technical Skills" title="A stack grounded in real project work"><Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 2 }}>{skills.map((group) => <Card key={group.title} sx={{ borderRadius: 3, border: "1px solid", borderColor: "divider" }}><CardContent sx={{ p: 3 }}><Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>{group.title}</Typography><Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">{group.items.map((item) => <Chip key={item} label={item} variant="outlined" />)}</Stack></CardContent></Card>)}</Box></Section>

      <Section id="projects" eyebrow="Personal Projects" title="Things I have actually built"><Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3 }}>{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</Box><Typography sx={{ mt: 3, color: "#94a3b8" }}>Live demo links are shown only when a verified deployment exists. Projects without a published demo are marked instead of using placeholder links.</Typography></Section>

      <Section id="experience" eyebrow="Professional Experience" title="Building production software at Skoegle IoT Innovations"><Card sx={{ borderRadius: 4, border: "1px solid", borderColor: "divider" }}><CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={2}><Box><Typography variant="h4" sx={{ fontWeight: 800 }}>Full Stack Developer</Typography><Typography variant="h6" color="primary.main" sx={{ mt: 0.5 }}>Skoegle IoT Innovations Pvt. Ltd.</Typography></Box><Chip label="Oct 2024 – Present" variant="outlined" /></Stack>
        <Typography color="text.secondary" sx={{ mt: 1 }}>Previously Web Developer Intern · Jul 2024 – Sep 2024 · Promoted within three months.</Typography><Divider sx={{ my: 3 }} />
        <Stack spacing={1.5}>{["Develop web applications with React.js and Next.js.", "Build cross-platform mobile applications with React Native and Expo.", "Integrate REST APIs and BLE functionality for IoT applications.", "Work with Realm Database, MongoDB, AsyncStorage and Zustand.", "Use Redis for caching in professional application infrastructure.", "Work with GitHub Actions for CI/CD automation.", "Convert Figma designs into responsive, production-ready interfaces.", "Contribute to the development and maintenance of the company website."].map((item) => <Typography key={item} sx={{ lineHeight: 1.7 }}>• {item}</Typography>)}</Stack>
      </CardContent></Card>
      <Typography variant="h5" sx={{ fontWeight: 800, mt: 7, mb: 3 }}>Selected professional projects</Typography><Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>{professionalProjects.map((project) => <Card key={project.title} sx={{ borderRadius: 4, border: "1px solid", borderColor: "divider" }}><CardContent sx={{ p: 3 }}><Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>{project.title}</Typography><Typography color="text.secondary" sx={{ lineHeight: 1.7, mb: 2.5 }}>{project.description}</Typography><Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">{project.technologies.map((item) => <Chip key={item} label={item} size="small" />)}</Stack></CardContent></Card>)}</Box></Section>

      <Section id="education" eyebrow="Education" title="Academic foundation"><Card sx={{ borderRadius: 4, border: "1px solid", borderColor: "divider" }}><CardContent sx={{ p: 4 }}><Stack direction="row" spacing={2} alignItems="flex-start"><School color="primary" /><Box><Typography variant="h6" sx={{ fontWeight: 800 }}>Bachelor of Engineering — Information Science</Typography><Typography color="text.secondary">Dr. Ambedkar Institute of Technology, Bangalore · 2023</Typography><Typography color="text.secondary" sx={{ mt: 1 }}>CGPA: 6.5 / 10</Typography></Box></Stack></CardContent></Card></Section>

      <Section id="contact" eyebrow="Contact" title="Let's build something useful"><Card sx={{ borderRadius: 4, border: "1px solid", borderColor: "divider" }}><CardContent sx={{ p: { xs: 3, md: 5 } }}><Typography sx={{ color: "#cbd5e1", lineHeight: 1.8, maxWidth: 720 }}>I am interested in full-stack, React Native, IoT/BLE and product-focused engineering opportunities.</Typography><Stack spacing={2} sx={{ mt: 4 }}><Button href={`mailto:${EMAIL}`} startIcon={<Email />} sx={{ justifyContent: "flex-start", color: "inherit" }}>{EMAIL}</Button><Button href="tel:+918310320913" startIcon={<Phone />} sx={{ justifyContent: "flex-start", color: "inherit" }}>+91 8310320913</Button><Button startIcon={<LocationOn />} sx={{ justifyContent: "flex-start", color: "inherit" }}>Bangalore, India</Button></Stack><Stack direction="row" spacing={1.5} sx={{ mt: 3 }}><Button href={GITHUB} target="_blank" rel="noreferrer" startIcon={<GitHub />} variant="outlined">GitHub</Button><Button href={LINKEDIN} target="_blank" rel="noreferrer" startIcon={<LinkedIn />} variant="outlined">LinkedIn</Button></Stack></CardContent></Card></Section>
    </Box>
    <Box component="footer" sx={{ position: "relative", zIndex: 1, py: 4, borderTop: "1px solid rgba(255,255,255,.08)" }}><Container maxWidth="lg"><Typography color="text.secondary" align="center">© {year} Bhargav HJ. Built with Next.js and MUI.</Typography></Container></Box>
  </Box>
}
