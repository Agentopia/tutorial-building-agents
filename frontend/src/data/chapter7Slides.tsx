import { Slide } from '@/components/SlideView'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import CodePlayground from '@/components/CodePlayground'
import Quiz from '@/components/Quiz'

export const chapter7Slides: Slide[] = [
  // Slide 1: Title
  {
    id: 'ch7-slide-1',
    title: 'Chapter 7: Building Your Agent Framework',
    type: 'intro',
    content: (
      <div className="flex flex-col justify-center items-center h-full bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-12">
        <div className="text-7xl mb-8">🏗️</div>
        <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
          Building Your Agent Framework
        </h1>
        <p className="text-2xl text-gray-700 text-center max-w-3xl mb-8">
          From user to builder: Construct HelloAgents framework from scratch
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="font-bold text-purple-600 mb-2">Multi-Provider LLM</h3>
            <p className="text-sm text-gray-600">OpenAI, ModelScope, VLLM, Ollama</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-bold text-pink-600 mb-2">4 Agent Paradigms</h3>
            <p className="text-sm text-gray-600">Simple, ReAct, Reflection, Plan-Solve</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🛠️</div>
            <h3 className="font-bold text-red-600 mb-2">Tool System</h3>
            <p className="text-sm text-gray-600">Registry, chains, async execution</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: Learning Objectives
  {
    id: 'ch7-slide-2',
    title: 'Learning Objectives',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <h2 className="text-5xl font-bold mb-8 text-blue-600">What You'll Learn 🎯</h2>
        <div className="grid grid-cols-1 gap-6 max-w-5xl">
          <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">1️⃣</span>
              <div>
                <h3 className="font-bold text-xl text-purple-600 mb-2">Multi-Provider LLM Integration</h3>
                <p className="text-gray-700">Support OpenAI, ModelScope, Zhipu AI, VLLM, and Ollama with automatic detection</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-pink-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">2️⃣</span>
              <div>
                <h3 className="font-bold text-xl text-pink-600 mb-2">Framework Architecture Design</h3>
                <p className="text-gray-700">Build layered, decoupled architecture with Message, Config, and Agent base classes</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">3️⃣</span>
              <div>
                <h3 className="font-bold text-xl text-red-600 mb-2">Implement 4 Agent Paradigms</h3>
                <p className="text-gray-700">SimpleAgent, ReActAgent, ReflectionAgent, PlanAndSolveAgent with unified interfaces</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">4️⃣</span>
              <div>
                <h3 className="font-bold text-xl text-orange-600 mb-2">Tool System Development</h3>
                <p className="text-gray-700">Create ToolRegistry, custom tools (Calculator, Search), and advanced features (chains, async)</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">5️⃣</span>
              <div>
                <h3 className="font-bold text-xl text-yellow-600 mb-2">Everything is a Tool Philosophy</h3>
                <p className="text-gray-700">Unify Memory, RAG, MCP as tools for simplified, extensible architecture</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">6️⃣</span>
              <div>
                <h3 className="font-bold text-xl text-green-600 mb-2">Progressive Learning Path</h3>
                <p className="text-gray-700">Version-controlled framework (pip installable) with chapter-by-chapter evolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 3: Why Build Your Own Framework
  {
    id: 'ch7-slide-3',
    title: 'Why Build Your Own Framework?',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-red-50 to-orange-50">
        <h2 className="text-5xl font-bold mb-8 text-red-600">Problems with Existing Frameworks</h2>
        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-white rounded-xl p-8 border-2 border-red-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Over-Abstraction</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-red-500">•</span>
                <span>Too many abstraction layers (Chain, Agent, Tool, Memory, Retriever)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500">•</span>
                <span>Steep learning curve for simple tasks</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500">•</span>
                <span>Hard to understand internal mechanisms</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-orange-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Rapid Iteration Instability</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500">•</span>
                <span>Frequent API breaking changes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500">•</span>
                <span>Code breaks after version upgrades</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500">•</span>
                <span>High maintenance cost</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-yellow-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Black-Box Logic</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-yellow-500">•</span>
                <span>Core logic too tightly encapsulated</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-yellow-500">•</span>
                <span>Limited deep customization</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-yellow-500">•</span>
                <span>Rely on docs and community for debugging</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-green-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-green-600 mb-4">Heavy Dependencies</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-green-500">•</span>
                <span>Large number of dependency packages</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500">•</span>
                <span>Big installation package size</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500">•</span>
                <span>Potential dependency conflicts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 max-w-6xl">
          <p className="text-xl text-purple-800 font-semibold text-center">
            💡 Building your own framework = Transforming from "user" to "builder"
          </p>
        </div>
      </div>
    ),
  },

  // Slide 4: HelloAgents Design Philosophy
  {
    id: 'ch7-slide-4',
    title: 'HelloAgents Design Philosophy',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h2 className="text-5xl font-bold mb-8 text-indigo-600">4 Core Design Principles</h2>
        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          <div className="bg-white rounded-xl p-8 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">🪶</div>
              <h3 className="text-2xl font-bold text-indigo-600">Lightweight & Teaching-Friendly</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-indigo-500 font-bold">✓</span>
                <span>Complete readability - understand the framework within reasonable time</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-500 font-bold">✓</span>
                <span>Minimalist dependencies - only OpenAI SDK + basic libraries</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-500 font-bold">✓</span>
                <span>Code separated by chapters for progressive learning</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">🎯</div>
              <h3 className="text-2xl font-bold text-purple-600">Standard API Based</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span>Built on OpenAI API standard (industry de facto)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span>Compatible with all OpenAI-compatible providers</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span>Easy migration to other frameworks or projects</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">📚</div>
              <h3 className="text-2xl font-bold text-pink-600">Progressive Learning Path</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span>Each chapter saved as pip-installable version (hello-agents==0.1.1)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span>Natural upgrades without conceptual jumps</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span>Build foundation for advanced chapters (8-16)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">🛠️</div>
              <h3 className="text-2xl font-bold text-red-600">"Everything is a Tool"</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✓</span>
                <span>Unified "Tool" abstraction for Memory, RAG, RL, MCP</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✓</span>
                <span>Eliminate unnecessary abstraction layers</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✓</span>
                <span>Return to intuitive core: "agents calling tools"</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 max-w-6xl">
          <p className="text-xl text-indigo-800 font-semibold text-center">
            🎓 Design Goal: Quick start + Deep understanding
          </p>
        </div>
      </div>
    ),
  },

  // Slide 5: Framework Architecture
  {
    id: 'ch7-slide-5',
    title: 'Framework Architecture',
    type: 'visual',
    content: (
      <div className="flex flex-col h-full p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">HelloAgents Layered Architecture</h2>
        <AgentFlowDiagram
          title="HelloAgents Architecture"
          nodes={[
            {
              id: '1',
              type: 'input',
              label: '🧠 Core Layer',
              description: 'HelloAgentsLLM: Multi-provider LLM client with auto-detection | Message: Unified message format (user/assistant/system/tool) | Config: Centralized configuration management | Agent: Abstract base class for all agents',
              position: { x: 50, y: 50 }
            },
            {
              id: '2',
              type: 'default',
              label: '🤖 Agent Layer',
              description: 'SimpleAgent: Basic conversation with optional tool calling | ReActAgent: Reasoning + Acting paradigm | ReflectionAgent: Self-reflection and iterative improvement | PlanAndSolveAgent: Plan decomposition + step-by-step execution',
              position: { x: 50, y: 200 }
            },
            {
              id: '3',
              type: 'default',
              label: '🛠️ Tool Layer',
              description: 'ToolRegistry: Centralized tool management | BaseTool: Abstract base for all tools | CalculatorTool: Mathematical calculations | SearchTool: Multi-source web search (Tavily, SerpAPI) | ToolChain: Sequential tool execution | AsyncExecutor: Parallel tool execution',
              position: { x: 50, y: 350 }
            },
            {
              id: '4',
              type: 'output',
              label: '👤 Your Application',
              description: 'Import HelloAgents components | Customize agents and tools | Build production-ready AI systems',
              position: { x: 400, y: 200 }
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', label: 'Inherits & Uses', animated: true },
            { id: 'e2-3', source: '2', target: '3', label: 'Calls Tools', animated: true },
            { id: 'e2-4', source: '2', target: '4', label: 'Extends', animated: false },
            { id: 'e3-2', source: '3', target: '2', label: 'Returns Results', animated: true },
          ]}
        />
        <div className="mt-6 bg-white rounded-lg p-4 border-2 border-blue-200">
          <p className="text-lg text-gray-700">
            <strong className="text-blue-600">Architecture Principles:</strong> Layered decoupling, single responsibility, unified interfaces.
            Click nodes to explore each layer's responsibilities.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 6: HelloAgentsLLM Multi-Provider
  {
    id: 'ch7-slide-6',
    title: 'HelloAgentsLLM: Multi-Provider Support',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-green-50 to-teal-50">
        <h2 className="text-5xl font-bold mb-8 text-green-600">Unified LLM Interface</h2>
        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-600 mb-4">☁️ Cloud Providers</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-700">OpenAI</div>
                <code className="text-sm text-gray-600">OPENAI_API_KEY</code>
                <div className="text-sm text-gray-500 mt-1">api.openai.com/v1</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-blue-700">ModelScope</div>
                <code className="text-sm text-gray-600">MODELSCOPE_API_KEY</code>
                <div className="text-sm text-gray-500 mt-1">api-inference.modelscope.cn/v1</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="font-bold text-purple-700">Zhipu AI</div>
                <code className="text-sm text-gray-600">ZHIPU_API_KEY</code>
                <div className="text-sm text-gray-500 mt-1">open.bigmodel.cn</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">💻 Local Deployment</h3>
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="font-bold text-orange-700">VLLM</div>
                <code className="text-sm text-gray-600">localhost:8000/v1</code>
                <div className="text-sm text-gray-500 mt-1">High-performance Python inference (PagedAttention)</div>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <div className="font-bold text-pink-700">Ollama</div>
                <code className="text-sm text-gray-600">localhost:11434/v1</code>
                <div className="text-sm text-gray-500 mt-1">One-command model management</div>
              </div>
            </div>

            <div className="mt-4 bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
              <div className="font-bold text-teal-700 mb-2">🔍 Automatic Detection</div>
              <ol className="text-sm text-gray-700 space-y-1">
                <li>1. Check specific provider env vars (OPENAI_API_KEY, etc.)</li>
                <li>2. Parse LLM_BASE_URL domain and port</li>
                <li>3. Analyze LLM_API_KEY format</li>
                <li>4. Default to "auto" with generic config</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-6 max-w-6xl">
          <p className="text-xl text-green-800 font-semibold text-center">
            💡 One interface, multiple providers - seamlessly switch between cloud and local models
          </p>
        </div>
      </div>
    ),
  },

  // Slide 7: HelloAgentsLLM Code Example
  {
    id: 'ch7-slide-7',
    title: 'HelloAgentsLLM: Implementation',
    type: 'interactive',
    content: (
      <CodePlayground
        language="python"
        initialCode={`# HelloAgentsLLM: Multi-Provider LLM Client
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

class HelloAgentsLLM:
    """Unified LLM client with auto-detection"""

    def __init__(self, provider="auto", model=None, api_key=None, base_url=None):
        # Auto-detect provider
        if provider == "auto":
            provider = self._auto_detect_provider(api_key, base_url)

        self.provider = provider

        # Resolve credentials based on provider
        self.api_key, self.base_url = self._resolve_credentials(api_key, base_url)
        self.model = model or os.getenv("LLM_MODEL_ID") or "gpt-3.5-turbo"

        # Create OpenAI client
        self._client = OpenAI(api_key=self.api_key, base_url=self.base_url)

        print(f"✅ HelloAgentsLLM initialized: provider={self.provider}, model={self.model}")

    def _auto_detect_provider(self, api_key, base_url):
        """Automatically detect LLM provider"""
        # 1. Check specific provider env vars (highest priority)
        if os.getenv("MODELSCOPE_API_KEY"): return "modelscope"
        if os.getenv("OPENAI_API_KEY"): return "openai"
        if os.getenv("ZHIPU_API_KEY"): return "zhipu"

        # 2. Parse base_url
        actual_base_url = base_url or os.getenv("LLM_BASE_URL")
        if actual_base_url:
            url_lower = actual_base_url.lower()
            if "api-inference.modelscope.cn" in url_lower: return "modelscope"
            if "open.bigmodel.cn" in url_lower: return "zhipu"
            if "localhost" in url_lower or "127.0.0.1" in url_lower:
                if ":11434" in url_lower: return "ollama"
                if ":8000" in url_lower: return "vllm"

        # 3. Default to "auto"
        return "auto"

    def _resolve_credentials(self, api_key, base_url):
        """Resolve API key and base_url based on provider"""
        if self.provider == "openai":
            resolved_key = api_key or os.getenv("OPENAI_API_KEY")
            resolved_url = base_url or "https://api.openai.com/v1"
        elif self.provider == "modelscope":
            resolved_key = api_key or os.getenv("MODELSCOPE_API_KEY")
            resolved_url = base_url or "https://api-inference.modelscope.cn/v1/"
        elif self.provider == "ollama":
            resolved_key = api_key or "ollama"  # Local doesn't need real key
            resolved_url = base_url or "http://localhost:11434/v1"
        else:  # auto or generic
            resolved_key = api_key or os.getenv("LLM_API_KEY")
            resolved_url = base_url or os.getenv("LLM_BASE_URL")

        return resolved_key, resolved_url

    def invoke(self, messages, **kwargs):
        """Synchronous invocation"""
        response = self._client.chat.completions.create(
            model=self.model,
            messages=messages,
            **kwargs
        )
        return response.choices[0].message.content

# Usage Examples
llm1 = HelloAgentsLLM()  # Auto-detect from env vars
llm2 = HelloAgentsLLM(provider="modelscope")  # Explicit provider
llm3 = HelloAgentsLLM(provider="ollama", model="llama3")  # Local model

messages = [{"role": "user", "content": "Hello!"}]
response = llm1.invoke(messages)
print(response)`}
        editable={false}
      />
    ),
  },

  // Slide 8: Framework Interfaces
  {
    id: 'ch7-slide-8',
    title: 'Framework Interfaces',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-yellow-50 to-orange-50">
        <h2 className="text-5xl font-bold mb-8 text-yellow-600">Core Framework Components</h2>
        <div className="grid grid-cols-3 gap-6 max-w-6xl">
          <div className="bg-white rounded-xl p-6 border-2 border-yellow-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Message Class</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-yellow-50 rounded-lg p-3">
                <code className="text-xs">
                  role: MessageRole<br/>
                  # "user" | "assistant" | "system" | "tool"
                </code>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <code className="text-xs">
                  content: str<br/>
                  timestamp: datetime<br/>
                  metadata: Dict
                </code>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <code className="text-xs">
                  to_dict() → OpenAI format
                </code>
              </div>
            </div>
            <div className="mt-4 bg-yellow-100 rounded-lg p-3">
              <p className="text-sm font-semibold text-yellow-800">
                ✓ Type safety with Literal<br/>
                ✓ OpenAI API compatible<br/>
                ✓ Extensible with metadata
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-orange-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Config Class</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-orange-50 rounded-lg p-3">
                <code className="text-xs">
                  default_model: str = "gpt-3.5-turbo"<br/>
                  temperature: float = 0.7<br/>
                  max_tokens: Optional[int]
                </code>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <code className="text-xs">
                  debug: bool = False<br/>
                  log_level: str = "INFO"
                </code>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <code className="text-xs">
                  from_env() → Load from .env
                </code>
              </div>
            </div>
            <div className="mt-4 bg-orange-100 rounded-lg p-3">
              <p className="text-sm font-semibold text-orange-800">
                ✓ Centralized settings<br/>
                ✓ Environment variable support<br/>
                ✓ Reasonable defaults
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-red-200 hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Agent Base Class</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-red-50 rounded-lg p-3">
                <code className="text-xs">
                  __init__(name, llm, system_prompt, config)
                </code>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <code className="text-xs">
                  @abstractmethod<br/>
                  run(input_text) → str
                </code>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <code className="text-xs">
                  add_message(msg)<br/>
                  get_history() → List[Message]<br/>
                  clear_history()
                </code>
              </div>
            </div>
            <div className="mt-4 bg-red-100 rounded-lg p-3">
              <p className="text-sm font-semibold text-red-800">
                ✓ Abstract base class (ABC)<br/>
                ✓ Unified interface for all agents<br/>
                ✓ History management built-in
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 max-w-6xl">
          <p className="text-xl text-yellow-800 font-semibold text-center">
            🏗️ Foundation: Message for data, Config for settings, Agent for behavior
          </p>
        </div>
      </div>
    ),
  },

  // Slide 9: Agent Paradigms Comparison
  {
    id: 'ch7-slide-9',
    title: 'Agent Paradigms Comparison',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-cyan-50 to-blue-50">
        <h2 className="text-5xl font-bold mb-8 text-cyan-600">4 Agent Paradigms in HelloAgents</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 border-cyan-200 rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Agent Type</th>
                <th className="px-6 py-4 text-left font-bold">Core Mechanism</th>
                <th className="px-6 py-4 text-left font-bold">Best For</th>
                <th className="px-6 py-4 text-left font-bold">Tool Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-cyan-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">💬</span>
                    <div>
                      <div className="font-bold text-cyan-600">SimpleAgent</div>
                      <div className="text-sm text-gray-500">Basic conversation</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Direct LLM invocation with optional tool calling via [TOOL_CALL:name:params] markers
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Q&A, chatbots, simple assistants
                </td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Optional
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">🔄</span>
                    <div>
                      <div className="font-bold text-blue-600">ReActAgent</div>
                      <div className="text-sm text-gray-500">Reasoning + Acting</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Thought → Action → Observation loop until Finish[answer]
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Research, multi-step problem solving, tool orchestration
                </td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Required
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-purple-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">🔍</span>
                    <div>
                      <div className="font-bold text-purple-600">ReflectionAgent</div>
                      <div className="text-sm text-gray-500">Self-improvement</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Generate → Reflect → Refine cycle with quality assessment
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Content creation, code generation, iterative optimization
                </td>
                <td className="px-6 py-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✗ None
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-pink-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">📋</span>
                    <div>
                      <div className="font-bold text-pink-600">PlanAndSolveAgent</div>
                      <div className="text-sm text-gray-500">Planning + Execution</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Planner creates ["Step 1", "Step 2", ...], Executor solves each sequentially
                </td>
                <td className="px-6 py-4 text-gray-700">
                  Complex problems, math word problems, multi-step tasks
                </td>
                <td className="px-6 py-4">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✗ None
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 max-w-6xl">
          <p className="text-xl text-cyan-800 font-semibold text-center">
            🎯 All agents inherit from Agent base class with unified interface: run(input_text) → str
          </p>
        </div>
      </div>
    ),
  },

  // Slide 10: SimpleAgent
  {
    id: 'ch7-slide-10',
    title: 'SimpleAgent Implementation',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <h2 className="text-5xl font-bold mb-8 text-green-600">SimpleAgent: Basic Conversation</h2>
        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-white rounded-xl p-6 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-600 mb-4">🎯 Core Features</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-700 mb-2">1. Basic Conversation</div>
                <p className="text-sm text-gray-600">Direct LLM invocation with system prompt and history management</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-blue-700 mb-2">2. Optional Tool Calling</div>
                <p className="text-sm text-gray-600">Parse [TOOL_CALL:name:params] markers and execute tools</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="font-bold text-purple-700 mb-2">3. Streaming Response</div>
                <p className="text-sm text-gray-600">Real-time token streaming with stream_invoke()</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <div className="font-bold text-pink-700 mb-2">4. Dynamic Tool Management</div>
                <p className="text-sm text-gray-600">add_tool(), remove_tool(), list_tools() convenience methods</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">🔧 Implementation Pattern</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="font-mono text-xs text-gray-700">
                  <strong>Initialization:</strong><br/>
                  __init__(name, llm, system_prompt, config, tool_registry, enable_tool_calling)
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="font-mono text-xs text-gray-700">
                  <strong>Tool-Enhanced System Prompt:</strong><br/>
                  _get_enhanced_system_prompt() →<br/>
                  base_prompt + tool descriptions +<br/>
                  tool calling format instructions
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="font-mono text-xs text-gray-700">
                  <strong>Tool Execution Loop:</strong><br/>
                  1. LLM invoke → response<br/>
                  2. Parse tool calls from response<br/>
                  3. Execute tools → results<br/>
                  4. Add results to messages<br/>
                  5. Repeat or return final answer
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                <div className="font-mono text-xs text-gray-700">
                  <strong>Parameter Parsing:</strong><br/>
                  _parse_tool_parameters() →<br/>
                  key=value format or intelligent inference<br/>
                  (calculator: expression, search: query)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 max-w-6xl">
          <div className="font-mono text-sm text-green-800">
            <strong>Usage:</strong> agent = SimpleAgent(name="Assistant", llm=llm, tool_registry=tools)<br/>
            agent.run("Calculate 15 * 8 + 32") → Detects tool call → Executes calculator → Returns answer
          </div>
        </div>
      </div>
    ),
  },

  // Slide 11: ReActAgent Workflow
  {
    id: 'ch7-slide-11',
    title: 'ReActAgent Workflow',
    type: 'visual',
    content: (
      <div className="flex flex-col h-full p-8 bg-gradient-to-br from-orange-50 to-red-50">
        <h2 className="text-4xl font-bold mb-6 text-orange-600">ReActAgent: Thought-Action Loop</h2>
        <AgentFlowDiagram
          title="ReActAgent Workflow"
          nodes={[
            {
              id: '1',
              type: 'input',
              label: '📥 User Question',
              description: 'User asks: "What is the current population of Tokyo and how does it compare to New York?"',
              position: { x: 50, y: 50 }
            },
            {
              id: '2',
              type: 'default',
              label: '🤔 Thought',
              description: 'LLM analyzes: "I need to search for the population of Tokyo first, then search for New York, and finally compare the two numbers."',
              position: { x: 50, y: 150 }
            },
            {
              id: '3',
              type: 'default',
              label: '⚡ Action',
              description: 'Two formats: 1. tool_name[params] - Call a tool | 2. Finish[answer] - Done thinking | Example: search[Tokyo population]',
              position: { x: 50, y: 250 }
            },
            {
              id: '4',
              type: 'default',
              label: '🛠️ ToolRegistry',
              description: 'Execute tool and return result',
              position: { x: 400, y: 250 }
            },
            {
              id: '5',
              type: 'default',
              label: '👀 Observation',
              description: 'Tool result: "Tokyo has approximately 14 million people in the city proper, 37.4 million in the Greater Tokyo Area."',
              position: { x: 50, y: 350 }
            },
            {
              id: '6',
              type: 'default',
              label: '❓ Decision',
              description: 'Check action type: • tool_name[params] → Continue loop | • Finish[answer] → Return result | • Max steps reached → Return error',
              position: { x: 50, y: 450 }
            },
            {
              id: '7',
              type: 'output',
              label: '📤 Final Answer',
              description: 'After N iterations: Finish[Tokyo has 37.4M people (Greater Tokyo Area) vs New York with 19.5M (Metro Area). Tokyo is roughly twice as populous.]',
              position: { x: 400, y: 450 }
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', label: 'Start', animated: true },
            { id: 'e2-3', source: '2', target: '3', label: 'Decide Action', animated: true },
            { id: 'e3-4', source: '3', target: '4', label: 'tool_name[params]', animated: true },
            { id: 'e4-5', source: '4', target: '5', label: 'Result', animated: true },
            { id: 'e5-6', source: '5', target: '6', label: 'Add to History', animated: true },
            { id: 'e6-2', source: '6', target: '2', label: 'Continue Loop', animated: true },
            { id: 'e6-7', source: '6', target: '7', label: 'Finish[answer]', animated: false },
          ]}
        />
        <div className="mt-6 bg-white rounded-lg p-4 border-2 border-orange-200">
          <p className="text-lg text-gray-700">
            <strong className="text-orange-600">ReAct Loop:</strong> Combines reasoning (Thought) and acting (Action) in iterative cycles.
            Agent stops when it outputs Finish[answer] or reaches max_steps limit.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 12: ReActAgent Code
  {
    id: 'ch7-slide-12',
    title: 'ReActAgent: Implementation',
    type: 'interactive',
    content: (
      <CodePlayground
        language="python"
        initialCode={`# ReActAgent: Reasoning + Acting Paradigm
from hello_agents import ReActAgent, HelloAgentsLLM, ToolRegistry
from hello_agents.tools import CalculatorTool, SearchTool

# ReAct Prompt Template
REACT_PROMPT = """You are an AI assistant with reasoning and action capabilities.

## Available Tools
{tools}

## Workflow
Respond strictly in this format (one step at a time):

Thought: Analyze the problem and decide what to do next.
Action: Choose ONE action:
- tool_name[parameters] - Call a tool
- Finish[final answer] - When you have enough information

## Important
- Each response must have both Thought and Action
- Tool format: tool_name[params]  (e.g., search[Python], calculator[2+3])
- Only use Finish when confident you can answer

## Current Task
**Question:** {question}

## Execution History
{history}

Begin your reasoning and action:
"""

class MyReActAgent(ReActAgent):
    """ReAct Agent implementation"""

    def __init__(self, name, llm, tool_registry, max_steps=5):
        super().__init__(name, llm, system_prompt=None, config=None)
        self.tool_registry = tool_registry
        self.max_steps = max_steps
        self.current_history = []
        self.prompt_template = REACT_PROMPT

    def run(self, input_text):
        """Run ReAct loop"""
        self.current_history = []
        current_step = 0

        print(f"🤖 Processing: {input_text}")

        while current_step < self.max_steps:
            current_step += 1
            print(f"\\n--- Step {current_step} ---")

            # 1. Build prompt with tools and history
            tools_desc = self.tool_registry.get_tools_description()
            history_str = "\\n".join(self.current_history)
            prompt = self.prompt_template.format(
                tools=tools_desc,
                question=input_text,
                history=history_str
            )

            # 2. Get LLM response
            messages = [{"role": "user", "content": prompt}]
            response = self.llm.invoke(messages)

            # 3. Parse Thought and Action
            thought, action = self._parse_output(response)
            print(f"Thought: {thought}")
            print(f"Action: {action}")

            # 4. Check if finished
            if action and action.startswith("Finish"):
                final_answer = self._parse_action_input(action)
                self.add_message(Message(input_text, "user"))
                self.add_message(Message(final_answer, "assistant"))
                return final_answer

            # 5. Execute tool
            if action:
                tool_name, tool_input = self._parse_action(action)
                observation = self.tool_registry.execute_tool(tool_name, tool_input)
                print(f"Observation: {observation[:100]}...")

                self.current_history.append(f"Action: {action}")
                self.current_history.append(f"Observation: {observation}")

        # Max steps reached
        return "Sorry, cannot complete within step limit."

    def _parse_output(self, text):
        """Parse Thought and Action from LLM output"""
        lines = text.strip().split("\\n")
        thought = ""
        action = ""

        for line in lines:
            if line.startswith("Thought:"):
                thought = line.replace("Thought:", "").strip()
            elif line.startswith("Action:"):
                action = line.replace("Action:", "").strip()

        return thought, action

    def _parse_action(self, action):
        """Parse tool_name[params] format"""
        import re
        match = re.match(r'(\\w+)\\[(.+)\\]', action)
        if match:
            return match.group(1), match.group(2)
        return None, None

# Usage Example
llm = HelloAgentsLLM()
tools = ToolRegistry()
tools.register_tool(SearchTool())
tools.register_tool(CalculatorTool())

agent = MyReActAgent(name="ReAct Assistant", llm=llm, tool_registry=tools)
result = agent.run("What is the population of Tokyo times 2?")
print(f"\\nFinal: {result}")`}
        editable={false}
      />
    ),
  },

  // Slide 13: Tool System Architecture
  {
    id: 'ch7-slide-13',
    title: 'Tool System Architecture',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-teal-50 to-cyan-50">
        <h2 className="text-5xl font-bold mb-8 text-teal-600">Tool System Design</h2>
        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">🏗️ Core Components</h3>
            <div className="space-y-4">
              <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                <div className="font-bold text-teal-700 mb-2">1. Tool Base Class (ABC)</div>
                <code className="text-xs text-gray-600 block">
                  @abstractmethod run(params: Dict) → str<br/>
                  @abstractmethod get_parameters() → List[ToolParameter]
                </code>
                <p className="text-sm text-gray-600 mt-2">Defines unified interface for all tools</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="font-bold text-blue-700 mb-2">2. ToolParameter</div>
                <code className="text-xs text-gray-600 block">
                  name: str, type: str, description: str,<br/>
                  required: bool, default: Any
                </code>
                <p className="text-sm text-gray-600 mt-2">Self-describing parameter system</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="font-bold text-purple-700 mb-2">3. ToolRegistry</div>
                <code className="text-xs text-gray-600 block">
                  register_tool(tool: Tool)<br/>
                  register_function(name, desc, func)<br/>
                  execute_tool(name, params) → str
                </code>
                <p className="text-sm text-gray-600 mt-2">Centralized tool management hub</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-cyan-200">
            <h3 className="text-2xl font-bold text-cyan-600 mb-4">🚀 Advanced Features</h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
                <div className="font-bold text-cyan-700 mb-2">ToolChain</div>
                <p className="text-sm text-gray-600">
                  Sequential tool execution with variable substitution:<br/>
                  <code className="text-xs">Step1 → Step2 → Step3</code><br/>
                  Output of each step becomes input for next
                </p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                <div className="font-bold text-indigo-700 mb-2">AsyncToolExecutor</div>
                <p className="text-sm text-gray-600">
                  Parallel tool execution with ThreadPoolExecutor:<br/>
                  <code className="text-xs">execute_tools_parallel([task1, task2, ...])</code><br/>
                  Significantly reduces total execution time
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="font-bold text-purple-700 mb-2">Multi-Source Integration</div>
                <p className="text-sm text-gray-600">
                  Intelligent fallback mechanism:<br/>
                  <code className="text-xs">Try Tavily → Fallback to SerpAPI → Error</code><br/>
                  Unified result formatting across sources
                </p>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-lg p-4">
              <p className="text-sm font-semibold text-cyan-800 text-center">
                🎯 Design: Single responsibility, unified interface, exception handling
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl p-6 max-w-6xl">
          <p className="text-xl text-teal-800 font-semibold text-center">
            🛠️ Tool System = Agent's capability extension layer
          </p>
        </div>
      </div>
    ),
  },

  // Slide 14: Tool Registration
  {
    id: 'ch7-slide-14',
    title: 'Tool Registration & Discovery',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <h2 className="text-5xl font-bold mb-8 text-purple-600">Two Registration Methods</h2>
        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-white rounded-xl p-8 border-2 border-purple-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🎨</div>
              <h3 className="text-3xl font-bold text-purple-600">Object Registration</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="font-bold text-purple-700 mb-2">1. Define Tool Class</div>
                <code className="text-xs text-gray-600 block">
                  class CalculatorTool(Tool):<br/>
                  &nbsp;&nbsp;def __init__(self):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;super().__init__(name="calculator", ...)<br/>
                  &nbsp;&nbsp;def run(self, params): ...<br/>
                  &nbsp;&nbsp;def get_parameters(self): ...
                </code>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="font-bold text-purple-700 mb-2">2. Register Tool Instance</div>
                <code className="text-xs text-gray-600 block">
                  registry = ToolRegistry()<br/>
                  calculator = CalculatorTool()<br/>
                  registry.register_tool(calculator)
                </code>
              </div>

              <div className="bg-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="font-bold text-purple-800 mb-2">✅ Best For:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Complex tools with state</li>
                  <li>• Multiple methods and parameters</li>
                  <li>• Full parameter validation</li>
                  <li>• Self-documentation via get_parameters()</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-pink-200">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">⚡</div>
              <h3 className="text-3xl font-bold text-pink-600">Function Registration</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-pink-50 rounded-lg p-4">
                <div className="font-bold text-pink-700 mb-2">1. Define Function</div>
                <code className="text-xs text-gray-600 block">
                  def my_search(query: str) → str:<br/>
                  &nbsp;&nbsp;# Search implementation<br/>
                  &nbsp;&nbsp;results = api.search(query)<br/>
                  &nbsp;&nbsp;return format_results(results)
                </code>
              </div>

              <div className="bg-pink-50 rounded-lg p-4">
                <div className="font-bold text-pink-700 mb-2">2. Register Directly</div>
                <code className="text-xs text-gray-600 block">
                  registry = ToolRegistry()<br/>
                  registry.register_function(<br/>
                  &nbsp;&nbsp;name="search",<br/>
                  &nbsp;&nbsp;description="Web search tool",<br/>
                  &nbsp;&nbsp;func=my_search<br/>
                  )
                </code>
              </div>

              <div className="bg-pink-100 rounded-lg p-4 border-l-4 border-pink-500">
                <div className="font-bold text-pink-800 mb-2">✅ Best For:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Simple stateless functions</li>
                  <li>• Quick prototyping</li>
                  <li>• Wrapping existing functions</li>
                  <li>• Minimal boilerplate code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 border-2 border-indigo-200 max-w-6xl">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">🔍 Tool Discovery</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-4">
              <code className="text-sm text-gray-700 block">
                <strong>get_tools_description()</strong><br/>
                Returns formatted string:<br/>
                "- calculator: Math calculations<br/>
                &nbsp;- search: Web search tool"
              </code>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <code className="text-sm text-gray-700 block">
                <strong>execute_tool(name, params)</strong><br/>
                Unified execution interface:<br/>
                registry.execute_tool("calculator", "2+3")<br/>
                → "5"
              </code>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 15: Calculator Tool
  {
    id: 'ch7-slide-15',
    title: 'Custom Tool: Calculator',
    type: 'interactive',
    content: (
      <CodePlayground
        language="python"
        initialCode={`# Custom Calculator Tool Example
import ast
import operator
import math
from hello_agents import ToolRegistry

def my_calculate(expression: str) -> str:
    """Safe mathematical calculation using AST"""
    if not expression.strip():
        return "Calculation expression cannot be empty"

    # Supported operators
    operators_map = {
        ast.Add: operator.add,      # +
        ast.Sub: operator.sub,      # -
        ast.Mult: operator.mul,     # *
        ast.Div: operator.truediv,  # /
    }

    # Supported functions
    functions = {
        'sqrt': math.sqrt,
        'pi': math.pi,
        'sin': math.sin,
        'cos': math.cos,
        'log': math.log,
    }

    def eval_node(node):
        """Recursively evaluate AST node"""
        if isinstance(node, ast.Constant):  # Number
            return node.value
        elif isinstance(node, ast.BinOp):   # Binary operation
            left = eval_node(node.left)
            right = eval_node(node.right)
            op = operators_map.get(type(node.op))
            return op(left, right)
        elif isinstance(node, ast.Call):    # Function call
            func_name = node.func.id
            if func_name in functions:
                args = [eval_node(arg) for arg in node.args]
                return functions[func_name](*args)
        elif isinstance(node, ast.Name):    # Variable (e.g., pi)
            if node.id in functions:
                return functions[node.id]
        raise ValueError(f"Unsupported operation: {type(node)}")

    try:
        # Parse expression to AST
        tree = ast.parse(expression, mode='eval')
        result = eval_node(tree.body)
        return str(result)
    except Exception as e:
        return f"Calculation failed: {str(e)}"

# Create ToolRegistry with calculator
def create_calculator_registry():
    registry = ToolRegistry()

    # Register as function (simple method)
    registry.register_function(
        name="calculator",
        description="Mathematical calculation tool. Supports +, -, *, /, sqrt(), sin(), cos(), log(), pi constant",
        func=my_calculate
    )

    return registry

# Usage Examples
registry = create_calculator_registry()

# Test cases
test_cases = [
    "2 + 3",           # Basic arithmetic
    "10 - 4",
    "5 * 6",
    "15 / 3",
    "sqrt(16)",        # Square root
    "2 + 3 * 4",       # Order of operations
    "sqrt(16) + 2 * 3", # Combined
    "sin(pi / 2)",     # Trigonometry
]

print("🧮 Calculator Tool Tests:\\n")
for expr in test_cases:
    result = registry.execute_tool("calculator", expr)
    print(f"{expr:20} = {result}")

# Integration with SimpleAgent
from hello_agents import HelloAgentsLLM, SimpleAgent

llm = HelloAgentsLLM()
agent = SimpleAgent(
    name="Math Assistant",
    llm=llm,
    tool_registry=registry,
    enable_tool_calling=True
)

# Agent will automatically detect and use calculator
response = agent.run("What is sqrt(16) + 2 * 3?")
print(f"\\nAgent Response: {response}")`}
        editable={false}
      />
    ),
  },

  // Slide 16: Multi-Source Search
  {
    id: 'ch7-slide-16',
    title: 'Multi-Source Search Tool',
    type: 'content',
    content: <div className="p-12"><h2>Test Slide</h2></div>,
  },

  // Slide 17: Chapter Summary
  {
    id: 'ch7-slide-17',
    title: 'Chapter Summary',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <h2 className="text-5xl font-bold mb-8 text-purple-600">What We Built: HelloAgents Framework</h2>
        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">Core Layer</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>HelloAgentsLLM:</strong> Multi-provider support (OpenAI, ModelScope, VLLM, Ollama) with auto-detection</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Message Class:</strong> Unified message format with Pydantic validation (user/assistant/system/tool)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Config Class:</strong> Centralized configuration with environment variable support</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-500 font-bold">✓</span>
                <span><strong>Agent Base Class:</strong> Abstract interface for all agent paradigms</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-pink-500 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-bold text-pink-600 mb-3">Agent Layer</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>SimpleAgent:</strong> Basic conversation with optional tool calling via [TOOL_CALL:name:params]</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>ReActAgent:</strong> Thought → Action → Observation loop for multi-step reasoning</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>ReflectionAgent:</strong> Generate → Reflect → Refine cycle for iterative improvement</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>PlanAndSolveAgent:</strong> Planner creates steps, Executor solves sequentially</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🛠️</div>
            <h3 className="text-xl font-bold text-red-600 mb-3">Tool System</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✓</span>
                <span><strong>Tool Base Class:</strong> Abstract interface with run() and get_parameters() methods</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✓</span>
                <span><strong>ToolRegistry:</strong> Centralized management with register_tool() and register_function()</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✓</span>
                <span><strong>CalculatorTool:</strong> Safe AST-based math evaluation (operators + functions)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✓</span>
                <span><strong>SearchTool:</strong> Multi-source search (Tavily + SerpAPI) with intelligent fallback</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-orange-600 mb-3">Advanced Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>ToolChain:</strong> Sequential multi-tool execution with variable substitution</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>AsyncToolExecutor:</strong> Parallel tool execution using ThreadPoolExecutor</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Streaming Support:</strong> Real-time token streaming with stream_invoke()</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span><strong>Version Control:</strong> Chapter-by-chapter pip installable releases (hello-agents==0.1.1)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 rounded-xl p-6 max-w-6xl">
          <p className="text-2xl text-purple-800 font-bold text-center mb-2">
            🎓 From User to Builder: Complete Agent Framework Mastery
          </p>
          <p className="text-lg text-gray-700 text-center">
            Foundation ready for Chapters 8-16: Memory, RAG, Context Engineering, MCP, and more advanced topics
          </p>
        </div>
      </div>
    ),
  },

  // Slide 18: Assessment Quiz
  {
    id: 'ch7-slide-18',
    title: 'Chapter 7 Assessment',
    type: 'interactive',
    content: (
      <Quiz
        chapterId={7}
        title="Chapter 7 Assessment"
        questions={[
          {
            id: 'q1',
            type: 'multiple-choice',
            question: "What are the 4 core design principles of the HelloAgents framework?",
            options: [
              { id: 'a', text: "Lightweight & Teaching-Friendly, Standard API Based, Progressive Learning Path, Everything is a Tool", isCorrect: true },
              { id: 'b', text: "High Performance, Cloud Native, Microservices, Event-Driven", isCorrect: false },
              { id: 'c', text: "Object-Oriented, Functional, Reactive, Declarative", isCorrect: false },
              { id: 'd', text: "MVC Architecture, Repository Pattern, Factory Pattern, Singleton Pattern", isCorrect: false },
            ],
            explanation: "HelloAgents is designed around 4 principles: (1) Lightweight with minimal dependencies and complete readability, (2) Built on OpenAI API standard for compatibility, (3) Progressive learning with version-controlled pip packages, (4) 'Everything is a Tool' philosophy unifying Memory, RAG, MCP as tools.",
            points: 12,
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: "How does HelloAgentsLLM's auto-detection mechanism work?",
            options: [
              { id: 'a', text: "Only checks LLM_API_KEY environment variable", isCorrect: false },
              { id: 'b', text: "Prioritizes: specific provider env vars → parse base_url domain/port → analyze API key format → default to 'auto'", isCorrect: true },
              { id: 'c', text: "Randomly selects from available providers", isCorrect: false },
              { id: 'd', text: "Always defaults to OpenAI regardless of configuration", isCorrect: false },
            ],
            explanation: "The auto-detection follows a 4-step priority: (1) Check specific provider environment variables (OPENAI_API_KEY, MODELSCOPE_API_KEY, etc.), (2) Parse LLM_BASE_URL for domain patterns (api-inference.modelscope.cn) or ports (:11434 for Ollama, :8000 for VLLM), (3) Analyze LLM_API_KEY format as auxiliary check, (4) Default to 'auto' with generic configuration.",
            points: 13,
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: "What are the roles defined in the Message class using Literal typing?",
            options: [
              { id: 'a', text: "sender, receiver, timestamp, content", isCorrect: false },
              { id: 'b', text: "user, assistant, system, tool", isCorrect: true },
              { id: 'c', text: "input, output, error, log", isCorrect: false },
              { id: 'd', text: "client, server, middleware, cache", isCorrect: false },
            ],
            explanation: "The Message class uses Literal['user', 'assistant', 'system', 'tool'] for the role field, directly corresponding to OpenAI API specification. This provides type safety and ensures compatibility with standard LLM APIs.",
            points: 12,
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: "In ReActAgent, what are the two valid Action formats?",
            options: [
              { id: 'a', text: "START[task] and END[result]", isCorrect: false },
              { id: 'b', text: "tool_name[parameters] and Finish[final answer]", isCorrect: true },
              { id: 'c', text: "SEARCH[query] and CALCULATE[expression]", isCorrect: false },
              { id: 'd', text: "THINK[reasoning] and ACT[action]", isCorrect: false },
            ],
            explanation: "ReActAgent supports two Action formats: (1) tool_name[parameters] - calls a registered tool (e.g., search[Python programming], calculator[2+3*4]), (2) Finish[final answer] - indicates the agent has enough information and provides the final answer, terminating the Thought-Action loop.",
            points: 13,
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: "What is the difference between ToolRegistry.register_tool() and register_function()?",
            options: [
              { id: 'a', text: "No difference - they are aliases for the same method", isCorrect: false },
              { id: 'b', text: "register_tool() for Tool objects with full parameter definitions; register_function() for simple functions", isCorrect: true },
              { id: 'c', text: "register_tool() is synchronous; register_function() is asynchronous", isCorrect: false },
              { id: 'd', text: "register_tool() is deprecated; only use register_function()", isCorrect: false },
            ],
            explanation: "register_tool(tool: Tool) accepts Tool objects with complete parameter definitions via get_parameters(), supporting complex validation and self-documentation. register_function(name, description, func) is a convenience method for quick integration of simple functions (str → str), ideal for prototyping or wrapping existing functions without boilerplate.",
            points: 12,
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: "How does the multi-source SearchTool handle source selection and fallback?",
            options: [
              { id: 'a', text: "Always uses Tavily API exclusively", isCorrect: false },
              { id: 'b', text: "Randomly selects between Tavily and SerpAPI", isCorrect: false },
              { id: 'c', text: "Prioritizes Tavily (AI-optimized) → fallback to SerpAPI on failure → unified result formatting", isCorrect: true },
              { id: 'd', text: "Calls both sources and merges results", isCorrect: false },
            ],
            explanation: "SearchTool implements intelligent fallback: (1) Prioritizes Tavily API for AI-optimized search with direct answer extraction, (2) If Tavily fails or is unavailable, automatically falls back to SerpAPI for traditional Google search, (3) Formats results uniformly regardless of source, (4) If all sources fail, provides clear error message prompting API key configuration.",
            points: 13,
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: "What is the purpose of ToolChain in the advanced tool system?",
            options: [
              { id: 'a', text: "Encrypt tool communications for security", isCorrect: false },
              { id: 'b', text: "Sequential execution of multiple tools with variable substitution between steps", isCorrect: true },
              { id: 'c', text: "Parallelize all tool executions", isCorrect: false },
              { id: 'd', text: "Cache tool results for faster lookups", isCorrect: false },
            ],
            explanation: "ToolChain enables sequential multi-tool workflows where each step's output becomes available for subsequent steps via variable substitution. Example: Step 1 search[topic] → step1_result, Step 2 calculator[parse from {step1_result}] → step2_result. This supports complex workflows like 'research and calculate' where information from search is used in calculations.",
            points: 12,
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: "Which statement about the Agent base class is TRUE?",
            options: [
              { id: 'a', text: "It can be directly instantiated to create generic agents", isCorrect: false },
              { id: 'b', text: "It is an abstract class (ABC) with @abstractmethod run() that all subclasses must implement", isCorrect: true },
              { id: 'c', text: "It only supports synchronous execution", isCorrect: false },
              { id: 'd', text: "It does not provide history management functionality", isCorrect: false },
            ],
            explanation: "Agent is an abstract base class (inherits from ABC) that cannot be directly instantiated. It defines @abstractmethod run(input_text) → str that forces all subclasses (SimpleAgent, ReActAgent, etc.) to implement their own execution logic. It provides built-in history management (add_message, get_history, clear_history) and unified initialization (name, llm, system_prompt, config).",
            points: 13,
          },
        ]}
        passingScore={70}
      />
    ),
  },
];
