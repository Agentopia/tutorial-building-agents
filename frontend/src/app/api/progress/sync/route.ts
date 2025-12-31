import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { getSessionFromCookie } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    // Get authenticated user from session
    const session = await getSessionFromCookie()

    if (!session || session.expiresAt < Date.now()) {
      return NextResponse.json(
        { error: 'Unauthorized - Please login' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { chapterId, progress } = body

    // Use authenticated user ID from session (not from request body)
    const userId = session.userId

    console.log('Progress sync:', { userId, chapterId, progress })

    // Initialize Supabase client
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    )

    // Sync progress to shared Supabase database
    const { data, error } = await supabase.from('course_progress').upsert({
      user_id: userId,
      course_id: process.env.COURSE_ID || 'elated-neumann',
      chapter_id: chapterId,
      percentage: progress.percentage || 0,
      completed: progress.completed || false,
      quiz_score: progress.quizScore || null,
      exercise_completed: progress.exerciseCompleted || false,
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'user_id,course_id,chapter_id'
    })

    if (error) {
      console.error('Supabase upsert error:', error)
      throw error
    }

    return NextResponse.json({
      success: true,
      message: 'Progress synced successfully',
      data
    })
  } catch (error) {
    console.error('Progress sync error:', error)
    return NextResponse.json(
      { error: 'Failed to sync progress', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
