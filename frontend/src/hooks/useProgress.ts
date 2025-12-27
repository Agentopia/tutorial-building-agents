import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const COURSE_ID = process.env.NEXT_PUBLIC_COURSE_ID || 'elated-neumann'

interface ChapterProgress {
  percentage: number
  completed: boolean
  quizScore?: number
  exerciseCompleted?: boolean
  lastUpdated?: string
}

interface ProgressState {
  [chapterId: string]: ChapterProgress
}

export function useProgress(userId?: string) {
  const [progress, setProgress] = useState<ProgressState>({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize Supabase client
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  // Load progress from Supabase on mount
  useEffect(() => {
    async function loadProgress() {
      if (!userId || !process.env.ENABLE_PROGRESS_TRACKING) {
        setIsLoading(false)
        return
      }

      try {
        const { data, error: fetchError } = await supabase
          .from('course_progress')
          .select('*')
          .eq('user_id', userId)
          .eq('course_id', COURSE_ID)

        if (fetchError) {
          throw fetchError
        }

        // Transform array to object keyed by chapter_id
        const progressMap: ProgressState = {}
        data?.forEach((item) => {
          progressMap[item.chapter_id] = {
            percentage: item.percentage || 0,
            completed: item.completed || false,
            quizScore: item.quiz_score,
            exerciseCompleted: item.exercise_completed,
            lastUpdated: item.updated_at,
          }
        })

        setProgress(progressMap)
      } catch (err) {
        console.error('Failed to load progress:', err)
        setError(err instanceof Error ? err.message : 'Failed to load progress')
      } finally {
        setIsLoading(false)
      }
    }

    loadProgress()
  }, [userId, supabase])

  // Update progress for a chapter
  const updateProgress = async (
    chapterId: string,
    progressData: Partial<ChapterProgress>
  ): Promise<void> => {
    if (!userId || !process.env.ENABLE_PROGRESS_TRACKING) {
      // Fallback: update local state only
      setProgress((prev) => ({
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          ...progressData,
        },
      }))
      return
    }

    try {
      // Sync to API endpoint (which handles Supabase)
      const response = await fetch('/api/progress/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          chapterId,
          progress: progressData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to sync progress')
      }

      // Update local state
      setProgress((prev) => ({
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          ...progressData,
        },
      }))
    } catch (err) {
      console.error('Failed to update progress:', err)
      setError(err instanceof Error ? err.message : 'Failed to update progress')
      throw err
    }
  }

  // Mark chapter as completed
  const completeChapter = async (chapterId: string): Promise<void> => {
    await updateProgress(chapterId, {
      percentage: 100,
      completed: true,
    })
  }

  // Update quiz score
  const updateQuizScore = async (chapterId: string, score: number): Promise<void> => {
    await updateProgress(chapterId, {
      quizScore: score,
    })
  }

  // Mark exercise as completed
  const completeExercise = async (chapterId: string): Promise<void> => {
    await updateProgress(chapterId, {
      exerciseCompleted: true,
    })
  }

  // Get progress for a specific chapter
  const getChapterProgress = (chapterId: string): ChapterProgress => {
    return progress[chapterId] || {
      percentage: 0,
      completed: false,
    }
  }

  // Get overall course progress
  const getOverallProgress = (): number => {
    const chapters = Object.values(progress)
    if (chapters.length === 0) return 0

    const totalPercentage = chapters.reduce((sum, ch) => sum + ch.percentage, 0)
    return Math.round(totalPercentage / 16) // 16 total chapters
  }

  return {
    progress,
    isLoading,
    error,
    updateProgress,
    completeChapter,
    updateQuizScore,
    completeExercise,
    getChapterProgress,
    getOverallProgress,
  }
}
