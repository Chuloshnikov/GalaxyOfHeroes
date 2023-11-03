import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workS = Work_Sans({ subsets: ['latin'], variable: '--var-work' })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workS.variable}>{children}</body>
    </html>
  )
}
