
import Link from 'next/link';

export default async function NotFound() {


  return (
    <div className="flex min-h-screen flex-col">
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-9xl font-semibold text-accentBg mt-[5%]'>404</h1>
            <p className='text-2xl font-medium mt-4 text-accentBg'>Lost in Narnia</p>
            <p className='text-lg text-accentBg2'>The page you are looking for does not exist or has been removed.</p>
        <Link 
        className='text-mainBg font-semibold text-lg py-2 px-12 rounded-lg bg-accentBg mt-8'
        href="/"
        >
            Go back
        </Link>
        </div>
    </div>
  )
}