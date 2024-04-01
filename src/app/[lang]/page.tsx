import { getDictionary } from '../../lib/dictionaries';
import Hero from '../../components/mein/Hero';
import type { Metadata } from 'next';
import ProductSection from '../../components/mein/ProductSection';
import NewsSection from '../../components/mein/NewsSection';
import CommunitySection from '../../components/mein/CommunitySection';

import getData from "../../../data/data";
import getNews from "../../../data/newsData";
import CategoriesSection from '../../components/mein/CategoriesSection';
import { Locale } from '../../../18n.config';


export const metadata: Metadata = {
  title: 'Galaxy of Heroes',
  description: 'Galaxy of Heroes: Your Ultimate Comic Book Haven',
  icons: {
    icon: '/icon.svg',
  }
}

export default async function Home({params: { lang }}: {params: { lang: Locale }}) {

  const { hero, bestSellers, communityMain, mainNews, newProducts, categoriesMain } = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col">
     <Hero hero={hero}/>
     <ProductSection lang={lang} sectionText={bestSellers} data={getData()}/>
     <CommunitySection sectionText={communityMain}/>
     <CategoriesSection sectionText={categoriesMain}/>
     <NewsSection sectionText={mainNews} data={getNews()}/>
     <ProductSection lang={lang} sectionText={newProducts} data={getData()}/>
    </main>
  )
}
