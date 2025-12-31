import { NextResponse } from 'next/server'
import { getSessionFromCookie } from '@/lib/auth'

/**
 * GET /api/auth/session
 * Returns current user session data
 */
export async function GET() {
  try {
    const session = await getSessionFromCookie()

    if (session && session.expiresAt > Date.now()) {
      return NextResponse.json({
        user: {
          userId: session.userId,
          email: session.email,
          name: session.name,
        },
        expiresAt: session.expiresAt,
      })
    }

    return NextResponse.json({ user: null }, { status: 401 })
  } catch (error) {
    console.error('Session fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch session' },
      { status: 500 }
    )
  }
}
