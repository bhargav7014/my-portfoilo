"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowOutward, GitHub, LinkedIn, Email, Phone, ContentCopy, Check } from "@mui/icons-material"
import styles from "./page.module.css"

const GITHUB = "https://github.com/bhargav7014"
const LINKEDIN = "https://linkedin.com/in/bhargav-hj-b0a9b7283"
const EMAIL = "bhargavhj7@gmail.com"
const PHONE = "+91 8310320913"

const skillGroups = [
  ["LANG", "JavaScript", "TypeScript", "SQL"],
  ["WEB", "React.js", "Next.js", "HTML5", "CSS3"],
  ["MOBILE", "React Native", "Expo"],
  ["BACKEND", "Node.js", "Express.js", "REST APIs", "Redis"],
  ["DATA", "MongoDB", "Realm", "Firebase", "AsyncStorage", "Zustand"],
  ["DEVOPS", "Git", "GitHub Actions", "VS Code", "Postman", "Figma"],
]

const projects = [
  { n:"01", type:"SYSTEMS / IoT", title:"IoT Device Monitoring Platform", text:"Production-style monitoring for connected devices with telemetry ingestion, lifecycle tracking, threshold alerts and real-time events.", detail:"Redis · MongoDB · JWT/RBAC · Docker · GitHub Actions", tech:["TypeScript","Node.js","MongoDB","Redis"], repo:"commandcode" },
  { n:"02", type:"AI / WEB", title:"AI Resume Analyzer", text:"Resume builder and AI-assisted analyzer with templates, PDF/DOCX import, enhancement workflows and ATS-oriented analysis.", detail:"React/Vite · Express proxy · PDF.js · Mammoth · Groq AI", tech:["React","Vite","Express","Groq AI"], repo:"ai-resume" },
  { n:"03", type:"MOBILE / AI", title:"CookMitra", text:"React Native recipe experience with authentication, discovery, favorites, AI recipe generation, chat and offline-aware handling.", detail:"Separate Node/Express backend with MongoDB persistence", tech:["React Native","Expo","Node.js","MongoDB"], repo:"Bharat-ai-recipe-app", backend:"indian-recipe-app-backend" },
  { n:"04", type:"PRODUCT / WEB", title:"SaaS Admin & User Dashboard", text:"Role-based SaaS dashboard with authentication, protected routes, admin/user experiences, user management and profile flows.", detail:"Currently being developed further", tech:["React","TypeScript","Vite","Zustand"], repo:"saas-app" },
]

const professional = [
  ["BLE POWER","IoT / MOBILE","Professional IoT mobile work involving BLE communication, device pairing and device management, with Realm and Zustand for local data/state handling.","React Native · BLE · Realm · Zustand · Redis · GitHub Actions"],
  ["LIV APP","CONNECTED HEALTH","Professional mobile application work including device link/unlink flows, Sleep and Activity modules, and REST API integration.","React Native · Expo · REST APIs"],
  ["COMPANY WEBSITE","WEB / UI","Professional web development and maintenance using React.js and Next.js, including responsive interfaces implemented from Figma designs.","React.js · Next.js · Figma · Responsive UI"],
]

function WorldCanvas({ progress, mouseX, mouseY }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext("2d")
    let raf = 0, t = 0
    const stars = Array.from({length:70}, (_,i)=>({x:(i*.618)%1,y:(i*.37)%1,s:.4+(i%3)*.5}))
    const resize = () => {
      const d = Math.min(devicePixelRatio || 1, 2)
      c.width = c.clientWidth*d; c.height = c.clientHeight*d
      ctx.setTransform(d,0,0,d,0,0)
    }
    const draw = () => {
      const w=c.clientWidth,h=c.clientHeight,p=progress.get(),mx=(mouseX.get()-.5),my=(mouseY.get()-.5)
      if(!w||!h) return
      t++
      ctx.clearRect(0,0,w,h)
      const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,"#020706"); bg.addColorStop(.55,"#0a211d"); bg.addColorStop(1,"#020504")
      ctx.fillStyle=bg; ctx.fillRect(0,0,w,h)
      stars.forEach((s,i)=>{ctx.fillStyle="rgba(220,235,215,"+(.12+.12*Math.sin(t*.015+i))+")";ctx.beginPath();ctx.arc(s.x*w+mx*20,s.y*h+my*10,s.s,0,7);ctx.fill()})
      const rx=w*.68+mx*25, ry=h*(.31-p*.08)+my*15, rr=Math.min(w,h)*(.14+p*.055)
      const glow=ctx.createRadialGradient(rx,ry,4,rx,ry,rr*3);glow.addColorStop(0,"rgba(232,178,67,.18)");glow.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=glow;ctx.fillRect(0,0,w,h)
      ;[["#102824",110,1.2],["#091815",70,3.7],["#050e0c",42,6.1]].forEach((a,k)=>{
        ctx.beginPath();ctx.moveTo(0,h);for(let x=0;x<=w;x+=12)ctx.lineTo(x,h*(.58+k*.08)-Math.sin(x*.008+a[2])*a[1]-Math.sin(x*.019+a[2]*2)*a[1]*.35+my*k*5+mx*k*10);ctx.lineTo(w,h);ctx.closePath();ctx.fillStyle=a[0];ctx.fill()
      })
      ctx.fillStyle="#030807"
      for(let i=0;i<20;i++){const x=i*w/19+mx*18, bh=25+(i*29)%60;ctx.fillRect(x,h*.64-bh,9+(i%3)*5,bh)}
      ctx.save();ctx.translate(rx,ry);ctx.rotate(p*.45-.05);ctx.strokeStyle="rgba(247,194,74,.9)";ctx.shadowColor="rgba(247,194,74,.65)";ctx.shadowBlur=24;ctx.lineWidth=2.5
      ctx.beginPath();ctx.arc(0,0,rr,0,7);ctx.stroke();ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(0,0,rr*.38,rr,0,0,7);ctx.stroke();ctx.beginPath();ctx.ellipse(0,0,rr,rr*.38,0,0,7);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-rr*1.15);ctx.lineTo(0,rr*1.15);ctx.stroke();ctx.restore()
      for(let i=0;i<6;i++){const x=w*(.08+i*.16)+Math.sin(t*.001+i)*25+mx*15,y=h*(.58+i*.045);const f=ctx.createRadialGradient(x,y,2,x,y,w*.25);f.addColorStop(0,"rgba(170,200,186,.08)");f.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=f;ctx.fillRect(x-w*.25,y-80,w*.5,160)}
      ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(w*.34+mx*30,h*.79);ctx.lineTo(w*.52+mx*42,h*.72);ctx.lineTo(w*.74+mx*48,h*.79);ctx.lineTo(w,h*.73);ctx.lineTo(w,h);ctx.closePath();ctx.fillStyle="#020605";ctx.fill()
      const fx=w*.52+mx*55,fy=h*(.75-p*.035);ctx.save();ctx.translate(fx,fy);ctx.fillStyle="#010202";ctx.beginPath();ctx.ellipse(0,25,21,8,0,0,7);ctx.fill();ctx.fillRect(-4,-3,8,30);ctx.beginPath();ctx.arc(0,-12,8,0,7);ctx.fill();ctx.rotate(-.2+p*.18);ctx.fillRect(5,-4,38,2);ctx.restore()
      raf=requestAnimationFrame(draw)
    }
    resize(); window.addEventListener("resize",resize); raf=requestAnimationFrame(draw)
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize)}
  },[progress,mouseX,mouseY])
  return <canvas ref={ref} className={styles.canvas} aria-hidden="true" />
}

function Project({item,index}) {
  const [show,setShow]=useState(false)
  return <motion.article className={styles.project} initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.7,delay:index*.08}} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
    <div className={styles.projectArt}><span>{item.n}</span><i className={styles.projectCore}/><b>{item.type}</b><em>{show?"OPEN SOURCE ↗":"SCROLL / HOVER"}</em></div>
    <div className={styles.projectInfo}><small>SELECTED WORK · 2026</small><h3>{item.title}</h3><p>{item.text}</p><label>{item.detail}</label><div className={styles.tags}>{item.tech.map(t=><span key={t}>{t}</span>)}</div><div className={styles.links}><a href={GITHUB+"/"+item.repo} target="_blank" rel="noreferrer">SOURCE <GitHub fontSize="inherit"/></a>{item.backend&&<a href={GITHUB+"/"+item.backend} target="_blank" rel="noreferrer">BACKEND <ArrowOutward fontSize="inherit"/></a>}</div></div>
  </motion.article>
}

export default function Portfolio(){
  const [progress,setProgress]=useState(0),[menu,setMenu]=useState(false),[copied,setCopied]=useState("")
  const scrollProgress=useMotionValue(0), mouseX=useMotionValue(.5),mouseY=useMotionValue(.5)
  const springX=useSpring(mouseX,{stiffness:70,damping:24}),springY=useSpring(mouseY,{stiffness:70,damping:24})
  const year=useMemo(()=>new Date().getFullYear(),[])
  useEffect(()=>{const s=()=>{const max=document.documentElement.scrollHeight-innerHeight,v=max>0?scrollY/max:0;scrollProgress.set(v);setProgress(v)};s();addEventListener("scroll",s,{passive:true});return()=>removeEventListener("scroll",s)},[scrollProgress])
  useEffect(()=>{const m=e=>{mouseX.set(e.clientX/innerWidth);mouseY.set(e.clientY/innerHeight)};addEventListener("pointermove",m,{passive:true});return()=>removeEventListener("pointermove",m)},[mouseX,mouseY])
  const copy=async(v,k)=>{try{await navigator.clipboard.writeText(v);setCopied(k);setTimeout(()=>setCopied(""),1500)}catch{}}
  return <main className={styles.page}>
    <div className={styles.grain}/>
    <header className={progress>.03?styles.nav+" "+styles.navOn:styles.nav}><a className={styles.logo} href="#top">BH<span>.</span></a><nav className={menu?styles.mobileNav:styles.navLinks}>{[["WORK","projects"],["STACK","skills"],["EXPERIENCE","experience"],["CONTACT","contact"]].map(([a,b])=><a key={b} href={"#"+b} onClick={()=>setMenu(false)}>{a}</a>)}</nav><div className={styles.navRight}><a href="#contact">LET&apos;S TALK <ArrowOutward fontSize="inherit"/></a><button onClick={()=>setMenu(!menu)} aria-label="Toggle navigation"><i/><i/></button></div></header>

    <section id="top" className={styles.hero}><WorldCanvas progress={scrollProgress} mouseX={springX} mouseY={springY}/><div className={styles.vignette}/><div className={styles.heroMeta}>01 — FULL STACK / MOBILE / IoT</div><div className={styles.heroCopy}><p className={styles.eyebrow}>BHARGAV HJ · DEVELOPER</p><h1>Building<br/><em>digital</em><br/>experiences.</h1><p>Full Stack Developer building web and cross-platform mobile products with React, Next.js, React Native, TypeScript, Node.js and IoT/BLE integrations.</p><div className={styles.actions}><a className={styles.primary} href="#projects">EXPLORE WORK <ArrowOutward fontSize="inherit"/></a><a className={styles.ghost} href={GITHUB} target="_blank" rel="noreferrer">GITHUB <GitHub fontSize="inherit"/></a></div></div><div className={styles.heroSide}>SCROLL TO EXPLORE <i/></div><div className={styles.heroFoot}><span>BASED IN BANGALORE, INDIA</span><span>FULL STACK · MOBILE · IoT</span><span>{String(Math.round(progress*100)).padStart(3,"0")}%</span></div></section>

    <section className={styles.statement}><span>02</span><div><p className={styles.eyebrow}>A DEVELOPER WHO LIKES SYSTEMS</p><h2>I turn ideas into <em>working products.</em></h2></div><p>From responsive interfaces to connected devices, I work across the stack and care about how every layer fits together — product, frontend, mobile, backend, data and delivery.</p></section>

    <section id="skills" className={styles.skills}><div className={styles.sectionHead}><div><p className={styles.eyebrow}>03 — TOOLKIT</p><h2>The stack behind<br/><em>the work.</em></h2></div><p>Technologies I use across web, mobile, backend and connected applications.</p></div><div className={styles.system}><div className={styles.core}><b>BH</b><span>FULL<br/>STACK</span></div>{skillGroups.map((g,i)=><div key={g[0]} className={styles.node+" "+styles["node"+i]}>{g.map((v,j)=>j===0?<b key={v}>{v}</b>:<span key={v}>{v}</span>)}</div>)}</div></section>

    <section id="projects" className={styles.projects}><div className={styles.sectionHead}><div><p className={styles.eyebrow}>04 — SELECTED WORK</p><h2>Things I&apos;ve<br/><em>built.</em></h2></div><p>Real projects across AI, SaaS, mobile and IoT, with the engineering work kept visible.</p></div><div className={styles.projectGrid}>{projects.map((p,i)=><Project key={p.title} item={p} index={i}/>)}</div></section>

    <section id="experience" className={styles.experience}><span>05</span><div className={styles.experienceTitle}><p className={styles.eyebrow}>PROFESSIONAL EXPERIENCE</p><h2>Production software,<br/><em>not just demos.</em></h2><p>Full Stack Developer at Skoegle IoT Innovations Pvt. Ltd. · Oct 2024 — Present</p></div><div className={styles.timeline}>{professional.map((x,i)=><motion.article key={x[0]} initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{delay:i*.1}}><b>0{i+1}</b><div><small>{x[1]}</small><h3>{x[0]}</h3><p>{x[2]}</p><label>{x[3]}</label></div></motion.article>)}</div></section>

    <section className={styles.education}><span>06</span><div><p className={styles.eyebrow}>EDUCATION</p><h2>Information Science<br/><em>Engineering.</em></h2></div><div><strong>Dr. Ambedkar Institute of Technology</strong><p>Bangalore · 2023 · CGPA 6.5 / 10</p></div></section>

    <section id="contact" className={styles.contact}><div className={styles.contactOrb}/><p className={styles.eyebrow}>07 — CONTACT</p><h2>Let&apos;s build something<br/><em>worth remembering.</em></h2><p>For development opportunities, collaborations or project discussions, reach out directly.</p><div className={styles.actions}><a className={styles.primary} href={"mailto:"+EMAIL}>EMAIL ME <Email fontSize="inherit"/></a><a className={styles.ghost} href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN <LinkedIn fontSize="inherit"/></a></div><div className={styles.contactRows}><div><Email fontSize="small"/><span>{EMAIL}</span><button onClick={()=>copy(EMAIL,"e")}>{copied==="e"?<Check fontSize="small"/>:<ContentCopy fontSize="small"/>}</button></div><div><Phone fontSize="small"/><span>{PHONE}</span><button onClick={()=>copy(PHONE,"p")}>{copied==="p"?<Check fontSize="small"/>:<ContentCopy fontSize="small"/>}</button></div></div></section>

    <footer className={styles.footer}><span>© {year} BHARGAV HJ</span><span>FULL STACK · MOBILE · IoT</span><div><a href={GITHUB} target="_blank" rel="noreferrer"><GitHub fontSize="small"/></a><a href={LINKEDIN} target="_blank" rel="noreferrer"><LinkedIn fontSize="small"/></a><a href={"mailto:"+EMAIL}><Email fontSize="small"/></a></div></footer>
  </main>
}
