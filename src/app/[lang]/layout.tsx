import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css';
import Layout from "@/components/Layout";
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Locale, i18n } from '../../../i18n.config';


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
        <Layout>
          <Navbar lang={params.lang}/>
            <main>
              {children}
            </main>
          <Footer lang={params.lang}/>
        </Layout>
      </body>
    </html>
  )
}
