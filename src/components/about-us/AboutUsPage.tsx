import Image from "next/image";
import cowboy from "../../assets/cowboy.png";
import dsknight from "../../assets/dsknight.png";
import satori from "../../assets/satori.png";
import samurai from "../../assets/samurai.png";
import aboutusknight from "../../assets/aboutusknight.png";
import cybergirl from "../../assets/cybergirl.png";
import deathstroke from "../../assets/deathstrokefigutre.png";
import dsstatue from "../../assets/dsstatue.png";

const AboutUsPage = ({lang, text }: {lang: any, text: any}) => {
  return (
    <div className="max-w-full">
        {/*Title section*/}
        <div className="flex flex-col-reverse mdl:flex-row gap-10">
            <div className="flex gap-2 justify-center">
                <div className="flex flex-col gap-2 mt-12">
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
        {/*about us section*/}
        <div className="max-w-full mt-12 flex flex-col xl:flex-row justify-center items-center gap-10">
            <div className="p-4 text-center flex flex-col gap-8">
                <h2 className="text-3xl mdl:text-4xl xl:text-5xl text-accentBg font-medium px-2">{text.aboutUsTitle}</h2>
                <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.aboutUsText}</p>
            </div>
            <div className="max-w-[600px] max-h-[400px] rounded-xl relative flex justify-center items-center">
                <Image className="rounded-xl" src={aboutusknight} width={800} height={400} alt="knightimage"/>
                <Image className="rounded-xl absolute -bottom-2 -left-2 border-2 border-accentBg" src={dsstatue} width={100} height={100} alt="knightimage"/>
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage;