import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ChapterProgress {
  completed: boolean
  percentage: number
  lastVisited: number
  timeSpent: number
  exercisesCompleted: Set<string>
  quizScore?: number
}

interface Exercise {
  id: string
  chapterId: number
  code: string
  passed: boolean
  attempts: number
  hintsUsed: number
  timestamp: number
}

interface Achievement {
  id: string
  title: string
  description: string
  unlockedAt: number
  icon: string
}

interface LearningState {
  // Progress tracking
  chapters: Map<number, ChapterProgress>
  exercises: Map<string, Exercise>
  achievements: Achievement[]

  // Stats
  totalPoints: number
  streak: number
  lastActiveDate: string
  startedAt: number

  // Actions
  startChapter: (chapterId: number) => void
  completeChapter: (chapterId: number) => void
  updateProgress: (chapterId: number, percentage: number) => void
  submitExercise: (exercise: Omit<Exercise, 'timestamp'>) => void
  unlockAchievement: (achievement: Omit<Achievement, 'unlockedAt'>) => void
  addPoints: (points: number) => void
  updateStreak: () => void
  resetProgress: () => void

  // Getters
  getChapterProgress: (chapterId: number) => ChapterProgress | undefined
  isChapterCompleted: (chapterId: number) => boolean
  canAccessChapter: (chapterId: number) => boolean
  getTotalCompletedChapters: () => number
  getOverallProgress: () => number
}

const initialChapterProgress: ChapterProgress = {
  completed: false,
  percentage: 0,
  lastVisited: Date.now(),
  timeSpent: 0,
  exercisesCompleted: new Set(),
  quizScore: undefined
}

export const useLearningStore = create<LearningState>()(
  persist(
    immer((set, get) => ({
      // Initial state
      chapters: new Map(),
      exercises: new Map(),
      achievements: [],
      totalPoints: 0,
      streak: 0,
      lastActiveDate: new Date().toISOString().split('T')[0],
      startedAt: Date.now(),

      // Actions
      startChapter: (chapterId: number) => {
        set((state) => {
          if (!state.chapters.has(chapterId)) {
            state.chapters.set(chapterId, {
              ...initialChapterProgress,
              lastVisited: Date.now()
            })
          } else {
            const chapter = state.chapters.get(chapterId)!
            chapter.lastVisited = Date.now()
          }
        })
      },

      completeChapter: (chapterId: number) => {
        set((state) => {
          const chapter = state.chapters.get(chapterId) || initialChapterProgress
          state.chapters.set(chapterId, {
            ...chapter,
            completed: true,
            percentage: 100,
            lastVisited: Date.now()
          })

          // Award points
          state.totalPoints += 100

          // Check for achievements
          const totalCompleted = get().getTotalCompletedChapters()
          if (totalCompleted === 1) {
            get().unlockAchievement({
              id: 'first-chapter',
              title: '🎓 First Chapter',
              description: 'Complete your first chapter',
              icon: '🎓'
            })
          } else if (totalCompleted === 5) {
            get().unlockAchievement({
              id: 'five-chapters',
              title: '🔥 On Fire',
              description: 'Complete 5 chapters',
              icon: '🔥'
            })
          } else if (totalCompleted === 16) {
            get().unlockAchievement({
              id: 'course-complete',
              title: '🏆 Course Master',
              description: 'Complete all 16 chapters!',
              icon: '🏆'
            })
          }
        })
      },

      updateProgress: (chapterId: number, percentage: number) => {
        set((state) => {
          const chapter = state.chapters.get(chapterId) || initialChapterProgress
          state.chapters.set(chapterId, {
            ...chapter,
            percentage: Math.max(chapter.percentage, percentage),
            lastVisited: Date.now()
          })
        })
      },

      submitExercise: (exercise) => {
        set((state) => {
          const existingExercise = state.exercises.get(exercise.id)
          const attempts = existingExercise ? existingExercise.attempts + 1 : 1

          state.exercises.set(exercise.id, {
            ...exercise,
            attempts,
            timestamp: Date.now()
          })

          // Update chapter progress
          const chapter = state.chapters.get(exercise.chapterId) || initialChapterProgress
          if (exercise.passed) {
            chapter.exercisesCompleted.add(exercise.id)

            // Award points (reduced by hints used)
            const basePoints = 50
            const hintPenalty = exercise.hintsUsed * 5
            const points = Math.max(basePoints - hintPenalty, 10)
            state.totalPoints += points
          }

          state.chapters.set(exercise.chapterId, chapter)
        })
      },

      unlockAchievement: (achievement) => {
        set((state) => {
          // Check if already unlocked
          if (!state.achievements.find(a => a.id === achievement.id)) {
            state.achievements.push({
              ...achievement,
              unlockedAt: Date.now()
            })
            state.totalPoints += 25
          }
        })
      },

      addPoints: (points: number) => {
        set((state) => {
          state.totalPoints += points
        })
      },

      updateStreak: () => {
        set((state) => {
          const today = new Date().toISOString().split('T')[0]
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

          if (state.lastActiveDate === yesterday) {
            // Continue streak
            state.streak += 1
          } else if (state.lastActiveDate !== today) {
            // Streak broken
            state.streak = 1
          }

          state.lastActiveDate = today

          // Check for streak achievements
          if (state.streak === 7) {
            get().unlockAchievement({
              id: 'week-streak',
              title: '🔥 Week Warrior',
              description: '7 day learning streak!',
              icon: '🔥'
            })
          } else if (state.streak === 30) {
            get().unlockAchievement({
              id: 'month-streak',
              title: '💪 Monthly Master',
              description: '30 day learning streak!',
              icon: '💪'
            })
          }
        })
      },

      resetProgress: () => {
        set({
          chapters: new Map(),
          exercises: new Map(),
          achievements: [],
          totalPoints: 0,
          streak: 0,
          lastActiveDate: new Date().toISOString().split('T')[0],
          startedAt: Date.now()
        })
      },

      // Getters
      getChapterProgress: (chapterId: number) => {
        return get().chapters.get(chapterId)
      },

      isChapterCompleted: (chapterId: number) => {
        return get().chapters.get(chapterId)?.completed || false
      },

      canAccessChapter: (chapterId: number) => {
        // Chapter 1 always accessible
        if (chapterId === 1) return true

        // Check if previous chapter is completed
        return get().isChapterCompleted(chapterId - 1)
      },

      getTotalCompletedChapters: () => {
        return Array.from(get().chapters.values())
          .filter(c => c.completed).length
      },

      getOverallProgress: () => {
        const totalChapters = 16
        const completed = get().getTotalCompletedChapters()
        return Math.round((completed / totalChapters) * 100)
      }
    })),
    {
      name: 'hello-agents-learning',
      // Serialize/deserialize functions for Map and Set
      partialize: (state) => {
        return {
          ...state,
          chapters: Array.from(state.chapters.entries()).map(([id, chapter]) => [
            id,
            {
              ...chapter,
              exercisesCompleted: Array.from(chapter.exercisesCompleted)
            }
          ]),
          exercises: Array.from(state.exercises.entries())
        }
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Convert arrays back to Maps/Sets
          if (Array.isArray(state.chapters)) {
            state.chapters = new Map(
              state.chapters.map(([id, chapter]: [any, any]) => [
                id,
                {
                  ...chapter,
                  exercisesCompleted: new Set(chapter.exercisesCompleted || [])
                }
              ])
            )
          }
          if (Array.isArray(state.exercises)) {
            state.exercises = new Map(state.exercises)
          }
        }
      }
    }
  )
)

// Sync to backend (placeholder for future Supabase integration)
export async function syncProgressToBackend() {
  const state = useLearningStore.getState()

  try {
    const response = await fetch('/api/progress/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'anonymous', // TODO: Get from auth
        chapters: Array.from(state.chapters.entries()),
        exercises: Array.from(state.exercises.entries()),
        totalPoints: state.totalPoints,
        streak: state.streak
      })
    })

    if (!response.ok) {
      console.error('Failed to sync progress')
    }
  } catch (error) {
    console.error('Error syncing progress:', error)
  }
}
