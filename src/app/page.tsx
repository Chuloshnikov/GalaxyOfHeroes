import Intro from "@/components/Intro";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galaxy of Heroes',
  description: 'Galaxy of Heroes: Your Ultimate Comic Book Haven',
  icons: {
    icon: '/logo.svg',
  }
}

function HomePage() {
  return (
    <>
    <Intro/>
    </>
  )
}

export default HomePage;