'use client'

import { useState } from 'react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiDjango, SiMongodb,
  SiPostgresql, SiFirebase, SiGit, SiGithub,
  SiJsonwebtokens, SiStripe
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50 dark:bg-blue-950',
    border: 'border-blue-200 dark:border-blue-800',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50 dark:bg-green-950',
    border: 'border-green-200 dark:border-green-800',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'Django', icon: SiDjango, color: '#44B78B' },
      { name: 'REST APIs', icon: SiNodedotjs, color: '#FF6C37' },
    ],
  },
  {
    title: 'Database',
    color: 'from-purple-500 to-violet-500',
    bg: 'bg-purple-50 dark:bg-purple-950',
    border: 'border-purple-200 dark:border-purple-800',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-950',
    border: 'border-orange-200 dark:border-orange-800',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#ffffff' },
      { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
    ],
  },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">My real-world expertise built through hands-on development and continuous learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={"rounded-2xl p-8 border-2 " + category.bg + " " + category.border + " transition-all duration-300 " + (hoveredCategory === category.title ? 'shadow-xl -translate-y-2' : 'shadow-sm')}
            >
              <div className="mb-6">
                <div className={"inline-block bg-gradient-to-r " + category.color + " rounded-lg px-4 py-1.5 mb-3"}>
                  <h3 className="text-base font-bold text-white">{category.title}</h3>
                </div>
                <div className={"h-0.5 bg-gradient-to-r " + category.color + " rounded-full opacity-30"}></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  const isHovered = hoveredSkill === category.title + '-' + skill.name
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(category.title + '-' + skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={"flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-gray-800 border transition-all duration-200 cursor-default " + (isHovered ? 'shadow-md border-gray-300 dark:border-gray-500 scale-105' : 'border-gray-100 dark:border-gray-700 shadow-sm')}
                    >
                      <div className={"transition-transform duration-200 " + (isHovered ? 'scale-125 rotate-12' : '')}>
                        <Icon size={28} color={skill.color} />
                      </div>
                      <span className={"text-base font-semibold transition-colors duration-200 " + (isHovered ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300')}>
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}