'use client'

import CodePlayground from '@/components/CodePlayground'
import Exercise from '@/components/Exercise'
import Quiz from '@/components/Quiz'
import AgentFlowDiagram from '@/components/AgentFlowDiagram'
import ProgressIndicator from '@/components/ProgressIndicator'
import { motion } from 'framer-motion'

export default function Chapter4InteractiveDemo() {
  // ReAct Agent Flow Diagram
  const reactFlowNodes = [
    {
      id: '1',
      label: 'User Query',
      description: 'The user provides an input query or task that needs to be accomplished by the agent.',
      position: { x: 50, y: 150 },
      type: 'input' as const
    },
    {
      id: '2',
      label: 'Think (Reason)',
      description: 'The agent uses the LLM to reason about the current state and decide what action to take next. This is the "reasoning" step.',
      position: { x: 250, y: 150 }
    },
    {
      id: '3',
      label: 'Act (Tool Selection)',
      description: 'Based on the reasoning, the agent selects and executes an appropriate tool from its toolkit to gather information or perform an action.',
      position: { x: 450, y: 150 }
    },
    {
      id: '4',
      label: 'Observe',
      description: 'The agent observes the result of the tool execution and adds it to the context for the next iteration.',
      position: { x: 650, y: 150 }
    },
    {
      id: '5',
      label: 'Final Answer',
      description: 'Once the agent determines it has sufficient information, it provides the final answer to the user.',
      position: { x: 450, y: 300 },
      type: 'output' as const
    }
  ]

  const reactFlowEdges = [
    { id: 'e1-2', source: '1', target: '2', label: 'Input' },
    { id: 'e2-3', source: '2', target: '3', label: 'Decision' },
    { id: 'e3-4', source: '3', target: '4', label: 'Execute' },
    { id: 'e4-2', source: '4', target: '2', label: 'Loop', animated: true },
    { id: 'e4-5', source: '4', target: '5', label: 'Complete' }
  ]

  // Quiz questions
  const quizQuestions = [
    {
      id: 'q1',
      type: 'multiple-choice' as const,
      question: 'What does "ReAct" stand for in the ReAct agent paradigm?',
      options: [
        { id: 'a', text: 'Reactive Actions', isCorrect: false },
        { id: 'b', text: 'Reasoning and Acting', isCorrect: true },
        { id: 'c', text: 'Reflective Activation', isCorrect: false },
        { id: 'd', text: 'Response and Action', isCorrect: false }
      ],
      explanation: 'ReAct combines Reasoning (thinking through the problem) with Acting (taking actions via tools).',
      points: 10
    },
    {
      id: 'q2',
      type: 'multiple-choice' as const,
      question: 'In the ReAct loop, what happens after the agent "Acts"?',
      options: [
        { id: 'a', text: 'Immediately returns the final answer', isCorrect: false },
        { id: 'b', text: 'Observes the result and updates context', isCorrect: true },
        { id: 'c', text: 'Stops execution', isCorrect: false },
        { id: 'd', text: 'Asks the user for more input', isCorrect: false }
      ],
      explanation: 'After acting (executing a tool), the agent observes the result and adds it to context before reasoning again.',
      points: 10
    },
    {
      id: 'q3',
      type: 'multiple-choice' as const,
      question: 'What is the key advantage of the ReAct paradigm over simple prompt-response?',
      options: [
        { id: 'a', text: 'Faster response time', isCorrect: false },
        { id: 'b', text: 'Can interact with external tools and iterate', isCorrect: true },
        { id: 'c', text: 'Requires less memory', isCorrect: false },
        { id: 'd', text: 'Works without an LLM', isCorrect: false }
      ],
      explanation: 'ReAct agents can use tools to gather information and iterate through multiple reasoning steps, unlike simple prompts.',
      points: 10
    }
  ]

  return (
    <div className="space-y-12">
      {/* Progress Indicator */}
      <ProgressIndicator currentChapter={4} />

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg max-w-none"
      >
        <h2 className="text-3xl font-bold gradient-text mb-4">
          Building Classic Agent Paradigms: ReAct
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The <strong>ReAct (Reasoning + Acting)</strong> paradigm is one of the most influential agent architectures.
          It combines chain-of-thought reasoning with the ability to interact with external tools, creating agents
          that can break down complex problems and gather information iteratively.
        </p>
      </motion.div>

      {/* Agent Flow Diagram */}
      <AgentFlowDiagram
        title="ReAct Agent Architecture"
        description="Interactive diagram showing how the ReAct loop works. Click on nodes to learn more about each step."
        nodes={reactFlowNodes}
        edges={reactFlowEdges}
        height={500}
      />

      {/* Code Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Try It Yourself: Simple ReAct Implementation</h3>
        <CodePlayground
          title="ReAct Agent Example"
          description="This is a simplified ReAct agent. Try running it to see how it reasons and acts."
          language="python"
          initialCode={`# Simple ReAct Agent Implementation
class ReActAgent:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = tools
        self.context = []

    def think(self, query):
        """Reasoning step - decide what to do next"""
        prompt = f"Query: {query}\\nContext: {self.context}\\nWhat should I do next?"
        thought = self.llm.generate(prompt)
        return thought

    def act(self, thought):
        """Action step - execute a tool based on reasoning"""
        # Parse thought to extract tool and arguments
        tool_name, args = self.parse_tool_call(thought)
        tool = self.tools[tool_name]
        result = tool.execute(args)
        return result

    def observe(self, result):
        """Observation step - add result to context"""
        self.context.append(result)

    def run(self, query, max_iterations=5):
        """Main ReAct loop"""
        for i in range(max_iterations):
            # Think: Reason about what to do
            thought = self.think(query)
            print(f"Thought {i+1}: {thought}")

            # Check if we have the final answer
            if "FINAL ANSWER" in thought:
                return self.extract_answer(thought)

            # Act: Execute the chosen tool
            result = self.act(thought)
            print(f"Action Result: {result}")

            # Observe: Update context with result
            self.observe(result)

        return "Max iterations reached"

# Example usage
agent = ReActAgent(llm=my_llm, tools={'search': SearchTool(), 'calculator': CalculatorTool()})
answer = agent.run("What is the population of Tokyo in 2024?")`}
          tests={[
            { input: 'query', expected: 'answer', description: 'Agent initializes correctly' },
            { input: 'think', expected: 'thought', description: 'Think method returns reasoning' },
            { input: 'act', expected: 'result', description: 'Act method executes tool' }
          ]}
          hints={[
            'The ReAct loop alternates between thinking (reasoning) and acting (tool use)',
            'Context accumulates observations from each iteration',
            'The loop continues until a final answer is determined or max iterations reached'
          ]}
          solution={`# Complete ReAct Agent with error handling and better parsing
class ReActAgent:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = tools
        self.context = []

    def think(self, query):
        """Reasoning step with structured prompt"""
        context_str = "\\n".join([f"- {c}" for c in self.context])
        prompt = f"""Query: {query}
Available tools: {list(self.tools.keys())}
Context: {context_str}

Reasoning: Think step-by-step about what to do next.
If you have enough information, provide FINAL ANSWER: [answer]
Otherwise, use a tool: TOOL: tool_name(arguments)"""

        return self.llm.generate(prompt)

    def parse_tool_call(self, thought):
        """Parse tool name and arguments from thought"""
        import re
        match = re.search(r'TOOL:\\s*(\\w+)\\((.+)\\)', thought)
        if match:
            return match.group(1), match.group(2)
        return None, None

    def act(self, thought):
        """Execute tool based on parsed thought"""
        tool_name, args = self.parse_tool_call(thought)
        if tool_name and tool_name in self.tools:
            try:
                result = self.tools[tool_name].execute(args)
                return f"Tool {tool_name} returned: {result}"
            except Exception as e:
                return f"Error executing {tool_name}: {str(e)}"
        return "No valid tool found in thought"

    def observe(self, result):
        """Add observation to context"""
        self.context.append(result)

    def extract_answer(self, thought):
        """Extract final answer from thought"""
        import re
        match = re.search(r'FINAL ANSWER:\\s*(.+)', thought)
        return match.group(1) if match else thought

    def run(self, query, max_iterations=5):
        """Main ReAct loop with iteration tracking"""
        print(f"Starting ReAct agent for query: {query}\\n")

        for i in range(max_iterations):
            print(f"=== Iteration {i+1} ===")

            # Think
            thought = self.think(query)
            print(f"Thought: {thought}\\n")

            # Check for final answer
            if "FINAL ANSWER" in thought:
                answer = self.extract_answer(thought)
                print(f"Final Answer: {answer}")
                return answer

            # Act
            result = self.act(thought)
            print(f"Action Result: {result}\\n")

            # Observe
            self.observe(result)

        return "Max iterations reached without finding answer"
`}
        />
      </motion.div>

      {/* Exercise */}
      <Exercise
        id="chapter4-react-exercise"
        chapterId={4}
        title="Build Your Own ReAct Agent"
        description="Implement a ReAct agent that can answer questions using a search tool and calculator."
        difficulty="medium"
        points={100}
        starterCode={`class ReActAgent:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = tools
        self.context = []

    def run(self, query):
        # TODO: Implement the ReAct loop
        # 1. Think: Use LLM to reason
        # 2. Act: Execute a tool if needed
        # 3. Observe: Add result to context
        # 4. Repeat until final answer
        pass

# Test your agent
agent = ReActAgent(llm, {'search': search_tool})
result = agent.run("What is the capital of France?")
print(result)  # Should output: "Paris"`}
        tests={[
          { input: 'Basic query', expected: 'Correct answer', description: 'Agent answers simple questions' },
          { input: 'Multi-step query', expected: 'Correct answer', description: 'Agent handles complex reasoning' },
          { input: 'Tool usage', expected: 'Tool executed', description: 'Agent uses tools correctly' }
        ]}
        hints={[
          'Start with a loop that runs for a max number of iterations',
          'Use the LLM to generate reasoning at each step',
          'Parse the LLM output to detect tool calls or final answers',
          'Maintain context across iterations'
        ]}
        solution={`class ReActAgent:
    def __init__(self, llm, tools):
        self.llm = llm
        self.tools = tools
        self.context = []

    def run(self, query, max_iterations=5):
        for i in range(max_iterations):
            # Build prompt with context
            prompt = self.build_prompt(query)

            # Think: Get LLM reasoning
            thought = self.llm.generate(prompt)

            # Check for final answer
            if "FINAL:" in thought:
                return thought.split("FINAL:")[1].strip()

            # Act: Execute tool if specified
            if "TOOL:" in thought:
                tool_call = thought.split("TOOL:")[1].strip()
                tool_name, args = self.parse_tool(tool_call)
                result = self.tools[tool_name](args)
                self.context.append(f"Tool result: {result}")

        return "No answer found"

    def build_prompt(self, query):
        ctx = "\\n".join(self.context)
        return f"Query: {query}\\nContext:\\n{ctx}\\nWhat's next?"

    def parse_tool(self, call):
        # Simple parsing: "search(Tokyo population)"
        name = call.split("(")[0]
        args = call.split("(")[1].rstrip(")")
        return name, args`}
        language="python"
      />

      {/* Quiz */}
      <Quiz
        chapterId={4}
        title="Chapter 4 Quiz: Test Your Knowledge"
        questions={quizQuestions}
        passingScore={70}
        onComplete={(score) => {
          console.log(`Quiz completed with score: ${score}`)
        }}
      />

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl"
      >
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
          🎯 Key Takeaways
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• <strong>ReAct</strong> combines reasoning and acting in an iterative loop</li>
          <li>• Agents can use external tools to gather information dynamically</li>
          <li>• The Think-Act-Observe cycle continues until a final answer is reached</li>
          <li>• Context accumulation is crucial for maintaining state across iterations</li>
        </ul>
      </motion.div>
    </div>
  )
}
