import { Slide } from '@/components/SlideView'
import CodePlayground from '@/components/CodePlayground'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import Quiz from '@/components/Quiz'

export const chapter4Slides: Slide[] = [
  // Slide 1: Title
  {
    id: 'ch4-slide-1',
    title: 'Chapter 4 - Building Classic Agent Paradigms',
    type: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-black mb-4">
            Chapter 4
          </h1>
          <h2 className="text-3xl font-semibold text-black mb-6">
            Building Classic Agent Paradigms
          </h2>
          <p className="text-lg text-blue-700 font-semibold">
            From Theory to Practice: ReAct, Plan-and-Solve, Reflection
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-semibold text-black mb-2">ReAct</h3>
            <p className="text-sm text-black">Dynamic reasoning + acting loop</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold text-black mb-2">Plan-and-Solve</h3>
            <p className="text-sm text-black">Plan first, execute second</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-semibold text-black mb-2">Reflection</h3>
            <p className="text-sm text-black">Self-critique and iterative refinement</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: Learning Objectives
  {
    id: 'ch4-slide-2',
    title: 'Learning Objectives',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">What You'll Learn</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Core Paradigms</h3>
                <p className="text-sm text-black">Master three classic agent architectures: ReAct, Plan-and-Solve, and Reflection</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-2xl">🛠️</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Hands-On Implementation</h3>
                <p className="text-sm text-black">Build agents from scratch using Python and OpenAI API</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-2xl">🔧</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Tool Integration</h3>
                <p className="text-sm text-black">Design and implement external tools (search, calculator, APIs)</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Design Principles</h3>
                <p className="text-sm text-black">Understand when to use each paradigm and their trade-offs</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-2xl">🐛</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Debugging Techniques</h3>
                <p className="text-sm text-black">Learn strategies for debugging and improving agent behavior</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-2xl">⚖️</div>
              <div>
                <h3 className="font-semibold text-black mb-1">Cost-Benefit Analysis</h3>
                <p className="text-sm text-black">Evaluate performance, cost, and quality trade-offs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-black">
            <strong>Why build from scratch?</strong> Understanding underlying mechanisms is crucial for becoming an agent creator, not just a framework user.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 3: Why Build From Scratch?
  {
    id: 'ch4-slide-3',
    title: 'Why "Reinvent the Wheel"?',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">The Value of Building From Scratch</h2>

        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
              <span className="text-xl">🧠</span> Deep Understanding
            </h3>
            <p className="text-black">
              Mature frameworks like LangChain abstract away complexity. Building from scratch reveals how prompt engineering,
              output parsing, and tool orchestration actually work under the hood.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
              <span className="text-xl">⚠️</span> Engineering Challenges
            </h3>
            <p className="text-black">
              Frameworks handle critical issues like format parsing, retry logic, and infinite loop prevention.
              Solving these firsthand develops system design skills you won't get from using high-level abstractions.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
              <span className="text-xl">🎨</span> Creator Mindset
            </h3>
            <p className="text-black">
              Mastering design principles transforms you from a framework <em>user</em> to an intelligent application <em>creator</em>.
              When standard components don't fit, you'll know how to build custom solutions.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-300">
          <p className="text-sm text-black">
            <strong>💡 Learning Path:</strong> After mastering these fundamentals, you'll appreciate frameworks like LangChain and
            LlamaIndex for what they are: powerful productivity multipliers built on these core concepts.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 4: Environment Setup
  {
    id: 'ch4-slide-4',
    title: 'Environment Setup',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Getting Started</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-black mb-3">1. Install Dependencies</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div className="text-green-400"># Python 3.10+ required</div>
              <div className="mt-2">pip install openai python-dotenv</div>
              <div className="mt-2 text-green-400"># For search functionality</div>
              <div>pip install google-search-results</div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-3">2. Configure API Keys</h3>
            <p className="text-black mb-2">Create a <code className="bg-gray-200 px-2 py-1 rounded">.env</code> file in your project root:</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-400"># .env file</div>
              <div className="mt-2">LLM_API_KEY=<span className="text-yellow-300">"YOUR-API-KEY"</span></div>
              <div>LLM_MODEL_ID=<span className="text-yellow-300">"YOUR-MODEL"</span></div>
              <div>LLM_BASE_URL=<span className="text-yellow-300">"YOUR-URL"</span></div>
              <div className="mt-2">SERPAPI_API_KEY=<span className="text-yellow-300">"YOUR-SERPAPI-KEY"</span></div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-3">3. HelloAgentsLLM Client</h3>
            <p className="text-black">
              We'll use a custom LLM client class that wraps the OpenAI API with streaming support and environment variable configuration.
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-black">
            <strong>📖 Reference:</strong> Full setup guide in Section 4.1 of the textbook
          </p>
        </div>
      </div>
    ),
  },

  // Slide 5: ReAct Introduction
  {
    id: 'ch4-slide-5',
    title: 'ReAct: Reasoning and Acting',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">
          ReAct (Reason + Act)
        </h2>

        <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-black italic">
            "Thinking and acting are complementary. Thinking guides action, while action results correct thinking."
          </p>
          <p className="text-sm text-black mt-2">— Shunyu Yao et al., 2022</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-black mb-3">Before ReAct</h3>
            <div className="space-y-2">
              <div className="p-3 bg-gray-100 rounded border-l-4 border-gray-400">
                <div className="font-semibold text-black">Pure Thinking (CoT)</div>
                <p className="text-sm text-black">Complex reasoning but no external interaction → hallucinations</p>
              </div>
              <div className="p-3 bg-gray-100 rounded border-l-4 border-gray-400">
                <div className="font-semibold text-black">Pure Action</div>
                <p className="text-sm text-black">Direct tool calls but no planning → trial-and-error inefficiency</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-3">ReAct Innovation</h3>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-300">
              <div className="font-semibold text-black mb-2">Synergistic Loop</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">Thought:</span>
                  <span className="text-black">Analyze, plan, reflect</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">Action:</span>
                  <span className="text-black">Execute tool calls</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">Observation:</span>
                  <span className="text-black">External results feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold text-black mb-3">Ideal Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <div className="text-xl mb-1">🔍</div>
              <div className="text-sm font-semibold text-black">External Knowledge</div>
              <div className="text-xs text-black">Real-time search, news, weather</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <div className="text-xl mb-1">🧮</div>
              <div className="text-sm font-semibold text-black">Precise Calculations</div>
              <div className="text-xs text-black">Delegating math to calculator tools</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <div className="text-xl mb-1">🔌</div>
              <div className="text-sm font-semibold text-black">API Interactions</div>
              <div className="text-xs text-black">Database queries, service calls</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 6: ReAct Workflow Diagram
  {
    id: 'ch4-slide-6',
    title: 'ReAct Workflow',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Think-Act-Observe Loop</h2>

        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 50, y: 50 },
              data: {
                label: 'Question',
                description: 'User asks: "What is Huawei\'s latest phone?"',
                emoji: '❓',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 250, y: 50 },
              data: {
                label: 'Thought',
                description: 'LLM analyzes: "I need to search for recent Huawei phone releases"',
                emoji: '🧠',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 450, y: 50 },
              data: {
                label: 'Action',
                description: 'Execute: Search["Huawei latest phone 2025"]',
                emoji: '🎬',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 450, y: 200 },
              data: {
                label: 'Observation',
                description: 'Tool returns: "HUAWEI Mate 70 and Pura 80 Pro+ are latest models..."',
                emoji: '👀',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 250, y: 200 },
              data: {
                label: 'Thought',
                description: 'LLM reflects: "I have enough info to answer now"',
                emoji: '💭',
              },
            },
            {
              id: '6',
              type: 'custom',
              position: { x: 50, y: 200 },
              data: {
                label: 'Finish',
                description: 'Final answer: "Latest phones are Mate 70 and Pura 80 Pro+..."',
                emoji: '🎉',
              },
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', animated: true },
            { id: 'e2-3', source: '2', target: '3', animated: true },
            { id: 'e3-4', source: '3', target: '4', animated: true },
            { id: 'e4-5', source: '4', target: '5', animated: true },
            { id: 'e5-6', source: '5', target: '6', animated: true },
          ]}
          title="ReAct Loop Execution"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-black mb-2">Formula</h3>
            <div className="bg-white p-3 rounded border text-sm font-mono">
              (th<sub>t</sub>, a<sub>t</sub>) = π(q, (a<sub>1</sub>, o<sub>1</sub>), ..., (a<sub>t-1</sub>, o<sub>t-1</sub>))
              <div className="mt-2">o<sub>t</sub> = T(a<sub>t</sub>)</div>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-black mb-2">Key Feature</h3>
            <p className="text-sm text-black">
              <strong>Dynamic Adjustment:</strong> Each observation updates context, allowing the agent to
              course-correct in real-time based on tool results.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 7: Tool Definition Principles
  {
    id: 'ch4-slide-7',
    title: 'Designing Tools for Agents',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Tool Definition Principles</h2>

        <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
          <p className="text-black">
            <strong>If LLMs are the brain, tools are the "hands and feet" for interacting with the external world.</strong>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-black mb-3">Three Core Elements</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-2xl">🏷️</div>
                <div className="flex-1">
                  <div className="font-semibold text-black">1. Name</div>
                  <p className="text-sm text-black">Concise identifier (e.g., <code className="bg-gray-100 px-1">Search</code>, <code className="bg-gray-100 px-1">Calculate</code>)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-2xl">📝</div>
                <div className="flex-1">
                  <div className="font-semibold text-black">2. Description</div>
                  <p className="text-sm text-black">
                    <strong className="text-red-600">Most critical!</strong> LLM relies on this to decide <em>when</em> to use the tool
                  </p>
                  <div className="mt-2 bg-gray-50 p-2 rounded text-xs font-mono text-black">
                    "A web search engine. Use when you need current events, facts, or information beyond your knowledge base."
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <div className="text-2xl">⚙️</div>
                <div className="flex-1">
                  <div className="font-semibold text-black">3. Execution Logic</div>
                  <p className="text-sm text-black">Function/method that performs the task (e.g., call SerpApi, run calculation)</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-3">Example: Search Tool</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <div><span className="text-purple-400">def</span> <span className="text-blue-400">search</span>(query: <span className="text-green-400">str</span>) -&gt; <span className="text-green-400">str</span>:</div>
              <div className="ml-4 text-gray-400">"""Uses SerpApi to fetch Google search results."""</div>
              <div className="ml-4">client = SerpApiClient(params)</div>
              <div className="ml-4">results = client.get_dict()</div>
              <div className="ml-4"><span className="text-purple-400">return</span> parse_results(results)</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 8: ReAct Code Playground
  {
    id: 'ch4-slide-8',
    title: 'ReAct: Interactive Implementation',
    type: 'interactive',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-black mb-4">Try It Yourself: ReAct Agent</h2>

        <p className="text-black mb-4">
          Explore a simplified ReAct agent implementation. This example shows the core loop structure:
        </p>

        <CodePlayground
          template="vanilla"
          files={{
            '/index.js': {
              code: `// Simplified ReAct Agent Structure
class ReActAgent {
  constructor(llmClient, toolExecutor, maxSteps = 5) {
    this.llm = llmClient;
    this.tools = toolExecutor;
    this.maxSteps = maxSteps;
    this.history = [];
  }

  async run(question) {
    console.log("🎯 Question:", question);

    for (let step = 1; step <= this.maxSteps; step++) {
      console.log(\`\\n--- Step \${step} ---\`);

      // 1. Build prompt with history
      const prompt = this.buildPrompt(question);

      // 2. Get LLM response
      const response = await this.llm.think(prompt);

      // 3. Parse Thought and Action
      const { thought, action } = this.parseOutput(response);
      console.log("💭 Thought:", thought);

      // 4. Check if finished
      if (action.startsWith("Finish")) {
        const answer = this.extractAnswer(action);
        console.log("✅ Final Answer:", answer);
        return answer;
      }

      // 5. Execute tool
      const { toolName, toolInput } = this.parseAction(action);
      console.log(\`🔧 Action: \${toolName}[\${toolInput}]\`);

      const observation = await this.tools.execute(toolName, toolInput);
      console.log("👀 Observation:", observation);

      // 6. Update history for next iteration
      this.history.push(\`Action: \${action}\`);
      this.history.push(\`Observation: \${observation}\`);
    }

    console.log("⚠️ Max steps reached");
    return null;
  }

  buildPrompt(question) {
    const tools = this.tools.getDescription();
    const history = this.history.join("\\n");
    return \`You are an agent with these tools:\\n\${tools}\\n\\nQuestion: \${question}\\nHistory: \${history}\\n\\nThought:\`;
  }

  parseOutput(text) {
    // Regex to extract Thought and Action
    const thoughtMatch = text.match(/Thought: (.*)/);
    const actionMatch = text.match(/Action: (.*)/);
    return {
      thought: thoughtMatch ? thoughtMatch[1] : null,
      action: actionMatch ? actionMatch[1] : null
    };
  }

  parseAction(actionText) {
    const match = actionText.match(/(\\w+)\\[(.*)\\]/);
    return {
      toolName: match ? match[1] : null,
      toolInput: match ? match[2] : null
    };
  }

  extractAnswer(finishAction) {
    const match = finishAction.match(/Finish\\[(.*)\\]/);
    return match ? match[1] : null;
  }
}

// Demo usage
console.log("ReAct Agent Structure Demo");
console.log("Key methods:");
console.log("- run(): Main loop");
console.log("- buildPrompt(): Context assembly");
console.log("- parseOutput(): Extract Thought/Action");
console.log("- parseAction(): Parse tool calls");`,
            },
          }}
        />

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-black">
            <strong>📖 Full Implementation:</strong> See <code>code/chapter4/ReAct.py</code> for production-ready version with error handling
          </p>
        </div>
      </div>
    ),
  },

  // Slide 9: ReAct Characteristics and Limitations
  {
    id: 'ch4-slide-9',
    title: 'ReAct: Strengths and Weaknesses',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Evaluating ReAct</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Strengths</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-black mb-1">High Interpretability</div>
                <p className="text-sm text-black">Thought chain reveals decision-making process at each step</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-black mb-1">Dynamic Error Correction</div>
                <p className="text-sm text-black">Can adjust strategy based on observation feedback</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-black mb-1">Tool Synergy</div>
                <p className="text-sm text-black">LLM reasoning + external tools = breaking knowledge boundaries</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-3">⚠️ Limitations</h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-black mb-1">LLM Dependency</div>
                <p className="text-sm text-black">Success tied to model's reasoning and format-following ability</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-black mb-1">Execution Efficiency</div>
                <p className="text-sm text-black">Multiple serial LLM calls → high latency and cost</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-black mb-1">Prompt Fragility</div>
                <p className="text-sm text-black">Small template changes can break output format consistency</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-black mb-1">Local Optima</div>
                <p className="text-sm text-black">Step-by-step decisions lack global planning, may loop</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black mb-3">Debugging Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
              <div className="text-sm font-semibold text-black">Print Full Prompts</div>
              <p className="text-xs text-black">Inspect complete context sent to LLM at each step</p>
            </div>
            <div className="p-3 bg-gray-50 rounded border-l-4 border-purple-500">
              <div className="text-sm font-semibold text-black">Analyze Raw Output</div>
              <p className="text-xs text-black">Check if LLM follows format before blaming parser</p>
            </div>
            <div className="p-3 bg-gray-50 rounded border-l-4 border-green-500">
              <div className="text-sm font-semibold text-black">Few-Shot Examples</div>
              <p className="text-xs text-black">Add sample Thought-Action-Observation cases to prompt</p>
            </div>
            <div className="p-3 bg-gray-50 rounded border-l-4 border-orange-500">
              <div className="text-sm font-semibold text-black">Adjust Temperature</div>
              <p className="text-xs text-black">Set to 0 for deterministic outputs during debugging</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 10: Plan-and-Solve Introduction
  {
    id: 'ch4-slide-10',
    title: 'Plan-and-Solve: Think Before You Act',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Plan-and-Solve Paradigm</h2>

        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
          <p className="text-black italic">
            "If ReAct is a detective adjusting strategy as clues emerge, Plan-and-Solve is an architect who
            draws the complete blueprint before construction begins."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-black mb-3">Motivation</h3>
            <p className="text-black mb-3">
              Chain-of-thought reasoning can "go off track" in multi-step complex problems.
              Plan-and-Solve addresses this by <strong>decoupling planning from execution</strong>.
            </p>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-sm text-black space-y-2">
                <div><strong>Problem:</strong> CoT mixes thinking and acting → easy to drift</div>
                <div><strong>Solution:</strong> Generate complete plan first, then execute strictly</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-3">Two-Phase Architecture</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
                <div className="font-bold text-black mb-1">Phase 1: Planning</div>
                <p className="text-sm text-black">Decompose problem into step-by-step action plan</p>
                <div className="text-xs font-mono bg-white mt-2 p-2 rounded text-black">
                  P = π<sub>plan</sub>(q)
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                <div className="font-bold text-black mb-1">Phase 2: Solving</div>
                <p className="text-sm text-black">Execute plan steps sequentially with state tracking</p>
                <div className="text-xs font-mono bg-white mt-2 p-2 rounded text-black">
                  s<sub>i</sub> = π<sub>solve</sub>(q, P, (s<sub>1</sub>, ..., s<sub>i-1</sub>))
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black mb-3">Ideal Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <div className="text-xl mb-1">🧮</div>
              <div className="text-sm font-semibold text-black">Multi-Step Math</div>
              <div className="text-xs text-black">Word problems with clear logical sequence</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <div className="text-xl mb-1">📊</div>
              <div className="text-sm font-semibold text-black">Report Generation</div>
              <div className="text-xs text-black">Structured documents with defined sections</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <div className="text-xl mb-1">💻</div>
              <div className="text-sm font-semibold text-black">Code Generation</div>
              <div className="text-xs text-black">Design architecture, then implement modules</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 11: Plan-and-Solve Workflow Diagram
  {
    id: 'ch4-slide-11',
    title: 'Plan-and-Solve Workflow',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Two-Phase Execution</h2>

        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 150, y: 50 },
              data: {
                label: 'Question',
                description: 'Math word problem: "A store sold 15 apples Monday, Tuesday was 2x Monday, Wednesday was Tuesday - 5. Total?"',
                emoji: '❓',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 150, y: 180 },
              data: {
                label: 'Planner',
                description: 'Generate complete plan: ["Calculate Monday: 15", "Calculate Tuesday: 15×2=30", "Calculate Wed: 30-5=25", "Sum: 15+30+25"]',
                emoji: '📋',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 400, y: 180 },
              data: {
                label: 'Step 1 Execute',
                description: 'Executor: Monday = 15',
                emoji: '1️⃣',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 400, y: 280 },
              data: {
                label: 'Step 2 Execute',
                description: 'Executor: Tuesday = 30',
                emoji: '2️⃣',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 400, y: 380 },
              data: {
                label: 'Step 3 Execute',
                description: 'Executor: Wednesday = 25',
                emoji: '3️⃣',
              },
            },
            {
              id: '6',
              type: 'custom',
              position: { x: 150, y: 380 },
              data: {
                label: 'Final Answer',
                description: 'Total = 70 apples',
                emoji: '✅',
              },
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Plan' },
            { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Execute' },
            { id: 'e3-4', source: '3', target: '4', animated: true },
            { id: 'e4-5', source: '4', target: '5', animated: true },
            { id: 'e5-6', source: '5', target: '6', animated: true },
          ]}
          title="Plan-and-Solve Execution Flow"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-black mb-2">Planning Phase</h3>
            <ul className="text-sm text-black space-y-1">
              <li>• Decompose problem into logical steps</li>
              <li>• Output structured plan (Python list format)</li>
              <li>• No execution yet—pure planning</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-black mb-2">Execution Phase</h3>
            <ul className="text-sm text-black space-y-1">
              <li>• Execute each step sequentially</li>
              <li>• Maintain state (history of results)</li>
              <li>• Each step uses previous results as context</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 12: Plan-and-Solve Code Playground
  {
    id: 'ch4-slide-12',
    title: 'Plan-and-Solve: Interactive Demo',
    type: 'interactive',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-black mb-4">Try It: Plan-and-Solve Agent</h2>

        <p className="text-black mb-4">
          Explore the two-phase architecture with this simplified implementation:
        </p>

        <CodePlayground
          template="vanilla"
          files={{
            '/index.js': {
              code: `// Plan-and-Solve Agent Structure
class Planner {
  constructor(llm) {
    this.llm = llm;
  }

  async plan(question) {
    const prompt = \`You are a planning expert. Decompose this problem into steps:

Question: \${question}

Output format:
\\\`\\\`\\\`python
["Step 1", "Step 2", "Step 3"]
\\\`\\\`\\\`\`;

    const response = await this.llm.think(prompt);

    // Parse Python list from response
    const match = response.match(/\\\`\\\`\\\`python([\\s\\S]*?)\\\`\\\`\\\`/);
    if (match) {
      const planStr = match[1].trim();
      return JSON.parse(planStr.replace(/'/g, '"'));
    }
    return [];
  }
}

class Executor {
  constructor(llm) {
    this.llm = llm;
  }

  async execute(question, plan) {
    let history = "";
    let finalAnswer = null;

    for (let i = 0; i < plan.length; i++) {
      const step = plan[i];
      console.log(\`\\nExecuting Step \${i+1}/\${plan.length}: \${step}\`);

      const prompt = \`You are an execution expert. Solve this step:

Original Question: \${question}
Complete Plan: \${JSON.stringify(plan)}
History: \${history || "None"}
Current Step: \${step}

Output only the answer for this step:\`;

      const result = await this.llm.think(prompt);
      console.log(\`Result: \${result}\`);

      // Update history for next step
      history += \`Step \${i+1}: \${step}\\nResult: \${result}\\n\\n\`;
      finalAnswer = result;
    }

    return finalAnswer;
  }
}

class PlanAndSolveAgent {
  constructor(llm) {
    this.planner = new Planner(llm);
    this.executor = new Executor(llm);
  }

  async run(question) {
    console.log("Question:", question);

    // Phase 1: Planning
    console.log("\\n--- Planning Phase ---");
    const plan = await this.planner.plan(question);
    console.log("Generated Plan:", plan);

    if (plan.length === 0) {
      console.log("Failed to generate plan");
      return null;
    }

    // Phase 2: Execution
    console.log("\\n--- Execution Phase ---");
    const answer = await this.executor.execute(question, plan);

    console.log("\\n--- Final Answer ---");
    console.log(answer);
    return answer;
  }
}

// Demo
console.log("Plan-and-Solve Structure Demo");
console.log("\\nKey components:");
console.log("- Planner: Decomposes problem");
console.log("- Executor: Runs each step with state");
console.log("- PlanAndSolveAgent: Orchestrates both phases");`,
            },
          }}
        />

        <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-sm text-black">
            <strong>📖 Full Code:</strong> See <code>code/chapter4/PlanAndSolve.py</code> for complete implementation
          </p>
        </div>
      </div>
    ),
  },

  // Slide 13: Reflection Introduction
  {
    id: 'ch4-slide-13',
    title: 'Reflection: Self-Critique and Refinement',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">The Reflection Mechanism</h2>

        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
          <p className="text-black italic">
            "Just as humans proofread drafts and verify solutions, agents should review their work,
            identify flaws, and iteratively improve."
          </p>
          <p className="text-sm text-black mt-2">— Inspired by Reflexion (Shinn et al., 2023)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-black mb-3">Core Innovation</h3>
            <p className="text-black mb-4">
              Both ReAct and Plan-and-Solve produce a "first draft" and stop. Reflection adds a
              <strong> post-hoc self-correction loop</strong> to iteratively optimize quality.
            </p>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-black mb-2">Three-Step Loop</div>
              <div className="space-y-2 text-sm text-black">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">1. Execute</span>
                  <span>→ Generate initial solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">2. Reflect</span>
                  <span>→ Critique for errors/improvements</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">3. Refine</span>
                  <span>→ Revise based on feedback</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-3">What Gets Reflected?</h3>
            <div className="space-y-2">
              <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                <div className="text-sm font-semibold text-black">Factual Errors</div>
                <p className="text-xs text-black">Contradicts common sense or known facts</p>
              </div>
              <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-400">
                <div className="text-sm font-semibold text-black">Logical Flaws</div>
                <p className="text-xs text-black">Inconsistent reasoning or contradictions</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                <div className="text-sm font-semibold text-black">Efficiency Issues</div>
                <p className="text-xs text-black">Suboptimal algorithm or approach</p>
              </div>
              <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                <div className="text-sm font-semibold text-black">Missing Information</div>
                <p className="text-xs text-black">Overlooked constraints or edge cases</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div className="text-xl mb-1">🧠</div>
            <div className="text-sm font-semibold text-black">Internal Error Correction</div>
            <p className="text-xs text-black">Unlike ReAct's external feedback, Reflection critiques logic itself</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div className="text-xl mb-1">📈</div>
            <div className="text-sm font-semibold text-black">Quality Leap</div>
            <p className="text-xs text-black">From "functionally correct" to "algorithmically optimal"</p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-gray-200">
            <div className="text-xl mb-1">💾</div>
            <div className="text-sm font-semibold text-black">Short-Term Memory</div>
            <p className="text-xs text-black">Entire trajectory becomes valuable experience record</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 14: Reflection Workflow
  {
    id: 'ch4-slide-14',
    title: 'Reflection: Execute-Reflect-Refine Loop',
    type: 'visual',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Iterative Optimization</h2>

        <AgentFlowDiagram
          nodes={[
            {
              id: '1',
              type: 'custom',
              position: { x: 50, y: 100 },
              data: {
                label: 'Task',
                description: 'Write Python function to find primes 1 to n',
                emoji: '📝',
              },
            },
            {
              id: '2',
              type: 'custom',
              position: { x: 250, y: 50 },
              data: {
                label: 'Execute',
                description: 'Generate initial code (simple trial division)',
                emoji: '⚡',
              },
            },
            {
              id: '3',
              type: 'custom',
              position: { x: 450, y: 50 },
              data: {
                label: 'Reflect',
                description: 'Critique: "O(n√n) is slow, use Sieve of Eratosthenes"',
                emoji: '🔍',
              },
            },
            {
              id: '4',
              type: 'custom',
              position: { x: 450, y: 180 },
              data: {
                label: 'Refine',
                description: 'Revise code with sieve algorithm O(n log log n)',
                emoji: '✨',
              },
            },
            {
              id: '5',
              type: 'custom',
              position: { x: 250, y: 180 },
              data: {
                label: 'Reflect Again',
                description: 'Review: "Sieve is optimal, no improvement needed"',
                emoji: '✅',
              },
            },
            {
              id: '6',
              type: 'custom',
              position: { x: 50, y: 180 },
              data: {
                label: 'Final Code',
                description: 'Optimized solution ready for production',
                emoji: '🎉',
              },
            },
          ]}
          edges={[
            { id: 'e1-2', source: '1', target: '2', animated: true },
            { id: 'e2-3', source: '2', target: '3', animated: true },
            { id: 'e3-4', source: '3', target: '4', animated: true, label: 'Feedback' },
            { id: 'e4-5', source: '4', target: '5', animated: true },
            { id: 'e5-6', source: '5', target: '6', animated: true, label: 'Converge' },
          ]}
          title="Reflection Iterative Loop"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-black mb-2">Formula</h3>
            <div className="bg-white p-3 rounded border text-sm">
              <div className="font-mono text-black">F<sub>i</sub> = π<sub>reflect</sub>(Task, O<sub>i</sub>)</div>
              <div className="font-mono text-black mt-2">O<sub>i+1</sub> = π<sub>refine</sub>(Task, O<sub>i</sub>, F<sub>i</sub>)</div>
            </div>
            <p className="text-xs text-black mt-2">Iterate until "no improvement needed" or max iterations</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-black mb-2">Memory Module</h3>
            <p className="text-sm text-black">
              Stores complete trajectory: execution attempts + reflection feedback.
              Enables context-aware refinement at each iteration.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 15: Reflection Code Playground
  {
    id: 'ch4-slide-15',
    title: 'Reflection: Interactive Implementation',
    type: 'interactive',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-black mb-4">Try It: Reflection Agent</h2>

        <p className="text-black mb-4">
          Explore how the Reflection mechanism drives iterative improvement:
        </p>

        <CodePlayground
          template="vanilla"
          files={{
            '/index.js': {
              code: `// Reflection Agent Structure
class Memory {
  constructor() {
    this.records = [];
  }

  addRecord(type, content) {
    this.records.push({ type, content });
    console.log(\`📝 Memory: Added \${type} record\`);
  }

  getTrajectory() {
    return this.records.map(r =>
      r.type === 'execution'
        ? \`--- Previous Code ---\\n\${r.content}\`
        : \`--- Feedback ---\\n\${r.content}\`
    ).join('\\n\\n');
  }

  getLastExecution() {
    for (let i = this.records.length - 1; i >= 0; i--) {
      if (this.records[i].type === 'execution') {
        return this.records[i].content;
      }
    }
    return null;
  }
}

class ReflectionAgent {
  constructor(llm, maxIterations = 3) {
    this.llm = llm;
    this.memory = new Memory();
    this.maxIterations = maxIterations;
  }

  async run(task) {
    console.log("Task:", task);

    // 1. Initial execution
    console.log("\\n--- Initial Attempt ---");
    const initialCode = await this.execute(task);
    this.memory.addRecord('execution', initialCode);

    // 2. Iterative reflection and refinement
    for (let i = 1; i <= this.maxIterations; i++) {
      console.log(\`\\n--- Iteration \${i}/\${this.maxIterations} ---\`);

      // a. Reflect on last execution
      const lastCode = this.memory.getLastExecution();
      const feedback = await this.reflect(task, lastCode);
      this.memory.addRecord('reflection', feedback);

      // b. Check termination
      if (feedback.toLowerCase().includes('no improvement needed')) {
        console.log("✅ Reflection complete, code optimal");
        break;
      }

      // c. Refine based on feedback
      const refinedCode = await this.refine(task, lastCode, feedback);
      this.memory.addRecord('execution', refinedCode);
    }

    const finalCode = this.memory.getLastExecution();
    console.log("\\n--- Final Code ---");
    console.log(finalCode);
    return finalCode;
  }

  async execute(task) {
    const prompt = \`Write Python code for: \${task}\`;
    return await this.llm.think(prompt);
  }

  async reflect(task, code) {
    const prompt = \`You are a strict code reviewer. Analyze this code for \${task}:

\\\`\\\`\\\`python
\${code}
\\\`\\\`\\\`

Focus on algorithm efficiency. Suggest improvements or respond "no improvement needed".\`;
    return await this.llm.think(prompt);
  }

  async refine(task, oldCode, feedback) {
    const prompt = \`Optimize this code based on feedback:

Task: \${task}
Previous Code: \${oldCode}
Feedback: \${feedback}

Output improved code:\`;
    return await this.llm.think(prompt);
  }
}

// Demo
console.log("Reflection Agent Structure Demo");
console.log("\\nKey components:");
console.log("- Memory: Stores execution + reflection trajectory");
console.log("- execute(): Generate initial solution");
console.log("- reflect(): Critique current solution");
console.log("- refine(): Improve based on feedback");`,
            },
          }}
        />

        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-black">
            <strong>📖 Full Example:</strong> See <code>code/chapter4/Reflection.py</code> for production implementation
          </p>
        </div>
      </div>
    ),
  },

  // Slide 16: Reflection Cost-Benefit
  {
    id: 'ch4-slide-16',
    title: 'Reflection: Cost-Benefit Analysis',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">When to Use Reflection?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-3">💰 Costs</h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-black mb-1">Model Call Overhead</div>
                <p className="text-sm text-black">Each iteration = 2+ LLM calls (reflect + refine). Exponential cost scaling.</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-black mb-1">Increased Latency</div>
                <p className="text-sm text-black">Serial process: must wait for each reflection. Unsuitable for real-time.</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="font-semibold text-black mb-1">Prompt Complexity</div>
                <p className="text-sm text-black">Requires separate prompts for execution, reflection, refinement stages.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Benefits</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-black mb-1">Quality Leap</div>
                <p className="text-sm text-black">From "qualified" to "excellent" solutions. Performance-efficient algorithms.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-black mb-1">Enhanced Robustness</div>
                <p className="text-sm text-black">Self-correction catches logical flaws, edge cases, factual errors.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="font-semibold text-black mb-1">Reliability</div>
                <p className="text-sm text-black">Critical business code, technical reports, research decisions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black mb-3">Decision Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left text-black">Scenario</th>
                  <th className="border border-gray-300 p-2 text-center text-black">Use Reflection?</th>
                  <th className="border border-gray-300 p-2 text-left text-black">Reason</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 p-2 text-black">Critical business code generation</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600 font-bold">✅ Yes</td>
                  <td className="border border-gray-300 p-2 text-black">Quality &gt; cost/latency</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 text-black">Chatbot quick responses</td>
                  <td className="border border-gray-300 p-2 text-center text-red-600 font-bold">❌ No</td>
                  <td className="border border-gray-300 p-2 text-black">Real-time requirement</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-black">Scientific research analysis</td>
                  <td className="border border-gray-300 p-2 text-center text-green-600 font-bold">✅ Yes</td>
                  <td className="border border-gray-300 p-2 text-black">Accuracy critical</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2 text-black">Simple FAQ lookup</td>
                  <td className="border border-gray-300 p-2 text-center text-red-600 font-bold">❌ No</td>
                  <td className="border border-gray-300 p-2 text-black">"Good enough" suffices</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-black">
            <strong>Rule of Thumb:</strong> Use Reflection when quality/accuracy requirements outweigh cost/latency constraints.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 17: Paradigm Comparison
  {
    id: 'ch4-slide-17',
    title: 'Choosing the Right Paradigm',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Paradigm Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-cyan-100">
                <th className="border border-gray-300 p-3 text-left text-black">Dimension</th>
                <th className="border border-gray-300 p-3 text-left text-black">ReAct</th>
                <th className="border border-gray-300 p-3 text-left text-black">Plan-and-Solve</th>
                <th className="border border-gray-300 p-3 text-left text-black">Reflection</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-semibold text-black">Core Strategy</td>
                <td className="border border-gray-300 p-3 text-black">Think-Act-Observe loop</td>
                <td className="border border-gray-300 p-3 text-black">Plan first, execute second</td>
                <td className="border border-gray-300 p-3 text-black">Execute-Reflect-Refine</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold text-black">Planning Style</td>
                <td className="border border-gray-300 p-3 text-black">Dynamic, step-by-step</td>
                <td className="border border-gray-300 p-3 text-black">Complete upfront plan</td>
                <td className="border border-gray-300 p-3 text-black">Iterative refinement</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-semibold text-black">Adaptability</td>
                <td className="border border-gray-300 p-3 text-green-600">⭐⭐⭐ High</td>
                <td className="border border-gray-300 p-3 text-orange-600">⭐⭐ Medium</td>
                <td className="border border-gray-300 p-3 text-blue-600">⭐⭐⭐ High (via reflection)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold text-black">Efficiency</td>
                <td className="border border-gray-300 p-3 text-orange-600">Medium (multiple calls)</td>
                <td className="border border-gray-300 p-3 text-green-600">Good (structured)</td>
                <td className="border border-gray-300 p-3 text-red-600">Low (iterative overhead)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-semibold text-black">Output Quality</td>
                <td className="border border-gray-300 p-3 text-black">Good</td>
                <td className="border border-gray-300 p-3 text-black">Good</td>
                <td className="border border-gray-300 p-3 text-green-600">⭐ Excellent</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold text-black">Best For</td>
                <td className="border border-gray-300 p-3 text-black">Exploratory tasks, tool-heavy</td>
                <td className="border border-gray-300 p-3 text-black">Structured, multi-step reasoning</td>
                <td className="border border-gray-300 p-3 text-black">Critical quality requirements</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-semibold text-black">Example Use Case</td>
                <td className="border border-gray-300 p-3 text-black">Web search + summarization</td>
                <td className="border border-gray-300 p-3 text-black">Math word problems</td>
                <td className="border border-gray-300 p-3 text-black">Code optimization</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3 font-semibold text-black">Main Limitation</td>
                <td className="border border-gray-300 p-3 text-black">May loop or drift</td>
                <td className="border border-gray-300 p-3 text-black">Rigid plan execution</td>
                <td className="border border-gray-300 p-3 text-black">High cost &amp; latency</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-black mb-2">💡 Hybrid Approach</h3>
            <p className="text-sm text-black">
              These paradigms can be combined! E.g., Plan-and-Solve for structure + Reflection for quality.
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-black mb-2">⚖️ Trade-offs</h3>
            <p className="text-sm text-black">
              No paradigm is universally best. Choose based on task requirements: speed vs. quality vs. adaptability.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-black mb-2">🎯 Selection Guide</h3>
            <p className="text-sm text-black">
              Real-time → ReAct. Structured reasoning → Plan-and-Solve. Mission-critical → Reflection.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 18: Knowledge Check Quiz
  {
    id: 'ch4-slide-18',
    title: 'Knowledge Check',
    type: 'interactive',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-black mb-4">Chapter 4 Assessment</h2>

        <Quiz
          questions={[
            {
              id: 'q1',
              question: 'What is the core innovation of the ReAct paradigm?',
              options: [
                { id: 'a', text: 'Using multiple LLMs simultaneously', correct: false },
                { id: 'b', text: 'Combining reasoning (Thought) with acting (Action) in a synergistic loop', correct: true },
                { id: 'c', text: 'Pre-compiling all possible actions before execution', correct: false },
                { id: 'd', text: 'Eliminating the need for external tools', correct: false },
              ],
              points: 15,
            },
            {
              id: 'q2',
              question: 'In a tool definition, which element is described as "the most critical" for LLM decision-making?',
              options: [
                { id: 'a', text: 'Tool name', correct: false },
                { id: 'b', text: 'Tool description (explains when to use the tool)', correct: true },
                { id: 'c', text: 'Execution logic (function implementation)', correct: false },
                { id: 'd', text: 'API endpoint URL', correct: false },
              ],
              points: 10,
            },
            {
              id: 'q3',
              question: 'What distinguishes Plan-and-Solve from ReAct in terms of workflow?',
              options: [
                { id: 'a', text: 'Plan-and-Solve uses multiple agents, ReAct uses one', correct: false },
                { id: 'b', text: 'Plan-and-Solve generates a complete plan before execution, ReAct adjusts dynamically', correct: true },
                { id: 'c', text: 'Plan-and-Solve requires human approval, ReAct is fully autonomous', correct: false },
                { id: 'd', text: 'Plan-and-Solve cannot use external tools', correct: false },
              ],
              points: 15,
            },
            {
              id: 'q4',
              question: 'What is the primary purpose of the Memory module in the Reflection paradigm?',
              options: [
                { id: 'a', text: 'Cache API responses for faster retrieval', correct: false },
                { id: 'b', text: 'Store execution attempts and reflection feedback for iterative refinement', correct: true },
                { id: 'c', text: 'Persist user conversations across sessions', correct: false },
                { id: 'd', text: 'Log errors for debugging', correct: false },
              ],
              points: 10,
            },
            {
              id: 'q5',
              question: 'Which paradigm is MOST suitable for a task requiring real-time chatbot responses with "good enough" quality?',
              options: [
                { id: 'a', text: 'ReAct (fast, adaptive)', correct: true },
                { id: 'b', text: 'Plan-and-Solve (structured but slower)', correct: false },
                { id: 'c', text: 'Reflection (high quality but high latency)', correct: false },
                { id: 'd', text: 'None of the above', correct: false },
              ],
              points: 15,
            },
            {
              id: 'q6',
              question: 'What is a key limitation of the ReAct paradigm?',
              options: [
                { id: 'a', text: 'Cannot use external tools', correct: false },
                { id: 'b', text: 'Requires complete plan before execution', correct: false },
                { id: 'c', text: 'May fall into local optima or infinite loops due to lack of global planning', correct: true },
                { id: 'd', text: 'Cannot handle multi-step tasks', correct: false },
              ],
              points: 10,
            },
            {
              id: 'q7',
              question: 'In Reflection, what signals the termination of the iterative loop?',
              options: [
                { id: 'a', text: 'User manually stops execution', correct: false },
                { id: 'b', text: 'Feedback contains "no improvement needed" OR max iterations reached', correct: true },
                { id: 'c', text: 'Agent runs out of API credits', correct: false },
                { id: 'd', text: 'First execution always produces final answer', correct: false },
              ],
              points: 10,
            },
            {
              id: 'q8',
              question: 'Which debugging technique is recommended for diagnosing ReAct prompt issues?',
              options: [
                { id: 'a', text: 'Increase temperature to 2.0 for more creativity', correct: false },
                { id: 'b', text: 'Print the complete formatted prompt with history before each LLM call', correct: true },
                { id: 'c', text: 'Disable all tools and retry', correct: false },
                { id: 'd', text: 'Switch to a smaller, faster model', correct: false },
              ],
              points: 15,
            },
          ]}
          passingScore={70}
        />
      </div>
    ),
  },

  // Slide 19: Chapter Summary
  {
    id: 'ch4-slide-19',
    title: 'Chapter Summary',
    type: 'summary',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Key Takeaways</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-semibold text-black mb-2">ReAct</h3>
            <ul className="text-sm text-black space-y-1">
              <li>• Thought-Action-Observation loop</li>
              <li>• Dynamic, adaptive execution</li>
              <li>• Best for exploratory tasks</li>
              <li>• Risk: Local optima, loops</li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold text-black mb-2">Plan-and-Solve</h3>
            <ul className="text-sm text-black space-y-1">
              <li>• Two-phase: Plan → Execute</li>
              <li>• Structured, goal-consistent</li>
              <li>• Best for multi-step reasoning</li>
              <li>• Risk: Rigid plan execution</li>
            </ul>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-semibold text-black mb-2">Reflection</h3>
            <ul className="text-sm text-black space-y-1">
              <li>• Execute-Reflect-Refine loop</li>
              <li>• Iterative quality improvement</li>
              <li>• Best for critical quality needs</li>
              <li>• Risk: High cost &amp; latency</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-semibold text-black mb-2">🎯 Core Insight</h3>
            <p className="text-black">
              No single paradigm is universally optimal. The right choice depends on your task's specific requirements
              for <strong>speed, quality, adaptability, and cost</strong>. Understanding these trade-offs transforms you from
              a framework user into an agent architect.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-black mb-2">🛠️ Practical Skills Gained</h3>
            <ul className="text-sm text-black space-y-1">
              <li>✅ Built three agent paradigms from scratch using Python + OpenAI API</li>
              <li>✅ Designed tools with clear names, descriptions, and execution logic</li>
              <li>✅ Implemented prompt engineering for different agent roles (planner, executor, reviewer)</li>
              <li>✅ Debugged common issues: format parsing, infinite loops, prompt fragility</li>
              <li>✅ Evaluated cost-benefit trade-offs for production deployment</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-black mb-2">➡️ What's Next?</h3>
            <p className="text-black">
              <strong>Chapter 5:</strong> Explore low-code platforms (Dify, Coze, n8n) and lightweight frameworks
              to accelerate agent development. Now that you understand the fundamentals, you'll appreciate how these
              tools abstract complexity while building on the same core concepts.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 20: Exercises and Next Steps
  {
    id: 'ch4-slide-20',
    title: 'Practice & Next Steps',
    type: 'content',
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-black mb-4">Hands-On Practice</h2>

        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-black mb-2">🔧 Exercise 1: Extend ReAct with Calculator Tool</h3>
            <p className="text-sm text-black mb-2">
              Add a "calculator" tool to the ReAct agent to handle complex math problems like
              <code className="bg-white px-2 py-1 rounded mx-1">(123 + 456) × 789 / 12 = ?</code>
            </p>
            <div className="text-xs text-black">
              <strong>Bonus:</strong> Implement tool selection failure handling when agent repeatedly calls wrong tool
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-semibold text-black mb-2">📋 Exercise 2: Dynamic Replanning in Plan-and-Solve</h3>
            <p className="text-sm text-black mb-2">
              Modify the Plan-and-Solve agent to detect when a step fails and trigger replanning instead of
              blindly continuing with the original plan.
            </p>
            <div className="text-xs text-black">
              <strong>Hint:</strong> Compare expected vs. actual step results, replan if mismatch detected
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
            <h3 className="font-semibold text-black mb-2">🔍 Exercise 3: Multi-Dimensional Reflection</h3>
            <p className="text-sm text-black mb-2">
              Design a Reflection mechanism for academic paper writing that critiques from multiple angles:
              logic, innovation, language quality, and citation standards.
            </p>
            <div className="text-xs text-black">
              <strong>Challenge:</strong> How to aggregate feedback from different reflection perspectives?
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-semibold text-black mb-2">🎨 Exercise 4: Hybrid Paradigm Design</h3>
            <p className="text-sm text-black mb-2">
              Create a "smart home control assistant" that combines paradigms: Plan-and-Solve for routine automation
              + ReAct for dynamic device control + Reflection for energy optimization suggestions.
            </p>
            <div className="text-xs text-black">
              <strong>Goal:</strong> Understand when and how to combine paradigms for complex applications
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-black mb-3">📚 Further Reading</h3>
          <ul className="text-sm text-black space-y-2">
            <li>• <strong>ReAct Paper:</strong> Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models" (ICLR 2023)</li>
            <li>• <strong>Plan-and-Solve:</strong> Wang et al., "Plan-and-Solve Prompting" (arXiv 2023)</li>
            <li>• <strong>Reflexion:</strong> Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning" (NeurIPS 2023)</li>
            <li>• <strong>Code Examples:</strong> <code>code/chapter4/</code> directory in repository</li>
          </ul>
        </div>

        <div className="text-center mt-6 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg">
          <p className="font-semibold">🎉 Congratulations on completing Chapter 4!</p>
          <p className="text-sm mt-2">You're now equipped to build production-grade agents from first principles.</p>
        </div>
      </div>
    ),
  },
]
