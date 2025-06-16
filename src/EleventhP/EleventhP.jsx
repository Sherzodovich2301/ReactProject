import { useTranslation } from "react-i18next"
import IMAGES from "../Img/image 18.png"
import IMAGES1 from "../Img/image 19.png"
import IMAGES2 from "../Img/image 20.png"




export default function EleventhP() {
    const { t } = useTranslation()
    return (
        <section id="unbirP">
            <div className="container grid xl:max-w-[1200px] pr-[-100px] xl:grid-cols-3 sm:grid-cols-1 md:max-w-[800px] sm:max-w-[600px] sem:max-w-[400px] m-auto mt-[-40px]">
                <article className="">
                    <img className="xl:w-[340px] xl:h-[286px] md:h-[500px] sem:h-[270px] md:w-[800px] sem:w-[380px] sm:w-[600px]" src={IMAGES} alt="" />
                    <article className=" md:w-[760px] xl:w-[317px] sem:w-[350px] sm:w-[560px] translate-y-[-100px] translate-x-[10px] md:translate-x-[10px] sem:translate-x-[15px] h-[176px] left-[25px] top-[180px] rounded-[10px] shadow-md bg-gray-100">
                        <p className="pl-[20px] pr-[20px] lg:text-[18px] lg:pt-[20px] sem:pt-[40px] md:text-[25px]  text-center text-[18px] font-[600] leading-[24px] pt-[20px]">
                           {t(`Tenth.title12`)}
                        </p>
                        <p className="cursor-pointer lg:text-[18px] md:text-[25px] text-center text-[18px] text-green-700 font-[600] leading-[24px] mt-[30px]">
                            {t(`Tenth.title2`)}
                        </p>
                    </article>
                </article>
                
                <article className="">
                    <img className="xl:w-[340px] xl:h-[286px] md:h-[500px] sem:h-[270px] md:w-[800px] sem:w-[380px] sm:w-[600px]" src={IMAGES1} alt="" />
                    <article className="md:w-[760px] xl:w-[317px] sem:w-[350px] sm:w-[560px] translate-y-[-100px] translate-x-[10px] md:translate-x-[10px] sem:translate-x-[15px] h-[176px] left-[25px] rounded-[10px] shadow-md bg-gray-100">
                        <p className="lg:pt-[20px] sem:pt-[40px] lg:text-[18px] md:text-[25px] text-center text-[18px] font-[600] leading-[24px] pt-[20px]">
                            {t(`Tenth.title13`)}
                        </p>
                        <p className="cursor-pointer lg:text-[18px] md:text-[25px] text-center text-[18px] text-green-700 font-[600] leading-[24px] mt-[30px]">
                            {t(`Tenth.title2`)}
                        </p>
                    </article>
                </article>
    
                <article className="">
                    <img className="xl:w-[340px] xl:h-[286px] md:h-[500px] sem:h-[270px] md:w-[800px] sem:w-[380px] sm:w-[600px]" src={IMAGES2} alt="" />
                    <article className="md:w-[760px] xl:w-[317px] sem:w-[350px] sm:w-[560px] translate-y-[-100px] translate-x-[10px] md:translate-x-[10px] sem:translate-x-[15px] h-[176px] left-[25px] top-[180px] rounded-[10px] shadow-md bg-gray-100">
                        <p className="pl-[20px] pr-[20px] lg:pt-[20px] sem:pt-[40px] lg:text-[18px] md:text-[25px] text-center text-[18px] font-[600] leading-[24px] pt-[20px]">
                            {t(`Tenth.title12`)}
                        </p>
                        <p className="cursor-pointer lg:text-[18px] md:text-[25px] text-center text-[18px] text-green-700 font-[600] leading-[24px] mt-[30px]">
                            {t(`Tenth.title2`)}
                        </p>
                    </article>
                </article>
            </div>
        </section>
)
}
  