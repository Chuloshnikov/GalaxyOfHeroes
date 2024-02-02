import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../lib/dictionaries';
import ProfilePage from '@/components/profile/ProfilePage';



export default async function Profile({params: { lang }}: {params: { lang: Locale }}) {
    const { profilePage, auth } = await getDictionary(lang);

    return (
        <section>
            <div>
                <h1>{profilePage.title}</h1>
                <p>{profilePage.description}</p>
                <ProfilePage/>
            </div>
        </section>
    )
}