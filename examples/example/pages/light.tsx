import Link from 'next/link'

export default function Page() {
  return (
    <Link href="/">
      <a>Go back home</a>
    </Link>
  )
}

Page.theme = 'light'
