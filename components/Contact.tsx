'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'naimurrahman8392@gmail.com',
    href: 'mailto:naimurrahman8392@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'https://github.com/naimur401',
    href: 'https://github.com/naimur401',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/farhan-rahman-b6525a277/',
    href: 'https://www.linkedin.com/in/farhan-rahman-b6525a277/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            I&apos;m always interested in hearing about new opportunities and collaborations.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">
                      {link.label}
                    </p>
                    <p className="text-gray-900 font-semibold text-sm break-all">
                      {link.value}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Alternative CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Or send me an email and I&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}