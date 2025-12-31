/**
 * SSO Token Generator for Testing
 *
 * This script generates a valid SSO token that can be used to test
 * the SSO authentication flow without needing the training-portal running.
 *
 * Usage:
 *   node test-sso.js
 *
 * Then visit:
 *   http://localhost:3001?sso_token=<generated_token>
 */

const jose = require('jose')

async function generateSSOToken() {
  const secret = 'shared-dev-secret-for-sso-integration-32-chars'
  const courseId = 'elated-neumann'

  // Create test user payload
  const payload = {
    userId: 'test-user-123',
    email: 'testuser@example.com',
    name: 'Test User',
    courseId: courseId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 300 // 5 minutes from now
  }

  // Sign token with HS256
  const secretKey = new TextEncoder().encode(secret)
  const token = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(payload.iat)
    .setExpirationTime(payload.exp)
    .sign(secretKey)

  console.log('\n='.repeat(80))
  console.log('SSO Token Generated Successfully!')
  console.log('='.repeat(80))
  console.log('\nToken Payload:')
  console.log(JSON.stringify(payload, null, 2))
  console.log('\nSSO Token:')
  console.log(token)
  console.log('\nTest URL:')
  console.log(`http://localhost:3001?sso_token=${token}`)
  console.log('\n' + '='.repeat(80))
  console.log('\nInstructions:')
  console.log('1. Make sure the dev server is running (npm run dev)')
  console.log('2. Open the Test URL in your browser')
  console.log('3. The middleware should validate the token and create a session')
  console.log('4. You should be redirected to the homepage, logged in as Test User')
  console.log('5. Check the header - you should see "Test User" and a Logout button')
  console.log('='.repeat(80) + '\n')
}

generateSSOToken().catch(console.error)
