"use client"
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
  Slide,
  Fab,
  alpha,
  Switch,
  FormControlLabel
} from "@mui/material"
import {
  KeyboardArrowUp,
  GitHub,
  LinkedIn,
  Email,
  Work,
  School,
  Code,
  Phone,
  LocationOn,
  Download,
  Menu,
  Close,
  LightMode,
  DarkMode,
  Star,
  Rocket,
  TrendingUp,
  Verified,
  ArrowOutward
} from "@mui/icons-material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"

// Custom themes with enhanced colors
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1",
      light: "#818CF8",
      dark: "#4F46E5"
    },
    secondary: {
      main: "#EC4899",
      light: "#F472B6",
      dark: "#DB2777"
    },
    background: {
      default: "#0F0F23",
      paper: "#1A1A2E"
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#CBD5E1"
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "4rem",
      background: "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent"
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem"
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem"
    }
  },
  shape: {
    borderRadius: 16
  }
})

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6366F1",
      light: "#818CF8",
      dark: "#4F46E5"
    },
    secondary: {
      main: "#EC4899",
      light: "#F472B6",
      dark: "#DB2777"
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8FAFC"
    },
    text: {
      primary: "#1E293B",
      secondary: "#64748B"
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "4rem",
      background: "linear-gradient(135deg, #6366F1 0%, #EC4899 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent"
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem"
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem"
    }
  },
  shape: {
    borderRadius: 16
  }
})

// Enhanced Portfolio Data
const portfolioData = {
  name: "Bhargav HJ",
  title: "FULL-STACK DEVELOPER",
  tagline: "Crafting Digital Experiences That Inspire",
  about:
    "Passionate full-stack developer with 1+ years of experience building modern web applications. I specialize in creating efficient, scalable solutions with cutting-edge technologies that deliver exceptional user experiences.",
  email: "bhargav.hj@example.com",
  phone: "+91 8310320913",
  location: "Bangalore, India",
  social: {
    github: "https://github.com/bhargavhj",
    linkedin: "https://linkedin.com/in/bhargavhj"
  },
  stats: [
    { value: "15+", label: "Projects Delivered", icon: <Rocket /> },
    { value: "1+", label: "Years Experience", icon: <TrendingUp /> },
    { value: "10+", label: "Technologies", icon: <Code /> },
    { value: "100%", label: "Client Satisfaction", icon: <Verified /> }
  ],
  skills: {
    "Frontend Mastery": [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material-UI"
    ],
    "Backend Expertise": [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "GraphQL",
      "MongoDB"
    ],
    "Dev Tools": ["Git & GitHub", "Docker", "AWS", "Jest", "Webpack", "CI/CD"]
  },
  projects: [
    {
      title: "NeoCommerce Platform",
      description:
        "Modern e-commerce solution with AI-powered recommendations and seamless payment integration.",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Stripe",
        "AI Integration"
      ],
      github: "https://github.com/bhargavhj/ecommerce",
      live: "#",
      featured: true
    },
    {
      title: "TaskFlow Pro",
      description:
        "Intelligent task management with team collaboration, analytics, and automation features.",
      technologies: [
        "React",
        "Socket.io",
        "PostgreSQL",
        "Material-UI",
        "Redis"
      ],
      github: "https://github.com/bhargavhj/taskmanager",
      live: "#",
      featured: true
    },
    {
      title: "WeatherSphere",
      description:
        "Advanced weather dashboard with predictive analytics and beautiful data visualizations.",
      technologies: ["React", "Chart.js", "API Integration", "PWA", "CSS3"],
      github: "https://github.com/bhargavhj/weather-app",
      live: "#",
      featured: false
    }
  ],
  experience: [
    {
      company: "TechInnovate Solutions",
      position: "Full Stack Developer",
      period: "2023 - Present",
      description:
        "Leading development of cutting-edge web applications using modern tech stack and best practices.",
      achievements: [
        "Architected 10+ scalable applications",
        "Improved performance by 60%",
        "Mentored junior developers"
      ],
      tech: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      company: "DigitalCraft Agency",
      position: "Junior Developer",
      period: "2022 - 2023",
      description:
        "Collaborated on client projects and contributed to full-stack development initiatives.",
      achievements: [
        "Delivered 5+ client projects",
        "Implemented responsive designs",
        "Enhanced code quality"
      ],
      tech: ["JavaScript", "Python", "PostgreSQL", "Docker"]
    }
  ]
}

// Enhanced Background with Particles
const AnimatedBackground = ({ isDark }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        background: isDark
          ? "linear-gradient(135deg, #0F0F23 0%, #1E1B4B 50%, #312E81 100%)"
          : "linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 50%, #E0E7FF 100%)",
        overflow: "hidden"
      }}
    >
      {/* Animated gradient orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: i % 2 === 0 ? "400px" : "300px",
            height: i % 2 === 0 ? "400px" : "300px",
            background: `radial-gradient(circle, ${
              isDark
                ? i % 2 === 0
                  ? "rgba(99, 102, 241, 0.15)"
                  : "rgba(236, 72, 153, 0.1)"
                : i % 2 === 0
                ? "rgba(99, 102, 241, 0.08)"
                : "rgba(236, 72, 153, 0.05)"
            }, transparent 70%)`,
            borderRadius: "50%",
            top: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(40px)"
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </Box>
  )
}

// Floating Elements Component
const FloatingElements = ({ isDark }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none"
      }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: isDark ? "#6366F1" : "#4F46E5",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </Box>
  )
}

// Scroll to top component
function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: "center"
      })
    }
  }

  return (
    <Slide in={trigger} direction="up">
      {children}
    </Slide>
  )
}

// Enhanced Section Header with Scroll Animation
const SectionHeader = ({ title, subtitle, icon }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Box sx={{ textAlign: "center", mb: 8, mt: 4 }} ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          },
          hidden: { opacity: 0, y: 50 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }}
        >
          {icon}
          <Typography
            variant="h3"
            component="h2"
            sx={{ ml: 2, fontWeight: 700 }}
          >
            {title}
          </Typography>
        </Box>
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              {subtitle}
            </Typography>
          </motion.div>
        )}
      </motion.div>
    </Box>
  )
}

// Animated Card Component
const AnimatedCard = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, delay, ease: "easeOut" }
        },
        hidden: { opacity: 0, y: 60, scale: 0.9 }
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  )
}

// Animated Text Component
const AnimatedText = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: "easeOut" }
        },
        hidden: { opacity: 0, y: 30 }
      }}
    >
      {children}
    </motion.div>
  )
}

// Animated Skill Bar Component
const SkillBar = ({ skill, level, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Box sx={{ mb: 2 }} ref={ref}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body2" fontWeight="500">
          {skill}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {level}%
        </Typography>
      </Box>
      <Box
        sx={{
          height: 6,
          bgcolor: "background.paper",
          borderRadius: 3,
          overflow: "hidden"
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #6366F1, #EC4899)",
            borderRadius: 3
          }}
        />
      </Box>
    </Box>
  )
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  const theme = isDark ? darkTheme : lightTheme

  const scrollToSection = ref => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          overflow: "hidden"
        }}
      >
        <AnimatedBackground isDark={isDark} />
        <FloatingElements isDark={isDark} />

        {/* Enhanced Header */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: "blur(20px)",
            boxShadow: "none",
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            color: theme.palette.text.primary
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #6366F1, #EC4899)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  {portfolioData.name}
                </Typography>
              </motion.div>

              {/* Desktop Navigation */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 4,
                  alignItems: "center"
                }}
              >
                {["Projects", "Skills", "Experience", "Contact"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Button
                        color="inherit"
                        onClick={() => {
                          if (item === "Projects") scrollToSection(projectsRef)
                          if (item === "Skills") scrollToSection(skillsRef)
                          if (item === "Experience")
                            scrollToSection(experienceRef)
                          if (item === "Contact") scrollToSection(contactRef)
                        }}
                        sx={{
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          position: "relative",
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            bottom: -2,
                            left: 0,
                            width: 0,
                            height: "2px",
                            background:
                              "linear-gradient(135deg, #6366F1, #EC4899)",
                            transition: "width 0.3s ease"
                          },
                          "&:hover:after": {
                            width: "100%"
                          }
                        }}
                      >
                        {item}
                      </Button>
                    </motion.div>
                  )
                )}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isDark}
                        onChange={() => setIsDark(!isDark)}
                        icon={<LightMode sx={{ fontSize: 16 }} />}
                        checkedIcon={<DarkMode sx={{ fontSize: 16 }} />}
                      />
                    }
                    label=""
                  />
                </motion.div>
              </Box>

              {/* Mobile Menu */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  gap: 1
                }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={isDark}
                      onChange={() => setIsDark(!isDark)}
                      size="small"
                    />
                  }
                  label=""
                />
                <IconButton
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  sx={{ color: "inherit" }}
                >
                  {mobileMenuOpen ? <Close /> : <Menu />}
                </IconButton>
              </Box>
            </Toolbar>

            {/* Mobile Menu Items */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      pb: 2
                    }}
                  >
                    {["Projects", "Skills", "Experience", "Contact"].map(
                      (item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Button
                            fullWidth
                            onClick={() => {
                              if (item === "Projects")
                                scrollToSection(projectsRef)
                              if (item === "Skills") scrollToSection(skillsRef)
                              if (item === "Experience")
                                scrollToSection(experienceRef)
                              if (item === "Contact")
                                scrollToSection(contactRef)
                            }}
                            sx={{
                              justifyContent: "flex-start",
                              fontWeight: 600,
                              color: "inherit"
                            }}
                          >
                            {item}
                          </Button>
                        </motion.div>
                      )
                    )}
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </AppBar>

        <div id="back-to-top-anchor" />

        {/* Enhanced Hero Section */}
        <Container maxWidth="lg" sx={{ py: 12 }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            {/* Profile Image */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <Avatar
                    sx={{
                      width: 280,
                      height: 280,
                      background: "linear-gradient(135deg, #6366F1, #EC4899)",
                      fontSize: "5rem",
                      fontWeight: "bold",
                      border: `4px solid ${alpha(
                        theme.palette.primary.main,
                        0.2
                      )}`,
                      boxShadow: `0 20px 60px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )}`
                    }}
                  >
                    BH
                  </Avatar>
                  {/* Floating elements around avatar */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      zIndex: -1
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          border: `2px dashed ${alpha(
                            theme.palette.primary.main,
                            0.3
                          )}`,
                          borderRadius: "50%"
                        }}
                      />
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Hero Content */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Chip
                      label="🚀 AVAILABLE FOR FREELANCE"
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                        background: "linear-gradient(135deg, #6366F1, #EC4899)",
                        color: "white",
                        px: 2,
                        py: 1
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Typography
                      variant="h1"
                      gutterBottom
                      sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
                    >
                      {portfolioData.name}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Typography
                      variant="h4"
                      color="text.secondary"
                      gutterBottom
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {portfolioData.title}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ mb: 3, color: "primary.main", fontWeight: 500 }}
                    >
                      {portfolioData.tagline}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Typography
                      sx={{
                        mb: 4,
                        lineHeight: 1.7,
                        fontSize: "1.1rem",
                        maxWidth: 600
                      }}
                    >
                      {portfolioData.about}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "flex-start" }
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="contained"
                          size="large"
                          endIcon={<ArrowOutward />}
                          onClick={() => scrollToSection(contactRef)}
                          sx={{
                            background:
                              "linear-gradient(135deg, #6366F1, #EC4899)",
                            borderRadius: 3,
                            px: 4,
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            boxShadow: `0 8px 32px ${alpha(
                              theme.palette.primary.main,
                              0.3
                            )}`
                          }}
                        >
                          Start a Project
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outlined"
                          size="large"
                          startIcon={<Download />}
                          sx={{
                            borderColor: "primary.main",
                            color: "primary.main",
                            borderRadius: 3,
                            px: 4,
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: 600
                          }}
                        >
                          Download CV
                        </Button>
                      </motion.div>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Enhanced Stats Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {portfolioData.stats.map((stat, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={stat.label}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <AnimatedCard delay={index * 0.1}>
                  <Card
                    sx={{
                      p: 4,
                      textAlign: "center",
                      background: alpha(theme.palette.primary.main, 0.05),
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      borderRadius: 4,
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 20px 40px ${alpha(
                          theme.palette.primary.main,
                          0.15
                        )}`
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          mb: 2,
                          fontSize: "2rem"
                        }}
                      >
                        {stat.icon}
                      </Box>
                    </motion.div>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 500 }}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Enhanced Skills Section */}
        <Container maxWidth="lg" sx={{ py: 12 }} ref={skillsRef}>
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Technologies I work with to bring ideas to life"
            icon={<Code sx={{ fontSize: "2.5rem", color: "primary.main" }} />}
          />

          <Grid container spacing={6} justifyContent="center">
            {Object.entries(portfolioData.skills).map(
              ([category, skills], categoryIndex) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  key={category}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <AnimatedCard delay={categoryIndex * 0.2}>
                    <Card
                      sx={{
                        p: 4,
                        height: "100%",
                        background: alpha(theme.palette.background.paper, 0.7),
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${alpha(
                          theme.palette.primary.main,
                          0.1
                        )}`,
                        borderRadius: 4
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          textAlign: "center",
                          background:
                            "linear-gradient(135deg, #6366F1, #EC4899)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          mb: 3
                        }}
                      >
                        {category}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1.5,
                          justifyContent: "center"
                        }}
                      >
                        {skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.05
                            }}
                            viewport={{ once: true }}
                          >
                            <Chip
                              label={skill}
                              variant="outlined"
                              sx={{
                                borderColor: "primary.main",
                                color: "primary.main",
                                fontWeight: 500,
                                "&:hover": {
                                  background: alpha(
                                    theme.palette.primary.main,
                                    0.1
                                  )
                                }
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                    </Card>
                  </AnimatedCard>
                </Grid>
              )
            )}
          </Grid>
        </Container>

        {/* Enhanced Projects Section */}
        <Box
          sx={{ background: alpha(theme.palette.primary.main, 0.02), py: 12 }}
          ref={projectsRef}
        >
          <Container maxWidth="lg">
            <SectionHeader
              title="Featured Projects"
              subtitle="A showcase of my recent work and innovations"
              icon={
                <School sx={{ fontSize: "2.5rem", color: "primary.main" }} />
              }
            />

            <Grid container spacing={4} justifyContent="center">
              {portfolioData.projects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={project.title}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <AnimatedCard delay={index * 0.15}>
                    <Card
                      sx={{
                        p: 0,
                        height: "100%",
                        background: theme.palette.background.paper,
                        border: `1px solid ${alpha(
                          theme.palette.primary.main,
                          0.1
                        )}`,
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: `0 8px 32px ${alpha(
                          theme.palette.primary.main,
                          0.1
                        )}`,
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: `0 20px 40px ${alpha(
                            theme.palette.primary.main,
                            0.2
                          )}`
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      {/* Project Header */}
                      <Box
                        sx={{
                          p: 3,
                          pb: 2,
                          background: `linear-gradient(135deg, ${alpha(
                            theme.palette.primary.main,
                            0.1
                          )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                          borderBottom: `1px solid ${alpha(
                            theme.palette.primary.main,
                            0.1
                          )}`
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            mb: 2
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                          {project.featured && (
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Chip
                                icon={<Star />}
                                label="Featured"
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            </motion.div>
                          )}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                      </Box>

                      {/* Project Content */}
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            mb: 3
                          }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: techIndex * 0.1
                              }}
                              viewport={{ once: true }}
                            >
                              <Chip
                                label={tech}
                                size="small"
                                sx={{
                                  background: alpha(
                                    theme.palette.primary.main,
                                    0.1
                                  ),
                                  color: "primary.main",
                                  fontWeight: 500
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="small"
                              startIcon={<GitHub />}
                              variant="outlined"
                              sx={{ borderRadius: 2 }}
                            >
                              Source Code
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="small"
                              startIcon={<ArrowOutward />}
                              variant="contained"
                              sx={{
                                background:
                                  "linear-gradient(135deg, #6366F1, #EC4899)",
                                borderRadius: 2
                              }}
                            >
                              Live Demo
                            </Button>
                          </motion.div>
                        </Box>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Enhanced Experience Section */}
        <Container maxWidth="lg" sx={{ py: 12 }} ref={experienceRef}>
          <SectionHeader
            title="Professional Journey"
            subtitle="My path through the tech industry"
            icon={<Work sx={{ fontSize: "2.5rem", color: "primary.main" }} />}
          />

          <Box sx={{ position: "relative" }}>
            {/* Timeline */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                height: "100%",
                background: "linear-gradient(180deg, #6366F1, #EC4899)",
                display: { xs: "none", md: "block" }
              }}
            />

            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, threshold: 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: index % 2 === 0 ? "row" : "row-reverse"
                    },
                    alignItems: { xs: "flex-start", md: "center" },
                    mb: 6,
                    gap: 4
                  }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #6366F1, #EC4899)",
                        border: `3px solid ${theme.palette.background.default}`,
                        order: { xs: 1, md: index % 2 === 0 ? 1 : 3 },
                        alignSelf: { xs: "flex-start", md: "center" },
                        position: "relative",
                        zIndex: 2
                      }}
                    />
                  </motion.div>

                  {/* Experience Card */}
                  <AnimatedCard delay={index * 0.1}>
                    <Card
                      sx={{
                        p: 4,
                        flex: 1,
                        order: { xs: 2, md: 2 },
                        background: alpha(theme.palette.background.paper, 0.7),
                        backdropFilter: "blur(10px)",
                        border: `1px solid ${alpha(
                          theme.palette.primary.main,
                          0.1
                        )}`,
                        borderRadius: 4
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                          flexWrap: "wrap",
                          gap: 2
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, color: "primary.main" }}
                          >
                            {exp.position}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 500 }}>
                            {exp.company}
                          </Typography>
                        </Box>
                        <Chip
                          label={exp.period}
                          color="primary"
                          variant="outlined"
                          sx={{ fontWeight: 500 }}
                        />
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{ mb: 3, lineHeight: 1.6 }}
                      >
                        {exp.description}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 3
                        }}
                      >
                        {exp.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: techIndex * 0.1
                            }}
                            viewport={{ once: true }}
                          >
                            <Chip
                              label={tech}
                              size="small"
                              sx={{
                                background: alpha(
                                  theme.palette.primary.main,
                                  0.1
                                ),
                                color: "primary.main"
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1
                        }}
                      >
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: achievementIndex * 0.1
                              }}
                              viewport={{ once: true }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "primary.main"
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ color: "text.secondary" }}
                                >
                                  {achievement}
                                </Typography>
                              </Box>
                            </motion.div>
                          )
                        )}
                      </Box>
                    </Card>
                  </AnimatedCard>

                  {/* Spacer for alternating layout */}
                  <Box
                    sx={{
                      flex: 1,
                      order: { xs: 3, md: index % 2 === 0 ? 3 : 1 },
                      display: { xs: "none", md: "block" }
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>

        {/* Enhanced Contact Section */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${alpha(
              theme.palette.primary.main,
              0.05
            )}, ${alpha(theme.palette.secondary.main, 0.05)})`,
            py: 12
          }}
          ref={contactRef}
        >
          <Container maxWidth="lg">
            <SectionHeader
              title="Let's Connect"
              subtitle="Ready to bring your next project to life? Let's talk!"
              icon={
                <Email sx={{ fontSize: "2.5rem", color: "primary.main" }} />
              }
            />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <AnimatedCard delay={0.2}>
                <Card
                  sx={{
                    p: 6,
                    textAlign: "center",
                    width: "100%",
                    maxWidth: 600,
                    background: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.1
                    )}`,
                    borderRadius: 4
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ fontWeight: 700, mb: 3 }}
                    >
                      Start a Project
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 6, fontSize: "1.1rem" }}
                    >
                      Have an idea? Let's discuss how we can turn it into an
                      amazing digital experience.
                    </Typography>
                  </motion.div>

                  <Grid container spacing={4} sx={{ mb: 6 }}>
                    {[
                      { icon: <Email />, text: portfolioData.email },
                      { icon: <Phone />, text: portfolioData.phone },
                      { icon: <LocationOn />, text: portfolioData.location }
                    ].map((item, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2 + index * 0.1
                          }}
                          viewport={{ once: true }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 1
                            }}
                          >
                            <Box
                              sx={{ color: "primary.main", fontSize: "2rem" }}
                            >
                              {item.icon}
                            </Box>
                            <Typography variant="body2" fontWeight="500">
                              {item.text}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      justifyContent: "center",
                      mb: 4
                    }}
                  >
                    {[
                      { icon: <GitHub />, href: portfolioData.social.github },
                      {
                        icon: <LinkedIn />,
                        href: portfolioData.social.linkedin
                      }
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <IconButton
                          href={social.href}
                          target="_blank"
                          sx={{
                            background: alpha(theme.palette.primary.main, 0.1),
                            "&:hover": {
                              background: alpha(theme.palette.primary.main, 0.2)
                            }
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Email />}
                      href={`mailto:${portfolioData.email}`}
                      sx={{
                        background: "linear-gradient(135deg, #6366F1, #EC4899)",
                        borderRadius: 3,
                        px: 6,
                        py: 2,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        boxShadow: `0 8px 32px ${alpha(
                          theme.palette.primary.main,
                          0.3
                        )}`
                      }}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </Card>
              </AnimatedCard>
            </Box>
          </Container>
        </Box>

        {/* Enhanced Footer */}
        <Box
          sx={{
            py: 4,
            borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: "blur(10px)"
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                © {new Date().getFullYear()} {portfolioData.name}. Crafted with
                passion and modern technology.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Scroll to Top */}
        <ScrollTop>
          <Fab
            size="medium"
            sx={{
              background: "linear-gradient(135deg, #6366F1, #EC4899)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(135deg, #4F46E5, #DB2777)"
              }
            }}
          >
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>
      </Box>
    </ThemeProvider>
  )
}
