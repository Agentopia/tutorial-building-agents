import Link from 'next/link'

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen page-background">
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Hello Agents
            </Link>
            <Link
              href="/chapters"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              ← Back to Chapters
            </Link>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}
