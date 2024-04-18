import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../lib/dictionaries';
import NewsContainer from '@/components/news/client-container/NewsContainer';


export default function NewsPage({params: { lang }}: {params: { lang: Locale }}) {
    return (
        <section
        className='max-w-container mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px] px-4'
        >
            <NewsContainer lang={lang}/>
        </section>
    )
}