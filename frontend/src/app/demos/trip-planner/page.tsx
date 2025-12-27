'use client'

import Link from 'next/link'
import { MapPin, ExternalLink, Code2, BookOpen } from 'lucide-react'

export default function TripPlannerDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/demos"
          className="text-sm text-indigo-600 hover:text-indigo-700 mb-4 inline-block"
        >
          ← Back to Demos
        </Link>

        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-10 h-10 text-white" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 gradient-text">
              AI Trip Planner
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Intelligent travel assistant powered by AI agents and map integration
            </p>
          </div>
        </div>
      </div>

      {/* Demo Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="card p-6">
          <div className="text-3xl font-bold gradient-text mb-2">Chapter 13</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Case Study
          </div>
        </div>

        <div className="card p-6">
          <div className="text-3xl font-bold text-emerald-600 mb-2">Live</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Status
          </div>
        </div>

        <div className="card p-6">
          <div className="text-3xl font-bold text-amber-600 mb-2">FastAPI</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Backend Stack
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Natural language trip planning',
            'Real-time map integration (Amap API)',
            'Multi-step agent reasoning',
            'Location search and recommendations',
            'Route planning and optimization',
            'Interactive chat interface'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Technology Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Frontend
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Vue 3</li>
              <li>• TypeScript</li>
              <li>• Vite</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Backend
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• FastAPI</li>
              <li>• HelloAgents</li>
              <li>• MCP Protocol</li>
              <li>• Uvicorn</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              AI/Tools
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• OpenAI GPT</li>
              <li>• Amap Maps API</li>
              <li>• MCP Server</li>
              <li>• Tool Registry</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary justify-center opacity-50 cursor-not-allowed"
          onClick={(e) => {
            e.preventDefault();
            alert('⚠️ Demo Not Running\n\nThis demo needs to be started separately. Please follow the setup instructions below to run the demo locally.');
          }}
        >
          <ExternalLink className="w-5 h-5" />
          Launch Demo
        </a>

        <Link
          href="/chapters/13"
          className="btn-secondary justify-center"
        >
          <BookOpen className="w-5 h-5" />
          Read Chapter 13
        </Link>

        <a
          href="https://github.com/datawhalechina/hello-agents/tree/main/code/chapter13"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary justify-center"
        >
          <Code2 className="w-5 h-5" />
          View Source Code
        </a>
      </div>

      {/* Setup Instructions */}
      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          🚀 Running Locally
        </h3>

        <div className="space-y-4 text-sm">
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              1. Start Backend:
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code>{`cd code/chapter13/helloagents-trip-planner/backend
pip install -r requirements.txt
uvicorn app.api.main:app --reload --port 8000`}</code>
            </pre>
          </div>

          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              2. Start Frontend:
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code>{`cd code/chapter13/helloagents-trip-planner/frontend
npm install
npm run dev`}</code>
            </pre>
          </div>

          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              3. Configure Environment:
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code>{`# Create .env file with:
OPENAI_API_KEY=your_key
AMAP_MAPS_API_KEY=your_key`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
