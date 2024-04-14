import  {getDictionary } from "../../../../lib/dictionaries";
import { Locale } from '../../../../../18n.config';
import ProductPage from "@/components/products/ProductPage";

export default async function Product({params: { lang }}: {params: { lang: Locale }}) {
  const { bestSellers } = await getDictionary(lang);

  return (
    <section
    className="max-w-contentContainer mx-auto min-h-max"
    >
      <ProductPage lang={lang} text={bestSellers}/>
    </section>
  )
}
