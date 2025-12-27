# Integration with BixoryAI Training Portal

**Spec Version:** v1.0.0
**Spec URL:** https://training-portal.bixory.ai/docs/integration-spec
**Last Verified:** 2025-12-16

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
| **Production URL** | [TODO: https://your-course.bixory.ai] |
| **Staging URL** | [TODO: https://staging.your-course.bixory.ai] |
| **Local Port** | 3001 |
| **Supabase** | Shared instance (training-portal) |

---

## Integration Status

✅ **Tech Stack Compliant**
- [ ] Next.js 14.2.0+
- [ ] React 18.3.0+
- [ ] TypeScript 5.3.3+
- [ ] @bixoryai/course-sdk v1.0.0

✅ **Required Endpoints**
- [ ] `GET /api/manifest` - Course manifest
- [ ] `GET /api/health` - Health check
- [ ] `POST /api/progress/sync` - Progress synchronization

✅ **Features**
- [ ] SSO authentication via portal tokens
- [ ] Progress tracking to shared Supabase
- [ ] Dual-mode support (standalone + embedded)
- [ ] Row-Level Security configured

---

## Course-Specific Features

### Architecture
- **Frontend:** [TODO: Next.js 14 + React 18 or specify framework]
- **Backend:** [TODO: None, or specify backend stack]
- **Code Execution:** [TODO: None, Pyodide, or other]
- **Content:** [TODO: X chapters, languages]

### Ports
- Frontend: `3001`
- Backend: `[TODO: N/A or port number]`

### Special Features
[TODO: List any unique features of your course]
- Example: Interactive code execution
- Example: AI-powered quizzes
- Example: Real-time collaboration

---

## Development

### Quick Start

```bash
# Install dependencies
cd frontend
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with Supabase credentials

# Run development server
npm run dev  # http://localhost:3001
```

### Test Integration with Portal

```bash
# Terminal 1: Start portal
cd path/to/training-portal
npm run dev  # http://localhost:8888

# Terminal 2: Start this course
cd frontend
npm run dev  # http://localhost:3001

# Visit http://localhost:8888 and enroll in "[TODO: Your Course]"
```

---

## Deployment

```bash
# Deploy to Vercel
cd frontend
vercel deploy --prod

# Set environment variables in Vercel dashboard
# - SUPABASE_URL
# - SUPABASE_ANON_KEY
# - PORTAL_SSO_SECRET
# - PORTAL_API_URL
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
- **Course Issues:** [TODO: your-course-repo/issues]
- **Documentation:** https://training-portal.bixory.ai/docs

---

**Last Updated:** 2025-12-16
