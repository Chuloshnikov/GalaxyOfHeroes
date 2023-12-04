import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Providers from './providers';



const workS = Work_Sans({ subsets: ['latin'], variable: '--var-work' })

export const metadata: Metadata = {
  title: 'Galaxy of Heroes',
  description: 'Galaxy of Heroes: Your Ultimate Comic Book Haven',
  icons: {
    icon: '/favicon.svg',
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }, {lang: 'ua'}]
}


export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {lang: Locale}
}) {
  return (
    <html lang={params.lang}>
      <body className={workS.variable}>
        <Providers>
          <Navbar lang={params.lang}/>
              {children}
          <Footer lang={params.lang}/>
        </Providers>
      </body>
    </html>
  )
}
