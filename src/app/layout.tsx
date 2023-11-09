import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css';
import Layout from "@/components/Layout";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


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
      <body className={workS.variable}>
        <Layout>
          <Navbar/>
          {children}
          <Footer/>
        </Layout>
      </body>
    </html>
  )
}
