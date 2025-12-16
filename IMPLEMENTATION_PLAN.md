# Hello-Agents → Training Portal Integration Plan

**Version:** 1.0.0
**Last Updated:** December 12, 2024
**Status:** Draft - Awaiting Approval

---

## Executive Summary

This document outlines the comprehensive plan to transform Hello-Agents from a documentation-only repository into an **interactive, standalone web course** that seamlessly integrates with the BixoryAI Training Portal while maintaining **repository independence** to prevent monorepo bloat.

---

## Table of Contents

1. [Architecture Philosophy](#architecture-philosophy)
2. [Tech Stack Alignment](#tech-stack-alignment)
3. [Repository Structure Strategy](#repository-structure-strategy)
4. [Database Strategy: Supabase](#database-strategy-supabase)
5. [Integration Methodology](#integration-methodology)
6. [Implementation Phases](#implementation-phases)
7. [Course Authoring Guidelines](#course-authoring-guidelines)
8. [Deployment Strategy](#deployment-strategy)
9. [Future Course Integration](#future-course-integration)

---

## Architecture Philosophy

### Core Principles

**1. Repository Independence**
- Each course maintains its **own repository** (avoids monorepo bloat)
- Training-portal remains lightweight (only platform code)
- Courses can be developed, tested, and deployed independently
- Easy for community contributions (fork individual courses)

**2. Shared Standards**
- All courses use **identical tech stack** (Next.js 14 + React)
- All courses implement **course-sdk** for integration
- All courses follow **consistent UI/UX** guidelines
- All courses use **Supabase** for data persistence

**3. Dual-Mode Operation**
- **Standalone Mode:** Course runs independently (own auth, navigation, branding)
- **Embedded Mode:** Course runs inside portal iframe (portal auth, hidden navigation)
- Mode detection via query params or environment variables

**4. Seamless Discovery**
- Training-portal discovers courses via **manifest URLs**
- Courses register themselves via **course registry**
- Portal displays all courses in unified catalog
- SSO enables frictionless access

---

## Tech Stack Alignment

### Unified Technology Stack

All components (portal + courses) must use **identical stack**:

```
Frontend Framework:    Next.js 14 (App Router)
UI Library:            React 18
Language:              TypeScript 5.3+
Styling:               Tailwind CSS + shadcn/ui + CVA
State Management:      Zustand (for complex state)
API Layer:             Next.js API Routes + tRPC (type-safe)
Database:              Prisma ORM + PostgreSQL (via Supabase)
Authentication:        NextAuth v5 (portal) + SSO tokens (courses)
File Storage:          Supabase Storage
Vector DB:             Supabase pgvector (for AI features)
Deployment:            Vercel (or Docker for self-hosted)
Code Execution:        Pyodide (browser) + Judge0 API (optional)
```

### Why This Stack?

✅ **Consistency:** Same framework = same UX everywhere
✅ **Type Safety:** End-to-end TypeScript
✅ **Performance:** SSR/SSG for fast page loads
✅ **SEO:** Server-side rendering for better discoverability
✅ **Developer Experience:** Hot reload, excellent tooling
✅ **Scalability:** Proven at massive scale
✅ **Cloud-Native:** Easy Vercel deployment or Docker

### Critical: No Framework Mixing

❌ **Prohibited:**
- Vue.js / Nuxt.js
- Angular
- Svelte / SvelteKit
- Solid.js
- Remix (different from Next.js App Router)

⚠️ **Existing Vue demos must be rewritten in React**

---

## Repository Structure Strategy

### Multi-Repo Architecture (Recommended)

**Why NOT a Monorepo?**
- 📦 Prevents massive repo size over time
- 🚀 Independent versioning and releases
- 👥 Easier community contributions (fork single course)
- 🔒 Separate access controls per course
- ⚡ Faster CI/CD (only build what changed)
- 🧩 Modular ownership (different teams/maintainers)

### Repository Layout

```
GitHub Organization: bixoryai/
│
├── training-portal/              # Main platform (Turborepo monorepo)
│   ├── apps/
│   │   ├── portal/              # Portal app (PORT 8888)
│   │   ├── admin/               # Admin dashboard
│   │   └── ai-service/          # AI microservice
│   ├── packages/
│   │   ├── course-sdk/          # Integration SDK ✅
│   │   ├── ui/                  # Shared UI components
│   │   ├── database/            # Prisma schema ✅
│   │   ├── ai/                  # AI utilities
│   │   └── config/              # Shared configs
│   └── docs/
│       ├── BUILD_PLAN.md        # ✅ Exists
│       ├── INTEGRATION_SPEC.md  # 🆕 To create
│       └── COURSE_AUTHORING.md  # 🆕 To create
│
├── hello-agents/                 # 🆕 AI Agents Course (standalone repo)
│   ├── frontend/                # Next.js app
│   ├── backend/                 # Python FastAPI services (existing)
│   ├── content/                 # Markdown chapters
│   ├── exercises/               # Interactive exercises
│   ├── public/                  # Static assets
│   ├── INTEGRATION.md           # How to integrate with portal
│   └── package.json             # Next.js dependencies
│
├── advanced-ml-course/          # 🔮 Future course (standalone repo)
│   └── (same structure as hello-agents)
│
└── llm-ops-course/              # 🔮 Future course (standalone repo)
    └── (same structure as hello-agents)
```

### Course Repository Template Structure

Every course repo follows this **standard structure**:

```
course-name/
├── frontend/                    # Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx       # Root layout (mode-aware)
│   │   │   ├── page.tsx         # Landing page
│   │   │   ├── chapters/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx # Chapter viewer
│   │   │   └── api/
│   │   │       ├── manifest/    # Course manifest ✅
│   │   │       ├── health/      # Health check ✅
│   │   │       └── progress/    # Progress sync ✅
│   │   ├── components/
│   │   │   ├── ChapterViewer.tsx
│   │   │   ├── CodeRunner.tsx
│   │   │   ├── NavigationSidebar.tsx
│   │   │   └── ProgressTracker.tsx
│   │   ├── lib/
│   │   │   ├── content-loader.ts
│   │   │   ├── mode-detector.ts
│   │   │   └── progress-reporter.ts
│   │   └── styles/
│   │       └── globals.css
│   ├── public/
│   │   └── images/
│   ├── .env.example
│   ├── .env.local
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── package.json
│   └── tsconfig.json
│
├── content/                     # Course content (markdown)
│   ├── manifest.json            # Course metadata
│   ├── chapters/
│   │   ├── chapter-1/
│   │   │   ├── content.md       # Chinese version
│   │   │   ├── content.en.md    # English version
│   │   │   ├── exercises.json   # Interactive exercises
│   │   │   └── metadata.json    # Chapter metadata
│   │   ├── chapter-2/
│   │   └── ...
│   └── assets/
│       └── images/
│
├── backend/                     # (Optional) Backend services
│   └── (FastAPI, Flask, etc.)
│
├── docs/
│   ├── INTEGRATION.md           # How to integrate with portal
│   ├── DEPLOYMENT.md            # Deployment guide
│   └── DEVELOPMENT.md           # Local development setup
│
├── .github/
│   └── workflows/
│       ├── deploy.yml           # Auto-deploy to Vercel
│       └── test.yml             # Run tests
│
├── Dockerfile                   # For self-hosted deployment
├── docker-compose.yml           # Full stack (frontend + backend)
├── vercel.json                  # Vercel deployment config
├── README.md
└── LICENSE

```

---

## Database Strategy: Supabase

### ✅ Verified: Supabase is Configured

Based on `training-portal/supabase/config.toml` and `BUILD_PLAN.md`:

**Supabase Setup:**
- ✅ Local development via Supabase CLI
- ✅ PostgreSQL 17 (configured in config.toml)
- ✅ Prisma ORM for type-safe queries
- ✅ Connection pooling support
- ✅ Auth + Storage + Realtime capabilities

### Database Architecture

**Training Portal (Shared Database):**
```
Supabase Project: training-portal
├── Tables:
│   ├── users                    # All platform users
│   ├── courses                  # Course registry
│   ├── enrollments              # User course enrollments
│   ├── progress                 # Progress tracking
│   ├── ai_interactions          # AI chat logs
│   ├── achievements             # Gamification
│   └── notifications            # User notifications
└── Storage Buckets:
    ├── course-assets            # Course images/files
    ├── user-uploads             # User submissions
    └── ai-generated             # AI-generated content
```

**Course-Specific Data:**
- Courses do NOT have separate databases
- Courses use the **shared Supabase instance**
- Course data isolated by `courseId` field
- Courses query via `@bixoryai/database` package

### Environment Variables

**Portal (.env.local):**
```env
# Supabase (Main Database)
DATABASE_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres"

# Supabase Auth
NEXT_PUBLIC_SUPABASE_URL="https://[project-ref].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[anon-key]"
SUPABASE_SERVICE_ROLE_KEY="[service-role-key]"

# NextAuth
NEXTAUTH_SECRET="[generated-secret]"
NEXTAUTH_URL="http://localhost:8888"
```

**Course (.env.local in each course repo):**
```env
# Course Identity
COURSE_ID="hello-agents"
NEXT_PUBLIC_COURSE_ID="hello-agents"

# Portal Integration (for embedded mode)
PORTAL_SSO_SECRET="[shared-secret-32-chars-min]"
PORTAL_API_URL="http://localhost:8888"
COURSE_API_KEY="[course-specific-api-key]"

# Supabase (read-only access to shared DB)
DATABASE_URL="postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres?pgbouncer=true"
SUPABASE_URL="https://[project-ref].supabase.co"
SUPABASE_ANON_KEY="[anon-key]"

# Feature Flags
ENABLE_CODE_EXECUTION="true"
ENABLE_PROGRESS_TRACKING="true"
```

### Local Development with Supabase

**1. Start Supabase Locally:**
```bash
cd training-portal
npx supabase start
```

This starts:
- PostgreSQL: `localhost:54322`
- Supabase Studio: `http://localhost:54323`
- PostgREST API: `http://localhost:54321`

**2. Run Database Migrations:**
```bash
cd packages/database
npm run db:migrate
```

**3. Seed Database:**
```bash
npm run db:seed
```

**4. Start Portal:**
```bash
cd apps/portal
npm run dev  # Runs on port 8888
```

**5. Start Course (in separate terminal):**
```bash
cd ~/hello-agents/frontend
npm run dev  # Runs on port 3001
```

### Cloud Deployment (Supabase)

**Production Setup:**
1. Create Supabase project at https://supabase.com
2. Run migrations: `npx supabase db push --db-url [production-url]`
3. Configure environment variables in Vercel
4. Deploy portal and courses

**Benefits:**
- 🌍 Global CDN for low latency
- 🔒 Built-in auth and RLS (Row-Level Security)
- 📦 Integrated file storage
- 🔍 Built-in vector search (pgvector)
- 📊 Real-time subscriptions
- 💰 Generous free tier

---

## Integration Methodology

### How Courses Integrate with Portal

**Discovery Mechanism:**

1. **Course Manifest (Required)**
   - Every course exposes `GET /api/manifest`
   - Returns course metadata (title, description, chapters, etc.)
   - Portal fetches manifest on registration

2. **Course Registry (Portal)**
   ```typescript
   // training-portal/apps/portal/lib/course-registry.ts

   export const courseRegistry = [
     {
       id: 'hello-agents',
       title: 'Hello-Agents: Building AI Agents from Scratch',
       description: '16-chapter comprehensive guide to AI agent development',
       manifestUrl: 'https://hello-agents.bixory.ai/api/manifest',
       prodUrl: 'https://hello-agents.bixory.ai',
       localUrl: 'http://localhost:3001',
       thumbnail: '/courses/hello-agents/thumbnail.png',
       difficulty: 'INTERMEDIATE',
       estimatedHours: 40,
       isActive: true
     },
     // Future courses...
   ]
   ```

3. **Automatic Registration (Future)**
   - Courses POST to `/api/portal/register` with manifest URL
   - Portal validates and adds to registry
   - No manual config needed

### SSO Flow (Single Sign-On)

**When user clicks "Launch Course" in portal:**

```
1. User: Click "Start Chapter 1" in Portal
   ↓
2. Portal: Generate JWT token with user data
   {
     userId: 'user_123',
     enrollmentId: 'enroll_456',
     courseId: 'hello-agents',
     email: 'user@example.com',
     iat: 1702345678,
     exp: 1702432078  // 24 hour expiry
   }
   ↓
3. Portal: Redirect to course with token
   https://hello-agents.bixory.ai/chapters/1?token=eyJhbGc...
   ↓
4. Course: Verify token using shared secret
   const user = await verifyPortalToken(token, { secret, courseId })
   ↓
5. Course: Create session for user
   Set-Cookie: course_session=...
   ↓
6. Course: Render chapter content
   Display chapter with user's progress
```

### Progress Reporting

**Automatic Progress Tracking:**

```typescript
// In course: apps/hello-agents/src/lib/progress-reporter.ts

import { createPortalClient } from '@bixoryai/course-sdk'

const portal = createPortalClient({
  courseId: process.env.COURSE_ID!,
  apiKey: process.env.COURSE_API_KEY!,
  apiUrl: process.env.PORTAL_API_URL!
})

// Report chapter started
await portal.reportProgress({
  courseId: 'hello-agents',
  userId: user.id,
  enrollmentId: user.enrollmentId,
  event: 'chapter_started',
  chapterId: 'chapter-1',
  progress: {
    percentage: 0,
    timeSpent: 0,
    startedAt: new Date().toISOString()
  }
})

// Report chapter completed
await portal.reportProgress({
  courseId: 'hello-agents',
  userId: user.id,
  enrollmentId: user.enrollmentId,
  event: 'chapter_completed',
  chapterId: 'chapter-1',
  progress: {
    percentage: 100,
    timeSpent: 2700, // 45 minutes
    completedAt: new Date().toISOString(),
    score: 85 // If quiz exists
  }
})
```

### Embedding Modes

**Standalone Mode:**
- Full course navigation visible
- Course branding visible
- Local authentication (optional)
- Runs independently on its own domain

**Embedded Mode:**
- Course runs in portal iframe
- Portal navigation controls routing
- Course navigation hidden (CSS)
- Portal handles authentication
- Progress auto-synced to portal

**Mode Detection:**

```typescript
// apps/hello-agents/src/lib/mode-detector.ts

export function getCourseMode(): 'standalone' | 'embedded' {
  // Check for portal token in URL
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    if (params.has('token')) return 'embedded'
  }

  // Check environment variable
  if (process.env.NEXT_PUBLIC_MODE === 'embedded') {
    return 'embedded'
  }

  // Check if inside iframe
  if (typeof window !== 'undefined' && window.self !== window.top) {
    return 'embedded'
  }

  return 'standalone'
}
```

---

## Implementation Phases

### Phase 1: Hello-Agents Setup (Weeks 1-2)

**Week 1: Repository Restructuring**

- [ ] Create `frontend/` directory in hello-agents repo
- [ ] Initialize Next.js 14 app with TypeScript
- [ ] Install dependencies:
  ```bash
  npm install next@14 react@18 react-dom@18 typescript
  npm install @bixoryai/course-sdk
  npm install tailwind css @shadcn/ui class-variance-authority clsx
  npm install framer-motion lucide-react
  npm install zustand (if needed for state)
  ```
- [ ] Set up Tailwind CSS + shadcn/ui
- [ ] Configure `next.config.js` for port 3001
- [ ] Create `.env.example` with all required vars
- [ ] Set up `tsconfig.json` with strict mode

**Week 2: Core Application Structure**

- [ ] Create app directory structure (layout, pages, api routes)
- [ ] Implement `GET /api/manifest` endpoint
- [ ] Implement `GET /api/health` endpoint
- [ ] Implement `POST /api/progress/sync` endpoint
- [ ] Create mode detection utility
- [ ] Create SSO token verification
- [ ] Set up content loader for markdown chapters
- [ ] Build basic chapter viewer component

### Phase 2: Content Migration (Weeks 3-4)

**Week 3: Content Structuring**

- [ ] Create `content/` directory structure
- [ ] Create `manifest.json` for course metadata
- [ ] Migrate all 16 chapters to structured format
- [ ] Add chapter metadata (title, duration, difficulty)
- [ ] Extract exercises from chapters
- [ ] Organize assets (images, diagrams)

**Week 4: Interactive Components**

- [ ] Build ChapterViewer with markdown rendering
- [ ] Build NavigationSidebar with chapter list
- [ ] Build ProgressTracker component
- [ ] Add chapter navigation (prev/next)
- [ ] Add progress persistence (localStorage + API)
- [ ] Implement search functionality

### Phase 3: Code Execution (Weeks 5-6)

**Week 5: Pyodide Integration**

- [ ] Install and configure Pyodide
- [ ] Create CodeRunner component with Monaco Editor
- [ ] Implement code execution sandbox
- [ ] Add output display and error handling
- [ ] Create exercise templates
- [ ] Add code validation/testing

**Week 6: Advanced Features**

- [ ] Convert Chapter 13 Vue demo to React
- [ ] Convert Chapter 14 Vue demo to React
- [ ] Integrate demos into course flow
- [ ] Add code hints and solutions
- [ ] Implement code submission tracking

### Phase 4: Portal Integration (Week 7)

- [ ] Implement SSO token verification
- [ ] Add progress reporting hooks
- [ ] Test embedded mode styling
- [ ] Configure CORS for portal embedding
- [ ] Add enrollment verification
- [ ] Test full integration flow (portal → course → portal)

### Phase 5: Deployment (Week 8)

- [ ] Create Dockerfile for self-hosted
- [ ] Create `vercel.json` for Vercel deployment
- [ ] Configure Supabase production connection
- [ ] Set up GitHub Actions CI/CD
- [ ] Deploy to staging environment
- [ ] Test production SSO flow
- [ ] Deploy to production
- [ ] Register course in portal registry

---

## Course Authoring Guidelines

### Creating a New Course

**Step 1: Repository Setup**
```bash
# Use course template
git clone https://github.com/bixoryai/course-template.git my-course
cd my-course
npm install

# Update course metadata
# Edit content/manifest.json
```

**Step 2: Tech Stack Setup**
- ✅ Must use Next.js 14 + React 18
- ✅ Must use TypeScript
- ✅ Must use Tailwind + shadcn/ui
- ✅ Must install `@bixoryai/course-sdk`
- ✅ Must implement required API endpoints

**Step 3: Required API Endpoints**

**`GET /api/manifest`**
```typescript
import { CourseManifest } from '@bixoryai/course-sdk'

export async function GET() {
  const manifest: CourseManifest = {
    id: 'my-course',
    title: 'My Awesome Course',
    description: 'Learn awesome things',
    version: '1.0.0',
    author: 'Your Name',
    chapters: [
      {
        id: 'chapter-1',
        title: 'Introduction',
        duration: 45,
        sections: [...]
      }
    ],
    estimatedHours: 20,
    difficulty: 'BEGINNER',
    prerequisites: [],
    tags: ['ai', 'ml', 'python']
  }

  return Response.json(manifest)
}
```

**`GET /api/health`**
```typescript
export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  })
}
```

**`POST /api/progress/sync`**
```typescript
import { verifyPortalToken } from '@bixoryai/course-sdk'

export async function POST(req: Request) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '')

  if (!token) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const user = await verifyPortalToken(token, {
      secret: process.env.PORTAL_SSO_SECRET!,
      courseId: process.env.COURSE_ID!
    })

    const body = await req.json()
    // Handle progress sync

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Invalid token' }, { status: 401 })
  }
}
```

**Step 4: Content Structure**

```json
// content/manifest.json
{
  "id": "my-course",
  "title": "My Awesome Course",
  "description": "Learn awesome things step by step",
  "version": "1.0.0",
  "author": "Your Name",
  "estimatedHours": 20,
  "difficulty": "BEGINNER",
  "prerequisites": [],
  "tags": ["ai", "ml", "python"],
  "chapters": [...]
}
```

**Step 5: UI Consistency**

- Use `@bixoryai/ui` shared components
- Follow Tailwind color scheme from portal
- Use consistent typography (font sizes, weights)
- Match button styles, input styles
- Maintain responsive breakpoints

**Step 6: Testing**

```bash
# Test standalone mode
npm run dev
# Visit http://localhost:3001

# Test embedded mode
# Set NEXT_PUBLIC_MODE=embedded in .env.local
npm run dev
# Visit http://localhost:8888/courses/my-course
```

**Step 7: Registration**

Add to portal course registry:
```typescript
// training-portal/apps/portal/lib/course-registry.ts

{
  id: 'my-course',
  title: 'My Awesome Course',
  manifestUrl: 'https://my-course.bixory.ai/api/manifest',
  prodUrl: 'https://my-course.bixory.ai',
  localUrl: 'http://localhost:3002', // Increment port
  thumbnail: '/courses/my-course/thumbnail.png',
  difficulty: 'BEGINNER',
  estimatedHours: 20,
  isActive: true
}
```

---

## Deployment Strategy

### Local Development

**Start All Services:**

```bash
# Terminal 1: Supabase
cd training-portal
npx supabase start

# Terminal 2: Portal
cd training-portal/apps/portal
npm run dev  # http://localhost:8888

# Terminal 3: Hello-Agents Course
cd hello-agents/frontend
npm run dev  # http://localhost:3001

# Terminal 4: Another Course (if any)
cd advanced-ml-course/frontend
npm run dev  # http://localhost:3002
```

### Cloud Deployment (Vercel)

**Portal Deployment:**
```bash
cd training-portal
vercel deploy --prod
```

**Course Deployment (each course separately):**
```bash
cd hello-agents
vercel deploy --prod

cd advanced-ml-course
vercel deploy --prod
```

**Environment Variables (Vercel):**
- Set in Vercel dashboard for each project
- Use Vercel secrets for sensitive values
- Same variables as local `.env.local`

### Self-Hosted (Docker)

**Portal + Courses Stack:**

```yaml
# docker-compose.yml (in infrastructure repo)

version: '3.8'

services:
  # Portal
  portal:
    build: ./training-portal
    ports:
      - "8888:8888"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    depends_on:
      - postgres

  # Hello-Agents Course
  hello-agents:
    build: ./hello-agents
    ports:
      - "3001:3001"
    environment:
      - COURSE_ID=hello-agents
      - PORTAL_API_URL=http://portal:8888
      - DATABASE_URL=${DATABASE_URL}
    depends_on:
      - portal

  # Future Course
  advanced-ml:
    build: ./advanced-ml-course
    ports:
      - "3002:3002"
    environment:
      - COURSE_ID=advanced-ml
      - PORTAL_API_URL=http://portal:8888
    depends_on:
      - portal

  # Supabase (self-hosted)
  postgres:
    image: supabase/postgres:17
    ports:
      - "54322:5432"
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

**Deploy:**
```bash
docker-compose up -d
```

---

## Future Course Integration

### Streamlined Process

When adding new courses in the future:

**1. Clone Course Template**
```bash
gh repo create bixoryai/new-course --template bixoryai/course-template
cd new-course
npm install
```

**2. Update Course Metadata**
```bash
# Edit content/manifest.json
# Update package.json
# Configure .env.example
```

**3. Develop Content**
- Write markdown chapters
- Create exercises
- Build interactive components
- Test locally

**4. Deploy**
```bash
vercel deploy --prod
# OR
docker build -t new-course .
docker push registry/new-course
```

**5. Register in Portal**
```typescript
// Add to course-registry.ts
{
  id: 'new-course',
  title: 'New Amazing Course',
  manifestUrl: 'https://new-course.bixory.ai/api/manifest',
  prodUrl: 'https://new-course.bixory.ai',
  isActive: true
}
```

**Done!** Course appears in portal automatically.

---

## Checklist: Hello-Agents Integration

### Repository Setup
- [ ] Create `frontend/` directory in hello-agents repo
- [ ] Initialize Next.js 14 app
- [ ] Install `@bixoryai/course-sdk`
- [ ] Configure Tailwind CSS + shadcn/ui
- [ ] Set up TypeScript with strict mode

### Content Migration
- [ ] Create `content/` directory structure
- [ ] Migrate all 16 chapters to markdown
- [ ] Create manifest.json
- [ ] Structure exercises as JSON
- [ ] Organize assets

### API Implementation
- [ ] Implement `/api/manifest` endpoint
- [ ] Implement `/api/health` endpoint
- [ ] Implement `/api/progress/sync` endpoint
- [ ] Add SSO token verification
- [ ] Add mode detection

### UI Components
- [ ] ChapterViewer component
- [ ] NavigationSidebar component
- [ ] CodeRunner component (Pyodide)
- [ ] ProgressTracker component
- [ ] Search functionality

### Integration
- [ ] Test standalone mode
- [ ] Test embedded mode
- [ ] Test SSO flow
- [ ] Test progress sync
- [ ] Verify Supabase connection

### Deployment
- [ ] Create Dockerfile
- [ ] Create vercel.json
- [ ] Configure GitHub Actions
- [ ] Deploy to staging
- [ ] Deploy to production
- [ ] Register in portal

---

## Appendix: Key Files Reference

### Environment Variables Template

```env
# Course Identity
COURSE_ID="hello-agents"
NEXT_PUBLIC_COURSE_ID="hello-agents"

# Mode Configuration
NEXT_PUBLIC_MODE="standalone"  # or "embedded"

# Portal Integration (for embedded mode)
PORTAL_SSO_SECRET="your-shared-secret-min-32-chars"
PORTAL_API_URL="http://localhost:8888"
COURSE_API_KEY="your-course-api-key"

# Supabase (shared database)
DATABASE_URL="postgresql://postgres:password@localhost:54322/postgres"
SUPABASE_URL="http://localhost:54321"
SUPABASE_ANON_KEY="your-anon-key"

# NextAuth (for standalone mode)
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3001"

# Feature Flags
ENABLE_CODE_EXECUTION="true"
ENABLE_PROGRESS_TRACKING="true"
ENABLE_AI_TUTOR="false"
```

### Course Manifest Example

```json
{
  "id": "hello-agents",
  "title": "Hello-Agents: Building AI Agents from Scratch",
  "description": "Comprehensive 16-chapter guide to building AI agent systems",
  "version": "1.0.0",
  "author": "Datawhale Community",
  "license": "CC BY-NC-SA 4.0",
  "language": ["zh", "en"],
  "estimatedHours": 40,
  "difficulty": "INTERMEDIATE",
  "prerequisites": ["Python basics", "LLM fundamentals"],
  "tags": ["ai", "agents", "llm", "multi-agent"],
  "chapters": [
    {
      "id": "chapter-1",
      "title": "Introduction to Agents",
      "duration": 45,
      "sections": [
        { "id": "1.1", "title": "What are Agents?", "type": "lesson" },
        { "id": "1.2", "title": "Agent Types", "type": "lesson" },
        { "id": "1.3", "title": "Quiz", "type": "quiz" }
      ]
    }
    // ... 15 more chapters
  ],
  "completionCriteria": {
    "minimumChaptersCompleted": 12,
    "minimumQuizScore": 70
  }
}
```

---

## Conclusion

This integration plan provides a **scalable, maintainable architecture** for:

✅ Converting Hello-Agents into an interactive course
✅ Maintaining repository independence (no monorepo bloat)
✅ Using unified tech stack (Next.js + React + Supabase)
✅ Seamless portal integration via course-sdk
✅ Supporting dual-mode operation (standalone + embedded)
✅ Easy onboarding for future courses

**Next Steps:**
1. Review and approve this plan
2. Begin Phase 1 implementation (Hello-Agents setup)
3. Create course template repository
4. Document course authoring guidelines
5. Build first course and iterate

---

**Questions? Feedback?**

Please submit issues or PRs to improve this integration plan.

