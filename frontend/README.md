# Hello Agents - Frontend

Next.js 14 frontend for the Hello Agents tutorial, integrated with BixoryAI Training Portal.

## ✅ Setup Complete

### Installed
- ✅ Next.js 14.2.18 (App Router)
- ✅ React 18.3.1
- ✅ TypeScript 5
- ✅ Tailwind CSS 3.4

### Directory Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── manifest/route.ts      ✅ GET /api/manifest
│   │   │   ├── health/route.ts        ✅ GET /api/health
│   │   │   └── progress/sync/route.ts ✅ POST /api/progress/sync
│   │   ├── learn/[slug]/              (to be implemented)
│   │   ├── layout.tsx                 ✅ Root layout
│   │   ├── page.tsx                   ✅ Homepage
│   │   └── globals.css                ✅ Tailwind styles
│   └── components/                    (to be implemented)
│
├── .env.local                         ✅ Environment config
├── package.json                       ✅ Port 3001
└── tsconfig.json                      ✅ TypeScript config
```

## 🚀 Development

```bash
npm run dev     # Start dev server on port 3001
npm run build   # Build for production
npm run start   # Start production server
```

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

## 📋 Next Steps

### 1. Install Course SDK
```bash
npm install @bixoryai/course-sdk
```

### 2. Implement Components
- [ ] ChapterViewer - Display chapter content
- [ ] NavigationSidebar - Chapter navigation
- [ ] ProgressTracker - Track user progress

### 3. Configure Supabase
Update `.env.local` with actual Supabase credentials:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `PORTAL_SSO_SECRET`
- `COURSE_API_KEY`

### 4. Implement Progress Tracking
Uncomment Supabase code in `src/app/api/progress/sync/route.ts`

### 5. Add Chapter Pages
Create dynamic routes in `src/app/learn/[slug]/page.tsx`

### 6. Test with Training Portal
```bash
# Terminal 1: training-portal
cd ../../BixoryAI/training-portal
npm run dev  # Port 8888

# Terminal 2: hello-agents
cd frontend
npm run dev  # Port 3001
```

## 📚 Integration

This frontend integrates with BixoryAI Training Portal following spec v1.0.0.

See `../INTEGRATION.md` for complete integration details.

## 🔗 Resources

- [Integration Guide](C:/Coding/BixoryAI/training-portal/docs/INTEGRATION_GUIDE.md)
- [Training Portal](https://github.com/bixoryai/training-portal)
- [Course SDK](C:/Coding/BixoryAI/training-portal/packages/course-sdk)
