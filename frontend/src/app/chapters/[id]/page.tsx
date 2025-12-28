import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import dynamic from 'next/dynamic'

// Dynamically import interactive components to reduce initial bundle
const AgentFlowDiagram = dynamic(() => import('@/components/AgentFlowDiagram'), { ssr: false })
const CodePlayground = dynamic(() => import('@/components/CodePlayground'), { ssr: false })
const Exercise = dynamic(() => import('@/components/Exercise'), { ssr: false })
const Quiz = dynamic(() => import('@/components/Quiz'), { ssr: false })
const ElizaChatbot = dynamic(() => import('@/components/ElizaChatbot'), { ssr: false })
const SlideView = dynamic(() => import('@/components/SlideView'), { ssr: false })

// Import slide data
import { chapter1Slides } from '@/data/chapter1Slides'
import { chapter2Slides } from '@/data/chapter2Slides'
import { chapter3Slides } from '@/data/chapter3Slides'
import { chapter4Slides } from '@/data/chapter4Slides'
import { chapter5Slides } from '@/data/chapter5Slides'
import { chapter6Slides } from '@/data/chapter6Slides'

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
      <main className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-gray-900 mb-4">Chapter {chapterId} content not found</h1>
          <Link href="/chapters" className="text-blue-600 hover:underline">
            ← Back to Chapters
          </Link>
        </div>
      </main>
    )
  }

  // Use slide-based format for Chapters 1-2
  if (chapterId === 1) {
    return <SlideView slides={chapter1Slides} chapterId={1} chapterTitle={title} />
  }

  if (chapterId === 2) {
    return <SlideView slides={chapter2Slides} chapterId={2} chapterTitle={title} />
  }

  if (chapterId === 3) {
    return <SlideView slides={chapter3Slides} chapterId={3} chapterTitle={title} />
  }

  if (chapterId === 4) {
    return <SlideView slides={chapter4Slides} chapterId={4} chapterTitle={title} />
  }

  if (chapterId === 5) {
    return <SlideView slides={chapter5Slides} chapterId={5} chapterTitle={title} />
  }

  if (chapterId === 6) {
    return <SlideView slides={chapter6Slides} chapterId={6} chapterTitle={title} />
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <Link href="/chapters" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Chapters
        </Link>

        <div className="text-sm text-gray-500 mb-6">Chapter {chapterId} of 16</div>

        <article className="prose prose-lg max-w-none">
          <MarkdownRenderer content={content} />
        </article>

        {/* Note: Chapter 1 uses slide-based format (see SlideView above) */}

        {/* Interactive Components for Chapter 2 */}
        {chapterId === 2 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600">
                  Visualize concepts and test your understanding
                </p>
              </div>
            </div>

            {/* Agent-Environment Interaction Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Agent-Environment Interaction Loop</h3>
              <AgentFlowDiagram
                title="How Agents Interact with Their Environment"
                description="Click on nodes to learn more about each component"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: '🌍 Environment',
                    description: 'The external world in which the agent operates (roads, markets, game boards, etc.)',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    label: '👁️ Sensors',
                    description: 'Perceive environmental state (cameras, microphones, APIs, data streams)',
                    position: { x: 100, y: 100 }
                  },
                  {
                    id: '3',
                    label: '🤖 Agent',
                    description: 'Processes perceptions and makes autonomous decisions to achieve goals',
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: '4',
                    label: '🦾 Actuators',
                    description: 'Execute actions to change environment (robotic arms, code execution, API calls)',
                    position: { x: 400, y: 100 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', label: 'Perceive', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: 'Process', animated: true },
                  { id: 'e3-4', source: '3', target: '4', label: 'Act', animated: true },
                  { id: 'e4-1', source: '4', target: '1', label: 'Change', animated: true }
                ]}
                height={350}
              />
            </section>

            {/* Agent Evolution Timeline */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Evolution of Traditional Agents</h3>
              <AgentFlowDiagram
                title="From Simple to Complex Agent Architectures"
                description="The progression from reactive agents to learning agents"
                nodes={[
                  {
                    id: '1',
                    label: '1️⃣ Simple Reflex',
                    description: 'Condition-action rules. Example: Thermostat (if temp > threshold, activate cooling)',
                    position: { x: 50, y: 0 }
                  },
                  {
                    id: '2',
                    label: '2️⃣ Model-Based',
                    description: 'Internal world model + memory. Example: Autonomous car tracking vehicles in tunnel',
                    position: { x: 50, y: 100 }
                  },
                  {
                    id: '3',
                    label: '3️⃣ Goal-Based',
                    description: 'Plans actions to achieve specific goals. Example: GPS navigation finding optimal route',
                    position: { x: 50, y: 200 }
                  },
                  {
                    id: '4',
                    label: '4️⃣ Utility-Based',
                    description: 'Maximizes satisfaction across multiple goals. Example: Route that is fast, cheap, and avoids traffic',
                    position: { x: 50, y: 300 }
                  },
                  {
                    id: '5',
                    label: '5️⃣ Learning Agent',
                    description: 'Learns from experience via reinforcement. Example: AlphaGo Zero learning chess strategies',
                    position: { x: 50, y: 400 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', label: '+ Memory', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: '+ Planning', animated: true },
                  { id: 'e3-4', source: '3', target: '4', label: '+ Utility', animated: true },
                  { id: 'e4-5', source: '4', target: '5', label: '+ Learning', animated: true }
                ]}
                height={500}
              />
            </section>

            {/* Quiz */}
            <section>
              <Quiz
                chapterId={1}
                title="Chapter 1 Knowledge Check"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'What are the four fundamental elements that define an agent?',
                    options: [
                      { id: 'a', text: 'Environment, Sensors, Actuators, Autonomy', isCorrect: true },
                      { id: 'b', text: 'Input, Processing, Output, Storage', isCorrect: false },
                      { id: 'c', text: 'Perception, Action, Memory, Learning', isCorrect: false },
                      { id: 'd', text: 'Hardware, Software, Network, Database', isCorrect: false }
                    ],
                    explanation: 'An agent perceives its Environment through Sensors, and autonomously takes Actions through Actuators. These four elements form the foundation of all agent behavior.',
                    points: 10
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice',
                    question: 'Which type of traditional agent has an internal world model to track aspects of the environment that cannot be directly perceived?',
                    options: [
                      { id: 'a', text: 'Simple Reflex Agent', isCorrect: false },
                      { id: 'b', text: 'Model-Based Reflex Agent', isCorrect: true },
                      { id: 'c', text: 'Goal-Based Agent', isCorrect: false },
                      { id: 'd', text: 'Utility-Based Agent', isCorrect: false }
                    ],
                    explanation: 'Model-Based Reflex Agents maintain an internal world model to understand aspects of the environment not directly visible, like a car tracking vehicles in a tunnel.',
                    points: 10
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice',
                    question: 'What is the main advantage of LLM-driven agents over traditional agents?',
                    options: [
                      { id: 'a', text: 'They are faster and more deterministic', isCorrect: false },
                      { id: 'b', text: 'They can handle complex, ambiguous natural language instructions', isCorrect: true },
                      { id: 'c', text: 'They require less computational resources', isCorrect: false },
                      { id: 'd', text: 'They follow strict rule-based logic', isCorrect: false }
                    ],
                    explanation: 'LLM agents can process high-level, ambiguous, context-rich natural language instructions and dynamically plan, use tools, and adjust based on feedback.',
                    points: 15
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice',
                    question: 'In Symbolic AI, how is knowledge represented?',
                    options: [
                      { id: 'a', text: 'As statistical patterns in neural networks', isCorrect: false },
                      { id: 'b', text: 'As human-readable symbols and logical rules', isCorrect: true },
                      { id: 'c', text: 'As learned weights and biases', isCorrect: false },
                      { id: 'd', text: 'As probability distributions', isCorrect: false }
                    ],
                    explanation: 'Symbolic AI represents knowledge as explicit symbols (words, concepts) operated on by logical rules, making it transparent but fragile to edge cases.',
                    points: 15
                  },
                  {
                    id: 'q5',
                    type: 'true-false',
                    question: 'True or False: A simple reflex agent can remember past states and plan for future goals.',
                    options: [
                      { id: 'true', text: 'True', isCorrect: false },
                      { id: 'false', text: 'False', isCorrect: true }
                    ],
                    explanation: 'False. Simple reflex agents have no memory or predictive capability. They only react to current perceptions using condition-action rules.',
                    points: 10
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

        {/* Interactive Components for Chapter 2 */}
        {chapterId === 2 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600">
                  Explore the evolution of AI agents through history
                </p>
              </div>
            </div>

            {/* Historical Timeline Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI Agent Evolution Timeline (1950s-2024)</h3>
              <p className="text-gray-700 mb-6">
                Click on nodes to learn about major milestones in agent development across three paradigms: Symbolism, Connectionism, and Behaviorism.
              </p>
              <AgentFlowDiagram
                title="From Symbolic Systems to Modern LLM Agents"
                description="Trace the journey from early rule-based systems to today's intelligent agents"
                nodes={[
                  {
                    id: 'dartmouth',
                    label: '1956 Dartmouth',
                    description: 'Birth of AI as a field. Focus on symbolic manipulation and logic.',
                    position: { x: 50, y: 50 },
                    type: 'input'
                  },
                  {
                    id: 'eliza',
                    label: '1966 ELIZA',
                    description: 'First chatbot using pattern matching. Demonstrated the "ELIZA effect" - illusion of understanding.',
                    position: { x: 150, y: 50 }
                  },
                  {
                    id: 'mycin',
                    label: '1976 MYCIN',
                    description: 'Expert system for medical diagnosis. 450 rules, 69% accuracy. Showed power and brittleness of symbolism.',
                    position: { x: 250, y: 50 }
                  },
                  {
                    id: 'society',
                    label: '1986 Society of Mind',
                    description: 'Minsky\'s theory: Intelligence emerges from collaboration of simple agents. Foundation for multi-agent systems.',
                    position: { x: 350, y: 50 }
                  },
                  {
                    id: 'backprop',
                    label: '1986 Backpropagation',
                    description: 'Revival of neural networks. Shift from symbolism to connectionism begins.',
                    position: { x: 350, y: 150 }
                  },
                  {
                    id: 'deepblue',
                    label: '1997 Deep Blue',
                    description: 'IBM\'s chess program defeats world champion. Brute-force search + evaluation functions.',
                    position: { x: 450, y: 50 }
                  },
                  {
                    id: 'alexnet',
                    label: '2012 AlexNet',
                    description: 'Deep learning breakthrough in image recognition. Connectionism becomes mainstream.',
                    position: { x: 550, y: 150 }
                  },
                  {
                    id: 'alphago',
                    label: '2016 AlphaGo',
                    description: 'Deep RL defeats Go champion. Combines neural networks with reinforcement learning (behaviorism).',
                    position: { x: 650, y: 250 }
                  },
                  {
                    id: 'transformer',
                    label: '2017 Transformer',
                    description: 'Attention mechanism revolutionizes NLP. Foundation for modern LLMs.',
                    position: { x: 750, y: 150 }
                  },
                  {
                    id: 'gpt',
                    label: '2018 GPT-1',
                    description: 'Generative pre-training paradigm. Language models gain world knowledge from data.',
                    position: { x: 850, y: 150 }
                  },
                  {
                    id: 'gpt3',
                    label: '2020 GPT-3',
                    description: 'Scale brings emergent abilities: in-context learning, few-shot reasoning.',
                    position: { x: 950, y: 150 }
                  },
                  {
                    id: 'chatgpt',
                    label: '2022 ChatGPT',
                    description: 'RLHF (Reinforcement Learning from Human Feedback) makes LLMs conversational and helpful.',
                    position: { x: 1050, y: 150 }
                  },
                  {
                    id: 'llmagents',
                    label: '2023-24 LLM Agents',
                    description: 'Integration of all paradigms: Symbolic reasoning (tool use, planning) + Neural networks (LLM) + RL (RLHF, Agentic-RL)',
                    position: { x: 1150, y: 150 },
                    type: 'output'
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'dartmouth', target: 'eliza', label: 'Symbolism', animated: true },
                  { id: 'e2', source: 'eliza', target: 'mycin', animated: true },
                  { id: 'e3', source: 'mycin', target: 'society', animated: true },
                  { id: 'e4', source: 'mycin', target: 'deepblue', label: 'Symbolic peak', animated: true },
                  { id: 'e5', source: 'society', target: 'backprop', label: 'Connectionism', animated: true },
                  { id: 'e6', source: 'backprop', target: 'alexnet', animated: true },
                  { id: 'e7', source: 'alexnet', target: 'transformer', animated: true },
                  { id: 'e8', source: 'transformer', target: 'gpt', animated: true },
                  { id: 'e9', source: 'gpt', target: 'gpt3', animated: true },
                  { id: 'e10', source: 'gpt3', target: 'chatgpt', label: 'RLHF', animated: true },
                  { id: 'e11', source: 'chatgpt', target: 'llmagents', animated: true },
                  { id: 'e12', source: 'backprop', target: 'alphago', label: 'Behaviorism', animated: true },
                  { id: 'e13', source: 'alphago', target: 'llmagents', label: 'RL Integration', animated: true }
                ]}
                height={400}
              />
            </section>

            {/* ELIZA Interactive Demo */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">ELIZA Chatbot Demo (1966)</h3>
              <p className="text-gray-700 mb-6">
                Experience the pioneering chatbot that used pattern matching and pronoun swapping.
                Notice how it creates an illusion of understanding without real comprehension.
              </p>
              <ElizaChatbot />
            </section>

            {/* Society of Mind Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Society of Mind: Building a Block Tower</h3>
              <p className="text-gray-700 mb-6">
                Minsky's theory shows how complex intelligence emerges from collaboration of simple "mindless" agents.
                Click nodes to see how each agency contributes to the emergent behavior.
              </p>
              <AgentFlowDiagram
                title="Emergence Through Collaboration"
                description="No single agent understands 'building a tower' - intelligence emerges from their interaction"
                nodes={[
                  {
                    id: 'goal',
                    type: 'input',
                    label: '🎯 Goal: Build Tower',
                    description: 'High-level intention activated by user or higher-level agency',
                    position: { x: 400, y: 0 }
                  },
                  {
                    id: 'build-tower',
                    label: 'BUILD-TOWER Agency',
                    description: 'Doesn\'t know HOW to build. Only role: activate subordinate agency BUILDER',
                    position: { x: 400, y: 100 }
                  },
                  {
                    id: 'builder',
                    label: 'BUILDER Agency',
                    description: 'Simple loop logic: While tower not finished, activate ADD-BLOCK. No physical knowledge.',
                    position: { x: 400, y: 200 }
                  },
                  {
                    id: 'add-block',
                    label: 'ADD-BLOCK Agency',
                    description: 'Coordinates subtasks. Sequentially activates: FIND-BLOCK → GET-BLOCK → PUT-ON-TOP',
                    position: { x: 400, y: 300 }
                  },
                  {
                    id: 'find',
                    label: 'FIND-BLOCK',
                    description: 'Activates visual agents (SEE-SHAPE) to locate suitable block',
                    position: { x: 200, y: 400 }
                  },
                  {
                    id: 'get',
                    label: 'GET-BLOCK',
                    description: 'Activates motor agents (REACH, GRASP) to acquire block',
                    position: { x: 400, y: 400 }
                  },
                  {
                    id: 'put',
                    label: 'PUT-ON-TOP',
                    description: 'Activates placement agents to position block on tower',
                    position: { x: 600, y: 400 }
                  },
                  {
                    id: 'see',
                    label: '👁️ SEE-SHAPE',
                    description: 'Low-level visual agent. Only identifies shapes. Doesn\'t know what a "tower" is.',
                    position: { x: 100, y: 500 }
                  },
                  {
                    id: 'reach',
                    label: '🦾 REACH',
                    description: 'Low-level motor agent. Extends arm to target. No concept of "grasping".',
                    position: { x: 300, y: 500 }
                  },
                  {
                    id: 'grasp',
                    label: '✊ GRASP',
                    description: 'Low-level motor agent. Closes gripper. Doesn\'t know what it\'s grasping or why.',
                    position: { x: 500, y: 500 }
                  },
                  {
                    id: 'tower',
                    type: 'output',
                    label: '🏗️ Tower Built!',
                    description: 'Emergent result: No single agent planned this. Intelligence arose from local interactions.',
                    position: { x: 400, y: 600 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'goal', target: 'build-tower', label: 'Activate', animated: true },
                  { id: 'e2', source: 'build-tower', target: 'builder', label: 'Delegate', animated: true },
                  { id: 'e3', source: 'builder', target: 'add-block', label: 'Loop', animated: true },
                  { id: 'e4', source: 'add-block', target: 'find', label: 'Step 1', animated: true },
                  { id: 'e5', source: 'add-block', target: 'get', label: 'Step 2', animated: true },
                  { id: 'e6', source: 'add-block', target: 'put', label: 'Step 3', animated: true },
                  { id: 'e7', source: 'find', target: 'see', animated: true },
                  { id: 'e8', source: 'get', target: 'reach', animated: true },
                  { id: 'e9', source: 'get', target: 'grasp', animated: true },
                  { id: 'e10', source: 'put', target: 'tower', label: 'Place', animated: true },
                  { id: 'e11', source: 'tower', target: 'builder', label: 'Feedback', animated: true }
                ]}
                height={700}
              />
            </section>

            {/* Reinforcement Learning Loop */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Reinforcement Learning: Agent-Environment Loop</h3>
              <p className="text-gray-700 mb-6">
                RL agents learn optimal behavior through trial and error. Example: AlphaGo learned to play Go
                by playing millions of games against itself, receiving rewards for wins.
              </p>
              <AgentFlowDiagram
                title="Learning Through Interaction"
                description="Agent observes state, takes action, receives reward, updates policy"
                nodes={[
                  {
                    id: 'agent',
                    label: '🤖 Agent',
                    description: 'Learner and decision-maker. Contains Policy π (mapping from states to actions) that it continuously improves.',
                    position: { x: 200, y: 150 },
                    type: 'default'
                  },
                  {
                    id: 'env',
                    label: '🌍 Environment',
                    description: 'Everything external to the agent. For AlphaGo: Go rules + opponent. For robot: physical world.',
                    position: { x: 600, y: 150 },
                    type: 'default'
                  },
                  {
                    id: 'state',
                    label: 'State St',
                    description: 'Specific description of environment at time t. Example: current board position in Go.',
                    position: { x: 400, y: 0 }
                  },
                  {
                    id: 'action',
                    label: 'Action At',
                    description: 'Operation chosen by agent based on policy π. Example: place stone at position (7,9).',
                    position: { x: 400, y: 100 }
                  },
                  {
                    id: 'reward',
                    label: 'Reward Rt+1',
                    description: 'Scalar feedback signal. For AlphaGo: +1 for win, -1 for loss. Guides learning.',
                    position: { x: 400, y: 300 }
                  },
                  {
                    id: 'newstate',
                    label: 'State St+1',
                    description: 'New environment state after action. Example: updated board after opponent\'s response.',
                    position: { x: 600, y: 250 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'env', target: 'state', label: '1. Observe', animated: true },
                  { id: 'e2', source: 'state', target: 'agent', animated: true },
                  { id: 'e3', source: 'agent', target: 'action', label: '2. Decide (Policy π)', animated: true },
                  { id: 'e4', source: 'action', target: 'env', animated: true },
                  { id: 'e5', source: 'env', target: 'newstate', label: '3. Transition', animated: true },
                  { id: 'e6', source: 'env', target: 'reward', label: '4. Feedback', animated: true },
                  { id: 'e7', source: 'reward', target: 'agent', label: '5. Learn & Update π', animated: true },
                  { id: 'e8', source: 'newstate', target: 'agent', label: 'Next cycle', animated: true }
                ]}
                height={400}
              />
              <div className="mt-4 p-4 bg-blue-50  border border-blue-200  rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>💡 Key Insight:</strong> Agent's goal is to maximize <strong>cumulative reward</strong> (Return),
                  not just immediate reward. This requires "foresight" - sometimes sacrificing current gains for greater future rewards.
                </p>
              </div>
            </section>

            {/* LLM Agent Architecture */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Modern LLM Agent Architecture</h3>
              <p className="text-gray-700 mb-6">
                Today's agents integrate all three paradigms: Symbolic (tool use, planning) +
                Neural (LLM reasoning) + Behavioral (RLHF training). This is the culmination of 70 years of AI research.
              </p>
              <AgentFlowDiagram
                title="Perceive → Think → Act Loop"
                description="LLM-driven agents combine planning, reasoning, memory, and tool use"
                nodes={[
                  {
                    id: 'env-in',
                    type: 'input',
                    label: '🌐 Environment',
                    description: 'External world: APIs, databases, user input, system state',
                    position: { x: 400, y: 0 }
                  },
                  {
                    id: 'perception',
                    label: '👁️ Perception Module',
                    description: 'Receives raw input through sensors. Forms observations from environment changes.',
                    position: { x: 400, y: 100 }
                  },
                  {
                    id: 'planning',
                    label: '📋 Planning Module',
                    description: 'Decomposes goals into steps. Reflection & self-criticism. Formulates high-level strategy.',
                    position: { x: 200, y: 200 }
                  },
                  {
                    id: 'llm',
                    label: '🧠 LLM Core',
                    description: 'Central reasoning engine. Integrates observation + memory. Decides tool calls. Generates responses.',
                    position: { x: 400, y: 250 }
                  },
                  {
                    id: 'memory',
                    label: '💾 Memory',
                    description: 'Short-term: Conversation history. Long-term: RAG/vector DB. Provides context for reasoning.',
                    position: { x: 600, y: 200 }
                  },
                  {
                    id: 'execution',
                    label: '⚙️ Execution Module',
                    description: 'Parses LLM instructions. Calls selected tools. Manages tool registry.',
                    position: { x: 400, y: 350 }
                  },
                  {
                    id: 'tools',
                    label: '🔧 Tool Use',
                    description: 'Code executors, search engines, calculators, databases, APIs. Extends agent capabilities.',
                    position: { x: 200, y: 450 }
                  },
                  {
                    id: 'action',
                    label: '🎬 Action',
                    description: 'Actual interaction with environment. Changes environment state.',
                    position: { x: 400, y: 450 }
                  },
                  {
                    id: 'result',
                    label: '📊 Tool Result',
                    description: 'Direct feedback from tool execution. Returned to LLM as new observation.',
                    position: { x: 600, y: 350 }
                  },
                  {
                    id: 'newstate',
                    type: 'output',
                    label: '🔄 New Environment State',
                    description: 'Environment changed by action. Triggers next perceive-think-act cycle.',
                    position: { x: 400, y: 550 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'env-in', target: 'perception', label: 'Observe', animated: true },
                  { id: 'e2', source: 'perception', target: 'planning', animated: true },
                  { id: 'e3', source: 'planning', target: 'llm', label: 'Strategy', animated: true },
                  { id: 'e4', source: 'memory', target: 'llm', label: 'Context', animated: true },
                  { id: 'e5', source: 'llm', target: 'execution', label: 'Tool Call', animated: true },
                  { id: 'e6', source: 'execution', target: 'tools', animated: true },
                  { id: 'e7', source: 'tools', target: 'action', animated: true },
                  { id: 'e8', source: 'action', target: 'newstate', animated: true },
                  { id: 'e9', source: 'execution', target: 'result', label: 'Return', animated: true },
                  { id: 'e10', source: 'result', target: 'llm', label: 'Feedback', animated: true },
                  { id: 'e11', source: 'newstate', target: 'perception', label: 'Next Observation', animated: true },
                  { id: 'e12', source: 'llm', target: 'memory', label: 'Update', animated: true }
                ]}
                height={650}
              />
            </section>

            {/* Knowledge Check Quiz */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Knowledge Check: History of Agents</h3>
              <p className="text-gray-700 mb-6">
                Test your understanding of agent evolution, paradigm shifts, and historical milestones.
              </p>
              <Quiz
                chapterId={2}
                title="Chapter 2 Knowledge Check"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice' as const,
                    question: 'What is the core limitation of symbolicism (rule-based systems) that ELIZA demonstrated?',
                    options: [
                      { id: 'a', text: 'Too slow to process user input', isCorrect: false },
                      { id: 'b', text: 'Lack of semantic understanding - only pattern matching without comprehension', isCorrect: true },
                      { id: 'c', text: 'Required too much computational power', isCorrect: false },
                      { id: 'd', text: 'Could not handle multiple users simultaneously', isCorrect: false }
                    ],
                    explanation: 'ELIZA performed pattern matching with NO understanding. It mechanically matched patterns like "I am (*)" and substituted responses, creating an illusion of intelligence ("ELIZA effect") while having zero semantic comprehension.',
                    points: 10
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice' as const,
                    question: 'According to Minsky\'s Society of Mind theory, where does complex intelligence come from?',
                    options: [
                      { id: 'a', text: 'A single, powerful central reasoning engine', isCorrect: false },
                      { id: 'b', text: 'Emergence from collaboration of many simple "mindless" agents', isCorrect: true },
                      { id: 'c', text: 'Pre-programmed knowledge bases with millions of rules', isCorrect: false },
                      { id: 'd', text: 'Massive neural networks trained on big data', isCorrect: false }
                    ],
                    explanation: 'Minsky argued intelligence is NOT a single perfect system but emerges from interactions of numerous simple, specialized agents. Each agent is "mindless" (like GRASP or SEE-SHAPE), but their society produces intelligent behavior.',
                    points: 15
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice' as const,
                    question: 'What are the three core elements of the Reinforcement Learning framework?',
                    options: [
                      { id: 'a', text: 'Sensor, Processor, Actuator', isCorrect: false },
                      { id: 'b', text: 'Input, Hidden Layer, Output', isCorrect: false },
                      { id: 'c', text: 'Agent, Environment, Reward', isCorrect: true },
                      { id: 'd', text: 'Perception, Planning, Action', isCorrect: false }
                    ],
                    explanation: 'RL framework: (1) AGENT makes decisions, (2) ENVIRONMENT provides state and feedback, (3) REWARD signal guides learning. The agent learns optimal policy through trial-and-error to maximize cumulative reward.',
                    points: 10
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice' as const,
                    question: 'How did the pre-training paradigm solve symbolicism\'s "knowledge acquisition bottleneck"?',
                    options: [
                      { id: 'a', text: 'By manually encoding more rules into the system', isCorrect: false },
                      { id: 'b', text: 'By learning implicit world knowledge from massive text data through self-supervised learning', isCorrect: true },
                      { id: 'c', text: 'By connecting to external knowledge bases like Wikipedia', isCorrect: false },
                      { id: 'd', text: 'By using reinforcement learning to discover rules', isCorrect: false }
                    ],
                    explanation: 'Pre-training learns from trillions of texts via self-supervised learning (e.g., "predict next word"). This builds an implicit model of world knowledge in neural network weights - no manual encoding needed!',
                    points: 15
                  },
                  {
                    id: 'q5',
                    type: 'multiple-choice' as const,
                    question: 'Which emergent ability of large language models enables them to perform new tasks with just a few examples in the prompt?',
                    options: [
                      { id: 'a', text: 'Transfer learning', isCorrect: false },
                      { id: 'b', text: 'In-context learning (few-shot)', isCorrect: true },
                      { id: 'c', text: 'Fine-tuning', isCorrect: false },
                      { id: 'd', text: 'Reinforcement learning', isCorrect: false }
                    ],
                    explanation: 'In-context learning: LLMs can understand and perform NEW tasks just from examples in the prompt, WITHOUT updating model weights. This emerged at scale and wasn\'t explicitly trained.',
                    points: 15
                  },
                  {
                    id: 'q6',
                    type: 'multiple-choice' as const,
                    question: 'True or False: Modern LLM agents integrate all three historical paradigms - Symbolism (tool use, planning), Connectionism (neural networks), and Behaviorism (RL/RLHF).',
                    options: [
                      { id: 'true', text: 'True', isCorrect: true },
                      { id: 'false', text: 'False', isCorrect: false }
                    ],
                    explanation: 'TRUE! LLM agents are the culmination of 70 years: Symbolic reasoning (plan, tool calls) + Neural LLM (knowledge, reasoning) + Behavioral RL (RLHF training, Agentic-RL). All paradigms converged.',
                    points: 10
                  },
                  {
                    id: 'q7',
                    type: 'multiple-choice' as const,
                    question: 'What was the key innovation of Expert Systems like MYCIN in the 1970s-80s?',
                    options: [
                      { id: 'a', text: 'Using neural networks to learn from data', isCorrect: false },
                      { id: 'b', text: 'Separating domain knowledge (rules) from inference engine, allowing expertise to be encoded', isCorrect: true },
                      { id: 'c', text: 'Reinforcement learning from patient outcomes', isCorrect: false },
                      { id: 'd', text: 'Natural language understanding through transformers', isCorrect: false }
                    ],
                    explanation: 'MYCIN architecture: Knowledge Base (450 IF-THEN rules from experts) + Inference Engine (applies rules). This separation allowed encoding medical expertise. But it was brittle and couldn\'t scale.',
                    points: 15
                  },
                  {
                    id: 'q8',
                    type: 'multiple-choice' as const,
                    question: 'In the RL loop, what does the agent\'s POLICY (π) represent?',
                    options: [
                      { id: 'a', text: 'The total reward the agent has accumulated', isCorrect: false },
                      { id: 'b', text: 'A mapping from states to actions - defines agent behavior', isCorrect: true },
                      { id: 'c', text: 'The set of all possible states in the environment', isCorrect: false },
                      { id: 'd', text: 'The value function estimating future rewards', isCorrect: false }
                    ],
                    explanation: 'Policy π: State → Action mapping. It defines HOW the agent behaves. RL learning = improving π to maximize cumulative reward. Example: AlphaGo\'s policy maps board states to optimal moves.',
                    points: 15
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

        {/* Interactive Components for Chapter 3 */}
        {chapterId === 3 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-700">
                  Understand LLM fundamentals through hands-on code and visualizations
                </p>
              </div>
            </div>

            {/* N-gram Language Model */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Bigram Language Model Calculator</h3>
              <p className="text-gray-700 mb-6">
                Calculate sentence probability using the Markov assumption. This code demonstrates how statistical
                language models estimate P(sentence) by multiplying conditional probabilities.
              </p>
              <CodePlayground
                language="python"
                initialCode={`import collections

# Example corpus from Chapter 3
corpus = "datawhale agent learns datawhale agent works"
tokens = corpus.split()
total_tokens = len(tokens)

# --- Step 1: Calculate P(datawhale) ---
count_datawhale = tokens.count('datawhale')
p_datawhale = count_datawhale / total_tokens
print(f"Step 1: P(datawhale) = {count_datawhale}/{total_tokens} = {p_datawhale:.3f}")

# --- Step 2: Calculate P(agent|datawhale) ---
bigrams = list(zip(tokens, tokens[1:]))
bigram_counts = collections.Counter(bigrams)
count_datawhale_agent = bigram_counts[('datawhale', 'agent')]
p_agent_given_datawhale = count_datawhale_agent / count_datawhale
print(f"Step 2: P(agent|datawhale) = {count_datawhale_agent}/{count_datawhale} = {p_agent_given_datawhale:.3f}")

# --- Step 3: Calculate P(learns|agent) ---
count_agent_learns = bigram_counts[('agent', 'learns')]
count_agent = tokens.count('agent')
p_learns_given_agent = count_agent_learns / count_agent
print(f"Step 3: P(learns|agent) = {count_agent_learns}/{count_agent} = {p_learns_given_agent:.3f}")

# --- Finally: Multiply the probabilities ---
p_sentence = p_datawhale * p_agent_given_datawhale * p_learns_given_agent
print(f"\\nFinal: P('datawhale agent learns') ≈ {p_sentence:.3f}")`}
              />
            </section>

            {/* Word Embeddings Arithmetic */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Word Embedding Arithmetic: King - Man + Woman = Queen</h3>
              <p className="text-gray-700 mb-6">
                Word embeddings capture semantic relationships. This famous example shows how vector arithmetic
                can perform semantic "translation": King - Man + Woman ≈ Queen.
              </p>
              <CodePlayground
                language="python"
                initialCode={`import numpy as np

# Simplified 2D word vectors (in practice, these are 300-1000 dimensions)
embeddings = {
    "king": np.array([0.9, 0.8]),
    "queen": np.array([0.9, 0.2]),
    "man": np.array([0.7, 0.9]),
    "woman": np.array([0.7, 0.3])
}

def cosine_similarity(vec1, vec2):
    """Calculate cosine similarity between two vectors"""
    dot_product = np.dot(vec1, vec2)
    norm_product = np.linalg.norm(vec1) * np.linalg.norm(vec2)
    return dot_product / norm_product

# Semantic arithmetic: king - man + woman
result_vec = embeddings["king"] - embeddings["man"] + embeddings["woman"]

# Calculate similarity with "queen"
sim = cosine_similarity(result_vec, embeddings["queen"])

print(f"Result vector (king - man + woman): {result_vec}")
print(f"Queen vector: {embeddings['queen']}")
print(f"Cosine similarity: {sim:.4f}")
print(f"\\nPerfect match! This shows embeddings capture abstract concepts like 'royalty' and 'gender'.")`}
              />
            </section>

            {/* Transformer Architecture Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Transformer Architecture: Encoder-Decoder</h3>
              <p className="text-gray-700 mb-6">
                The Transformer model (2017) revolutionized NLP by replacing recurrence with attention.
                Click nodes to understand each component's role in the architecture.
              </p>
              <AgentFlowDiagram
                title="Transformer: Attention Is All You Need"
                description="Encoder understands input, Decoder generates output, all powered by multi-head attention"
                nodes={[
                  {
                    id: 'input',
                    type: 'input',
                    label: 'Input Tokens',
                    description: 'Tokenized input sequence (e.g., ["Hello", "world", "!"])',
                    position: { x: 100, y: 0 }
                  },
                  {
                    id: 'embed-enc',
                    label: 'Token Embedding',
                    description: 'Convert tokens to dense vectors (e.g., 512 dimensions)',
                    position: { x: 100, y: 100 }
                  },
                  {
                    id: 'pos-enc',
                    label: '+ Positional Encoding',
                    description: 'Add position info via sine/cosine functions: PE(pos, 2i) = sin(pos/10000^(2i/d_model))',
                    position: { x: 100, y: 200 }
                  },
                  {
                    id: 'enc-layer',
                    label: 'Encoder Layer ×N',
                    description: 'Stack of N=6 identical layers. Each has: Multi-Head Self-Attention → Add&Norm → FFN → Add&Norm',
                    position: { x: 100, y: 300 }
                  },
                  {
                    id: 'self-attn-enc',
                    label: 'Multi-Head Self-Attention',
                    description: 'Each token attends to all tokens. Learns contextual relationships (e.g., "it" refers to "agent")',
                    position: { x: 50, y: 420 }
                  },
                  {
                    id: 'ffn-enc',
                    label: 'Feed-Forward Network',
                    description: 'FFN(x) = max(0, xW1+b1)W2+b2. Expands to 4x dimensions then shrinks back',
                    position: { x: 150, y: 420 }
                  },
                  {
                    id: 'enc-output',
                    label: 'Encoder Output',
                    description: 'Contextual representations for entire input sequence',
                    position: { x: 100, y: 540 }
                  },
                  {
                    id: 'dec-input',
                    label: 'Output Tokens (shifted)',
                    description: 'Decoder input: previous outputs shifted right (during training)',
                    position: { x: 400, y: 0 }
                  },
                  {
                    id: 'embed-dec',
                    label: 'Token Embedding',
                    description: 'Same embedding layer as encoder (weights shared)',
                    position: { x: 400, y: 100 }
                  },
                  {
                    id: 'pos-dec',
                    label: '+ Positional Encoding',
                    description: 'Same positional encoding as encoder',
                    position: { x: 400, y: 200 }
                  },
                  {
                    id: 'dec-layer',
                    label: 'Decoder Layer ×N',
                    description: 'Stack of N=6 layers. Each has: Masked Self-Attention → Add&Norm → Cross-Attention → Add&Norm → FFN → Add&Norm',
                    position: { x: 400, y: 300 }
                  },
                  {
                    id: 'masked-attn',
                    label: 'Masked Self-Attention',
                    description: 'Prevents attending to future tokens (autoregressive). Only looks at previous positions.',
                    position: { x: 340, y: 420 }
                  },
                  {
                    id: 'cross-attn',
                    label: 'Cross-Attention',
                    description: 'Decoder attends to encoder output. Query from decoder, Key & Value from encoder.',
                    position: { x: 440, y: 420 }
                  },
                  {
                    id: 'ffn-dec',
                    label: 'Feed-Forward Network',
                    description: 'Same FFN structure as encoder',
                    position: { x: 400, y: 520 }
                  },
                  {
                    id: 'linear',
                    label: 'Linear Layer',
                    description: 'Projects to vocabulary size (e.g., 50,000 dimensions)',
                    position: { x: 400, y: 620 }
                  },
                  {
                    id: 'softmax',
                    type: 'output',
                    label: 'Softmax → Probabilities',
                    description: 'Convert logits to probability distribution over vocabulary',
                    position: { x: 400, y: 720 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'input', target: 'embed-enc', animated: true },
                  { id: 'e2', source: 'embed-enc', target: 'pos-enc', animated: true },
                  { id: 'e3', source: 'pos-enc', target: 'enc-layer', animated: true },
                  { id: 'e4', source: 'enc-layer', target: 'self-attn-enc', label: 'Layer details', animated: true },
                  { id: 'e5', source: 'enc-layer', target: 'ffn-enc', animated: true },
                  { id: 'e6', source: 'ffn-enc', target: 'enc-output', animated: true },
                  { id: 'e7', source: 'dec-input', target: 'embed-dec', animated: true },
                  { id: 'e8', source: 'embed-dec', target: 'pos-dec', animated: true },
                  { id: 'e9', source: 'pos-dec', target: 'dec-layer', animated: true },
                  { id: 'e10', source: 'dec-layer', target: 'masked-attn', label: 'Layer details', animated: true },
                  { id: 'e11', source: 'dec-layer', target: 'cross-attn', animated: true },
                  { id: 'e12', source: 'enc-output', target: 'cross-attn', label: 'K, V from encoder', animated: true },
                  { id: 'e13', source: 'cross-attn', target: 'ffn-dec', animated: true },
                  { id: 'e14', source: 'ffn-dec', target: 'linear', animated: true },
                  { id: 'e15', source: 'linear', target: 'softmax', animated: true }
                ]}
                height={800}
              />
            </section>

            {/* Attention Mechanism Flow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Attention Mechanism: Query, Key, Value</h3>
              <p className="text-gray-700 mb-6">
                Self-attention allows each token to "attend" to all other tokens with learned weights.
                The formula: Attention(Q,K,V) = softmax(QK^T/√d_k)V
              </p>
              <AgentFlowDiagram
                title="How Self-Attention Works"
                description="Example: Processing the word 'agent' in sentence 'The agent learns because it is intelligent'"
                nodes={[
                  {
                    id: 'token',
                    type: 'input',
                    label: 'Token: "agent"',
                    description: 'Current token embedding vector (512-d)',
                    position: { x: 300, y: 0 }
                  },
                  {
                    id: 'wq',
                    label: 'Query (Q)',
                    description: 'Q = Token × W^Q. Represents "What am I looking for?" Used to query other tokens.',
                    position: { x: 100, y: 120 }
                  },
                  {
                    id: 'wk',
                    label: 'Key (K)',
                    description: 'K = Token × W^K. Represents "What do I contain?" Indexed by queries from other tokens.',
                    position: { x: 300, y: 120 }
                  },
                  {
                    id: 'wv',
                    label: 'Value (V)',
                    description: 'V = Token × W^V. Represents "What information do I provide?" The actual content returned.',
                    position: { x: 500, y: 120 }
                  },
                  {
                    id: 'all-k',
                    label: 'All Keys in Sentence',
                    description: 'K vectors from ["The", "agent", "learns", "because", "it", "is", "intelligent"]',
                    position: { x: 200, y: 250 }
                  },
                  {
                    id: 'scores',
                    label: 'Attention Scores',
                    description: 'Score = Q·K^T / √d_k for each word. Higher score = more relevant. Example: Q_"it" has high score with K_"agent"',
                    position: { x: 200, y: 370 }
                  },
                  {
                    id: 'weights',
                    label: 'Attention Weights',
                    description: 'Weights = softmax(Scores). Sum to 1.0. Distribution: [0.05, 0.6, 0.1, 0.05, 0.1, 0.05, 0.05] (agent gets 60%!)',
                    position: { x: 200, y: 490 }
                  },
                  {
                    id: 'all-v',
                    label: 'All Values in Sentence',
                    description: 'V vectors from all tokens. Each contains semantic information.',
                    position: { x: 450, y: 370 }
                  },
                  {
                    id: 'weighted-sum',
                    label: 'Weighted Sum',
                    description: 'Output = Σ(weight_i × V_i). Combines information from all tokens, weighted by relevance.',
                    position: { x: 350, y: 610 }
                  },
                  {
                    id: 'output',
                    type: 'output',
                    label: 'Context-Aware Representation',
                    description: 'New representation of "agent" incorporating global context. Now "knows" about "learns", "intelligent", etc.',
                    position: { x: 350, y: 730 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'token', target: 'wq', label: '×W^Q', animated: true },
                  { id: 'e2', source: 'token', target: 'wk', label: '×W^K', animated: true },
                  { id: 'e3', source: 'token', target: 'wv', label: '×W^V', animated: true },
                  { id: 'e4', source: 'wq', target: 'scores', label: 'Q', animated: true },
                  { id: 'e5', source: 'all-k', target: 'scores', label: 'K^T', animated: true },
                  { id: 'e6', source: 'scores', target: 'weights', label: 'softmax(·/√d_k)', animated: true },
                  { id: 'e7', source: 'wv', target: 'all-v', animated: true },
                  { id: 'e8', source: 'weights', target: 'weighted-sum', label: 'α', animated: true },
                  { id: 'e9', source: 'all-v', target: 'weighted-sum', label: 'V', animated: true },
                  { id: 'e10', source: 'weighted-sum', target: 'output', animated: true }
                ]}
                height={800}
              />
            </section>

            {/* BPE Tokenization */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Byte-Pair Encoding (BPE) Tokenization</h3>
              <p className="text-gray-700 mb-6">
                BPE is the tokenization algorithm used by GPT models. It iteratively merges the most frequent
                adjacent token pairs to build a vocabulary. This balances vocabulary size with semantic expression.
              </p>
              <CodePlayground
                language="python"
                initialCode={`import re, collections

def get_stats(vocab):
    """Count token pair frequencies"""
    pairs = collections.defaultdict(int)
    for word, freq in vocab.items():
        symbols = word.split()
        for i in range(len(symbols)-1):
            pairs[symbols[i],symbols[i+1]] += freq
    return pairs

def merge_vocab(pair, v_in):
    """Merge token pairs"""
    v_out = {}
    bigram = re.escape(' '.join(pair))
    p = re.compile(r'(?<!\\S)' + bigram + r'(?!\\S)')
    for word in v_in:
        w_out = p.sub(''.join(pair), word)
        v_out[w_out] = v_in[word]
    return v_out

# Mini corpus from Chapter 3: "hug", "pug", "pun", "bun"
vocab = {'h u g </w>': 1, 'p u g </w>': 1, 'p u n </w>': 1, 'b u n </w>': 1}
num_merges = 4

print("Initial vocabulary:", list(vocab.keys()))
print("=" * 50)

for i in range(num_merges):
    pairs = get_stats(vocab)
    if not pairs:
        break
    best = max(pairs, key=pairs.get)
    vocab = merge_vocab(best, vocab)
    print(f"Merge {i+1}: {best} -> {''.join(best)}")
    print(f"New vocab: {list(vocab.keys())}")
    print("-" * 50)

print("\\nFinal: Unseen word 'bug' tokenizes as: ['b', 'ug']")`}
              />
            </section>

            {/* Knowledge Check Quiz */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Knowledge Check: LLM Fundamentals</h3>
              <p className="text-gray-700 mb-6">
                Test your understanding of language models, transformers, attention mechanisms, and tokenization.
              </p>
              <Quiz
                chapterId={3}
                title="Chapter 3 Knowledge Check"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice' as const,
                    question: 'What is the core limitation of N-gram language models that neural networks solve?',
                    options: [
                      { id: 'a', text: 'Computational complexity', isCorrect: false },
                      { id: 'b', text: 'Data sparsity and poor generalization - cannot handle unseen word combinations', isCorrect: true },
                      { id: 'c', text: 'Inability to process long sequences', isCorrect: false },
                      { id: 'd', text: 'Lack of parallel processing', isCorrect: false }
                    ],
                    explanation: 'N-gram models treat words as discrete symbols. If a word sequence never appeared in training data, probability = 0. They cannot generalize to semantically similar words (e.g., "robot learns" vs "agent learns").',
                    points: 10
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice' as const,
                    question: 'In the attention mechanism formula Attention(Q,K,V) = softmax(QK^T/√d_k)V, what does the √d_k scaling factor prevent?',
                    options: [
                      { id: 'a', text: 'Attention weights from summing to more than 1', isCorrect: false },
                      { id: 'b', text: 'Gradients from becoming too small (vanishing) due to large dot products', isCorrect: true },
                      { id: 'c', text: 'Overfitting to training data', isCorrect: false },
                      { id: 'd', text: 'Negative attention scores', isCorrect: false }
                    ],
                    explanation: 'QK^T produces dot products that grow with dimension d_k. Large values → softmax saturates → tiny gradients. Dividing by √d_k keeps values stable for effective training.',
                    points: 15
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice' as const,
                    question: 'What is the purpose of Multi-Head Attention (using h=8 heads instead of h=1)?',
                    options: [
                      { id: 'a', text: 'Reduce computational cost by parallelizing attention', isCorrect: false },
                      { id: 'b', text: 'Allow the model to attend to different types of relationships simultaneously (e.g., syntax, semantics)', isCorrect: true },
                      { id: 'c', text: 'Increase the vocabulary size the model can handle', isCorrect: false },
                      { id: 'd', text: 'Enable longer context windows', isCorrect: false }
                    ],
                    explanation: 'Each head learns to focus on different aspects (subject-verb, anaphora, sentiment). h=8 heads = 8 "experts" examining the sentence from different perspectives. Final output concatenates all heads.',
                    points: 15
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice' as const,
                    question: 'Why does Transformer use Positional Encoding instead of position embeddings?',
                    options: [
                      { id: 'a', text: 'Self-attention is order-invariant - without position info, "agent learns" = "learns agent"', isCorrect: true },
                      { id: 'b', text: 'To reduce model parameters', isCorrect: false },
                      { id: 'c', text: 'To enable parallel processing', isCorrect: false },
                      { id: 'd', text: 'To handle variable-length sequences', isCorrect: false }
                    ],
                    explanation: 'Self-attention computes relationships regardless of position. PE adds sine/cosine waves so tokens at different positions get unique vectors: PE(pos,2i)=sin(pos/10000^(2i/d_model)).',
                    points: 15
                  },
                  {
                    id: 'q5',
                    type: 'multiple-choice' as const,
                    question: 'In BPE tokenization, what determines which token pair to merge next?',
                    options: [
                      { id: 'a', text: 'The pair with the highest frequency in the corpus', isCorrect: true },
                      { id: 'b', text: 'Random selection for diversity', isCorrect: false },
                      { id: 'c', text: 'The pair with the longest combined length', isCorrect: false },
                      { id: 'd', text: 'Semantic similarity between the tokens', isCorrect: false }
                    ],
                    explanation: 'BPE is greedy: iteratively merge the most frequent adjacent token pair. Example: if ("u","g") appears 2x and ("u","n") appears 2x, merge one, recount, repeat until vocabulary reaches target size.',
                    points: 10
                  },
                  {
                    id: 'q6',
                    type: 'multiple-choice' as const,
                    question: 'What is the role of the Feed-Forward Network (FFN) in each Transformer layer?',
                    options: [
                      { id: 'a', text: 'Aggregate information across the sequence', isCorrect: false },
                      { id: 'b', text: 'Extract higher-order features from the attention output via non-linear transformation', isCorrect: true },
                      { id: 'c', text: 'Generate the final output probabilities', isCorrect: false },
                      { id: 'd', text: 'Normalize layer activations', isCorrect: false }
                    ],
                    explanation: 'FFN applies to each position independently: FFN(x) = max(0, xW1+b1)W2+b2. Expands to d_ff=4×d_model, then shrinks back. Extracts non-linear features after attention aggregation.',
                    points: 10
                  },
                  {
                    id: 'q7',
                    type: 'multiple-choice' as const,
                    question: 'True or False: In Decoder self-attention, "masking" prevents tokens from attending to future positions, ensuring autoregressive generation.',
                    options: [
                      { id: 'true', text: 'True', isCorrect: true },
                      { id: 'false', text: 'False', isCorrect: false }
                    ],
                    explanation: 'TRUE! During training, decoder sees full target sequence. Masking ensures position i can only attend to positions ≤i (not future tokens). This mimics autoregressive inference where we generate left-to-right.',
                    points: 10
                  },
                  {
                    id: 'q8',
                    type: 'multiple-choice' as const,
                    question: 'Why are word embeddings better than one-hot encoding for neural language models?',
                    options: [
                      { id: 'a', text: 'One-hot vectors are too large (vocabulary size) and treat words as isolated symbols with no semantic relationships', isCorrect: true },
                      { id: 'b', text: 'Word embeddings are faster to compute', isCorrect: false },
                      { id: 'c', text: 'One-hot encoding requires more training data', isCorrect: false },
                      { id: 'd', text: 'Embeddings enable character-level modeling', isCorrect: false }
                    ],
                    explanation: 'One-hot: [0,0,1,0,...] for "agent", [0,1,0,0,...] for "robot". No similarity! Embeddings: dense vectors where similar words are close (cosine similarity). Captures semantics + reduces dimensions.',
                    points: 15
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

        {/* Interactive Components for Chapter 5 */}
        {chapterId === 5 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-700">
                  Master low-code platforms through visual workflows and platform comparisons
                </p>
              </div>
            </div>

            {/* Section 1: Platform Decision Helper */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Platform Selection Decision Tree
              </h3>
              <p className="text-gray-700 mb-6">
                Choose the right low-code platform based on your project requirements, team capabilities, and deployment needs.
                This decision tree guides you through key selection criteria: technical background, use case complexity, data security requirements, and integration needs.
              </p>
              <AgentFlowDiagram
                title="Which Low-Code Platform Should You Choose?"
                description="Decision flow: Project Requirements → Team Capabilities → Platform Selection"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: 'Start: Define Your Project',
                    description: 'What type of agent application do you need to build?',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    type: 'default',
                    label: 'Team Technical Background?',
                    description: 'Assess programming skills and technical expertise',
                    position: { x: 250, y: 100 }
                  },
                  {
                    id: '3',
                    type: 'default',
                    label: 'Non-Technical Team',
                    description: 'Product managers, designers, operations, no coding skills',
                    position: { x: 50, y: 200 }
                  },
                  {
                    id: '4',
                    type: 'default',
                    label: 'Mixed Team',
                    description: 'Some technical background, prefer low-code efficiency',
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: '5',
                    type: 'default',
                    label: 'Technical Team',
                    description: 'Strong programming skills, need deep customization',
                    position: { x: 450, y: 200 }
                  },
                  {
                    id: '6',
                    type: 'output',
                    label: '✅ Choose Coze',
                    description: 'Zero-code, drag-and-drop, rich plugins, one-click multi-platform publishing',
                    position: { x: 50, y: 300 }
                  },
                  {
                    id: '7',
                    type: 'default',
                    label: 'Data Security?',
                    description: 'Can data leave your infrastructure?',
                    position: { x: 250, y: 300 }
                  },
                  {
                    id: '8',
                    type: 'default',
                    label: 'Use Case Type?',
                    description: 'Business automation or AI application?',
                    position: { x: 450, y: 300 }
                  },
                  {
                    id: '9',
                    type: 'output',
                    label: '✅ Choose Dify (Cloud)',
                    description: 'SaaS deployment, rapid prototyping, full-stack LLM development',
                    position: { x: 150, y: 400 }
                  },
                  {
                    id: '10',
                    type: 'output',
                    label: '✅ Choose Dify (Self-Hosted)',
                    description: 'Private deployment, enterprise security, AES-256 encryption, RBAC',
                    position: { x: 350, y: 400 }
                  },
                  {
                    id: '11',
                    type: 'output',
                    label: '✅ Choose n8n',
                    description: 'Workflow automation + AI, connect 500+ services, private deployment',
                    position: { x: 450, y: 400 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: 'No coding' },
                  { id: 'e2-4', source: '2', target: '4', label: 'Some coding' },
                  { id: 'e2-5', source: '2', target: '5', label: 'Strong coding' },
                  { id: 'e3-6', source: '3', target: '6', animated: true },
                  { id: 'e4-7', source: '4', target: '7' },
                  { id: 'e5-8', source: '5', target: '8' },
                  { id: 'e7-9', source: '7', target: '9', label: 'Cloud OK' },
                  { id: 'e7-10', source: '7', target: '10', label: 'Private only' },
                  { id: 'e8-11', source: '8', target: '11', label: 'Automation' }
                ]}
                height={500}
              />
            </section>

            {/* Section 2: Coze Daily AI Brief Workflow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Coze: Daily AI Brief Workflow Architecture
              </h3>
              <p className="text-gray-700 mb-6">
                Multi-source information aggregation using Coze plugins (Section 5.2.2).
                This workflow demonstrates how Coze's plugin ecosystem enables zero-code integration of RSS feeds, GitHub repositories, and arXiv papers into a structured AI brief.
              </p>
              <AgentFlowDiagram
                title="Coze Daily AI Brief: Plugin Orchestration"
                description="Aggregate AI news from 36Kr, Huxiu, IT Home, InfoQ + GitHub projects + arXiv papers → Structured brief"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: 'User Request',
                    description: 'Trigger: "Generate today\'s AI brief"',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    type: 'default',
                    label: 'RSS Plugin (36Kr)',
                    description: 'Feed: https://www.36kr.com/feed',
                    position: { x: 50, y: 100 }
                  },
                  {
                    id: '3',
                    type: 'default',
                    label: 'RSS Plugin (Huxiu)',
                    description: 'Feed: https://rss.huxiu.com/',
                    position: { x: 150, y: 100 }
                  },
                  {
                    id: '4',
                    type: 'default',
                    label: 'RSS Plugin (IT Home)',
                    description: 'Feed: http://www.ithome.com/rss/',
                    position: { x: 250, y: 100 }
                  },
                  {
                    id: '5',
                    type: 'default',
                    label: 'GitHub Plugin',
                    description: 'Query: "AI", sort by updated, 10 repos',
                    position: { x: 350, y: 100 }
                  },
                  {
                    id: '6',
                    type: 'default',
                    label: 'arXiv Plugin',
                    description: 'Search: "AI", count: 5, sort by latest',
                    position: { x: 450, y: 100 }
                  },
                  {
                    id: '7',
                    type: 'default',
                    label: 'Large Model Node',
                    description: 'Role: Senior Tech Media Editor. Filter AI-related content, add emojis, format as brief',
                    position: { x: 250, y: 230 }
                  },
                  {
                    id: '8',
                    type: 'output',
                    label: 'Structured AI Brief',
                    description: '🚀 10 AI News + 📚 5 Papers + 💻 5 GitHub Projects with titles, links, summaries',
                    position: { x: 250, y: 360 }
                  },
                  {
                    id: '9',
                    type: 'default',
                    label: 'One-Click Publishing',
                    description: 'Deploy to WeChat, Feishu, Doubao, or Coze Store',
                    position: { x: 250, y: 460 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', animated: true },
                  { id: 'e1-3', source: '1', target: '3', animated: true },
                  { id: 'e1-4', source: '1', target: '4', animated: true },
                  { id: 'e1-5', source: '1', target: '5', animated: true },
                  { id: 'e1-6', source: '1', target: '6', animated: true },
                  { id: 'e2-7', source: '2', target: '7', label: 'articles' },
                  { id: 'e3-7', source: '3', target: '7', label: 'articles' },
                  { id: 'e4-7', source: '4', target: '7', label: 'articles' },
                  { id: 'e5-7', source: '5', target: '7', label: 'repos' },
                  { id: 'e6-7', source: '6', target: '7', label: 'papers' },
                  { id: 'e7-8', source: '7', target: '8', animated: true },
                  { id: 'e8-9', source: '8', target: '9', animated: true }
                ]}
                height={600}
              />
            </section>

            {/* Section 3: Dify Multi-Agent Architecture */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Dify: Super Agent Personal Assistant Architecture
              </h3>
              <p className="text-gray-700 mb-6">
                Multi-agent system with intelligent question classification (Section 5.3.2).
                The question classifier routes user requests to specialized sub-agents: Daily Assistant, Copywriting Optimizer, Multimodal Generator, Data Analyst, and MCP Tool Integration.
              </p>
              <AgentFlowDiagram
                title="Dify Multi-Agent: Question Classifier + Specialized Sub-Agents"
                description="Route requests to Daily Q&A, Copywriting, Image/Video Gen, Data Query, or MCP tools"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: 'User Request',
                    description: 'Natural language query from user',
                    position: { x: 300, y: 0 }
                  },
                  {
                    id: '2',
                    type: 'default',
                    label: 'Question Classifier',
                    description: 'Intelligent router: Analyze intent → Route to specialized agent',
                    position: { x: 300, y: 100 }
                  },
                  {
                    id: '3',
                    type: 'default',
                    label: 'Daily Assistant',
                    description: 'General Q&A + Time Tools. Role: Daily Question Consultation Expert',
                    position: { x: 50, y: 220 }
                  },
                  {
                    id: '4',
                    type: 'default',
                    label: 'Copywriting Optimizer',
                    description: 'Polish, expand, improve text. Output: 500+ words, emotional resonance',
                    position: { x: 180, y: 220 }
                  },
                  {
                    id: '5',
                    type: 'default',
                    label: 'Multimodal Generator',
                    description: 'Doubao plugin: Image (1:1) + Video (seedream model)',
                    position: { x: 310, y: 220 }
                  },
                  {
                    id: '6',
                    type: 'default',
                    label: 'Data Query Agent',
                    description: 'rookie-text2data plugin: SQL generation → DB query → Visualization (pie/bar/line charts)',
                    position: { x: 440, y: 220 }
                  },
                  {
                    id: '7',
                    type: 'default',
                    label: 'MCP Tools Agent',
                    description: 'ReAct mode: Amap navigation, dietary recommendations, news assistant (SSE)',
                    position: { x: 570, y: 220 }
                  },
                  {
                    id: '8',
                    type: 'output',
                    label: 'Specialized Response',
                    description: 'Context-aware answer from the most relevant agent',
                    position: { x: 300, y: 350 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: 'General question' },
                  { id: 'e2-4', source: '2', target: '4', label: 'Copywriting task' },
                  { id: 'e2-5', source: '2', target: '5', label: 'Image/video request' },
                  { id: 'e2-6', source: '2', target: '6', label: 'Data query' },
                  { id: 'e2-7', source: '2', target: '7', label: 'Location/diet/news' },
                  { id: 'e3-8', source: '3', target: '8', animated: true },
                  { id: 'e4-8', source: '4', target: '8', animated: true },
                  { id: 'e5-8', source: '5', target: '8', animated: true },
                  { id: 'e6-8', source: '6', target: '8', animated: true },
                  { id: 'e7-8', source: '7', target: '8', animated: true }
                ]}
                height={450}
              />
            </section>

            {/* Section 4: n8n Email Agent Workflow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                n8n: Intelligent Email Assistant Workflow
              </h3>
              <p className="text-gray-700 mb-6">
                Automated email processing with AI decision-making (Section 5.4).
                Gmail Trigger → AI Agent (with Memory + Tools) → Automated Reply.
                The AI Agent can search the web (SerpAPI), query private knowledge (Simple Vector Store), and remember conversation history (Simple Memory).
              </p>
              <AgentFlowDiagram
                title="n8n Email Agent: Receive → AI Think → Tool Call → Reply"
                description="24/7 automated customer support with context-aware responses"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: 'Gmail Trigger',
                    description: 'Event: Message Received. Automatically triggers on new email',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    type: 'default',
                    label: 'Extract Email Data',
                    description: 'From: sender, Subject: title, Body: content, ThreadId: conversation ID',
                    position: { x: 250, y: 100 }
                  },
                  {
                    id: '3',
                    type: 'default',
                    label: 'AI Agent Node',
                    description: 'Core brain: Gemini Chat Model + Memory + Tools. Autonomous decision-making',
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: '4',
                    type: 'default',
                    label: 'Tool: SerpAPI',
                    description: 'Search public information online to answer user questions',
                    position: { x: 50, y: 300 }
                  },
                  {
                    id: '5',
                    type: 'default',
                    label: 'Tool: Simple Vector Store',
                    description: 'Query private knowledge base (work schedule, policies). Memory Key: my_private_knowledge',
                    position: { x: 250, y: 300 }
                  },
                  {
                    id: '6',
                    type: 'default',
                    label: 'Memory: Simple Memory',
                    description: 'Remember conversation history per email thread. Key: threadId',
                    position: { x: 450, y: 300 }
                  },
                  {
                    id: '7',
                    type: 'default',
                    label: 'Generate Response',
                    description: 'Draft email with: Status prefix (work hours check) + Core answer (from SerpAPI) + Signature',
                    position: { x: 250, y: 420 }
                  },
                  {
                    id: '8',
                    type: 'output',
                    label: 'Send Gmail Reply',
                    description: 'To: sender, Subject: Re: [original], Body: formatted HTML with <br> tags',
                    position: { x: 250, y: 520 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', animated: true },
                  { id: 'e2-3', source: '2', target: '3', animated: true },
                  { id: 'e3-4', source: '3', target: '4', label: 'Call tool' },
                  { id: 'e3-5', source: '3', target: '5', label: 'Query KB' },
                  { id: 'e3-6', source: '3', target: '6', label: 'Load history' },
                  { id: 'e4-7', source: '4', target: '7', label: 'Search results' },
                  { id: 'e5-7', source: '5', target: '7', label: 'Work hours' },
                  { id: 'e6-7', source: '6', target: '7', label: 'Context' },
                  { id: 'e7-8', source: '7', target: '8', animated: true }
                ]}
                height={620}
              />
            </section>

            {/* Section 5: MCP Protocol Explanation */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                MCP (Model Context Protocol) Architecture
              </h3>
              <p className="text-gray-700 mb-6">
                How MCP enables standardized agent-to-tool communication (Section 5.3.2).
                MCP is the "new standard" for agent tool invocation, providing a unified protocol for LLMs to discover and call external services.
                Unlike traditional REST APIs, MCP supports bidirectional communication and tool auto-expansion.
              </p>
              <AgentFlowDiagram
                title="MCP Protocol: Standardized Agent-Tool Integration"
                description="LLM Agent ↔ MCP Server ↔ External API/Service"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: 'LLM Agent',
                    description: 'User query: "Find restaurants near me"',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    type: 'default',
                    label: 'MCP Client',
                    description: 'Agent-side: Send tool discovery request + function calls',
                    position: { x: 250, y: 100 }
                  },
                  {
                    id: '3',
                    type: 'default',
                    label: 'MCP Server',
                    description: 'Standardized protocol server. Communication: SSE (Server-Sent Events) or JSON-RPC',
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: '4',
                    type: 'default',
                    label: 'Tool Discovery',
                    description: 'MCP Server returns: Available tools (search_place, get_route, get_weather) + schemas',
                    position: { x: 80, y: 320 }
                  },
                  {
                    id: '5',
                    type: 'default',
                    label: 'Amap API',
                    description: 'External service: Map data, POI search, route planning. API Key: AMAP_MAPS_API_KEY',
                    position: { x: 250, y: 320 }
                  },
                  {
                    id: '6',
                    type: 'default',
                    label: 'Other APIs',
                    description: 'Dietary recommendations, news feeds, weather services, etc.',
                    position: { x: 420, y: 320 }
                  },
                  {
                    id: '7',
                    type: 'default',
                    label: 'Execute Tool Call',
                    description: 'MCP Server calls Amap API: search_place(query="restaurant", location="current")',
                    position: { x: 250, y: 440 }
                  },
                  {
                    id: '8',
                    type: 'output',
                    label: 'Return Results',
                    description: 'MCP Server → Agent: Restaurant list with names, addresses, ratings',
                    position: { x: 250, y: 540 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', animated: true },
                  { id: 'e2-3', source: '2', target: '3', animated: true, label: 'MCP protocol' },
                  { id: 'e3-4', source: '3', target: '4', label: 'Discover tools' },
                  { id: 'e3-5', source: '3', target: '5', label: 'Connect' },
                  { id: 'e3-6', source: '3', target: '6', label: 'Connect' },
                  { id: 'e5-7', source: '5', target: '7', label: 'API call' },
                  { id: 'e7-8', source: '7', target: '8', animated: true }
                ]}
                height={640}
              />
            </section>

            {/* Section 6: Platform Comparison Table */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Platform Comparison: Coze vs Dify vs n8n
              </h3>
              <p className="text-gray-700 mb-6">
                Side-by-side comparison of the three major low-code platforms.
                Use this table to quickly assess which platform best fits your project requirements based on technical background, use cases, deployment needs, and ecosystem support.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 ">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="border border-gray-300  px-4 py-3 text-left text-sm font-semibold text-gray-900">Dimension</th>
                      <th className="border border-gray-300  px-4 py-3 text-left text-sm font-semibold text-gray-900">Coze (ByteDance)</th>
                      <th className="border border-gray-300  px-4 py-3 text-left text-sm font-semibold text-gray-900">Dify (Open Source)</th>
                      <th className="border border-gray-300  px-4 py-3 text-left text-sm font-semibold text-gray-900">n8n (Open Source)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900">
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Core Positioning</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Zero-code AI agent builder</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Full-stack LLM app dev platform (BaaS + LLMOps)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Workflow automation + AI integration</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Target Users</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Non-technical: Product managers, operations, creators</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Developers + enterprises building scalable AI apps</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Technical teams needing business automation + AI</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Learning Curve</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">⭐ Easy (drag-and-drop, no code)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">⭐⭐ Medium (some technical background needed)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">⭐⭐⭐ Steep (workflow logic + coding for customization)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Plugin Ecosystem</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">🔥 Rich plugin store (RSS, GitHub, arXiv, social media)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">🔥🔥 8,677+ plugins (Google, Azure, Notion, DuckDuckGo)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">🔥🔥🔥 500+ nodes (Gmail, Slack, databases, APIs)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">MCP Support</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">❌ Not supported (major limitation)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">✅ Full MCP support (SSE mode, ModelScope market)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">✅ Supported via MCP nodes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Deployment</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">☁️ Cloud-only (SaaS)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">☁️🏠 Cloud SaaS or self-hosted (Docker Compose)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">🏠 Self-hosted (private deployment for data security)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Multi-Platform Publishing</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">✅ One-click: WeChat, Feishu, Doubao, Coze Store</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">⚠️ API endpoints (manual integration)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">⚠️ Webhook/API integration required</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Workflow Import/Export</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">⚠️ ZIP file (paid version only, not JSON)</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">✅ JSON export/import</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">✅ JSON export/import (version control friendly)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Best For</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">🎯 Rapid prototyping, non-technical teams, multi-platform bots</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">🎯 Enterprise AI apps, RAG pipelines, complex workflows</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">🎯 Business automation + AI, connecting existing systems</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300  px-4 py-3 font-medium text-gray-900">Main Limitations</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">No MCP, complex plugin config, no JSON export</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Steep learning curve, performance in high concurrency</td>
                      <td className="border border-gray-300  px-4 py-3 text-gray-700">Non-persistent memory/storage, version control challenges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50  rounded-lg border border-blue-200 ">
                <p className="text-sm text-blue-800">
                  <strong>💡 Selection Guide:</strong>
                  <br/>• <strong>Rapid prototype + no coding</strong> → Coze
                  <br/>• <strong>Enterprise AI app + complex logic</strong> → Dify
                  <br/>• <strong>Business automation + AI integration</strong> → n8n
                  <br/>• <strong>Hybrid approach:</strong> Use low-code for prototyping, switch to code for production fine-tuning
                </p>
              </div>
            </section>

            {/* Section 7: Knowledge Check Quiz */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Knowledge Check: Low-Code Platforms Mastery
              </h3>
              <Quiz
                chapterId={5}
                title="Chapter 5 Knowledge Check"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice' as const,
                    question: 'What is the PRIMARY advantage of low-code platforms over pure code development for agent applications?',
                    options: [
                      { id: 'a', text: 'Low-code platforms are always faster and more performant', isCorrect: false },
                      { id: 'b', text: 'They provide higher-level abstraction, allowing focus on business logic rather than low-level implementation', isCorrect: true },
                      { id: 'c', text: 'Low-code platforms completely replace the need for programming skills', isCorrect: false },
                      { id: 'd', text: 'They automatically generate better prompts than human engineers', isCorrect: false }
                    ],
                    explanation: 'Section 5.1.1: Low-code platforms provide "higher level of abstraction," enabling developers to focus on business logic and prompt engineering rather than underlying implementation details. They complement, not replace, coding skills.',
                    points: 12
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice' as const,
                    question: 'In the Coze Daily AI Brief case (Section 5.2.2), what is the role of the Large Model Node?',
                    options: [
                      { id: 'a', text: 'It directly fetches RSS feeds and GitHub data', isCorrect: false },
                      { id: 'b', text: 'It filters AI-related content from multiple sources, adds emojis, and formats the structured brief', isCorrect: true },
                      { id: 'c', text: 'It stores the final brief in a database', isCorrect: false },
                      { id: 'd', text: 'It automatically publishes the brief to social media platforms', isCorrect: false }
                    ],
                    explanation: 'The Large Model Node receives inputs from RSS, GitHub, and arXiv plugins, then filters AI-related content, adds unique emojis per item, and structures the output into sections: AI Tech News (10), Papers (5), and Open-Source Projects (5).',
                    points: 12
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice' as const,
                    question: 'Why is NOT supporting MCP (Model Context Protocol) considered a major limitation for Coze?',
                    options: [
                      { id: 'a', text: 'MCP is just a marketing buzzword with no real benefits', isCorrect: false },
                      { id: 'b', text: 'MCP provides a standardized protocol for tool discovery and bidirectional agent-service communication, enabling richer integrations', isCorrect: true },
                      { id: 'c', text: 'MCP only works with open-source platforms, not commercial ones', isCorrect: false },
                      { id: 'd', text: 'Without MCP, agents cannot call any external APIs', isCorrect: false }
                    ],
                    explanation: 'Section 5.3.2 explains MCP as the "new standard" for agent tool invocation. Unlike REST APIs, MCP supports tool auto-expansion, standardized discovery, and bidirectional communication via SSE/JSON-RPC. Coze\'s plugin store is rich, but lacking MCP limits extensibility.',
                    points: 15
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice' as const,
                    question: 'In the Dify Super Agent (Section 5.3.2), what architectural pattern is used to handle diverse user requests?',
                    options: [
                      { id: 'a', text: 'A single monolithic agent handles all tasks with conditional logic', isCorrect: false },
                      { id: 'b', text: 'Question classifier intelligently routes requests to specialized sub-agents (Daily, Copywriting, Multimodal, Data, MCP)', isCorrect: true },
                      { id: 'c', text: 'Users manually select which sub-agent to use from a menu', isCorrect: false },
                      { id: 'd', text: 'All sub-agents run in parallel and the best response is selected', isCorrect: false }
                    ],
                    explanation: 'Multi-agent architecture with intelligent routing: Question Classifier analyzes user intent → Routes to specialized agent → Returns context-aware response. This design ensures each agent focuses on its domain expertise (e.g., Copywriting Optimizer outputs 500+ words with emotional resonance).',
                    points: 12
                  },
                  {
                    id: 'q5',
                    type: 'multiple-choice' as const,
                    question: 'In the n8n Intelligent Email Assistant (Section 5.4), what happens if Simple Vector Store and Simple Memory are used without replacement?',
                    options: [
                      { id: 'a', text: 'They work perfectly in production with no issues', isCorrect: false },
                      { id: 'b', text: 'All conversation history and knowledge base data is lost when n8n service restarts (fatal for production)', isCorrect: true },
                      { id: 'c', text: 'They automatically sync to cloud storage for persistence', isCorrect: false },
                      { id: 'd', text: 'Performance degrades slowly over time but data is preserved', isCorrect: false }
                    ],
                    explanation: 'Section 5.4.5: "Simple Memory and Simple Vector Store are both memory-based, which means once the n8n service restarts, all conversation history and knowledge bases will be lost. This is fatal for production environments." Must replace with persistent storage (Redis, Pinecone).',
                    points: 15
                  },
                  {
                    id: 'q6',
                    type: 'multiple-choice' as const,
                    question: 'Which platform is the BEST choice for a non-technical team (product manager + designer) needing to quickly prototype an AI chatbot for WeChat?',
                    options: [
                      { id: 'a', text: 'n8n - it has the most powerful workflow capabilities', isCorrect: false },
                      { id: 'b', text: 'Dify - it offers the most enterprise-grade features', isCorrect: false },
                      { id: 'c', text: 'Coze - zero-code, drag-and-drop, one-click WeChat publishing', isCorrect: true },
                      { id: 'd', text: 'Pure code development - gives the most control', isCorrect: false }
                    ],
                    explanation: 'Section 5.5: "Non-technical users, rapid prototype validation → Prioritize Coze." Coze targets "entry-level users, product managers, operations personnel" with "extremely friendly visual interface" and "one-click publishing to WeChat, Feishu, Doubao."',
                    points: 12
                  },
                  {
                    id: 'q7',
                    type: 'multiple-choice' as const,
                    question: 'What is the key difference between traditional automation workflows and modern AI Agent workflows (as demonstrated in n8n)?',
                    options: [
                      { id: 'a', text: 'Traditional workflows are faster than AI Agent workflows', isCorrect: false },
                      { id: 'b', text: 'Traditional: Linear, predefined paths. AI Agent: Autonomous decision-making, dynamic tool selection based on context', isCorrect: true },
                      { id: 'c', text: 'AI Agent workflows cannot connect to external APIs', isCorrect: false },
                      { id: 'd', text: 'There is no fundamental difference; both are exactly the same', isCorrect: false }
                    ],
                    explanation: 'Section 5.4.2: "Traditional processes are linear, while the Agent will... autonomously understand user intent, make decisions and choices among multiple available tools." Process: Receive → AI Agent (Think → Decide → Tool Call) → Reply. Agent uses SerpAPI + Vector Store dynamically.',
                    points: 13
                  },
                  {
                    id: 'q8',
                    type: 'multiple-choice' as const,
                    question: 'In Dify\'s Copywriting Optimization module, the prompt requires output "exceeding 500 words." What is the rationale behind this hard length requirement?',
                    options: [
                      { id: 'a', text: 'Longer text always equals better quality', isCorrect: false },
                      { id: 'b', text: 'It ensures comprehensive content expansion with emotional resonance, preventing overly brief or shallow optimization', isCorrect: true },
                      { id: 'c', text: 'The LLM model only works properly with 500+ word outputs', isCorrect: false },
                      { id: 'd', text: 'It\'s arbitrary; length requirements should never be used in prompts', isCorrect: false }
                    ],
                    explanation: 'Section 5.3.2 prompt: "appropriately expand and enrich copy content to provide a more comprehensive optimized version" + Example shows transformation from 9 words to 500+ words with emotional storytelling, value propositions, and call-to-action. Length ensures depth, not just surface edits.',
                    points: 13
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

        {/* Interactive Components for Chapter 6 */}
        {chapterId === 6 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600">
                  Explore agent frameworks through interactive visualizations
                </p>
              </div>
            </div>

            {/* Framework Comparison Table */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Agent Framework Comparison Matrix
              </h3>
              <p className="text-gray-700 mb-6">
                Compare four cutting-edge agent frameworks across architecture, collaboration patterns, and use cases.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200  rounded-lg">
                  <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Dimension</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">AutoGen</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">AgentScope</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">CAMEL</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">LangGraph</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Core Philosophy</td>
                      <td className="px-6 py-4 text-gray-700">Collaboration through conversation</td>
                      <td className="px-6 py-4 text-gray-700">Message-driven platform</td>
                      <td className="px-6 py-4 text-gray-700">Role-playing autonomous collaboration</td>
                      <td className="px-6 py-4 text-gray-700">Graph-based state machines</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="px-6 py-4 font-medium text-gray-900">Architecture</td>
                      <td className="px-6 py-4 text-gray-700">Async-first, layered (core + agentchat)</td>
                      <td className="px-6 py-4 text-gray-700">Engineering-first, modular layers</td>
                      <td className="px-6 py-4 text-gray-700">Inception prompting + role setup</td>
                      <td className="px-6 py-4 text-gray-700">StateGraph with nodes & edges</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Collaboration Pattern</td>
                      <td className="px-6 py-4 text-gray-700">Round-robin group chat</td>
                      <td className="px-6 py-4 text-gray-700">MsgHub message passing</td>
                      <td className="px-6 py-4 text-gray-700">AI User ↔ AI Assistant dialogue</td>
                      <td className="px-6 py-4 text-gray-700">Conditional edge routing</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="px-6 py-4 font-medium text-gray-900">Key Components</td>
                      <td className="px-6 py-4 text-gray-700">AssistantAgent, UserProxyAgent, Team</td>
                      <td className="px-6 py-4 text-gray-700">Msg, AgentBase, MsgHub, Pipeline</td>
                      <td className="px-6 py-4 text-gray-700">RolePlaying, ChatAgent</td>
                      <td className="px-6 py-4 text-gray-700">StateGraph, Node functions, Edges</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                      <td className="px-6 py-4 text-gray-700">Software development teams, fixed workflows</td>
                      <td className="px-6 py-4 text-gray-700">Large-scale production systems, distributed deployment</td>
                      <td className="px-6 py-4 text-gray-700">Creative tasks, cross-domain collaboration</td>
                      <td className="px-6 py-4 text-gray-700">Iterative workflows, reflection, complex logic</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="px-6 py-4 font-medium text-gray-900">Strengths</td>
                      <td className="px-6 py-4 text-gray-700">Clear turn-taking, easy debugging</td>
                      <td className="px-6 py-4 text-gray-700">Enterprise-grade, fault recovery, observability</td>
                      <td className="px-6 py-4 text-gray-700">Minimal human intervention, autonomous</td>
                      <td className="px-6 py-4 text-gray-700">Native loop support, flexible branching</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Typical Use Case</td>
                      <td className="px-6 py-4 text-gray-700">Bitcoin price tracker (PM → Engineer → Reviewer → Tester)</td>
                      <td className="px-6 py-4 text-gray-700">Multi-agent customer service, distributed AI systems</td>
                      <td className="px-6 py-4 text-gray-700">Psychology e-book (Psychologist ↔ Writer)</td>
                      <td className="px-6 py-4 text-gray-700">Research agent with planning → execution → reflection loop</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* AutoGen Round-Robin Flow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                AutoGen: Round-Robin Group Chat Workflow
              </h3>
              <p className="text-gray-700 mb-6">
                AutoGen coordinates multi-agent collaboration through sequential conversation turns,
                simulating a software development team.
              </p>
              <AgentFlowDiagram
                title="Bitcoin Price Tracker Development Team"
                description="Four agents collaborate in fixed order until task completion (ProductManager → Engineer → CodeReviewer → UserProxy)"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: '📋 Product Manager',
                    description: 'Analyzes requirements, proposes tech stack (Streamlit + CoinGecko API), defines acceptance criteria',
                    position: { x: 50, y: 0 }
                  },
                  {
                    id: '2',
                    label: '👨‍💻 Engineer',
                    description: 'Implements code based on requirements, handles API integration, creates UI components',
                    position: { x: 50, y: 120 }
                  },
                  {
                    id: '3',
                    label: '🔍 Code Reviewer',
                    description: 'Checks code quality, security (API key handling), best practices, error handling',
                    position: { x: 50, y: 240 }
                  },
                  {
                    id: '4',
                    type: 'output',
                    label: '🧪 User Proxy',
                    description: 'Tests implementation, verifies functionality, provides feedback, issues TERMINATE command',
                    position: { x: 50, y: 360 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', label: 'Requirements', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: 'Code', animated: true },
                  { id: 'e3-4', source: '3', target: '4', label: 'Approved', animated: true },
                  { id: 'e4-1', source: '4', target: '1', label: 'Feedback (if needed)', animated: false }
                ]}
                height={450}
              />
            </section>

            {/* AgentScope Message Hub */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                AgentScope: Message-Driven Architecture
              </h3>
              <p className="text-gray-700 mb-6">
                AgentScope uses MsgHub as a central message router, enabling asynchronous, location-transparent
                communication between distributed agents.
              </p>
              <AgentFlowDiagram
                title="MsgHub: Central Message Router"
                description="All agent interactions abstracted as message passing through a central hub"
                nodes={[
                  {
                    id: 'hub',
                    label: '📬 MsgHub',
                    description: 'Central message router: persistence, routing, distributed communication, observability',
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: 'agent1',
                    type: 'input',
                    label: '🤖 Agent A',
                    description: 'Sends Msg(name, content, role, metadata) to hub',
                    position: { x: 50, y: 50 }
                  },
                  {
                    id: 'agent2',
                    label: '🤖 Agent B',
                    description: 'Receives messages, executes reply() method, sends response',
                    position: { x: 450, y: 50 }
                  },
                  {
                    id: 'agent3',
                    label: '🤖 Agent C',
                    description: 'Subscribes to specific message types, processes asynchronously',
                    position: { x: 50, y: 350 }
                  },
                  {
                    id: 'agent4',
                    type: 'output',
                    label: '🤖 Agent D',
                    description: 'Can run on remote server, location-transparent communication',
                    position: { x: 450, y: 350 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'agent1', target: 'hub', label: 'send(msg)', animated: true },
                  { id: 'e2', source: 'hub', target: 'agent2', label: 'route', animated: true },
                  { id: 'e3', source: 'agent3', target: 'hub', label: 'subscribe', animated: true },
                  { id: 'e4', source: 'hub', target: 'agent4', label: 'broadcast', animated: true },
                  { id: 'e5', source: 'agent2', target: 'hub', label: 'reply', animated: false },
                  { id: 'e6', source: 'agent4', target: 'hub', label: 'ack', animated: false }
                ]}
                height={450}
              />
            </section>

            {/* CAMEL Role-Playing */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                CAMEL: Autonomous Role-Playing Collaboration
              </h3>
              <p className="text-gray-700 mb-6">
                CAMEL enables two agents to autonomously collaborate through inception prompting,
                where each agent stays in character to achieve a common goal.
              </p>
              <AgentFlowDiagram
                title="Psychology E-book Co-creation"
                description="Psychologist and Writer collaborate autonomously using inception prompting to create 'The Psychology of Procrastination'"
                nodes={[
                  {
                    id: 'task',
                    type: 'input',
                    label: '📝 Task Specification',
                    description: 'Create psychology e-book: scientific + readable, 8000-10000 words, practical advice',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: 'user',
                    label: '🧠 AI User (Psychologist)',
                    description: 'Role: Psychology expert. Inception prompt: "Provide scientific insights, empirical research..." Proposes content structure, fact-checks, ensures rigor',
                    position: { x: 100, y: 150 }
                  },
                  {
                    id: 'assistant',
                    label: '✍️ AI Assistant (Writer)',
                    description: 'Role: Professional writer. Inception prompt: "Transform academic concepts into vivid narratives..." Creates engaging prose, simplifies terminology',
                    position: { x: 400, y: 150 }
                  },
                  {
                    id: 'output',
                    type: 'output',
                    label: '📚 E-book Output',
                    description: 'Completed e-book: scientifically rigorous + highly readable, detected via <SOLUTION> markers',
                    position: { x: 250, y: 300 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'task', target: 'user', label: 'Initialize', animated: true },
                  { id: 'e2', source: 'task', target: 'assistant', label: 'Initialize', animated: true },
                  { id: 'e3', source: 'user', target: 'assistant', label: 'Proposes chapter structure', animated: true },
                  { id: 'e4', source: 'assistant', target: 'user', label: 'Drafts engaging intro', animated: true },
                  { id: 'e5', source: 'user', target: 'assistant', label: 'Adds research citations', animated: false },
                  { id: 'e6', source: 'assistant', target: 'user', label: 'Simplifies jargon', animated: false },
                  { id: 'e7', source: 'user', target: 'output', label: 'Validates', animated: true },
                  { id: 'e8', source: 'assistant', target: 'output', label: '<SOLUTION>', animated: true }
                ]}
                height={400}
              />
            </section>

            {/* LangGraph State Machine */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                LangGraph: Graph-Based Workflow with Cycles
              </h3>
              <p className="text-gray-700 mb-6">
                LangGraph models agent workflows as directed graphs with conditional edges,
                enabling iterative processes like planning, execution, and reflection loops.
              </p>
              <AgentFlowDiagram
                title="Research Agent with Reflection Loop"
                description="Plan → Execute → Reflect cycle continues until quality threshold met (3+ iterations or final answer reached)"
                nodes={[
                  {
                    id: 'start',
                    type: 'input',
                    label: '▶️ Start',
                    description: 'AgentState: {messages: [], current_task: "Analyze AI industry news", final_answer: ""}',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: 'planner',
                    label: '🗺️ Planner Node',
                    description: 'Formulates research plan, breaks down task into steps, updates state.messages',
                    position: { x: 100, y: 120 }
                  },
                  {
                    id: 'executor',
                    label: '⚙️ Executor Node',
                    description: 'Executes plan, calls tools (web search, API), appends results to state.messages',
                    position: { x: 400, y: 120 }
                  },
                  {
                    id: 'reflector',
                    label: '🔍 Reflector Node',
                    description: 'Evaluates quality, checks completeness, decides: continue iterating or finish',
                    position: { x: 250, y: 240 }
                  },
                  {
                    id: 'end',
                    type: 'output',
                    label: '✅ End',
                    description: 'state.final_answer populated, workflow complete',
                    position: { x: 250, y: 360 }
                  }
                ]}
                edges={[
                  { id: 'e1', source: 'start', target: 'planner', label: 'entry_point', animated: true },
                  { id: 'e2', source: 'planner', target: 'executor', label: 'regular edge', animated: true },
                  { id: 'e3', source: 'executor', target: 'reflector', label: 'regular edge', animated: true },
                  { id: 'e4', source: 'reflector', target: 'planner', label: 'conditional: len(messages) < 3', animated: true },
                  { id: 'e5', source: 'reflector', target: 'end', label: 'conditional: quality met', animated: true }
                ]}
                height={450}
              />
            </section>

            {/* Code Playground */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Framework Code Comparison: AutoGen vs LangGraph
              </h3>
              <p className="text-gray-700 mb-6">
                Experience the syntax differences between conversation-driven (AutoGen) and graph-driven (LangGraph) approaches.
              </p>
              <CodePlayground
                language="python"
                initialCode={`# ============================================
# AutoGen: Conversation-Driven Multi-Agent
# ============================================
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.teams import RoundRobinGroupChat
from autogen_agentchat.conditions import TextMentionTermination

# Define agents with specific roles
engineer = AssistantAgent(
    name="Engineer",
    model_client=model_client,
    system_message="You are a skilled Python developer..."
)

reviewer = AssistantAgent(
    name="Reviewer",
    model_client=model_client,
    system_message="You are a code review expert..."
)

# Create team with round-robin conversation
team = RoundRobinGroupChat(
    participants=[engineer, reviewer],
    termination_condition=TextMentionTermination("APPROVE"),
    max_turns=10
)

# Run collaborative task
result = await team.run(task="Build a calculator app")

# ============================================
# LangGraph: Graph-Driven State Machine
# ============================================
from langgraph.graph import StateGraph, END
from typing import TypedDict, List

# Define shared state
class AgentState(TypedDict):
    messages: List[str]
    code: str
    review_passed: bool

# Define node functions
def engineer_node(state: AgentState) -> AgentState:
    """Engineer writes code"""
    code = generate_code(state["messages"][-1])
    state["code"] = code
    state["messages"].append(f"Code: {code}")
    return state

def reviewer_node(state: AgentState) -> AgentState:
    """Reviewer checks code quality"""
    passed = check_quality(state["code"])
    state["review_passed"] = passed
    state["messages"].append(f"Review: {'PASS' if passed else 'FAIL'}")
    return state

def should_continue(state: AgentState) -> str:
    """Conditional routing"""
    return "end" if state["review_passed"] else "engineer"

# Build graph
workflow = StateGraph(AgentState)
workflow.add_node("engineer", engineer_node)
workflow.add_node("reviewer", reviewer_node)
workflow.set_entry_point("engineer")
workflow.add_edge("engineer", "reviewer")
workflow.add_conditional_edges(
    "reviewer",
    should_continue,
    {"engineer": "engineer", "end": END}
)

app = workflow.compile()
result = app.invoke({"messages": ["Build calculator"], "code": "", "review_passed": False})

print("AutoGen: Conversation-driven, sequential turns")
print("LangGraph: Graph-driven, conditional loops")`}
              />
            </section>

            {/* Knowledge Check Quiz */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Knowledge Check: Agent Framework Mastery
              </h3>
              <p className="text-gray-700 mb-6">
                Test your understanding of framework architectures, collaboration patterns, and use case selection.
              </p>
              <Quiz
                chapterId={6}
                title="Chapter 6 Knowledge Check"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice' as const,
                    question: 'What is the PRIMARY innovation of AutoGen 0.7.4 compared to earlier versions?',
                    options: [
                      { id: 'a', text: 'Support for more LLM providers', isCorrect: false },
                      { id: 'b', text: 'Asynchronous-first architecture with layered design (autogen-core + autogen-agentchat)', isCorrect: true },
                      { id: 'c', text: 'Built-in code execution sandbox', isCorrect: false },
                      { id: 'd', text: 'Automatic prompt optimization', isCorrect: false }
                    ],
                    explanation: 'Section 6.2.1 explains AutoGen 0.7.4 introduced fundamental architectural changes: layered design (separating core foundation from high-level agentchat) and fully asynchronous programming to improve concurrent performance. This was an architectural refactoring, not just new features.',
                    points: 12
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice' as const,
                    question: 'In AutoGen\'s RoundRobinGroupChat, what determines the speaking order of agents?',
                    options: [
                      { id: 'a', text: 'Random selection by the system', isCorrect: false },
                      { id: 'b', text: 'The order in the participants list when creating the group chat', isCorrect: true },
                      { id: 'c', text: 'Based on agent priority scores', isCorrect: false },
                      { id: 'd', text: 'Determined dynamically by conversation context', isCorrect: false }
                    ],
                    explanation: 'Section 6.2.2 explicitly states: "The order of the participants list determines the order in which agents speak." RoundRobinGroupChat follows a fixed sequential pattern, not dynamic or random selection.',
                    points: 10
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice' as const,
                    question: 'What is the core advantage of AgentScope\'s message-driven architecture?',
                    options: [
                      { id: 'a', text: 'Faster execution speed than function calls', isCorrect: false },
                      { id: 'b', text: 'Asynchronous decoupling, location transparency, observability, and fault tolerance', isCorrect: true },
                      { id: 'c', text: 'Simpler code syntax for developers', isCorrect: false },
                      { id: 'd', text: 'Automatic debugging capabilities', isCorrect: false }
                    ],
                    explanation: 'Section 6.3.1 lists four key advantages of message-driven architecture: (1) Asynchronous decoupling - agents don\'t wait for each other, (2) Location transparency - agents can be local or remote, (3) Observability - every message logged, (4) Reliability - messages can be persisted and retried.',
                    points: 13
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice' as const,
                    question: 'In CAMEL framework, what is the role of "Inception Prompting"?',
                    options: [
                      { id: 'a', text: 'To initialize the conversation with user requirements', isCorrect: false },
                      { id: 'b', text: 'To implant behavioral constraints and communication protocols ensuring agents stay in role and advance toward common goals', isCorrect: true },
                      { id: 'c', text: 'To generate creative prompt variations', isCorrect: false },
                      { id: 'd', text: 'To automatically optimize system messages', isCorrect: false }
                    ],
                    explanation: 'Section 6.4.1 explains inception prompting as a "carefully designed, structured initial instruction (System Prompt)" that clarifies roles, defines common goals, and most critically, "sets behavioral constraints and communication protocols" (e.g., propose one step at a time, use specific markers like <SOLUTION>) to prevent topic deviation and ensure structured, task-driven progress.',
                    points: 14
                  },
                  {
                    id: 'q5',
                    type: 'multiple-choice' as const,
                    question: 'What distinguishes LangGraph from traditional chain-based frameworks like LangChain?',
                    options: [
                      { id: 'a', text: 'Support for more data types', isCorrect: false },
                      { id: 'b', text: 'Native support for loops and cycles through conditional edges in a directed graph', isCorrect: true },
                      { id: 'c', text: 'Better integration with vector databases', isCorrect: false },
                      { id: 'd', text: 'Faster execution speed', isCorrect: false }
                    ],
                    explanation: 'Section 6.5.1 states: "In traditional chain structures, information can only flow in one direction. LangGraph defines... nodes and uses Edges to define jump logic... This design naturally supports Cycles, making it exceptionally simple and intuitive to implement complex workflows such as Reflection that involve iteration, correction, and self-reflection." The key innovation is cyclic/loop support.',
                    points: 12
                  },
                  {
                    id: 'q6',
                    type: 'multiple-choice' as const,
                    question: 'Which framework would be MOST suitable for building a large-scale, production-ready customer service system with distributed agents across multiple servers?',
                    options: [
                      { id: 'a', text: 'AutoGen - for its round-robin conversation management', isCorrect: false },
                      { id: 'b', text: 'AgentScope - for its enterprise-grade features, distributed deployment, fault recovery, and message-driven architecture', isCorrect: true },
                      { id: 'c', text: 'CAMEL - for its autonomous role-playing capabilities', isCorrect: false },
                      { id: 'd', text: 'LangGraph - for its state machine design', isCorrect: false }
                    ],
                    explanation: 'Section 6.3.1 describes AgentScope as "specifically designed for building large-scale, highly reliable multi-agent applications" with "enterprise-level features such as distributed deployment, fault recovery, and observability." The comparison table also lists AgentScope\'s strength as "enterprise-grade, fault recovery, observability" making it ideal for production systems.',
                    points: 11
                  },
                  {
                    id: 'q7',
                    type: 'multiple-choice' as const,
                    question: 'In LangGraph, what determines which node to execute next after a conditional edge?',
                    options: [
                      { id: 'a', text: 'The alphabetical order of node names', isCorrect: false },
                      { id: 'b', text: 'A condition function that evaluates the current state and returns a routing key', isCorrect: true },
                      { id: 'c', text: 'User input during execution', isCorrect: false },
                      { id: 'd', text: 'Random selection by the framework', isCorrect: false }
                    ],
                    explanation: 'Section 6.5.1 shows the conditional edge mechanism: "add_conditional_edges() uses a function to judge the current state and then dynamically decides which node to jump to next." The example shows should_continue() checking len(messages) and returning either "continue_to_planner" or "end_workflow" which maps to target nodes.',
                    points: 10
                  },
                  {
                    id: 'q8',
                    type: 'multiple-choice' as const,
                    question: 'Which framework pair would you choose for: (A) A creative writing project requiring a novelist and editor to collaborate, and (B) A code review workflow that needs multiple iterations until quality passes?',
                    options: [
                      { id: 'a', text: 'A: AutoGen, B: CAMEL', isCorrect: false },
                      { id: 'b', text: 'A: CAMEL, B: LangGraph', isCorrect: true },
                      { id: 'c', text: 'A: AgentScope, B: AutoGen', isCorrect: false },
                      { id: 'd', text: 'A: LangGraph, B: AgentScope', isCorrect: false }
                    ],
                    explanation: 'CAMEL excels at creative cross-domain collaboration (Section 6.4 example: psychologist + writer creating e-book) through autonomous role-playing. LangGraph\'s conditional edges naturally support iterative workflows with loops (Section 6.5: reflection loops, the code review example needs iteration until review_passed=true). AutoGen is better for fixed-turn workflows, not creative autonomy or complex iterations.',
                    points: 15
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

        {/* Interactive Components for Chapter 7 */}
        {chapterId === 7 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600">
                  Master framework architecture and hands-on implementation
                </p>
              </div>
            </div>

            {/* HelloAgents Framework Architecture */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">HelloAgents Framework Architecture</h3>
              <AgentFlowDiagram
                title="Three-Layer Framework Design"
                description="Click nodes to explore each layer's responsibility"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: '🏗️ Core Layer',
                    description: 'Foundation: HelloAgentsLLM (multi-provider), Message system, Config, Agent base class, Exception handling',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    label: '🤖 Agents Layer',
                    description: 'Implementations: SimpleAgent (basic chat), ReActAgent (reasoning+action), ReflectionAgent (self-critique), PlanSolveAgent (decompose+execute)',
                    position: { x: 100, y: 120 }
                  },
                  {
                    id: '3',
                    label: '🛠️ Tools Layer',
                    description: 'Tool base class, ToolRegistry, ToolChain manager, AsyncExecutor, Built-in tools (Calculator, Search)',
                    position: { x: 400, y: 120 }
                  },
                  {
                    id: '4',
                    type: 'output',
                    label: '🎯 Design Philosophy',
                    description: 'Lightweight + Teaching-friendly, Standard APIs, Progressive learning, "Everything is a Tool" abstraction',
                    position: { x: 250, y: 240 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', label: 'Inherits', animated: true },
                  { id: 'e1-3', source: '1', target: '3', label: 'Uses', animated: true },
                  { id: 'e2-4', source: '2', target: '4', animated: true },
                  { id: 'e3-4', source: '3', target: '4', animated: true }
                ]}
                height={350}
              />
            </section>

            {/* Provider Auto-Detection Flow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">LLM Provider Auto-Detection Mechanism</h3>
              <AgentFlowDiagram
                title="How HelloAgentsLLM Chooses the Right Provider"
                description="The intelligent provider selection process"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: '🔍 Check Specific Keys',
                    description: 'Priority 1: Check MODELSCOPE_API_KEY, OPENAI_API_KEY, ZHIPU_API_KEY in environment',
                    position: { x: 50, y: 0 }
                  },
                  {
                    id: '2',
                    label: '🌐 Parse base_url',
                    description: 'Priority 2: Check LLM_BASE_URL for domains (api-inference.modelscope.cn) or ports (:11434 for Ollama, :8000 for VLLM)',
                    position: { x: 50, y: 120 }
                  },
                  {
                    id: '3',
                    label: '🔑 Analyze Key Format',
                    description: 'Priority 3: Check LLM_API_KEY format (e.g., "ms-" prefix for ModelScope)',
                    position: { x: 50, y: 240 }
                  },
                  {
                    id: '4',
                    type: 'output',
                    label: '✅ Provider Detected',
                    description: 'Auto-configures base_url, api_key, and default model for selected provider',
                    position: { x: 50, y: 360 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', label: 'Not Found', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: 'Not Found', animated: true },
                  { id: 'e3-4', source: '3', target: '4', label: 'Found', animated: true }
                ]}
                height={450}
              />
            </section>

            {/* Code Playground */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Try It: Create Your First Agent with HelloAgents</h3>
              <CodePlayground
                title="Building a SimpleAgent with Tool Support"
                description="Experience the HelloAgents framework API"
                language="python"
                initialCode={`# HelloAgents Framework Quick Start
from hello_agents import SimpleAgent, HelloAgentsLLM, ToolRegistry
from hello_agents.tools import CalculatorTool

# Step 1: Create LLM with auto-detection
# Framework will auto-detect provider from environment variables
llm = HelloAgentsLLM()

# Step 2: Create a simple agent
agent = SimpleAgent(
    name="Math Assistant",
    llm=llm,
    system_prompt="You are a helpful math assistant"
)

# Step 3: Basic conversation (without tools)
response = agent.run("Hello! What can you help me with?")
print(f"Agent: {response}")

# Step 4: Add tools for enhanced capabilities
tool_registry = ToolRegistry()
calculator = CalculatorTool()
tool_registry.register_tool(calculator)

# Step 5: Create enhanced agent with tools
enhanced_agent = SimpleAgent(
    name="Enhanced Math Assistant",
    llm=llm,
    system_prompt="You are a helpful assistant with calculation abilities",
    tool_registry=tool_registry,
    enable_tool_calling=True
)

# Step 6: Test tool-enhanced conversation
result = enhanced_agent.run("Calculate 15 * 8 + 32")
print(f"Enhanced Agent: {result}")

# Step 7: View conversation history
print(f"Conversation turns: {len(enhanced_agent.get_history())}")
`}
                tests={[
                  {
                    input: 'len(agent.get_history())',
                    expected: '2',
                    description: 'Should track conversation history'
                  }
                ]}
                hints={[
                  'HelloAgentsLLM() auto-detects provider from environment variables',
                  'SimpleAgent inherits from Agent base class',
                  'ToolRegistry manages all available tools',
                  'enable_tool_calling=True activates tool use'
                ]}
                solution={`from hello_agents import SimpleAgent, HelloAgentsLLM, ToolRegistry
from hello_agents.tools import CalculatorTool

# Complete implementation with error handling
llm = HelloAgentsLLM()  # Auto-detects OpenAI, ModelScope, Ollama, etc.

# Basic agent
basic_agent = SimpleAgent(
    name="Basic Assistant",
    llm=llm,
    system_prompt="You are a friendly AI assistant"
)

response = basic_agent.run("Hello!")
print(response)

# Enhanced agent with tools
registry = ToolRegistry()
registry.register_tool(CalculatorTool())

enhanced_agent = SimpleAgent(
    name="Tool-Enhanced Assistant",
    llm=llm,
    system_prompt="You are a helpful assistant with tools",
    tool_registry=registry,
    enable_tool_calling=True
)

result = enhanced_agent.run("What is 25 * 4 + 10?")
print(result)
print(f"Messages: {len(enhanced_agent.get_history())}")`}
              />
            </section>

            {/* Exercise: Build Custom Tool */}
            <section>
              <Exercise
                id="chapter7-custom-tool"
                chapterId={7}
                title="Build a Custom Weather Tool"
                description="Implement a custom tool from scratch following HelloAgents design patterns"
                difficulty="medium"
                points={100}
                starterCode={`from typing import Dict, Any, List
from hello_agents import Tool, ToolParameter

class WeatherTool(Tool):
    """
    TODO: Implement a weather tool that provides temperature information

    Requirements:
    1. Inherit from Tool base class
    2. Implement run() method that returns weather for a city
    3. Implement get_parameters() to describe required parameters
    4. Use the mock weather data provided below
    """

    def __init__(self):
        # TODO: Call parent constructor with name and description
        pass

    def run(self, parameters: Dict[str, Any]) -> str:
        """
        Execute the weather tool

        Args:
            parameters: Dict with 'city' key

        Returns:
            Weather information string
        """
        # TODO: Implement weather lookup
        # Mock weather data
        weather_data = {
            "London": "15°C, Cloudy",
            "Tokyo": "22°C, Sunny",
            "New York": "18°C, Rainy",
            "Paris": "16°C, Partly Cloudy"
        }

        # Your code here
        pass

    def get_parameters(self) -> List[ToolParameter]:
        """
        Return parameter definitions

        Returns:
            List of ToolParameter objects
        """
        # TODO: Define the 'city' parameter
        pass

# Test your tool
from hello_agents import ToolRegistry

tool = WeatherTool()
registry = ToolRegistry()
registry.register_tool(tool)

# Should return weather for London
result = registry.execute_tool("weather", {"city": "London"})
print(result)
`}
                tests={[
                  {
                    input: 'tool.run({"city": "London"})',
                    expected: '15°C, Cloudy',
                    description: 'Should return weather for London'
                  },
                  {
                    input: 'len(tool.get_parameters())',
                    expected: '1',
                    description: 'Should define exactly one parameter'
                  }
                ]}
                hints={[
                  'Call super().__init__(name, description) in __init__',
                  'Access city with parameters.get("city")',
                  'Return ToolParameter with name, type, description, required fields',
                  'Handle missing cities gracefully with a default message'
                ]}
                solution={`from typing import Dict, Any, List
from hello_agents import Tool, ToolParameter

class WeatherTool(Tool):
    def __init__(self):
        super().__init__(
            name="weather",
            description="Get current weather for a city"
        )

    def run(self, parameters: Dict[str, Any]) -> str:
        weather_data = {
            "London": "15°C, Cloudy",
            "Tokyo": "22°C, Sunny",
            "New York": "18°C, Rainy",
            "Paris": "16°C, Partly Cloudy"
        }

        city = parameters.get("city", "")

        if city in weather_data:
            return f"Weather in {city}: {weather_data[city]}"
        else:
            return f"Weather data not available for {city}"

    def get_parameters(self) -> List[ToolParameter]:
        return [
            ToolParameter(
                name="city",
                type="string",
                description="Name of the city to get weather for",
                required=True
            )
        ]

# Test
from hello_agents import ToolRegistry

tool = WeatherTool()
registry = ToolRegistry()
registry.register_tool(tool)

print(registry.execute_tool("weather", {"city": "London"}))
print(registry.execute_tool("weather", {"city": "Berlin"}))`}
                language="python"
              />
            </section>

            {/* Quiz */}
            <section>
              <Quiz
                chapterId={7}
                title="Chapter 7 Framework Mastery Check"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'What is the core design philosophy that HelloAgents uses to simplify architecture?',
                    options: [
                      { id: 'a', text: 'Everything is an Object', isCorrect: false },
                      { id: 'b', text: 'Everything is a Tool', isCorrect: true },
                      { id: 'c', text: 'Everything is a Service', isCorrect: false },
                      { id: 'd', text: 'Everything is a Pipeline', isCorrect: false }
                    ],
                    explanation: 'HelloAgents abstracts Memory, RAG, MCP, and other modules as Tools, eliminating unnecessary abstraction layers and simplifying the learning curve.',
                    points: 10
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice',
                    question: 'Which method in HelloAgentsLLM is responsible for automatically detecting the LLM provider?',
                    options: [
                      { id: 'a', text: '_resolve_credentials', isCorrect: false },
                      { id: 'b', text: '_auto_detect_provider', isCorrect: true },
                      { id: 'c', text: 'detect_provider', isCorrect: false },
                      { id: 'd', text: 'configure_provider', isCorrect: false }
                    ],
                    explanation: '_auto_detect_provider checks environment variables, base_url patterns, and API key formats to intelligently select the provider.',
                    points: 15
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice',
                    question: 'What are the three layers in HelloAgents framework architecture?',
                    options: [
                      { id: 'a', text: 'Data, Logic, Presentation', isCorrect: false },
                      { id: 'b', text: 'Core, Agents, Tools', isCorrect: true },
                      { id: 'c', text: 'Model, View, Controller', isCorrect: false },
                      { id: 'd', text: 'Input, Processing, Output', isCorrect: false }
                    ],
                    explanation: 'The framework has three layers: Core (LLM, Message, Config, Agent base), Agents (SimpleAgent, ReActAgent, etc.), and Tools (ToolRegistry, built-in tools).',
                    points: 10
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice',
                    question: 'Why does the Message class use Pydantic BaseModel?',
                    options: [
                      { id: 'a', text: 'For automatic data validation and type safety', isCorrect: true },
                      { id: 'b', text: 'To make the code run faster', isCorrect: false },
                      { id: 'c', text: 'To reduce memory usage', isCorrect: false },
                      { id: 'd', text: 'To simplify inheritance', isCorrect: false }
                    ],
                    explanation: 'Pydantic provides automatic validation of field types and values, ensuring data integrity throughout the message system.',
                    points: 15
                  },
                  {
                    id: 'q5',
                    type: 'multiple-choice',
                    question: 'What is the main advantage of ToolRegistry supporting both Tool objects and direct function registration?',
                    options: [
                      { id: 'a', text: 'Better performance', isCorrect: false },
                      { id: 'b', text: 'Flexibility: complex tools use classes, simple tools use functions', isCorrect: true },
                      { id: 'c', text: 'Reduced code size', isCorrect: false },
                      { id: 'd', text: 'Easier debugging', isCorrect: false }
                    ],
                    explanation: 'This dual approach allows complex tools with state and validation to use classes, while simple stateless tools can be quickly registered as functions.',
                    points: 15
                  },
                  {
                    id: 'q6',
                    type: 'true-false',
                    question: 'True or False: The ReflectionAgent pattern allows agents to self-evaluate and iteratively improve their outputs.',
                    options: [
                      { id: 'true', text: 'True', isCorrect: true },
                      { id: 'false', text: 'False', isCorrect: false }
                    ],
                    explanation: 'True. ReflectionAgent implements an execute-reflect-optimize loop where the agent critiques and improves its own work.',
                    points: 10
                  },
                  {
                    id: 'q7',
                    type: 'multiple-choice',
                    question: 'What is the purpose of the Config.from_env() class method?',
                    options: [
                      { id: 'a', text: 'To validate configuration files', isCorrect: false },
                      { id: 'b', text: 'To override default configs using environment variables', isCorrect: true },
                      { id: 'c', text: 'To export configs to files', isCorrect: false },
                      { id: 'd', text: 'To reset configs to defaults', isCorrect: false }
                    ],
                    explanation: 'from_env() allows zero-code configuration by reading settings from environment variables, perfect for different deployment environments.',
                    points: 15
                  },
                  {
                    id: 'q8',
                    type: 'true-false',
                    question: 'True or False: PlanAndSolveAgent decomposes complex tasks into subtasks and executes them step by step.',
                    options: [
                      { id: 'true', text: 'True', isCorrect: true },
                      { id: 'false', text: 'False', isCorrect: false }
                    ],
                    explanation: 'True. PlanAndSolveAgent uses a Planner to create a step-by-step plan, then an Executor to solve each subtask sequentially.',
                    points: 10
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

        {/* Interactive Components for Chapter 13 */}
        {chapterId === 13 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600">
                  Build a complete multi-agent travel planner from scratch
                </p>
              </div>
            </div>

            {/* Multi-Agent Collaboration Flow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Multi-Agent Collaboration Architecture</h3>
              <AgentFlowDiagram
                title="Four Specialized Agents Working Together"
                description="Click nodes to see each agent's responsibility"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: '👤 User Request',
                    description: 'User inputs: city, dates, preferences, budget, transportation, accommodation',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    label: '🏛️ AttractionSearchAgent',
                    description: 'Searches for attractions based on user preferences using Amap POI search. Calls: amap_maps_text_search',
                    position: { x: 50, y: 120 }
                  },
                  {
                    id: '3',
                    label: '🌤️ WeatherQueryAgent',
                    description: 'Queries weather forecast for travel dates. Calls: amap_maps_weather',
                    position: { x: 200, y: 120 }
                  },
                  {
                    id: '4',
                    label: '🏨 HotelAgent',
                    description: 'Recommends hotels matching budget and accommodation type. Calls: amap_maps_text_search',
                    position: { x: 350, y: 120 }
                  },
                  {
                    id: '5',
                    label: '📋 PlannerAgent',
                    description: 'Integrates all information to generate complete travel plan with daily itinerary, meals, budget',
                    position: { x: 250, y: 240 }
                  },
                  {
                    id: '6',
                    type: 'output',
                    label: '✈️ Complete Travel Plan',
                    description: 'Final output: N-day itinerary with attractions, hotels, meals, weather, budget, map coordinates',
                    position: { x: 250, y: 360 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', label: 'Preferences', animated: true },
                  { id: 'e1-3', source: '1', target: '3', label: 'City + Dates', animated: true },
                  { id: 'e1-4', source: '1', target: '4', label: 'Accommodation', animated: true },
                  { id: 'e2-5', source: '2', target: '5', label: 'Attractions', animated: true },
                  { id: 'e3-5', source: '3', target: '5', label: 'Weather', animated: true },
                  { id: 'e4-5', source: '4', target: '5', label: 'Hotels', animated: true },
                  { id: 'e5-6', source: '5', target: '6', animated: true }
                ]}
                height={450}
              />
            </section>

            {/* MCP Integration Flow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">MCP (Model Context Protocol) Integration</h3>
              <AgentFlowDiagram
                title="How Agents Call External APIs Through MCP"
                description="The MCP protocol enables seamless tool integration"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: '🤖 Agent Decides',
                    description: 'Agent generates tool call marker: [TOOL_CALL:amap_maps_text_search:keywords=attraction,city=Beijing]',
                    position: { x: 50, y: 0 }
                  },
                  {
                    id: '2',
                    label: '🔧 MCPTool Parses',
                    description: 'HelloAgents framework extracts tool name and parameters from marker',
                    position: { x: 50, y: 100 }
                  },
                  {
                    id: '3',
                    label: '📡 JSON-RPC Request',
                    description: 'MCPTool sends request to MCP server via stdin (inter-process communication)',
                    position: { x: 50, y: 200 }
                  },
                  {
                    id: '4',
                    label: '🗺️ Amap MCP Server',
                    description: 'Node.js process receives request, calls Amap HTTP API, returns formatted response',
                    position: { x: 50, y: 300 }
                  },
                  {
                    id: '5',
                    type: 'output',
                    label: '✅ Result to Agent',
                    description: 'Attraction list returned to agent for next reasoning step',
                    position: { x: 50, y: 400 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: 'Call', animated: true },
                  { id: 'e3-4', source: '3', target: '4', label: 'Execute', animated: true },
                  { id: 'e4-5', source: '4', target: '5', label: 'Response', animated: true }
                ]}
                height={500}
              />
            </section>

            {/* Code Playground */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Try It: Build a Simple Multi-Agent System</h3>
              <CodePlayground
                title="Coordinating Multiple Agents"
                description="Learn the pattern for multi-agent collaboration"
                language="python"
                initialCode={`from hello_agents import SimpleAgent, HelloAgentsLLM

class TripPlannerAgent:
    """
    Multi-agent travel planner coordinator
    """

    def __init__(self):
        self.llm = HelloAgentsLLM()

        # Create specialized agents
        self.attraction_agent = SimpleAgent(
            name="AttractionSearchAgent",
            llm=self.llm,
            system_prompt="You are an attraction search expert. Search for attractions based on user preferences."
        )

        self.weather_agent = SimpleAgent(
            name="WeatherQueryAgent",
            llm=self.llm,
            system_prompt="You are a weather query expert. Provide weather forecasts."
        )

        self.planner_agent = SimpleAgent(
            name="PlannerAgent",
            llm=self.llm,
            system_prompt="You are an itinerary planning expert. Integrate information and create travel plans."
        )

    def plan_trip(self, city: str, preferences: str, days: int) -> str:
        """
        Coordinate agents to create a travel plan
        """
        # Step 1: Search attractions
        print(f"🏛️  Searching for {preferences} attractions in {city}...")
        attraction_response = self.attraction_agent.run(
            f"Search for {preferences} attractions in {city}"
        )

        # Step 2: Query weather
        print(f"🌤️  Querying weather for {city}...")
        weather_response = self.weather_agent.run(
            f"Provide weather forecast for {city} for {days} days"
        )

        # Step 3: Generate plan
        print("📋 Generating itinerary...")
        planner_query = f"""
Create a {days}-day travel plan for {city} based on:

**Attractions:**
{attraction_response}

**Weather:**
{weather_response}

**User Preferences:** {preferences}

Generate a concise itinerary with daily attractions and tips.
"""

        final_plan = self.planner_agent.run(planner_query)
        return final_plan

# Test the multi-agent system
planner = TripPlannerAgent()
result = planner.plan_trip(
    city="Beijing",
    preferences="history and culture",
    days=3
)

print("\\n✈️ Travel Plan:")
print(result)
`}
                tests={[
                  {
                    input: 'len([planner.attraction_agent, planner.weather_agent, planner.planner_agent])',
                    expected: '3',
                    description: 'Should have 3 specialized agents'
                  }
                ]}
                hints={[
                  'Each agent has a specific role and simple prompt',
                  'Agents run sequentially, each using previous outputs',
                  'The planner agent integrates all information',
                  'This pattern scales to any number of specialized agents'
                ]}
                solution={`from hello_agents import SimpleAgent, HelloAgentsLLM, ToolRegistry
from hello_agents.tools import MCPTool

class TripPlannerAgent:
    def __init__(self):
        self.llm = HelloAgentsLLM()

        # Create shared MCP tool (for Amap integration)
        self.mcp_tool = MCPTool(
            name="amap_mcp",
            command="uvx",
            args=["amap-mcp-server"],
            env={"AMAP_API_KEY": "your_key"},
            auto_expand=True  # Automatically expands to 16 tools
        )

        # Attraction search agent with MCP tools
        self.attraction_agent = SimpleAgent(
            name="AttractionSearchAgent",
            llm=self.llm,
            system_prompt="""You are an attraction search expert.
Tool Format: [TOOL_CALL:amap_maps_text_search:keywords=attraction,city=city_name]
Search based on user preferences."""
        )
        self.attraction_agent.add_tool(self.mcp_tool)

        # Weather query agent
        self.weather_agent = SimpleAgent(
            name="WeatherQueryAgent",
            llm=self.llm,
            system_prompt="""You are a weather query expert.
Tool Format: [TOOL_CALL:amap_maps_weather:city=city_name]"""
        )
        self.weather_agent.add_tool(self.mcp_tool)

        # Planner agent (no tools needed, just integration)
        self.planner_agent = SimpleAgent(
            name="PlannerAgent",
            llm=self.llm,
            system_prompt="""You are an itinerary planning expert.
Generate JSON format travel plans."""
        )

    def plan_trip(self, request):
        # Sequential agent execution
        attractions = self.attraction_agent.run(request.preferences)
        weather = self.weather_agent.run(request.city)
        plan = self.planner_agent.run(self._build_query(request, attractions, weather))
        return plan
`}
              />
            </section>

            {/* Exercise */}
            <section>
              <Exercise
                id="chapter13-multi-agent"
                chapterId={13}
                title="Add a Restaurant Recommendation Agent"
                description="Extend the travel planner with a new specialized agent"
                difficulty="hard"
                points={150}
                starterCode={`from hello_agents import SimpleAgent, HelloAgentsLLM

class TripPlannerAgent:
    def __init__(self):
        self.llm = HelloAgentsLLM()

        self.attraction_agent = SimpleAgent(
            name="AttractionSearchAgent",
            llm=self.llm,
            system_prompt="Search for attractions"
        )

        # TODO: Add a restaurant recommendation agent
        # Requirements:
        # 1. Create self.restaurant_agent (SimpleAgent)
        # 2. Write appropriate system prompt
        # 3. Agent should recommend restaurants based on cuisine preferences
        # 4. Agent should consider budget constraints

        # Your code here

        self.planner_agent = SimpleAgent(
            name="PlannerAgent",
            llm=self.llm,
            system_prompt="Create travel plans"
        )

    def plan_trip(self, city: str, cuisine: str, budget: str) -> str:
        """
        TODO: Integrate the restaurant agent into the planning flow

        1. Call attraction_agent to get attractions
        2. Call restaurant_agent to get restaurant recommendations
        3. Call planner_agent to integrate everything

        Return the final plan
        """
        # Your code here
        pass

# Test
planner = TripPlannerAgent()
result = planner.plan_trip(
    city="Paris",
    cuisine="French",
    budget="medium"
)
print(result)
`}
                tests={[
                  {
                    input: 'hasattr(planner, "restaurant_agent")',
                    expected: 'True',
                    description: 'Should have a restaurant_agent attribute'
                  },
                  {
                    input: 'planner.restaurant_agent.name',
                    expected: 'RestaurantAgent',
                    description: 'Agent should be named RestaurantAgent'
                  }
                ]}
                hints={[
                  'Create SimpleAgent with name="RestaurantAgent"',
                  'System prompt should mention cuisine and budget',
                  'In plan_trip(), call agents sequentially',
                  'Pass restaurant_response to planner_agent along with attractions'
                ]}
                solution={`from hello_agents import SimpleAgent, HelloAgentsLLM

class TripPlannerAgent:
    def __init__(self):
        self.llm = HelloAgentsLLM()

        self.attraction_agent = SimpleAgent(
            name="AttractionSearchAgent",
            llm=self.llm,
            system_prompt="You are an attraction search expert. Search for attractions based on user preferences."
        )

        # Restaurant recommendation agent
        self.restaurant_agent = SimpleAgent(
            name="RestaurantAgent",
            llm=self.llm,
            system_prompt="""
You are a restaurant recommendation expert.
Recommend restaurants based on:
- Cuisine type (e.g., French, Italian, Chinese)
- Budget level (budget, medium, luxury)
- Location proximity to attractions

Provide restaurant names, cuisine types, price ranges, and descriptions.
"""
        )

        self.planner_agent = SimpleAgent(
            name="PlannerAgent",
            llm=self.llm,
            system_prompt="You are an itinerary planning expert. Integrate attractions and restaurants into a travel plan."
        )

    def plan_trip(self, city: str, cuisine: str, budget: str) -> str:
        # Step 1: Get attractions
        attraction_response = self.attraction_agent.run(
            f"Search for popular attractions in {city}"
        )

        # Step 2: Get restaurant recommendations
        restaurant_response = self.restaurant_agent.run(
            f"Recommend {cuisine} restaurants in {city} with {budget} budget"
        )

        # Step 3: Generate integrated plan
        planner_query = f"""
Create a travel plan for {city} with:

**Attractions:**
{attraction_response}

**Restaurants:**
{restaurant_response}

Include dining suggestions with nearby attractions.
"""

        final_plan = self.planner_agent.run(planner_query)
        return final_plan

# Test
planner = TripPlannerAgent()
result = planner.plan_trip(city="Paris", cuisine="French", budget="medium")
print(result)
`}
                language="python"
              />
            </section>

            {/* Quiz */}
            <section>
              <Quiz
                chapterId={13}
                title="Chapter 13 Travel Planner Mastery"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'Why use multiple specialized agents instead of one complex agent?',
                    options: [
                      { id: 'a', text: 'To make the code longer', isCorrect: false },
                      { id: 'b', text: 'Simpler prompts, parallel execution, easier debugging, better maintainability', isCorrect: true },
                      { id: 'c', text: 'To use more LLM API calls', isCorrect: false },
                      { id: 'd', text: 'Because one agent cannot call multiple tools', isCorrect: false }
                    ],
                    explanation: 'Multi-agent design decomposes complexity: each agent has a simple, focused role with a concise prompt, making the system easier to debug and maintain.',
                    points: 15
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice',
                    question: 'What is the advantage of using MCP (Model Context Protocol) over direct HTTP API calls?',
                    options: [
                      { id: 'a', text: 'MCP is faster than HTTP', isCorrect: false },
                      { id: 'b', text: 'Standardized protocol, auto-discovery of tools, process-based communication, agent autonomy', isCorrect: true },
                      { id: 'c', text: 'MCP requires no API keys', isCorrect: false },
                      { id: 'd', text: 'MCP only works with Amap', isCorrect: false }
                    ],
                    explanation: 'MCP provides a standardized way for LLMs to discover and call tools. With auto_expand=True, one MCPTool gives the agent access to all 16 Amap tools automatically.',
                    points: 15
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice',
                    question: 'Why does the PlannerAgent not need any tools (MCP or otherwise)?',
                    options: [
                      { id: 'a', text: 'It only integrates information from other agents', isCorrect: true },
                      { id: 'b', text: 'Tools are too slow for planning', isCorrect: false },
                      { id: 'c', text: 'PlannerAgent uses a different framework', isCorrect: false },
                      { id: 'd', text: 'It gets tools automatically', isCorrect: false }
                    ],
                    explanation: 'PlannerAgent receives pre-fetched data from AttractionSearchAgent, WeatherQueryAgent, and HotelAgent. Its job is pure information integration and itinerary generation—no external data fetching needed.',
                    points: 15
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice',
                    question: 'What is the benefit of sharing one MCPTool instance across multiple agents?',
                    options: [
                      { id: 'a', text: 'Better performance', isCorrect: false },
                      { id: 'b', text: 'Only one MCP server process runs, reducing resource usage and API rate limit issues', isCorrect: true },
                      { id: 'c', text: 'Agents can communicate directly', isCorrect: false },
                      { id: 'd', text: 'It makes the code shorter', isCorrect: false }
                    ],
                    explanation: 'Sharing one MCPTool instance means only one amap-mcp-server process runs. All agent tool calls go through this single process, conserving memory/CPU and avoiding API rate limit violations.',
                    points: 15
                  },
                  {
                    id: 'q5',
                    type: 'multiple-choice',
                    question: 'In the travel planner, why is Pydantic used for data models on the backend?',
                    options: [
                      { id: 'a', text: 'To make Python code run faster', isCorrect: false },
                      { id: 'b', text: 'Automatic data validation, type safety, IDE autocomplete, serialization to JSON', isCorrect: true },
                      { id: 'c', text: 'Pydantic is required by FastAPI', isCorrect: false },
                      { id: 'd', text: 'To avoid using dictionaries', isCorrect: false }
                    ],
                    explanation: 'Pydantic validates data types, provides IDE autocomplete, catches errors early, and seamlessly serializes to/from JSON for API responses—essential for robust full-stack apps.',
                    points: 15
                  },
                  {
                    id: 'q6',
                    type: 'true-false',
                    question: 'True or False: In front-end/backend separation architecture, the backend only returns JSON data, never HTML.',
                    options: [
                      { id: 'true', text: 'True', isCorrect: true },
                      { id: 'false', text: 'False', isCorrect: false }
                    ],
                    explanation: 'True. In front-end/backend separation, the backend is a pure API server returning JSON. The frontend (Vue/React/etc.) fetches this data and renders HTML in the browser.',
                    points: 10
                  },
                  {
                    id: 'q7',
                    type: 'multiple-choice',
                    question: 'What happens when auto_expand=True in MCPTool?',
                    options: [
                      { id: 'a', text: 'The tool automatically installs MCP servers', isCorrect: false },
                      { id: 'b', text: 'MCPTool queries the MCP server for available tools and creates individual Tool objects for each', isCorrect: true },
                      { id: 'c', text: 'The agent can call tools without permission', isCorrect: false },
                      { id: 'd', text: 'Tools run in parallel automatically', isCorrect: false }
                    ],
                    explanation: 'With auto_expand=True, MCPTool asks the MCP server "what tools do you provide?" and creates separate Tool objects for each (e.g., amap_maps_text_search, amap_maps_weather). The agent then sees 16 individual tools instead of one.',
                    points: 15
                  },
                  {
                    id: 'q8',
                    type: 'true-false',
                    question: 'True or False: The travel planner uses ReActAgent for tool calling.',
                    options: [
                      { id: 'true', text: 'True', isCorrect: false },
                      { id: 'false', text: 'False', isCorrect: true }
                    ],
                    explanation: 'False. The travel planner uses SimpleAgent for each specialized task. Each agent calls at most one tool per run(), avoiding the multi-step reasoning overhead of ReActAgent.',
                    points: 10
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

        {/* Interactive Components for Chapter 4 (Pilot) */}
        {chapterId === 4 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600">
                  Practice what you've learned with hands-on exercises and visualizations
                </p>
              </div>
            </div>

            {/* ReAct Agent Flow Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">ReAct Agent Architecture</h3>
              <AgentFlowDiagram
                title="ReAct Agent Loop"
                description="Click on nodes to learn more about each component"
                nodes={[
                  {
                    id: '1',
                    type: 'input',
                    label: '📝 User Query',
                    description: 'The initial question or task from the user',
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    label: '🤔 Reasoning',
                    description: 'LLM analyzes the query and plans the next action using chain-of-thought reasoning',
                    position: { x: 250, y: 100 }
                  },
                  {
                    id: '3',
                    label: '⚡ Action Selection',
                    description: 'Agent decides which tool to use or whether to provide final answer',
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: '4',
                    label: '🛠️ Tool Execution',
                    description: 'Execute the selected tool (search, calculator, API call, etc.)',
                    position: { x: 100, y: 300 }
                  },
                  {
                    id: '5',
                    label: '📊 Observation',
                    description: 'Receive and process the tool output or result',
                    position: { x: 250, y: 400 }
                  },
                  {
                    id: '6',
                    type: 'output',
                    label: '✅ Final Answer',
                    description: 'Agent provides the final response to the user',
                    position: { x: 400, y: 300 }
                  }
                ]}
                edges={[
                  { id: 'e1-2', source: '1', target: '2', animated: true },
                  { id: 'e2-3', source: '2', target: '3', label: 'Plan', animated: true },
                  { id: 'e3-4', source: '3', target: '4', label: 'Use Tool' },
                  { id: 'e3-6', source: '3', target: '6', label: 'Complete' },
                  { id: 'e4-5', source: '4', target: '5', animated: true },
                  { id: 'e5-2', source: '5', target: '2', label: 'Reflect', animated: true }
                ]}
                height={500}
              />
            </section>

            {/* Code Playground */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Try It Yourself: ReAct Agent</h3>
              <CodePlayground
                title="Simple ReAct Implementation"
                description="A minimal ReAct agent that can use a calculator tool"
                language="python"
                initialCode={`def calculate(expression: str) -> float:
    """Simple calculator tool"""
    return eval(expression)

def react_agent(query: str, max_steps: int = 5):
    """
    ReAct agent with reasoning and action steps

    Thought: Think about what to do
    Action: Choose a tool to use
    Observation: See the result
    """
    tools = {"calculate": calculate}

    for step in range(max_steps):
        # Thought phase
        print(f"Thought {step + 1}: Analyzing '{query}'")

        # Action phase
        if "calculate" in query.lower():
            # Extract expression (simplified)
            import re
            expr = re.search(r'[\\d+\\-*/()\\s]+', query)
            if expr:
                action = f"calculate({expr.group().strip()})"
                print(f"Action {step + 1}: {action}")

                # Observation phase
                result = calculate(expr.group().strip())
                print(f"Observation {step + 1}: {result}")

                return f"The answer is {result}"

        print(f"Action {step + 1}: Finish")
        return "I need more information to solve this."

    return "Maximum steps reached"

# Test the agent
query = "What is 25 + 17?"
result = react_agent(query)
print(f"\\nFinal Answer: {result}")`}
                tests={[
                  {
                    input: 'react_agent("What is 10 + 5?")',
                    expected: 'The answer is 15',
                    description: 'Agent can perform basic addition'
                  }
                ]}
                hints={[
                  'The agent follows a loop: Thought → Action → Observation',
                  'Tools are called based on keywords in the query',
                  'The eval() function executes the mathematical expression'
                ]}
                solution={`def calculate(expression: str) -> float:
    """Enhanced calculator with error handling"""
    try:
        return eval(expression)
    except Exception as e:
        return f"Error: {str(e)}"

def react_agent(query: str, max_steps: int = 5):
    tools = {"calculate": calculate}

    for step in range(max_steps):
        print(f"Thought {step + 1}: I need to solve '{query}'")

        if "calculate" in query.lower() or any(op in query for op in ['+', '-', '*', '/']):
            import re
            expr = re.search(r'[\\d+\\-*/()\\s]+', query)
            if expr:
                print(f"Action {step + 1}: Using calculator tool")
                result = calculate(expr.group().strip())
                print(f"Observation {step + 1}: Result is {result}")
                return f"The answer is {result}"

        return "I cannot solve this without more information."

    return "Maximum iterations reached"

# Test
print(react_agent("What is 25 + 17?"))`}
              />
            </section>

            {/* Exercise */}
            <section>
              <Exercise
                id="chapter4-react-exercise"
                chapterId={4}
                title="Build Your Own ReAct Agent"
                description="Implement a ReAct agent that can answer questions using a search tool"
                difficulty="medium"
                points={100}
                starterCode={`def search(query: str) -> str:
    """Simulated search tool"""
    knowledge = {
        "capital of france": "Paris",
        "python creator": "Guido van Rossum",
        "largest planet": "Jupiter"
    }

    for key, value in knowledge.items():
        if key in query.lower():
            return value
    return "No information found"

def react_agent_with_search(query: str) -> str:
    """
    TODO: Implement a ReAct agent that:
    1. Thinks about the query
    2. Decides to use the search tool
    3. Observes the search result
    4. Returns a final answer
    """
    # Your code here
    pass

# Test your implementation
print(react_agent_with_search("What is the capital of France?"))
# Expected: "The capital of France is Paris"`}
                tests={[
                  {
                    input: 'react_agent_with_search("What is the capital of France?")',
                    expected: 'Paris',
                    description: 'Should find the capital of France'
                  },
                  {
                    input: 'react_agent_with_search("Who created Python?")',
                    expected: 'Guido van Rossum',
                    description: 'Should find Python creator'
                  }
                ]}
                hints={[
                  'Start by analyzing the query (Thought)',
                  'Call the search() function with the query (Action)',
                  'Use the search result in your final answer (Observation)',
                  'Format the response as a complete sentence'
                ]}
                solution={`def search(query: str) -> str:
    knowledge = {
        "capital of france": "Paris",
        "python creator": "Guido van Rossum",
        "largest planet": "Jupiter"
    }

    for key, value in knowledge.items():
        if key in query.lower():
            return value
    return "No information found"

def react_agent_with_search(query: str) -> str:
    # Thought
    print(f"Thought: I need to search for information about '{query}'")

    # Action
    print("Action: Using search tool")
    result = search(query)

    # Observation
    print(f"Observation: Found '{result}'")

    # Final Answer
    if result != "No information found":
        return result
    else:
        return "I don't have information about that."

print(react_agent_with_search("What is the capital of France?"))`}
                language="python"
              />
            </section>

            {/* Quiz */}
            <section>
              <Quiz
                chapterId={4}
                title="Chapter 4 Knowledge Check"
                questions={[
                  {
                    id: 'q1',
                    type: 'multiple-choice',
                    question: 'What does ReAct stand for in the context of AI agents?',
                    options: [
                      { id: 'a', text: 'Reactive Acting', isCorrect: false },
                      { id: 'b', text: 'Reasoning and Acting', isCorrect: true },
                      { id: 'c', text: 'Real-time Action', isCorrect: false },
                      { id: 'd', text: 'Reflective Analysis and Control Tasks', isCorrect: false }
                    ],
                    explanation: 'ReAct stands for Reasoning and Acting, combining chain-of-thought reasoning with action execution.',
                    points: 10
                  },
                  {
                    id: 'q2',
                    type: 'multiple-choice',
                    question: 'What are the three main phases in the ReAct loop?',
                    options: [
                      { id: 'a', text: 'Input → Process → Output', isCorrect: false },
                      { id: 'b', text: 'Thought → Action → Observation', isCorrect: true },
                      { id: 'c', text: 'Plan → Execute → Review', isCorrect: false },
                      { id: 'd', text: 'Query → Search → Answer', isCorrect: false }
                    ],
                    explanation: 'The ReAct agent loop consists of Thought (reasoning), Action (tool use), and Observation (processing results).',
                    points: 10
                  },
                  {
                    id: 'q3',
                    type: 'multiple-choice',
                    question: 'In Plan-and-Solve, what happens in the planning phase?',
                    options: [
                      { id: 'a', text: 'The agent executes all actions immediately', isCorrect: false },
                      { id: 'b', text: 'The agent breaks down the task into subtasks', isCorrect: true },
                      { id: 'c', text: 'The agent only reasons without taking action', isCorrect: false },
                      { id: 'd', text: 'The agent randomly tries different approaches', isCorrect: false }
                    ],
                    explanation: 'Plan-and-Solve first creates a plan by decomposing the complex task into manageable subtasks.',
                    points: 15
                  },
                  {
                    id: 'q4',
                    type: 'multiple-choice',
                    question: 'What is the main benefit of the Reflection pattern?',
                    options: [
                      { id: 'a', text: 'Faster execution speed', isCorrect: false },
                      { id: 'b', text: 'Self-evaluation and error correction', isCorrect: true },
                      { id: 'c', text: 'Reduced computational cost', isCorrect: false },
                      { id: 'd', text: 'Simpler implementation', isCorrect: false }
                    ],
                    explanation: 'Reflection allows agents to evaluate their own outputs and iteratively improve them by catching and correcting errors.',
                    points: 15
                  },
                  {
                    id: 'q5',
                    type: 'true-false',
                    question: 'True or False: Chain-of-Thought prompting helps language models break down complex reasoning tasks step by step.',
                    options: [
                      { id: 'true', text: 'True', isCorrect: true },
                      { id: 'false', text: 'False', isCorrect: false }
                    ],
                    explanation: 'True. Chain-of-Thought prompting encourages models to show their reasoning process, leading to better performance on complex tasks.',
                    points: 10
                  }
                ]}
                passingScore={70}
              />
            </section>
          </div>
        )}

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
