'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export interface User {
  userId: string
  email?: string
  name?: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

/**
 * Client-side hook to access authentication state
 * Note: Actual authentication happens server-side via middleware
 * This hook just exposes the user data from session
 */
export function useAuth(): AuthState {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  })

  useEffect(() => {
    async function fetchUserSession() {
      try {
        // Call API to get current user session
        const response = await fetch('/api/auth/session')

        if (response.ok) {
          const data = await response.json()

          if (data.user) {
            setAuthState({
              user: data.user,
              isLoading: false,
              isAuthenticated: true,
            })
          } else {
            setAuthState({
              user: null,
              isLoading: false,
              isAuthenticated: false,
            })
          }
        } else {
          setAuthState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
          })
        }
      } catch (error) {
        console.error('Failed to fetch user session:', error)
        setAuthState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        })
      }
    }

    fetchUserSession()
  }, [])

  return authState
}

/**
 * Get user ID for API calls
 * Returns authenticated user ID or null
 */
export function useUserId(): string | null {
  const { user } = useAuth()
  return user?.userId || null
}

/**
 * Logout function - redirects to portal logout
 */
export function logout() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || 'http://localhost:8888'

  // Clear client-side cookies
  Cookies.remove('hello-agents-session')

  // Redirect to portal logout
  window.location.href = `${portalUrl}/logout?return_url=${encodeURIComponent(window.location.origin)}`
}
