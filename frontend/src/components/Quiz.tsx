'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, ChevronRight, Trophy, RotateCcw } from 'lucide-react'
import { useLearningStore } from '@/store/learningStore'
import toast from 'react-hot-toast'

interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
}

interface QuizQuestion {
  id: string
  type: 'multiple-choice' | 'true-false' | 'code-completion'
  question: string
  options: QuizOption[]
  explanation?: string
  points: number
}

interface QuizProps {
  chapterId: number
  title: string
  questions: QuizQuestion[]
  passingScore: number
  onComplete?: (score: number) => void
}

export default function Quiz({
  chapterId,
  title,
  questions,
  passingScore = 70,
  onComplete
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const { addPoints } = useLearningStore()

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1
  const selectedAnswer = selectedAnswers[currentQuestion]

  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionId
    }))
  }

  const handleNext = () => {
    if (!selectedAnswer) {
      toast.error('Please select an answer')
      return
    }

    if (isLastQuestion) {
      calculateScore()
    } else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    let totalPoints = 0

    questions.forEach((q, index) => {
      const selectedOption = q.options.find(opt => opt.id === selectedAnswers[index])
      if (selectedOption?.isCorrect) {
        correct++
        totalPoints += q.points
      }
    })

    const percentage = Math.round((correct / questions.length) * 100)
    setScore(percentage)
    setShowResults(true)

    // Award points if passed
    if (percentage >= passingScore) {
      addPoints(totalPoints)
      toast.success(`🎉 Quiz passed! +${totalPoints} points`)
      onComplete?.(percentage)
    } else {
      toast.error('Quiz failed. Try again!')
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const passed = score >= passingScore
    const correctCount = questions.filter((q, i) => {
      const selectedOption = q.options.find(opt => opt.id === selectedAnswers[i])
      return selectedOption?.isCorrect
    }).length

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="my-8 p-8 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg"
      >
        <div className="text-center">
          {/* Score Display */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`
              w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center
              ${passed
                ? 'bg-gradient-to-br from-emerald-400 to-cyan-500'
                : 'bg-gradient-to-br from-red-400 to-orange-500'
              }
            `}
          >
            <div className="text-white">
              <div className="text-4xl font-bold">{score}%</div>
              <div className="text-sm">Score</div>
            </div>
          </motion.div>

          {/* Result Message */}
          <h2 className={`
            text-3xl font-bold mb-2
            ${passed ? 'text-emerald-600' : 'text-red-600'}
          `}>
            {passed ? '🎉 Congratulations!' : '📚 Keep Learning'}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {passed
              ? `You scored ${correctCount} out of ${questions.length} questions correctly!`
              : `You need ${passingScore}% to pass. You got ${correctCount} out of ${questions.length} correct.`
            }
          </p>

          {/* Question Review */}
          <div className="space-y-4 mb-8 text-left">
            {questions.map((q, index) => {
              const selectedOption = q.options.find(opt => opt.id === selectedAnswers[index])
              const isCorrect = selectedOption?.isCorrect
              const correctOption = q.options.find(opt => opt.isCorrect)

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    p-4 rounded-lg border-2
                    ${isCorrect
                      ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700'
                      : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-700'
                    }
                  `}
                >
                  <div className="flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        {q.question}
                      </div>
                      <div className="text-sm">
                        <div className={isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}>
                          Your answer: {selectedOption?.text || 'Not answered'}
                        </div>
                        {!isCorrect && (
                          <div className="text-emerald-700 dark:text-emerald-300 mt-1">
                            Correct answer: {correctOption?.text}
                          </div>
                        )}
                      </div>
                      {q.explanation && (
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 p-2 rounded">
                          💡 {q.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center">
            {!passed && (
              <button
                onClick={handleRetry}
                className="
                  px-6 py-3 bg-indigo-600 text-white rounded-lg
                  hover:bg-indigo-700 transition-all duration-200
                  flex items-center gap-2 font-medium shadow-sm
                  hover:shadow-md hover:-translate-y-0.5
                "
              >
                <RotateCcw className="w-4 h-4" />
                Retry Quiz
              </button>
            )}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="
                px-6 py-3 bg-gray-600 text-white rounded-lg
                hover:bg-gray-700 transition-all duration-200
                flex items-center gap-2 font-medium
              "
            >
              Back to Chapter
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-8 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <div className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {question.points} pts
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
            />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option.id

              return (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelectAnswer(option.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full p-4 rounded-lg border-2 text-left transition-all
                    ${isSelected
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${isSelected
                        ? 'border-indigo-500 bg-indigo-500'
                        : 'border-gray-300 dark:border-gray-600'
                      }
                    `}>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </div>
                    <span className="text-gray-900 dark:text-gray-100">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              className="
                px-4 py-2 text-gray-600 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-gray-100
                disabled:opacity-40 disabled:cursor-not-allowed
                transition font-medium
              "
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="
                px-6 py-3 bg-indigo-600 text-white rounded-lg
                hover:bg-indigo-700 disabled:bg-gray-300 dark:disabled:bg-gray-700
                disabled:cursor-not-allowed transition-all duration-200
                flex items-center gap-2 font-medium shadow-sm
                hover:shadow-md hover:-translate-y-0.5
                disabled:hover:shadow-sm disabled:hover:translate-y-0
              "
            >
              {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
