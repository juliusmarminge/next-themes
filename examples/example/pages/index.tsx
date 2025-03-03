import { useTheme } from '@juliusmarminge/next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function IndexPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div>
      <h1>next-themes Example</h1>
      <select value={theme} onChange={e => setTheme(e.target.value)} data-test-id="theme-selector">
        <option value="system">System</option>
        {mounted && (
          <>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </>
        )}
      </select>

      <br />
      <br />

      <div>
        <Link href="/dark">
          <a>Forced Dark Page</a>
        </Link>{' '}
        •{' '}
        <Link href="/light">
          <a>Forced Light Page</a>
        </Link>
      </div>
    </div>
  )
}
