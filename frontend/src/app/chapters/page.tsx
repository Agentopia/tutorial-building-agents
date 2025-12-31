'use client'

import Link from 'next/link'
import { useProgress } from '@/hooks/useProgress'
import { useAuth } from '@/hooks/useAuth'

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
  const { isAuthenticated } = useAuth()
  const { getChapterProgress, getOverallProgress, isLoading } = useProgress()
  const overallProgress = getOverallProgress()

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-2">Course Chapters</h1>
        <p className="text-gray-600 mb-4">Select a chapter to begin learning</p>

        {/* Overall Progress Bar */}
        {!isLoading && isAuthenticated && (
          <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Overall Course Progress</span>
              <span className="text-sm font-bold text-blue-600">{overallProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        )}

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
                  {partChapters.map(chapter => {
                    const chapterProgress = getChapterProgress(chapter.id.toString())
                    const isCompleted = chapterProgress.completed
                    const hasQuiz = chapterProgress.quizScore !== undefined
                    const hasExercise = chapterProgress.exerciseCompleted

                    return (
                      <Link
                        key={chapter.id}
                        href={`/chapters/${chapter.id}`}
                        className="block p-4 bg-white hover:bg-blue-50 rounded border border-gray-200 hover:border-blue-500 transition-all duration-200 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="text-gray-900 flex-1">
                              <span className="font-semibold text-gray-900">Chapter {chapter.id}</span>
                              <span className="mx-2 text-gray-400">•</span>
                              <span className="text-gray-700">{chapter.title}</span>
                            </div>

                            {/* Progress Badges */}
                            <div className="flex items-center gap-2">
                              {isCompleted && (
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                                  ✓ Completed
                                </span>
                              )}
                              {hasQuiz && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                  Quiz: {chapterProgress.quizScore}%
                                </span>
                              )}
                              {hasExercise && (
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full flex items-center gap-1">
                                  ✓ Exercise
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-blue-600">→</span>
                        </div>

                        {/* Progress Bar */}
                        {!isLoading && isAuthenticated && chapterProgress.percentage > 0 && (
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                              style={{ width: `${chapterProgress.percentage}%` }}
                            />
                          </div>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
