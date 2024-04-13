import ProductsPanel from '@/components/products/ProductsPanel';
import { Locale } from '../../../../18n.config';
import  {getDictionary } from "../../../lib/dictionaries";



export default async function Products({params: { lang }}: {params: { lang: Locale }}) {
    const { categoriesNavigation } = await getDictionary(lang);
    return (
        <section className="max-w-contentContainer mx-auto min-h-max">
            <ProductsPanel lang={lang} navigation={categoriesNavigation}/>
        </section>
    )
}