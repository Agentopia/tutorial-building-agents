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
                    data: {
                      label: '🌍 Environment',
                      description: 'The external world in which the agent operates (roads, markets, game boards, etc.)'
                    },
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    data: {
                      label: '👁️ Sensors',
                      description: 'Perceive environmental state (cameras, microphones, APIs, data streams)'
                    },
                    position: { x: 100, y: 100 }
                  },
                  {
                    id: '3',
                    data: {
                      label: '🤖 Agent',
                      description: 'Processes perceptions and makes autonomous decisions to achieve goals'
                    },
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: '4',
                    data: {
                      label: '🦾 Actuators',
                      description: 'Execute actions to change environment (robotic arms, code execution, API calls)'
                    },
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
                    data: {
                      label: '1️⃣ Simple Reflex',
                      description: 'Condition-action rules. Example: Thermostat (if temp > threshold, activate cooling)'
                    },
                    position: { x: 50, y: 0 }
                  },
                  {
                    id: '2',
                    data: {
                      label: '2️⃣ Model-Based',
                      description: 'Internal world model + memory. Example: Autonomous car tracking vehicles in tunnel'
                    },
                    position: { x: 50, y: 100 }
                  },
                  {
                    id: '3',
                    data: {
                      label: '3️⃣ Goal-Based',
                      description: 'Plans actions to achieve specific goals. Example: GPS navigation finding optimal route'
                    },
                    position: { x: 50, y: 200 }
                  },
                  {
                    id: '4',
                    data: {
                      label: '4️⃣ Utility-Based',
                      description: 'Maximizes satisfaction across multiple goals. Example: Route that is fast, cheap, and avoids traffic'
                    },
                    position: { x: 50, y: 300 }
                  },
                  {
                    id: '5',
                    data: {
                      label: '5️⃣ Learning Agent',
                      description: 'Learns from experience via reinforcement. Example: AlphaGo Zero learning chess strategies'
                    },
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
                    data: {
                      label: '🏗️ Core Layer',
                      description: 'Foundation: HelloAgentsLLM (multi-provider), Message system, Config, Agent base class, Exception handling'
                    },
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    data: {
                      label: '🤖 Agents Layer',
                      description: 'Implementations: SimpleAgent (basic chat), ReActAgent (reasoning+action), ReflectionAgent (self-critique), PlanSolveAgent (decompose+execute)'
                    },
                    position: { x: 100, y: 120 }
                  },
                  {
                    id: '3',
                    data: {
                      label: '🛠️ Tools Layer',
                      description: 'Tool base class, ToolRegistry, ToolChain manager, AsyncExecutor, Built-in tools (Calculator, Search)'
                    },
                    position: { x: 400, y: 120 }
                  },
                  {
                    id: '4',
                    type: 'output',
                    data: {
                      label: '🎯 Design Philosophy',
                      description: 'Lightweight + Teaching-friendly, Standard APIs, Progressive learning, "Everything is a Tool" abstraction'
                    },
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
                    data: {
                      label: '🔍 Check Specific Keys',
                      description: 'Priority 1: Check MODELSCOPE_API_KEY, OPENAI_API_KEY, ZHIPU_API_KEY in environment'
                    },
                    position: { x: 50, y: 0 }
                  },
                  {
                    id: '2',
                    data: {
                      label: '🌐 Parse base_url',
                      description: 'Priority 2: Check LLM_BASE_URL for domains (api-inference.modelscope.cn) or ports (:11434 for Ollama, :8000 for VLLM)'
                    },
                    position: { x: 50, y: 120 }
                  },
                  {
                    id: '3',
                    data: {
                      label: '🔑 Analyze Key Format',
                      description: 'Priority 3: Check LLM_API_KEY format (e.g., "ms-" prefix for ModelScope)'
                    },
                    position: { x: 50, y: 240 }
                  },
                  {
                    id: '4',
                    type: 'output',
                    data: {
                      label: '✅ Provider Detected',
                      description: 'Auto-configures base_url, api_key, and default model for selected provider'
                    },
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
                    data: {
                      label: '📝 User Query',
                      description: 'The initial question or task from the user'
                    },
                    position: { x: 250, y: 0 }
                  },
                  {
                    id: '2',
                    data: {
                      label: '🤔 Reasoning',
                      description: 'LLM analyzes the query and plans the next action using chain-of-thought reasoning'
                    },
                    position: { x: 250, y: 100 }
                  },
                  {
                    id: '3',
                    data: {
                      label: '⚡ Action Selection',
                      description: 'Agent decides which tool to use or whether to provide final answer'
                    },
                    position: { x: 250, y: 200 }
                  },
                  {
                    id: '4',
                    data: {
                      label: '🛠️ Tool Execution',
                      description: 'Execute the selected tool (search, calculator, API call, etc.)'
                    },
                    position: { x: 100, y: 300 }
                  },
                  {
                    id: '5',
                    data: {
                      label: '📊 Observation',
                      description: 'Receive and process the tool output or result'
                    },
                    position: { x: 250, y: 400 }
                  },
                  {
                    id: '6',
                    type: 'output',
                    data: {
                      label: '✅ Final Answer',
                      description: 'Agent provides the final response to the user'
                    },
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
