# Integration with BixoryAI Training Portal

**Spec Version:** v1.0.0
**Spec URL:** https://training-portal.bixory.ai/docs/integration-spec
**Last Verified:** 2025-12-18

---

## Quick Reference

This course is integrated with the BixoryAI Training Portal following spec v1.0.0.

For full integration requirements and implementation guide, see:
**👉 https://training-portal.bixory.ai/docs/integration-spec**

---

## Course Information

| Property | Value |
|----------|-------|
| **Course ID** | `elated-neumann` |
| **Production URL** | [TODO: https://hello-agents.bixory.ai] |
| **Staging URL** | [TODO: https://staging.hello-agents.bixory.ai] |
| **Local Port** | 3001 |
| **Supabase** | Shared instance (awaiting training-portal setup) |

---

## Integration Status

### ✅ Tech Stack Compliant
- [x] Next.js 14.2.18
- [x] React 18.3.1
- [x] TypeScript 5.x
- [ ] @bixoryai/course-sdk v1.0.0 (SDK not yet created in training-portal)

### ✅ Required Endpoints
- [x] `GET /api/manifest` - Course manifest (✓ implemented & tested)
- [x] `GET /api/health` - Health check (✓ implemented & tested)
- [x] `POST /api/progress/sync` - Progress tracking (✓ stub implemented, awaiting Supabase)

### ⏳ Features (Awaiting Portal Infrastructure)
- [ ] SSO authentication via portal tokens (awaiting portal implementation)
- [ ] Progress tracking to shared Supabase (stub ready, needs credentials)
- [x] Dual-mode support (standalone + embedded) - configured via NEXT_PUBLIC_MODE
- [ ] Row-Level Security configured (awaiting Supabase setup)

---

## Course-Specific Features

### Architecture
- **Frontend:** Next.js 14 + React 18 + TypeScript
- **Backend:** None (static frontend only)
- **Code Execution:** None
- **Content:** 16 chapters in English, organized in 5 parts
- **Markdown Rendering:** react-markdown with syntax highlighting

### Content Structure
- **Part I:** Fundamentals of Agents and Language Models (Chapters 1-3)
- **Part II:** Building Your LLM Agent (Chapters 4-7)
- **Part III:** Advanced Knowledge (Chapters 8-12)
- **Part IV:** Comprehensive Case Studies (Chapters 13-15)
- **Part V:** Graduation Project (Chapter 16)

### Ports
- Frontend: `3001`
- Backend: N/A

### Special Features
- Interactive chapter navigation with previous/next links
- Beautiful markdown rendering with GitHub-dark syntax highlighting
- Responsive images and typography
- Chapter organization by course parts
- Direct reading from markdown source files (docs/chapter*/)

---

## Current Implementation

### What's Ready ✅
1. **Interactive Frontend**
   - Homepage with clickable chapter cards
   - Chapter list page organized by parts
   - Dynamic chapter pages reading from docs/
   - Beautiful markdown renderer with syntax highlighting
   - Previous/Next navigation

2. **API Endpoints**
   - `/api/manifest` - Returns course metadata (16 chapters)
   - `/api/health` - Health check with timestamp
   - `/api/progress/sync` - Stub ready for Supabase integration

3. **Environment Configuration**
   - `.env.local` configured with course ID
   - Dual-mode support (standalone/embedded)
   - Feature flags for progress tracking

### What's Pending ⏳
1. **Training Portal Integration**
   - @bixoryai/course-sdk package (needs to be built in portal)
   - SSO authentication system
   - Portal API endpoints

2. **Supabase Integration**
   - Shared Supabase instance setup
   - Database credentials
   - Progress tracking implementation
   - Row-Level Security (RLS) policies

3. **Testing**
   - End-to-end integration test with portal
   - Embedded mode testing
   - Progress sync testing

---

## Development

### Quick Start

```bash
# Install dependencies
cd frontend
npm install

# Run development server
npm run dev  # http://localhost:3001
```

### Environment Variables

The `.env.local` file is pre-configured with:
- Course ID: `elated-neumann`
- Portal URL: `http://localhost:8888` (when portal is running)
- Mode: `standalone` (can switch to `embedded`)
- Progress tracking: `disabled` (will enable when Supabase is ready)

### Test Integration with Portal

```bash
# Terminal 1: Start portal (when available)
cd path/to/training-portal
npm run dev  # http://localhost:8888

# Terminal 2: Start this course
cd frontend
npm run dev  # http://localhost:3001

# Visit http://localhost:8888 and enroll in "Hello Agents"
```

---

## Deployment

```bash
# Deploy to Vercel
cd frontend
vercel deploy --prod

# Set environment variables in Vercel dashboard
# - COURSE_ID=elated-neumann
# - SUPABASE_URL=https://[project-ref].supabase.co
# - SUPABASE_ANON_KEY=[shared-anon-key]
# - PORTAL_SSO_SECRET=[shared-secret]
# - PORTAL_API_URL=https://training-portal.bixory.ai
```

---

## Maintenance

### Updating to New Spec Version

When the master integration spec updates:

1. Check changelog at https://training-portal.bixory.ai/docs/integration-spec
2. Update course code if breaking changes
3. Test all integration points
4. Update `spec_version` in `integration.yml`
5. Update `Last Verified` date in this file

---

## Support

- **Integration Issues:** https://github.com/bixoryai/training-portal/issues
- **Course Issues:** https://github.com/Agentopia/tutorial-building-agents/issues
- **Documentation:** https://training-portal.bixory.ai/docs

---

**Last Updated:** 2025-12-18
