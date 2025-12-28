import { Slide } from '@/components/SlideView'
import CodePlayground from '@/components/CodePlayground'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import Quiz from '@/components/Quiz'

export const chapter6Slides: Slide[] = [
  // Slide 1: Title
  {
    id: 'ch6-slide-1',
    title: 'Chapter 6 - Framework Development Practice',
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <h1 className="text-5xl font-bold text-black mb-4">Chapter 6</h1>
        <h2 className="text-3xl font-semibold text-black mb-6">
          Framework Development Practice
        </h2>
        <p className="text-xl text-black max-w-3xl text-center mb-8">
          From manual scripts to production frameworks: Build sophisticated multi-agent systems with AutoGen, AgentScope, CAMEL, and LangGraph
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-bold text-black mb-1 text-sm">AutoGen</h3>
            <p className="text-xs text-black">Conversation-driven collaboration</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">🏗️</div>
            <h3 className="font-bold text-black mb-1 text-sm">AgentScope</h3>
            <p className="text-xs text-black">Multi-agent platform</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">🎭</div>
            <h3 className="font-bold text-black mb-1 text-sm">CAMEL</h3>
            <p className="text-xs text-black">Role-playing framework</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-shadow text-center">
            <div className="text-3xl mb-2">🔀</div>
            <h3 className="font-bold text-black mb-1 text-sm">LangGraph</h3>
            <p className="text-xs text-black">Graph-based workflows</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: Learning Objectives
  {
    id: 'ch6-slide-2',
    title: 'What You Will Learn',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h2 className="text-4xl font-bold text-black mb-8">Learning Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🏗️</div>
              <div>
                <h3 className="font-semibold text-black mb-2">Framework Fundamentals</h3>
                <p className="text-black text-sm">Understand why frameworks are essential: reusability, decoupling, state management, observability</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-cyan-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">💬</div>
              <div>
                <h3 className="font-semibold text-black mb-2">AutoGen Multi-Agent</h3>
                <p className="text-black text-sm">Build conversational agents with RoundRobinGroupChat for software development teams</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🏗️</div>
              <div>
                <h3 className="font-semibold text-black mb-2">AgentScope Platform</h3>
                <p className="text-black text-sm">Master message passing and distributed deployment for large-scale agent applications</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🎭</div>
              <div>
                <h3 className="font-semibold text-black mb-2">CAMEL Role-Playing</h3>
                <p className="text-black text-sm">Implement autonomous collaboration with inception prompting and role assignment</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-orange-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">🔀</div>
              <div>
                <h3 className="font-semibold text-black mb-2">LangGraph Workflows</h3>
                <p className="text-black text-sm">Design cyclic workflows with graph nodes and edges for reflection patterns</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-indigo-500">
            <div className="flex items-start space-x-3">
              <div className="text-3xl">⚖️</div>
              <div>
                <h3 className="font-semibold text-black mb-2">Framework Selection</h3>
                <p className="text-black text-sm">Choose the right framework based on use case: research vs production, simple vs complex</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 3: Why Agent Frameworks
  {
    id: 'ch6-slide-3',
    title: 'From Manual Implementation to Frameworks',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Why Agent Frameworks Are Needed</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          The code we wrote in Chapter 4 was great for <span className="font-semibold text-indigo-600">learning and understanding</span>.
          But building <span className="font-semibold text-purple-600">production-grade agent systems</span> requires frameworks that abstract away repetitive work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="font-bold text-black mb-2">Code Reuse & Efficiency</h3>
                <p className="text-black text-sm">
                  Frameworks provide <span className="font-semibold">Agent base classes</span> with core loops pre-built.
                  Build ReAct, Plan-and-Solve, or Reflection in <span className="font-semibold text-blue-600">minutes, not hours</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🔧</div>
              <div>
                <h3 className="font-bold text-black mb-2">Decoupling & Extensibility</h3>
                <p className="text-black text-sm">
                  <span className="font-semibold">Model Layer</span> (LLM interaction), <span className="font-semibold">Tool Layer</span> (function calls),
                  <span className="font-semibold"> Memory Layer</span> (context management) are all independent modules.
                  Replace any component without breaking the system.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">💾</div>
              <div>
                <h3 className="font-bold text-black mb-2">Complex State Management</h3>
                <p className="text-black text-sm">
                  Handle <span className="font-semibold">context window limits</span>, persistence, multi-turn conversations automatically.
                  Frameworks offer sliding windows, summary memory, vector stores—all battle-tested.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-200">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">👁️</div>
              <div>
                <h3 className="font-bold text-black mb-2">Observability & Debugging</h3>
                <p className="text-black text-sm">
                  Built-in <span className="font-semibold">event callbacks</span> trigger at key lifecycle nodes:
                  <code className="text-xs bg-white px-1 py-0.5 rounded">on_llm_start</code>, <code className="text-xs bg-white px-1 py-0.5 rounded">on_tool_end</code>.
                  Track agent decisions without manual logging.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-black">
            <span className="font-semibold">Key Insight:</span> Frameworks aren't just code libraries—they enforce <span className="font-semibold text-indigo-600">architectural best practices</span> that make your agents scalable, maintainable, and debuggable.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 4: Framework Comparison Table
  {
    id: 'ch6-slide-4',
    title: 'Framework Comparison',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Four Frameworks, Four Philosophies</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <th className="p-4 text-left font-semibold">Framework</th>
                <th className="p-4 text-left font-semibold">Core Idea</th>
                <th className="p-4 text-left font-semibold">Best For</th>
                <th className="p-4 text-left font-semibold">Key Feature</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">💬</div>
                    <span className="font-bold text-blue-600">AutoGen</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">Conversation-driven multi-agent collaboration</span>
                </td>
                <td className="p-4">
                  <span className="text-sm">Simulating human teams (PM, Dev, QA)</span>
                </td>
                <td className="p-4">
                  <span className="text-sm font-semibold">RoundRobinGroupChat</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-purple-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🏗️</div>
                    <span className="font-bold text-purple-600">AgentScope</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">Full-stack multi-agent development platform</span>
                </td>
                <td className="p-4">
                  <span className="text-sm">Large-scale, distributed agent systems</span>
                </td>
                <td className="p-4">
                  <span className="text-sm font-semibold">Message passing + distributed deploy</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-green-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🎭</div>
                    <span className="font-bold text-green-600">CAMEL</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">Role-playing autonomous collaboration</span>
                </td>
                <td className="p-4">
                  <span className="text-sm">Research scenarios (AI Researcher + Programmer)</span>
                </td>
                <td className="p-4">
                  <span className="text-sm font-semibold">Inception Prompting</span>
                </td>
              </tr>
              <tr className="hover:bg-orange-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">🔀</div>
                    <span className="font-bold text-orange-600">LangGraph</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">Graph-based workflow orchestration</span>
                </td>
                <td className="p-4">
                  <span className="text-sm">Complex, cyclic workflows (Reflection, loops)</span>
                </td>
                <td className="p-4">
                  <span className="text-sm font-semibold">Nodes + Edges with cycle support</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border-l-4 border-indigo-500">
            <p className="text-black text-sm">
              <span className="font-semibold">AutoGen & AgentScope:</span> Multi-agent collaboration via conversation or message passing
            </p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-100 to-orange-100 rounded-lg border-l-4 border-green-500">
            <p className="text-black text-sm">
              <span className="font-semibold">CAMEL & LangGraph:</span> Specialized for autonomous role-play and complex workflows
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 5: AutoGen Architecture
  {
    id: 'ch6-slide-5',
    title: 'Framework 1: AutoGen',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="flex items-center space-x-4 mb-8">
          <div className="text-6xl">💬</div>
          <div>
            <h2 className="text-5xl font-bold text-blue-700">AutoGen</h2>
            <p className="text-xl text-black">Conversation-Driven Collaboration</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🏗️</span>
              v0.7.4 Architecture Evolution
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-black text-sm mb-1">Layered Design</p>
                <ul className="text-xs text-black ml-4 space-y-1">
                  <li>• <code>autogen-core</code>: LLM interaction + message passing</li>
                  <li>• <code>autogen-agentchat</code>: High-level multi-agent APIs</li>
                </ul>
              </div>
              <div className="p-3 bg-cyan-50 rounded-lg">
                <p className="font-semibold text-black text-sm mb-1">Async-First</p>
                <p className="text-xs text-black">Full transition to <code>async/await</code> for non-blocking concurrent agent execution</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">👥</span>
              Core Agent Types
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold text-black text-sm">AssistantAgent</p>
                <p className="text-xs text-black">Encapsulates LLM. Generates replies, proposes plans, writes code. Assigned expert roles via system messages.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-black text-sm">UserProxyAgent</p>
                <p className="text-xs text-black">Dual role: (1) Human spokesperson initiating tasks, (2) Code executor calling tools and feeding results back.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg text-white">
          <h3 className="font-bold mb-3 text-lg">RoundRobinGroupChat Workflow</h3>
          <ol className="text-sm space-y-2">
            <li><span className="font-semibold">1. Create group chat</span> with agents (PM, Engineer, Reviewer)</li>
            <li><span className="font-semibold">2. Define speaking order</span> (sequential activation)</li>
            <li><span className="font-semibold">3. Agent responds</span> based on conversation context</li>
            <li><span className="font-semibold">4. Add reply to history</span> and activate next agent</li>
            <li><span className="font-semibold">5. Repeat until</span> max rounds or termination condition met</li>
          </ol>
        </div>
      </div>
    ),
  },

  // Slide 6: AutoGen Software Dev Team Diagram
  {
    id: 'ch6-slide-6',
    title: 'AutoGen Case: Software Development Team',
    type: 'visual',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-6">Building a Bitcoin Price Display App</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          Three agents collaborate via <span className="font-semibold text-blue-600">RoundRobinGroupChat</span> to develop a web application:
          Product Manager defines requirements → Engineer writes code → Code Reviewer validates quality.
        </p>
        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 50, y: 200 },
              data: {
                label: 'User Request',
                description: 'Build a Bitcoin price display app',
                emoji: '👤',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 300, y: 100 },
              data: {
                label: 'Product Manager',
                description: 'AssistantAgent: Analyzes requirements, selects tech stack',
                emoji: '📋',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 300, y: 300 },
              data: {
                label: 'Engineer',
                description: 'AssistantAgent: Writes Python code using requests + Flask',
                emoji: '💻',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 600, y: 200 },
              data: {
                label: 'Code Reviewer',
                description: 'UserProxyAgent: Executes code, reports errors/success',
                emoji: '✅',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 900, y: 200 },
              data: {
                label: 'Final Output',
                description: 'Working web app displaying BTC price',
                emoji: '🚀',
              },
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Task initiation' },
            { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Requirements doc' },
            { id: 'e3-4', source: '3', target: '4', animated: true, label: 'Code submission' },
            { id: 'e4-3', source: '4', target: '3', animated: false, label: 'Feedback loop' },
            { id: 'e4-5', source: '4', target: '5', animated: true, label: 'Approved' },
          ]}
          title="AutoGen Multi-Agent Software Team"
        />
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-black mb-2">Round 1: PM Proposes</h4>
            <p className="text-sm text-black">Tech stack: Python + Flask + CoinGecko API. Requirements finalized.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-black mb-2">Round 2: Engineer Codes</h4>
            <p className="text-sm text-black">Implements <code>app.py</code> with /price endpoint. Submits for review.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-black mb-2">Round 3: Reviewer Tests</h4>
            <p className="text-sm text-black">Executes code locally. If errors, loop back to Engineer. If success, approve.</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 7: AutoGen Code Example
  {
    id: 'ch6-slide-7',
    title: 'AutoGen: Implementation Code',
    type: 'interactive',
    content: (
      <div className="flex flex-col h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-4">Building the Team in AutoGen v0.7.4</h2>
        <p className="text-lg text-black mb-6">
          Create agents with specific roles and organize them in a RoundRobinGroupChat for sequential collaboration.
        </p>
        <CodePlayground
          template="vanilla"
          files={{
            '/autogen_team.py': {
              code: `# AutoGen v0.7.4 Software Development Team

from autogen_agentchat.agents import AssistantAgent, UserProxyAgent
from autogen_agentchat.teams import RoundRobinGroupChat
from autogen_ext.models import OpenAIChatCompletionClient

# Initialize model
model = OpenAIChatCompletionClient(model="gpt-4o-mini")

# 1. Product Manager Agent
product_manager = AssistantAgent(
    name="ProductManager",
    model_client=model,
    system_message="""You are an experienced product manager.
    Analyze user requirements and propose technical solutions.
    Choose appropriate tech stacks and clarify functional specs."""
)

# 2. Engineer Agent
engineer = AssistantAgent(
    name="Engineer",
    model_client=model,
    system_message="""You are a senior software engineer.
    Write production-quality Python code based on PM requirements.
    Use best practices: error handling, clean code, docstrings."""
)

# 3. Code Reviewer Agent (UserProxy with code execution)
code_reviewer = UserProxyAgent(
    name="CodeReviewer",
    code_execution_config={
        "executor": LocalCommandLineCodeExecutor(work_dir="coding"),
    },
    system_message="""Execute code submitted by Engineer.
    Report success/failure with detailed logs.
    If errors occur, request fixes from Engineer."""
)

# 4. Create RoundRobinGroupChat
team = RoundRobinGroupChat(
    participants=[product_manager, engineer, code_reviewer],
    max_turns=10  # Max 10 conversation rounds
)

# 5. Run the team
async def main():
    result = await team.run(
        task="Build a web app to display current Bitcoin price in USD."
    )
    print(result)

# Execution Flow:
# PM analyzes → Engineer codes → Reviewer tests → Loop if errors → Done

# Key Advantages:
# 1. Clear separation of concerns (thinking vs coding vs testing)
# 2. Automated feedback loops
# 3. Sequential execution ensures orderly collaboration
# 4. Easy to add new roles (e.g., Designer, QA)`,
            },
          }}
        />
      </div>
    ),
  },

  // Slide 8: AgentScope Introduction
  {
    id: 'ch6-slide-8',
    title: 'Framework 2: AgentScope',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="flex items-center space-x-4 mb-8">
          <div className="text-6xl">🏗️</div>
          <div>
            <h2 className="text-5xl font-bold text-purple-700">AgentScope</h2>
            <p className="text-xl text-black">Full-Stack Multi-Agent Platform</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              Core Philosophy
            </h3>
            <div className="space-y-2 text-black text-sm">
              <p><span className="font-semibold text-purple-600">Ease of Use:</span> Simple, Pythonic API for rapid development</p>
              <p><span className="font-semibold text-purple-600">Engineering Focus:</span> Production-ready with built-in lifecycle management</p>
              <p><span className="font-semibold text-purple-600">Distributed Deployment:</span> Scale across multiple machines seamlessly</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">📨</span>
              Message Passing Architecture
            </h3>
            <div className="space-y-2">
              <div className="p-2 bg-blue-50 rounded">
                <p className="text-sm text-black"><span className="font-semibold">Message:</span> Structured data unit (sender, receiver, content)</p>
              </div>
              <div className="p-2 bg-purple-50 rounded">
                <p className="text-sm text-black"><span className="font-semibold">MessageHub:</span> Central router for multi-agent communication</p>
              </div>
              <div className="p-2 bg-pink-50 rounded">
                <p className="text-sm text-black"><span className="font-semibold">Agent.reply():</span> Process incoming messages, generate responses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">✅ Advantages</h3>
            <ul className="text-sm space-y-1">
              <li>• User-friendly API (minimal boilerplate)</li>
              <li>• Built-in distributed support</li>
              <li>• Rich built-in services (web UI, logging)</li>
              <li>• Active Alibaba DAMO Academy support</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl shadow-lg text-white">
            <h3 className="font-bold mb-2 text-lg">⚠️ Use Cases</h3>
            <ul className="text-sm space-y-1">
              <li>• Large-scale agent systems (10+ agents)</li>
              <li>• Enterprise applications needing monitoring</li>
              <li>• Scenarios requiring distributed deployment</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 9: CAMEL Introduction
  {
    id: 'ch6-slide-9',
    title: 'Framework 3: CAMEL',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="flex items-center space-x-4 mb-8">
          <div className="text-6xl">🎭</div>
          <div>
            <h2 className="text-5xl font-bold text-green-700">CAMEL</h2>
            <p className="text-xl text-black">Role-Playing Autonomous Collaboration</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Inception Prompting
            </h3>
            <p className="text-sm text-black mb-4">
              The framework's secret sauce: instead of explicit workflow orchestration,
              CAMEL uses <span className="font-semibold text-green-600">"inception prompts"</span> that inspire agents to autonomously collaborate.
            </p>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-xs text-black font-mono">
                "You are an AI Researcher. Work with the Python Programmer to build a sentiment analysis model.
                Suggest novel approaches, review code, iterate until the model achieves 90%+ accuracy."
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🎭</span>
              Role Assignment
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-black text-sm">AI Researcher</p>
                <p className="text-xs text-black">Proposes algorithms, reviews papers, suggests improvements</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-semibold text-black text-sm">Python Programmer</p>
                <p className="text-xs text-black">Implements models, writes tests, optimizes performance</p>
              </div>
              <div className="p-3 bg-pink-50 rounded-lg">
                <p className="font-semibold text-black text-sm">Autonomous Dialogue</p>
                <p className="text-xs text-black">Agents engage in multi-turn conversation until task completion</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg text-white">
          <h3 className="font-bold mb-3 text-lg">CAMEL Workflow</h3>
          <ol className="text-sm space-y-2">
            <li><span className="font-semibold">1. Define roles</span> and common task goal</li>
            <li><span className="font-semibold">2. Generate inception prompts</span> that inspire collaboration</li>
            <li><span className="font-semibold">3. Agents autonomously converse,</span> propose ideas, critique each other</li>
            <li><span className="font-semibold">4. Iterate until</span> task goal satisfied or max rounds reached</li>
          </ol>
        </div>
        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-black text-sm">
            <span className="font-semibold">Best For:</span> Research scenarios where agents explore solution space creatively
            (AI research, software architecture design, brainstorming sessions).
          </p>
        </div>
      </div>
    ),
  },

  // Slide 10: LangGraph Introduction
  {
    id: 'ch6-slide-10',
    title: 'Framework 4: LangGraph',
    type: 'content',
    content: <div className="p-12"><h2>LangGraph - Graph-Based Workflow Orchestration</h2></div>,
  },

  // Slide 11: LangGraph Reflection Workflow Diagram
  {
    id: 'ch6-slide-11',
    title: 'LangGraph Case: Reflection Workflow',
    type: 'visual',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-6">Building a Self-Improving Essay Writer</h2>
        <p className="text-lg text-black mb-8 max-w-4xl">
          LangGraph's <span className="font-semibold text-orange-600">cycle support</span> makes it perfect for Reflection patterns:
          Generate → Reflect → Improve → Repeat until quality threshold met.
        </p>
        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 50, y: 200 },
              data: {
                label: 'Start',
                description: 'User provides essay topic',
                emoji: '🚀',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 300, y: 200 },
              data: {
                label: 'Generate Node',
                description: 'LLM writes essay draft',
                emoji: '✍️',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 600, y: 200 },
              data: {
                label: 'Reflect Node',
                description: 'Critic scores quality (0-1)',
                emoji: '🤔',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 900, y: 200 },
              data: {
                label: 'Quality Check',
                description: 'Score > 0.9?',
                emoji: '✅',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 1200, y: 200 },
              data: {
                label: 'Final Output',
                description: 'Polished essay',
                emoji: '📄',
              },
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', animated: true },
            { id: 'e2-3', source: '2', target: '3', animated: true },
            { id: 'e3-4', source: '3', target: '4', animated: true },
            { id: 'e4-5', source: '4', target: '5', animated: true, label: 'Yes' },
            { id: 'e4-2', source: '4', target: '2', animated: false, label: 'No (cycle)' },
          ]}
          title="LangGraph Reflection Loop"
        />
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-semibold text-black mb-2">Node: Generate</h4>
            <p className="text-sm text-black">Function calls LLM with prompt: "Write 500-word essay on {topic}. Improve from previous feedback: {reflection}"</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-black mb-2">Node: Reflect</h4>
            <p className="text-sm text-black">Critic LLM evaluates draft: "Rate clarity, coherence, grammar. Score 0-1. Provide improvement suggestions."</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-black mb-2">Edge: Conditional Loop</h4>
            <p className="text-sm text-black">If score < 0.9, edge routes back to Generate node with reflection feedback. Max 5 iterations.</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 12: LangGraph Code Example
  {
    id: 'ch6-slide-12',
    title: 'LangGraph: Implementation Code',
    type: 'interactive',
    content: (
      <div className="flex flex-col h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-4">Building a Reflection Graph</h2>
        <p className="text-lg text-black mb-6">
          Define nodes as functions, connect them with edges, and let LangGraph handle the cyclic execution.
        </p>
        <CodePlayground
          template="vanilla"
          files={{
            '/langgraph_reflection.py': {
              code: `# LangGraph Reflection Pattern

from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from typing import TypedDict

# 1. Define State Schema
class EssayState(TypedDict):
    topic: str
    draft: str
    reflection: str
    quality_score: float
    iteration: int

# 2. Define Nodes (functions)
llm = ChatOpenAI(model="gpt-4o-mini")

def generate_node(state: EssayState) -> EssayState:
    """Generate essay draft based on topic and previous reflection."""
    prompt = f"""Write a 500-word essay on: {state['topic']}

    Previous feedback (if any): {state.get('reflection', 'None')}

    Improve based on the feedback and write the best essay you can."""

    draft = llm.invoke(prompt).content
    state['draft'] = draft
    state['iteration'] += 1
    return state

def reflect_node(state: EssayState) -> EssayState:
    """Critic evaluates draft quality and provides feedback."""
    prompt = f"""Rate the following essay on a scale of 0-1:

    {state['draft']}

    Evaluate: clarity, coherence, grammar, depth of analysis.
    Provide: (1) quality_score (float), (2) specific improvement suggestions.
    Format: score|suggestions"""

    response = llm.invoke(prompt).content
    score, suggestions = response.split('|')
    state['quality_score'] = float(score.strip())
    state['reflection'] = suggestions.strip()
    return state

# 3. Define Conditional Edge Function
def should_continue(state: EssayState) -> str:
    """Decide whether to continue refining or finish."""
    if state['quality_score'] > 0.9 or state['iteration'] >= 5:
        return "end"
    return "generate"

# 4. Build Graph
workflow = StateGraph(EssayState)

# Add nodes
workflow.add_node("generate", generate_node)
workflow.add_node("reflect", reflect_node)

# Define edges
workflow.set_entry_point("generate")
workflow.add_edge("generate", "reflect")
workflow.add_conditional_edges(
    "reflect",
    should_continue,
    {
        "generate": "generate",  # Loop back if quality low
        "end": END               # Terminate if quality high
    }
)

# 5. Compile and Run
app = workflow.compile()
result = app.invoke({
    "topic": "The Impact of AI on Society",
    "draft": "",
    "reflection": "",
    "quality_score": 0.0,
    "iteration": 0
})

print(f"Final Essay (after {result['iteration']} iterations):")
print(result['draft'])

# Key Features:
# - Cyclic execution (reflect → generate loop)
# - Conditional routing based on quality_score
# - State persistence across iterations
# - Max iteration safeguard`,
            },
          }}
        />
      </div>
    ),
  },

  // Slide 13: Framework Selection Guide
  {
    id: 'ch6-slide-13',
    title: 'Framework Selection Decision Tree',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Choosing the Right Framework</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border-2 border-blue-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">💬</span>
              Choose AutoGen When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Simulating human teams</span> - product managers, engineers, reviewers collaborating</li>
              <li>• <span className="font-semibold">Sequential workflows</span> - clear speaking order (round-robin)</li>
              <li>• <span className="font-semibold">Prototyping multi-agent systems</span> - rapid experimentation</li>
              <li>• <span className="font-semibold">Code execution required</span> - UserProxyAgent runs code autonomously</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">🏗️</span>
              Choose AgentScope When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Large-scale systems</span> - 10+ agents, need distributed deployment</li>
              <li>• <span className="font-semibold">Enterprise applications</span> - production monitoring, logging, lifecycle management</li>
              <li>• <span className="font-semibold">Message-driven architecture</span> - flexible agent communication patterns</li>
              <li>• <span className="font-semibold">Ease of use priority</span> - Pythonic API, minimal boilerplate</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">🎭</span>
              Choose CAMEL When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Research scenarios</span> - AI researcher + programmer exploring solutions</li>
              <li>• <span className="font-semibold">Autonomous collaboration</span> - agents self-organize without explicit orchestration</li>
              <li>• <span className="font-semibold">Creative tasks</span> - brainstorming, architecture design, novel problem-solving</li>
              <li>• <span className="font-semibold">Minimal workflow definition</span> - inception prompting handles coordination</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl border-2 border-orange-300">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-3xl mr-3">🔀</span>
              Choose LangGraph When:
            </h3>
            <ul className="space-y-2 text-black ml-12">
              <li>• <span className="font-semibold">Cyclic workflows</span> - Reflection, iterative refinement, retry logic</li>
              <li>• <span className="font-semibold">Complex decision trees</span> - conditional routing, if/else branches</li>
              <li>• <span className="font-semibold">Visual debugging needs</span> - graph representation helps understand flow</li>
              <li>• <span className="font-semibold">LangChain ecosystem</span> - already using LangChain tools/chains</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 14: Framework Feature Matrix
  {
    id: 'ch6-slide-14',
    title: 'Feature Comparison Matrix',
    type: 'content',
    content: (
      <div className="flex flex-col justify-center h-full p-12">
        <h2 className="text-4xl font-bold text-black mb-8">Framework Capabilities at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <th className="p-3 text-left font-semibold">Feature</th>
                <th className="p-3 text-center font-semibold">AutoGen</th>
                <th className="p-3 text-center font-semibold">AgentScope</th>
                <th className="p-3 text-center font-semibold">CAMEL</th>
                <th className="p-3 text-center font-semibold">LangGraph</th>
              </tr>
            </thead>
            <tbody className="text-black text-sm">
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Multi-Agent Support</td>
                <td className="p-3 text-center">✅ GroupChat</td>
                <td className="p-3 text-center">✅ Message Hub</td>
                <td className="p-3 text-center">✅ Role Pairs</td>
                <td className="p-3 text-center">⚠️ Manual</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Code Execution</td>
                <td className="p-3 text-center">✅ UserProxy</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">✅ Custom Nodes</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Cycle Support</td>
                <td className="p-3 text-center">⚠️ Limited</td>
                <td className="p-3 text-center">⚠️ Manual</td>
                <td className="p-3 text-center">⚠️ Manual</td>
                <td className="p-3 text-center">✅ Native</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Distributed Deploy</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">✅ Built-in</td>
                <td className="p-3 text-center">❌</td>
                <td className="p-3 text-center">❌</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Observability</td>
                <td className="p-3 text-center">✅ Callbacks</td>
                <td className="p-3 text-center">✅ Web UI</td>
                <td className="p-3 text-center">⚠️ Basic</td>
                <td className="p-3 text-center">✅ LangSmith</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Learning Curve</td>
                <td className="p-3 text-center">Medium</td>
                <td className="p-3 text-center">Low</td>
                <td className="p-3 text-center">Low</td>
                <td className="p-3 text-center">Medium</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 font-semibold">Production Ready</td>
                <td className="p-3 text-center">⚠️ Evolving</td>
                <td className="p-3 text-center">✅ Yes</td>
                <td className="p-3 text-center">⚠️ Research</td>
                <td className="p-3 text-center">✅ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
            <p className="font-semibold text-black text-sm">Human-like teams? → <span className="text-blue-600">AutoGen</span></p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
            <p className="font-semibold text-black text-sm">Enterprise scale? → <span className="text-purple-600">AgentScope</span></p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 text-center">
            <p className="font-semibold text-black text-sm">Complex loops? → <span className="text-orange-600">LangGraph</span></p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 15: Chapter Summary
  {
    id: 'ch6-slide-15',
    title: 'Chapter 6 Summary',
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
              <li>• <span className="font-semibold">Framework benefits:</span> Reusability, decoupling, state management, observability</li>
              <li>• <span className="font-semibold">AutoGen:</span> Conversation-driven with RoundRobinGroupChat (PM/Dev/QA simulation)</li>
              <li>• <span className="font-semibold">AgentScope:</span> Message-passing platform with distributed deployment</li>
              <li>• <span className="font-semibold">CAMEL:</span> Role-playing via inception prompting (AI Researcher + Programmer)</li>
              <li>• <span className="font-semibold">LangGraph:</span> Graph nodes/edges with native cycle support (Reflection workflows)</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-bold text-black mb-3 text-lg flex items-center">
              <span className="text-2xl mr-2">🛠️</span>
              Practical Skills
            </h3>
            <ul className="space-y-2 text-black text-sm">
              <li>• Built <span className="font-semibold text-blue-600">software dev team</span> with AutoGen (3 agents, Bitcoin price app)</li>
              <li>• Understood <span className="font-semibold text-purple-600">message passing</span> in AgentScope for large-scale systems</li>
              <li>• Learned <span className="font-semibold text-green-600">inception prompting</span> in CAMEL for autonomous collaboration</li>
              <li>• Implemented <span className="font-semibold text-orange-600">Reflection loop</span> with LangGraph (essay writer with quality scoring)</li>
              <li>• Mastered <span className="font-semibold">framework selection</span> based on use case requirements</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg text-white">
          <h3 className="font-bold mb-4 text-2xl text-center">Framework Selection Cheat Sheet</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-1">Team Simulation → AutoGen</p>
              <p className="font-semibold mb-1">Enterprise Scale → AgentScope</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Creative Research → CAMEL</p>
              <p className="font-semibold mb-1">Cyclic Workflows → LangGraph</p>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="text-black text-center">
            <span className="font-semibold text-lg">Next Chapter:</span> We'll build our own custom framework—the HelloAgents framework! 🚀
          </p>
        </div>
      </div>
    ),
  },

  // Slide 16: Knowledge Check Quiz
  {
    id: 'ch6-slide-16',
    title: 'Knowledge Check',
    type: 'interactive',
    content: (
      <Quiz
        questions={[
          {
            id: 'q1',
            question: 'What is the PRIMARY reason frameworks are preferred over manual agent implementation for production systems?',
            options: [
              { id: 'a', text: 'Frameworks are always faster than hand-written code' },
              { id: 'b', text: 'They abstract repetitive work (loops, state, tools) and enforce architectural best practices', correct: true },
              { id: 'c', text: 'Frameworks eliminate the need for understanding agent paradigms' },
              { id: 'd', text: 'They automatically handle all edge cases without configuration' },
            ],
            explanation: 'Frameworks provide validated patterns for code reuse, decoupling, state management, and observability—turning best practices into default behavior. They don\'t eliminate understanding or automatically handle all cases, but they prevent common mistakes and speed development.',
            points: 12,
          },
          {
            id: 'q2',
            question: 'In AutoGen v0.7.4, what is the key architectural change compared to earlier versions?',
            options: [
              { id: 'a', text: 'Transition from synchronous to async-first design with layered modules (core + agentchat)', correct: true },
              { id: 'b', text: 'Replacement of AssistantAgent with a new UnifiedAgent class' },
              { id: 'c', text: 'Elimination of UserProxyAgent in favor of direct code execution' },
              { id: 'd', text: 'Introduction of mandatory MCP protocol for all tool calls' },
            ],
            explanation: 'v0.7.4 introduces async/await as default (non-blocking concurrent execution) and splits the framework into autogen-core (LLM + messaging) and autogen-agentchat (high-level APIs). AssistantAgent and UserProxyAgent still exist.',
            points: 15,
          },
          {
            id: 'q3',
            question: 'Why does the AutoGen "Software Development Team" case use UserProxyAgent as the Code Reviewer instead of another AssistantAgent?',
            options: [
              { id: 'a', text: 'UserProxyAgent can execute code and report results, providing real feedback instead of just LLM-generated reviews', correct: true },
              { id: 'b', text: 'AssistantAgent cannot be configured with code review prompts' },
              { id: 'c', text: 'UserProxyAgent is faster at analyzing code than AssistantAgent' },
              { id: 'd', text: 'AutoGen requires at least one UserProxyAgent in every group chat' },
            ],
            explanation: 'UserProxyAgent has code_execution_config that lets it run Python code in a sandbox. This provides REAL execution results (success/errors) rather than simulated reviews. This is critical for validating code actually works, not just theoretically passes review.',
            points: 15,
          },
          {
            id: 'q4',
            question: 'What is the core difference between AgentScope and AutoGen in terms of multi-agent communication?',
            options: [
              { id: 'a', text: 'AutoGen uses sequential round-robin conversation, AgentScope uses asynchronous message passing with MessageHub', correct: true },
              { id: 'b', text: 'AgentScope cannot handle multi-turn conversations' },
              { id: 'c', text: 'AutoGen requires distributed deployment for multi-agent systems' },
              { id: 'd', text: 'AgentScope agents cannot call external tools' },
            ],
            explanation: 'AutoGen\'s RoundRobinGroupChat activates agents sequentially in turn. AgentScope uses a MessageHub where agents send/receive messages asynchronously—more flexible but requires manual orchestration. AgentScope also has built-in distributed deployment support.',
            points: 13,
          },
          {
            id: 'q5',
            question: 'What is "inception prompting" in the CAMEL framework?',
            options: [
              { id: 'a', text: 'A technique to initialize agents with pre-defined conversation history' },
              { id: 'b', text: 'Prompts that inspire autonomous collaboration between role-playing agents without explicit workflow orchestration', correct: true },
              { id: 'c', text: 'A method to reduce token usage by compressing system messages' },
              { id: 'd', text: 'A debugging tool that shows the agent\'s internal reasoning process' },
            ],
            explanation: 'Inception prompting seeds agents with roles (AI Researcher, Programmer) and a shared goal. The prompt structure inspires them to autonomously organize multi-turn dialogue, propose ideas, critique each other—without explicit step-by-step workflow definitions.',
            points: 12,
          },
          {
            id: 'q6',
            question: 'Why is LangGraph uniquely suited for Reflection-based agent patterns compared to AutoGen or AgentScope?',
            options: [
              { id: 'a', text: 'LangGraph has native support for cycles (edges looping back to previous nodes), making iterative refinement natural', correct: true },
              { id: 'b', text: 'LangGraph agents have better LLM reasoning capabilities' },
              { id: 'c', text: 'Reflection patterns are impossible to implement in AutoGen and AgentScope' },
              { id: 'd', text: 'LangGraph automatically generates reflection prompts' },
            ],
            explanation: 'Traditional frameworks use linear chains (A → B → C). LangGraph models workflows as graphs where edges can loop back (Reflect → Generate → Reflect). This native cycle support makes Reflection (iterate until quality threshold) trivial to implement.',
            points: 15,
          },
          {
            id: 'q7',
            question: 'In the LangGraph Reflection example, what determines whether the workflow continues refining or terminates?',
            options: [
              { id: 'a', text: 'The reflection node returns a quality score; a conditional edge checks if score > 0.9 or max iterations reached', correct: true },
              { id: 'b', text: 'The user manually approves each iteration before continuing' },
              { id: 'c', text: 'LangGraph automatically detects when essay quality stops improving' },
              { id: 'd', text: 'The workflow always runs exactly 5 iterations regardless of quality' },
            ],
            explanation: 'The should_continue() function checks state[\'quality_score\'] and state[\'iteration\']. If score > 0.9 OR iteration >= 5, it returns "end" (routes to END). Otherwise returns "generate" (loops back). This is explicit conditional logic, not automatic detection.',
            points: 13,
          },
          {
            id: 'q8',
            question: 'Based on the chapter, which framework should you choose for building a distributed agent system managing 50+ customer service agents across multiple data centers?',
            options: [
              { id: 'a', text: 'AutoGen - its RoundRobinGroupChat can handle large agent counts' },
              { id: 'b', text: 'AgentScope - built-in distributed deployment and enterprise lifecycle management', correct: true },
              { id: 'c', text: 'CAMEL - inception prompting scales to many agents naturally' },
              { id: 'd', text: 'LangGraph - graph structure handles distributed systems better' },
            ],
            explanation: 'AgentScope is explicitly designed for large-scale (10+ agents), distributed deployment with production monitoring. AutoGen lacks distributed support, CAMEL is research-focused (2-agent pairs), and LangGraph doesn\'t inherently support distributed execution. Enterprise scale = AgentScope.',
            points: 15,
          },
        ]}
        passingScore={70}
      />
    ),
  },
]
