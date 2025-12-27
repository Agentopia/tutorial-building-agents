import Link from 'next/link'
import { Code2, Zap, Trophy, Rocket } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen page-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Build AI Agents
              <br />
              <span className="text-cyan-200">From Scratch</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Master AI agent development through 16 interactive chapters with hands-on coding, real projects, and expert guidance
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/chapters"
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Learning →
              </Link>
              <Link
                href="/demos"
                className="px-8 py-4 bg-indigo-800 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200 border-2 border-indigo-400"
              >
                View Live Demos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              Interactive Code
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Run Python code directly in your browser with real-time feedback
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              Instant Validation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Auto-graded exercises with hints and solutions
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              Progress Tracking
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Earn points, unlock achievements, and track your learning
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
              Real Projects
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Build trip planners, research agents, and AI simulations
            </p>
          </div>
        </div>

        {/* Course Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            Course Structure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                part: 'I',
                title: 'Fundamentals',
                chapters: '1-3',
                description: 'Introduction to AI agents, history, and LLM basics',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                part: 'II',
                title: 'Building Agents',
                chapters: '4-7',
                description: 'Classic paradigms, frameworks, and your own agent system',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                part: 'III',
                title: 'Advanced Topics',
                chapters: '8-12',
                description: 'Memory, RAG, protocols, training, and evaluation',
                color: 'from-purple-500 to-pink-500'
              },
              {
                part: 'IV',
                title: 'Case Studies',
                chapters: '13-15',
                description: 'Trip planner, research agent, and AI town simulation',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                part: 'V',
                title: 'Capstone',
                chapters: '16',
                description: 'Graduation project and future outlook',
                color: 'from-amber-500 to-orange-500'
              }
            ].map((section) => (
              <div key={section.part} className="card p-6">
                <div className={`
                  inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3
                  bg-gradient-to-r ${section.color}
                `}>
                  Part {section.part} • Ch {section.chapters}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 border border-indigo-200 dark:border-indigo-700 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Ready to Start Building?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of developers learning to build production-ready AI agents.
            Start with Chapter 1 or jump into our interactive demos.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/chapters"
              className="btn-primary"
            >
              Begin Chapter 1
            </Link>
            <Link
              href="/demos"
              className="btn-secondary"
            >
              Explore Demos
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
