import Link from 'next/link'
import { MapPin, Search, Users } from 'lucide-react'

const demos = [
  {
    id: 'trip-planner',
    title: 'AI Trip Planner',
    description: 'Intelligent travel assistant that helps plan your trips using AI agents and map integration.',
    chapter: 13,
    icon: MapPin,
    color: 'from-blue-500 to-cyan-500',
    status: 'Available'
  },
  {
    id: 'deep-research',
    title: 'Deep Research Agent',
    description: 'Automated research agent that can search the web, summarize findings, and generate reports.',
    chapter: 14,
    icon: Search,
    color: 'from-purple-500 to-pink-500',
    status: 'Available'
  },
  {
    id: 'ai-town',
    title: 'AI Town Simulation',
    description: 'Multi-agent social simulation where AI agents interact, build relationships, and live in a virtual town.',
    chapter: 15,
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    status: 'Available'
  }
]

export default function DemosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 gradient-text">
          Live Agent Demonstrations
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Experience fully-functional AI agent applications built using the concepts from this course.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo) => {
          const Icon = demo.icon
          return (
            <Link
              key={demo.id}
              href={`/demos/${demo.id}`}
              className="card p-6 group"
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-xl mb-4
                bg-gradient-to-br ${demo.color}
                flex items-center justify-center
                group-hover:scale-110 transition-transform duration-300
              `}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {demo.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 rounded-full font-medium">
                    {demo.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {demo.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    From Chapter {demo.chapter}
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-1 transition-transform">
                    Try Demo →
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Info Box */}
      <div className="mt-12 p-6 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl">
        <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
          💡 About These Demos
        </h3>
        <p className="text-indigo-800 dark:text-indigo-200 text-sm">
          These demos showcase real-world applications of AI agents built using the HelloAgents framework.
          Each demo corresponds to a comprehensive case study chapter where you'll learn how to build
          similar applications from scratch.
        </p>
      </div>
    </div>
  )
}
