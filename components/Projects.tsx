import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'MarketHub - Multi-Vendor Marketplace SaaS',
    description: 'A multi-tenant SaaS marketplace platform with role-based access control, secure authentication, and scalable backend architecture.',
    tech: ['Next.js 15', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    features: [
      'Multi-tenant SaaS with role-based access (Customer, Vendor, Admin)',
      'JWT authentication with protected API routes',
      'Scalable backend services using Node.js and MongoDB',
      'Responsive UI built with Next.js 15 and Tailwind CSS',
    ],
    liveUrl: 'https://multi-vendor-marketplace-saas.vercel.app',
    githubUrl: 'https://github.com/naimur401/multi-vendor-marketplace-saas',
  },
  {
    id: 2,
    title: 'StayVista - Smart & Secure Room Rental Platform',
    description: 'A comprehensive room rental platform with multi-role system, secure payment processing, and full admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    features: [
      'Multi-role system (Guest, Host, Admin)',
      'JWT authentication with secure session management',
      'Stripe payment integration for seamless transactions',
      'Comprehensive admin & host dashboards',
    ],
    liveUrl: 'https://stayvista-smart-and-secure-room-ren.vercel.app/',
    githubUrl: 'https://github.com/naimur401/Stayvista-Smart-and-Secure-Room-Rental-Platform-Using-MERN-STACK',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully selected projects showcasing my full-stack development expertise
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-blue-200 text-blue-700 bg-blue-50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}