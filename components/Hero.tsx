import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
            Hi, I&apos;m <span className="text-blue-600">Naimur Rahman</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I build secure and scalable web applications with modern UI using MERN stack and Django.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Projects
            <ArrowRight size={20} />
          </a>

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Download Resume
            <Download size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}