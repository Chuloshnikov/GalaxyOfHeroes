import { Locale } from '@/i18n.config';
import { getDictionary } from '../../../lib/dictionaries';
import ContactsPage from '@/components/contacts/ContactsPage';
import { Locale } from '../../../../18n.config';

export default async function Contacts({params: { lang }}: {params: { lang: Locale }}) {

    const { contactsPage } = await getDictionary(lang);
    
    return (
        <section className='max-w-container mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px] px-4'>
            <ContactsPage lang={lang} text={contactsPage}/>
        </section>
    )
}