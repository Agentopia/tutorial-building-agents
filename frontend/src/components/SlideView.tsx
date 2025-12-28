'use client'

import { useState, useEffect, ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export interface Slide {
  id: string
  title: string
  content: ReactNode
  type?: 'intro' | 'content' | 'visual' | 'interactive' | 'summary'
}

interface SlideViewProps {
  slides: Slide[]
  chapterId: number
  chapterTitle: string
  onSlideChange?: (slideIndex: number) => void
}

export default function SlideView({ slides, chapterId, chapterTitle, onSlideChange }: SlideViewProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        goToNext()
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        goToPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, slides.length])

  // Notify parent of slide change
  useEffect(() => {
    onSlideChange?.(currentSlide)
  }, [currentSlide, onSlideChange])

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const progress = ((currentSlide + 1) / slides.length) * 100

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/chapters" className="text-blue-600 hover:text-blue-700">
                <Home className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Chapter {chapterId}: {chapterTitle}
                </h1>
                <p className="text-sm text-gray-500">
                  Slide {currentSlide + 1} of {slides.length}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                disabled={currentSlide === 0}
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>
              <button
                onClick={goToNext}
                disabled={currentSlide === slides.length - 1}
                className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="w-full max-w-6xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12 min-h-[500px]"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Dots Navigation */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8'
                    : index < currentSlide
                    ? 'bg-blue-300'
                    : 'bg-gray-300'
                }`}
                title={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            Use arrow keys (← →) to navigate
          </p>
        </div>
      </div>
    </div>
  )
}
