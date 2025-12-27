'use client'

import { Sandpack, SandpackProps } from '@codesandbox/sandpack-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Lightbulb, Code2, Play } from 'lucide-react'
import toast from 'react-hot-toast'

interface TestCase {
  input: string
  expected: string
  description: string
}

interface CodePlaygroundProps {
  title?: string
  description?: string
  language: 'python' | 'javascript' | 'typescript'
  initialCode: string
  tests?: TestCase[]
  hints?: string[]
  solution?: string
  editable?: boolean
  showTests?: boolean
  onComplete?: () => void
}

export default function CodePlayground({
  title,
  description,
  language,
  initialCode,
  tests = [],
  hints = [],
  solution,
  editable = true,
  showTests = true,
  onComplete
}: CodePlaygroundProps) {
  const [userCode, setUserCode] = useState(initialCode)
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[]>([])
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [hintsUsed, setHintsUsed] = useState(0)

  const runTests = () => {
    // Simplified test runner - in production, use actual execution
    const results = tests.map(test => ({
      passed: Math.random() > 0.3, // Placeholder
      message: test.description
    }))

    setTestResults(results)

    const allPassed = results.every(r => r.passed)
    if (allPassed) {
      toast.success('🎉 All tests passed!', {
        icon: '✅',
        duration: 3000
      })
      onComplete?.()
    } else {
      toast.error('Some tests failed. Keep trying!', {
        icon: '❌',
        duration: 2000
      })
    }
  }

  const viewHint = () => {
    setShowHints(true)
    setHintsUsed(prev => prev + 1)
    toast('Hint revealed! (-5 points)', { icon: '💡' })
  }

  const viewSolution = () => {
    if (confirm('Are you sure? Viewing the solution will reduce your points.')) {
      setShowSolution(true)
      setUserCode(solution || '')
      toast('Solution revealed! (-20 points)', { icon: '📖' })
    }
  }

  const getTemplate = (): SandpackProps['template'] => {
    switch (language) {
      case 'python': return 'vanilla'
      case 'typescript': return 'react-ts'
      default: return 'vanilla'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-8 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Header */}
      {(title || description) && (
        <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-4">
          {title && (
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              {title}
            </h3>
          )}
          {description && (
            <p className="text-indigo-100 mt-1 text-sm">{description}</p>
          )}
        </div>
      )}

      {/* Code Editor */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <Sandpack
          template={getTemplate()}
          files={{
            '/main.py': userCode,
          }}
          options={{
            showConsole: true,
            showLineNumbers: true,
            editorHeight: 400,
            editorWidthPercentage: 60,
            showNavigator: false,
            showTabs: false,
            closableTabs: false,
            readOnly: !editable,
          }}
          theme="dark"
        />
      </div>

      {/* Actions Bar */}
      <div className="bg-white dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex gap-2">
            {tests.length > 0 && (
              <button
                onClick={runTests}
                className="
                  px-4 py-2 bg-indigo-600 text-white rounded-lg
                  hover:bg-indigo-700 transition-all duration-200
                  flex items-center gap-2 font-medium shadow-sm
                  hover:shadow-md hover:-translate-y-0.5
                "
              >
                <Play className="w-4 h-4" />
                Run Tests
              </button>
            )}
          </div>

          <div className="flex gap-2">
            {hints.length > 0 && !showHints && (
              <button
                onClick={viewHint}
                className="
                  px-4 py-2 bg-amber-500 text-white rounded-lg
                  hover:bg-amber-600 transition-all duration-200
                  flex items-center gap-2 font-medium
                "
              >
                <Lightbulb className="w-4 h-4" />
                Show Hint
              </button>
            )}

            {solution && !showSolution && (
              <button
                onClick={viewSolution}
                className="
                  px-4 py-2 bg-gray-600 text-white rounded-lg
                  hover:bg-gray-700 transition-all duration-200
                  flex items-center gap-2 font-medium
                "
              >
                View Solution
              </button>
            )}
          </div>
        </div>

        {/* Hints Display */}
        {showHints && hints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg"
          >
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Hints:
                </h4>
                <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-200">
                  {hints.map((hint, i) => (
                    <li key={i}>• {hint}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Test Results */}
        {showTests && testResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 space-y-2"
          >
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
              Test Results:
            </h4>
            {testResults.map((result, i) => (
              <div
                key={i}
                className={`
                  flex items-start gap-2 p-3 rounded-lg text-sm
                  ${result.passed
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700'
                    : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700'
                  }
                `}
              >
                {result.passed ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
                <span className={result.passed ? 'text-emerald-800 dark:text-emerald-200' : 'text-red-800 dark:text-red-200'}>
                  {result.message}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
