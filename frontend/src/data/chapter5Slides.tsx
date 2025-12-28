import { Slide } from '@/components/SlideView'
import CodePlayground from '@/components/CodePlayground'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import Quiz from '@/components/Quiz'

export const chapter5Slides: Slide[] = [
  // Slide 1: Title
  {
    id: 'ch5-slide-1',
    title: 'Chapter 5 - Building Agents with Low-Code Platforms',
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <h1 className="text-5xl font-bold text-black mb-4">Chapter 5</h1>
        <h2 className="text-3xl font-semibold text-black mb-6">
          Building Agents with Low-Code Platforms
        </h2>
        <p className="text-xl text-black max-w-3xl text-center mb-8">
          From code to canvas: Build powerful AI agents visually with modern low-code platforms
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🧩</div>
            <h3 className="font-bold text-black mb-2 text-lg">Coze</h3>
            <p className="text-sm text-black">Zero-code AI agent builder by ByteDance</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🏗️</div>
            <h3 className="font-bold text-black mb-2 text-lg">Dify</h3>
            <p className="text-sm text-black">Open-source LLM app development platform</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🔗</div>
            <h3 className="font-bold text-black mb-2 text-lg">n8n</h3>
            <p className="text-sm text-black">Workflow automation with AI integration</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: Learning Objectives
  {
    id: 'ch5-slide-2',
    title: 'What You Will Learn',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h2 className="text-4xl font-bold text-black mb-8">Learning Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="font-semibold text-black mb-2">Platform-Based Development</h3>
                <p className="text-black text-sm">Understand why low-code platforms are revolutionizing agent development</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🧩</div>
              <div>
                <h3 className="font-semibold text-black mb-2">Coze Platform Mastery</h3>
                <p className="text-black text-sm">Build a Daily AI Brief agent with plugins and multi-channel publishing</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-cyan-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🏗️</div>
              <div>
                <h3 className="font-semibold text-black mb-2">Dify Ecosystem</h3>
                <p className="text-black text-sm">Create a Super Agent Assistant with 8000+ plugins and MCP integration</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🔗</div>
              <div>
                <h3 className="font-semibold text-black mb-2">n8n Workflow Automation</h3>
                <p className="text-black text-sm">Build an Intelligent Email Assistant with AI Agent nodes</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-indigo-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">⚖️</div>
              <div>
                <h3 className="font-semibold text-black mb-2">Platform Selection</h3>
                <p className="text-black text-sm">Learn when to use Coze vs Dify vs n8n vs pure code</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-pink-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🚀</div>
              <div>
                <h3 className="font-semibold text-black mb-2">Hybrid Development</h3>
                <p className="text-black text-sm">Combine low-code platforms with custom code for maximum flexibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 3: Why Low-Code Platforms
  {
    id: 'ch5-slide-3',
    title: 'Why Low-Code Platforms?',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">The Rise of Platform-Based Construction</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          Just as website development evolved from hand-written HTML to WordPress, agent construction is experiencing a wave of platformization.
          Low-code platforms shift our focus from <span className="font-semibold text-indigo-600">"implementation details"</span> to <span className="font-semibold text-purple-600">"business logic"</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">📉</div>
              <div>
                <h3 className="font-bold text-black mb-2">Lower Technical Barriers</h3>
                <p className="text-black text-sm">
                  Complex technical details (API calls, state management, concurrency) become easy-to-understand "nodes."
                  Non-technical users (product managers, designers) can now build agents.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="font-bold text-black mb-2">Improve Development Efficiency</h3>
                <p className="text-black text-sm">
                  What takes <span className="font-semibold">days of coding</span> can be done in <span className="font-semibold">hours or minutes</span>.
                  Focus on business logic and prompt engineering, not low-level implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">👁️</div>
              <div>
                <h3 className="font-bold text-black mb-2">Better Visualization & Observability</h3>
                <p className="text-black text-sm">
                  See data flow between nodes, execution time, and failed tool calls.
                  Intuitive debugging experience vs terminal logs.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">📚</div>
              <div>
                <h3 className="font-bold text-black mb-2">Standardization & Best Practices</h3>
                <p className="text-black text-sm">
                  Built-in ReAct templates, optimized RAG engines, standardized tool specs.
                  Teams collaborate on the same standards and components.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-black">
            <span className="font-semibold">Key Insight:</span> Low-code platforms don't replace code—they provide a <span className="font-semibold text-indigo-600">higher level of abstraction</span> to turn ideas into reality faster.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 4: Platform Comparison Table
  {
    id: 'ch5-slide-4',
    title: 'Platform Comparison',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Choosing the Right Platform</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <th className="p-4 text-left font-semibold">Platform</th>
                <th className="p-4 text-left font-semibold">Core Positioning</th>
                <th className="p-4 text-left font-semibold">Key Features</th>
                <th className="p-4 text-left font-semibold">Target Audience</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="border-b border-gray-200 hover:bg-purple-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🧩</div>
                    <span className="font-bold text-purple-600">Coze</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">Zero-code AI agent builder by ByteDance</span>
                </td>
                <td className="p-4">
                  <ul className="text-sm space-y-1">
                    <li>• Rich plugin library</li>
                    <li>• One-click multi-platform publishing</li>
                    <li>• Visual workflow builder</li>
                  </ul>
                </td>
                <td className="p-4">
                  <span className="text-sm">Entry-level users, product managers, creators</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🏗️</div>
                    <span className="font-bold text-blue-600">Dify</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">Open-source full-featured LLM development platform</span>
                </td>
                <td className="p-4">
                  <ul className="text-sm space-y-1">
                    <li>• 8677+ plugin marketplace</li>
                    <li>• RAG pipeline + workflows</li>
                    <li>• Self-hosted or cloud deployment</li>
                  </ul>
                </td>
                <td className="p-4">
                  <span className="text-sm">Developers, enterprise teams, scalable apps</span>
                </td>
              </tr>
              <tr className="hover:bg-green-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🔗</div>
                    <span className="font-bold text-green-600">n8n</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">Workflow automation tool with AI integration</span>
                </td>
                <td className="p-4">
                  <ul className="text-sm space-y-1">
                    <li>• 100s of preset nodes</li>
                    <li>• AI Agent node (LLM + tools)</li>
                    <li>• Private deployment</li>
                  </ul>
                </td>
                <td className="p-4">
                  <span className="text-sm">Developers, enterprises needing custom automation</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
            <p className="font-semibold text-black">Quick prototype? → <span className="text-purple-600">Coze</span></p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
            <p className="font-semibold text-black">Enterprise app? → <span className="text-blue-600">Dify</span></p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
            <p className="font-semibold text-black">Business automation? → <span className="text-green-600">n8n</span></p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 5: Coze Introduction
  {
    id: 'ch5-slide-5',
    title: 'Platform 1: Coze',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="flex items-center space-x-4 mb-8">
          <div className="text-6xl">🧩</div>
          <div>
            <h2 className="text-5xl font-bold text-purple-700">Coze</h2>
            <p className="text-xl text-black">Zero-Code AI Agent Builder</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🎨</span>
              Core Functional Modules
            </h3>
            <ul className="space-y-2 text-black text-sm">
              <li><span className="font-semibold text-purple-600">• Project Space:</span> Agent repository (single/multi-agent modes)</li>
              <li><span className="font-semibold text-purple-600">• Resource Library:</span> Workflows, knowledge bases, cards, prompts</li>
              <li><span className="font-semibold text-purple-600">• Plugin Store:</span> Rich and diverse tool ecosystem</li>
              <li><span className="font-semibold text-purple-600">• Publishing Channels:</span> WeChat, Feishu, Douyin integration</li>
              <li><span className="font-semibold text-purple-600">• Model Management:</span> Unified LLM configuration</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🎮</span>
              Game-Like Development
            </h3>
            <div className="space-y-2 text-black text-sm">
              <p><span className="font-semibold">Workflow:</span> Level clearance route map 🗺️</p>
              <p><span className="font-semibold">Dialogue Flow:</span> NPC dialogue clearance 💬</p>
              <p><span className="font-semibold">Plugins:</span> Character skill cards ⚔️</p>
              <p><span className="font-semibold">Knowledge Base:</span> Game encyclopedia 📖</p>
              <p><span className="font-semibold">Cards:</span> Quick item bar 🎒</p>
              <p><span className="font-semibold">Database:</span> Cloud save ☁️</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">✅ Advantages</h3>
            <ul className="text-sm space-y-1">
              <li>• Extremely friendly visual interface</li>
              <li>• Rich plugin ecosystem</li>
              <li>• One-click multi-platform publishing</li>
              <li>• Prompt management & templates</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">⚠️ Limitations</h3>
            <ul className="text-sm space-y-1">
              <li>• Does NOT support MCP protocol</li>
              <li>• Complex plugins require JS/Python basics</li>
              <li>• Cannot import JSON (only ZIP files)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 6: Coze Case - Daily AI Brief
  {
    id: 'ch5-slide-6',
    title: 'Coze Case: Daily AI Brief',
    type: 'visual',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-6">Building a "Daily AI Brief" Agent</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          Automatically capture latest AI headlines from 36Kr, Huxiu, IT Home, InfoQ, GitHub, and arXiv,
          then integrate into a professional brief.
        </p>
        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 50, y: 50 },
              data: {
                label: 'RSS Plugin',
                description: '36Kr, Huxiu, IT Home, InfoQ feeds',
                emoji: '📰',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 350, y: 50 },
              data: {
                label: 'GitHub Plugin',
                description: 'Latest AI open-source projects',
                emoji: '💻',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 650, y: 50 },
              data: {
                label: 'arXiv Plugin',
                description: 'Latest AI academic papers',
                emoji: '📚',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 350, y: 200 },
              data: {
                label: 'LLM Module',
                description: 'Senior tech media editor role + structured prompt',
                emoji: '🤖',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 350, y: 350 },
              data: {
                label: 'Output Brief',
                description: '10 news + 5 papers + 5 projects with emojis & links',
                emoji: '📄',
              },
            },
          ]}
          edges={[
            { id: 'e1-4', source: '1', target: '4', animated: true },
            { id: 'e2-4', source: '2', target: '4', animated: true },
            { id: 'e3-4', source: '3', target: '4', animated: true },
            { id: 'e4-5', source: '4', target: '5', animated: true },
          ]}
          title="Daily AI Brief Workflow"
        />
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-black mb-2">Step 1: Configure Plugins</h4>
            <p className="text-sm text-black">RSS links, GitHub queries (q:AI, per_page:10), arXiv search (count:5)</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-black mb-2">Step 2: Set Role & Prompts</h4>
            <p className="text-sm text-black">Senior tech editor role + structured output format (emoji + title + link)</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-black mb-2">Step 3: Publish Multi-Channel</h4>
            <p className="text-sm text-black">WeChat, Feishu, Doubao with one click</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 7: Dify Introduction
  {
    id: 'ch5-slide-7',
    title: 'Platform 2: Dify',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="flex items-center space-x-4 mb-8">
          <div className="text-6xl">🏗️</div>
          <div>
            <h2 className="text-5xl font-bold text-blue-700">Dify</h2>
            <p className="text-xl text-black">Open-Source LLM Development Platform</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              Core Features
            </h3>
            <ul className="space-y-2 text-black text-sm">
              <li><span className="font-semibold text-blue-600">• Full-Stack Platform:</span> BaaS + LLMOps in one</li>
              <li><span className="font-semibold text-blue-600">• Model Neutral:</span> GPT, Deepseek, Llama, any OpenAI-compatible API</li>
              <li><span className="font-semibold text-blue-600">• Deployment Flexibility:</span> Self-hosted Docker or SaaS cloud</li>
              <li><span className="font-semibold text-blue-600">• 8677+ Plugins:</span> Models, tools, agent strategies, extensions</li>
              <li><span className="font-semibold text-blue-600">• MCP Support:</span> Model Context Protocol integration</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🏛️</span>
              Architecture Layers
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                <p className="font-semibold text-black text-sm">Orchestration Layer: Agent workflows, RAG pipelines</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
                <p className="font-semibold text-black text-sm">Development Layer: Visual canvas, prompt IDE</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg">
                <p className="font-semibold text-black text-sm">Data Layer: Knowledge bases, annotations, fine-tuning</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                <p className="font-semibold text-black text-sm">Foundation Layer: Multi-model inference, tool registry</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">✅ Advantages</h3>
            <ul className="text-sm space-y-1">
              <li>• Enterprise-grade security (AES-256, RBAC)</li>
              <li>• Active open-source community</li>
              <li>• Low-code + high extensibility balance</li>
              <li>• Rich tool integration (9000+)</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">⚠️ Limitations</h3>
            <ul className="text-sm space-y-1">
              <li>• Steeper learning curve than Coze</li>
              <li>• Python backend (performance vs Go/Rust)</li>
              <li>• Limited multimodal support</li>
              <li>• High enterprise edition cost</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 8: Dify Plugin Marketplace
  {
    id: 'ch5-slide-8',
    title: 'Dify Plugin Ecosystem',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">8677+ Plugins: The Heart of Dify</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl text-center">
            <div className="text-4xl mb-2">🤖</div>
            <h3 className="font-bold text-black mb-1">Models</h3>
            <p className="text-xs text-black">OpenAI, Deepseek, Llama, Claude</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl text-center">
            <div className="text-4xl mb-2">🛠️</div>
            <h3 className="font-bold text-black mb-1">Tools</h3>
            <p className="text-xs text-black">Google Search, DuckDuckGo, APIs</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl text-center">
            <div className="text-4xl mb-2">🧠</div>
            <h3 className="font-bold text-black mb-1">Agent Strategies</h3>
            <p className="text-xs text-black">ReAct, Function Calling</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl text-center">
            <div className="text-4xl mb-2">🔌</div>
            <h3 className="font-bold text-black mb-1">Extensions</h3>
            <p className="text-xs text-black">Custom integrations</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl text-center">
            <div className="text-4xl mb-2">📦</div>
            <h3 className="font-bold text-black mb-1">Bundles</h3>
            <p className="text-xs text-black">Pre-configured stacks</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-blue-200">
          <h3 className="font-bold text-black mb-4 text-lg">Official Recommended Plugins</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl">🔍</div>
              <div>
                <p className="font-semibold text-black">Google Search</p>
                <p className="text-xs text-black">langgenius/google</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl">☁️</div>
              <div>
                <p className="font-semibold text-black">Azure OpenAI</p>
                <p className="text-xs text-black">langgenius/azure_openai</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="text-2xl">📝</div>
              <div>
                <p className="font-semibold text-black">Notion</p>
                <p className="text-xs text-black">langgenius/notion</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
              <div className="text-2xl">🦆</div>
              <div>
                <p className="font-semibold text-black">DuckDuckGo</p>
                <p className="text-xs text-black">langgenius/duckduckgo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border-l-4 border-indigo-500">
          <p className="text-black">
            <span className="font-semibold">Developer-Friendly:</span> Remote debugging with popular IDEs,
            minimal environment setup. Connect to SaaS while testing locally.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 9: Dify Case - Super Agent Assistant
  {
    id: 'ch5-slide-9',
    title: 'Dify Case: Super Agent Assistant',
    type: 'visual',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-6">Building a Fully Functional Personal Assistant</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          Multi-module agent covering daily Q&A, copywriting, multimodal generation, data analysis, and MCP integration.
        </p>
        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 50, y: 200 },
              data: {
                label: 'User Input',
                description: 'Question or request',
                emoji: '👤',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 300, y: 200 },
              data: {
                label: 'Question Classifier',
                description: 'Route to appropriate sub-agent',
                emoji: '🎯',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 600, y: 50 },
              data: {
                label: 'Daily Assistant',
                description: 'General Q&A with time tools',
                emoji: '💬',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 600, y: 150 },
              data: {
                label: 'Copywriting',
                description: 'Text optimization (500+ words)',
                emoji: '✍️',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 600, y: 250 },
              data: {
                label: 'Multimodal Gen',
                description: 'Image/video with Doubao',
                emoji: '🎨',
              },
            },
            {
              id: '6',
              type: 'custom',
              position: { x: 600, y: 350 },
              data: {
                label: 'Data Analysis',
                description: 'SQL query + BI charts',
                emoji: '📊',
              },
            },
            {
              id: '7',
              type: 'custom',
              position: { x: 900, y: 200 },
              data: {
                label: 'Final Output',
                description: 'Formatted response',
                emoji: '📤',
              },
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', animated: true },
            { id: 'e2-3', source: '2', target: '3', animated: true },
            { id: 'e2-4', source: '2', target: '4', animated: true },
            { id: 'e2-5', source: '2', target: '5', animated: true },
            { id: 'e2-6', source: '2', target: '6', animated: true },
            { id: 'e3-7', source: '3', target: '7', animated: true },
            { id: 'e4-7', source: '4', target: '7', animated: true },
            { id: 'e5-7', source: '5', target: '7', animated: true },
            { id: 'e6-7', source: '6', target: '7', animated: true },
          ]}
          title="Multi-Agent Architecture"
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-black mb-2">MCP Integration (Amap, Diet, News)</h4>
            <p className="text-sm text-black">ModelScope MCP market + SSE mode + ReAct agent strategy</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-black mb-2">Data Visualization</h4>
            <p className="text-sm text-black">rookie-text2data plugin + pie/column/line chart generators</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 10: n8n Introduction
  {
    id: 'ch5-slide-10',
    title: 'Platform 3: n8n',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="flex items-center space-x-4 mb-8">
          <div className="text-6xl">🔗</div>
          <div>
            <h2 className="text-5xl font-bold text-green-700">n8n</h2>
            <p className="text-xl text-black">Workflow Automation + AI Integration</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🧩</span>
              Core Concepts
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-black mb-1">Node</h4>
                <p className="text-sm text-black">Smallest unit performing specific operations. Two types:</p>
                <ul className="text-xs text-black mt-2 ml-4">
                  <li>• <span className="font-semibold">Trigger Node:</span> Starting point (Gmail, Webhook, Cron)</li>
                  <li>• <span className="font-semibold">Regular Node:</span> Processing logic (API, DB, LLM)</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-black mb-1">Workflow</h4>
                <p className="text-sm text-black">Automation flowchart of connected nodes. Data flows in structured JSON format.</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🤖</span>
              AI Agent Node
            </h3>
            <p className="text-sm text-black mb-4">
              Highly integrated node combining LLM, memory, and tools in one interface.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-purple-50 rounded">
                <span className="text-lg">🧠</span>
                <span className="text-sm text-black"><span className="font-semibold">Chat Model:</span> Gemini, OpenAI, Claude</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded">
                <span className="text-lg">💾</span>
                <span className="text-sm text-black"><span className="font-semibold">Memory:</span> Simple Memory for conversation history</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-green-50 rounded">
                <span className="text-lg">🛠️</span>
                <span className="text-sm text-black"><span className="font-semibold">Tools:</span> SerpAPI, Vector Store, custom APIs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">✅ Advantages</h3>
            <ul className="text-sm space-y-1">
              <li>• 100s of preset nodes (Gmail, Slack, DB, APIs)</li>
              <li>• Private deployment support</li>
              <li>• Code node for custom logic</li>
              <li>• Strong "connection" capability</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">⚠️ Limitations</h3>
            <ul className="text-sm space-y-1">
              <li>• Non-persistent built-in storage (needs Redis/Pinecone)</li>
              <li>• Version control not as mature as Git</li>
              <li>• Debugging can be cumbersome</li>
              <li>• Performance overhead in ultra-high concurrency</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 11: n8n Case - Email Assistant Architecture
  {
    id: 'ch5-slide-11',
    title: 'n8n Case: Intelligent Email Assistant',
    type: 'visual',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-6">Building an AI Email Agent with n8n</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          Unlike traditional linear workflows, this agent <span className="font-semibold text-green-600">thinks autonomously</span> using
          AI Agent node to understand intent, choose tools, and generate contextual replies.
        </p>
        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 50, y: 200 },
              data: {
                label: 'Gmail Trigger',
                description: 'Event: Message Received',
                emoji: '📧',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 300, y: 200 },
              data: {
                label: 'AI Agent Node',
                description: 'Think → Decide → Tool Call',
                emoji: '🤖',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 550, y: 100 },
              data: {
                label: 'SerpAPI Tool',
                description: 'Search online for answers',
                emoji: '🔍',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 550, y: 300 },
              data: {
                label: 'Vector Store Tool',
                description: 'Query private knowledge (work hours)',
                emoji: '💾',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 800, y: 200 },
              data: {
                label: 'Gmail Send',
                description: 'Automated reply with context',
                emoji: '✉️',
              },
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', animated: true },
            { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Call if needed' },
            { id: 'e2-4', source: '2', target: '4', animated: true, label: 'Call if needed' },
            { id: 'e3-2', source: '3', target: '2', animated: true },
            { id: 'e4-2', source: '4', target: '2', animated: true },
            { id: 'e2-5', source: '2', target: '5', animated: true },
          ]}
          title="Email Agent Workflow: Receive → Think → Reply"
        />
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-black mb-2">Step 1: Build Knowledge Base</h4>
            <p className="text-sm text-black">Code node → Embeddings → Simple Vector Store (memory key: my_private_knowledge)</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-black mb-2">Step 2: Configure AI Agent</h4>
            <p className="text-sm text-black">Gemini Chat Model + Simple Memory + Tools (SerpAPI + Vector Store)</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-black mb-2">Step 3: Send Reply</h4>
            <p className="text-sm text-black">Gmail Send node with dynamic To/Subject/Body from AI Agent output</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 12: Platform Selection Guide
  {
    id: 'ch5-slide-12',
    title: 'Platform Selection Decision Tree',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Choosing the Right Platform</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">🧩</span>
              Choose Coze When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Rapid prototype validation</span> - need to test idea in hours, not days</li>
              <li>• <span className="font-semibold">Non-technical users</span> - product managers, designers, content creators</li>
              <li>• <span className="font-semibold">Multi-platform publishing</span> - deploy to WeChat, Feishu, Douyin with one click</li>
              <li>• <span className="font-semibold">Plugin-rich scenarios</span> - leverage existing Coze plugin ecosystem</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border-2 border-blue-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">🏗️</span>
              Choose Dify When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Enterprise-level applications</span> - need security, compliance, scalability</li>
              <li>• <span className="font-semibold">Complex business logic</span> - multi-agent orchestration, RAG pipelines</li>
              <li>• <span className="font-semibold">Private deployment required</span> - data cannot leave internal environment</li>
              <li>• <span className="font-semibold">Open-source ecosystem</span> - want to customize or contribute to codebase</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">🔗</span>
              Choose n8n When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Deep business integration</span> - connect AI to CRM, OA, project management systems</li>
              <li>• <span className="font-semibold">Automation workflows</span> - trigger chains across multiple services</li>
              <li>• <span className="font-semibold">R&D efficiency tools</span> - automate code review, testing, deployment</li>
              <li>• <span className="font-semibold">Strong technical team</span> - can handle workflow debugging and optimization</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl border-2 border-orange-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">💻</span>
              Choose Pure Code When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Ultra-high performance</span> - need sub-100ms latency, handle 10k+ concurrent requests</li>
              <li>• <span className="font-semibold">Fine-grained control</span> - platform abstractions too limiting</li>
              <li>• <span className="font-semibold">Novel paradigms</span> - implementing cutting-edge research (e.g., Tree-of-Thoughts)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 13: Hybrid Development Strategy
  {
    id: 'ch5-slide-13',
    title: 'Hybrid Development: Best of Both Worlds',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h2 className="text-4xl font-bold text-black mb-8">Combining Platforms + Code</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          Low-code platforms and pure code are <span className="font-semibold text-indigo-600">not mutually exclusive</span>.
          The best practice is <span className="font-semibold text-purple-600">hybrid development</span> - use the right tool for each stage and requirement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl shadow-md border-2 border-indigo-200">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🎨</span>
              Platform Strengths
            </h3>
            <ul className="space-y-2 text-black text-sm">
              <li>• <span className="font-semibold text-indigo-600">Rapid prototyping:</span> Validate ideas in hours</li>
              <li>• <span className="font-semibold text-indigo-600">Standardized flows:</span> ReAct, RAG, common patterns</li>
              <li>• <span className="font-semibold text-indigo-600">Visual debugging:</span> See data flow, execution time</li>
              <li>• <span className="font-semibold text-indigo-600">Non-tech participation:</span> Product/design input</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-2 border-purple-200">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">💻</span>
              Code Strengths
            </h3>
            <ul className="space-y-2 text-black text-sm">
              <li>• <span className="font-semibold text-purple-600">Fine-grained control:</span> Optimize every detail</li>
              <li>• <span className="font-semibold text-purple-600">Special logic:</span> Custom algorithms, edge cases</li>
              <li>• <span className="font-semibold text-purple-600">High performance:</span> Optimize for latency/throughput</li>
              <li>• <span className="font-semibold text-purple-600">Version control:</span> Git workflows, code review</li>
            </ul>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
          <h3 className="font-bold text-black mb-4 text-lg">Hybrid Development Workflow Example</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <p className="text-sm text-black font-semibold">Prototype in Dify</p>
              <p className="text-xs text-black">Validate idea in 2 hours</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <p className="text-sm text-black font-semibold">Export JSON workflow</p>
              <p className="text-xs text-black">Understand data flow</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <p className="text-sm text-black font-semibold">Rewrite critical path</p>
              <p className="text-xs text-black">Optimize in Python/TS</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">4️⃣</div>
              <p className="text-sm text-black font-semibold">Keep platform for UI</p>
              <p className="text-xs text-black">Use as frontend canvas</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-black">
            <span className="font-semibold">Key Takeaway:</span> Platforms for speed and visualization, code for control and performance.
            Mix and match based on your team's strengths and project requirements.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 14: Interactive Code Playground - MCP Configuration
  {
    id: 'ch5-slide-14',
    title: 'Hands-On: MCP Configuration in Dify',
    type: 'interactive',
    content: (
      <div className="flex flex-col h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-4">Model Context Protocol (MCP) Integration</h2>
        <p className="text-lg text-black mb-6">
          MCP is the new standard for agent tool invocation. Let's see how to configure it in Dify using ModelScope MCP market.
        </p>
        <CodePlayground
          template="vanilla"
          files={{
            '/mcp-config.json': {
              code: `// MCP Configuration Example: Amap Maps Integration
// Step 1: Go to ModelScope MCP market
// Step 2: Select "Hosted Type" and choose Amap MCP
// Step 3: Select "SSE Mode" and click "Connection Configuration"
// Step 4: Copy the generated JSON:

{
  "mcpServers": {
    "amap": {
      "url": "https://mcp.modelscope.cn/server/sse/amap-mcp-server",
      "transport": "sse",
      "env": {
        "AMAP_MAPS_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}

// Step 5: In Dify workflow, add AI Agent node
// Step 6: Configure agent strategy: ReAct mode
// Step 7: In MCP service section:
//   - Delete "mcp-server" prefix from server name
//   - Select SSE mode
//   - Paste JSON configuration
// Step 8: Agent can now call Amap tools (geocoding, POI search, route planning)

// Example Agent Prompt:
/*
# Role
You are a location assistant powered by Amap APIs.

# Available Tools
- Simple Vector Store: Query user's working hours
- SerpAPI: Search online for answers
- Amap MCP: Geocoding, POI search, route planning

# Workflow
1. Analyze user question
2. Use appropriate tool
3. Format response with location data
*/

// Why MCP vs REST API?
// 1. Standardized protocol for tool discovery
// 2. Automatic type validation
// 3. Streaming support (SSE mode)
// 4. Unified error handling
// 5. Cross-platform compatibility`,
            },
          }}
        />
      </div>
    ),
  },

  // Slide 15: Chapter Summary
  {
    id: 'ch5-slide-15',
    title: 'Chapter 5 Summary',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <h2 className="text-4xl font-bold text-black mb-8">What We Learned</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-2xl mr-2">📚</span>
              Key Concepts
            </h3>
            <ul className="space-y-2 text-black text-sm">
              <li>• <span className="font-semibold">Platform-based development:</span> Higher abstraction for faster iteration</li>
              <li>• <span className="font-semibold">Low-code benefits:</span> Lower barriers, better observability, best practices</li>
              <li>• <span className="font-semibold">Three platforms:</span> Coze (zero-code), Dify (enterprise), n8n (automation)</li>
              <li>• <span className="font-semibold">MCP protocol:</span> New standard for tool invocation (vs REST API)</li>
              <li>• <span className="font-semibold">Hybrid development:</span> Combine platforms + code for optimal results</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-2xl mr-2">🛠️</span>
              Practical Skills
            </h3>
            <ul className="space-y-2 text-black text-sm">
              <li>• Built <span className="font-semibold text-purple-600">Daily AI Brief</span> agent in Coze with RSS, GitHub, arXiv plugins</li>
              <li>• Created <span className="font-semibold text-blue-600">Super Agent Assistant</span> in Dify with multi-module routing</li>
              <li>• Implemented <span className="font-semibold text-green-600">Email Assistant</span> in n8n with AI Agent node</li>
              <li>• Configured <span className="font-semibold">MCP integration</span> for Amap, diet, news services</li>
              <li>• Learned <span className="font-semibold">platform selection</span> based on project requirements</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg text-white">
          <h3 className="font-bold mb-4 text-2xl text-center">Platform Selection Guide</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-semibold mb-1">Rapid Prototype?</p>
              <p className="text-lg">→ Coze 🧩</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Enterprise App?</p>
              <p className="text-lg">→ Dify 🏗️</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Business Automation?</p>
              <p className="text-lg">→ n8n 🔗</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-black text-center">
            <span className="font-semibold text-lg">Next Chapter:</span> We'll explore more agent frameworks and build even more powerful applications! 🚀
          </p>
        </div>
      </div>
    ),
  },

  // Slide 16: Knowledge Check Quiz
  {
    id: 'ch5-slide-16',
    title: 'Knowledge Check',
    type: 'interactive',
    content: (
      <Quiz
        questions={[
          {
            id: 'q1',
            question: 'What is the PRIMARY advantage of low-code platforms over pure code development for agent building?',
            options: [
              { id: 'a', text: 'They completely replace the need for programming skills' },
              { id: 'b', text: 'They provide a higher level of abstraction, shifting focus from implementation details to business logic', correct: true },
              { id: 'c', text: 'They always produce faster and more efficient code than hand-written implementations' },
              { id: 'd', text: 'They eliminate the need for prompt engineering' },
            ],
            explanation: 'Low-code platforms provide a higher abstraction layer that lets developers focus on business logic and prompt engineering rather than low-level implementation. They don\'t eliminate programming entirely, nor do they always produce more efficient code than optimized hand-written implementations.',
            points: 12,
          },
          {
            id: 'q2',
            question: 'Which platform is BEST suited for building an enterprise-level contract review system that handles sensitive legal documents and requires private deployment?',
            options: [
              { id: 'a', text: 'Coze - for its one-click multi-platform publishing' },
              { id: 'b', text: 'n8n - for its workflow automation capabilities' },
              { id: 'c', text: 'Dify - for its enterprise security (AES-256, RBAC) and self-hosted deployment', correct: true },
              { id: 'd', text: 'Pure code - platforms cannot handle sensitive data' },
            ],
            explanation: 'Dify provides enterprise-grade security features (AES-256 encryption, RBAC), supports private deployment via Docker, and has a plugin marketplace with 8677+ tools. Coze doesn\'t support MCP and is more consumer-focused. n8n is better for automation workflows than complex document processing.',
            points: 15,
          },
          {
            id: 'q3',
            question: 'In the Coze "Daily AI Brief" case, why is configuring RSS links, GitHub queries, and arXiv search parameters BEFORE the LLM module critical?',
            options: [
              { id: 'a', text: 'The LLM needs pre-filtered, multi-source data as input to generate a comprehensive brief', correct: true },
              { id: 'b', text: 'Plugins cannot be configured after the LLM module in Coze' },
              { id: 'c', text: 'It reduces API costs by limiting the data sent to the LLM' },
              { id: 'd', text: 'The LLM can automatically configure these plugins based on user prompts' },
            ],
            explanation: 'The workflow architecture requires data collection BEFORE LLM processing. Plugins (RSS, GitHub, arXiv) gather multi-source information that the LLM then synthesizes into a structured brief. This is a fundamental data pipeline design principle in agent workflows.',
            points: 12,
          },
          {
            id: 'q4',
            question: 'What is the key difference between the Model Context Protocol (MCP) and traditional RESTful APIs for agent tool integration?',
            options: [
              { id: 'a', text: 'MCP is faster and has lower latency than REST APIs' },
              { id: 'b', text: 'MCP provides standardized protocol for tool discovery, automatic type validation, and streaming support', correct: true },
              { id: 'c', text: 'MCP only works with cloud-deployed services, not local APIs' },
              { id: 'd', text: 'MCP is proprietary to Dify platform and cannot be used elsewhere' },
            ],
            explanation: 'MCP offers: (1) standardized tool discovery protocol, (2) automatic type validation, (3) streaming support via SSE, (4) unified error handling, and (5) cross-platform compatibility. It\'s not necessarily faster than REST, works with both cloud/local services, and is an open standard (not Dify-specific).',
            points: 15,
          },
          {
            id: 'q5',
            question: 'In the n8n "Intelligent Email Assistant" case, why does the AI Agent node need to be connected to BOTH SerpAPI and Simple Vector Store tools?',
            options: [
              { id: 'a', text: 'The agent autonomously chooses tools based on the email content - SerpAPI for online searches, Vector Store for private knowledge like work hours', correct: true },
              { id: 'b', text: 'n8n requires at least two tools to be connected to any AI Agent node' },
              { id: 'c', text: 'SerpAPI handles incoming emails while Vector Store sends replies' },
              { id: 'd', text: 'Both tools are used simultaneously for every email to improve answer quality' },
            ],
            explanation: 'The AI Agent node exhibits autonomous decision-making: it analyzes the email question and chooses the appropriate tool. SerpAPI searches public information (e.g., "What is Huawei\'s latest phone?") while Vector Store queries private knowledge (e.g., "What are my working hours?"). This is NOT linear execution but intelligent tool selection.',
            points: 13,
          },
          {
            id: 'q6',
            question: 'Why does the Dify "Super Agent Personal Assistant" use a question classifier for intelligent routing instead of a single agent handling all tasks?',
            options: [
              { id: 'a', text: 'A single agent would be too slow to handle multiple task types' },
              { id: 'b', text: 'Multi-agent architecture allows specialized prompts and tools per module, improving accuracy and maintainability', correct: true },
              { id: 'c', text: 'Dify platform requires multi-agent architecture for complex workflows' },
              { id: 'd', text: 'It reduces API costs by distributing requests across different LLM models' },
            ],
            explanation: 'The question classifier enables specialized sub-agents (Daily Assistant, Copywriting, Multimodal Gen, Data Analysis, MCP Integration), each with optimized prompts and specific tools. A single agent handling all tasks would have: (1) overly long prompts, (2) tool confusion, (3) harder debugging, and (4) poor maintainability. This is a best practice for complex agent systems.',
            points: 15,
          },
          {
            id: 'q7',
            question: 'What is a CRITICAL limitation of n8n\'s built-in Simple Memory and Simple Vector Store that makes them unsuitable for production environments?',
            options: [
              { id: 'a', text: 'They can only store up to 1000 conversation messages' },
              { id: 'b', text: 'They are memory-based and non-persistent - data is lost on service restart', correct: true },
              { id: 'c', text: 'They do not support embeddings from Google Gemini' },
              { id: 'd', text: 'They cannot be accessed by the AI Agent node' },
            ],
            explanation: 'Simple Memory and Simple Vector Store are in-memory storage solutions. Once the n8n service restarts, ALL conversation history and knowledge bases are permanently lost. Production environments require persistent storage like Redis (for memory) or Pinecone/Qdrant (for vector databases).',
            points: 12,
          },
          {
            id: 'q8',
            question: 'Based on the chapter, when should you choose PURE CODE development instead of using Coze, Dify, or n8n?',
            options: [
              { id: 'a', text: 'When you need ultra-high performance (sub-100ms latency), fine-grained control, or are implementing novel research paradigms like Tree-of-Thoughts', correct: true },
              { id: 'b', text: 'When building any enterprise-level application with security requirements' },
              { id: 'c', text: 'When you need visual debugging and observability of agent workflows' },
              { id: 'd', text: 'When non-technical team members need to participate in agent development' },
            ],
            explanation: 'Pure code is optimal for: (1) ultra-high performance needs (10k+ concurrent requests, sub-100ms latency), (2) fine-grained optimization where platform abstractions are limiting, and (3) novel paradigms not supported by platforms (e.g., Tree-of-Thoughts, custom search algorithms). For enterprise security, Dify excels; for visual debugging, platforms are superior; for non-tech participation, Coze is ideal.',
            points: 16,
          },
        ]}
        passingScore={70}
      />
    ),
  },
]
