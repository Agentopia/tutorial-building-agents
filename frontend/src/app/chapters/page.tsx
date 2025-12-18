import Link from 'next/link'

const chapters = [
  { id: 1, title: 'Introduction to Agents', part: 'I' },
  { id: 2, title: 'History of Agents', part: 'I' },
  { id: 3, title: 'Fundamentals of Large Language Models', part: 'I' },
  { id: 4, title: 'Building Classic Agent Paradigms', part: 'II' },
  { id: 5, title: 'Building Agents with Low-Code Platforms', part: 'II' },
  { id: 6, title: 'Framework Development Practice', part: 'II' },
  { id: 7, title: 'Building Your Agent Framework', part: 'II' },
  { id: 8, title: 'Memory and Retrieval', part: 'III' },
  { id: 9, title: 'Context Engineering', part: 'III' },
  { id: 10, title: 'Agent Communication Protocols', part: 'III' },
  { id: 11, title: 'Agentic-RL', part: 'III' },
  { id: 12, title: 'Agent Performance Evaluation', part: 'III' },
  { id: 13, title: 'Intelligent Travel Assistant', part: 'IV' },
  { id: 14, title: 'Automated Deep Research Agent', part: 'IV' },
  { id: 15, title: 'Building Cyber Town', part: 'IV' },
  { id: 16, title: 'Graduation Project', part: 'V' },
]

export default function ChaptersPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-2">Course Chapters</h1>
        <p className="text-gray-600 mb-8">Select a chapter to begin learning</p>

        <div className="space-y-6">
          {['I', 'II', 'III', 'IV', 'V'].map(part => {
            const partChapters = chapters.filter(ch => ch.part === part)
            const partTitles: { [key: string]: string } = {
              'I': 'Fundamentals of Agents and Language Models',
              'II': 'Building Your Large Language Model Agent',
              'III': 'Advanced Knowledge Extension',
              'IV': 'Comprehensive Case Studies',
              'V': 'Graduation Project and Future Outlook'
            }
            
            return (
              <div key={part} className="border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Part {part}: {partTitles[part]}
                </h2>
                <div className="space-y-2">
                  {partChapters.map(chapter => (
                    <Link
                      key={chapter.id}
                      href={`/chapters/${chapter.id}`}
                      className="block p-4 bg-gray-50 hover:bg-blue-50 rounded border hover:border-blue-500 transition"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold">Chapter {chapter.id}</span>
                          <span className="mx-2">•</span>
                          <span>{chapter.title}</span>
                        </div>
                        <span className="text-blue-600">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
