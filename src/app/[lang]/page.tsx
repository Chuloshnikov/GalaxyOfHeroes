import { getDictionary } from './lib/dictionaries';
import Hero from './components/mein/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galaxy of Heroes',
  description: 'Galaxy of Heroes: Your Ultimate Comic Book Haven',
  icons: {
    icon: '/icon.svg',
  }
}

export default async function Home({params: { lang }}) {

  const { hero } = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <Hero hero={hero}/>
    </main>
  )
}
