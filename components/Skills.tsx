import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'REST APIs'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'JWT', 'Stripe'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My real-world expertise built through hands-on development and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}