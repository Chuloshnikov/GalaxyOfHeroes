

import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';


export default async function Dashboard({
    params: [ lang ]
}: {
    params: { lang: Locale }
}) {
    const { page, auth } = await getDictionary(lang);
    const session = await getServerSession(authOptions);
    const user = session?.user

    return (
        <section>
            <div>
                <h1>{page.dashboard.title}</h1>
                <p>{page.dashboard.description}</p>
                <div>
                    <pre>
                        <code>{JSON.stringify({ name: user?.name}, null, 2)}</code>
                    </pre>
                </div>
            </div>
        </section>
    )
}