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

        <div className="text-sm text-gray-500 mb-6">Chapter {chapterId} of 16</div>

        <article className="prose prose-lg max-w-none">
          <MarkdownRenderer content={content} />
        </article>

        {/* Interactive Components for Chapter 1 */}
        {chapterId === 1 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Visualize concepts and test your understanding
                </p>
              </div>
            </div>

            {/* Agent-Environment Interaction Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Agent-Environment Interaction Loop</h3>
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
              <h3 className="text-2xl font-semibold mb-4">Evolution of Traditional Agents</h3>
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
                <p className="text-gray-600 dark:text-gray-400">
                  Explore the evolution of AI agents through history
                </p>
              </div>
            </div>

            {/* Historical Timeline Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">AI Agent Evolution Timeline (1950s-2024)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">ELIZA Chatbot Demo (1966)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Experience the pioneering chatbot that used pattern matching and pronoun swapping.
                Notice how it creates an illusion of understanding without real comprehension.
              </p>
              <ElizaChatbot />
            </section>

            {/* Society of Mind Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Society of Mind: Building a Block Tower</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
                  { id: 'e11', source: 'tower', target: 'builder', label: 'Feedback', animated: true, style: { stroke: '#22c55e' } }
                ]}
                height={700}
              />
            </section>

            {/* Reinforcement Learning Loop */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Reinforcement Learning: Agent-Environment Loop</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
                  { id: 'e7', source: 'reward', target: 'agent', label: '5. Learn & Update π', animated: true, style: { stroke: '#22c55e' } },
                  { id: 'e8', source: 'newstate', target: 'agent', label: 'Next cycle', animated: true, style: { strokeDasharray: '5,5' } }
                ]}
                height={400}
              />
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>💡 Key Insight:</strong> Agent's goal is to maximize <strong>cumulative reward</strong> (Return),
                  not just immediate reward. This requires "foresight" - sometimes sacrificing current gains for greater future rewards.
                </p>
              </div>
            </section>

            {/* LLM Agent Architecture */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Modern LLM Agent Architecture</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
                  { id: 'e10', source: 'result', target: 'llm', label: 'Feedback', animated: true, style: { stroke: '#22c55e' } },
                  { id: 'e11', source: 'newstate', target: 'perception', label: 'Next Observation', animated: true, style: { strokeDasharray: '5,5' } },
                  { id: 'e12', source: 'llm', target: 'memory', label: 'Update', animated: true, style: { stroke: '#f59e0b' } }
                ]}
                height={650}
              />
            </section>

            {/* Knowledge Check Quiz */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Knowledge Check: History of Agents</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Test your understanding of agent evolution, paradigm shifts, and historical milestones.
              </p>
              <Quiz
                questions={[
                  {
                    id: 'q1',
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
                <p className="text-gray-700 dark:text-gray-300">
                  Understand LLM fundamentals through hands-on code and visualizations
                </p>
              </div>
            </div>

            {/* N-gram Language Model */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Bigram Language Model Calculator</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
                testCases={[
                  {
                    input: '',
                    expectedOutput: '0.167',
                    description: 'Verify probability calculation matches 0.167'
                  }
                ]}
              />
            </section>

            {/* Word Embeddings Arithmetic */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Word Embedding Arithmetic: King - Man + Woman = Queen</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
                testCases={[
                  {
                    input: '',
                    expectedOutput: '1.0000',
                    description: 'Verify cosine similarity is 1.0 (perfect match)'
                  }
                ]}
              />
            </section>

            {/* Transformer Architecture Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Transformer Architecture: Encoder-Decoder</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
                  { id: 'e12', source: 'enc-output', target: 'cross-attn', label: 'K, V from encoder', animated: true, style: { stroke: '#10b981' } },
                  { id: 'e13', source: 'cross-attn', target: 'ffn-dec', animated: true },
                  { id: 'e14', source: 'ffn-dec', target: 'linear', animated: true },
                  { id: 'e15', source: 'linear', target: 'softmax', animated: true }
                ]}
                height={800}
              />
            </section>

            {/* Attention Mechanism Flow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Attention Mechanism: Query, Key, Value</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Byte-Pair Encoding (BPE) Tokenization</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
                testCases={[
                  {
                    input: '',
                    expectedOutput: 'ug</w>',
                    description: 'Verify BPE creates "ug</w>" token through merging'
                  }
                ]}
              />
            </section>

            {/* Knowledge Check Quiz */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Knowledge Check: LLM Fundamentals</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Test your understanding of language models, transformers, attention mechanisms, and tokenization.
              </p>
              <Quiz
                questions={[
                  {
                    id: 'q1',
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

        {/* Interactive Components for Chapter 7 */}
        {chapterId === 7 && (
          <div className="mt-12 space-y-12">
            {/* Separator */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Interactive Learning Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Master framework architecture and hands-on implementation
                </p>
              </div>
            </div>

            {/* HelloAgents Framework Architecture */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">HelloAgents Framework Architecture</h3>
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
              <h3 className="text-2xl font-semibold mb-4">LLM Provider Auto-Detection Mechanism</h3>
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
              <h3 className="text-2xl font-semibold mb-4">Try It: Create Your First Agent with HelloAgents</h3>
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
                <p className="text-gray-600 dark:text-gray-400">
                  Build a complete multi-agent travel planner from scratch
                </p>
              </div>
            </div>

            {/* Multi-Agent Collaboration Flow */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Multi-Agent Collaboration Architecture</h3>
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
              <h3 className="text-2xl font-semibold mb-4">MCP (Model Context Protocol) Integration</h3>
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
              <h3 className="text-2xl font-semibold mb-4">Try It: Build a Simple Multi-Agent System</h3>
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
                <p className="text-gray-600 dark:text-gray-400">
                  Practice what you've learned with hands-on exercises and visualizations
                </p>
              </div>
            </div>

            {/* ReAct Agent Flow Diagram */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">ReAct Agent Architecture</h3>
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
              <h3 className="text-2xl font-semibold mb-4">Try It Yourself: ReAct Agent</h3>
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
