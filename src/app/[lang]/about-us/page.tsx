import { Locale } from '../../../../18n.config';
import { getDictionary } from '../../../lib/dictionaries';
import AboutUsPage from '@/components/about-us/AboutUsPage';


export default async function AboutUs({params: { lang }}: {params: { lang: Locale }}) {

    const { aboutUsPage } = await getDictionary(lang);

    return (
        <section
        className='max-w-container mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px] px-4'
        >
            <AboutUsPage lang={lang} text={aboutUsPage}/>
        </section>
    )
}