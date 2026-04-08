export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
        </div>

        {/* About Content */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            I&apos;m a passionate full-stack developer dedicated to building secure and scalable web applications. 
            As a fresher, I combine theoretical knowledge with practical problem-solving skills to deliver high-quality solutions.
          </p>

          <p>
            My expertise spans the MERN stack (MongoDB, Express, React, Node.js) and Django, allowing me to architect 
            complete applications from frontend interfaces to robust backend systems. I&apos;m particularly focused on creating 
            secure authentication mechanisms and optimizing application performance.
          </p>

          <p>
            Currently, I&apos;m deepening my knowledge in system design and advanced architectural patterns. 
            I believe in continuous learning and staying updated with emerging technologies to craft better solutions 
            for real-world problems.
          </p>

          <div className="pt-6 border-t border-gray-200">
            <p className="text-gray-600 italic">
              Beyond coding, I love exploring new technologies, contributing to open source, and sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}