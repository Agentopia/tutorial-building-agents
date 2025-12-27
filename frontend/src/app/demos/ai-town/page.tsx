import Link from 'next/link'
import { Users, ExternalLink, Code2, BookOpen } from 'lucide-react'

export default function AITownDemo() {
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
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
            <Users className="w-10 h-10 text-white" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 gradient-text">
              AI Town (Cyber Town)
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Multi-agent social simulation with intelligent NPCs that remember and evolve
            </p>
          </div>
        </div>
      </div>

      {/* Demo Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="card p-6">
          <div className="text-3xl font-bold gradient-text mb-2">Chapter 15</div>
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
          <div className="text-3xl font-bold text-amber-600 mb-2">Godot 4.5</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Game Engine
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
            'Intelligent NPC dialogue system',
            'Short-term and long-term memory',
            'Dynamic affection system',
            '2D pixel-style game world',
            'Natural language conversations',
            'Real-time logging and analytics',
            'Multiple NPC personalities',
            'Relationship evolution tracking'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
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
              <li>• Godot 4.5</li>
              <li>• GDScript</li>
              <li>• Pixel Art Assets</li>
              <li>• HTTP Client</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Backend
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• FastAPI</li>
              <li>• HelloAgents</li>
              <li>• SQLite</li>
              <li>• Uvicorn</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">
              AI/Tools
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• OpenAI / DeepSeek</li>
              <li>• Qdrant Vector DB</li>
              <li>• Memory Manager</li>
              <li>• Affection System</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="btn-primary justify-center opacity-50 cursor-not-allowed pointer-events-none">
          <ExternalLink className="w-5 h-5" />
          Launch Demo (Requires Godot)
        </div>

        <Link
          href="/chapters/15"
          className="btn-secondary justify-center"
        >
          <BookOpen className="w-5 h-5" />
          Read Chapter 15
        </Link>

        <a
          href="https://github.com/datawhalechina/hello-agents/tree/main/code/chapter15"
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
              1. Install Godot Engine:
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code>{`# Download Godot 4.5 from:
# https://godotengine.org/download
# Windows/Mac/Linux supported`}</code>
            </pre>
          </div>

          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              2. Start Backend:
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code>{`cd code/chapter15/Helloagents-AI-Town/backend
pip install -r requirements.txt
python main.py`}</code>
            </pre>
          </div>

          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              3. Open Godot Project:
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code>{`# In Godot:
# 1. Click "Import"
# 2. Browse to helloagents-ai-town/project.godot
# 3. Press F5 to run`}</code>
            </pre>
          </div>

          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              4. Configure Environment:
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code>{`# Create .env file with:
OPENAI_API_KEY=your_key
# Or use other LLM providers`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
