import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'

const chapterTitles: { [key: number]: string } = {
  1: 'Introduction to Agents',
  2: 'History of Agents',
  3: 'Fundamentals of Large Language Models',
  4: 'Building Classic Agent Paradigms',
  5: 'Building Agents with Low-Code Platforms',
  6: 'Framework Development Practice',
  7: 'Building Your Agent Framework',
  8: 'Memory and Retrieval',
  9: 'Context Engineering',
  10: 'Agent Communication Protocols',
  11: 'Agentic-RL',
  12: 'Agent Performance Evaluation',
  13: 'Intelligent Travel Assistant',
  14: 'Automated Deep Research Agent',
  15: 'Building Cyber Town',
  16: 'Graduation Project',
}

export async function generateStaticParams() {
  return Array.from({ length: 16 }, (_, i) => ({
    id: String(i + 1),
  }))
}

function getChapterContent(chapterId: number) {
  const docsPath = path.join(process.cwd(), '..', 'docs', `chapter${chapterId}`)

  try {
    const files = fs.readdirSync(docsPath)
    const englishFile = files.find(f => f.includes('Chapter') && f.endsWith('.md'))

    if (englishFile) {
      const filePath = path.join(docsPath, englishFile)
      return fs.readFileSync(filePath, 'utf-8')
    }
  } catch (error) {
    console.error(`Error reading chapter ${chapterId}:`, error)
  }

  return null
}

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapterId = parseInt(params.id)

  if (isNaN(chapterId) || chapterId < 1 || chapterId > 16) {
    notFound()
  }

  const content = getChapterContent(chapterId)
  const title = chapterTitles[chapterId]

  if (!content) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1>Chapter {chapterId} content not found</h1>
          <Link href="/chapters" className="text-blue-600 hover:underline">
            ← Back to Chapters
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <Link href="/chapters" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Chapters
        </Link>

        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2">Chapter {chapterId} of 16</div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
        </div>

        <article className="prose prose-lg max-w-none">
          <MarkdownRenderer content={content} />
        </article>

        <div className="mt-12 pt-6 border-t flex justify-between">
          {chapterId > 1 && (
            <Link
              href={`/chapters/${chapterId - 1}`}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded transition"
            >
              ← Previous Chapter
            </Link>
          )}
          {chapterId < 16 && (
            <Link
              href={`/chapters/${chapterId + 1}`}
              className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded transition ml-auto"
            >
              Next Chapter →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
