import Image from "next/image";
import cowboy from "../../assets/cowboy.png";
import dsknight from "../../assets/dsknight.png";
import satori from "../../assets/satori.png";
import samurai from "../../assets/samurai.png";
import aboutusknight from "../../assets/aboutusknight.png";
import cybergirl from "../../assets/cybergirl.png";
import deathstroke from "../../assets/deathstrokefigutre.png";
import dsstatue from "../../assets/dsstatue.png";
import redhoodjoker from "../../assets/redhoodjoker.png";
import squad from "../../assets/squad.png";
import venom from "../../assets/venom.png";
import parker from "../../assets/parker.png";
import stubs from "../../assets/stubs.png";
import dartvader from "../../assets/dartvader.png";
import bond from "../../assets/bond.png";

const AboutUsPage = ({lang, text }: {lang: any, text: any}) => {
  return (
    <div className="max-w-full mb-16">
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
            <div className="text-center flex flex-col gap-8">
                <h2 className="text-3xl mdl:text-4xl xl:text-5xl text-accentBg font-medium px-2">{text.aboutUsTitle}</h2>
                <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.aboutUsText}</p>
            </div>
            <div className="max-w-[600px] max-h-[400px] rounded-xl relative flex justify-center items-center">
                <Image className="rounded-xl" src={aboutusknight} width={800} height={400} alt="knightimage"/>
                <Image className="rounded-xl absolute -bottom-2 -left-2 border-2 border-accentBg" src={dsstatue} width={100} height={100} alt="knightimage"/>
            </div>
        </div>
        {/* our missin section */}
        <div className="max-w-full mt-12 flex flex-col gap-8 text-center justify-center items-center">
            <h2 className="text-3xl mdl:text-4xl xl:text-5xl text-accentBg font-medium px-2">{text.ourMissionTitle}</h2>
            <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.ourMissionText}</p>
        </div>
        {/* Terms of cooperation*/}
        <div className="max-w-full mt-12 flex flex-col xl:flex-row justify-center items-center gap-16">
            <div className="text-center flex flex-col gap-8">
                <h2 className="text-3xl mdl:text-4xl xl:text-5xl text-accentBg font-medium px-2">{text.termsOfCooperationTitle}</h2>
                <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.termsOfCooperationUpText}</p>
                <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.termsOfCooperationDownText}</p>
            </div>
            <div className="rounded-xl relative">
                <Image className="z-5 rounded-xl" src={redhoodjoker} width={250} height={400} alt="redhood"/>
                <Image className="-z-10 rounded-xl absolute -right-6 -top-4 sml:-right-16" src={squad} width={100} height={200} alt="redhood"/>
            </div>
        </div>
        {/* Join us section */}
        <div className="max-w-full mt-12 flex flex-col justify-center items-center gap-12">
            <div className="text-center flex flex-col gap-8">
                <h2 className="text-3xl mdl:text-4xl xl:text-5xl text-accentBg font-medium px-2">{text.joinUsTitle}</h2>
                <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.joinUsUpText}</p>
                <p className="text-accentBg font-medium px-2 max-w-[500px]">{text.joinUsDownText}</p>
            </div>
            <div className="rounded-xl relative px-4">
                <Image className="-z-5 rounded-xl" src={venom} width={600} height={400} alt="redhood"/>
                <Image className="rotate-12 z-5 rounded-xl absolute right-6 top-4" src={parker} width={100} height={200} alt="redhood"/>
                <Image className="-rotate-12 z-10 rounded-xl absolute left-6 top-4" src={bond} width={100} height={200} alt="redhood"/>
                <Image className="rotate-12 z-5 rounded-xl absolute right-6 top-20" src={dartvader} width={100} height={200} alt="redhood"/>
                <Image className="-rotate-12 z-0 rounded-xl absolute left-6 top-20" src={stubs} width={100} height={200} alt="redhood"/>
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage;