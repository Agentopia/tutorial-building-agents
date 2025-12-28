import { Slide } from '@/components/SlideView'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import Quiz from '@/components/Quiz'

export const chapter1Slides: Slide[] = [
  // Slide 1: Title
  {
    id: 'intro',
    title: 'Welcome to Agents',
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <div className="text-6xl mb-4">🤖</div>
        <h1 className="text-5xl font-bold text-black mb-4">
          Chapter 1
        </h1>
        <h2 className="text-3xl font-semibold text-black">
          Introduction to Agents
        </h2>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg text-black leading-relaxed">
            Welcome to the world of agents! Let's explore what makes AI agents intelligent,
            how they work, and how to build one yourself.
          </p>
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
        <h2 className="text-3xl font-bold text-black">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold text-black mb-2">What is an Agent?</h3>
            <p className="text-black">
              Understand the definition, core elements, and evolution from traditional to LLM-driven agents
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold text-black mb-2">How Agents Work</h3>
            <p className="text-black">
              Explore the perceive-think-act loop and agent-environment interaction
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-xl font-semibold text-black mb-2">Build an Agent</h3>
            <p className="text-black">
              Create your first intelligent travel assistant using Python and LLMs
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold text-black mb-2">Collaboration Modes</h3>
            <p className="text-black">
              Discover how agents work as tools and autonomous collaborators
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3: What is an Agent?
  {
    id: 'definition',
    title: 'What is an Agent?',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">What is an Agent?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <p className="text-lg text-black leading-relaxed">
            An <strong>agent</strong> is any entity that can perceive its <strong>Environment</strong> through <strong>Sensors</strong>,
            and <strong>autonomously</strong> take <strong>Actions</strong> through <strong>Actuators</strong> to achieve specific goals.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">🌍 Environment</h4>
            <p className="text-sm text-black">The external world where the agent operates</p>
            <p className="text-xs text-gray-500 mt-2">Examples: roads, markets, web</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">👁️ Sensors</h4>
            <p className="text-sm text-black">How the agent perceives the environment</p>
            <p className="text-xs text-gray-500 mt-2">Examples: cameras, APIs, data streams</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">🎬 Actuators</h4>
            <p className="text-sm text-black">Tools to influence the environment</p>
            <p className="text-xs text-gray-500 mt-2">Examples: robotic arms, code execution</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">🧠 Autonomy</h4>
            <p className="text-sm text-black">Independent decision-making capability</p>
            <p className="text-xs text-gray-500 mt-2">Not just following preset rules</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4: Agent-Environment Loop (Visual)
  {
    id: 'agent-loop',
    title: 'Agent-Environment Interaction',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">How Agents Interact with Their Environment</h2>
        <p className="text-lg text-black">
          The agent-environment loop is the fundamental pattern of all agent behavior:
        </p>
        <AgentFlowDiagram
          title="Perceive → Think → Act → Observe"
          description="A continuous closed loop enabling autonomous behavior"
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
              type: 'default',
              label: '👁️ Sensors',
              description: 'Perceive the environment: cameras, microphones, APIs, data streams',
              position: { x: 50, y: 150 }
            },
            {
              id: '3',
              type: 'default',
              label: '🧠 Agent Brain',
              description: 'Process information, make decisions, plan actions autonomously',
              position: { x: 250, y: 300 }
            },
            {
              id: '4',
              type: 'default',
              label: '🎬 Actuators',
              description: 'Take actions: robotic arms, steering wheels, execute code, call services',
              position: { x: 450, y: 150 }
            }
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', label: 'state', animated: true },
            { id: 'e2-3', source: '2', target: '3', label: 'perception' },
            { id: 'e3-4', source: '3', target: '4', label: 'decision' },
            { id: 'e4-1', source: '4', target: '1', label: 'action', animated: true }
          ]}
          height={450}
        />
      </div>
    )
  },

  // Slide 5: Traditional Agent Evolution
  {
    id: 'evolution',
    title: 'Evolution of Traditional Agents',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">From Simple to Complex</h2>
        <p className="text-lg text-black mb-6">
          Traditional agents evolved through five stages, each adding new capabilities:
        </p>
        <AgentFlowDiagram
          title="Agent Evolution Timeline"
          description="The progression from reactive to learning agents"
          nodes={[
            {
              id: '1',
              type: 'input',
              label: 'Simple Reflex',
              description: 'If-then rules only. Example: Thermostat (if temp > 25°C, cool)',
              position: { x: 100, y: 0 }
            },
            {
              id: '2',
              type: 'default',
              label: 'Model-Based',
              description: 'Internal world model + memory. Example: Self-driving car tracking other vehicles',
              position: { x: 100, y: 120 }
            },
            {
              id: '3',
              type: 'default',
              label: 'Goal-Based',
              description: 'Plans to achieve goals. Example: GPS navigation finding optimal route',
              position: { x: 100, y: 240 }
            },
            {
              id: '4',
              type: 'default',
              label: 'Utility-Based',
              description: 'Balances multiple goals. Example: GPS optimizing time + fuel + traffic',
              position: { x: 100, y: 360 }
            },
            {
              id: '5',
              type: 'output',
              label: 'Learning',
              description: 'Learns from experience. Example: AlphaGo mastering Go through self-play',
              position: { x: 100, y: 480 }
            }
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', label: '+ memory', animated: true },
            { id: 'e2-3', source: '2', target: '3', label: '+ goals', animated: true },
            { id: 'e3-4', source: '3', target: '4', label: '+ utility', animated: true },
            { id: 'e4-5', source: '4', target: '5', label: '+ learning', animated: true }
          ]}
          height={600}
        />
      </div>
    )
  },

  // Slide 6: LLM Agents - New Paradigm
  {
    id: 'llm-paradigm',
    title: 'LLM Agents: A New Paradigm',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">The LLM Revolution</h2>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 my-6">
          <p className="text-lg text-black leading-relaxed">
            Large Language Models like GPT fundamentally changed how we build agents —
            from <strong>explicit programming</strong> to <strong>emergent capabilities</strong>.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-white border-2 border-blue-200 rounded-lg">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-black mb-2">Planning & Reasoning</h4>
            <p className="text-sm text-black">
              Decompose "plan a trip" into subtasks: preferences → info → itinerary → booking
            </p>
          </div>
          <div className="p-4 bg-white border-2 border-green-200 rounded-lg">
            <div className="text-2xl mb-2">🛠️</div>
            <h4 className="font-semibold text-black mb-2">Tool Use</h4>
            <p className="text-sm text-black">
              Call weather API, analyze "rain forecast", recommend indoor activities
            </p>
          </div>
          <div className="p-4 bg-white border-2 border-orange-200 rounded-lg">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-semibold text-black mb-2">Dynamic Adjustment</h4>
            <p className="text-sm text-black">
              User says "hotel too expensive" → re-search with new budget constraint
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-900">
            <strong>💡 Key Insight:</strong> We're shifting from writing code to guiding an intelligent "brain" to plan, act, and learn.
          </p>
        </div>
      </div>
    )
  },

  // Slide 7: Traditional vs LLM Agents Comparison
  {
    id: 'comparison',
    title: 'Traditional vs LLM Agents',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">What Changed?</h2>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Dimension</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Traditional Agents</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">LLM Agents</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-medium text-black">Core Engine</td>
                <td className="px-6 py-4 text-black">Rule-based / explicit algorithms</td>
                <td className="px-6 py-4 text-black">Pre-trained neural networks (GPT, etc.)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-black">Knowledge Source</td>
                <td className="px-6 py-4 text-black">Manually coded rules & databases</td>
                <td className="px-6 py-4 text-black">Learned from massive text data</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-black">Interaction</td>
                <td className="px-6 py-4 text-black">Structured commands</td>
                <td className="px-6 py-4 text-black">Natural language conversations</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-black">Flexibility</td>
                <td className="px-6 py-4 text-black">Limited to predefined scenarios</td>
                <td className="px-6 py-4 text-black">Handles ambiguous, open-ended tasks</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-black">Behavior</td>
                <td className="px-6 py-4 text-black">Deterministic & bounded</td>
                <td className="px-6 py-4 text-black">Emergent capabilities & generalization</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },

  // Slide 8: Agent Types - Three Dimensions
  {
    id: 'types',
    title: 'Classifying Agents',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Three Ways to Classify Agents</h2>
        <div className="grid gap-6 mt-8">
          <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold text-black mb-3">1. By Internal Architecture</h3>
            <p className="text-black mb-2">From simple to complex decision-making:</p>
            <p className="text-sm text-black">
              Reactive → Model-Based → Goal-Based → Utility-Based → Learning
            </p>
          </div>
          <div className="p-6 bg-green-50 border-l-4 border-green-600">
            <h3 className="text-xl font-semibold text-black mb-3">2. By Time & Reactivity</h3>
            <p className="text-black mb-2">Speed vs. optimality trade-off:</p>
            <div className="text-sm text-black space-y-1">
              <p><strong>Reactive:</strong> Fast responses, no planning (airbag system)</p>
              <p><strong>Deliberative:</strong> Slow planning, optimal solutions (chess player)</p>
              <p><strong>Hybrid:</strong> Both modes combined (modern LLM agents)</p>
            </div>
          </div>
          <div className="p-6 bg-purple-50 border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold text-black mb-3">3. By Knowledge Representation</h3>
            <p className="text-black mb-2">How knowledge is stored:</p>
            <div className="text-sm text-black space-y-1">
              <p><strong>Symbolic:</strong> Explicit rules & logic (transparent, fragile)</p>
              <p><strong>Sub-symbolic:</strong> Neural patterns (powerful, opaque)</p>
              <p><strong>Neuro-symbolic:</strong> Both combined (LLM agents)</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9: PEAS Model
  {
    id: 'peas',
    title: 'Task Environment: PEAS Model',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Defining Agent Tasks: PEAS</h2>
        <p className="text-lg text-black">
          The PEAS model precisely describes an agent's task environment:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-semibold text-black mb-2">Performance</h3>
            <p className="text-black mb-2">How to measure success?</p>
            <p className="text-sm text-black">Example: User satisfaction, itinerary quality, response time</p>
          </div>
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold text-black mb-2">Environment</h3>
            <p className="text-black mb-2">Where does the agent operate?</p>
            <p className="text-sm text-black">Example: Web APIs, databases, user chat interface</p>
          </div>
          <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="text-3xl mb-3">🎬</div>
            <h3 className="text-xl font-semibold text-black mb-2">Actuators</h3>
            <p className="text-black mb-2">What can the agent do?</p>
            <p className="text-sm text-black">Example: Display messages, call APIs, book tickets</p>
          </div>
          <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="text-3xl mb-3">👁️</div>
            <h3 className="text-xl font-semibold text-black mb-2">Sensors</h3>
            <p className="text-black mb-2">What can the agent perceive?</p>
            <p className="text-sm text-black">Example: User input, API responses, database queries</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10: Agent Loop Mechanism
  {
    id: 'loop-mechanism',
    title: 'Agent Operating Mechanism',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">The Agent Loop</h2>
        <p className="text-lg text-black">
          Agents work through a continuous cycle of four stages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
              1
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-2">👁️ Perception</h4>
              <p className="text-black">
                Receive observations from the environment via sensors (APIs, user input)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
              2
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-2">🧠 Thought</h4>
              <p className="text-black">
                Process information through LLM reasoning: plan next steps, select tools
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
              3
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-2">🎬 Action</h4>
              <p className="text-black">
                Execute decisions by calling tools/APIs to influence the environment
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
              4
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black mb-2">🔄 Observe</h4>
              <p className="text-black">
                Environment changes, producing new observations → loop continues
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 11: Thought-Action-Observation Protocol
  {
    id: 'tao-protocol',
    title: 'Interaction Protocol',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Thought-Action-Observation</h2>
        <p className="text-lg text-black">
          A structured format for LLM agents to communicate with the environment:
        </p>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm mt-6">
          <div className="space-y-4">
            <div>
              <span className="text-blue-400">Thought:</span>
              <span className="text-gray-300"> The user wants to know the weather in Beijing.</span>
              <br />
              <span className="text-blue-400">         I need to call the weather query tool.</span>
            </div>
            <div>
              <span className="text-green-400">Action:</span>
              <span className="text-yellow-300"> get_weather</span>
              <span className="text-gray-300">(</span>
              <span className="text-purple-400">"Beijing"</span>
              <span className="text-gray-300">)</span>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <span className="text-orange-400">Observation:</span>
              <span className="text-gray-300"> Beijing's current weather is sunny,</span>
              <br />
              <span className="text-orange-400">            temperature 25 degrees Celsius, light breeze.</span>
            </div>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">Thought</h4>
            <p className="text-sm text-black">LLM's internal reasoning process</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">Action</h4>
            <p className="text-sm text-black">Function call to external tool</p>
          </div>
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <h4 className="font-semibold text-black mb-2">Observation</h4>
            <p className="text-sm text-black">Tool result in natural language</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 12: Hands-on Preview
  {
    id: 'hands-on',
    title: 'Build Your First Agent',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Ready to Code?</h2>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6">
          <p className="text-lg text-black mb-3">
            <strong>Goal:</strong> Build an intelligent travel assistant that:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-black">
            <li>Checks weather for a city</li>
            <li>Recommends tourist attractions based on weather</li>
            <li>Runs autonomously in a Thought-Action-Observation loop</li>
          </ol>
        </div>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
          <div className="text-green-400 mb-2"># Install dependencies</div>
          <div className="text-gray-300">pip install requests tavily-python openai</div>
          <div className="mt-4 text-green-400 mb-2"># Three key components:</div>
          <div className="text-gray-300 space-y-1">
            <div>1. Tools: get_weather(), get_attraction()</div>
            <div>2. LLM Client: OpenAICompatibleClient</div>
            <div>3. Agent Loop: Thought → Action → Observation</div>
          </div>
        </div>
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-900">
            <strong>💡 Note:</strong> The full implementation is in Section 1.3 of the chapter content.
            You'll learn prompt engineering, tool registration, and loop execution!
          </p>
        </div>
      </div>
    )
  },

  // Slide 13: Workflow vs Agent
  {
    id: 'workflow-vs-agent',
    title: 'Workflow vs Agent',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Two Paths to Automation</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">⚙️ Workflow</h3>
            <p className="text-black mb-4">
              <strong>Pre-defined, structured orchestration</strong>
            </p>
            <ul className="space-y-2 text-sm text-black">
              <li>✓ Precise, deterministic flowchart</li>
              <li>✓ Every step explicitly coded</li>
              <li>✓ Reliable for known scenarios</li>
              <li>✗ Can't handle unexpected cases</li>
              <li>✗ No autonomous reasoning</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border border-blue-200">
              <p className="text-xs text-black">
                <strong>Example:</strong> Expense approval process:<br/>
                If amount &lt; $500 → Manager<br/>
                If amount ≥ $500 → CFO → Finance
              </p>
            </div>
          </div>
          <div className="p-6 bg-green-50 border-2 border-green-300 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">🤖 Agent</h3>
            <p className="text-black mb-4">
              <strong>Autonomous, goal-oriented system</strong>
            </p>
            <ul className="space-y-2 text-sm text-black">
              <li>✓ Dynamic reasoning & planning</li>
              <li>✓ Adapts to new situations</li>
              <li>✓ Tool selection on demand</li>
              <li>✗ Less predictable</li>
              <li>✗ Requires LLM infrastructure</li>
            </ul>
            <div className="mt-4 p-3 bg-white rounded border border-green-200">
              <p className="text-xs text-black">
                <strong>Example:</strong> Travel assistant:<br/>
                If weather = sunny → outdoor spots<br/>
                If weather = rainy → indoor museums<br/>
                <em>(not hardcoded, reasoned!)</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 14: Collaboration Modes
  {
    id: 'collaboration',
    title: 'How Agents Collaborate',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Two Interaction Modes</h2>
        <div className="grid gap-6 mt-6">
          <div className="p-6 bg-purple-50 border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold text-black mb-3">🛠️ As Developer Tools</h3>
            <p className="text-black mb-4">
              AI-powered assistants deeply integrated into workflows
            </p>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="p-3 bg-white rounded border border-purple-200">
                <p className="font-semibold text-sm text-black">GitHub Copilot</p>
                <p className="text-xs text-black mt-1">Code completion</p>
              </div>
              <div className="p-3 bg-white rounded border border-purple-200">
                <p className="font-semibold text-sm text-black">Claude Code</p>
                <p className="text-xs text-black mt-1">Terminal coding</p>
              </div>
              <div className="p-3 bg-white rounded border border-purple-200">
                <p className="font-semibold text-sm text-black">Cursor</p>
                <p className="text-xs text-black mt-1">AI-native editor</p>
              </div>
              <div className="p-3 bg-white rounded border border-purple-200">
                <p className="font-semibold text-sm text-black">Trae</p>
                <p className="text-xs text-black mt-1">Code optimization</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-cyan-50 border-l-4 border-cyan-600">
            <h3 className="text-xl font-semibold text-black mb-3">🤝 As Autonomous Collaborators</h3>
            <p className="text-black mb-4">
              Delegate high-level goals, agent plans & executes independently
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded border border-cyan-200">
                <p className="font-semibold text-sm text-black">Single-Agent Loop</p>
                <p className="text-xs text-black mt-1">AgentGPT, BabyAGI</p>
              </div>
              <div className="p-3 bg-white rounded border border-cyan-200">
                <p className="font-semibold text-sm text-black">Multi-Agent Teams</p>
                <p className="text-xs text-black mt-1">MetaGPT, CrewAI, AutoGen</p>
              </div>
              <div className="p-3 bg-white rounded border border-cyan-200">
                <p className="font-semibold text-sm text-black">Graph-Based Control</p>
                <p className="text-xs text-black mt-1">LangGraph, AgentScope</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 15: Knowledge Check Quiz
  {
    id: 'quiz',
    title: 'Knowledge Check',
    type: 'interactive',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">Test Your Understanding</h2>
        <Quiz
          chapterId={1}
          title="Chapter 1 Assessment"
          passingScore={70}
          questions={[
            {
              id: 'q1',
              type: 'multiple-choice' as const,
              question: 'What are the four fundamental elements of an agent?',
              options: [
                { id: 'a', text: 'Environment, Sensors, Actuators, Autonomy', isCorrect: true },
                { id: 'b', text: 'Perception, Thought, Action, Observation', isCorrect: false },
                { id: 'c', text: 'Planning, Execution, Reflection, Learning', isCorrect: false },
                { id: 'd', text: 'Input, Process, Output, Feedback', isCorrect: false }
              ],
              points: 15,
              explanation: 'The four elements are Environment (where the agent operates), Sensors (perception), Actuators (action), and Autonomy (independent decision-making).'
            },
            {
              id: 'q2',
              type: 'multiple-choice' as const,
              question: 'Which type of traditional agent can balance multiple conflicting goals?',
              options: [
                { id: 'a', text: 'Simple Reflex Agent', isCorrect: false },
                { id: 'b', text: 'Model-Based Agent', isCorrect: false },
                { id: 'c', text: 'Goal-Based Agent', isCorrect: false },
                { id: 'd', text: 'Utility-Based Agent', isCorrect: true }
              ],
              points: 15,
              explanation: 'Utility-Based Agents assign utility values to states and maximize expected utility, allowing them to balance conflicting goals like minimizing time while minimizing cost.'
            },
            {
              id: 'q3',
              type: 'multiple-choice' as const,
              question: 'What is the key difference between LLM agents and traditional agents?',
              options: [
                { id: 'a', text: 'LLM agents can only process text data', isCorrect: false },
                { id: 'b', text: 'LLM agents have emergent capabilities from pre-training, not explicit programming', isCorrect: true },
                { id: 'c', text: 'Traditional agents are always faster', isCorrect: false },
                { id: 'd', text: 'LLM agents cannot use tools', isCorrect: false }
              ],
              points: 20,
              explanation: 'LLM agents gain capabilities through pre-training on massive data, enabling emergent abilities like reasoning and tool use, rather than relying on explicitly programmed rules.'
            },
            {
              id: 'q4',
              type: 'multiple-choice' as const,
              question: 'In the Thought-Action-Observation loop, what role does "Thought" play?',
              options: [
                { id: 'a', text: 'It executes the action immediately', isCorrect: false },
                { id: 'b', text: 'It analyzes observations and plans the next action', isCorrect: true },
                { id: 'c', text: 'It only stores memory for later use', isCorrect: false },
                { id: 'd', text: 'It validates the correctness of actions', isCorrect: false }
              ],
              points: 15,
              explanation: '"Thought" is the decision-making stage where the LLM analyzes current observations, updates its understanding, and plans which tool to call next.'
            },
            {
              id: 'q5',
              type: 'multiple-choice' as const,
              question: 'What is the main advantage of Agent over Workflow?',
              options: [
                { id: 'a', text: 'Agents are always cheaper to run', isCorrect: false },
                { id: 'b', text: 'Agents can autonomously reason and adapt to new situations', isCorrect: true },
                { id: 'c', text: 'Workflows are completely obsolete', isCorrect: false },
                { id: 'd', text: 'Agents never make mistakes', isCorrect: false }
              ],
              points: 15,
              explanation: 'Unlike Workflows which follow pre-defined steps, Agents can dynamically reason, plan, and adapt their behavior based on context and new information, making them more flexible for complex, open-ended tasks.'
            }
          ]}
        />
      </div>
    )
  },

  // Slide 16: Summary
  {
    id: 'summary',
    title: 'Chapter Summary',
    type: 'summary',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black">What We Learned</h2>
        <div className="grid gap-4 mt-8">
          <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
            <h4 className="font-semibold text-black mb-2">🎯 Agent Definition</h4>
            <p className="text-black">
              Agents perceive environments, make autonomous decisions, and take actions to achieve goals
            </p>
          </div>
          <div className="p-5 bg-green-50 border-l-4 border-green-600 rounded-lg">
            <h4 className="font-semibold text-black mb-2">📈 Agent Evolution</h4>
            <p className="text-black">
              From simple reflex agents to LLM-driven agents with emergent reasoning capabilities
            </p>
          </div>
          <div className="p-5 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
            <h4 className="font-semibold text-black mb-2">⚙️ Operating Mechanism</h4>
            <p className="text-black">
              The Thought-Action-Observation loop enables continuous interaction with environments
            </p>
          </div>
          <div className="p-5 bg-orange-50 border-l-4 border-orange-600 rounded-lg">
            <h4 className="font-semibold text-black mb-2">🤝 Collaboration Modes</h4>
            <p className="text-black">
              Agents work as developer tools (Copilot) or autonomous collaborators (CrewAI, MetaGPT)
            </p>
          </div>
        </div>
        <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg border border-blue-300">
          <p className="text-xl font-semibold text-black mb-2">🎓 Next Chapter</p>
          <p className="text-black">
            Chapter 2: History of Agents — Trace the evolution from 1950s symbolic AI to modern LLM agents
          </p>
        </div>
      </div>
    )
  }
]
