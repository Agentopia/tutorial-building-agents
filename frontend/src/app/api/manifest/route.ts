import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    id: process.env.COURSE_ID || 'hello-agents',
    version: '1.0.0',
    title: 'Hello Agents - Building AI Agents from Scratch',
    description: 'A comprehensive tutorial on building AI agents from scratch. Learn fundamentals of agents and language models, build your own LLM agent, explore advanced techniques, and complete real-world case studies. 16 chapters covering everything from basic agent concepts to production deployment.',
    chapters: [
      { id: '1', title: 'Introduction to Agents', slug: 'chapter-1' },
      { id: '2', title: 'History of Agents', slug: 'chapter-2' },
      { id: '3', title: 'Fundamentals of Large Language Models', slug: 'chapter-3' },
      { id: '4', title: 'Building Classic Agent Paradigms', slug: 'chapter-4' },
      { id: '5', title: 'Building Agents with Low-Code Platforms', slug: 'chapter-5' },
      { id: '6', title: 'Framework Development Practice', slug: 'chapter-6' },
      { id: '7', title: 'Building Your Agent Framework', slug: 'chapter-7' },
      { id: '8', title: 'Memory and Retrieval', slug: 'chapter-8' },
      { id: '9', title: 'Context Engineering', slug: 'chapter-9' },
      { id: '10', title: 'Agent Communication Protocols', slug: 'chapter-10' },
      { id: '11', title: 'Agentic-RL', slug: 'chapter-11' },
      { id: '12', title: 'Agent Performance Evaluation', slug: 'chapter-12' },
      { id: '13', title: 'Intelligent Travel Assistant', slug: 'chapter-13' },
      { id: '14', title: 'Automated Deep Research Agent', slug: 'chapter-14' },
      { id: '15', title: 'Building Cyber Town', slug: 'chapter-15' },
      { id: '16', title: 'Graduation Project', slug: 'chapter-16' },
    ],
    features: {
      codeExecution: true,          // Sandpack code playgrounds
      quizzes: true,                 // Interactive quizzes in chapters 1, 4, 7, 13
      exercises: true,               // Coding exercises with validation
      interactiveDiagrams: true,     // AgentFlowDiagram components
      certificates: false,
      progress_tracking: true,
    },
    metadata: {
      difficulty: 'intermediate',
      estimatedHours: 40,
      language: 'en',                // Changed to 'en' since we have English content
      tags: ['ai-agents', 'llm', 'language-models', 'agent-architecture', 'autonomous-agents', 'react-pattern', 'multi-agent-systems'],
    },
  })
}
