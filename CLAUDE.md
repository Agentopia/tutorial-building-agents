# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hello-Agents** is a comprehensive, open-source tutorial project by Datawhale for building AI agent systems from scratch. The project focuses on AI-native agents (truly AI-driven) rather than workflow-driven low-code platforms. It teaches agent fundamentals, classic paradigms, and hands-on implementation using the custom **HelloAgents framework**.

The repository contains bilingual documentation (Chinese/English), extensive code examples across 15+ chapters, and several full-featured applications demonstrating agent capabilities.

## Repository Structure

```
tutorial-building-agents/
├── frontend/                      # Interactive tutorial web application (NEW)
│   ├── src/
│   │   ├── app/                  # Next.js 14 App Router pages
│   │   ├── components/           # Interactive learning components
│   │   │   ├── CodePlayground.tsx      # In-browser code execution
│   │   │   ├── Exercise.tsx            # Auto-graded exercises
│   │   │   ├── Quiz.tsx                # Assessment system
│   │   │   ├── AgentFlowDiagram.tsx    # Visual agent architectures
│   │   │   └── ProgressIndicator.tsx   # Progress tracking dashboard
│   │   ├── store/                # Zustand state management
│   │   │   └── learningStore.ts        # Progress, achievements, streaks
│   │   └── hooks/                # Custom React hooks
│   └── INTERACTIVE_ENHANCEMENTS.md     # Feature documentation
├── docs/                          # Tutorial documentation (Chinese + English)
│   ├── chapter1-16/              # 16 chapters covering theory to practice
│   └── images/
├── code/                          # Code examples organized by chapter
│   ├── chapter1-3/               # Foundations: Agent intro, history, LLM basics
│   ├── chapter4/                 # Classic paradigms: ReAct, Plan-and-Solve, Reflection
│   ├── chapter5/                 # Low-code platforms: Dify, Coze, n8n configs
│   ├── chapter6/                 # Framework demos: AutoGen, AgentScope, LangGraph, CAMEL
│   ├── chapter7/                 # Custom framework: HelloAgents implementation
│   ├── chapter8-9/               # Memory/RAG and context engineering
│   ├── chapter10/                # Communication protocols: MCP, A2A, ANP
│   ├── chapter11/                # Agentic-RL: SFT to GRPO training
│   ├── chapter12/                # Evaluation: BFCL, GAIA benchmarks
│   ├── chapter13/                # Trip planner application (MCP + HelloAgents)
│   ├── chapter14/                # Deep research agent (web scraping + summarization)
│   └── chapter15/                # AI Town simulation (multi-agent social dynamics)
├── Co-creation-projects/         # Community-contributed projects
├── Extra-Chapter/                # Interview questions, supplemental content
└── Additional-Chapter/           # Installation guides (N8N, Node.js)
```

## Development Environment

### Python Requirements
- **Python 3.10+** required for all code examples
- Core dependency: `hello-agents` framework (version varies by chapter)
- Common dependencies: `openai`, `requests`, `python-dotenv`, `fastapi`, `uvicorn`

### Chapter-Specific Environments
Each chapter has its own dependencies. Key chapters:

**Chapter 4** (Classic Paradigms):
```bash
cd code/chapter4
pip install -r requirements.txt  # Basic LLM client + tools
```

**Chapter 6** (Framework Demos):
- `Langgraph/`: LangGraph examples (version 1.0.0a3)
- `AgentScopeDemo/`, `AutoGenDemo/`, `CAMEL/`: Framework-specific demos

**Chapter 7** (HelloAgents Framework):
```bash
cd code/chapter7
pip install hello-agents python-dotenv
# Test files: test_react_agent.py, test_simple_agent.py, etc.
```

**Chapter 10** (MCP Protocol):
- Weather MCP server: `hello-agents>=0.2.2`, `requests>=2.31.0`
- Use `uvx` to run MCP servers (Model Context Protocol)

**Chapter 11** (Agentic-RL):
- Distributed training with Accelerate/DeepSpeed configs in `accelerate_configs/`

**Chapter 13** (Trip Planner):
- Backend: FastAPI + HelloAgents + MCP (amap-mcp-server for maps)
- Frontend: Vue 3 + TypeScript + Vite
- Run: `uvicorn app.api.main:app --reload --host 0.0.0.0 --port 8000`

**Chapter 14** (Deep Research):
- Backend: `hello-agents>=0.2.8`, `tavily-python>=0.5.0`, `ddgs>=9.6.1`
- Frontend: Next.js/React-based research interface

**Chapter 15** (AI Town):
- Backend: `hello-agents>=0.2.4`, FastAPI
- Multi-agent simulation with relationship/memory systems

## Common Commands

### Running Code Examples

**Basic agent scripts** (chapters 1-9):
```bash
python code/chapter4/ReAct.py                    # Run ReAct paradigm
python code/chapter7/test_react_agent.py         # Test custom ReAct agent
python code/chapter10/02_Connect2MCP.py          # Test MCP connection
```

**Full applications** (chapters 13-15):
```bash
# Trip Planner Backend
cd code/chapter13/helloagents-trip-planner/backend
pip install -r requirements.txt
uvicorn app.api.main:app --reload --port 8000

# Trip Planner Frontend
cd code/chapter13/helloagents-trip-planner/frontend
npm install
npm run dev  # Runs on http://localhost:5173

# AI Town Backend
cd code/chapter15/Helloagents-AI-Town/backend
pip install -r requirements.txt
python main.py

# Deep Research Backend
cd code/chapter14/helloagents-deepresearch/backend
pip install -e .
uvicorn src.main:app --reload --port 8000
```

### Testing

Tests are typically named `test_*.py` in chapter directories:
```bash
python code/chapter7/test_simple_agent.py
python code/chapter7/test_plan_solve_agent.py
python code/chapter12/02_bfcl_quick_start.py     # Benchmark tests
```

### Documentation

View documentation locally:
```bash
# Docs are in docs/ directory, organized by chapter
# Online: https://datawhalechina.github.io/hello-agents/
```

### Interactive Tutorial Frontend

The **frontend/** directory contains a modern, interactive learning platform built with Next.js 14:

```bash
cd frontend
npm install
npm run dev  # Runs on http://localhost:3001
```

**Key Features**:
- **Interactive Code Playgrounds**: In-browser Python/JavaScript execution with Sandpack
- **Auto-Graded Exercises**: Real-time validation with hints and solutions
- **Quiz Assessments**: Multiple-choice and code completion questions
- **Progress Tracking**: Points, achievements, and learning streaks (localStorage)
- **Visual Diagrams**: Interactive agent architecture flows with React Flow
- **Live Demos**: Integration with Trip Planner, Deep Research, AI Town applications

**Technology Stack**:
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS with custom design system (Indigo/Cyan palette)
- Sandpack for code execution
- Zustand for state management
- React Flow for diagrams
- Framer Motion for animations

**Access Points**:
- Homepage: `http://localhost:3001`
- Chapters: `http://localhost:3001/chapters`
- Interactive Demo (Ch. 4): `http://localhost:3001/chapters/4/interactive-demo`
- Live Demos: `http://localhost:3001/demos`

See `frontend/INTERACTIVE_ENHANCEMENTS.md` for comprehensive documentation.

## Architecture Patterns

### HelloAgents Framework (Core Pattern)

The custom **HelloAgents** framework (introduced in Chapter 7) is the foundation for most examples:

**Key Components**:
1. **HelloAgentsLLM**: Unified LLM interface supporting multiple providers (OpenAI, DeepSeek, etc.)
2. **Agent Classes**:
   - `SimpleAgent`: Basic agent with tool calling
   - `ReActAgent`: Reasoning + Acting paradigm
   - `PlanSolveAgent`: Plan-and-Execute pattern
   - `ReflectionAgent`: Self-reflection pattern
3. **ToolRegistry**: Manages tool registration and execution
4. **MCPTool**: Model Context Protocol integration for external services

**Typical Usage Pattern**:
```python
from hello_agents import SimpleAgent, HelloAgentsLLM, ToolRegistry

# Create LLM
llm = HelloAgentsLLM()

# Create tool registry
tools = ToolRegistry()
tools.register_function("search", "Search the internet", search_function)

# Create agent
agent = SimpleAgent(
    name="Assistant",
    llm=llm,
    system_prompt="You are a helpful assistant..."
)

# Run agent
result = agent.run("Your query here")
```

### MCP Protocol Integration (Chapter 10)

MCP (Model Context Protocol) enables agents to connect to external services:

**Pattern**:
```python
from hello_agents import MCPTool

# Create MCP tool that auto-expands to individual functions
amap_tool = MCPTool(
    name="amap",
    server_command=["uvx", "amap-mcp-server"],
    env={"AMAP_MAPS_API_KEY": "your_key"},
    auto_expand=True  # Expands to individual tool functions
)

agent.add_tool(amap_tool)
```

### Multi-Agent Communication (Chapter 10)

**A2A Protocol** (Agent-to-Agent):
- Network-based agent communication
- Files: `09_A2A_Client.py`, `09_A2A_Server.py`, `09_A2A_Network.py`

**ANP Protocol** (Agent Network Protocol):
- Task distribution and load balancing
- Files: `11_ANPInit.py`, `12_ANPTaskDistribution.py`, `13_ANPLoadBalancing.py`

### Full-Stack Applications (Chapters 13-15)

**Architecture**: FastAPI backend + Modern frontend (Vue 3 or Next.js)

**Backend Pattern**:
```
app/
├── agents/          # HelloAgents agent implementations
├── api/             # FastAPI routes
│   └── routes/      # Route modules
├── services/        # Business logic (LLM, search, maps)
├── models/          # Pydantic schemas
└── config.py        # Configuration management
```

**Key Files**:
- `backend/run.py` or `backend/main.py`: Application entry point
- `backend/app/agents/*.py`: Agent definitions
- `backend/app/api/routes/*.py`: API endpoints
- `frontend/src/`: Vue/React components

## Important Notes

### API Keys & Environment Variables

All examples require API keys configured via `.env` files:
```bash
OPENAI_API_KEY=your_key
DEEPSEEK_API_KEY=your_key
AMAP_MAPS_API_KEY=your_key  # For trip planner
TAVILY_API_KEY=your_key      # For deep research
```

Copy `.env.example` to `.env` and configure before running.

### HelloAgents Version Compatibility

Different chapters use different `hello-agents` versions:
- Chapter 7: Early framework implementation (custom code)
- Chapter 10: `hello-agents>=0.2.2` (MCP support)
- Chapter 13-14: `hello-agents>=0.2.4-0.2.8` (stable releases)

When working across chapters, use virtual environments to isolate dependencies.

### Framework Evolution

Code in **Chapter 4** shows basic agent patterns without frameworks. **Chapter 7** introduces the custom HelloAgents framework by reimplementing these patterns. Later chapters build on this framework with advanced features.

### Bilingual Content

Most documentation has both Chinese and English versions:
- Chinese: `第N章 xxx.md`
- English: `ChapterN-xxx.md`

Code comments are primarily in Chinese but code structure is universal.

### Community Contributions

The `Co-creation-projects/` directory contains community projects. Use `EXAMPLE-ProjectTemplate/` as a template for new contributions.

## Testing & Evaluation

**Chapter 12** provides comprehensive evaluation tools:

**BFCL Benchmark** (Function calling):
```bash
python code/chapter12/04_run_bfcl_evaluation.py
```

**GAIA Benchmark** (General assistant tasks):
```bash
python code/chapter12/05_gaia_quick_start.py
```

**Data Generation & Evaluation**:
```bash
cd code/chapter12/data_generation
python run_complete_evaluation.py
```

Evaluation results are saved to timestamped directories in `evaluation_results/`.

## License

Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
