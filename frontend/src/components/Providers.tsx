'use client'

import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useLearningStore } from '@/store/learningStore'

export default function Providers({ children }: { children: React.ReactNode }) {
  const updateStreak = useLearningStore(state => state.updateStreak)

  // Update streak on mount
  useEffect(() => {
    updateStreak()
  }, [updateStreak])

  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#0f172a',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            fontWeight: 500,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff'
            }
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff'
            }
          }
        }}
      />
    </>
  )
}
