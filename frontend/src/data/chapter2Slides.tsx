import { Slide } from '@/components/SlideView'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import ElizaChatbot from '@/components/ElizaChatbot'
import Quiz from '@/components/Quiz'

export const chapter2Slides: Slide[] = [
  // Slide 1: Welcome
  {
    id: 'welcome',
    title: 'Chapter 2: History of Agents',
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <div className="text-6xl mb-4">📜</div>
        <h1 className="text-5xl font-bold gradient-text">
          History of Agents
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          From symbolic systems to modern LLM agents: A journey through AI paradigms
        </p>
        <div className="flex gap-4 mt-8">
          <div className="px-6 py-3 bg-blue-100 rounded-lg">
            <div className="text-sm text-gray-600">Era</div>
            <div className="text-lg font-semibold text-gray-900">1950s - 2024</div>
          </div>
          <div className="px-6 py-3 bg-purple-100 rounded-lg">
            <div className="text-sm text-gray-600">Paradigms</div>
            <div className="text-lg font-semibold text-gray-900">3 Major Shifts</div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: Learning Objectives
  {
    id: 'objectives',
    title: 'Learning Objectives',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
        <p className="text-lg text-gray-700">
          Understand the evolution of AI agents through three major paradigms:
        </p>

        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🧮</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Symbolism Era</h3>
                <p className="text-gray-700">Expert systems, MYCIN, SHRDLU - Logic and rules</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🧠</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connectionism & Behaviorism</h3>
                <p className="text-gray-700">Neural networks, reinforcement learning - Learning from data</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-600">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🤖</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern LLM Agents</h3>
                <p className="text-gray-700">Transformers, GPT, ChatGPT - Integration of all paradigms</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-600">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem-Driven Evolution</h3>
                <p className="text-gray-700">How each paradigm solved limitations of the previous one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3: Three Paradigms Overview
  {
    id: 'paradigms-overview',
    title: 'The Three Paradigms of AI',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Evolution Through Paradigm Shifts</h2>
        <p className="text-lg text-gray-700">
          Each paradigm emerged to solve fundamental limitations of its predecessor:
        </p>

        <div className="space-y-4 mt-8">
          <div className="p-6 bg-white border-2 border-blue-200 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900">Symbolism (1956-1980s)</h3>
            </div>
            <p className="text-gray-700 ml-11"><strong>Core Idea:</strong> Intelligence = Symbol manipulation + Logic</p>
            <p className="text-gray-600 ml-11 mt-2"><strong>Limitation:</strong> Knowledge acquisition bottleneck, brittleness</p>
          </div>

          <div className="p-6 bg-white border-2 border-purple-200 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900">Connectionism + Behaviorism (1986-2017)</h3>
            </div>
            <p className="text-gray-700 ml-11"><strong>Core Idea:</strong> Learning from data (neural networks + RL)</p>
            <p className="text-gray-600 ml-11 mt-2"><strong>Limitation:</strong> Required massive labeled data, struggled with reasoning</p>
          </div>

          <div className="p-6 bg-white border-2 border-green-200 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900">Large Language Models (2017-Present)</h3>
            </div>
            <p className="text-gray-700 ml-11"><strong>Core Idea:</strong> Emergent capabilities from scale + pre-training</p>
            <p className="text-gray-600 ml-11 mt-2"><strong>Innovation:</strong> Combines symbolic reasoning (tool use) + neural learning + RL (RLHF)</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4: Physical Symbol System Hypothesis
  {
    id: 'pssh',
    title: 'Physical Symbol System Hypothesis',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Foundation of Symbolism</h2>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <p className="text-lg text-gray-800 font-semibold mb-2">
            "The essence of intelligence is the computation and processing of symbols."
          </p>
          <p className="text-sm text-gray-600">
            — Allen Newell & Herbert Simon (1976, Turing Award winners)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-white border-2 border-green-200 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Sufficiency</h3>
            <p className="text-gray-700">
              Any physical symbol system has <strong>sufficient means</strong> to produce general intelligent behavior.
            </p>
          </div>

          <div className="p-6 bg-white border-2 border-purple-200 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Necessity</h3>
            <p className="text-gray-700">
              Any system capable of general intelligence must <strong>essentially be</strong> a physical symbol system.
            </p>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Impact</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Transformed vague philosophical problem into concrete engineering task</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Inspired expert systems, automated planning, logic programming</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Dominated AI research for three decades (1956-1986)</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  // Slide 5: Expert Systems - MYCIN
  {
    id: 'mycin',
    title: 'Expert Systems: MYCIN',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">MYCIN Medical Diagnosis System (1970s)</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Purpose</h3>
              <p className="text-gray-700 text-sm">Diagnose bacterial blood infections and recommend antibiotic treatment</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">📚 Knowledge Base</h3>
              <p className="text-gray-700 text-sm">~600 IF-THEN rules from medical experts</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🧠 Reasoning</h3>
              <p className="text-gray-700 text-sm">Backward chaining: Start from goal, derive needed evidence</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">🎲 Innovation</h3>
              <p className="text-gray-700 text-sm"><strong>Certainty Factor (CF):</strong> Handle uncertainty with values between -1 and 1</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">📊 Results</h3>
              <p className="text-gray-700 text-sm">Performance exceeded non-specialist doctors, matched human experts</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Significance</h3>
              <p className="text-gray-700 text-sm">Proved machines could exhibit intelligence in complex professional domains</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gray-100 border-l-4 border-gray-600 rounded-lg">
          <p className="text-gray-800">
            <strong>Key Takeaway:</strong> Symbolic AI achieved impressive results in narrow, well-defined domains through careful knowledge engineering.
          </p>
        </div>
      </div>
    )
  },

  // Slide 6: SHRDLU Blocks World
  {
    id: 'shrdlu',
    title: 'SHRDLU: Comprehensive Intelligence',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">SHRDLU Blocks World (1968-1970)</h2>
        <p className="text-gray-700">
          Terry Winograd's breakthrough: First system to integrate multiple AI modules into a unified agent
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Language</h3>
            <p className="text-sm text-gray-700">Parse complex English sentences with references and context</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning & Action</h3>
            <p className="text-sm text-gray-700">Autonomously plan multi-step actions to achieve goals</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Memory & Q&A</h3>
            <p className="text-sm text-gray-700">Remember state and explain behavior reasoning</p>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Example Interaction:</h3>
          <div className="space-y-2 font-mono text-sm">
            <div><strong className="text-blue-600">User:</strong> Pick up a big red block.</div>
            <div><strong className="text-green-600">SHRDLU:</strong> OK. <span className="text-gray-500">[executes action]</span></div>
            <div><strong className="text-blue-600">User:</strong> Find a block which is taller than the one you are holding.</div>
            <div><strong className="text-green-600">SHRDLU:</strong> <span className="text-gray-500">[understands reference, searches]</span></div>
            <div><strong className="text-blue-600">User:</strong> Why did you pick up the red block?</div>
            <div><strong className="text-green-600">SHRDLU:</strong> BECAUSE YOU ASKED ME TO.</div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
          <p className="text-gray-800">
            <strong>⚠️ Limitation:</strong> Brilliant in the "blocks world," but capabilities didn't transfer to the real world. Revealed the brittleness of symbolic systems.
          </p>
        </div>
      </div>
    )
  },

  // Slide 7: Challenges of Symbolism
  {
    id: 'symbolism-challenges',
    title: 'Why Symbolism Failed',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Fundamental Challenges of Symbolic AI</h2>
        <p className="text-gray-700">
          By the 1980s, symbolism encountered insurmountable limitations:
        </p>

        <div className="space-y-4">
          <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Knowledge Acquisition Bottleneck</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Problem:</strong> Manual encoding of expert knowledge is costly, time-consuming, and doesn't scale</p>
              <p><strong>Example:</strong> Cyc project attempted to encode all human common sense — decades of effort with limited results</p>
              <p className="text-sm text-gray-600 mt-2">💡 Much expert knowledge is <em>tacit and intuitive</em>, impossible to express as explicit rules</p>
            </div>
          </div>

          <div className="p-6 bg-orange-50 border-l-4 border-orange-600 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Common Sense Problem</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Problem:</strong> Humans rely on vast background knowledge (e.g., "water is wet," "ropes pull, not push")</p>
              <p><strong>Challenge:</strong> Symbolic systems know nothing unless explicitly encoded — an impossible task</p>
            </div>
          </div>

          <div className="p-6 bg-yellow-50 border-l-4 border-yellow-600 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Frame Problem</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Problem:</strong> In a dynamic world, how do you efficiently determine what <em>hasn't changed</em> after an action?</p>
              <p><strong>Issue:</strong> Explicitly declaring all invariants is computationally infeasible, yet humans do it effortlessly</p>
            </div>
          </div>

          <div className="p-6 bg-purple-50 border-l-4 border-purple-600 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Brittleness</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Problem:</strong> Symbolic systems completely fail when encountering anything outside their rules</p>
              <p><strong>Contrast:</strong> Humans flexibly adapt to new situations — symbolic systems cannot</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-900 text-white rounded-xl text-center">
          <p className="font-semibold">These limitations paved the way for the next paradigm: <span className="text-blue-300">Learning from Data</span></p>
        </div>
      </div>
    )
  },

  // Slide 8: ELIZA Demo (Interactive)
  {
    id: 'eliza-demo',
    title: 'Experience ELIZA',
    type: 'interactive',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">ELIZA Chatbot Demo (1966)</h2>
        <p className="text-gray-700">
          Experience Joseph Weizenbaum's pioneering chatbot that used simple pattern matching to create an illusion of understanding.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">💡 How ELIZA Works:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>1.</strong> Identify keywords (e.g., "mother", "sad", "need")</li>
            <li><strong>2.</strong> Match patterns using wildcards (e.g., "I need *")</li>
            <li><strong>3.</strong> Transform pronouns (I → you, my → your)</li>
            <li><strong>4.</strong> Generate response from templates</li>
          </ul>
        </div>

        <ElizaChatbot />

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mt-6">
          <p className="text-gray-800">
            <strong>⚠️ The "ELIZA Effect":</strong> People developed emotional attachments to ELIZA despite it having no real understanding. This demonstrated the power — and danger — of anthropomorphizing machines.
          </p>
        </div>
      </div>
    )
  },

  // Slide 9: Society of Mind Theory
  {
    id: 'society-of-mind',
    title: "Marvin Minsky's Society of Mind",
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Intelligence as Collaboration (1986)</h2>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
          <p className="text-lg text-gray-800 font-semibold mb-2">
            "Intelligence emerges from the collaboration of simple, mindless agents."
          </p>
          <p className="text-sm text-gray-600">
            — Marvin Minsky (1986)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔄 Paradigm Shift</h3>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900">❌ Old View:</p>
                <p className="text-sm text-gray-700">Intelligence is a single, monolithic entity</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900">✅ New View:</p>
                <p className="text-sm text-gray-700">Intelligence emerges from many simple agents working together</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Key Concepts</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold mt-0.5">•</span>
                <span><strong>Agencies:</strong> Specialized groups of agents (e.g., "Builder", "Grasper")</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold mt-0.5">•</span>
                <span><strong>Emergence:</strong> No single agent understands the task, but collaboration produces intelligent behavior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold mt-0.5">•</span>
                <span><strong>Distributed:</strong> Each agent handles a small part; the whole is greater than the sum</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Impact on Multi-Agent Systems</h3>
          <p className="text-gray-700">
            Minsky's theory laid the foundation for modern multi-agent systems research, showing that complex problems can be solved through coordination of simpler components. This idea directly influenced AutoGen, LangGraph, and other multi-agent frameworks.
          </p>
        </div>
      </div>
    )
  },

  // Slide 10: Society of Mind Diagram (Interactive)
  {
    id: 'society-diagram',
    title: 'Society of Mind in Action',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Building a Block Tower: Emergence Through Collaboration</h2>
        <p className="text-gray-700 mb-6">
          No single agent understands "building a tower" — intelligence emerges from their interaction. Click nodes to see how each agency contributes.
        </p>

        <AgentFlowDiagram
          title="Emergence Through Collaboration"
          description="Watch how simple agents create complex behavior"
          nodes={[
            {
              id: 'goal',
              type: 'input',
              label: '🎯 Goal: Build Tower',
              description: 'High-level intention activated by user or higher-level agency',
              position: { x: 400, y: 0 }
            },
            {
              id: 'builder',
              label: '🏗️ Builder Agency',
              description: 'Decomposes goal into sub-goals: find base, stack blocks, ensure stability',
              position: { x: 400, y: 100 }
            },
            {
              id: 'see',
              label: '👁️ See Agency',
              description: 'Identifies blocks, colors, positions. Feeds visual info to other agencies.',
              position: { x: 150, y: 200 }
            },
            {
              id: 'find',
              label: '🔍 Find Agency',
              description: 'Locates suitable blocks based on Builder\'s request (e.g., "find wide block")',
              position: { x: 300, y: 200 }
            },
            {
              id: 'grasp',
              label: '🤏 Grasp Agency',
              description: 'Plans how to grip block without dropping it. Activates motor commands.',
              position: { x: 500, y: 200 }
            },
            {
              id: 'move',
              label: '➡️ Move Agency',
              description: 'Executes arm trajectory to transport block to target position',
              position: { x: 650, y: 200 }
            },
            {
              id: 'balance',
              label: '⚖️ Balance Agency',
              description: 'Monitors stability, detects wobbling, adjusts placement to prevent collapse',
              position: { x: 250, y: 300 }
            },
            {
              id: 'stack',
              label: '📦 Stack Agency',
              description: 'Places block on top, aligns centers of mass, releases grasp gently',
              position: { x: 550, y: 300 }
            },
            {
              id: 'monitor',
              label: '📊 Monitor Agency',
              description: 'Checks if tower height meets goal. Signals success or requests more blocks.',
              position: { x: 400, y: 400 }
            },
            {
              id: 'result',
              type: 'output',
              label: '✅ Stable Tower',
              description: 'Emergent result: No single agent knew "how to build a tower" but their collaboration achieved it',
              position: { x: 400, y: 500 }
            }
          ]}
          edges={[
            { id: 'e1', source: 'goal', target: 'builder', label: 'Activate', animated: true },
            { id: 'e2', source: 'builder', target: 'see', label: 'Request visual info', animated: true },
            { id: 'e3', source: 'builder', target: 'find', label: 'Find suitable block', animated: true },
            { id: 'e4', source: 'see', target: 'find', label: 'Block locations', animated: true },
            { id: 'e5', source: 'find', target: 'grasp', label: 'Target block', animated: true },
            { id: 'e6', source: 'grasp', target: 'move', label: 'Grip established', animated: true },
            { id: 'e7', source: 'move', target: 'stack', label: 'Block at position', animated: true },
            { id: 'e8', source: 'stack', target: 'balance', label: 'Check stability', animated: true },
            { id: 'e9', source: 'balance', target: 'monitor', label: 'Stable/Unstable', animated: true },
            { id: 'e10', source: 'stack', target: 'monitor', label: 'Placement done', animated: true },
            { id: 'e11', source: 'monitor', target: 'result', label: 'Goal achieved', animated: true },
            { id: 'e12', source: 'monitor', target: 'builder', label: 'Need more blocks', animated: true }
          ]}
          height={600}
        />
      </div>
    )
  },

  // Slide 11: Historical Timeline (Interactive)
  {
    id: 'timeline',
    title: 'AI Agent Evolution Timeline',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">From 1956 to 2024: The Journey to Modern Agents</h2>
        <p className="text-gray-700 mb-6">
          Trace major milestones across three paradigms: Symbolism → Connectionism → Behaviorism → Integration
        </p>

        <AgentFlowDiagram
          title="From Symbolic Systems to Modern LLM Agents"
          description="Click nodes to explore the evolution of AI agents"
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
      </div>
    )
  },

  // Slide 12: Connectionism → RL → LLMs
  {
    id: 'learning-paradigms',
    title: 'Learning Paradigms Evolution',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">From Symbolic Rules to Data-Driven Learning</h2>

        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">🧠 Connectionism (1986+)</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Core Idea:</strong> Learn representations from data using neural networks</p>
              <p><strong>Breakthrough:</strong> Backpropagation algorithm revived neural network research</p>
              <p><strong>Success:</strong> AlexNet (2012) - Deep learning dominates computer vision</p>
              <p className="text-sm text-purple-600 mt-2">✅ <strong>Solved:</strong> Manual feature engineering, pattern recognition</p>
              <p className="text-sm text-red-600">❌ <strong>Limitation:</strong> Required massive labeled data, struggled with sequential reasoning</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-l-4 border-orange-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">🎮 Behaviorism / Reinforcement Learning (1990s+)</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Core Idea:</strong> Learn from interaction with environment through trial-and-error</p>
              <p><strong>Breakthrough:</strong> Deep Q-Networks (DQN) - Combine neural networks with RL</p>
              <p><strong>Success:</strong> AlphaGo (2016) defeats world Go champion</p>
              <p className="text-sm text-orange-600 mt-2">✅ <strong>Solved:</strong> Sequential decision-making, long-term planning</p>
              <p className="text-sm text-red-600">❌ <strong>Limitation:</strong> Sample inefficient, required simulated environments</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">🤖 Large Language Models (2017+)</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Core Idea:</strong> Pre-train on massive text data, gain emergent capabilities from scale</p>
              <p><strong>Breakthrough:</strong> Transformer architecture (2017) + Generative pre-training (2018)</p>
              <p><strong>Success:</strong> GPT-3 (2020) shows in-context learning, few-shot reasoning</p>
              <p className="text-sm text-green-600 mt-2">✅ <strong>Solved:</strong> Data efficiency, natural language understanding, reasoning</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">🎯 <strong>Innovation:</strong> Combines symbolic reasoning (tool use, planning) + neural learning + RL (RLHF)</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 13: Reinforcement Learning Loop (Visual)
  {
    id: 'rl-loop',
    title: 'Reinforcement Learning',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Reinforcement Learning: Agent-Environment Loop</h2>
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

        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>💡 Key Insight:</strong> Agent's goal is to maximize <strong>cumulative reward</strong> (Return),
            not just immediate reward. This requires "foresight" - sometimes sacrificing current gains for greater future rewards.
          </p>
        </div>
      </div>
    )
  },

  // Slide 14: Modern LLM Agent Architecture (Visual)
  {
    id: 'llm-architecture',
    title: 'Modern LLM Agent Architecture',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Integration of All Three Paradigms</h2>
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
      </div>
    )
  },

  // Slide 15: Knowledge Check Quiz (Interactive)
  {
    id: 'quiz',
    title: 'Knowledge Check',
    type: 'interactive',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Test Your Understanding</h2>
        <p className="text-gray-700 mb-4">
          Assess your mastery of agent evolution, paradigm shifts, and historical milestones.
        </p>

        <Quiz
          chapterId={2}
          title="Chapter 2 Knowledge Check"
          passingScore={70}
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
        />
      </div>
    )
  },

  // Slide 16: Chapter Summary
  {
    id: 'summary',
    title: 'Chapter Summary',
    type: 'summary',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-text">Journey Complete! 🎉</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            You've traced the evolution of AI agents from 1956 to 2024
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-5xl">
          <div className="p-6 bg-blue-50 rounded-xl text-center">
            <div className="text-4xl mb-3">🧮</div>
            <h3 className="font-semibold text-gray-900 mb-2">Symbolism Era</h3>
            <p className="text-sm text-gray-700">Logic, rules, expert systems</p>
            <p className="text-xs text-gray-600 mt-2">MYCIN, SHRDLU, ELIZA</p>
          </div>

          <div className="p-6 bg-purple-50 rounded-xl text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="font-semibold text-gray-900 mb-2">Learning Era</h3>
            <p className="text-sm text-gray-700">Neural networks, RL</p>
            <p className="text-xs text-gray-600 mt-2">AlexNet, AlphaGo, DQN</p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-semibold text-gray-900 mb-2">Integration Era</h3>
            <p className="text-sm text-gray-700">LLMs + tools + memory</p>
            <p className="text-xs text-gray-600 mt-2">GPT-4, Modern Agents</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl max-w-3xl border-2 border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Key Takeaways</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">1.</span>
              <span><strong>Paradigm Shifts:</strong> Each era solved limitations of the previous one</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold mt-0.5">2.</span>
              <span><strong>Modern Integration:</strong> LLM agents combine symbolic reasoning, neural learning, and RL</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">3.</span>
              <span><strong>Emergence:</strong> Intelligence arises from collaboration (Minsky's Society of Mind)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold mt-0.5">4.</span>
              <span><strong>Learning from Data:</strong> Replaced manual knowledge engineering with pre-training</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Next up: <strong className="text-gray-900">Chapter 3 - LLM Fundamentals</strong>
          </p>
        </div>
      </div>
    )
  }
]
