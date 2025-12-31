import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { extractSSOToken, verifySSOToken, verifySessionToken, createSessionToken } from './lib/auth'

const SESSION_COOKIE_NAME = 'hello-agents-session'
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 days

// Routes that don't require authentication
const PUBLIC_ROUTES = [
  '/api/manifest',
  '/api/health',
  '/_next',
  '/icon.svg',
  '/favicon.ico',
]

// Portal URL for redirecting unauthenticated users
const PORTAL_URL = process.env.PORTAL_API_URL || 'http://localhost:8888'

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some(route => pathname.startsWith(route))
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // Allow public routes
  if (isPublicRoute(pathname)) {
    return NextResponse.next()
  }

  // Check for SSO token in URL (new authentication)
  const ssoToken = extractSSOToken(request.url)

  if (ssoToken) {
    // Verify SSO token from training-portal
    const payload = await verifySSOToken(ssoToken)

    if (payload) {
      // Create session
      const sessionData = {
        userId: payload.userId,
        email: payload.email,
        name: payload.name,
        expiresAt: Date.now() + SESSION_DURATION,
      }

      const sessionToken = await createSessionToken(sessionData)

      // Remove sso_token from URL and redirect
      const url = request.nextUrl.clone()
      url.searchParams.delete('sso_token')

      const response = NextResponse.redirect(url)

      // Set session cookie
      response.cookies.set(SESSION_COOKIE_NAME, sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: SESSION_DURATION / 1000,
        path: '/',
      })

      return response
    } else {
      // Invalid SSO token - redirect to portal
      const portalLoginUrl = `${PORTAL_URL}/login?error=invalid_token&return_url=${encodeURIComponent(request.url)}`
      return NextResponse.redirect(portalLoginUrl)
    }
  }

  // Check existing session
  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)

  if (sessionToken) {
    const session = await verifySessionToken(sessionToken.value)

    if (session && session.expiresAt > Date.now()) {
      // Valid session - allow access
      return NextResponse.next()
    }

    // Session expired - clear cookie and redirect to portal
    const response = NextResponse.redirect(
      new URL(`${PORTAL_URL}/login?error=session_expired&return_url=${encodeURIComponent(request.url)}`)
    )
    response.cookies.delete(SESSION_COOKIE_NAME)
    return response
  }

  // No SSO token and no valid session - redirect to portal
  const loginUrl = `${PORTAL_URL}/login?return_url=${encodeURIComponent(request.url)}`
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (handled separately)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg (favicon files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg).*)',
  ],
}
