'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-Tutor",
    subtitle: "Online Learning Platform",
    description: "A full-featured e-learning platform with student and instructor dashboards, course management, and payment integration.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Stripe"],
    features: [
      "Student and Instructor role-based dashboards",
      "Course creation with curriculum builder",
      "Stripe payment integration for course purchase",
      "Real-time messaging between students and instructors",
    ],
    liveUrl: "https://e-tutor.vercel.app",
    githubUrl: "https://github.com/naimur401/e-tutor",
    gradient: "from-blue-600 to-cyan-500",
    checkColor: "from-blue-600 to-cyan-500",
    border: "border-blue-200 dark:border-blue-800",
    emoji: "🎓",
  },
  {
    id: 2,
    title: "AI Knowledge Base",
    subtitle: "Multi-tenant RAG-powered SaaS",
    description: "A production-ready SaaS application that allows users to create workspaces, upload documents, and ask questions using Retrieval-Augmented Generation (RAG) technology with real-time streaming responses.",
    tech: ["Next.js 14", "TypeScript", "Node.js", "Express.js", "MongoDB", "Pinecone", "Redis", "TinyLlama", "JWT"],
    features: [
      "Multi-tenant workspace isolation with JWT auth & rate limiting",
      "Document upload (PDF & text) with RAG pipeline",
      "Hybrid search using BM25 + Pinecone vector DB",
      "Real-time streaming response (ChatGPT-style) with source citation",
    ],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-violet-600 to-purple-500",
    checkColor: "from-violet-600 to-purple-500",
    border: "border-violet-200 dark:border-violet-800",
    emoji: "🤖",
  },
  {
    id: 3,
    title: "CodeAnalyzer",
    subtitle: "AI-Powered GitHub Analysis Platform",
    description: "A comprehensive code analysis platform with local LLM integration, real-time job processing, and automated security scanning for GitHub repositories.",
    tech: ["Next.js 16", "Express.js", "MongoDB", "Redis/BullMQ", "Ollama/Llama2", "TypeScript", "WebSocket"],
    features: [
      "GitHub OAuth integration with repository management",
      "AI-powered code analysis using Ollama/Llama2",
      "Security vulnerability scanning with dependency checks",
      "Real-time job progress via WebSocket + BullMQ queue",
    ],
    liveUrl: "https://codeanalyzer.vercel.app",
    githubUrl: "https://github.com/naimur401/codeanalyzer",
    gradient: "from-emerald-600 to-teal-500",
    checkColor: "from-emerald-600 to-teal-500",
    border: "border-emerald-200 dark:border-emerald-800",
    emoji: "🔍",
  },
  {
    id: 4,
    title: "QueryCraft",
    subtitle: "Student Management System",
    description: "A complete student management system with course enrollment, event participation, grade tracking, real-time notifications, and full CRUD operations featuring React.js, Node.js, MySQL, and Firebase authentication.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Firebase", "Vite", "SweetAlert2"],
    features: [
      "Student CRUD with auto Firebase account creation",
      "Course enrollment and grade management (A+, A, B+, etc.)",
      "Event participation with status tracking (Upcoming, Joined, Completed)",
      "Real-time notifications system with read/unread status",
      "Database triggers for automatic enrollment logging",
      "RESTful API with 15+ endpoints",
      "Responsive UI with Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-500 to-red-500",
    checkColor: "from-orange-500 to-red-500",
    border: "border-orange-200 dark:border-orange-800",
    emoji: "🔍",
  },
  {
    id: 5,
    title: "MarketHub",
    subtitle: "Multi-Vendor Marketplace SaaS",
    description: "A multi-tenant SaaS marketplace platform with role-based access control, secure authentication, and scalable backend architecture.",
    tech: ["Next.js 15", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "Multi-tenant SaaS with role-based access (Customer, Vendor, Admin)",
      "JWT authentication with protected API routes",
      "Scalable backend services using Node.js and MongoDB",
      "Responsive UI built with Next.js 15 and Tailwind CSS",
    ],
    liveUrl: "https://multi-vendor-marketplace-saas.vercel.app",
    githubUrl: "https://github.com/naimur401/multi-vendor-marketplace-saas",
    gradient: "from-purple-600 to-violet-500",
    checkColor: "from-purple-600 to-violet-500",
    border: "border-purple-200 dark:border-purple-800",
    emoji: "🛒",
  },
  {
    id: 6,
    title: "StayVista",
    subtitle: "Smart & Secure Room Rental Platform",
    description: "A comprehensive room rental platform with multi-role system, secure payment processing, and full admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    features: [
      "Multi-role system (Guest, Host, Admin)",
      "JWT authentication with secure session management",
      "Stripe payment integration for seamless transactions",
      "Comprehensive admin and host dashboards",
    ],
    liveUrl: "https://stayvista-smart-and-secure-room-ren.vercel.app/",
    githubUrl: "https://github.com/naimur401/Stayvista-Smart-and-Secure-Room-Rental-Platform-Using-MERN-STACK",
    gradient: "from-orange-500 to-red-500",
    checkColor: "from-orange-500 to-red-500",
    border: "border-orange-200 dark:border-orange-800",
    emoji: "🏠",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">All Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A collection of my full-stack development projects</p>
        </motion.div>

        {/* সব প্রজেক্ট একসাথে Grid লেআউটে */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className={"relative bg-white dark:bg-gray-900 rounded-2xl border-2 " + project.border + " overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"}
            >
              <div className={"h-1.5 w-full bg-gradient-to-r " + project.gradient} />

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{project.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className={"text-xs font-semibold bg-gradient-to-r " + project.gradient + " bg-clip-text text-transparent"}>{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description.substring(0, 120)}...</p>

                {/* Features Section */}
                <div className="rounded-xl p-3 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 mb-4">
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Key Features</p>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className={"mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-gradient-to-r " + project.checkColor + " flex items-center justify-center"}>
                          <span className="text-white text-[10px]">✓</span>
                        </span>
                        <span className="truncate">{feature.length > 45 ? feature.substring(0, 45) + '...' : feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className={"border " + project.border + " text-gray-700 dark:text-gray-300 text-[10px] px-2 py-0.5 bg-white dark:bg-gray-800"}>
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className={"border " + project.border + " text-gray-500 dark:text-gray-400 text-[10px] px-2 py-0.5 bg-white dark:bg-gray-800"}>
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"inline-flex items-center gap-1.5 bg-gradient-to-r " + project.gradient + " text-white px-3 py-2 rounded-lg text-xs font-bold shadow hover:shadow-lg transition-shadow"}
                  >
                    Live Demo <ExternalLink size={12} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}