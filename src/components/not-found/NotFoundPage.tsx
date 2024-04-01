import Link from 'next/link';
import Image from 'next/image';
import joker from "../../assets/joker.png";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
        <div className=' flex flex-col items-center justify-center text-center'>
            <div className='relative mt-[5%]'>
                <h1 className='text-9xl font-semibold text-accentBg'>404</h1>
                <Image className='absolute top-10 left-[32%]' src={joker} width={80} height={80} alt="joker"/>
            </div>
            <p className='text-2xl font-medium mt-4 text-accentBg'>Lost in Narnia</p>
            <p className='text-lg text-accentBg2 px-2'>The page you are looking for does not exist or has been removed.</p>
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

export default NotFoundPage