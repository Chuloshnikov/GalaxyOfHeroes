import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';


const workS = Work_Sans({ subsets: ['latin'], variable: '--var-work' })

export const metadata: Metadata = {
  title: 'Galaxy of Heroes',
  description: 'Galaxy of Heroes: Your Ultimate Comic Book Haven',
  icons: {
    icon: '/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}