import { getDictionary } from './lib/dictionaries';
import Hero from './components/mein/Hero';
import type { Metadata } from 'next';
import ProductSection from './components/mein/ProductSection';
import getData from "../../../data/data";
import CommunitySection from './components/mein/CommunitySection';

export const metadata: Metadata = {
  title: 'Galaxy of Heroes',
  description: 'Galaxy of Heroes: Your Ultimate Comic Book Haven',
  icons: {
    icon: '/icon.svg',
  }
}

export default async function Home({params: { lang }}) {

  const { hero, bestSellers, communityMain } = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col">
     <Hero hero={hero}/>
     <ProductSection bestSellers={bestSellers} data={getData()}/>
     <CommunitySection communityMain={communityMain}/>
    </main>
  )
}
