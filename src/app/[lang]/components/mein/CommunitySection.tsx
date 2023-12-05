import Image from "next/image"
import mageImg from "../../assets/mage.png";

const CommunitySection = ({ communityMain }) => {
  return (
    <section
    className='max-w-container mdl:mx-10 xl:mx-auto my-[56px]'
    >
        <div
        className="flex flex-col lg:flex-row gap-5"
        >
            <div
            className="basis-1/2 flex flex-col gap-[32px] mdl:gap-0 mdl:justify-between mx-4 mdl:mx-0"
            >
                <div
                className="flex flex-col gap-[32px] ml-4 xl:ml-0"
                >
                    <h2
                    className="text-xs mdl:text-base font-medium text-accentBg ml-[4px]"
                    >
                        {communityMain.title}
                    </h2>
                    <blockquote
                    className="text-[32px] mdl:text-[68px] font-base text-accentBg leading-tight ml-[4px]"
                    >
                        {communityMain.quote}
                    </blockquote>
                </div>
                <div
                className="flex gap-2"
                >
                    <Image
                    className="basis-1/5 hidden mdl:flex"
                    width={50}
                    height={50}
                    src={"../../icon.svg"}
                    alt="logo"
                    />
                    <p
                    className="text-accentBg text-[18px] font-medium basis-4/5 ml-4 xl:ml-0"
                    >
                        {communityMain.description}
                    </p>
                </div>
            </div>
            <div
            className="basis-1/2 flex items-center justify-center mdl:pt-0 lg:pt-[170px] relative"
            >
                <Image 
                className="rounded-xl -rotate-12 w-[250px] sm:w-[300px] xl:w-[400px]"
                width={400}
                height={400}
                src={mageImg}
                alt="mage"
                />
                <Image 
                className=" absolute rounded-xl -rotate-6 w-[250px] sm:w-[300px] xl:w-[400px]"
                width={400}
                height={400}
                src={mageImg}
                alt="mage"
                />
                <Image 
                className=" absolute rounded-xl -rotate-8 w-[250px] sm:w-[300px] xl:w-[400px]"
                width={400}
                height={400}
                src={mageImg}
                alt="mage"
                />
                <Image 
                className="mdl:hidden absolute rounded-xl z-20 bottom-1 left-[5%] md:left-[20%]"
                width={100}
                height={100}
                src={"../../icon.svg"}
                alt="logo"
                />
            </div>
        </div>
    </section>
  )
}

export default CommunitySection