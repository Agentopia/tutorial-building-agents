'use client'

import { motion } from 'framer-motion'
import { Trophy, Flame, Star, CheckCircle } from 'lucide-react'
import { useLearningStore } from '@/store/learningStore'
import Link from 'next/link'

interface ProgressIndicatorProps {
  currentChapter?: number
}

export default function ProgressIndicator({ currentChapter }: ProgressIndicatorProps) {
  const {
    chapters,
    totalPoints,
    streak,
    achievements,
    getTotalCompletedChapters,
    getOverallProgress
  } = useLearningStore()

  const completedCount = getTotalCompletedChapters()
  const overallProgress = getOverallProgress()

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Overall Progress */}
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-1">
            {overallProgress}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Progress
          </div>
        </div>

        {/* Chapters Completed */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {completedCount}
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Chapters
          </div>
        </div>

        {/* Total Points */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {totalPoints}
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Points
          </div>
        </div>

        {/* Streak */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Flame className={`w-5 h-5 ${streak > 0 ? 'text-orange-500' : 'text-gray-400'}`} />
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {streak}
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Day Streak
          </div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Overall Course Progress
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            {completedCount} / 16 chapters
          </span>
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500" />
            Recent Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {achievements.slice(-3).reverse().map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="
                  px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50
                  dark:from-amber-900/20 dark:to-orange-900/20
                  border border-amber-200 dark:border-amber-700
                  rounded-full text-sm font-medium
                  flex items-center gap-1.5
                "
                title={achievement.description}
              >
                <span>{achievement.icon}</span>
                <span className="text-gray-900 dark:text-gray-100">
                  {achievement.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Chapter Navigation */}
      {currentChapter && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {currentChapter > 1 && (
              <Link
                href={`/chapters/${currentChapter - 1}`}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                ← Previous Chapter
              </Link>
            )}
            {currentChapter < 16 && (
              <Link
                href={`/chapters/${currentChapter + 1}`}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium ml-auto"
              >
                Next Chapter →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
