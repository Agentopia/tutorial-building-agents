# SSO Configuration Guide

## Overview
This document describes the SSO (Single Sign-On) configuration required for hello-agents to integrate with the training-portal.

## Required Environment Variables

Update your `.env.local` file with the following configuration:

```bash
# Course Configuration - MUST match portal database course slug
COURSE_ID="hello-agents"
NEXT_PUBLIC_COURSE_ID="hello-agents"

# Portal API
PORTAL_API_URL="http://localhost:8888"
NEXT_PUBLIC_PORTAL_API_URL="http://localhost:8888"

# SSO Integration - MUST match portal COURSE_SSO_SECRET
PORTAL_SSO_SECRET="shared-dev-secret-for-sso-integration-32-chars"
COURSE_API_KEY="dev-course-api-key-for-progress-reporting"

# Supabase (shared with training-portal)
SUPABASE_URL="http://127.0.0.1:54321"
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
NEXT_PUBLIC_SUPABASE_URL="http://127.0.0.1:54321"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
```

## Critical Configuration Points

### 1. Course ID Matching
**IMPORTANT:** The `COURSE_ID` must match the course `slug` in the training-portal database.

- Training-portal course slug: `hello-agents`
- Hello-agents COURSE_ID: `hello-agents`
- If these don't match, SSO will fail with "SSO token is for different course" error

### 2. Shared Secret
The `PORTAL_SSO_SECRET` must be identical in both:
- Training-portal: `.env.local` → `COURSE_SSO_SECRET`
- Hello-agents: `.env.local` → `PORTAL_SSO_SECRET`

This secret is used to sign and verify JWT tokens for SSO authentication.

### 3. Supabase Connection
Both portal and hello-agents connect to the same Supabase instance for:
- User data
- Progress tracking
- Shared database operations

## SSO Flow

1. User logs into training-portal (localhost:8888)
2. Portal checks if course has `prodUrl` set in database
3. Portal generates JWT SSO token with user data (5-min expiration)
4. Portal redirects to `http://localhost:3001/?sso_token=...`
5. Hello-agents middleware validates token:
   - Verifies signature using `PORTAL_SSO_SECRET`
   - Checks `courseId` matches `COURSE_ID`
   - Validates expiration
6. Hello-agents creates 7-day session cookie
7. User is authenticated in hello-agents

## Troubleshooting

### "SSO token is for different course"
**Cause:** `COURSE_ID` in .env.local doesn't match portal course slug

**Fix:**
```bash
# Update .env.local
COURSE_ID="hello-agents"
NEXT_PUBLIC_COURSE_ID="hello-agents"

# Restart server
npm run dev
```

### "Invalid token" or "Token verification failed"
**Cause:** `PORTAL_SSO_SECRET` doesn't match between portal and course

**Fix:** Ensure both use the same secret value

### Redirect fails or gets stuck
**Cause:** `prodUrl` not set in portal database

**Fix:**
```sql
-- Update course in portal database
UPDATE "Course"
SET "prodUrl" = 'http://localhost:3001'
WHERE slug = 'hello-agents';
```

## Testing

1. Start both servers:
```bash
# Terminal 1: Training Portal
cd path/to/training-portal
npm run dev  # http://localhost:8888

# Terminal 2: Hello-Agents
cd path/to/hello-agents/frontend
npm run dev  # http://localhost:3001
```

2. Navigate to http://localhost:8888 and login
3. Click "Continue" on Hello Agents course
4. Verify redirect to http://localhost:3001 with authentication

## Production Configuration

For production deployments:

1. Generate a secure 32+ character secret:
```bash
openssl rand -hex 32
```

2. Update both portals with production URLs
3. Use HTTPS for all connections
4. Set appropriate CORS policies
5. Configure production Supabase instance

## References

- SSO Implementation: commit 54269ea (hello-agents), 50ca5d5 (portal)
- Build Fixes: commit e6866a3 (portal)
- Documentation: BUILD_PLAN.md, README.md
