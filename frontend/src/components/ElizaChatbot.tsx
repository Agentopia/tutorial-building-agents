'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, RotateCcw } from 'lucide-react'

interface Message {
  role: 'user' | 'therapist'
  content: string
}

// ELIZA pattern matching rules (from Chapter 2)
const rules: { [key: string]: string[] } = {
  '(.*)I need(.*)': [
    'Why do you need{0}?',
    'Would it really help you to get{0}?',
    'Are you sure you need{0}?'
  ],
  '(.*)I am(.*)': [
    'Did you come to me because you are{0}?',
    'How long have you been{0}?',
    'How do you feel about being{0}?'
  ],
  '(.*)mother(.*)': [
    'Tell me more about your mother.',
    'What was your relationship with your mother like?',
    'How do you feel about your mother?'
  ],
  '(.*)father(.*)': [
    'Tell me more about your father.',
    'How did your father make you feel?',
    'What has your father taught you?'
  ],
  '(.*)feel(.*)': [
    'What makes you feel{0}?',
    'Tell me more about those feelings.',
    'Why do you think you feel this way?'
  ],
  '(.*)happy(.*)': [
    'What makes you happy?',
    'I\'m glad you\'re feeling happy!',
    'What brings you joy?'
  ],
  '(.*)sad(.*)': [
    'I\'m sorry you\'re feeling sad.',
    'What would make you feel better?',
    'Can you tell me what\'s troubling you?'
  ],
  '.*': [
    'Please tell me more.',
    'Let\'s change focus a bit... Tell me about your family.',
    'Can you elaborate on that?',
    'I see. Go on...',
    'That\'s interesting. What else?'
  ]
}

// Pronoun swapping for reflection (from Chapter 2)
const pronounSwap: { [key: string]: string } = {
  'i': 'you', 'you': 'I', 'me': 'you', 'my': 'your',
  'am': 'are', 'are': 'am', 'was': 'were', 'i\'d': 'you would',
  'i\'ve': 'you have', 'i\'ll': 'you will', 'yours': 'mine',
  'mine': 'yours', 'I': 'you', 'My': 'your'
}

function swapPronouns(phrase: string): string {
  const words = phrase.split(' ')
  const swapped = words.map(word => {
    const lower = word.toLowerCase()
    return pronounSwap[lower] || word
  })
  return swapped.join(' ')
}

function getResponse(userInput: string): string {
  // Try each pattern
  for (const [pattern, responses] of Object.entries(rules)) {
    const regex = new RegExp(pattern, 'i')
    const match = userInput.match(regex)

    if (match) {
      // Get captured group and swap pronouns
      const captured = match[1] || ''
      const swapped = swapPronouns(captured)

      // Randomly select a response template
      const template = responses[Math.floor(Math.random() * responses.length)]

      // Replace {0} with swapped phrase
      return template.replace('{0}', swapped ? ' ' + swapped : '')
    }
  }

  // Fallback to wildcard
  const wildcardResponses = rules['.*']
  return wildcardResponses[Math.floor(Math.random() * wildcardResponses.length)]
}

export default function ElizaChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'therapist', content: 'Hello! How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim() || isTyping) return

    // Add user message
    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(input.trim())
      const therapistMessage: Message = { role: 'therapist', content: response }
      setMessages(prev => [...prev, therapistMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleReset = () => {
    setMessages([
      { role: 'therapist', content: 'Hello! How can I help you today?' }
    ])
    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">ELIZA Therapist (1966)</h3>
              <p className="text-sm text-purple-100">Pattern-matching chatbot demo</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            title="Reset conversation"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="text-xs font-semibold mb-1 opacity-75">
                  {msg.role === 'user' ? 'You' : 'Therapist'}
                </div>
                <div className="text-sm">{msg.content}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 border border-gray-200 dark:border-gray-700">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            disabled={isTyping}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          💡 <strong>Tip:</strong> Try mentioning "mother", "father", "I need", "I am", or feelings to see pattern matching in action!
        </div>
      </div>

      {/* Limitations Notice */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-t border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <strong>⚠️ ELIZA Effect:</strong> This chatbot uses simple pattern matching with no real understanding.
          It demonstrates the limitations of rule-based systems described in Chapter 2.2.
        </p>
      </div>
    </div>
  )
}
