import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    courseId: process.env.COURSE_ID || 'hello-agents',
    version: '1.0.0',
  })
}
