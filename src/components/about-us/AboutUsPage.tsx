import Image from "next/image";
import cowboy from "../../assets/cowboy.png";
import dsknight from "../../assets/dsknight.png";
import satori from "../../assets/satori.png";
import samurai from "../../assets/samurai.png";

const AboutUsPage = ({lang, text }: {lang: any, text: any}) => {
  return (
    <div className="max-w-full">
        <div className="flex flex-col-reverse mdl:flex-row gap-10">
            <div className="flex gap-2 justify-center">
                <div className="flex flex-col gap-2 mt-8">
                    <div className="rounded-xl">
                        <Image className="rounded-xl w-[150px] mdl:w-[200px]" src={dsknight} width={200} height={300} alt="cowboy"/>
                    </div>
                    <div className="rounded-xl hidden mdl:block">
                    <Image className="rounded-xl" src={cowboy} width={200} height={300} alt="cowboy"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="rounded-xl">
                        <Image className="rounded-xl w-[150px] mdl:w-[200px]" src={samurai} width={200} height={300} alt="cowboy"/>
                    </div>
                    <div className="rounded-xl">
                        <Image className="rounded-xl hidden mdl:block" src={satori} width={200} height={300} alt="cowboy"/>
                    </div>
                </div>
            </div>
            <div className="mt-8 lg:mt-20 max-w-[650px] flex flex-col gap-8 text-center mdl:text-left">
                <h1 className="text-3xl mdl:text-4xl xl:text-5xl  text-accentBg font-medium px-2">{text.title}.</h1>
                <p className="text-accentBg font-medium px-2 max-w-[450px]">{text.subTitle}</p>
            </div>
            
        </div>
    </div>
  )
}

export default AboutUsPage;