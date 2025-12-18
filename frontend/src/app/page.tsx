import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Hello Agents - Building AI Agents from Scratch
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A comprehensive tutorial on AI agents by Datawhale China
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
          <p>This course will teach you how to build AI agents step by step through 16 comprehensive chapters.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/chapters" className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer hover:border-blue-500">
            <h3 className="text-xl font-semibold mb-2">📚 16 Chapters</h3>
            <p className="text-gray-600">Explore comprehensive coverage of AI agent concepts</p>
            <p className="text-blue-600 mt-4">Start Learning →</p>
          </Link>
          
          <Link href="/chapters" className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer hover:border-blue-500">
            <h3 className="text-xl font-semibold mb-2">💻 Hands-on Learning</h3>
            <p className="text-gray-600">Practical examples and code implementations</p>
            <p className="text-blue-600 mt-4">View Chapters →</p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Course Structure</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Part I:</strong> Fundamentals of Agents and Language Models (Chapters 1-3)</p>
            <p><strong>Part II:</strong> Building Your LLM Agent (Chapters 4-7)</p>
            <p><strong>Part III:</strong> Advanced Knowledge (Chapters 8-12)</p>
            <p><strong>Part IV:</strong> Comprehensive Case Studies (Chapters 13-15)</p>
            <p><strong>Part V:</strong> Graduation Project (Chapter 16)</p>
          </div>
        </div>
      </div>
    </main>
  )
}
