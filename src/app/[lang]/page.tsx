import { Locale } from '../../../i18n.config';
import { getDictionary } from '../../lib/dictionary';
import Hero from '@/components/mein/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galaxy of Heroes',
  description: 'Galaxy of Heroes: Your Ultimate Comic Book Haven',
  icons: {
    icon: '/logo.svg',
  }
}

export default async function Home({
  params: { lang }
} : {
  params: { lang: Locate }
}) {

  const { hero } = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <Hero hero={hero}/>
    </main>
  )
}
