'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2>Oops! Possibly a Connection Error!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  )
}