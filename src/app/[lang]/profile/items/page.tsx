import ProfileLayout from '@/components/profile/ProfileLayout';
import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../../lib/dictionaries';

export default async function ItemsPage({params: { lang }}: {params: { lang: Locale }}) {
    const { profilePage } = await getDictionary(lang);
    return (
        <section
        className="mt-8"
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
                        items
                </ProfileLayout>
            </div>
        </section>
    )
}