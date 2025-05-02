"use client"
import { motion } from "framer-motion";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import { X, ChevronsLeftRight, Minus, Code, Server, Database, Globe, FileCode, Terminal, GitBranch, Settings, Cpu, Network, Layers, Workflow, Laptop, PenTool, Zap, Briefcase, Smartphone } from 'lucide-react';

export default function MainContent() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [activeExp, setActiveExp] = useState<number | null>(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const initAnimation = async () => {
      if (typeof window === 'undefined' || !badgeRef.current) return;

      await document.fonts.ready;
      const element = badgeRef.current.querySelector(".wavy-text");
      if (!element) return;

      const { chars } = splitText(element);
      requestAnimationFrame(() => {
        if (badgeRef.current) {
          badgeRef.current.style.visibility = "visible";
        }
        
        animate(
          chars,
          { y: [-2, 2] },
          {
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 1,
            delay: stagger(0.05, { startDelay: -0.5 })
          }
        );
      });
    };

    initAnimation();
  }, []);

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { amount: 0.8 },
    transition: { type: "spring", stiffness: 100, damping: 15 }
  };

  return (
    <div className={`md:ml-[300px] min-h-screen bg-[#0a192f] p-4 sm:p-6 md:p-8 transition-all duration-300 ease-in-out`}>
      <div className="max-w-4xl mx-auto">
        <section id="home" className="min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 w-full"
          >
            <div className="flex flex-col lg:flex-row items-start">
              <div className="lg:w-[50%]">
                <h1 className="text-[#ccd6f6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col md:flex-row md:items-center gap-4">
                  Kenny NIYONSHUTI
                  {/* <motion.div 
                    initial={{ rotate: -12 }}
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: -12 
                    }}
                    transition={{ 
                      y: { 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className="mt-2 md:mt-0 transform-gpu"
                  >
                    <div className="text-xs sm:text-sm bg-[#64ffda] text-[#0a192f] px-3 sm:px-4 py-1
                      font-mono inline-block relative whitespace-nowrap
                      before:content-[''] before:absolute before:left-[-6px] before:sm:left-[-8px] before:top-0
                      before:border-r-[6px] before:sm:border-r-[8px] before:border-r-[#64ffda]
                      before:border-y-[9px] before:sm:border-y-[11px] before:border-y-transparent
                      after:content-[''] after:absolute after:right-[-6px] after:sm:right-[-8px] after:top-0
                      after:border-l-[6px] after:sm:border-l-[8px] after:border-l-[#64ffda]
                      after:border-y-[9px] after:sm:border-y-[11px] after:border-y-transparent
                      transform-gpu"
                    >
                      a.k.a Developer
                    </div>
                  </motion.div> */}
                </h1>
                <h2 className="text-[#8892b0] text-2xl sm:text-3xl md:text-4xl mt-4">Full Stack Engineer</h2>
                <p className="text-[#8892b0] max-w-xl text-sm sm:text-base mt-4">
                  Building exceptional digital experiences with modern technologies.
                </p>
              </div>
              
              <div className='lg:w-[50%] pr-[10px] mt-[20px] lg:mt-0'>
  <div className="backdrop-filter backdrop-blur-lg bg-opacity-5 rounded-xl select-none border-2 border-transparent relative bg-gradient-to-r from-[#112240] to-[#0a192f] p-[1px] shadow-lg transition-all duration-300 hover:scale-[1.01]">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 blur-sm pointer-events-none"></div>
    
    <div className="relative rounded-xl bg-[#0a192f] overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
        <div className="h-[2px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
      </div>

      <div className="px-6 py-4 flex items-center justify-start space-x-2">
        <div className="rounded-full bg-red-400 w-4 h-4 flex items-center justify-center hover:scale-110 transition"><X className='h-[12px]' /></div>
        <div className="rounded-full bg-orange-400 w-4 h-4 flex items-center justify-center hover:rotate-180 transition"><ChevronsLeftRight className='h-[12px]' /></div>
        <div className="rounded-full bg-green-200 w-4 h-4 flex items-center justify-center hover:scale-110 transition"><Minus className='h-[12px]' /></div>
      </div>

      <div className="lg:px-8 px-4 py-8 border-t-2 border-indigo-900 overflow-hidden">
        <code className="font-mono text-sm leading-relaxed space-y-1 block">
          <div><span className="text-pink-500">const</span> <span className="text-white">coder</span> <span className="text-pink-500">=</span> <span className="text-gray-400">&#123;</span></div>
          <div><span className="ml-6 text-white">nickname:</span> <span className="text-amber-300">'Developer'</span><span className="text-gray-400">,</span></div>
          <div><span className="ml-6 text-white">mission:</span> <span className="text-amber-300">'Make tech less boring'</span><span className="text-gray-400">,</span></div>
          <div><span className="ml-6 text-white">skills:</span> <span className="text-amber-300">['✨ Creativity', '⚙️ Engineering', '💻 Code']</span><span className="text-gray-400">,</span></div>
          <div><span className="ml-6 text-white">funFact:</span> <span className="text-amber-300">'Uses semicolons for style 😎'</span><span className="text-gray-400">,</span></div>
          <div><span className="text-gray-400">&#125;;</span></div>
        </code>
      </div>
    </div>
  </div>
</div>

            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-12 md:py-20">
          <motion.div {...fadeInUp} className="space-y-6 md:space-y-8">
            <h2 className="text-[#ccd6f6] text-2xl sm:text-3xl font-bold">
              <span className="text-[#64ffda] font-mono">02.</span> About Me
            </h2>
            <motion.div 
              className="bg-[#112240] p-5 sm:p-8 rounded-lg shadow-xl space-y-4 sm:space-y-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-[#8892b0] leading-relaxed text-sm sm:text-base">
                I'm a developer passionate about crafting clean, accessible, and responsive user interfaces that merge thoughtful design with solid engineering. My favorite work lives at the intersection of creativity and functionality.
              </p>
              
              <p className="text-[#8892b0] leading-relaxed text-sm sm:text-base">
                Currently, I'm focused on building full-stack web applications using tools like Next.js, TypeScript, Tailwind CSS, and SQL. I love working on projects that solve real problems - from improving public transportation with{' '}
                <a href="#" className="hover:text-[#64ffda] font-bold" suppressHydrationWarning>
                  MyBusApp
                </a>{' '}
                to creating seamless media experiences with{' '}
                <a href="#" className="hover:text-[#64ffda] font-bold" suppressHydrationWarning>
                  TadaWatch
                </a>.
              </p>

              <p className="text-[#8892b0] leading-relaxed text-sm sm:text-base">
                Over the years, I've worked on various projects including{' '}
                <a href="#" className="hover:text-[#64ffda] font-bold" suppressHydrationWarning>
                  church website 
                </a>{' '}and{' '}
                <a href="#" className="hover:text-[#64ffda] font-bold hover:underline" suppressHydrationWarning>
                  rental platform
                </a>{' '}
                that have helped sharpen both my frontend and backend skills.
              </p>

              <p className="text-[#8892b0] leading-relaxed text-sm sm:text-base">
                When I'm not coding, you can usually find me praying, playing Football & basketball, editing videos, or enjoying music and movies.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3, once: true }}
    transition={{ type: "spring", stiffness: 100, damping: 18 }}
    className="space-y-8"
  >
    <h2 className="text-[#ccd6f6] text-2xl sm:text-3xl font-bold mb-6">
      <span className="text-[#64ffda] font-mono">03.</span> Skills
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        // Frontend
        { name: "Next.js", icon: <Zap className="w-6 h-6" /> },
        { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },

        { name: "JavaScript", icon: <FileCode className="w-6 h-6" /> },
        { name: "TypeScript", icon: <FileCode className="w-6 h-6" /> },
        { name: "HTML5", icon: <Globe className="w-6 h-6" /> },
        { name: "CSS3", icon: <PenTool className="w-6 h-6" /> },

        // Backend
        { name: "Node.js", icon: <Server className="w-6 h-6" /> },

        { name: "PHP", icon: <FileCode className="w-6 h-6" /> },

        // Databases & ORMs
        { name: "SQL", icon: <Database className="w-6 h-6" /> },
        { name: "Prisma", icon: <Database className="w-6 h-6" /> },
        { name: "Drizzle ORM", icon: <Database className="w-6 h-6" /> },

        // DevOps & Tools
        { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
        // Concepts

        { name: "System Administration", icon: <Cpu className="w-6 h-6" /> },

        { name: "Figma", icon: <PenTool className="w-6 h-6" /> },

        { name: "IT Support & Troubleshooting", icon: <Settings className="w-6 h-6" /> },
        { name: "NetOps", icon: <Network className="w-6 h-6" /> },
      ].map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ y: -8, scale: 1.05, boxShadow: "0 8px 32px 0 rgba(100,255,218,0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="bg-[#112240] rounded-xl shadow-lg flex flex-col items-center p-5 group transition-all duration-200 border border-[#233554] hover:border-[#64ffda] cursor-pointer"
        >
          <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-[#233554] group-hover:bg-[#64ffda]/10 transition">
            <div className="text-[#64ffda] group-hover:text-[#64ffda]">
              {skill.icon}
            </div>
          </div>
          <span className="text-[#ccd6f6] text-sm font-semibold tracking-wide group-hover:text-[#64ffda] transition">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-12 md:py-20">
          <motion.div {...fadeInUp} className="space-y-6 md:space-y-8">
            <h2 className="text-[#ccd6f6] text-2xl sm:text-3xl font-bold">
              <span className="text-[#64ffda] font-mono">04.</span> Experience
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Freelancer Web Developer & Media Officer",
                  company: "Knowing God Missions",
                  period: "2024 – Present",
                  duties: [
                    "At Knowing God Missions, I worked as a freelance web developer where I designed, built, and maintained the organization's website. I collaborated closely with the media and leadership teams to create a modern, responsive, and user-friendly platform that supported their communication goals. In addition to web development, I provided general IT support and helped edit multimedia content to enhance their digital outreach."
                  ]
                },
                {
                  title: "Freelancer Web Developer",
                  company: "Linking General Car Rental",
                  period: "2025",
                  duties: [
"At Linking General Car Rental, I served as a freelance web developer responsible for creating and implementing their online rental platform. I worked closely with management to develop an intuitive booking system and vehicle management interface. The platform streamlined their rental operations while providing customers with a seamless experience for browsing inventory and making reservations. I also integrated secure payment processing and implemented robust backend systems to manage their fleet database."
                  ]
                },
                {
                  title: "IT Support Technician",
                  company: "Premier Bet",
                  period: "5 months in 2023",
                  duties: [
                    "During my time at Premier Bet Rwanda, I was responsible for maintaining and monitoring IT systems to ensure their reliability and security. I provided technical support across departments, quickly resolving system issues and optimizing infrastructure performance. My contributions helped maintain smooth day-to-day business operations in a fast-paced environment."
                  ]
                },
                {
                  title: "Software Developer Intern",
                  company: "kLab",
                  period: "2021 – 2022",
                  duties: [
                    "As a software developer intern at kLab, I gained hands-on experience building interactive web interfaces using technologies like Next.js, PHP, SQL, and Python. I collaborated with cross-functional teams on the integration of software and hardware components, contributed to feature development, and implemented testing procedures to improve product reliability. This internship was instrumental in sharpening both my frontend and backend skills while working in a collaborative tech hub."
                  ]
                }
              ].map((exp, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#112240] rounded-lg shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button
                    className="w-full p-4 sm:p-6 text-left flex flex-col focus:outline-none"
                    onClick={() => setActiveExp(activeExp === index ? null : index)}
                  >
                    <h3 className="text-[#64ffda] text-lg sm:text-xl font-bold">{exp.title}</h3>
                    <p className="text-[#8892b0] text-xs sm:text-sm mt-2">{exp.company} · {exp.period}</p>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: activeExp === index ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="text-[#8892b0] text-xs sm:text-sm space-y-2 px-4 sm:px-6 pb-4 sm:pb-6">
                      {exp.duties.map((duty, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-[#ccd6f6] text-2xl sm:text-3xl font-bold">
              <span className="text-[#64ffda] font-mono">04.</span> Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "TadaWatch",
                  description: "A sleek streaming platform built with Next.js and modern web technologies",
                  tech: ["NextJS", "TypeScript", "Tailwind CSS"],
                  link: "https://www.tadawatch.com/",
                  image: "/tadawatch.png"
                },
                {
                  title: "MyBusApp (Personal Project)",
                  description: "A public transportation Web app that helps users track bus locations and schedules in real-time",
                  tech: ["NextJS", "Typescript", "Drizzel ORM", "Tailwind CSS","Prisma","SQL"],
                  link: "https://mybusapp-v1.vercel.app/",
                  image: "/mybus.webp"
                },
                {
                  title: "Linking General Car Rental Ltd",
                  description: "A car rental platform built with modern web technologies for managing vehicle rentals and bookings",
                  tech: ["PHP", "SQL", "HTML", "Bootstrap", "JavaScript"],
                  link: "https://linkingcar.com/",
                  image: "/linkingcar.png"
                },
                {
                  title: "Knowing God Missions/ Tumenye Imana",
                  description: "A church website built with modern web technologies for managing church activities, events and media content",
                  tech: ["PHP", "SQL", "HTML", "Bootstrap", "JavaScript"],
                  link: "https://www.knowinggodmissions.com/",
                  image: "/knowinggodmissions.png"
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-[#112240] p-4 sm:p-6 rounded-lg shadow-xl flex flex-col h-full"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Use a regular div for the image container */}
                  <div className="relative w-full h-[150px] sm:h-[180px] mb-3 sm:mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-[#64ffda] text-lg sm:text-xl mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-[#8892b0] text-xs sm:text-sm mb-3 sm:mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[#64ffda] text-xs sm:text-sm bg-[#233554] px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-[#64ffda] underline text-xs mt-auto inline-block hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    suppressHydrationWarning
                  >
                    View Project
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer Section */}
        <footer className="py-10 sm:py-16 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[#8892b0] text-xs sm:text-sm"
          >
            <p className="mb-4">
            Designed, developed, and deployed by Kenny😎. a developer who turns ideas💡 into polished web experiences. If you’re looking for clean code, and someone who actually enjoys debugging, you’ve found your guy🥶.
            </p>
            <p className="mb-6">
              
            </p>
            
          </motion.div>
        </footer>
      </div>
    </div>
  );
}