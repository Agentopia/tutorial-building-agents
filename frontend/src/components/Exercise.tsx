'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, Trophy, Star } from 'lucide-react'
import CodePlayground from './CodePlayground'
import { useLearningStore } from '@/store/learningStore'
import Confetti from 'react-confetti'
import { useWindowSize } from '@/hooks/useWindowSize'

interface TestCase {
  input: string
  expected: string
  description: string
}

interface ExerciseProps {
  id: string
  chapterId: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
  starterCode: string
  tests: TestCase[]
  hints: string[]
  solution: string
  language?: 'python' | 'javascript' | 'typescript'
}

export default function Exercise({
  id,
  chapterId,
  title,
  description,
  difficulty,
  points,
  starterCode,
  tests,
  hints,
  solution,
  language = 'python'
}: ExerciseProps) {
  const [completed, setCompleted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const { submitExercise, addPoints, exercises } = useLearningStore()

  const existingExercise = exercises.get(id)
  const attempts = existingExercise?.attempts || 0
  const alreadyCompleted = existingExercise?.passed || false

  const handleComplete = () => {
    if (!alreadyCompleted) {
      setCompleted(true)
      setShowConfetti(true)

      // Calculate points based on hints used and attempts
      const hintPenalty = 0 // Track from CodePlayground
      const attemptPenalty = Math.min(attempts * 5, 25)
      const earnedPoints = Math.max(points - hintPenalty - attemptPenalty, 10)

      submitExercise({
        id,
        chapterId,
        code: starterCode, // TODO: Get actual user code
        passed: true,
        attempts: attempts + 1,
        hintsUsed: 0 // TODO: Track from CodePlayground
      })

      addPoints(earnedPoints)

      setTimeout(() => setShowConfetti(false), 5000)
    }
  }

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'easy': return 'text-emerald-600 bg-emerald-50 border-emerald-200'
      case 'medium': return 'text-amber-600 bg-amber-50 border-amber-200'
      case 'hard': return 'text-red-600 bg-red-50 border-red-200'
    }
  }

  const getDifficultyStars = () => {
    const count = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-12"
    >
      {/* Confetti on completion */}
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
          />
        )}
      </AnimatePresence>

      {/* Exercise Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {title}
              </h2>
              {alreadyCompleted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 text-emerald-600"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Completed</span>
                </motion.div>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            {/* Difficulty Badge */}
            <div className={`
              px-3 py-1 rounded-full border text-sm font-medium
              flex items-center gap-1 ${getDifficultyColor()}
            `}>
              {getDifficultyStars()}
              <span className="ml-1 capitalize">{difficulty}</span>
            </div>

            {/* Points Badge */}
            <div className="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-semibold">{points} pts</span>
            </div>
          </div>
        </div>

        {/* Attempts Counter */}
        {attempts > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Attempts: {attempts}
          </div>
        )}
      </div>

      {/* Code Playground */}
      <CodePlayground
        title="Your Solution"
        description="Write your code below and run the tests"
        language={language}
        initialCode={starterCode}
        tests={tests}
        hints={hints}
        solution={solution}
        editable={true}
        showTests={true}
        onComplete={handleComplete}
      />

      {/* Success Message */}
      <AnimatePresence>
        {completed && !alreadyCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-emerald-900 mb-1">
                  🎉 Exercise Completed!
                </h3>
                <p className="text-emerald-700 mb-3">
                  Great work! You've earned {points} points and unlocked the next lesson.
                </p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium">
                    Continue to Next Lesson →
                  </button>
                  <button className="px-4 py-2 bg-white text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition font-medium">
                    View Solution
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
