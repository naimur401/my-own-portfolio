export default function About() {
  const stats = [
    { value: '15+', label: 'Projects Built' },
    { value: '10+', label: 'Technologies' },
    { value: '1+', label: 'Years Learning' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-blue-50 dark:bg-blue-950 rounded-xl py-6 px-4 border border-blue-100 dark:border-blue-900">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <p>I'm a passionate full-stack developer dedicated to building secure and scalable web applications. I combine strong theoretical foundations with practical problem-solving skills to deliver high-quality solutions.</p>
          <p>My expertise spans the MERN stack (MongoDB, Express, React, Node.js) and Django, allowing me to architect complete applications from frontend interfaces to robust backend systems. I'm particularly focused on creating secure authentication mechanisms and optimizing application performance.</p>
          <p>Currently deepening my knowledge in system design and advanced architectural patterns. I believe in continuous learning and staying updated with emerging technologies to craft better solutions for real-world problems.</p>
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 italic">Beyond coding, I love exploring new technologies, contributing to open source, and sharing knowledge with the developer community.</p>
          </div>
        </div>
      </div>
    </section>
  )
}