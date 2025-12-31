import { NextResponse } from 'next/server'
import { clearSessionCookie } from '@/lib/auth'

/**
 * POST /api/auth/logout
 * Clears session and logs user out
 */
export async function POST() {
  try {
    clearSessionCookie()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    )
  }
}
