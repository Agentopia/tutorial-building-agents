import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    id: process.env.COURSE_ID || 'hello-agents',
    version: '1.0.0',
    title: 'Hello Agents - Building AI Agents from Scratch',
    description: 'A comprehensive tutorial on AI agents by Datawhale China',
    chapters: [
      { id: '1', title: 'Introduction to AI Agents', slug: 'chapter-1' },
      { id: '2', title: 'Agent Architecture', slug: 'chapter-2' },
      { id: '3', title: 'Building Your First Agent', slug: 'chapter-3' },
      { id: '4', title: 'Agent Communication', slug: 'chapter-4' },
      { id: '5', title: 'Memory Systems', slug: 'chapter-5' },
      { id: '6', title: 'Planning and Reasoning', slug: 'chapter-6' },
      { id: '7', title: 'Tool Usage', slug: 'chapter-7' },
      { id: '8', title: 'Multi-Agent Systems', slug: 'chapter-8' },
      { id: '9', title: 'Agent Evaluation', slug: 'chapter-9' },
      { id: '10', title: 'Advanced Techniques', slug: 'chapter-10' },
      { id: '11', title: 'Production Deployment', slug: 'chapter-11' },
      { id: '12', title: 'Monitoring and Debugging', slug: 'chapter-12' },
      { id: '13', title: 'Security Considerations', slug: 'chapter-13' },
      { id: '14', title: 'Scaling Agents', slug: 'chapter-14' },
      { id: '15', title: 'Real-world Applications', slug: 'chapter-15' },
      { id: '16', title: 'Future of AI Agents', slug: 'chapter-16' },
    ],
    features: {
      codeExecution: false,
      quizzes: false,
      certificates: false,
      progress_tracking: true,
    },
    metadata: {
      difficulty: 'intermediate',
      estimatedHours: 40,
      language: 'zh-CN',
    },
  })
}
