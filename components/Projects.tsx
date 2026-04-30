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
    featured: true,
    gradient: "from-blue-600 to-cyan-500",
    lightGradient: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
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
    featured: true,
    gradient: "from-violet-600 to-purple-500",
    lightGradient: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    emoji: "🤖",
  },
  {
    id: 3,
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
    featured: false,
    gradient: "from-purple-600 to-violet-500",
    lightGradient: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    emoji: "🛒",
  },
  {
    id: 4,
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
    featured: false,
    gradient: "from-orange-500 to-red-500",
    lightGradient: "from-orange-50 to-red-50",
    border: "border-orange-200",
    emoji: "🏠",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully selected projects showcasing my full-stack development expertise
          </p>
        </motion.div>

        {/* Top 2 featured - side by side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative bg-white rounded-2xl border-2 ${project.border} overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300`}
            >
              {/* Gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Featured badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  <Star size={10} fill="currentColor" /> Featured
                </span>
              </div>

              <div className="p-8 flex flex-col h-full">
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{project.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-5">{project.description}</p>

                {/* Features */}
                <div className={`bg-gradient-to-br ${project.lightGradient} rounded-xl p-4 border ${project.border} mb-5`}>
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Key Features</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <span className="text-white text-xs">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className={`border ${project.border} text-gray-700 text-xs font-medium`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:shadow-lg transition-shadow`}
                  >
                    Live Demo <ExternalLink size={14} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-gray-400 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom 2 - side by side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.filter(p => !p.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative bg-white rounded-2xl border-2 ${project.border} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              {/* Gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-7 flex flex-col h-full">
                {/* Title */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{project.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Features */}
                <div className={`bg-gradient-to-br ${project.lightGradient} rounded-xl p-4 border ${project.border} mb-4`}>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <span className="text-white text-xs">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className={`border ${project.border} text-gray-700 text-xs`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow hover:shadow-lg transition-shadow`}
                  >
                    Live Demo <ExternalLink size={14} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-gray-400 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                  >
                    <Github size={16} /> GitHub
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
