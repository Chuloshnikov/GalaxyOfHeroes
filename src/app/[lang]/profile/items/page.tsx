import ProfileLayout from '@/components/profile/ProfileLayout';
import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../../lib/dictionaries';
import ItemsPage from '@/components/Items/ItemsPage';

export default async function Items({params: { lang }}: {params: { lang: Locale }}) {
    const { profilePage } = await getDictionary(lang);
    return (
        <section
        className="max-w-container mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px] px-4"
        >
            <div
            className=''
            >
                <h1
                className='text-[28px] mdl:text-[36px] lg:text-[46px] text-accentBg font-medium ml-4 xl:ml-0'
                >
                  {profilePage.title}
                </h1>
                <p
                className='text-[16px] mdl:text-[20px] lg:text-[22px] text-accentBg font-medium ml-4 xl:ml-0'
                >
                  {profilePage.description}
                </p>
                <ProfileLayout lang={lang} text={profilePage}>
                       <ItemsPage text={"text"} lang={lang}/>
                </ProfileLayout>
            </div>
        </section>
    )
}