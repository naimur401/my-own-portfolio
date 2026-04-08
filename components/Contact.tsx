'use client'

import { Mail, Github, Linkedin, File, Send, ExternalLink, MapPin } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'naimurrahman8392@gmail.com',
    href: 'mailto:naimurrahman8392@gmail.com',
    color: 'from-red-400 to-red-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/naimur401',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/farhan-rahman-b6525a277/',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: File,
    label: 'Resume',
    value: 'Download CV',
    href: '/Resume (1).pdf',
    color: 'from-green-400 to-green-600',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities, interesting projects, and collaborations. Let&apos;s work together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative bg-slate-800 rounded-lg p-6 group-hover:bg-slate-900 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${link.color} group-hover:shadow-lg group-hover:shadow-current transition-all duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <ExternalLink className="text-slate-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" size={16} />
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2">
                    {link.label}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {link.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to start something great?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch and let&apos;s discuss your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:naimurrahman8392@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              <Send size={20} />
              Send Email
            </a>
            <a
              href="https://github.com/naimur401"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}