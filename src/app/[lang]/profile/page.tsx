import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../lib/dictionaries';
import ProfilePage from '@/components/profile/ProfilePage';
import ProfileLayout from '@/components/profile/ProfileLayout';



export default async function Profile({params: { lang }}: {params: { lang: Locale }}) {
    const { profilePage, auth } = await getDictionary(lang);

    return (
        <section
        className='max-w-container mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px] px-4'
        >
            <div>
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
                        <ProfilePage lang={lang} text={profilePage}/>
                </ProfileLayout>
            </div>
        </section>
    )
}