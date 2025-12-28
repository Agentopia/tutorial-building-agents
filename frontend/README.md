# Hello Agents - Frontend

Modern, interactive tutorial platform for learning AI agents from scratch. Built with Next.js 14, featuring slide-based presentations, code playgrounds, interactive diagrams, and comprehensive progress tracking.

## ✅ Current Status

**Progress:** 76% Complete (Phases 1-3 complete, Phase 4 planned)
**Latest:** Slide-based tutorial format implemented for Chapters 1-5 (2025-12-28)
**See:** [BUILD_PLAN.md](BUILD_PLAN.md) for detailed tracking

### Tech Stack
- ✅ **Core:** Next.js 14.2.18 (App Router), React 18.3.1, TypeScript 5
- ✅ **Styling:** Tailwind CSS 3.4
- ✅ **Database:** Supabase Client (@supabase/supabase-js)
- ✅ **State Management:** Zustand 4.4
- ✅ **Animations:** Framer Motion 10.16
- ✅ **Code Execution:** @codesandbox/sandpack-react 2.20
- ✅ **Diagrams:** React Flow 11.11
- ✅ **Markdown:** react-markdown, remark-gfm, rehype-highlight
- ✅ **Icons:** Lucide React 0.263

### Directory Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── manifest/route.ts      ✅ Course metadata endpoint
│   │   │   ├── health/route.ts        ✅ Health check
│   │   │   └── progress/sync/route.ts ✅ Progress tracking
│   │   ├── chapters/
│   │   │   ├── page.tsx               ✅ Chapter list with progress
│   │   │   └── [id]/page.tsx          ✅ Individual chapters (markdown + slides)
│   │   ├── demos/                     ✅ Live demo pages
│   │   ├── layout.tsx                 ✅ Root layout
│   │   ├── page.tsx                   ✅ Homepage
│   │   └── globals.css                ✅ Tailwind styles
│   ├── components/
│   │   ├── SlideView.tsx              ✅ Slide-based presentation (NEW!)
│   │   ├── AgentFlowDiagram.tsx       ✅ Interactive React Flow diagrams
│   │   ├── CodePlayground.tsx         ✅ In-browser code execution (Sandpack)
│   │   ├── Quiz.tsx                   ✅ Assessment system
│   │   ├── Exercise.tsx               ✅ Auto-graded exercises
│   │   ├── ElizaChatbot.tsx           ✅ Historical chatbot demo
│   │   ├── MarkdownRenderer.tsx       ✅ Markdown with syntax highlighting
│   │   └── ProgressIndicator.tsx      ✅ Progress tracking UI
│   ├── data/
│   │   └── chapter1Slides.tsx         ✅ Curated slide content (NEW!)
│   ├── store/
│   │   └── learningStore.ts           ✅ Zustand state (progress, achievements)
│   └── hooks/
│       └── useProgress.ts             ✅ Progress tracking hook
│
├── .env.local                         ✅ Supabase + Portal config
├── BUILD_PLAN.md                      ✅ Development roadmap (detailed)
├── INTERACTIVE_ENHANCEMENTS.md        ✅ Feature documentation
├── package.json                       ✅ Port 3001
└── tsconfig.json                      ✅ TypeScript config
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- (Optional) Supabase account for progress tracking

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd tutorial-building-agents/frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials (optional)

# Start development server
npm run dev
```

Visit `http://localhost:3001` to see the tutorial platform in action!

### Available Commands
```bash
npm run dev     # Start dev server on port 3001
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Quick Tour
1. **Homepage** (`/`) - Course overview and introduction
2. **Chapter List** (`/chapters`) - All 16 chapters with progress tracking
3. **Chapter View** (`/chapters/1`, `/chapters/2`, `/chapters/3`, `/chapters/4`, `/chapters/5`) - Slide-based tutorial (Chapters 1-5 use new slide format!)
4. **Live Demos** (`/demos`) - Full-stack agent applications

## 🧪 Test Endpoints

### Health Check
```bash
curl http://localhost:3001/api/health
```

### Course Manifest
```bash
curl http://localhost:3001/api/manifest
```

### Progress Sync
```bash
curl -X POST http://localhost:3001/api/progress/sync \
  -H "Content-Type: application/json" \
  -d '{"userId":"123","chapterId":"1","progress":{"percentage":50,"completed":false}}'
```

## 📋 Implementation Status

### ✅ Phase 1-2: Infrastructure & Navigation (COMPLETE)
- [x] **Infrastructure Setup** - Next.js 14, TypeScript, Tailwind CSS, Supabase
- [x] **API Endpoints** - manifest, health, progress/sync
- [x] **Database Integration** - Shared Supabase with training-portal
- [x] **Progress Tracking** - useProgress hook with real-time sync
- [x] **Chapter Pages** - List view and individual chapter viewer
- [x] **Progress UI** - Overall bar, chapter bars, completion badges
- [x] **Navigation** - Chapter list organized by 5 parts, prev/next

### ✅ Phase 3: Interactive Learning (85% COMPLETE)
- [x] **Slide-Based Tutorial Format** 🎯 NEW!
  - [x] SlideView component with navigation & animations
  - [x] Chapters 1-5 converted to slide-based tutorials (86 total slides)
  - [x] Keyboard shortcuts (Arrow keys) + click navigation
  - [x] Progress bar & dot navigation
  - [ ] Chapters 6-16 pending conversion (estimated 21-33 hours)

- [x] **Code Playgrounds**
  - [x] Sandpack integration for in-browser execution
  - [x] Multi-language support (Python, JavaScript, TypeScript)
  - [x] Auto-graded tests with instant feedback
  - [x] Hint system with point penalties
  - [x] Solution viewing with confirmations

- [x] **Interactive Diagrams**
  - [x] AgentFlowDiagram component using React Flow
  - [x] Click-to-explore nodes with descriptions
  - [x] Animated edges showing data flow
  - [x] Zoom/pan controls + mini-map navigation
  - [x] 30+ diagrams across 8 chapters

- [x] **Quiz & Assessment System**
  - [x] Multiple choice, true/false, code completion questions
  - [x] Automated validation with explanations
  - [x] Score tracking via Zustand store
  - [x] Progress unlocking (70% passing score)
  - [x] Success celebrations with confetti

- [x] **Gamification**
  - [x] Points system (chapters, exercises, quizzes)
  - [x] Achievement badges (🎓 First Chapter, 🔥 7-day streak, 🏆 Course Master)
  - [x] Streak tracking with daily rewards
  - [x] Exercise history with code submissions
  - [x] Local persistence + Supabase-ready sync

- [x] **Live Demos**
  - [x] Trip Planner (Chapter 13) - MCP + HelloAgents
  - [x] Deep Research Agent (Chapter 14) - Web scraping + LLM
  - [x] AI Town (Chapter 15) - Multi-agent simulation

**Chapter Coverage:**
- ✅ Chapters 1-7, 13: Full interactive components
- ⏳ Chapters 8-12, 14-16: Interactive components pending

### ⏳ Phase 4: Advanced Features (PLANNED)
**Priority 1: Slide-Based Format Rollout**
- [ ] Convert Chapters 6-16 to slide-based tutorials (11 chapters × 2-3 hours)
- [ ] ~200-220 total slides across course (86 already complete)
- [ ] Consistent slide templates and visual design

**Priority 2: Backend Integration**
- [ ] SSO authentication with training-portal
- [ ] Real-time cross-device progress sync (Supabase subscriptions)
- [ ] Analytics dashboard (completion rates, time spent, quiz performance)

**Priority 3: Polish & Optimization**
- [ ] WCAG 2.1 AA accessibility compliance
- [ ] Performance optimization (Lighthouse score >90)
- [ ] Screen reader optimization

**See [BUILD_PLAN.md](BUILD_PLAN.md) for complete roadmap and detailed tracking**

---

## 🎯 Key Features

### 🎓 Slide-Based Learning (NEW!)
Transform dense technical content into engaging, PPT-style presentations:
- **One concept per slide** for focused learning
- **Visual-first approach** with diagrams, cards, and color coding
- **Progress tracking** with slide counters and completion bars
- **Smooth animations** using Framer Motion
- **Keyboard navigation** (← → arrows) for power users
- **Mobile-responsive** design for learning on the go

**Examples:**
- Chapter 1: 643 lines of markdown → 16 focused slides
- Chapter 2: 563 lines of markdown → 16 focused slides
- Chapter 3: 1011 lines of markdown → 18 focused slides

### 💻 Interactive Code Playgrounds
Learn by doing with in-browser code execution:
- **Real-time execution** powered by Sandpack (CodeSandbox)
- **Multi-language support** (Python, JavaScript, TypeScript)
- **Auto-graded tests** with instant feedback
- **Hint system** to guide learning (with point penalties)
- **Solution viewing** for reference

### 📊 Visual Agent Diagrams
Understand complex agent architectures visually:
- **Interactive flowcharts** using React Flow
- **Click-to-explore nodes** with detailed descriptions
- **Animated edges** showing data flow
- **30+ diagrams** across agent paradigms (ReAct, Plan-Solve, Multi-Agent)
- **Zoom/pan controls** for exploring complex systems

### ✅ Quiz & Assessment System
Validate learning with interactive quizzes:
- **Multiple question types** (multiple choice, true/false, code completion)
- **Instant feedback** with explanations
- **Progress unlocking** (70% passing score required)
- **Score tracking** with points and streaks
- **Confetti celebrations** for quiz completions 🎉

### 🏆 Gamification & Progress
Stay motivated with achievement tracking:
- **Points system** across chapters, exercises, and quizzes
- **Achievement badges** (🎓 First Chapter, 🔥 7-day streak, 🏆 Course Master)
- **Learning streaks** with daily engagement tracking
- **Exercise history** with code submission archives
- **Visual progress bars** for chapters and overall course

### 🚀 Live Application Demos
See agents in action with full-stack demos:
- **Trip Planner** - MCP protocol integration with HelloAgents framework
- **Deep Research Agent** - Web scraping + LLM summarization
- **AI Town** - Multi-agent social simulation with memory systems

---

## 📚 Integration Status

This frontend integrates with BixoryAI Training Portal following spec v1.0.0.

**Current Integration:** ✅ **Complete** - Ready for testing
- ✅ Course registered in training-portal database (course-hello-agents)
- ✅ All 16 chapters ingested with markdown content (Option 2: Copy Approach)
- ✅ Shared Supabase database (localhost:54321/54322)
- ✅ Progress tracking synced between hello-agents and training-portal
- ✅ MarkdownRenderer component renders chapter content in portal
- ✅ Full learning player at /learn/hello-agents in training-portal

**Integration Method:** Both approaches supported
- **Training-Portal View:** Renders markdown content directly from database
- **Standalone View:** Uses local markdown files with progress sync

**Testing Flow:**
```bash
# Terminal 1: Training Portal
cd ../../BixoryAI/training-portal
npm run dev  # http://localhost:8888

# Terminal 2: Hello-Agents
cd frontend
npm run dev  # http://localhost:3001

# Access:
# - Standalone: http://localhost:3001/chapters
# - Portal: http://localhost:8888/courses/hello-agents
# - Learning: http://localhost:8888/learn/hello-agents
```

## 🔗 Resources

- **Build Plan:** [BUILD_PLAN.md](BUILD_PLAN.md)
- **Integration Status:** [../INTEGRATION_STATUS.md](../INTEGRATION_STATUS.md)
- **Integration Guide:** [../INTEGRATION.md](../INTEGRATION.md)
- **Portal Guide:** [C:/Coding/BixoryAI/training-portal/docs/INTEGRATION_GUIDE.md](C:/Coding/BixoryAI/training-portal/docs/INTEGRATION_GUIDE.md)
- **Course Metadata:** [../integration.yml](../integration.yml)
