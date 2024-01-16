import Image from "next/image";
import Link from "next/link";
import horrorImg from "../../assets/castle.png";
import superheroImg from "../../assets/soperhero.png";
import mangaImg from "../../assets/manga.png";

const CategoriesSection = ({ sectionText }) => {
  return (
    <section
    className='max-w-contentContainer mdl:mx-10 xl:mx-auto my-[12px] lg:my-[56px]'
    >
         <h2
            className='text-[28px] mdl:text-[36px] lg:text-[46px] text-accentBg font-medium ml-4 xl:ml-0'
            >
                {sectionText.title}
        </h2>
        <div
        className="max-w-container flex flex-col gap-2 mx-4 xl:mx-0"
        >
            <div
            className="w-full flex gap-2 mt-[34px] lg:mt-[40px]"
            >
                    <Link
                    className="relative block max-w-[464px] w-full rounded-2xl overflow-hidden"
                    href={"/"}
                    >
                        <Image 
                        src={superheroImg}
                        height={800}
                        width={1200}
                        className="object-fit"
                        alt="superhero"
                        />
                        <span
                        className="absolute top-1 left-1 py-1 px-2 text-mainBg font-medium"
                        >
                            {sectionText.nav[0]}
                        </span>
                    </Link>
                    <Link
                    className="relative block max-h-[464px] w-full rounded-2xl overflow-hidden"
                    href={"/"}
                    >
                        <Image 
                        src={horrorImg}
                        height={800}
                        width={1200}
                        className="object-fit"
                        alt="horror"
                        />
                        <span
                        className="absolute top-1 left-1 py-1 px-2 text-mainBg font-medium"
                        >
                            {sectionText.nav[1]}
                        </span>
                    </Link>
            </div>
            <div
            className="w-full"
            >
                <Link
                className="relative block w-full max-h-[454px] rounded-2xl overflow-hidden"
                href={"/"}
                >
                    <Image 
                    src={mangaImg}
                    height={800}
                    width={1200}
                    alt="manga"
                    />
                    <span
                        className="absolute top-1 left-1 py-1 px-2 text-mainBg font-medium"
                        >
                            {sectionText.nav[2]}
                        </span>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CategoriesSection;