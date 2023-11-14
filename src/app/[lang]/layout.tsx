import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Locale, i18n } from '../../../i18n.config';
import Providers from './providers';



const workS = Work_Sans({ subsets: ['latin'], variable: '--var-work' })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: [lang: Locale]
}) {
  return (
    <html lang={params.lang}>
      <body className={workS.variable}>
        <Providers>
          <Navbar lang={params.lang}/>
            <main>
              {children}
            </main>
          <Footer lang={params.lang}/>
        </Providers>
      </body>
    </html>
  )
}
